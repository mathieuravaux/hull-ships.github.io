'use strict';
/*global require, module, Hull, console*/

// NOT COMPLETE
// NOT COMPLETE 
// NOT COMPLETE 

var assign = require('object-assign');
var Emitter = require('events').EventEmitter;
var http = require('superagent');
var Promise = require('es6-promise').Promise;


/**
 * The engine is a condensed and simplified version of the Flux architecture,
 * It combines Store, Dispatcher and Actions into a single file, ensuring
 * top-down data flows that prevent bugs and make the architecture easy to 
 * understand
 */

var Constants = {
  INTRODUCTION_STEP: 'introduction_step',
  RESULT_STEP: 'result_step',
};

var ACTIONS = [
  'signup',
  'login',
  'logout',
  'linkIdentity',
  'unlinkIdentity'
];

var STATUS = {
  login: '_isLogingIn',
  logout: '_isLogingOut',
  linkIdentity: '_isLinking',
  unlinkIdentity: '_isUnlinking'
};

var CHANGE_EVENT='change'

function Engine(deployment) {
  this.Constants = Constants;


  // Subscribe to every Hull user event
  Hull.on('hull.user.*', (me)=> {
    this._user = me;
    console.log('User Changed', me);
    this.emitChange();
  });

  this.resetState();
  this.fetchShips();
}

var UserIdentityActions = {
  login: function(provider) {
    this.perform('login', provider);
  },

  logout: function() {
    Hull.logout();
  },

  linkIdentity: function(provider) {
    this.perform('linkIdentity', provider);
  },

  unlinkIdentity: function(provider) {
    this.perform('unlinkIdentity', provider);
  },

  signup: function(user) {
    return Hull.signup(user);
  }
}

var Dispatcher = {
  addChangeListener: function(listener) {this.addListener(CHANGE_EVENT, listener);},
  removeChangeListener: function(listener) {this.removeListener(CHANGE_EVENT, listener);},
  emitChange: function(message) {this.emit(CHANGE_EVENT, message); },
  fetchShips: function(){
    http.get('/ships.json', (err, res)=> {
      if (res && res.ok) {
        this._ships=res.body;
        this.emitChange();
      }
    });
  },
  getActions: function() {
    if (this._actions) { return this._actions; }
    var instance = this;
    this._actions = ACTIONS.reduce(function(m, a) {
      m[a] = instance[a].bind(instance);
      return m;
    }, {});
    return this._actions;
  }
}

var HullBridge = {
  resetUser: function() {
    this._user = Hull.currentUser();
    var identities = {}
    if (this._user) {
      this._user.identities.forEach(function(identity) {
        identities[identity.provider] = true;
      });
    }
    this._identities = identities;
  },
  perform: function(method, provider) {
    var s = STATUS[method];

    this[s] = provider;
    this._error = null;

    this.emitChange();

    var options = { provider: provider };

    var promise = Hull[method](options);
    promise.then(()=>{
      this.resetUser();
      this._error = null;
    }, (error)=> {
      error.provider = provider;
      this._error = error;
    })
    .then(()=>{
      this[s] = false;
      this.emitChange();
    })
    .done();

    return promise;
  }
}

assign(Engine.prototype, Emitter.prototype, Dispatcher, HullBridge, UserIdentityActions,{
  resetState: function(){
    this._ships=[];
    this.resetUser();
    this.emitChange();
  },
  getState: function() {
    var state = {
      user : this._user,
      ships: this._ships
    };
    return state;
  }
});

module.exports = Engine;

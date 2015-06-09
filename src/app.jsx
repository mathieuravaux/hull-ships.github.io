// This is where our actual App begings.
// It's used by:
// - ship.js to boot from an Embedded HTML Import
// - index.js to boot directly for a Standalone page

// Our boilerplate uses React.
// We love it, and we thing you will too.
import React      from 'react';

// The engine contains all the logic and state for the app
import Engine     from './lib/engine';

// Entry point for the Library
// Dont start the app from here
// Call App.start(...) from your script to boot

var Ship = React.createClass({
  render: function() {
    var img = this.props.url.replace(/manifest\.json/,this.props.manifest.picture);
    var url = this.props.url.replace(/manifest\.json/,'');
    var description = this.props.manifest.description;
    var name = this.props.manifest.name;
    return (
      <div className="col-md-3 col-sm-4" style={{display:'flex'}}>
          <div className="panel container-fluid">
            <a href={url}><img className="img-responsive" src={img}/></a>
            <div className="panel-body" style={{minHeight:100}}>
              <div className="mt-025">
                <h4 className="media-heading"><a href={url}>{name}</a></h4>
              </div>
              <p style={{minHeight:40}}>{description}</p>
            </div>
          </div>
      </div>
    );
  }
});

var CTAButton = React.createClass({
  renderAnonymous: function(){
    return (
      <a className="btn btn-lg btn-rounded btn-primary btn-block" onClick={this.props.actions.login.bind(this,'facebook')}>Create a free account now</a>
    );
  },
  renderUser : function(){
    return <div>
      <p className="text-center">
        Welcome back, {this.props.user.name}
        <a className="btn btn-lg btn-rounded btn-success btn-block" target="_blank" href="http://dashboard.hullapp.io">Go to your dashboard</a>
        <small><a href="#" onClick={this.props.actions.logout}>Logout</a></small>
      </p>
    </div>
  },
  render: function() {
    var content = (this.props.user && this.props.user.name)?this.renderUser():this.renderAnonymous();
    return (
      <div className="row">
        <div className="col-sm-4 col-sm-offset-4">
          {content}
        </div>
      </div>
    )
  }

});

var App = React.createClass({
  propTypes: {
    engine: React.PropTypes.object.isRequired,
  },

  getInitialState: function() {
    return this.props.engine.getState();
  },

  componentWillMount: function() {
    this.props.engine.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.props.engine.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(this.props.engine.getState());
  },

  render: function() {
    var ships = this.state.ships.map(function(ship){
      return <Ship key={`ship-${ship.manifest.name}`} {...ship}/>
    });
    return (
      <div className="container">
        <div className='' style={{display:'flex', flexWrap:'wrap'}}>{ships}</div>
        <div className='row'><CTAButton {...this.state} actions={this.props.engine.getActions()}/></div>
      </div>
    )
  },

  statics: {
    // Expose a static entry point to boot the ship
    start : function(element, deployment){
      var engine = new Engine(deployment);
      var app = <App engine={engine}/>;
      React.render(app, element);
    }
  }
});


module.exports = App;

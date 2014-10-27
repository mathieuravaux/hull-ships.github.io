var Promise = require('es6-promise').Promise;
var github = require('octonode').client();
var http = require('superagent');

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-gh-pages');
  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({

    'build' : {
      options: {
        org: 'hull-ships'
      }
    },

    'gh-pages': {
      options: {
        base: 'registry'
      },
      src: ['**']
    }

  });

  grunt.registerTask('build', function() {
    var done = this.async();
    var org = this.options().org;
    var repos = ["orgs", org, "repos"].join("/");

    var ships = [];

    function getShipManifest(repo) {
      return new Promise(function(resolve, reject) {
        var manifestUrl = "https://" + org + ".github.io/" + repo.name + "/manifest.json";
        http.get(manifestUrl, function(res) {
          if (res.ok) {
            console.warn(res.body.name, "-", res.body.version);
            resolve({ url: manifestUrl, manifest: res.body });
          } else {
            resolve();
          }
        })
      })
    }

    github.get(repos, function(err, status, body, headers) {
      if (err) {
        done();
      } else {
        body.map(function(repo) {
          ships.push(getShipManifest(repo));
        });
        Promise.all(ships).then(function(manifests) {
          var registry = [];
          manifests.map(function(m) {
            if (m) registry.push(m);
          });
          grunt.file.write('registry/ships.json', JSON.stringify(registry, " ", 2));
          grunt.file.write('registry/ships.json.js', "window['hull-ships-registry:" + org + "'](" + JSON.stringify(registry) + ");");
          done();
        }, function() {
          done();
        });
      }
    });


  });

  grunt.registerTask('deploy', ['build', 'gh-pages']);
};

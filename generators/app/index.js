'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var dsj = require('directory-structure-json');
var fs = require('fs');
var baseTemplatePath = __dirname + "/templates";

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the pioneering ' + chalk.red('generator-aem-automation') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'siteName',
      message: 'Would you like to name your site?',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    console.log("baseTemplatePath: " + baseTemplatePath)
    dsj.getStructure(fs, baseTemplatePath, function (err, structure, total) {
      if (err) console.log(err);

      console.log('there are a total of: ', total.folders, ' folders and ', total.files, ' files');
      console.log('the structure looks like: ', JSON.stringify(structure, null, 4));
    });
  },

  install: function () {
    this.installDependencies();
  }
});

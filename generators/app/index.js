'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var dsj = require('directory-structure-json');
var fs = require('fs');
var baseTemplatePath = __dirname + "/templates-real";
var baseDestinationPath = __dirname + "/dist";
var baseStructure = [];
var find = '\<%= siteName %\>';
var re = new RegExp(find, 'g');
module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the pioneering ' + chalk.red('generator-aem-automation') + ' generator!'
    ));

    var prompts = [{
      name: 'siteName',
      message: 'Would you like to name your site?'
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    console.log("templatePath: " + this.templatePath());
      console.log("destinationPath: " + baseDestinationPath);
      var _this = this;

    //_this.fs.copyTpl(baseTemplatePath,baseDestinationPath,_this.props);
        dsj.getStructure(fs, _this.templatePath(), function (err, structure, total) {
            if (err) console.log(err);
            //console.log("You said: " + _this.props.siteName)

            dsj.traverseStructure(structure, _this.templatePath(),
                function (folder, path) {
                    var newFolderName = folder.name.replace(re,_this.props.siteName);
                    var newPath = path.substring(_this.templatePath().length).replace(re,_this.props.siteName);
                    var relativeFolderPath = baseDestinationPath + newPath + "/" + newFolderName;
                    console.log("relativeFolderPath: " + relativeFolderPath)
                    if (!fs.existsSync(relativeFolderPath)){
                        //fs.mkdirSync(relativeFolderPath);
                    }
                },
                function (file, path) {
                    var fileTemplatePath = path + "/" + file.name;
                    //console.log("fileTemplatePath: " + path + "/" + file.name)
                    var newFileName  = file.name.replace(re,_this.props.siteName);
                    var relativeFilePath = baseDestinationPath  + path.substring(_this.templatePath().length).replace(re,_this.props.siteName) + "/" + newFileName;
                    console.log("relativeFilePath: " + relativeFilePath)
                    if(file.name.startsWith("__")){
                        //_this.fs.copyTpl(fileTemplatePath, relativeFilePath, _this.props);
                    }else{
                        //_this.fs.copy(fileTemplatePath, relativeFilePath);
                    }

                });
            console.log('there are a total of: ', total.folders, ' folders and ', total.files, ' files');
            //console.log('the structure looks like: ', JSON.stringify(structure, null, 4));
        });


  },

  install: function () {
    this.installDependencies();
  }
});

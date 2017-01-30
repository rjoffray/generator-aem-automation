(function (templateApp) {
    'use strict';

    templateApp.controller('angularhelloworld-controller', angularhelloworldController);
    angularhelloworldController.$inject = ["$log", "$http", "ang$"];

    function angularhelloworldController($log, $http, ang$) {
        this.hello = "Nothing Sent from sightly";
    }


})(angular.module(alg.cms.template.constants.appName));

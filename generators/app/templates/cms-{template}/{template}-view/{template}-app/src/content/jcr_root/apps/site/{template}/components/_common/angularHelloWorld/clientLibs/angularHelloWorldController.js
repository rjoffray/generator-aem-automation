(function (templateApp) {
    'use strict';

    templateApp.controller('angularhelloworld-controller', angularhelloworldController);
    angularhelloworldController.$inject = ["$log", "$http", "ang$"];

    function angularhelloworldController($log, $http, ang$) {
        this.hello = "Nothing Sent from sightly";



        $http.get("http://www.travimp.com/api/v2/travimp/header.json")
            .then(function successCallback(response) {
            //var html = ang$(response.header)
            $log.info(response.header)
        }, function errorCallback(response) {
            $log.info(response)
        });


    }


})(angular.module(alg.cms.template.constants.appName));

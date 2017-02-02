(function (<%= siteName %>App) {
    'use strict';

<%= siteName %>App.controller('angularhelloworld-controller', angularhelloworldController);
    angularhelloworldController.$inject = ["$log", "$http", "ang$"];

    function angularhelloworldController($log, $http, ang$) {
        this.hello = "Nothing Sent from sightly";
    }


})(angular.module(alg.cms.<%= siteName %>.constants.appName));

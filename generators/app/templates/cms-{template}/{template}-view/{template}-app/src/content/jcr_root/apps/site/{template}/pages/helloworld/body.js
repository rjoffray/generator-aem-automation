"use strict";

var global = this;

use([], function () {
    var editMode = wcmmode.edit?"editMode":"";
    return {
        appName:"<%= siteName %>App",
        cssClasses: editMode,
        resourcePath: global.granite.resource.path
    };
});
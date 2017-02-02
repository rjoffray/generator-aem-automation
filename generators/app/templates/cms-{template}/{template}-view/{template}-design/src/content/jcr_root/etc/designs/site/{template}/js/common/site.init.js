// This is meant for use with external consumers of our globally shared items such as head & footer.
var <%= siteName %>$ = jQuery.noConflict(true);
// The following occurs if there was no jquery previously defined on the page to begin with.
if (typeof $ === 'undefined' || typeof jQuery === 'undefined') {
    $ = <%= siteName %>$;
    jQuery = <%= siteName %>$;
}
<%= siteName %>$.createNs = function() {
    var o, d;
    jQuery.each(arguments, function(v) {
        d = arguments[1].split(".");
        o = window[d[0]] = window[d[0]] || {};
        jQuery.each(d.slice(1), function(v2) {
            o = o[arguments[1]] = o[arguments[1]] || {};
        });
    });
    return o;
};
<%= siteName %>$.createNs('alg');
<%= siteName %>$.createNs('alg.cms');
<%= siteName %>$.createNs('alg.cms.<%= siteName %>');
<%= siteName %>$.createNs('alg.cms.<%= siteName %>.components');
<%= siteName %>$.createNs('alg.cms.<%= siteName %>.constants');
<%= siteName %>$.createNs('alg.cms.<%= siteName %>.utils');

// putting this here temporarily for backwards compatibility
<%= siteName %>$.createNs('alg.cms.core');
<%= siteName %>$.createNs('alg.cms.core.utils');

alg.cms.<%= siteName %>.utils.initAngularController = function(containerName) {

    <%= siteName %>$(containerName).each(function() {
        angular.injectCQ(this);
    });



};

// putting this here temporarily for backwards compatibility
alg.cms.core.utils.initAngularController = alg.cms.<%= siteName %>.utils.initAngularController;


alg.cms.<%= siteName %>.constants.appName = "<%= siteName %>App";
var <%= siteName %>App = angular.module(alg.cms.<%= siteName %>.constants.appName, ['ui.bootstrap', 'ngAnimate', 'ngTouch', 'vcRecaptcha'])
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.cache = true;
    }])
    .config(["$logProvider", "$provide", function($logProvider, $provide) {

        $logProvider.debugEnabled(true);

        $provide.decorator("$log", ["$delegate", function($delegate) {
            //Original methods
            var origInfo = $delegate.info;
            var origError = $delegate.error;
            var origWarn = $delegate.warn;
            var origLog = $delegate.log;

            //Override the default behavior
            $delegate.info = function() {

                if ($logProvider.debugEnabled())
                    origInfo.apply(null, arguments)
            };
            $delegate.error = function() {

                if ($logProvider.debugEnabled())
                    origError.apply(null, arguments)
            };
            $delegate.warn = function() {

                if ($logProvider.debugEnabled())
                    origWarn.apply(null, arguments)
            };

            //Override the default behavior
            $delegate.log = function() {

                if ($logProvider.debugEnabled())
                    origLog.apply(null, arguments)
            };

            return $delegate;
        }]);
    }])
    .factory("ang$", [
        '$window',
        function($window) {
            return $window.<%= siteName %>$;
        }
    ]);

angular.injectCQ = function(elementname) {

    var rootElement = <%= siteName %>$('[ng-app]'),
        $element = <%= siteName %>$(elementname),
        $elemArray;
    //Ensure ng-app has initialized and that the elementname has not been initialized
    if (rootElement && rootElement.hasClass('ng-scope') && $element.is('[ng-controller]') && !$element.hasClass('ng-scope')) {
        //Scan the controller's parents to find any un-initialized controllers
        //This is to prevent child controllers from compiling before parents
        $elemArray = <%= siteName %>$('[ng-controller]');

        $elemArray.each(function() {
            var $elem = $(this);
            //Check to see if element has ng-controller tag and that its not initialized
            if (!$elem.hasClass('ng-scope')) {
                angular.element(rootElement).injector().invoke(['$rootScope', '$compile', '$document', function($rootScope, $compile, $document) {
                    var scope = angular.element($elem).scope();
                    var newElem = $compile($elem[0].outerHTML)(scope);
                    $elem.replaceWith(newElem);
                    scope.$digest();
                }]);
                //Assuming there's only one un-initialized controller so break out of loop
                return false;
            }
        });
    }

};

<%= siteName %>$().ready(function() {

    _.mixin({
        'findByValues': function(collection, property, values) {
            return _.filter(collection, function(item) {
                return _.contains(values, item[property]);
            });
        },
        'findNestedByString': function(collection, parent, property, val) {
            return _.filter(collection, function(item) {
                //console.log("****isEqual****",item[property],val)
                var _parent = item[parent];
                return _.isEqual(_parent[property], val);
            });
        },
        'findByString': function(collection, property, val) {
            return _.filter(collection, function(item) {
                //console.log("****isEqual****",item[property],val)
                return _.isEqual(item[property], val);
            });
        },
        'findByPartialValue': function(collection, property, val) {
            return _.filter(collection, function(item) {
                return item[property].toString().toLowerCase().search(val.toString().toLowerCase()) >= 0;
            });
        },
        'findBetweenValue': function(collection, property, min, max) {
            return _.filter(collection, function(item) {
                return item[property].between(min, max, true);
            });
        }
    });


    Number.prototype.between = function(a, b) {
        var min = Math.min.apply(Math, [a, b]),
            max = Math.max.apply(Math, [a, b]);
        return this > min && this < max;
    };
});

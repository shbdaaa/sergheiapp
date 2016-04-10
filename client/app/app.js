angular.module('app', ['app.core','app.routes','app.services']);

// CATCHING ANGULAR ERRORS
angular.module('app').config(function ($provide) {
    $provide.decorator("$exceptionHandler", ["$delegate", function ($delegate) {
        return function (exception, cause) {
            $delegate(exception, cause);
            console.error(exception.message);
        };
    }]);
});

var COVERAGE_LABEL = 'coverage:';

window.jasmine.getEnv().addReporter({
    reportRunnerResults: function () {
        'use strict';

        if (window._$jscoverage != null) {
            window.phantom.sendMessage('writeln', '\n' + COVERAGE_LABEL + JSON.stringify(window._$jscoverage));
        }
    }
});

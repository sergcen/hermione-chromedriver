const wdioChromedriverService = require('wdio-chromedriver-service/launcher');

module.exports = function(hermione, opts) {
    hermione.on(hermione.events.INIT, () => {
        wdioChromedriverService.onPrepare(opts);
    });

    hermione.on(hermione.events.EXIT, () => {
        wdioChromedriverService.onComplete();
    });
};

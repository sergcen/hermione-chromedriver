const ChromeDriverLauncher = require('./ChromeDriverLauncher');

const chromeDriverLauncher = new ChromeDriverLauncher();

module.exports = function(hermione, opts) {
    hermione.on(hermione.events.INIT, () => {
        chromeDriverLauncher.start(opts);
    });

    const stopHandler = () => {
        chromeDriverLauncher.stop();
    }

    hermione
        .on(hermione.events.RUNNER_END, stopHandler)
        .on(hermione.events.ERROR, stopHandler)
        .on(hermione.events.EXIT, stopHandler);
};

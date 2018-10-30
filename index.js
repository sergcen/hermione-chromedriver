const ChromeDriverLauncher = require('./ChromeDriverLauncher');

const chromeDriverLauncher = new ChromeDriverLauncher();

module.exports = function(hermione, opts) {
    hermione.on(hermione.events.INIT, () => {
        chromeDriverLauncher.start(opts);
    });

    hermione.on(hermione.events.RUNNER_END, () => {
        chromeDriverLauncher.stop();
    });
};

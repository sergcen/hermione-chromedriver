const requireg = require('requireg');

try {
    require.resolve(requireg.resolve('chromedriver'));
} catch (e) {
    throw Error('chromedriver not found: npm install -g chromedriver');
}

const ChromeDriver = requireg('chromedriver');
const childProcess = require('child_process');

const binPath = ChromeDriver.path;

class ChromeDriverLauncher {
    constructor() {
        this.chromeDriverArgs = {}
    }

    start(config) {
        this.chromeDriverArgs = config.chromeDriverArgs || [];

        return new Promise((resolve, reject) => {
            this.process = childProcess.execFile(binPath, this.chromeDriverArgs, (err, stdout, stderr) => {
                if (err) {
                    return reject(err)
                }
            });

            if (this.process) {
                resolve()
            }
        })
    }

    stop() {
        if (this.process) {
            this.process.kill()
        }
    }
}

module.exports = ChromeDriverLauncher;
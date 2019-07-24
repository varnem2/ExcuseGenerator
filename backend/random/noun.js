const _ = require('lodash');
var fs = require('fs');

// module.exports.aRandomNoun = new Promise((resolve, reject) => {
//     resolve("Fred");
// });

class Noun {
    constructor(opts) {
        this.opts = _.defaults(opts, {
            path: "./noun.txt",
            data: []
        });
    }

    getRandomNoun() {
        return this.opts.data[this._getRandomInt(this.opts.data.length)];
    }

    _getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    addNoun(noun) {
        return new Promise((resolve, reject) => {
            this.opts.data.push(noun);
            resolve();
            this._addNounToFile(noun);
        });
    }

    _addNounToFile(noun) {
        fs.appendFile(this.opts.path, noun);
    }

    _syncFile() {
        var writeStream = fs.createWriteStream(this.path);
        this.data.forEach(value => { writeStream.write(`${value}\n`) });
        writeStream.end();
    }

}

module.exports = Noun;
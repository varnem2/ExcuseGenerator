const noun = require('./noun.js');
const verb = require('./verb.js');

var getNounAndVerb = new Promise((resolve, reject) => {
    var output;
    Promise.all([noun.getRandomNoun, verb.getRandomVerb]).then((values) => {
        resolve(values);
    }).catch((error) => {
        //throwing error to parent probably don't need this but whatever
        reject(error);
    });
});
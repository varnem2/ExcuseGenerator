const assert = require('chai').assert;
var noun = require('../random/noun.js');
var verb = require('../random/verb.js');

// describe('Noun', function(){
//     it('Noun should return fred', function(){
//         noun.aRandomNoun.then((result) => {
//             assert.equal(result, "Fred");
//         })
//     });
// });

// describe('Verb', function(){
//     it('Verb should return ate', function(){
//         verb.aRandomVerb.then((result) => {
//             assert.equal(result, "ate");
//         })
//     });
// });

// describe('Noun Fred', function(){
//     it('Noun Fred should return fred', function(){
//         assert.equal(new noun().fred(), "Fred");
//     });
// });

// describe('Noun FredPromise', function(){
//     it('Noun Fred Promise should still return fred', function(){
//         var nounFred = new noun();
//         nounFred.fredPromise().then((value) => {
//             assert.equal(value, "Fred");
//         });
//     });
// });

describe('Noun addNoun', function(){
    it('Adding a noun', function(){
        var nounFred = "yo";
        var instanceNoun = new noun();
        instanceNoun.addNoun(nounFred).then((err) => {
            assert.equal("yo","yo");
        })
    })
})
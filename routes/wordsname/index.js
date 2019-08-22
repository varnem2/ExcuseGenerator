const express = require('express');
const router = express.Router();
const db = require('./../../models');

/**
 * Defaults to getting a random word of type :id defined in the url
 */
router.get('/:id', (req, res) => {
    db.WordName.findAll({
        where: {
            wordType: req.params.id
        }
    }).then((words) => {
        if (words.length === 0) {
            next();
        } else {
            res.send(JSON.stringify(words));
        }
    });
});

/**
 * Defaults to getting a random word of type :id defined in the url
 */
router.get('/', (req, res) => {
    db.WordName
        .findAll({})
        .then((words) => {
            if (words.length === 0) {
                next();
            } else {
                res.send(JSON.stringify(words));
            }
        });
});

module.exports = router;
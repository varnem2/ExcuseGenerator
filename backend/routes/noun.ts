import noun from "../models/noun";
import verb from "../models/verb";

export default class Noun {
    constructor(app) {
        app.get('/api/noun', async function (req, res, next) {
            var nouns = await noun.findAll({
                attributes: ['id', 'name', 'description'],
            }).catch((err) => {console.log("There has been an error" + err);});

            console.log("Nouns: " + nouns.toJSON());
        });
    }
}
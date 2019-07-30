import { Sequelize } from "sequelize";

import Nouns from './noun';
import Verb from './verb';

export default class Models {
    public sequelize: Sequelize;

    async start() {
        console.log("Mapping Database");

        // this.sequelize = new Sequelize(
        //     process.env.SQL_DATABASE,
        //     process.env.SQL_USERNAME,
        //     process.env.SQL_PASSWORD, {
        //         database: process.env.SQL_DATABASE,
        //         host: process.env.SQL_HOST,
        //         port: Number(process.env.SQL_PORT),
        //         dialect: "mssql",
        //         logging: false,
        //         pool: {
        //             max: 5,
        //             min: 0,
        //             idle: 20000,
        //             acquire: 20000
        //         }
        //     }
        // );

        var models = {
            Nouns,
            Verb
        };

        Object.keys(models).forEach((key) => {
            if(models[key].initz) {
                console.log('Initializing ' + key);
                models[key].initz(this.sequelize);
            }
        });

        Object.keys(models).forEach((key) => {
            if(models[key].associate) {
                console.log("Associating " + key);
                models[key].associate(models);
            }
        });
    }
}
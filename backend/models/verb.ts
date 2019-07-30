import { Sequelize, Model, DataTypes } from 'sequelize';

export default class Noun extends Model {
    static initz = (sequelize: Sequelize) => {
        Noun.init({
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV1,
                primaryKey: true
            },
            value: DataTypes.STRING
        }, {
            sequelize: sequelize,
            schema: process.env.DB_SCHEMA,
            paranoid: true
        });
    };

    static associate = () => { };
}
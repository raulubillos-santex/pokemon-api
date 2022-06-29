const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: process.env.DBTYPE || 'mysql',
    password: process.env.DBPASSWORD,
    username: process.env.DBUSER,
    database: process.env.DBSCHEMA,
    host: process.env.DBHOST,
    port: process.env.DBPORT
})

const PokemonModel = sequelize.define('Pokemon', {
    Id: {
        primaryKey: true,
        type: DataTypes.UUID
    },
    Name: {
        type: DataTypes.TEXT
    },
    Specie: {
        type: DataTypes.TEXT
    },
    Level: {
        type: DataTypes.INTEGER
    },
    Strength: {
        type: DataTypes.INTEGER
    },
    Vitality: {
        type: DataTypes.INTEGER
    },
    Speed: {
        type: DataTypes.INTEGER
    },
    TrainerId: {
        type: DataTypes.UUID
    }
}, { tableName: "Pokemon" });

const TeamModel = sequelize.define('Team', {
    Id: {
        primaryKey: true,
        type: DataTypes.UUID
    },
    Name: {
        type: DataTypes.TEXT
    },
    TrainerId: {
        type: DataTypes.UUID
    }
}, { tableName: "Team" });

PokemonModel.belongsToMany(TeamModel, { through: 'Pokemon_Teams' });

TeamModel.belongsToMany(PokemonModel, { through: 'Pokemon_Teams' });

const TrainerModel = sequelize.define('Trainer', {
    Id: {
        primaryKey: true,
        type: DataTypes.UUID
    },
    TrainerId: {
        type: DataTypes.TEXT
    },
    Name: {
        type: DataTypes.TEXT
    },
    Gender: {
        type: DataTypes.CHAR
    },
    Age: {
        type: DataTypes.INTEGER
    },
    Password: {
        type: DataTypes.TEXT
    },
    Region: {
        type: DataTypes.TEXT
    }
}, { tableName: "Trainer" });

PokemonModel.belongsTo(TrainerModel, { foreignKey: 'TrainerId' });
TeamModel.belongsTo(TrainerModel, { foreignKey: "TrainerId" });


module.exports = {
    sequelize,
    PokemonModel,
    TrainerModel,
    TeamModel
}
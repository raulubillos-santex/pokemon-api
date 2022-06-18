const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: process.env.DBTYPE || 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'node',
    password: 'nodeapp',
    database: 'pokemon',
})

const PokemonModel = sequelize.define('Pokemon', {
    Id: {
        primaryKey: true,
        type: DataTypes.UUID
    },
    Name: {
        type: DataTypes.TEXT
    },
    Type: {
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
    CreationDate: {
        type: DataTypes.DATE
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

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize({
    dialect: process.env.DBTYPE || 'mysql',
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    username: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database:process.env.DBSCHEMA,
})

const PokemonModel = sequelize.define('Pokemon', {
    Id:{
        primaryKey:true,
        type: DataTypes.UUID
    },
    Name:{
        type: DataTypes.TEXT
    },
    Type:{
        type:DataTypes.TEXT
    },
    Level:{
        type:DataTypes.INTEGER
    },
    Strength:{
        type:DataTypes.INTEGER
    },
    Vitality:{
        type:DataTypes.INTEGER
    },
    Speed:{
        type:DataTypes.INTEGER
    },
    TeamId:{
        type:DataTypes.UUID
    },
    TrainerId:{
        type:DataTypes.UUID
    }
}, {tableName:"Pokemon"});

const TeamModel = sequelize.define('Team', {
    Id:{
        primaryKey:true,
        type: DataTypes.UUID
    },
    Name:{
        type: DataTypes.TEXT
    },
    CreationDate:{
        type: DataTypes.DATE
    },
    TrainerId:{
        type: DataTypes.UUID
    }
}, {tableName:"Team"});

TeamModel.hasMany(PokemonModel,{foreignKey:"TeamId"});

const TrainerModel = sequelize.define('Trainer', {
    Id:{
        primaryKey:true,
        type: DataTypes.UUID
    },
    TrainerId:{
        type: DataTypes.TEXT
    },
    Name:{
        type:DataTypes.TEXT
    },
    Surname:{
        type:DataTypes.TEXT
    },
    Gender:{
        type:DataTypes.CHAR
    },
    Age:{
        type:DataTypes.INTEGER
    },
    Password:{
        type:DataTypes.TEXT
    },
    Region:{
        type:DataTypes.TEXT
    }
}, {tableName:"Trainer"});

TrainerModel.hasMany(TeamModel,{foreignKey:"TrainerId"})
TrainerModel.hasMany(PokemonModel,{foreignKey:"TrainerId"})



module.exports={
    sequelize,
    PokemonModel,
    TrainerModel,
    TeamModel
}
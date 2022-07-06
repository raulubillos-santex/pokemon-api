const { encrypt } = require('../utils/encrypter');
const { v4 } = require('uuid');
const { addTrainer } = require('../providers/trainer');

const createTrainer = (trainerData) => { 
    const userToCreate = {
        Id: v4(),
        TrainerId: v4(),
        Name: trainerData.name,
        Gender: trainerData.gender,
        Age: trainerData.age,
        Password: encrypt(trainerData.password),
        Region: trainerData.region
    }

    const user = await addTrainer(userToCreate);

    const response = {
        TrainerId: user.get('TrainerId')
    }
    
    return response;
}

module.exports = {
    createTrainer
}
const { TrainerModel } = require('../models');

const createTrainer = async(user) => {
    try {
        const model = await TrainerModel.create(user, { isNewRecord: true });
        return model;
    } catch (err) {
        throw err;
    }

}

const getTrainerByTrainerID = async(trainerID) => {
    try {
        const trainer = await TrainerModel.findAll({
            where: {
                TrainerId: trainerID
            }
        });
        return trainer[0];
    } catch (err) {
        throw err;
    }

}



module.exports = {
    createTrainer,
    getTrainerByTrainerID
}
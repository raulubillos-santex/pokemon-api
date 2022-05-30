const { TrainerModel } = require('../models');

const createUser = async(user) => {
    try {
        const model = await TrainerModel.create(user, { isNewRecord: true });
        return model;
    } catch (err) {
        throw err;
    }

}

module.exports = {
    createUser
}
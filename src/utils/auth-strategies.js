const LocalStrategy = require('passport-local');
const { getTrainerByTrainerID } = require('../providers/trainer');
const { compare } = require('../utils/encrypter');

const trainerIdStategy = new LocalStrategy({
    usernameField: 'trainerId',
    passwordField: 'password'
}, async(trainerId, password, callback) => {
    try {
        const trainer = await getTrainerByTrainerID(trainerId);
        if (!trainer) {
            return callback(null, false, { message: "Invalid trainerID/password" });
        }
        const comparePasswords = compare(password, trainer.get('Password'));

        if (comparePasswords) {
            return callback(null, trainer.get());
        } else {
            return callback(null, false, { message: "Invalid trainerID/password" });
        }
    } catch (err) {
        return callback(err)
    }
})

module.exports = { trainerIdStategy }
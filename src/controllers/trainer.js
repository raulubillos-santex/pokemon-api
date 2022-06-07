const { encrypt } = require('../utils/encrypter');
const { v4 } = require('uuid');
const { createTrainer, getTrainerByTrainerID } = require('../providers/trainer');
const passport = require('passport');

const signUp = async(req, res, next) => {
    try {
        const userToCreate = {
            Id: v4(),
            TrainerId: v4(),
            Name: req.body.name,
            Gender: req.body.gender,
            Age: req.body.age,
            Password: encrypt(req.body.password),
            Region: req.body.region
        }

        const user = await createTrainer(userToCreate);

        const response = {
            TrainerId: user.get('TrainerId')
        }
        res.status(200).send(response);

        return next();
    } catch (err) {
        console.log('Error:', err);
        return next({
            httpStatus: 500,
            errorCode: 'GENERAL_ERROR'
        });
    }

}

const userSerializer = (user, done) => {
    done(null, user.TrainerId)
}

const userDeserializer = (trainerId, done) => {
    getTrainerByTrainerID(trainerId).then((trainer) => {
        done(null, trainer)
    });
}

const login = (req, res, next) =>
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (user) {
            res.status(200).send({ message: 'Authenticated' })
            return next();
        } else {
            res.status(401).send(info)
            return next()
        }
    })(req, res, next);


module.exports = { signUp, userSerializer, userDeserializer, login }
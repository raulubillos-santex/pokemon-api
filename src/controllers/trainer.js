const { createTrainer } = require('../services/trainer')
const { getTrainerByTrainerID } = require('../providers/trainer');
const passport = require('passport');

const signUp = async(req, res, next) => {
    try {
        const user = await createTrainer(req.body);

        res.status(200).send(user);

        return next();
    } catch (err) {
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
        return done(null, trainer)
    });
}

const login = (req, res, next) =>
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (user) {
            req.logIn(user, function(err) {
                if (err) { return next(err); }
                res.status(200).send({ message: 'Authenticated' });
                return next();
            });
        } else {
            res.status(401).send(info)
            return next()
        }
    })(req, res, next);


module.exports = { 
    signUp, 
    userSerializer, 
    userDeserializer, 
    login 
}
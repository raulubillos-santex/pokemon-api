const { validationResult } = require('express-validator')

const errorHandler = (err, req, res, next) => {
    if (!Array.isArray(err)) {
        const httpStatus = err.httpStatus;
        res.status(httpStatus).json({ errorCode: err.errorCode })
        return next();
    } else {
        const mapedArray = err.map(values => {
            return values.msg.errorCode;
        });
        const httpStatus = err[0].msg.httpStatus;
        res.status(httpStatus).json({ errorCode: mapedArray })
        return next();
    }
}

const validateIfNotValidatorError = (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return next(error.array());
    }
    return next();
}

const isAuthenticated = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return next({
            httpStatus: 401,
            errorCode: 'NOT_AUTHORIZED'
        })
    }
    return next();
}

module.exports = { errorHandler, validateIfNotValidatorError, isAuthenticated }
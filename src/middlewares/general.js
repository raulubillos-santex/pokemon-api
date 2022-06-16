const { validationResult } = require('express-validator')

const errorHandler = (err, req, res, next) => {
    const errors = err.errors;
    const mapedArray = errors.map(values => {
        return values.msg.errorCode;
    });
    const httpStatus = errors[0].msg.httpStatus;
    res.status(httpStatus).json({ errorCode: mapedArray })
    return next();
}

const validateIfNotError = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(errors);
    }
    return next();
}

const isAuthenticated = (req, res, next) => {
    console.log(req.user);
    return next();
}

module.exports = { errorHandler, validateIfNotError, isAuthenticated }
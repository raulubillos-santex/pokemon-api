const { check } = require('express-validator');

const validateCaptureBody = [
    check('name').exists().withMessage((value, { req, location, path }) => {
        return {
            httpStatus: 400,
            errorCode: 'NAME_MISSING'
        }
    }),
    check('specie').exists().withMessage((value, { req, location, path }) => {
        return {
            httpStatus: 400,
            errorCode: 'SPECIE_MISSING'
        }
    }),
    check('level').exists().withMessage((value, { req, location, path }) => {
        return {
            httpStatus: 400,
            errorCode: 'LEVEL_MISSING'
        }
    })
    .isInt({ min: 0, max: 100 }).withMessage((value, { req, location, path }) => {
        return {
            httpStatus: 400,
            errorCode: 'INVALID_LEVEL'
        }
    }),
];

module.exports = { validateCaptureBody };
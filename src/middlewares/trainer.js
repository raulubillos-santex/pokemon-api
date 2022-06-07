const { check } = require('express-validator');
const { gender } = require('../utils/constants');

const validateUserBody = [
    check('password').exists().withMessage((value, { req, location, path }) => {
        return {
            httpStatus: 400,
            errorCode: 'PARAMETER_MISSING'
        }
    }).matches('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.,]).{8,}$').withMessage((value, { req, location, path }) => {
        return {
            httpStatus: 400,
            errorCode: 'WRONG_PASSWORD_FORMAT'
        }
    }),
    check('name').exists().withMessage((value, { req, location, path }) => {
        return {
            httpStatus: 400,
            errorCode: 'PARAMETER_MISSING'
        }
    }),
    check('gender').exists().withMessage((value, { req, location, path }) => {
        return {
            httpStatus: 400,
            errorCode: 'PARAMETER_MISSING'
        }
    })
    .isIn(gender).withMessage((value, { req, location, path }) => {
        return {
            httpStatus: 400,
            errorCode: 'GENDER_UNEXISTENT'
        }
    }),
    check('age').exists().withMessage((value, { req, location, path }) => {
        return {
            httpStatus: 400,
            errorCode: 'PARAMETER_MISSING'
        }
    })
    .isInt({ min: 10 }).withMessage((value, { req, location, path }) => {
        return {
            httpStatus: 400,
            errorCode: 'UNDERAGE'
        }
    }),
    check('region').exists().withMessage((value, { req, location, path }) => {
        return {
            httpStatus: 400,
            errorCode: 'PARAMETER_MISSING'
        }
    })
];



module.exports = { validateUserBody }
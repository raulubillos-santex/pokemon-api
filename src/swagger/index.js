var express = require('express');
const swaggerUi = require('swagger-ui-express');
const Swagger = require('./swagger.json');
const router = express.Router();

router.use('/',swaggerUi.serve, swaggerUi.setup(Swagger));

module.exports = router;

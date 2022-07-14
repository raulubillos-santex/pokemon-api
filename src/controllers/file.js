const { FileServices } = require('../services/file');

class FileController {
    static writeFileGet(req, res, next) {
        let writeFile;
        try {
            writeFile = FileServices.writeFileGet(req);
            res.status(200).send(writeFile);
            return next();
        } catch (error) {
            console.log(error);
            next();
        }
    };

    static writeFilePost(req, res, next) {
        let writeFile;
        try {
            writeFile = FileServices.writeFilePost(req);
            res.status(200).send(writeFile);
            return next();
        } catch (error) {
            console.log(error);
            next();
        }
    };

    static writeFilePut(req, res, next) {
        let writeFile;
        try {
            writeFile = FileServices.writeFilePut(req);
            res.status(200).send(writeFile);
            return next();
        } catch (error) {
            console.log(error);
            next();
        }
    };

    static writeFilePut(req, res, next) {
        let writeFile;
        try {
            writeFile = FileServices.writeFilePut(req);
            res.status(200).send(writeFile);
            return next();
        } catch (error) {
            console.log(error);
            next();
        }
    };

    static writeFileDelete(req, res, next) {
        let writeFile;
        try {
            writeFile = FileServices.writeFileDelete(req);
            res.status(200).send(writeFile);
            return next();
        } catch (error) {
            console.log(error);
            next();
        }
    };
};

module.exports = {
    FileController
};
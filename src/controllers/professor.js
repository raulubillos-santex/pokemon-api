const { ProfessorServices } = require('../services/professor');

class ProfessorController {

    static async selected(req, res) {
        let data;
        try {
            data = ProfessorServices.selected;
        } catch (error) {
            res.status(500).send(error)
        }
        res.status(200).send(data);
    };

    static async modifiedProf(req, res) {
        let data;
        try {
            data = ProfessorServices.modifiedProf;
        } catch (error) {
            res.status(500).send(error)
        }
        res.status(200).send(data);
    };

    static async deleteProf(req, res) {
        let data;
        try {
            data = ProfessorServices.deleteProf;
        } catch (error) {
            res.status(500).send(error)
        }
        res.status(200).send(data);
    };

    static async getProf(req, res) {
        let data;
        try {
            data = ProfessorServices.getProf;
        } catch (error) {
            res.status(500).send(error)
        }
        res.status(200).send(data);
    };

    static async getTrainers(req, res) {
        let data;
        try {
            data = ProfessorServices.getTrainers;
        } catch (error) {
            res.status(500).send(error)
        }
        res.status(200).send(data);
    };

    static async includeProf(req, res) {
        let data;
        try {
            data = ProfessorServices.includeProf;
        } catch (error) {
            res.status(500).send(error)
        }
        res.status(200).send(data);
    };

};

module.exports = {
    ProfessorController
};
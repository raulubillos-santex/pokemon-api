const { ProfessorProvider } = require('../providers/professor');
const { v4 } = require('uuid');

class ProfessorServices {

    static async selected(professorData) {
        /* const createProf = {
             id: v4(),
             name: professorData.name,
             surname: professorData.surname
         };
 
         const data = await ProfessorModel.create(createProf);
 
         return data;*/
        return ProfessorProvider.selected;
    };

    static async modifiedProf(req, res) {
        return ProfessorProvider.modifiedProf
    };

    static async deleteProf(req, res) {
        return ProfessorProvider.deleteProf
    };

    static async getProf(req, res) {
        return ProfessorProvider.getProf
    };

    static async getTrainers(req, res) {
        return ProfessorProvider.getTrainers
    };

    static async includeProf(req, res) {
        return ProfessorProvider.includeProf
    };

};

module.exports = {
    ProfessorServices
};
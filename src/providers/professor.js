class ProfessorProvider {

    static async selected(profesorData) {
        return 'OK selected'
    };

    static async modifiedProf(req, res) {
        return 'OK modifiedProf'
    };

    static async deleteProf(req, res) {
        return 'OK deleteProf'
    };

    static async getProf(req, res) {
        return 'OK getProf'
    };

    static async getTrainers(req, res) {
        return 'OK getTrainers'
    };

    static async includeProf(req, res) {
        return 'OK includeProf'
    };
};

module.exports = {
    ProfessorProvider
};
var express = require('express');
var router = express.Router();
const { isAuthenticated } = require('../middlewares/general');
const { ProfessorController } = require('../controllers/professor');

router.post('/', isAuthenticated, ProfessorController.selected);
router.put('/:professorname', isAuthenticated, ProfessorController.modifiedProf);
router.delete('/:profesorname', isAuthenticated, ProfessorController.deleteProf);
router.get('/:professorname', isAuthenticated, ProfessorController.getProf);
router.get('/:professorname/trainers', isAuthenticated, ProfessorController.getTrainers);
router.get('/:professorname/include', isAuthenticated, ProfessorController.includeProf);

module.export = router;
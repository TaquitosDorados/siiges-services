const { asignaturas, solicitudes } = require('../../../adapters/db');

const createAsignaturaPrograma = require('./create.asignatura.use-cases');
const findOneAsignatura = require('./find-one.asignatura.use-cases');
const updateAsignatura = require('./update.asignatura.use-cases');
const deleteAsignatura = require('./delete.asignatura.use-cases');
const findProgramaAsignaturas = require('./find.programa-asignaturas.use-cases');

module.exports = {
  createAsignaturaPrograma: createAsignaturaPrograma(
    asignaturas.findProgramaQuery,
    asignaturas.createAsignaturaProgramaQuery,
  ),
  findOneAsignatura: findOneAsignatura(
    asignaturas.findOneAsignaturaQuery,
  ),
  updateAsignatura: updateAsignatura(
    asignaturas.findOneAsignaturaQuery,
    asignaturas.updateAsignaturaQuery,
  ),
  deleteAsignatura: deleteAsignatura(
    asignaturas.findOneAsignaturaQuery,
    asignaturas.deleteAsignaturaQuery,
  ),
  findProgramaAsignaturas: findProgramaAsignaturas(
    solicitudes.findOneProgramaQuery,
    asignaturas.findProgramaAsignaturasQuery,
  ),
};

// External dependencies
const { models, queries } = require('@siiges-services/core');

const {
  Inspeccion,
  InspeccionPregunta,
  InspeccionInspeccionPregunta,
  InspeccionObservacion,
  InspectorPrograma,
  Programa,
  Inspector,
} = models;

const {
  createQuery,
  findAllQuery,
  findOneQuery,
  updateAndFindQuery,
  deleteAndFindQuery,

} = queries;

module.exports = {
  createInspeccionQuery: createQuery(Inspeccion),
  findOneInspeccionQuery: findOneQuery(Inspeccion),
  deleteQuery: deleteAndFindQuery(Inspeccion),
  findOneQuery: findOneQuery(Inspeccion),
  findAllInspeccionPreguntasQuery: findAllQuery(InspeccionPregunta),
  createInspeccionInspeccionPreguntaQuery: createQuery(InspeccionInspeccionPregunta),
  findOneInspeccionInspeccionPreguntaQuery: findOneQuery(InspeccionInspeccionPregunta),
  createInspeccionObservacionQuery: createQuery(InspeccionObservacion),
  findOneInspeccionObservacionQuery: findOneQuery(InspeccionObservacion),
  updateInspeccionObservacionQuery: updateAndFindQuery(InspeccionObservacion),
  updateInspeccionInspeccionPreguntaQuery: updateAndFindQuery(InspeccionInspeccionPregunta),
  createInspectorProgramasQuery: createQuery(InspectorPrograma),
  findOneProgramasQuery: findOneQuery(Programa),
  findOneInspectorQuery: findOneQuery(Inspector),
  findAllInspectorProgramasQuery: findAllQuery(InspectorPrograma),
  findOneInspectoresProgramasQuery: findOneQuery(InspectorPrograma),
  deleteInspectoresProgramasQuery: deleteAndFindQuery(InspectorPrograma),
  updateInspectoresProgramasQuery: updateAndFindQuery(InspectorPrograma),
};

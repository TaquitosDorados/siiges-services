const { models, queries } = require('@siiges-services/core');

const {
  createQuery,
  findOneQuery,
  updateAndFindQuery,
} = queries;

const {
  Evaluacion,
  Programa,
  Evaluador,
  Modalidad,
} = models;

module.exports = {
  createEvaluacionQuery: createQuery(Evaluacion),
  findOneEvaluacionQuery: findOneQuery(Evaluacion),
  updateEvaluacionQuery: updateAndFindQuery(Evaluacion),
  findOneProgramaQuery: findOneQuery(Programa),
  findOneEvaluadorQuery: findOneQuery(Evaluador),
  findOneModalidadQuery: findOneQuery(Modalidad),
};

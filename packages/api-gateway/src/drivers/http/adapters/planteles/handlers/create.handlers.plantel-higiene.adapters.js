const { Logger } = require('@siiges-services/shared');
const errorHandler = require('../../../utils/errorHandler');

async function createPlantelHigiene(req, reply) {
  try {
    const { plantelId, higieneId } = req.params;
    const { cantidad } = req.body;

    Logger.info('[api/higiene/create]: creating the higiene');
    const plantelHigiene = await this.institucionServices.createPlantelHigiene({
      plantelId,
      higieneId,
      cantidad,
    });

    return reply
      .code(201)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ data: plantelHigiene });
  } catch (error) {
    return errorHandler(error, reply);
  }
}

module.exports = createPlantelHigiene;

const { higiene } = require('./properties/higiene');
const { plantelHigiene } = require('./properties/plantelHigiene');
const { responseProperties } = require('./properties/responseProperties');

const findGroupPlantelHigieneSchema = {
  tags: ['Plantel'],
  description: 'Given the ID of plantel, then return the list of Higiene.',
  params: {
    type: 'object',
    properties: {
      plantelId: { type: 'integer' },
    },
    required: ['plantelId'],
  },
  response: {
    200: {
      type: 'object',
      properties: {
        data: {
          type: 'array',
          items: {
            properties: {
              id: { type: 'integer' },
              ...plantelHigiene,
              ...responseProperties,
              higiene: {
                type: 'object',
                properties: {
                  id: { type: 'integer' },
                  ...higiene,
                  ...responseProperties,
                },
              },
            },
          },
        },
      },
    },
  },
};

module.exports = findGroupPlantelHigieneSchema;

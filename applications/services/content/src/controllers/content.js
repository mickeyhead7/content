import { graphql, buildSchema } from 'graphql';
import { models, entries } from '../../fixtures';

export const index = (req, res) => {
  const schemaString = `
    type DateTime {
      date: String
      timezone: String
    }

    ${models.map(model => `
      type ${model.key} {
        id: String
        model: String
        createdAt: DateTime
        ${model.components.map(component => `${component.key}: ${component.config.dataType}`).join(` `)}
      }
    `).join('')}

    type Query {
      ${models.map(model => `${model.key}Entries: [${model.key}]`).join(` `)}
    }
  `;

  const schema = buildSchema(schemaString);

  const resolvers = models.reduce((acc, model) => {
    acc[`${model.key}Entries`] = () => entries.filter(entry => entry.model === model.id);

    return acc;
  }, {});

  const query = req.body.query ;

  graphql(schema, query, resolvers).then(result => {
    res.send(result);
  });
};

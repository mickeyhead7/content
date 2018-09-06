'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _graphql = require('graphql');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _fixtures = require('../fixtures');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = 4001;
var server = (0, _express2.default)();

server.use(_bodyParser2.default.json());

server.use('/', function (req, res) {
  var schemaString = '\n    type DateTime {\n      date: String\n      timezone: String\n    }\n\n    ' + _fixtures.models.map(function (model) {
    return '\n      type ' + model.key + ' {\n        id: String\n        model: String\n        createdAt: DateTime\n        ' + model.components.map(function (component) {
      return component.key + ': ' + component.config.dataType;
    }).join(' ') + '\n      }\n    ';
  }).join('') + '\n\n    type Query {\n      ' + _fixtures.models.map(function (model) {
    return model.key + 'Entries: [' + model.key + ']';
  }).join(' ') + '\n    }\n  ';

  var schema = (0, _graphql.buildSchema)(schemaString);

  var resolvers = _fixtures.models.reduce(function (acc, model) {
    acc[model.key + 'Entries'] = function () {
      return _fixtures.entries.filter(function (entry) {
        return entry.model === model.id;
      });
    };

    return acc;
  }, {});

  var query = req.body.query;

  (0, _graphql.graphql)(schema, query, resolvers).then(function (result) {
    res.send(result);
  });
});

server.listen({ port: PORT }, function () {
  return console.log('Server started on port ' + PORT);
});
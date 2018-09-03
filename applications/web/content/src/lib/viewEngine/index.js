import React from 'react';
import Helmet from 'react-helmet';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

const viewEngine = themeResets => (filePath, options, callback) => {
  const Template = require(filePath);
  const Component = Template.default || Template;
  const sheet = new ServerStyleSheet();
  const content = renderToString(sheet.collectStyles(<Component {...options} />));
  const helmet = Helmet.renderStatic();
  const styleTags = sheet.getStyleTags();

  themeResets();

  const rendered = `
    <html ${helmet.htmlAttributes.toString()}>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${styleTags}
      </head>
      <body ${helmet.bodyAttributes.toString()}>
        ${content}
        ${helmet.script.toString()}
      </body>
    </html>
  `;

  return callback(null, rendered);
};

export default viewEngine;

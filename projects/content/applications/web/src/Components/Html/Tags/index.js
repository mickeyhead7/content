import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const { NODE_ENV, DEV_SERVER } = process.env;

const buildHref = href => NODE_ENV === 'development' ? `${DEV_SERVER}/${href}` : href;

const Tag = ({ children }) => <Helmet>{children}</Helmet>;

Tag.propTypes = {
  children: PropTypes.node.isRequired
};

export const Link = ({ href }) => (
  <Tag>
    <link href={buildHref(href)} rel="stylesheet" type="text/css" />
  </Tag>
);

Link.propTypes = {
  href: PropTypes.string.isRequired
};

export const Script = ({ src }) => (
  <Tag>
    <script src={buildHref(src)} />
  </Tag>
);

Script.propTypes = {
  src: PropTypes.string.isRequired
};

export const Title = ({ children }) => (
  <Tag>
    <title>{children}</title>
  </Tag>
);

Title.propTypes = {
  children: PropTypes.node.isRequired
};

export default Tag;

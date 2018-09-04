import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@packages/Components/Typography';
import * as defaultStyles from '@packages/themes/default/Components/List';

const StyledItemLink = styled.a`
  ${props => props.styles.ItemLink};
`;

const ItemLink = ({ children, link, styles, ...props }) => (
  <StyledItemLink href={link} styles={styles} {...props}>
    <Typography element="span">
      {children}
    </Typography>
  </StyledItemLink>
);

ItemLink.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  styles: PropTypes.object
};

ItemLink.defaultProps = {
  styles: defaultStyles
};

export default ItemLink;

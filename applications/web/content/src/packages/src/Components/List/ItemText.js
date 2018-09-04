import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@packages/Components/Typography';
import styled from 'styled-components';
import * as defaultStyles from '@packages/themes/default/Components/List';

const StyledItemText = styled(Typography)`
  ${props => props.styles.ItemText};
`;

const ItemText = ({ children, styles, ...props }) => (
  <StyledItemText element="span" styles={styles} {...props}>
    {children}
  </StyledItemText>
);

ItemText.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.object
};

ItemText.defaultProps = {
  styles: defaultStyles
};

export default ItemText;

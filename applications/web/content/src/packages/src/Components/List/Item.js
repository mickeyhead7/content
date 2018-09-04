import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as defaultStyles from '@packages/themes/default/Components/List';

const StyledItem = styled.li`
  ${props => props.styles.Item};
`;

const Item = ({ children, styles, ...props }) => (
  <StyledItem styles={styles} {...props}>
    {children}
  </StyledItem>
);

Item.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.object
};

Item.defaultProps = {
  styles: defaultStyles
};

export default Item;

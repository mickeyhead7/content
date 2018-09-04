import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as defaultStyles from '@packages/themes/default/Components/Table';

const StyledRow = styled.tr`
  ${props => props.styles.Row}
`;

const Row = ({ children, styles }) => (
  <StyledRow styles={styles}>
    {children}
  </StyledRow>
);

Row.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.object
};

Row.defaultProps = {
  styles: defaultStyles
};

export default Row;

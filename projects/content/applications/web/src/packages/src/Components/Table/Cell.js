import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as defaultStyles from '@packages/themes/default/Components/Table';

const StyledCell = styled.td`
${props => props.asNumber ? props.styles.CellAsNumber : props.styles.Cell}
`;

const Cell = ({ asNumber, children, styles }) => (
  <StyledCell asNumber={asNumber} styles={styles}>
    {children}
  </StyledCell>
);

Cell.propTypes = {
  asNumber: PropTypes.bool,
  children: PropTypes.node.isRequired,
  styles: PropTypes.object
};

Cell.defaultProps = {
  asNumber: false,
  styles: defaultStyles
};

export default Cell;

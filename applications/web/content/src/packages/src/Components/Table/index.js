import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as defaultStyles from '@packages/themes/default/Components/Table';

const StyledTable = styled.table`
  ${props => props.styles.Table}
`;

const Table = ({ children, styles }) => (
  <StyledTable styles={styles}>
    {children}
  </StyledTable>
);

Table.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.object
};

Table.defaultProps = {
  styles: defaultStyles
};

export default Table;

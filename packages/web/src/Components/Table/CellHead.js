import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as defaultStyles from '@packages/web/themes/default/Components/Table';

const StyledCellHead = styled.th`
  ${props => props.asNumber ? props.styles.CellHeadAsNumber : props.styles.CellHead}
`;

const CellHead = ({ asNumber, children, scope, styles }) => (
  <StyledCellHead asNumber={asNumber} scope={scope} styles={styles}>
    {children}
  </StyledCellHead>
);

CellHead.propTypes = {
  asNumber: PropTypes.bool,
  children: PropTypes.node.isRequired,theme: PropTypes.object,
  scope: PropTypes.oneOf(['col', 'row']),
  styles: PropTypes.object
};

CellHead.defaultProps = {
  asNumber: false,
  scope: 'col',
  styles: defaultStyles
};

export default CellHead;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as defaultStyles from '@packages/themes/default/Components/Table';

const StyledHead = styled.thead`
  ${props => props.styles.Head}
`;

const Head = ({ children, styles }) => (
  <StyledHead styles={styles}>
    {children}
  </StyledHead>
);

Head.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.object
};

Head.defaultProps = {
  styles: defaultStyles
};

export default Head;

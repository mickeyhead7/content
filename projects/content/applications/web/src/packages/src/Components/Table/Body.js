import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as defaultStyles from '@packages/themes/default/Components/Table';

const StyledBody = styled.tbody`
  ${props => props.styles.Body}
`;

const Body = ({ children, styles }) => (
  <StyledBody styles={styles}>
    {children}
  </StyledBody>
);

Body.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.object
};

Body.defaultProps = {
  styles: defaultStyles
};

export default Body;

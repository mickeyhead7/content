import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as defaultStyles from '@packages/web/themes/default/Components/List';

const StyledList = styled.ul`
  display: ${props => props.inline ? 'flex' : 'block'};
  ${props => props.styles.List}
`;

const List = ({ children, inline, styles, ...props }) => (
  <StyledList inline={inline} styles={styles} {...props}>
    {children}
  </StyledList>
);

List.propTypes = {
  children: PropTypes.node.isRequired,
  inline: PropTypes.bool,
  styles: PropTypes.object
};

List.defaultProps = {
  inline: false,
  styles: defaultStyles
};

export default List;

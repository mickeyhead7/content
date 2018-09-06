import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as defaultStyles from '@packages/themes/default/Components/Typography';

const Tag = ({ element, children, ...props }) => React.createElement(element, { className: props.className }, children);

const StyledTypography = styled(Tag)`
  ${props => props.styles[props.element]}
`;

const Typography = ({ children, element, styles, ...props }) => (
  <StyledTypography element={element} styles={styles} {...props}>
    {children}
  </StyledTypography>
);

Typography.propTypes = {
  children: PropTypes.string,
  element: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'span',
    'i',
    'strong',
    'small'
  ]).isRequired,
  styles: PropTypes.object
};

Typography.defaultProps = {
  styles: defaultStyles
};

export default Typography;

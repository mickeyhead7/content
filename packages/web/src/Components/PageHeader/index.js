import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@packages/web/Components/Typography';
import * as defaultStyles from '@packages/web/themes/default/Components/PageHeader';

const Header = styled.header`
  ${props => props.styles.Header}
`;

const PageHeader = ({ styles, title }) => (
  <Header styles={styles}>
    <Typography element="h1">
      {title}
    </Typography>
  </Header>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  styles: PropTypes.object
};

PageHeader.defaultProps = {
  styles: defaultStyles
};

export default PageHeader;

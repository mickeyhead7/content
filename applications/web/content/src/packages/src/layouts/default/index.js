import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SiteMenu from '@packages/Components/SiteMenu';
import * as defaultStyles from '@packages/themes/default/Layout';

const Body = styled.div`
  ${props => props.styles.Body}
`;

const Content = styled.div`
  ${props => props.styles.Content}
`;

const DefaultLayout = ({ children, styles }) => (
  <Body styles={styles}>
    <SiteMenu />
    <Content styles={styles}>
      {children}
    </Content>
  </Body>
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.object
};

DefaultLayout.defaultProps = {
  styles: defaultStyles
};

export default DefaultLayout;

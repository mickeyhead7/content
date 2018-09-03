import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import List from '@packages/web/Components/List';
import ListItem from '@packages/web/Components/List/Item';
import ListItemText from '@packages/web/Components/List/ItemText';
import ListItemLink from '@packages/web/Components/List/ItemLink';
import * as defaultStyles from '@packages/web/themes/default/Components/SiteMenu';

const Menu = styled.nav`
  ${props => props.styles.Menu}
`;

const Brand = styled(ListItem)`
  ${props => props.brandStyles}
`;

const SiteMenu = ({ active, styles }) => (
  <Menu styles={styles}>
    <List inline>
      <Brand brandStyles={styles.Brand}>
        <ListItemText>
          Content Builder
        </ListItemText>
      </Brand>
      <ListItem>
        <ListItemLink link="#">
          Dashboard
        </ListItemLink>
      </ListItem>
      <ListItem>
        <ListItemLink link="#">
          Models
        </ListItemLink>
      </ListItem>
      <ListItem>
        <ListItemLink link="#">
          Entries
        </ListItemLink>
      </ListItem>
    </List>
  </Menu>
);

SiteMenu.propTypes = {
  active: PropTypes.string,
  styles: PropTypes.object
};

SiteMenu.defaultProps = {
  active: 'dashboard',
  styles: defaultStyles
};

export default SiteMenu;

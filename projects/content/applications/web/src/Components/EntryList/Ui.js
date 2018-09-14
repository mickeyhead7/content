import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PageHeader from '@packages/Components/PageHeader';
import Table from '@packages/Components/Table';
import TableHead from '@packages/Components/Table/Head';
import TableBody from '@packages/Components/Table/Body';
import TableRow from '@packages/Components/Table/Row';
import TableCell from '@packages/Components/Table/Cell';
import TableCellHead from '@packages/Components/Table/CellHead';
import Checkbox from '@packages/Components/Input/Checkbox';
import Typography from '@packages/Components/Typography';
import { spacing } from '@packages/themes/default/settings';

const Container = styled.main`
  display: flex;
  width: 100%;
`;

const Content = styled.section`
  flex-grow: 1;
  max-height: 100%;
  overflow-y: auto;
  padding: ${spacing.spacious};
`;

const Menu = styled.section`
  background: #fafafa;
  border-left: 1px solid #ccc;
  padding: ${spacing.spacious};
`;

const EntryList = ({ entries }) => (
  <Container>
    <Content>
      <PageHeader title="Entries" />
      <Table>
        <TableHead>
          <TableRow>
            <TableCellHead>
              <Checkbox
                id="all-entries"
                name="all_entries"
              />
            </TableCellHead>
            <TableCellHead asNumber>ID</TableCellHead>
            <TableCellHead>Title</TableCellHead>
            <TableCellHead>Slug</TableCellHead>
            <TableCellHead>Date created</TableCellHead>
          </TableRow>
        </TableHead>
        <TableBody>
          {entries.map(entry => (
            <TableRow key={entry.id}>
              <TableCellHead>
                <Checkbox
                  id={`entry-${entry.id}`}
                  name={`entry_${entry.id}`}
                />
              </TableCellHead>
              <TableCellHead asNumber>{entry.id}</TableCellHead>
              <TableCell>{entry.title}</TableCell>
              <TableCell>{entry.slug}</TableCell>
              <TableCell>{entry.createdAt.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Content>
    <Menu>
      <Typography element="h2">
        Content type
      </Typography>
    </Menu>
  </Container>
);

EntryList.propTypes = {
  entries: PropTypes.array.isRequired
};

export default EntryList;

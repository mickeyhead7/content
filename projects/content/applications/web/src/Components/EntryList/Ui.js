import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from '@packages/Components/PageHeader';
import Table from '@packages/Components/Table';
import TableHead from '@packages/Components/Table/Head';
import TableBody from '@packages/Components/Table/Body';
import TableRow from '@packages/Components/Table/Row';
import TableCell from '@packages/Components/Table/Cell';
import TableCellHead from '@packages/Components/Table/CellHead';
import Checkbox from '@packages/Components/Input/Checkbox';

const EntryList = ({ entries }) => (
  <main>
    <PageHeader title="Entries" />
    <section>
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
    </section>
  </main>
);

EntryList.propTypes = {
  entries: PropTypes.array.isRequired
};

export default EntryList;

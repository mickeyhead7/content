import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from '@packages/web/Components/PageHeader';
import Table from '@packages/web/Components/Table';
import TableHead from '@packages/web/Components/Table/Head';
import TableBody from '@packages/web/Components/Table/Body';
import TableRow from '@packages/web/Components/Table/Row';
import TableCell from '@packages/web/Components/Table/Cell';
import TableCellHead from '@packages/web/Components/Table/CellHead';
import Checkbox from '@packages/web/Components/Input/Checkbox';

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
            <TableCellHead>Last modified</TableCellHead>
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
              <TableCell>{entry.createdAt}</TableCell>
              <TableCell>{entry.modifiedAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  </main>
);

EntryList.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired
};

export default EntryList;

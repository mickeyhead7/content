import React from 'react';
import DefaultLayout from '@packages/web/layouts/default';
import EntryList from '@app/Components/EntryList';
import { entries } from './fixtures';

const body = {
  query: `
    {
      blogPostEntries {
        id
        model
        createdAt {
          date
          timezone
        }
        title
        slug
        introduction
        content
        author
      }
    }
  `
};

const response = fetch('http://localhost:4001', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body)
});

response.then(result => result.json())
  .then(body => {
    console.log(body.data.blogPostEntries);
  }).catch(error => {
    console.log(error);
  });

const App = () => (
  <DefaultLayout>
    <EntryList entries={entries} />
  </DefaultLayout>
);

export default App;

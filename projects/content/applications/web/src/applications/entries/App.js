// require("babel-core/register");
// require("babel-polyfill");

import React from 'react';
import { Provider } from 'react-redux';
import store from '@app/store';
import DefaultLayout from '@packages/layouts/default';
import EntryList from '@app/Components/EntryList';

const App = () => (
  <Provider store={store}>
    <DefaultLayout>
      <EntryList />
    </DefaultLayout>
  </Provider>
);

export default App;

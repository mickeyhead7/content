export const FETCH_ENTRIES = 'FETCH_ENTRIES';
export const ADD_ENTRIES = 'ADD_ENTRIES';
export const ADD_ENTRIES_FAILED = 'ADD_ENTRIES_FAILED';

export const fetchEntries = () => ({
  type: FETCH_ENTRIES
});

export const addEntries = entries => ({
  type: ADD_ENTRIES,
  entries
});

export const addEntriesFiled = () => ({
  type: ADD_ENTRIES_FAILED
});

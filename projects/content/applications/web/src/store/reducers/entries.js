import { compose, prop } from 'ramda';
import { createReducer } from '@packages/lib/store/helpers';
import { ADD_ENTRIES, ADD_ENTRIES_FAILED, FETCH_ENTRIES } from '@app/store/actions/entries';

const initialState = {
  entries: []
};

const fetchEntries = (state = initialState) => ({
  ...state
});

const addEntries = (state = initialState, { entries }) => ({
  ...state,
  entries
});

const addEntriesFailed = (state = initialState) => ({
  ...state
});

const performAction = createReducer({
  [FETCH_ENTRIES]: fetchEntries,
  [ADD_ENTRIES]: addEntries,
  [ADD_ENTRIES_FAILED]: addEntriesFailed
});

const defaultSelector = prop('entries');

export const entriesSelector = compose(defaultSelector, prop('entries'));

export default (state = initialState, action) => performAction(state, action);

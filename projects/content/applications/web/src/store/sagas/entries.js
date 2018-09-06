import { call, put } from 'redux-saga/effects';
import { ADD_ENTRIES, ADD_ENTRIES_FAILED } from '@app/store/actions/entries';
import * as API from '@app/lib/api';

export function* fetchEntriesFromService () {
  try {
    const entries = yield call(API.fetchEntries);

    yield put({ type: ADD_ENTRIES, entries });
  } catch (error) {
    yield put({ type: ADD_ENTRIES_FAILED });
  }
}

import { takeEvery } from 'redux-saga/effects';
import { fetchEntriesFromService } from './entries';
import { FETCH_ENTRIES } from '@app/store/actions/entries';

export default function* saga () {
  yield takeEvery(FETCH_ENTRIES, fetchEntriesFromService);
}

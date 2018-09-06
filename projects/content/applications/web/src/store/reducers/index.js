import { combineReducers } from 'redux';
import i18n from '@packages/lib/store/reducers/i18n';
import entries from '@app/store/reducers/entries';

export default combineReducers({
  i18n,
  entries
});

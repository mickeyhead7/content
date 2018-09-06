import { mergeDeepRight } from 'ramda';
import { createReducer } from '@packages/lib/store/helpers';
import { ADD_PHRASES, SET_LOCALE } from '@packages/lib/store/actions/i18n';

const defaultLocale = 'en-GB';

const initialState = {
  locale: defaultLocale,
  phrases: {
    [defaultLocale]: {}
  }
};

const combinePhrases = (initialPhrases, newPhrases, locale) => {
  const combinedPhrases = mergeDeepRight(initialPhrases[locale], newPhrases[locale]);
  const result = {
    ...initialPhrases,
    [locale]: combinedPhrases
  };

  return result;
};

const addPhrases = (state = initialState, { phrases, locale }) => ({
  ...state,
  phrases: combinePhrases(state.phrases, phrases, locale)
});

const setLocale = (state = initialState, { locale }) => ({
  ...state,
  locale
});

const performAction = createReducer({
  [ADD_PHRASES]: addPhrases,
  [SET_LOCALE]: setLocale
});

export default (state = initialState, action) => performAction(state, action);

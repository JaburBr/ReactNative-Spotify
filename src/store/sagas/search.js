import api from '../../services/api';
import { call, put } from 'redux-saga/effects';
import { Creators as SearchActions } from '../ducks/search';

export function* search(action) {
  try {
    const response = yield call(api.get, `/songs?q=${action.payload.term}`);
    yield put(SearchActions.searchSuccess(response.data));
  } catch (error) {
    yield put(SearchActions.searchFailure('Erro ao buscar musicas da API.'));
  }
};

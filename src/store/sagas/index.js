import { all, takeLatest } from 'redux-saga/effects';

import { Types as AlbumsTypes } from '../ducks/albums';
import { Types as SearchTypes } from '../ducks/search';

import { getAlbums } from './albums';
import { search } from './search';

export default function* rootSaga() {
  return yield all([
    takeLatest(AlbumsTypes.GET_REQUEST, getAlbums),
    takeLatest(SearchTypes.REQUEST, search),
  ]);
};

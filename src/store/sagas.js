import { fork } from 'redux-saga/effects';
import authSagas from './auth/authSagas';
import generalSagas from './general/generalSagas';

/**
 * rootSaga
 */
export default function* root() {
  yield fork(authSagas);
  yield fork(generalSagas);
}
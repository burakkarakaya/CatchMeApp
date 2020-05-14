import { fork } from 'redux-saga/effects';
import authSagas from './auth/authSagas';

/**
 * rootSaga
 */
export default function* root() {
  yield fork(authSagas);
}
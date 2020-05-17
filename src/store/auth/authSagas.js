import { takeLatest, call, put } from 'redux-saga/effects';
import { ACTION_TYPES } from '_constants';
import { MemberService } from '_services';
import { Customers } from '_services/base';

// worker saga: Add description
function* signIn({ payload }) {
    try {
        yield put({ type: ACTION_TYPES.SIGN_IN_LOADING });
        const data = yield call(MemberService.Signin, payload);
        yield Customers.setUser(payload);
        yield Customers.setToken(data.data || {});
        yield put({ type: ACTION_TYPES.SIGN_IN_SUCCESS });
    } catch (error) {
        yield put({ type: ACTION_TYPES.SIGN_IN_FAILURE, payload: { errorMessage: error.message } });
    }
}

// worker saga: Add description
function* signUp({ payload }) {
    try {
        yield put({ type: ACTION_TYPES.SIGN_UP_LOADING });
        //const response = yield call({ content: MemberService, fn: MemberService.guest.signup }, payload);
        yield put({ type: ACTION_TYPES.SIGN_UP_SUCCESS, response });
    } catch (error) {
        console.log(error);
        yield put({ type: ACTION_TYPES.SIGN_UP_FAILURE, payload: { errorMessage: error.message } });
    }
}

function* resetPassword({ payload: { email } }) {
    try {
        yield put({ type: ACTION_TYPES.RESET_PASSWORD_LOADING });
        // const response = yield call({ content: MemberService, fn: MemberService.guest.resetPassword }, email, MemberService.configuration.password_reset_template);
        yield put({ type: ACTION_TYPES.RESET_PASSWORD_SUCCESS, payload: { response } });
    } catch (error) {
        console.log(error);
        yield put({ type: ACTION_TYPES.RESET_PASSWORD_FAILURE, payload: { errorMessage: error.message } });
    }
}
// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
    yield takeLatest(ACTION_TYPES.SIGN_IN_REQUEST, signIn);
    yield takeLatest(ACTION_TYPES.SIGN_UP_REQUEST, signUp);
    yield takeLatest(ACTION_TYPES.RESET_PASSWORD_REQUEST, resetPassword);
}

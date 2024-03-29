import { takeLatest, call, put } from 'redux-saga/effects';
import { 
    ACTION_TYPES, 
    RESET_AUTH_STATE, 
    ACTION_USER_LOGOUT, 
    USER_LOGGED_IN_STATUS, 
    SET_MEMBER, 
    SHOW_PRELOADER, 
    HIDE_PRELOADER,
    SHOW_MESSAGE, 
} from '_constants';
import { MemberService } from '_services';
import { Customers } from '_services/base';

// worker saga: Add description
function* signIn({ payload }) {
    try {
        yield put({ type: SHOW_PRELOADER });
        yield put({ type: ACTION_TYPES.SIGN_IN_LOADING });
        const data = yield call(MemberService.Signin, payload);
        yield Customers.setUser(payload);
        yield Customers.setAuthorization(data.data || {});
        yield put({ type: HIDE_PRELOADER });
        yield put({ type: SET_MEMBER, payload: data.data.member || {} });
        yield put({ type: ACTION_TYPES.SIGN_IN_SUCCESS });
        yield put({ type: USER_LOGGED_IN_STATUS, payload: true });

    } catch (error) {
        yield put({ type: HIDE_PRELOADER });
        yield put({ type: SHOW_MESSAGE, payload: { type: 'error', data: [error.message] } });
    }
}

// worker saga: Add description
function* signUp({ payload }) {
    try {
        yield put({ type: SHOW_PRELOADER });
        yield put({ type: ACTION_TYPES.SIGN_UP_LOADING });
        yield call(MemberService.Signup, payload);
        yield put({ type: HIDE_PRELOADER });
        yield put({ type: ACTION_TYPES.SIGN_UP_SUCCESS });
        yield put({ type: ACTION_TYPES.SIGN_IN_REQUEST, payload: payload });
    } catch (error) {
        yield put({ type: HIDE_PRELOADER });
        yield put({ type: SHOW_MESSAGE, payload: { type: 'error', data: [error.message] } });
    }
}

function* logout() {
    try {
        yield Customers.removeUser();
        yield put({ type: RESET_AUTH_STATE });
        yield put({ type: ACTION_TYPES.SIGN_IN_FAILURE, payload: { errorMessage: '' } });
        yield put({ type: USER_LOGGED_IN_STATUS, payload: false });
    } catch (error) {
        console.warn(error);
    }
}

function* resetPassword({ payload: { email } }) {
    try {
        yield put({ type: ACTION_TYPES.RESET_PASSWORD_LOADING });
        // const response = yield call({ content: MemberService, fn: MemberService.guest.resetPassword }, email, MemberService.configuration.password_reset_template);
        yield put({ type: ACTION_TYPES.RESET_PASSWORD_SUCCESS, payload: { response } });
    } catch (error) {
        yield put({ type: SHOW_MESSAGE, payload: { type: 'error', data: [error.message] } });
    }
}
// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
    yield takeLatest(ACTION_TYPES.SIGN_IN_REQUEST, signIn);
    yield takeLatest(ACTION_TYPES.SIGN_UP_REQUEST, signUp);
    yield takeLatest(ACTION_USER_LOGOUT, logout);
    yield takeLatest(ACTION_TYPES.RESET_PASSWORD_REQUEST, resetPassword);
}

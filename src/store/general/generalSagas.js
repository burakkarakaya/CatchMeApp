import { takeLatest, call, put } from 'redux-saga/effects';
import {
    CREATE_COMMENT,
    CREATE_COMMENT_FAILURE,
    LIKE_FEED,
    LIKE_FEED_FAILURE,
    UN_LIKE_FEED,
    UN_LIKE_FEED_FAILURE,
} from '_constants';
import {
    CommentService,
    LikingService,
} from '_services';


function* createComment({ payload }) {
    try {
        yield call(CommentService.Create, payload);
    } catch (error) {
        yield put({ type: CREATE_COMMENT_FAILURE, payload: { errorMessage: error.message } });
    }
}

function* likeFeed({ payload }) {
    try {
        yield call(LikingService.Like, payload);
    } catch (error) {
        yield put({ type: LIKE_FEED_FAILURE, payload: { errorMessage: error.message } });
    }
}

function* unLikeFeed({ payload }) {
    try {
        yield call(LikingService.UnLike, payload);
    } catch (error) {
        yield put({ type: UN_LIKE_FEED_FAILURE, payload: { errorMessage: error.message } });
    }
}


// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
    yield takeLatest(CREATE_COMMENT, createComment);
    yield takeLatest(LIKE_FEED, likeFeed);
    yield takeLatest(UN_LIKE_FEED, unLikeFeed);
}


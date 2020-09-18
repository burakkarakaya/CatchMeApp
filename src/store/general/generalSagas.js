import { takeLatest, call, put } from 'redux-saga/effects';
import {
    CREATE_COMMENT,
    CREATE_COMMENT_FAILURE,

    LIKE_FEED,
    LIKE_FEED_FAILURE,
    UN_LIKE_FEED,
    UN_LIKE_FEED_FAILURE,

    UN_FOLLOW,
    UN_FOLLOW_FAILURE,
    FOLLOW,
    FOLLOW_FAILURE,

} from '_constants';
import {
    CommentService,
    LikingService,
    FollowingService,
} from '_services';

/*

*/
const timeout = ms => new Promise(res => setTimeout(res, ms))

/* 
    CommentService
*/
function* createComment({ payload }) {
    try {
        yield call(CommentService.Create, payload);
    } catch (error) {
        yield put({ type: CREATE_COMMENT_FAILURE, payload: { errorMessage: error.message } });
    }
}

/* 
    LikingService
*/
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

/* 
    FollowingService
*/
function* unFollow({ payload }) {
    try {
        yield call(FollowingService.UnFollow, payload);
    } catch (error) {
        yield put({ type: UN_FOLLOW_FAILURE, payload: { errorMessage: error.message } });
    }
}

function* follow({ payload }) {
    try {
        yield call(FollowingService.Follow, payload);
    } catch (error) {
        yield put({ type: FOLLOW_FAILURE, payload: { errorMessage: error.message } });
    }
}

/* 
    watcher
*/
export default function* watcherSaga() {

    yield takeLatest(CREATE_COMMENT, createComment);

    yield takeLatest(LIKE_FEED, likeFeed);
    yield takeLatest(UN_LIKE_FEED, unLikeFeed);

    yield takeLatest(UN_FOLLOW, unFollow);
    yield takeLatest(FOLLOW, follow);
}
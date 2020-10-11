const fonts = {
    'regular': require('./fonts/Inter-Regular.ttf'),
    'medium': require('./fonts/Inter-Medium.ttf'),
    'bold': require('./fonts/Inter-Bold.ttf')
};

const images = {
    logo: require('./images/logo.png'),
    facebookIco: require('./images/facebookIco.png'),
    facebookIcoRounded: require('./images/facebookIcoRounded.png'),

    /* 
        bottom bar
    */
    feedsLight: require('./images/bottomBar/feeds.png'),
    feedsDark: require('./images/bottomBar/feeds-dark.png'),
    searchLight: require('./images/bottomBar/search.png'),
    searchDark: require('./images/bottomBar/search-dark.png'),
    uploadLight: require('./images/bottomBar/upload.png'),
    uploadDark: require('./images/bottomBar/upload-dark.png'),
    notificationsLight: require('./images/bottomBar/notifications.png'),
    notificationsDark: require('./images/bottomBar/notifications-dark.png'),
    userLight: require('./images/bottomBar/user.png'),
    userDark: require('./images/bottomBar/user-dark.png'),

    /* 
        feedItem
    */
    liked: require('./images/feedItem/liked.png'),
    likedActive: require('./images/feedItem/liked-active.png'),
    comment: require('./images/feedItem/comment.png'),
    share: require('./images/feedItem/share.png'),

    likedDark: require('./images/feedItem/likedDark.png'),
    commentDark: require('./images/feedItem/commentDark.png'),
    shareDark: require('./images/feedItem/shareDark.png'),

    /* 
        upload
    */
    captionActive: require('./images/upload/caption-active.png'),
    captionPassive: require('./images/upload/caption-passive.png'),
    duelActive: require('./images/upload/duel-active.png'),
    duelsPassive: require('./images/upload/duels-passive.png'),
    videoActive: require('./images/upload/video-active.png'),

    /* general */
    threedots: require('./images/3dots.png'),
    threedotsHorz: require('./images/3dots-horz.png'),
    success: require('./images/success.png'),
    successBlue: require('./images/success-blue.png'),
    ellipse: require('./images/ellipse.png'),
    searchGray: require('./images/search-gray.png'),
    close: require('./images/close.png'),
    newMessage: require('./images/newMessage.png'),
    menu: require('./images/menu.png'),
    likes: require('./images/likes.png'),
    editProfile: require('./images/editProfile.png'),
    settings: require('./images/settings.png'),
    back: require('./images/back.png'),
    backArrow: require('./images/back-arrow.png'),
    selectVideo: require('./images/select-video.png'),
};

export { images, fonts };
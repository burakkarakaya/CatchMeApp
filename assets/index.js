const fonts = {
    'regular': require('./fonts/Inter-Regular.ttf'),
    'medium': require('./fonts/Inter-Medium.ttf'),
    'bold': require('./fonts/Inter-Bold.ttf')
};

const images = {
    logo: require('./images/logo.png'),
    facebookIco: require('./images/facebookIco.png'),

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


    /* general */
    threedots: require('./images/3dots.png'),
    threedotsHorz: require('./images/3dots-horz.png'),
    success: require('./images/success.png'),
    successBlue: require('./images/success-blue.png'),
    ellipse: require('./images/ellipse.png'),
    searchGray: require('./images/search-gray.png'),
    close: require('./images/close.png'),
};

export { images, fonts };
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
    userDark: require('./images/bottomBar/user-dark.png')
};

export { images, fonts };
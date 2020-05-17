import { AsyncStorage } from 'react-native';

export const setItem = async ({ key, value }) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        // saving error
    }
}

export const getItem = async ({ key }) => {
    try {
        return await AsyncStorage.getItem( key );
    } catch (e) {
        // read error
    }
}
import 'react-native-gesture-handler';
import React from 'react';
import { LocalizationProvider } from '_context';
import RootNavigator from '_navigations';
import { CustomModal } from '_components';
import { Provider as StoreProvider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store from '_store';

export default function App() {
  return (
    <StoreProvider store={store}>
      <LocalizationProvider>
        <SafeAreaProvider>
          <CustomModal />
          <RootNavigator />
        </SafeAreaProvider>
      </LocalizationProvider>
    </StoreProvider>
  );
}
import 'react-native-gesture-handler';
import React from 'react';
import { LocalizationProvider } from '_context';
import RootNavigator from '_navigations';
import { CustomModal } from '_components';
import { Provider as StoreProvider } from 'react-redux';
import store from '_store';

export default function App() {
  return (
    <StoreProvider store={store}>
      <LocalizationProvider>
        <CustomModal />
        <RootNavigator />
      </LocalizationProvider>
    </StoreProvider>
  );
}
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { LocalizationProvider } from '_context';
import { assetsLoader, typography } from '_module';

import RootNavigator from '_navigations';

import { Provider as StoreProvider } from 'react-redux';
import store from '_store';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {

    assetsLoader()
      .then(() => {
        typography();
        setLoaded(true);
      });

  }, []);

  if (!loaded)
    return null;

  return (
    <StoreProvider store={store}>
      <LocalizationProvider>
        <RootNavigator />
      </LocalizationProvider>
    </StoreProvider>
  );
}

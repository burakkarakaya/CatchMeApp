import React, { useEffect, useState } from 'react';
import { LocalizationProvider } from '_context';
import { assetsLoader, typography } from '_module';
import { Signin, Signup } from '_scenes/login';

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
        <Signin />
      </LocalizationProvider>
    </StoreProvider>
  );
}

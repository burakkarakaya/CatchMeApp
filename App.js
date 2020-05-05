import React, { useEffect, useState } from 'react';
import { LocalizationProvider } from '_context';
import { assetsLoader, typography } from '_module';
import { Signin } from '_scenes/login';

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
    <LocalizationProvider>
      <Signin />
    </LocalizationProvider>
  );
}

import React, { useEffect, useState } from 'react';
import { LocalizationProvider } from './src/context';
import { assetsLoader, typography } from './src/module';
import Form from './src/form/Form';
import { signinForm, signupForm, changePassword, forgotPasswordForm, changeEmailForm, editProfileForm } from './src/config';

export default function App() {
  const [loaded, setLoaded] = useState(false),
    _config = editProfileForm();

  useEffect(() => {

    assetsLoader()
      .then(() => {
        typography();
        setLoaded(true);
      });
      
  }, []);

  if( !loaded  )
    return null;

  return (
    <LocalizationProvider>
      <Form config={_config} />
    </LocalizationProvider>
  );
}

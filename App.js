import React from 'react';
import { LocalizationProvider } from './src/context';
import Form from './src/form/Form';
import { signinForm, signupForm, changePassword, forgotPasswordForm, changeEmailForm, editProfileForm } from './src/config';

export default function App() {
  const config = editProfileForm();
  return (
    <LocalizationProvider>
      <Form config={config} />
    </LocalizationProvider>
  );
}

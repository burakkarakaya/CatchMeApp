import React from 'react';
import { LocalizationProvider } from './src/context';
import Form from './src/form/Form';
import { signinForm, signupForm } from './src/config';

export default function App() {
  const config = signupForm();
  return (
    <LocalizationProvider>
      <Form config={config} />
    </LocalizationProvider>
  );
}

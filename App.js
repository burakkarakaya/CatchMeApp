import React from 'react';
import { LocalizationProvider } from './src/context';
import Form from './src/form/Form';

export default function App() {
  return (
    <LocalizationProvider>
      <Form />
    </LocalizationProvider>
  );
}

import React from 'react';
import LocalizationProvider from './src/localization/LocalizationProvider';
import Test from './src/test';

export default function App() {
  return (
    <LocalizationProvider>
      <Test />
    </LocalizationProvider>
  );
}

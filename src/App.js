import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// routes
import Routes from './routes';

// components
import Header from './components/Header';

// styles
import GlobalStyle from './styles/global';

export default function src() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

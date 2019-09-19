import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import store from './store';
// routes
import Routes from './routes';

// components
import Header from './components/Header';

// styles
import GlobalStyle from './styles/global';

export default function src() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

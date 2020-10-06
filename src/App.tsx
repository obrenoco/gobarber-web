import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppProvider from './hooks/index';

import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>

    {/* <SignUp /> */}
    <GlobalStyle />
  </Router>
);

export default App;

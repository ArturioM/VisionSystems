import React from 'react';
import { Header, Welcome, Main } from './components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <body>
      <Header />
      <Route path="/" component={Welcome} exact />
      <Route path="/main" component={Main} exact />
    </body>
  );
}

export default App;

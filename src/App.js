import React from 'react';
import { Header, Welcome, Main } from './components';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Route path="/" component={Welcome} exact />
      <Route path="/main" component={Main} exact />
    </div>
  );
}

export default App;

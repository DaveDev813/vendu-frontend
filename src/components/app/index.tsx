import React, { ReactElement } from 'react';
import './App.scss';
import Main from '../../pages/Main';
import { Switch, Route } from 'react-router-dom';

const App: React.FC = (): ReactElement => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact={true} path="/" component={Main} />
      </Switch>
    </React.Fragment>
  );
};

export default App;

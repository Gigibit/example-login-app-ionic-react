import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute, RequiresTutorialRoute } from './utils/routing';
import Account from './pages/Account';
import Login from './pages/Login';
import Support from './pages/Support';
import Signup from './pages/Signup';
import Tutorial from './pages/Tutorial';
import AppStack from './pages/AppStack';
import { IonApp, IonSplitPane, IonPage, IonReactRouter } from '@ionic/react';
import { Provider } from 'react-redux';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import './theme.css';

import store from './store';
import Axios from 'axios';

Axios.interceptors.request.use(
  request => {
    request.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
    return request
  }
)

const App = () => (
  <Provider store={store}>
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <IonPage id="main">
            <Switch>
              <PrivateRoute path="/account" component={Account} />
              <Route path="/tutorial" component={Tutorial} />
              <Route path="/logout" />
              <RequiresTutorialRoute path="/login" component={Login} />
              <PrivateRoute path="/support" component={Support} />
              <PrivateRoute path="/signup" component={Signup} />
              <PrivateRoute path="/" component={AppStack} />
            </Switch>
          </IonPage>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  </Provider>
);

export default App;

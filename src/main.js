import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import {
  ErrorPage,
  Signup,
  Login,
  Upload,
  Home
} from 'pages';
import { loadUser } from './redux/action/auth';
import { Layout, Nav } from './components';
import ScrollToTop from './utils/scrollToTop';
import PrivateRoute from './utils/privateRoute';
import setAuthToken from './utils/setToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const Main = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
  <Provider store={store}>
    <ScrollToTop />
    <Layout>
      <Switch>
        <Route exact path='/' component={Signup} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/upload' component={Upload} />
        <PrivateRoute exact path='/home' component={Home} />
        <Route exact path='/404' component={ErrorPage} />
        <Redirect to="/404" />
      </Switch>
    </Layout>
    <div style={{ position: 'fixed' }}>
        <Nav />
      </div>
  </Provider>
  );
};

export default Main;

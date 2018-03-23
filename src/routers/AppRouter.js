import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import DashboardPage from '../components/DashboardPage';
import AboutPage from '../components/AboutPage';
import ResumePage from '../components/ResumePage';
import ContactPage from '../components/ContactPage';
import EditForm from '../components/EditForm';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true}/>
        <PrivateRoute path="/dashboard" component={DashboardPage}/>
        <PrivateRoute path="/about" component={AboutPage} />
        <PrivateRoute path="/resume" component={ResumePage} />
        <PrivateRoute path="/contact" component={ContactPage} />
        <PrivateRoute path="/edit" component={EditForm}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

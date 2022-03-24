import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Loader from './components/common/Loader';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import PageContent from './components/layout/PageContent';
import Home from './components/Home';
import Task from './components/Task';
import Form from './components/Form';
import Formik from './components/Formik';
import YupValidator from './components/YupValidator';
import RHF from './components/RHF';
import { getDebugInfo } from './utils/debug';
import './assets/style/app.scss';

getDebugInfo();

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
      <Loader />
      <div className="app-container">
        <Header />
        <PageContent>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/task" exact component={Task} />
            <Route path="/form" exact component={Form} />
            <Route path="/formik" exact component={Formik} />
            <Route path="/rhf" exact component={RHF} />
            <Route path="/yup" exact component={YupValidator} />
            <Redirect to="/" />
          </Switch>
        </PageContent>
      </div>
      <Footer />
    </BrowserRouter>
  </Provider>
);

export default App;

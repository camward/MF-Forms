import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import StoreWrapper from './components/common/StoreWrapper';
import Loader from './components/common/Loader';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import PageContent from './components/layout/PageContent';
import Home from './components/Home';
import Form from './components/Form';
import TaskList from './components/Task/List';
import TaskDetail from './components/Task/Detail';
import { getDebugInfo } from './utils/debug';
import './assets/style/app.scss';

getDebugInfo();

const App = () => (
  <StoreWrapper hasStore>
    <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
      <Loader />
      <div className="app-container">
        <Header />
        <PageContent bgExclusionList={['task']}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/task" exact component={TaskList} />
            <Route path="/task/:id" exact component={TaskDetail} />
            <Route path="/form" exact component={Form} />
            <Redirect to="/" />
          </Switch>
        </PageContent>
      </div>
      <Footer />
    </BrowserRouter>
  </StoreWrapper>
);

export default App;

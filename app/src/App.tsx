import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// =========== Components =========== //
const Login = lazy(() => import ('./pages/login/Login'));
// const Registration = lazy(() => import ('./components/Registration'));
// const Home = lazy(() => import ('./components/Home/Home'));
// const Profile = lazy(() => import ('./components/Profile/Profile'));
// const Task = lazy(() => import ("./components/TaskList/Task";));

const client = new ApolloClient({
  uri: 'http://localhost:3005/graphql',
});

const App = () => {
  return (
      <ApolloProvider client={client}>
          <Suspense fallback={<div>Loading</div>}>
            <BrowserRouter>
              <Switch>
                {/*<Route exact path="/" component={Home} />*/}
                <Route path="/" component={Login} />
                {/*<Route path="/registration" component={Registration} />*/}
                {/*<Route path="/profile" component={Profile} />*/}
                {/*<Route path="/taskList" component={Task} />*/}
              </Switch>
            </BrowserRouter>
          </Suspense>
      </ApolloProvider>
  );
}

export default App;

import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';

const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/sign-up'));
const NotFound = lazy(() => import('./pages/not-found'));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} componenet={Login} />
          <Route path={ROUTES.SIGN_UP} componenet={SignUp} />
          <Route componenet={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;

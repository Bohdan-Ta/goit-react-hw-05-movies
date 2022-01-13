import { Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';

import Section from '../Section';
import AppBar from '../AppBar';
import Loader from '../Loader';

import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() =>
  import('../../veiws/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('../../veiws/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../../veiws/MovieDetailsPage' /* webpackChunkName: "moviesDetails-page" */
  ),
);
const NotFoundView = lazy(() =>
  import('../../veiws/NotFoundView' /* webpackChunkName: "not-found" */),
);

function App() {
  return (
    <div>
      <Section>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/films" exact>
              <MoviesPage />
            </Route>
            <Route path="/films/:filmId">
              <MovieDetailsPage />
            </Route>
            <Route>
              <NotFoundView />
            </Route>
          </Switch>
        </Suspense>
        <ToastContainer />
      </Section>
    </div>
  );
}

export default App;

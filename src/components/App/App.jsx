import { Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';

import Section from '../Section';
import AppBar from '../AppBar';
import Loader from '../Loader';

import 'react-toastify/dist/ReactToastify.css';

const AsyncHomePage = lazy(() =>
  import('../../veiws/HomePage' /* webpackChunkName: "home-page" */),
);
const AsyncMoviesPage = lazy(() =>
  import('../../veiws/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const AsyncMovieDetailsPage = lazy(() =>
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
            <Route path="/" exact component={AsyncHomePage} />

            <Route path="/films" exact component={AsyncMoviesPage} />

            <Route path="/films/:slug" component={AsyncMovieDetailsPage} />

            <Route component={NotFoundView} />
          </Switch>
        </Suspense>
        <ToastContainer />
      </Section>
    </div>
  );
}

export default App;

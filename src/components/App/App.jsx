import { Route, Switch, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Section from '../Section';
import AppBar from '../AppBar';
import Loader from '../Loader';

import 'react-toastify/dist/ReactToastify.css';
import s from '../App/App.module.css';

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
  const location = useLocation();
  return (
    <div>
      <Section>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <TransitionGroup>
            <CSSTransition timeout={200} classNames={s.fade} key={location.key}>
              <Switch>
                <Route path="/" exact component={AsyncHomePage} />

                <Route path="/films" exact component={AsyncMoviesPage} />

                <Route path="/films/:slug" component={AsyncMovieDetailsPage} />

                <Route component={NotFoundView} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </Suspense>
        <ToastContainer />
      </Section>
    </div>
  );
}

export default App;

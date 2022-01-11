import { Route, Switch } from 'react-router-dom';

import Section from '../Section';
import AppBar from '../AppBar';
import HomePage from '../../veiws/HomePage';
import MoviesPage from '../../veiws/MoviesPage';
import MovieDetailsPage from '../../veiws/MovieDetailsPage';
import NotFoundView from '../../veiws/NotFoundView';

function App() {
  return (
    <Section>
      <AppBar />
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
    </Section>
  );
}

export default App;

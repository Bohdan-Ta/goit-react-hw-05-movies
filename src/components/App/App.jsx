import Section from '../Section';
import AppBar from '../AppBar';
import HomePage from '../../veiws/HomePage';

import './App.css';
import { Route, Switch } from 'react-router-dom';
import MoviesPage from '../../veiws/MoviesPage';
import NotFoundView from '../../veiws/NotFoundView';
import MovieDetailsPage from '../../veiws/MovieDetailsPage';

function App() {
  return (
    <Section>
      <AppBar />
      <Switch>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/films" exact>
          <MoviesPage />
        </Route>
        <Route path="/films/:filmId">
          <MovieDetailsPage />
        </Route>
        <Route path="/help"></Route>
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </Section>
  );
}

export default App;

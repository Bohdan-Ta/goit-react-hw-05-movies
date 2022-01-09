import Section from '../Section';
import AppBar from '../AppBar';
import HomePage from '../../veiws/HomePage';

import './App.css';
import { Route, Switch } from 'react-router-dom';
import MoviesPage from '../../veiws/MoviesPage';

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
        <Route path="/help"></Route>
      </Switch>
    </Section>
  );
}

export default App;

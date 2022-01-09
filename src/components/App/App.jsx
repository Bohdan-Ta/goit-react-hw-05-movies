import Section from '../Section';
import AppBar from '../AppBar';
import HomePage from '../../veiws/HomePage';

import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Section>
      <AppBar />
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/films"></Route>
        <Route path="/help"></Route>
      </Switch>
    </Section>
  );
}

export default App;

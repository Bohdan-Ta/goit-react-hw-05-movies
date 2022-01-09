// import { Route } from 'react-router-dom';
import Navigation from '../Navigation';
import s from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={s.header}>
      <Navigation />
      {/* <Route path="/"></Route> */}
    </header>
  );
}

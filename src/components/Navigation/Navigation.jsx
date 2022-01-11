import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';

function Navigation() {
  return (
    <nav>
      <NavLink exact to="/" className={s.link} activeClassName={s.activLink}>
        Home
      </NavLink>
      <NavLink to="/films" className={s.link} activeClassName={s.activLink}>
        Films
      </NavLink>
    </nav>
  );
}

export default Navigation;

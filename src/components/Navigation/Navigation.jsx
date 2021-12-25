import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={s.Container}>
      <nav>
        <NavLink exact to="/" className={s.link} activeClassName={s.activLink}>
          About
        </NavLink>
        <NavLink to="/movies" className={s.link} activeClassName={s.activLink}>
          Films
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;

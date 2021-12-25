import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        exact
        to="/home"
        className={s.link}
        activeClassName={s.activLink}
      >
        Home
      </NavLink>
      <NavLink to="/films" className={s.link} activeClassName={s.activLink}>
        Films
      </NavLink>
      <NavLink to="/help" className={s.link} activeClassName={s.activLink}>
        Helps
      </NavLink>
    </nav>
  );
};

export default Navigation;

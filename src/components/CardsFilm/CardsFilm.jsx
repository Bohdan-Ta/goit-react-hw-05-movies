import { Link, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';
import noPoster from '../../images/pngwing.png';
import s from './CardsFilm.module.css';

function CardsFilm({ films }) {
  const location = useLocation();
  return (
    <>
      <ul className={s.list}>
        {films &&
          films.map(({ id, poster_path, title, name }) => (
            <li key={id} className={s.item}>
              <Link
                to={{
                  pathname: `/films/${id}`,
                  state: { from: location },
                }}
                className={s.title}
              >
                <img
                  className={s.image}
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w400${poster_path}`
                      : noPoster
                  }
                  alt={title || name}
                />
                <h2 className={s.title}>{title || name}</h2>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}

CardsFilm.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default CardsFilm;

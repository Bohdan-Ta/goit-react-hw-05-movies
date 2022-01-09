import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './CardsFilm.module.css';

export default function CardsFilm({ films }) {
  const location = useLocation();
  return (
    <ul className={s.list}>
      {films &&
        films.map(({ id, poster_path, title, name }) => (
          <li key={id} className={s.item}>
            <Link
              to={{
                pathname: `/movies/${id}`,
                state: { from: location },
              }}
              className={s.title}
            >
              <img
                className={s.image}
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w400${poster_path}`
                    : 'No Images'
                }
                alt={title ? title : name}
              />
              <h2 className={s.title}>{title ? title : name}</h2>
            </Link>
          </li>
        ))}
    </ul>
  );
}

CardsFilm.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

import { useEffect, useState } from 'react';
import {
  Switch,
  Route,
  NavLink,
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import { fetchAPI } from '../../servises/api';
import s from './MovieDetailsPage.module.css';
import Review from '../Reviews/Reviews';
import Cast from '../Cast';

export default function MovieDetailsPage() {
  const { filmId } = useParams();
  const location = useLocation();
  const history = useHistory();
  const [film, setFilm] = useState(null);
  const { url, path } = useRouteMatch();

  useEffect(() => {
    const fechFilms = async () => {
      const film = await fetchAPI(`/movie/${filmId}?`);
      setFilm(film);
    };
    fechFilms();
  }, [filmId]);

  const onGoToBack = () => {
    history.push(location?.state?.from ?? '/home');
  };
  return (
    <>
      <div className={s.searchbar}>
        <button type="button" onClick={onGoToBack} className={s.button}>
          Go to back
        </button>
      </div>

      {film && (
        <div className={s.container}>
          <img
            className={s.image}
            src={
              film.poster_path
                ? `https://image.tmdb.org/t/p/w400${film.poster_path}`
                : 'No Images'
            }
            alt={film.title ? film.title : film.name}
          />
          <div className={s.box}>
            <h2 className={s.title}>{film.title || film.name}</h2>
            <p className={s.rating}>
              User Score:
              <span className={s.descr}> {film.vote_average} </span>
            </p>
            <p className={s.subtitle}>
              Overview:
              <span className={s.descr}>{film.overview}</span>
            </p>
            <p className={s.subtitle}>
              Genres:
              <span className={s.genres}>
                {film.genres.map(genre => genre.name).join(' / ')}
              </span>
            </p>
          </div>
        </div>
      )}

      <div className={s.searchbar}>
        <nav>
          <NavLink
            to={`${url}/cast`}
            className={s.link}
            activeClassName={s.activeLink}
          >
            Cast
          </NavLink>
          <NavLink
            to={`${url}/reviews`}
            className={s.link}
            activeClassName={s.activeLink}
          >
            Reviews
          </NavLink>
        </nav>

        {/* <button type="button" onClick={null} className={s.button}>
          Cast
        </button>
        <button type="button" onClick={null} className={s.button}>
          Reviews
        </button> */}
      </div>
      <Switch>
        <Route path={`${path}/reviews`}>
          <Review filmId={filmId} />
        </Route>
        <Route path={`${path}/cast`}>
          <Cast filmId={filmId} />
        </Route>
      </Switch>
    </>
  );
}

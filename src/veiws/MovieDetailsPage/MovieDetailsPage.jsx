import { useEffect, useState, lazy, Suspense } from 'react';
import {
  Switch,
  Route,
  NavLink,
  useParams,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import { fetchAPI } from '../../servises/api';
import Loader from '../../components/Loader';

import noPoster from '../../images/videofilm.png';

import s from './MovieDetailsPage.module.css';

const Review = lazy(() =>
  import('../Reviews' /* webpackChunkName: "review" */),
);
const Cast = lazy(() => import('../Cast' /* webpackChunkName: "cast" */));

export default function MovieDetailsPage() {
  const [film, setFilm] = useState(null);
  const history = useHistory();
  const { filmId } = useParams();
  const { url, path } = useRouteMatch();

  useEffect(() => {
    async function fechFilms() {
      const film = await fetchAPI(`/movie/${filmId}?`);
      setFilm(film);
    }
    fechFilms();
  }, [filmId]);

  const onGoToBack = () => {
    history.goBack();
  };

  return (
    <>
      <div className={s.searchbar}>
        <button type="button" onClick={onGoToBack} className={s.button}>
          Go back
        </button>
      </div>

      {film && (
        <div className={s.container}>
          <img
            className={s.image}
            src={
              film.poster_path
                ? `https://image.tmdb.org/t/p/w400${film.poster_path}`
                : noPoster
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
                {film.genres.map(genre => genre.name).join(' | ')}
              </span>
            </p>
          </div>
        </div>
      )}

      <div className={s.searchbar}>
        <nav>
          <NavLink
            to={`${url}/cast`}
            className={s.button}
            activeClassName={s.activeLink}
          >
            Cast
          </NavLink>
          <NavLink
            to={`${url}/reviews`}
            className={s.button}
            activeClassName={s.activeLink}
          >
            Reviews
          </NavLink>
        </nav>
      </div>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={`${path}/reviews`}>
            <Review filmId={filmId} />
          </Route>
          <Route path={`${path}/cast`}>
            <Cast filmId={filmId} />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

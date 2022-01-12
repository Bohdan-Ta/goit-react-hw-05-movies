import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { fetchAPI } from '../../servises/api';
import SearchBar from '../../components/SearchBar';
import CardsFilm from '../../components/CardsFilm';
import Button from '../../components/Button';
import s from './MoviesPage.module.css';

export default function MoviesPage() {
  const location = useLocation();
  const history = useHistory();
  const [value, setValue] = useState(null);
  const [films, setFilms] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!value) {
      return;
    }

    const fechFilms = async () => {
      const films = await fetchAPI(`search/movie?query=${value}&page=${page}`);
      setFilms(films);
    };

    fechFilms();
  }, [value, page]);

  const onFormSubmit = value => {
    setValue(value);
    history.push({ ...location, search: `value=${value}` });
  };
  const nextPageFilms = () => {
    setPage(page => page + 1);
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  return (
    <div className={s.container}>
      <SearchBar onSubmit={onFormSubmit} />
      {films && <CardsFilm films={films.results} />}
      {films && <Button loadMore={nextPageFilms} />}
    </div>
  );
}

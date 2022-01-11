import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { fetchAPI } from '../../servises/api';
import SearchBar from '../../components/SearchBar';
import CardsFilm from '../../components/CardsFilm';

export default function MoviesPage() {
  const location = useLocation();
  const history = useHistory();
  const [value, setValue] = useState(null);
  const [films, setFilms] = useState(null);

  useEffect(() => {
    if (!value) {
      return;
    }

    const fechFilms = async () => {
      const films = await fetchAPI(`search/movie?query=${value}`);
      setFilms(films);
    };

    fechFilms();
  }, [value]);

  const onFormSubmit = value => {
    setValue(value);
    history.push({ ...location, search: `value=${value}` });
  };

  return (
    <>
      <SearchBar onSubmit={onFormSubmit} />
      {films && <CardsFilm films={films.results} />}
    </>
  );
}

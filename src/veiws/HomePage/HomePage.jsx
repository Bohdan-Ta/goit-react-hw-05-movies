import { useEffect, useState } from 'react';
import { fetchAPI } from '../../servises/api';
import CardsFilm from '../../components/CardsFilm';
import s from './HomePage.module.css';

export default function HomePage() {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    const fechFilms = async () => {
      const films = await fetchAPI(`/trending/movie/day?`);
      setFilms(films);
    };
    fechFilms();
  }, []);

  return (
    <>
      <h1 className={s.title}> Trending today </h1>
      {films && <CardsFilm films={films.results} />}
    </>
  );
}

import { useEffect, useState } from 'react';
import { fetchAPI } from '../../servises/api';
import CardsFilm from '../../components/CardsFilm';
import Button from '../../components/Button';
import s from './HomePage.module.css';

export default function HomePage() {
  const [films, setFilms] = useState(null);
  const [page, setPage] = useState(2);

  useEffect(() => {
    const fechFilms = async () => {
      const films = await fetchAPI(`/trending/movie/day?page=${page}`);
      setFilms(films);
    };
    fechFilms();
  }, [page]);

  const loadMore = () => {
    setPage(page => page + 1);
  };

  return (
    <>
      <h1 className={s.title}> Trending today </h1>
      {films && <CardsFilm films={films.results} />}
      <Button loadMore={loadMore} />
    </>
  );
}

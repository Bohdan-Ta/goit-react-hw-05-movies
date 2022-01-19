import { useEffect, useState } from 'react';
import { fetchAPI } from '../../servises/api';
import CardsFilm from '../../components/CardsFilm';
import Button from '../../components/Button';
import s from './HomePage.module.css';

export default function HomePage() {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fechFilms = async () => {
      const { results } = await fetchAPI(`/trending/movie/day?page=${page}`);
      setFilms(films => [...films, ...results]);
    };

    fechFilms();
  }, [page]);

  const nextPageFilms = () => {
    setPage(page => page + 1);
  };
  return (
    <div className={s.container}>
      <h1 className={s.title}> Trending today </h1>
      {films && <CardsFilm films={films} />}
      {films && <Button loadMore={nextPageFilms} />}
    </div>
  );
}

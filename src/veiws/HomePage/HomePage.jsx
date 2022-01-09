import { useEffect, useState } from 'react';
import { fetchAPI } from '../../servises/api';
import CardsFilm from '../../components/CardsFilm';

export default function HomePage() {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    const fechFilms = async () => {
      const films = await fetchAPI(`/trending/movie/day?`);
      setFilms(films);
    };
    fechFilms();
  }, []);

  return <>{films && <CardsFilm films={films.results} />}</>;
}

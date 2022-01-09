import { useEffect, useState } from 'react';
import { fetchAPI } from '../../servises/api';
import CardFilm from '../../components/CardsFilm';

export default function HomePage() {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    const fechFilms = async () => {
      const films = await fetchAPI(`/trending/movie/day?`);
      setFilms(films);
    };
    fechFilms();
    console.log(films);
  }, []);

  return (
    <>
      {films && (
        <>
          <CardFilm films={films.results} />
        </>
      )}
    </>
  );
}

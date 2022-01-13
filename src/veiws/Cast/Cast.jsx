import { useState, useEffect } from 'react';
import { fetchAPI } from '../../servises/api';
import nofaces from '../../images/noFace.png';
import s from './Cast.module.css';

export default function Casts({ filmId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fechFilms = async () => {
      const { cast } = await fetchAPI(`movie/${filmId}/credits`);
      setCast(cast);
    };
    fechFilms();
  }, [filmId]);
  return (
    <div>
      {cast.length > 0 ? (
        <>
          <ul className={s.list}>
            {cast.map(element => (
              <li key={element.id} className={s.item}>
                <img
                  src={
                    element.profile_path
                      ? `https://image.tmdb.org/t/p/w400${element.profile_path}`
                      : nofaces
                  }
                  alt={element.name}
                  width="100"
                  height="150"
                />
                <p className={s.name}>{element.name}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No Casts</p>
      )}
    </div>
  );
}

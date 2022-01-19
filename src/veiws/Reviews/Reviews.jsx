import { useState, useEffect } from 'react';
import { fetchAPI } from '../../servises/api';

import s from './Reviews.module.css';

export default function Review({ filmId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fechFilms = async () => {
      const { results } = await fetchAPI(`movie/${filmId}/reviews`);
      setReviews(results);
    };
    fechFilms();
  }, [filmId]);
  return (
    <div>
      {reviews.length > 0 ? (
        <ul className={s.list}>
          {reviews.map((element, index) => (
            <li key={index} className={s.item}>
              <p className={s.title}>{element.author}</p>
              <p className={s.desc}>{element.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Reviews</p>
      )}
    </div>
  );
}

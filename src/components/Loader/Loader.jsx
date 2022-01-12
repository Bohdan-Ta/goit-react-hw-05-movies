import Loader from 'react-loader-spinner';

import s from './Loader.module.css';

export default function Spinner() {
  return (
    <Loader
      className={s.loader}
      type="Circles"
      color="#3f51b5"
      height={100}
      width={100}
      timeout={3000}
    />
  );
}

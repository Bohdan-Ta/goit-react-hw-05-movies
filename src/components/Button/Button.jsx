import s from './Button.module.css';

export default function Button({ loadMore }) {
  return (
    <button type="button" className={s.button} onClick={loadMore}>
      go to back
    </button>
  );
}

import s from './Button.module.css';

function Button({ loadMore }) {
  return (
    <button type="button" className={s.button} onClick={loadMore}>
      next films
    </button>
  );
}
export default Button;

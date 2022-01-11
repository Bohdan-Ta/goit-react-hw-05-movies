import s from './Button.module.css';

function Button({ loadMore }) {
  return (
    <button type="button" className={s.button} onClick={loadMore}>
      load more
    </button>
  );
}
export default Button;

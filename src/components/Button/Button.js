import css from './Button.module.css';

export function Button({ handleClick }) {
  return <button className={css.loadMoreBtn} onClick={handleClick}>Load more</button>;
}

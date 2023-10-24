import css from './ImageGalleryItem.module.css';

export function ImageGalleryItem({ images }) {
  return (
    <>
      {images.map(image => (
        <li key = {image.id} className={css.gallery__item}>
          <img className={css.gallery__img} src={image.webformatURL} alt={image.tags} />
        </li>
      ))}
    </>
  );
}

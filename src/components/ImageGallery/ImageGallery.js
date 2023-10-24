import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import css from './ImageGallery.module.css';

export function ImageGallery({images}) {
  return (
    <ul className={css.gallery}>
        <ImageGalleryItem images={images}/>
    </ul>
  );
}

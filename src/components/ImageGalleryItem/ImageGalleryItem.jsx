import { Component } from 'react';

import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={css.gallery__item}>
        <img className={css.gallery__img} src={this.props.image.webformatURL} alt={this.props.image.tags} onClick={this.props.onClick} />
      </li>
    );
  }
}
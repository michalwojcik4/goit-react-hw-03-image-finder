import { Component } from 'react';

import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  render() {
    return <ul className={css.gallery}>{this.props.children}</ul>;
  }
}

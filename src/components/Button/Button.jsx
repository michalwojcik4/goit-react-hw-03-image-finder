import { Component } from 'react';

import css from './Button.module.css';

export class Button extends Component {
  render() {
    return (
      <button className={css.loadMoreBtn} onClick={this.props.onClick}>
        Load more
      </button>
    );
  }
}
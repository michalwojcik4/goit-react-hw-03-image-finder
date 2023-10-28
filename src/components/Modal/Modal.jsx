import { Component } from "react";

import css from './Modal.module.css';

export class Modal extends Component {
    componentDidMount() {
      window.addEventListener('keydown', this.handleKeyDown);
    }
  
    componentWillUnmount() {
      window.removeEventListener('keydown', this.handleKeyDown);
    }
  
    handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        this.props.onClose();
      }
    };
  
    render() {
      return (
        <div className={css.overlay} onClick={this.props.onClose}>
          <div className={css.modal}>
            <img src={this.props.image.largeImageURL} alt={this.props.image.tags} />
          </div>
        </div>
      );
    }
  }
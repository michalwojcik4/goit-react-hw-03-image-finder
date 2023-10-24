import { Component } from 'react';

import css from './Searchbar.module.css';

const INITIAL_STATE = {
    inputValue: '',
}
export class Searchbar extends Component {
  state = {...INITIAL_STATE};

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log()
    this.props.onSubmit(this.state.inputValue);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.form__button}>
            Search
          </button>

          <input
            className={css.form__input}
            type="text"
            placeholder="Search images and photos"
            value={inputValue}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

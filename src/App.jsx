import { Component } from 'react';

import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { fetchArticlesWithQuery } from './untils/api';

const INITIAL_STATE = {
  searchbar: '',
  images: [],
  isLoading: false,
  error: '',
  currentPage: 1,
};

export class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  changeState = inputValue => {
    this.setState({
      searchbar: inputValue,
    });
  };

  async componentDidMount() {
    await this.getInitialData()
  }

  async componentDidUpdate() {
    await this.getInitialData()
  }

  getInitialData = async () => {
    try {
      const images = await fetchArticlesWithQuery();
      this.setState({ images });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    const oldState = this.state;

    if (nextState.images[0]?.id === oldState.images[0]?.id
            && nextState.currentPage === oldState.currentPage) {
      return false
    }

    return true
  }

  render() {
    const {images} = this.state;
    return (
      <>
        <Searchbar onSubmit={this.changeState} />
        <ImageGallery images={images}/>
      </>
    );
  }
}

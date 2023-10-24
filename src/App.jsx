import { Component } from 'react';

import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { Button } from './components/Button/Button';
import { Loader } from 'components/Loader/Loader';

import { fetchArticlesWithQuery } from './untils/api';

const INITIAL_STATE = {
  searchbar: 'forest',
  images: [],
  isLoading: false,
  error: '',
  currentPage: 2,
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
    await this.getInitialData();
  }

  async componentDidUpdate() {
    await this.getInitialData();
  }

  getInitialData = async () => {
    const { searchbar, currentPage } = this.state;
    try {
      const newImages = await fetchArticlesWithQuery(searchbar, currentPage);
      this.setState({images: [...newImages]});
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    const oldState = this.state;

    if (nextState.images[0]?.id !== oldState.images[0]?.id) return true;
    if (nextState.searchbar !== oldState.searchbar) return true;
    if (nextState.currentPage !== oldState.currentPage) return true;
    return true;
  }

  handleCurrentPageUpdate = () => {
    this.setState(state => {
      return {
        currentPage: state.currentPage + 1,
      };
    });
  };

  render() {
    const { images, isLoading, error } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.changeState} />
        {error && <p>Something went wrong: {error.message}</p>}
        {isLoading && <Loader />}
        {images.length > 0 && <ImageGallery images={images} />}
        <Button handleClick={this.handleCurrentPageUpdate} />
      </>
    );
  }
}

import { Component } from 'react';
import axios from 'axios';

import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from './components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';

import css from 'App.module.css';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    loading: false,
    modalImage: null,
  };

  handleSearch = query => {
    this.setState({ query, images: [], page: 1 }, this.fetchImages);
  };

  fetchImages = () => {
    const { query, page } = this.state;
    const API_KEY = process.env.REACT_APP_API_KEY;

    this.setState({ loading: true });

    axios
      .get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          page: prevState.page + 1,
        }));
      })
      .catch(error => console.error('Error fetching images:', error))
      .finally(() => this.setState({ loading: false }));
  };

  handleImageClick = image => {
    this.setState({ modalImage: image });
    document.body.classList.add('modal-open');
  };

  closeModal = () => {
    this.setState({ modalImage: null });
    document.body.classList.remove('modal-open');
  };

  render() {
    const { images, loading, modalImage } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
        {loading && <Loader />}
        <div className = {css.container}>
          <ImageGallery>
            {images.map(image => (
              <ImageGalleryItem
                key={image.id}
                image={image}
                onClick={() => this.handleImageClick(image)}
              />
            ))}
          </ImageGallery>
          {images.length >= 12 && <Button onClick={this.fetchImages} />}
        </div>
        {modalImage && <Modal image={modalImage} onClose={this.closeModal} />}
      </>
    );
  }
}

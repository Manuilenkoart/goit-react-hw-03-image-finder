import React, { Component } from 'react';
import { toast } from 'react-toastify';
import Loader from 'react-loader-spinner';
import SearchForm from './SearchForm/SearchForm';
import fetchImageApi from '../services/pixabayApi';
import Gallary from './Gallery/Gallery';
import styles from './App.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

toast.configure();

class App extends Component {
  state = {
    images: [],
    query: '',
    error: null,
    pageNumber: 1,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    if (prevState.query !== query) {
      this.fetchImage();
    }
    window.scrollTo({
      top: document.body.scrollHeight,

      behavior: 'smooth',
    });
  }

  onSearch = query => {
    this.setState({ query, images: [], pageNumber: 1 });
  };

  fetchImage = () => {
    const { query, pageNumber } = this.state;
    this.setState({ isLoading: true });
    fetchImageApi(query, pageNumber)
      .then(image => {
        this.setState(state => ({
          images: [...state.images, ...image],
          pageNumber: state.pageNumber + 1,
        }));
      })
      .catch(error => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { images, error, isLoading } = this.state;

    return (
      <div className={styles.app}>
        <SearchForm onSearch={this.onSearch} />
        {error && toast.warning(error.message)}
        <Gallary items={images} isLoading={isLoading} />
        {isLoading && (
          <Loader
            type="Plane"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} // 3 secs
          />
        )}
        {images.length > 0 && (
          <button
            className={styles.button}
            type="button"
            disabled={isLoading}
            onClick={this.fetchImage}
          >
            Load more
          </button>
        )}
      </div>
    );
  }
}

export default App;

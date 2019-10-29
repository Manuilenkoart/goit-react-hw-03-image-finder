import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import styles from './PhotoCard.module.css';

export default class PhotoCard extends Component {
  static propTypes = {
    imgSrc: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    largeImage: PropTypes.string.isRequired,
    alt: PropTypes.string,
  };

  static defaultProps = {
    alt: 'image',
  };

  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const {
      imgSrc,
      likes,
      views,
      downloads,
      comments,
      largeImage,
      alt,
    } = this.props;
    const { isModalOpen } = this.state;

    return (
      <li className={styles.gallery_item}>
        <div className={styles.photo_card}>
          <img src={imgSrc} alt={alt} />
          <div className={styles.stats}>
            <p className={styles.stats_item}>
              <i className="material-icons">thumb_up</i>
              {likes}
            </p>
            <p className={styles.stats_item}>
              <i className="material-icons">visibility</i>
              {views}
            </p>
            <p className={styles.stats_item}>
              <i className="material-icons">comment</i>
              {comments}
            </p>
            <p className={styles.stats_item}>
              <i className="material-icons">cloud_download</i>
              {downloads}
            </p>
          </div>
          <button
            type="button"
            className={styles.fullscreen_button}
            onClick={this.openModal}
          >
            <i className="material-icons">zoom_out_map</i>
          </button>

          {isModalOpen && (
            <Modal onClose={this.closeModal}>
              <img src={largeImage} alt={alt} />
            </Modal>
          )}
        </div>
      </li>
    );
  }
}

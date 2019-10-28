import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from '../PhotoCard/PhotoCard';
import styles from './Gallery.module.css';

const Gallary = ({ items }) => {
  return (
    <ul className={styles.gallery}>
      {items.map(el => (
        <PhotoCard
          key={el.id}
          imgSrc={el.webformatURL}
          likes={el.likes}
          views={el.views}
          comments={el.comments}
          downloads={el.downloads}
          largeImage={el.largeImageURL}
        />
      ))}
    </ul>
  );
};
Gallary.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      imgSrc: PropTypes.string,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      downloads: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      largeImage: PropTypes.string,
    }),
  ).isRequired,
};

export default Gallary;

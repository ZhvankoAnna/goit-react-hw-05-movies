import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReview } from 'shared/api/getMoviesAPI';
import notification from 'shared/services/notification';
import { ToastContainer } from 'react-toastify';
import styles from './reviews.module.scss';

const Review = () => {
  const [review, setReview] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieReview = async () => {
      try {
        const { data } = await getMovieReview(id);
        setReview(data.results);
      } catch (error) {
        notification('Something went wrong, please try again later.');
      }
    };
    fetchMovieReview();
  }, [id]);

  const element = review.map(item => (
    <li className={styles.item} key={item.id}>
      <h3 className={styles.title}>Author: {item.author}</h3>
      <p>{item.content}</p>
    </li>
  ));
  return (
    <>
      {review && (
        <ul className={styles.list}>
          {review !== [] ? element : "We don't have any reviews for this movie"}
        </ul>
      )}
      <ToastContainer />
    </>
  );
};

export default Review;

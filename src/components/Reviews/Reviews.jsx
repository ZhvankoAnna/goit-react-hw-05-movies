import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReview } from 'shared/api/getMoviesAPI';

const Review = () => {
  const [review, setReview] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieReview = async () => {
      const { data } = await getMovieReview(id);
      console.log(data);
      setReview(data.results);
    };
    fetchMovieReview();
  }, []);

  const element = review.map(item => (
    <li key={item.id}>
      <h3>Author: {item.author}</h3>
      <p>{item.content}</p>
    </li>
  ));
  return <ul>{review !== [] ? element : "We don't have any reviews for this movie"}</ul>;
};

export default Review;

import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { getMovies } from 'shared/api/getMoviesAPI';
import styles from './movies-list.module.scss'

export const imgURL = "https://image.tmdb.org/t/p/original/"

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await getMovies();
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovies();
  }, []);

  const element = movies.map(({ id, poster_path, title, name }) => (
    <li key={id}>
      <Link to={`/movies/${id}`}><img className={styles.moviePoster}
        src={`${imgURL}${poster_path}`}
        alt={title || name}
      />
      <p>{title || name}</p></Link>
    </li>
  ));

  return <ul className={styles.list}>{element}</ul>;
};

export default MoviesList;

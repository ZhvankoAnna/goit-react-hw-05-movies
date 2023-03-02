import { Link, useLocation } from 'react-router-dom';
import {PropTypes} from 'prop-types'
import placeholder from '../../images/posterPlaceholder.jpg';
import styles from './movies-list.module.scss';

export const imgURL = 'https://image.tmdb.org/t/p/original/';

const MoviesList = ({ items = [] }) => {
  const location = useLocation();
  const element = items.map(({ id, poster_path, title, name }) => (
    <li key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <img
          className={styles.moviePoster}
          src={poster_path ? `${imgURL}${poster_path}` : placeholder}
          alt={title || name}
        />
        <p>{title || name}</p>
      </Link>
    </li>
  ));

  return <ul className={styles.list}>{element}</ul>;
};

export default MoviesList;

MoviesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.object,
  )
}
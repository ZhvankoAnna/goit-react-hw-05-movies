import { useState, useEffect } from 'react';
import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { getMovieById } from 'shared/api/getMoviesAPI';
import notification from 'shared/services/notification';
import { ToastContainer } from 'react-toastify';
import Container from 'components/Container/Container';
import { imgURL } from '../../components/MoviesList/MoviesList';
import styles from './movie-details-page.module.scss';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const { data } = await getMovieById(id);
        setMovie(data);
      } catch (error) {
        notification('Something went wrong, please try again later.');
      }
    };
    fetchMovieById();
  }, [id]);

  const onGoBack = () => navigate(from);

  return (
    <main>
      {movie && (
        <Container>
          <button className={styles.btn} type="button" onClick={onGoBack}>
            Go back
          </button>
          <div className={styles.wrapper}>
            <img
              src={`${imgURL}${movie.poster_path}`}
              alt={movie.title}
              width="240"
            />
            <div className={styles.box}>
              <h1>
                {movie.title} (
                {movie?.release_date &&
                  new Date(movie.release_date).getFullYear()}
                )
              </h1>
              <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>
                {movie.genres?.length !== 0
                  ? movie.genres?.map(item => item.name).join(' ')
                  : 'No information about genres'}
              </p>
            </div>
          </div>
          <p className={styles.info}>Additional information</p>
          <ul>
            <li className={styles.item}>
              <Link to={`cast`} state={{ from }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to={`review`} state={{ from }}>
                Review
              </Link>
            </li>
          </ul>
          <Outlet />
        </Container>
      )}
      <ToastContainer />
    </main>
  );
};

export default MovieDetails;

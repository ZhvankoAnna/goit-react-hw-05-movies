import { useState, useEffect } from 'react';
import { getMovies } from 'shared/api/getMoviesAPI';
import notification from 'shared/services/notification';
import { ToastContainer } from 'react-toastify';
import Container from 'components/Container/Container';
import MoviesList from 'components/MoviesList/MoviesList';
import styles from './home-page.module.scss';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await getMovies();
        setMovies(data.results);
      } catch (error) {
        notification('Something went wrong, please try again later.');
      }
    };
    fetchMovies();
  }, []);

  return (
    <main>
      {movies && (
        <Container>
          <h1 className={styles.title}>Trending today</h1>
          <MoviesList items={movies} />
        </Container>
      )}
      <ToastContainer />
    </main>
  );
};

export default HomePage;

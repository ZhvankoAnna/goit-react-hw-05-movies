import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesBySearchQuery } from 'shared/api/getMoviesAPI';
import notification from 'shared/services/notification';
import { ToastContainer } from 'react-toastify';
import Form from 'components/Form/Form';
import MoviesList from 'components/MoviesList/MoviesList';
import Container from 'components/Container/Container';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const fetchMoviesSearch = async () => {
      try {
        const { data } = await getMoviesBySearchQuery(search);
        if (data.results.length === 0) {
          notification('Please enter a valid query.');
        }
        setMovies(data.results);
      } catch (error) {
        notification('Please enter a valid query.');
      }
    };
    if (search) {
      fetchMoviesSearch();
    }
  }, [search]);

  const onFormSubmit = ({ search }) => {
    if (search.trim() === '') {
      notification('Please enter a valid query.');
      return;
    }
    setSearchParams({ search });
  };

  return (
    <main>
      <Container>
        <Form onSubmit={onFormSubmit} />
        {movies !== [] && <MoviesList items={movies} />}
      </Container>
      <ToastContainer />
    </main>
  );
};

export default MoviesPage;

import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link, Outlet } from 'react-router-dom';
import { getMovieById } from 'shared/api/getMoviesAPI';
import { imgURL } from '../../components/MoviesList/MoviesList';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const { data } = await getMovieById(id);
        console.log(data);
        // const genres = await data.genres.map(item=>item.name).split(" ");
        // setMovie({...data, genres});
        setMovie(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovieById();
  }, [id]);

  const onGoBack = () => navigate(-1);

  return (
    <main>
      <button type="button" onClick={onGoBack}>
        Go back
      </button>
      <img
        src={`${imgURL}${movie.poster_path}`}
        alt={movie.title}
        width="240"
      />
      <h1>{movie.title}</h1>
      <p>User Score</p>
      <h2>Overview</h2>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      {/* <p>{movie.genres}</p> */}
      <p>Additional information</p>
      <ul>
        <li><Link to={`cast`}>Cast</Link></li>
        <li><Link to={`review`}>Review</Link></li>
      </ul>
      <Outlet/>
    </main>
  );
};

export default MovieDetails;

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCasts } from 'shared/api/getMoviesAPI';
import { imgURL } from 'components/MoviesList/MoviesList';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      const { data } = await getMovieCasts(id);
      setCast(data.cast);
    };
    fetchMovieCast();
  }, []);

  const element = cast.map(item => (
    <li>
      <img src={`${imgURL}${item.profile_path}`} alt={item.name} width="120"/>
      <p>{item.name}</p>
      <p>{item.character}</p>
    </li>
  ));

  return <ul>{element}</ul>;
};

export default Cast;

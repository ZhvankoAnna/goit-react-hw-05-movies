import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCasts } from 'shared/api/getMoviesAPI';
import notification from 'shared/services/notification';
import { ToastContainer } from 'react-toastify';
import { imgURL } from 'components/MoviesList/MoviesList';
import placeholder from '../../images/castPlaceholder.jpg';
import styles from './cast.module.scss';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const { data } = await getMovieCasts(id);
        setCast(data.cast);
      } catch (error) {
        notification('Something went wrong, please try again later.');
      }
    };
    fetchMovieCast();
  }, [id]);

  const element = cast.map(({ id, profile_path, name, character }) => (
    <li key={id} className={styles.item}>
      <img
        className={styles.image}
        src={profile_path ? `${imgURL}${profile_path}` : placeholder}
        alt={name}
      />
      <p className={styles.name}>{name}</p>
      <p>{character}</p>
    </li>
  ));

  return (
    <>
      <ul className={styles.list}>{element}</ul>
      <ToastContainer />
    </>
  );
};

export default Cast;

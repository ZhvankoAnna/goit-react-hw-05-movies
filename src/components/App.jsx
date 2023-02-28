import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import HomePage from '../Pages/HomePage/HomePage';
import MoviesPage from '../Pages/MoviesPage/MoviesPage';
import MovieDetailsPage from '../Pages/MovieDetailsPage/MovieDetailsPage';
import Cast from './Cast/Cast';
import Review from './Reviews/Reviews';
import styles from '../shared/styles/styles.scss';

export const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast/>}/>
          <Route path="review" element={<Review/>}/>
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
};

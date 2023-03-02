import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { RotatingLines } from 'react-loader-spinner';

const HomePage = lazy(() => import('../Pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../Pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../Pages/MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('./Cast/Cast'));
const Review = lazy(() => import('./Reviews/Reviews'));

const PageRoutes = () => {
  return (
    <Suspense
      fallback={
        <RotatingLines
          strokeColor="aqua"
          strokeWidth="2"
          animationDuration="0.75"
          width="60"
          visible={true}
        />
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Review />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default PageRoutes;

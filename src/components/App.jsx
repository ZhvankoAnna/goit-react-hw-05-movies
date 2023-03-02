import NavBar from './NavBar/NavBar';
import PageRoutes from './PageRoutes';
import styles from '../shared/styles/styles.scss';

export const App = () => {
  return (
    <div>
      <NavBar />
      <PageRoutes />
    </div>
  );
};

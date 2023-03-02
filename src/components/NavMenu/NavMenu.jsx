import { NavLink } from 'react-router-dom';
import styles from './nav-menu.module.scss';

const NavMenu = () => {
  return (
    <nav className={styles.navMenu}>
      <NavLink className={styles.link} to="/">
        Home
      </NavLink>
      <NavLink className={styles.link} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};

export default NavMenu;

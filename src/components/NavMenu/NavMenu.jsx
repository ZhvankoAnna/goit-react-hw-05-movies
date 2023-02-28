import { NavLink } from 'react-router-dom';
import styles from './nav-menu.module.scss'

const NavMenu = () => {
  return (
    <nav className={styles.navMenu}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </nav>
  );
};

export default NavMenu;
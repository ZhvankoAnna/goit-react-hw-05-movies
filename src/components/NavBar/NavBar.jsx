import NavMenu from '../NavMenu/NavMenu';
import styles from './nav-bar.module.scss';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <NavMenu />
    </header>
  );
};

export default Navbar;

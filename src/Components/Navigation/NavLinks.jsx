import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const NavLinks = ({ show }) => {
  return (
    <nav className={`${styles.nav} ${show ? styles.show : ""}`}>
      <NavLink to="/" className={styles.links}>
        HOME
      </NavLink>
      <NavLink to="/mattresses" className={styles.links}>
        MATTRESSES
      </NavLink>
      <NavLink to="/bedroom-furniture" className={styles.links}>
        BEDROOM FURNITURE
      </NavLink>
      <NavLink to="/about" className={styles.links}>
        ABOUT
      </NavLink>
      <NavLink to="/contact" className={styles.links}>
        CONTACT
      </NavLink>
    </nav>
  );
};

export default NavLinks;

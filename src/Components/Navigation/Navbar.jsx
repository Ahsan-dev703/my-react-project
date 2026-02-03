import logo from "../../assets/DURABEDS-logo-whitepng-04.png";
import styles from "./Navbar.module.css";
import { useRef, useState } from "react";
import NavLinks from "./NavLinks";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const isMobile = window.innerWidth <= 950;

  const handler = () => {
    setShow(!show);
  };
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div>
          <img src={logo} alt="logo-image" />
        </div>
        {isMobile && (
          <FiMenu size={28} onClick={handler} className={styles.menu_iocn} />
        )}
        <NavLinks show={show} />
      </div>
    </header>
  );
};

export default Navbar;

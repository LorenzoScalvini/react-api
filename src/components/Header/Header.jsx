import React, { useState } from "react";
import styles from "./Header.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">Linkies</a>
      </div>
      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <a href="#home" className={styles.link}>
          Home
        </a>
        <a href="#about" className={styles.link}>
          About
        </a>
        <a href="#services" className={styles.link}>
          Services
        </a>
        <a href="#contact" className={styles.link}>
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

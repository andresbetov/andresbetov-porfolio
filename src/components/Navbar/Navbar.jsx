import { site } from '../../data/site.js';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar} aria-label="Main">
      <a href="#home" className={styles.logo}>
        {site.logo}
      </a>
      <ul className={styles.links}>
        {site.navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={styles.link}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

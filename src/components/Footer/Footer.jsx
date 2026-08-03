import { site } from '../../data/site.js';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>{site.copyright}</p>
      <ul className={styles.socials}>
        {site.socials.map((social) => (
          <li key={social.label}>
            <a href={social.href} className={styles.social}>
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;

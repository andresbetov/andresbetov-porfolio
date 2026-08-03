import { site } from '../../data/site.js';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <h1>{site.hero.name}</h1>
      <p className={styles.tagline}>{site.hero.tagline}</p>
      <div className={styles.actions}>
        <a href={site.hero.primaryCta.href} className={styles.primary}>
          {site.hero.primaryCta.label}
        </a>
        <a href={site.hero.secondaryCta.href} className={styles.secondary}>
          {site.hero.secondaryCta.label}
        </a>
      </div>
    </section>
  );
}

export default Hero;

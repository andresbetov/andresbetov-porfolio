import Section from '../Section/Section.jsx';
import styles from './Projects.module.css';
import { site } from '../../data/site.js';

function Projects() {
  const { title, cards } = site.projects;
  return (
    <Section id="projects" title={title}>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <li key={card.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.description}>{card.description}</p>
            <a className={styles.link} href={card.href}>
              View on GitHub
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Projects;

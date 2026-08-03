import Section from '../Section/Section.jsx';
import styles from './Skills.module.css';
import { site } from '../../data/site.js';

function Skills() {
  const { title, cards } = site.skills;
  return (
    <Section id="skills" title={title}>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <li key={card.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <ul className={styles.items}>
              {card.items.map((item) => (
                <li key={item} className={styles.item}>
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Skills;

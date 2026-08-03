import Section from '../Section/Section.jsx';
import styles from './About.module.css';
import { site } from '../../data/site.js';

function About() {
  const { title, lead, summary, facts } = site.about;
  return (
    <Section id="about" title={title}>
      <p className={styles.lead}>{lead}</p>
      <p className={styles.summary}>{summary}</p>
      <ul className={styles.facts}>
        {facts.map((fact) => (
          <li key={fact.label} className={styles.fact}>
            <span className={styles.factLabel}>{fact.label}</span>
            <p className={styles.factValue}>{fact.value}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default About;

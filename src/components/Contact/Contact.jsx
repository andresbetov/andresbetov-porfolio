import Section from '../Section/Section.jsx';
import styles from './Contact.module.css';
import { site } from '../../data/site.js';

function Contact() {
  const { title, message, ctaLabel, href } = site.contact;
  return (
    <Section id="contact" title={title}>
      <p className={styles.message}>{message}</p>
      <a className={styles.cta} href={href}>
        {ctaLabel}
      </a>
    </Section>
  );
}

export default Contact;

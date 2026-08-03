import styles from './Section.module.css';

function Section({ id, title, children }) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default Section;

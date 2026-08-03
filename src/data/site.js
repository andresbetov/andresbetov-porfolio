export const site = {
  logo: 'andresbetov',
  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    name: 'Andres Bermudez',
    tagline:
      'Software engineer and systems engineering student from Colombia, building data-driven tools for space exploration.',
    primaryCta: { label: 'View Projects', href: '#projects' },
    secondaryCta: { label: 'Contact', href: '#contact' },
  },
  about: {
    title: 'About',
    lead: 'I build software that turns data into decisions, from portfolio analytics and financial prediction engines to tools for space exploration.',
    summary:
      'As a systems engineering student from Colombia, I work across the stack: backend services in Java and Spring Boot, interfaces in React, and quantitative tooling in Python.',
    facts: [
      { label: 'Role', value: 'Full-stack developer' },
      { label: 'Education', value: 'Systems engineering student' },
      { label: 'Based in', value: 'Colombia' },
    ],
  },
  skills: {
    title: 'Skills',
    cards: [
      {
        title: 'Backend',
        items: ['Java', 'Spring Boot', 'Microservices'],
      },
      {
        title: 'Frontend',
        items: ['React', 'JavaScript'],
      },
      {
        title: 'Data/Quant',
        items: ['Python', 'Portfolio analytics'],
      },
    ],
  },
  sections: [
    { id: 'about', title: 'About' },
    { id: 'skills', title: 'Skills' },
    { id: 'projects', title: 'Projects' },
    { id: 'contact', title: 'Contact' },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/andresbetov' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andresbetov/' },
    { label: 'X', href: 'https://x.com/andresbetov' },
    { label: 'Instagram', href: 'https://www.instagram.com/andresbetov/' },
  ],
  copyright: '© 2026 Andres Bermudez',
};

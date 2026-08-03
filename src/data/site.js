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
  projects: {
    title: 'Projects',
    cards: [
      {
        title: 'Elara App',
        description:
          'Full-stack web application for everyday financial management.',
        href: 'https://github.com/andresbetov/AutomatedAudit-Frontend',
      },
      {
        title: 'hierarchical-clustering-portfolio-selector',
        description:
          'Portfolio selection tool that groups assets with hierarchical clustering.',
        href: 'https://github.com/andresbetov/hierarchical-clustering-portfolio-selector',
      },
      {
        title: 'xai-financial-predictor-engine',
        description: 'Financial prediction engine with explainable AI outputs.',
        href: 'https://github.com/andresbetov/hybrid-fin-inference-agent-in-bvc',
      },
    ],
  },
  contact: {
    title: 'Contact',
    message:
      'Have a project in mind or want to talk about data and space? Let’s connect.',
    ctaLabel: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/andresbetov/',
  },
  socials: [
    { label: 'GitHub', href: 'https://github.com/andresbetov' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andresbetov/' },
    { label: 'X', href: 'https://x.com/andresbetov' },
    { label: 'Instagram', href: 'https://www.instagram.com/andresbetov/' },
  ],
  copyright: '© 2026 Andres Bermudez',
};

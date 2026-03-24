// ═══════════════════════════════════════════════════
//  data.js — All content (FR + EN)
//  Edit this file to update the portfolio text.
// ═══════════════════════════════════════════════════

// ─── NAV ────────────────────────────────────────────
export const NAV_LINKS = [
  { href: '#about',          fr: 'À propos',      en: 'About'          },
  { href: '#experience',     fr: 'Expériences',   en: 'Experience'     },
  { href: '#extracurricular',fr: 'Activités',     en: 'Activities'     },
  { href: '#skills',         fr: 'Compétences',   en: 'Skills'         },
  { href: '#projects',       fr: 'Projets',       en: 'Projects'       },
  { href: '#certificates',   fr: 'Certifications',en: 'Certifications' },
  { href: '#contact',        fr: 'Contact',       en: 'Contact'        },
]

// ─── TYPING TEXTS ───────────────────────────────────
export const TYPING_TEXTS = {
  fr: ['Ingénieure Logiciel', 'Développeuse Full Stack', 'Passionnée IA & Data', 'UI · UX Enthusiast'],
  en: ['Software Engineer',   'Full Stack Developer',    'AI & Data Enthusiast', 'UI · UX Enthusiast'],
}

// ─── HERO ───────────────────────────────────────────
export const HERO = {
  fr: {
    eyebrow:  'Disponible pour de nouveaux projets',
    tagline:  'Je construis des interfaces élégantes et des systèmes intelligents — du code propre au design mémorable.',
    cta:      'Voir mes projets',
    ctaGhost: 'Me contacter',
    badge1:   { label: 'Projets livrés', value: '20+' },
    badge2:   { label: 'Expérience',     value: '1+ ans' },
  },
  en: {
    eyebrow:  'Open to new opportunities',
    tagline:  'I build elegant interfaces and intelligent systems — from clean code to memorable design.',
    cta:      'View projects',
    ctaGhost: 'Contact me',
    badge1:   { label: 'Projects done', value: '15+' },
    badge2:   { label: 'Experience',    value: '1+ yrs' },
  },
}

// ─── ABOUT ──────────────────────────────────────────
export const ABOUT = {
  fr: {
    label:     'À propos',
    title:     'Créer avec intention',
    highlight: "Passionnée par l'analyse de données et la résolution de problèmes complexes grâce à l'IA.",
    text:      "Étudiante ingénieure en Intelligence Artificielle et Data Science à l'EMSI Rabat, avec une solide base académique acquise en France (CPGE PTSI/PT, Université Paris-Est-Créteil). J'applique des compétences techniques avancées pour créer des solutions innovantes.",
    stats: [
      { n: '15+', l: 'Projets'         },
      { n: '10+',  l: 'Certifications'  },
      { n: '3',   l: 'Langues'         },
    ],
  },
  en: {
    label:     'About',
    title:     'Building with intention',
    highlight: 'Passionate about data analysis and solving complex problems through AI.',
    text:      'Engineering student in Artificial Intelligence and Data Science at EMSI Rabat, with a solid academic background from France (CPGE PTSI/PT, Paris-Est-Créteil University). I apply advanced technical skills to create innovative solutions.',
    stats: [
      { n: '15+', l: 'Projects'       },
      { n: '10+',  l: 'Certifications' },
      { n: '3',   l: 'Languages'      },
    ],
  },
}

// ─── PROFESSIONAL EXPERIENCE ────────────────────────
// type: 'internship' | 'freelance' | 'job'
// logo: company logo URL or local path
export const EXPERIENCES = [
  {
    id: 'sqli',
    type: 'internship',
    company: 'SQLI',
    companyFull: 'SQLI Group',
    location: 'Rabat, Maroc',
    logo: '/assets/logos/SQLI.png',
    logoColor: '#E2001A',

    fr: {
      role:   'Stagiaire Développement Logiciel',
      period: 'Juillet — Août 2025',
      type:   'Stage',
      desc:   "Développement d'une application complète de gestion médicale au sein de l'équipe engineering de SQLI Rabat.",
      tasks: [
        "Conception et développement de l'application Health — système de rendez-vous médicaux et dossiers patients",
        "Développement frontend en React.js avec architecture composants réutilisables",
        "Développement backend Node.js / Express avec API RESTful",
        "Modélisation et gestion de base de données MySQL",
        "Participation aux daily stand-ups et code reviews en méthodologie Agile",
      ],
    },
    en: {
      role:   'Software Development Intern',
      period: 'July — August 2025',
      type:   'Internship',
      desc:   'Full-stack development of a medical management application within the engineering team at SQLI Rabat.',
      tasks: [
        'Design and development of the Health app — medical appointment and patient record system',
        'Frontend development in React.js with reusable component architecture',
        'Backend development with Node.js / Express and RESTful API',
        'MySQL database modelling and management',
        'Participation in daily stand-ups and code reviews in Agile methodology',
      ],
    },
    tags: ['React.js', 'Node.js', 'MySQL', 'Agile'],
  },
  // ↓ Add more internships / jobs here following the same structure
  // {
  //   id: 'company2',
  //   company: 'Nom entreprise',
  //   ...
  // },
]

export const EXPERIENCE_SECTION = {
  fr: { label: 'Parcours pro', title: 'Expériences', sub: 'Mes expériences professionnelles et stages.' },
  en: { label: 'Work',         title: 'Experience',  sub: 'My professional experiences and internships.' },
}

// ─── EXTRACURRICULAR ACTIVITIES ─────────────────────
// type: 'role' | 'hackathon' | 'event' | 'volunteer' | 'competition'
// color: accent colour for the card strip
export const EXTRACURRICULAR = [
  {
    id: 'ambassador',
    type: 'role',
    icon: '🎓',
    color: '#FF7F7F',
    fr: {
      title:  'Ambassadrice — Centre de Carrière',
      org:    'EMSI, Rabat',
      period: '2024 — Présent',
      desc:   "Représentation de l'EMSI lors d'événements de recrutement (job fairs, salons étudiants). Accompagnement et mentorat des étudiants dans leur développement professionnel, rédaction de CV et préparation aux entretiens.",
      tags:   ['Leadership', 'Mentorat', 'Communication'],
    },
    en: {
      title:  'Ambassador — Career Centre',
      org:    'EMSI, Rabat',
      period: '2024 — Present',
      desc:   'Representing EMSI at recruitment events (job fairs, student forums). Mentoring students in their professional development, CV writing and interview preparation.',
      tags:   ['Leadership', 'Mentoring', 'Communication'],
    },
  },
  {
    id: 'hackathon1',
    type: 'hackathon',
    icon: '⚡',
    color: '#FFB5B5',
    fr: {
      title:  'Hackathon — [Nom du hackathon]',
      org:    '[Organisateur]',
      period: '[Année]',
      desc:   "Participation à un hackathon de [X] heures. Développement d'une solution [thème] en équipe de [X] personnes. [Résultat : finaliste / lauréat / mention].",
      tags:   ['Teamwork', 'Problem Solving', 'Innovation'],
    },
    en: {
      title:  'Hackathon — [Hackathon name]',
      org:    '[Organiser]',
      period: '[Year]',
      desc:   'Participated in a [X]-hour hackathon. Built a [theme] solution in a team of [X]. [Result: finalist / winner / honourable mention].',
      tags:   ['Teamwork', 'Problem Solving', 'Innovation'],
    },
  },
  {
    id: 'club',
    type: 'role',
    icon: '💡',
    color: '#FF7F7F',
    fr: {
      title:  '[Nom du club / association]',
      org:    '[École / organisation]',
      period: '[Période]',
      desc:   '[Description de ton rôle, tes actions, tes responsabilités au sein de ce club ou association.]',
      tags:   ['Organisation', 'Travail en équipe'],
    },
    en: {
      title:  '[Club / association name]',
      org:    '[School / organisation]',
      period: '[Period]',
      desc:   '[Description of your role, actions and responsibilities within this club or association.]',
      tags:   ['Organisation', 'Teamwork'],
    },
  },
  {
    id: 'event',
    type: 'event',
    icon: '🏆',
    color: '#FFB5B5',
    fr: {
      title:  '[Compétition / événement]',
      org:    '[Organisateur]',
      period: '[Année]',
      desc:   '[Description de ta participation, ta contribution et les compétences développées lors de cet événement.]',
      tags:   ['Compétition', 'Innovation'],
    },
    en: {
      title:  '[Competition / event]',
      org:    '[Organiser]',
      period: '[Year]',
      desc:   '[Description of your participation, contribution and skills developed at this event.]',
      tags:   ['Competition', 'Innovation'],
    },
  },
]

export const EXTRA_SECTION = {
  fr: { label: 'Engagement', title: 'Activités parascolaires', sub: 'Associations, hackathons, compétitions et engagements hors cursus.' },
  en: { label: 'Engagement', title: 'Extracurricular',         sub: 'Associations, hackathons, competitions and out-of-curriculum activities.' },
}

// ─── SKILLS ─────────────────────────────────────────
export const SKILL_CATEGORIES = [
  {
    id: 'frontend', icon: '🎨',
    fr: { name: 'Frontend',           desc: 'Interfaces modernes & responsives' },
    en: { name: 'Frontend',           desc: 'Modern & responsive interfaces'    },
    skills: [
      { name: 'React.js',     logo: '/assets/logos/react.png',       level: 90 },
      { name: 'HTML5',        logo: '/assets/logos/html5.png',        level: 95 },
      { name: 'CSS3',         logo: '/assets/logos/css3.png',         level: 92 },
      { name: 'React Native', logo: '/assets/logos/reactnative.svg',  level: 75 },
    ],
  },
  {
    id: 'backend', icon: '⚙️',
    fr: { name: 'Backend',            desc: 'APIs robustes & logique serveur'   },
    en: { name: 'Backend',            desc: 'Robust APIs & server logic'        },
    skills: [
      { name: 'Node.js',  logo: '/assets/logos/nodejs.svg',   level: 85 },
      { name: 'Express',  logo: '/assets/logos/express.svg',  level: 82 },
      { name: 'Django',   logo: '/assets/logos/django.svg',   level: 78 },
      { name: 'Laravel',  logo: '/assets/logos/laravel.svg',  level: 80 },
      { name: 'PHP',      logo: '/assets/logos/php.svg',      level: 82 },
    ],
  },
  {
    id: 'databases', icon: '🗄️',
    fr: { name: 'Bases de données',   desc: 'SQL, NoSQL & systèmes distribués' },
    en: { name: 'Databases',          desc: 'SQL, NoSQL & distributed systems' },
    skills: [
      { name: 'MySQL',     logo: '/assets/logos/mysql.svg',     level: 88 },
      { name: 'MongoDB',   logo: '/assets/logos/mongodb.svg',   level: 80 },
      { name: 'Oracle',    logo: '/assets/logos/oracle.svg',    level: 75 },
      { name: 'Redis',     logo: '/assets/logos/redis.svg',     level: 70 },
      { name: 'Cassandra', logo: '/assets/logos/cassandra.svg', level: 65 },
    ],
  },
  {
    id: 'languages', icon: '💻',
    fr: { name: 'Langages',           desc: 'Maîtrise multi-paradigmes'        },
    en: { name: 'Languages',          desc: 'Multi-paradigm proficiency'       },
    skills: [
      { name: 'JavaScript', logo: '/assets/logos/javascript.svg', level: 90 },
      { name: 'Python',     logo: '/assets/logos/python.svg',     level: 88 },
      { name: 'Java',       logo: '/assets/logos/java.svg',       level: 82 },
      { name: 'PHP',        logo: '/assets/logos/php.svg',        level: 82 },
      { name: 'C++',        logo: '/assets/logos/cpp.svg',        level: 75 },
      { name: 'C#',         logo: '/assets/logos/csharp.svg',     level: 70 },
      { name: 'R',          logo: '/assets/logos/r.svg',          level: 72 },
    ],
  },
  {
    id: 'tools', icon: '🛠️',
    fr: { name: 'Outils & Méthodes',  desc: 'Workflow professionnel & collab.' },
    en: { name: 'Tools & Methods',    desc: 'Professional workflow & collab.'  },
    skills: [
      { name: 'Git',    logo: '/assets/logos/git.svg',    level: 88 },
      { name: 'UML',    logo: '/assets/logos/uml.svg',    level: 80 },
      { name: 'Merise', logo: '/assets/logos/merise.svg', level: 78 },
      { name: 'Agile',  logo: '/assets/logos/agile.svg',  level: 75 },
    ],
  },
  {
    id: 'ai', icon: '🧠',
    fr: { name: 'IA & Data Science',  desc: 'ML, analyse et visualisation'    },
    en: { name: 'AI & Data Science',  desc: 'ML, analysis and visualisation'  },
    skills: [
      { name: 'Python / Pandas', logo: '/assets/logos/python.svg', level: 85 },
      { name: 'R',               logo: '/assets/logos/r.svg',      level: 72 },
      { name: 'IBM Watson',      logo: '/assets/logos/ibm.svg',    level: 70 },
    ],
  },
]

export const SKILLS_SECTION = {
  fr: { label: 'Expertise', title: 'Mes compétences', sub: 'Cliquez sur une catégorie pour explorer les technologies.' },
  en: { label: 'Expertise', title: 'My Skills',       sub: 'Click a category to explore the technologies.'           },
}

// ─── PROJECTS ───────────────────────────────────────
export const PROJECTS = [
  {
    id: 'health',
    gradient: 'linear-gradient(135deg,#ffe4e4,#ffc5c5)',
    github: '', // 'https://github.com/tiancielle/health-app'
    fr: { title: 'Health — Gestion Médicale',    desc: "Système de gestion de rendez-vous médicaux et dossiers patients, développé lors d'un stage chez SQLI." },
    en: { title: 'Health — Medical Management',  desc: 'Medical appointment and patient record system built during internship at SQLI.' },
    tags: ['React', 'Node.js', 'MySQL'],
    album: [
      { src: '', fr: { caption: "Dashboard — Statistiques en temps réel et vue d'ensemble." },          en: { caption: 'Dashboard — Real-time statistics and overview.' } },
      { src: '', fr: { caption: 'Rendez-vous — Calendrier interactif et liste des consultations.' },    en: { caption: 'Appointments — Interactive calendar and consultation list.' } },
      { src: '', fr: { caption: 'Dossier patient — Fiche complète avec historique médical.' },          en: { caption: 'Patient record — Full profile with medical history.' } },
      { src: '', fr: { caption: 'Formulaire — Création d\'un nouveau rendez-vous.' },                   en: { caption: 'Form — Creating a new appointment.' } },
    ],
  },
  {
    id: 'chat',
    gradient: 'linear-gradient(135deg,#ffeaea,#ffd0d0)',
    github: '',
    fr: { title: 'Messagerie Instantanée',  desc: 'Application de chat temps réel avec synchronisation via WebSocket et interface Java Swing.' },
    en: { title: 'Instant Messaging App',   desc: 'Real-time chat app with WebSocket sync and Java Swing interface.' },
    tags: ['Java', 'Swing', 'WebSocket', 'MySQL'],
    album: [
      { src: '', fr: { caption: 'Interface principale — Conversations et messages en temps réel.' }, en: { caption: 'Main interface — Real-time conversations and messages.' } },
      { src: '', fr: { caption: 'Connexion — Authentification des utilisateurs.' },                  en: { caption: 'Login — User authentication screen.' } },
      { src: '', fr: { caption: 'Échange — Messagerie entre deux utilisateurs connectés.' },         en: { caption: 'Chat — Messaging between two connected users.' } },
    ],
  },
  {
    id: 'freelance',
    gradient: 'linear-gradient(135deg,#fff0f0,#ffd6d6)',
    github: '',
    fr: { title: 'Plateforme Freelance',  desc: 'Connecte freelances et clients : profils, candidatures et mise en relation.' },
    en: { title: 'Freelance Platform',    desc: 'Connects freelancers and clients: profiles, applications and matching.' },
    tags: ['Django', 'Python', 'PostgreSQL'],
    album: [
      { src: '', fr: { caption: 'Page d\'accueil — Présentation et call-to-action.' },             en: { caption: 'Landing page — Presentation and call to action.' } },
      { src: '', fr: { caption: 'Profil freelance — Compétences et portfolio détaillés.' },        en: { caption: 'Freelancer profile — Skills and portfolio details.' } },
      { src: '', fr: { caption: 'Liste de projets — Offres disponibles avec filtres.' },           en: { caption: 'Project listings — Available offers with filters.' } },
      { src: '', fr: { caption: 'Candidature — Formulaire de proposition client.' },               en: { caption: 'Application — Client proposal form.' } },
    ],
  },
  {
    id: 'cars',
    gradient: 'linear-gradient(135deg,#ffe8e8,#ffbfbf)',
    github: '',
    fr: { title: 'Location de Voitures',  desc: 'Système MVC complet de gestion des réservations et du parc automobile.' },
    en: { title: 'Car Rental System',     desc: 'Full MVC system for reservation and vehicle fleet management.' },
    tags: ['PHP', 'Laravel', 'MySQL'],
    album: [
      { src: '', fr: { caption: 'Catalogue — Véhicules disponibles avec filtres.' },               en: { caption: 'Catalogue — Available vehicles with filters.' } },
      { src: '', fr: { caption: 'Fiche véhicule — Détails et bouton de réservation.' },            en: { caption: 'Vehicle page — Details and reservation button.' } },
      { src: '', fr: { caption: 'Réservation — Sélection des dates et récapitulatif.' },           en: { caption: 'Booking — Date selection and order summary.' } },
      { src: '', fr: { caption: 'Dashboard admin — Gestion du parc et statistiques.' },            en: { caption: 'Admin dashboard — Fleet management and stats.' } },
    ],
  },
]

export const PROJECTS_SECTION = {
  fr: { label: 'Réalisations', title: 'Mes projets',  sub: 'Cliquez sur un projet pour explorer ses interfaces.', codeBtn: 'Voir le code', prevBtn: 'Précédent', nextBtn: 'Suivant', ofLabel: 'sur',  noImg: 'Capture non disponible' },
  en: { label: 'Work',         title: 'My Projects',  sub: 'Click a project to explore its interfaces.',           codeBtn: 'View code',    prevBtn: 'Previous',  nextBtn: 'Next',     ofLabel: 'of',   noImg: 'Screenshot not available' },
}

// ─── CERTIFICATES ───────────────────────────────────
export const CERTIFICATES = [
  {
    id: 'js',
    name: 'Reactivity with JavaScript',
    org: 'University of Michigan',
    orgLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Seal_of_the_University_of_Michigan.svg/120px-Seal_of_the_University_of_Michigan.svg.png',
    platform: 'Coursera',
    platformLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/120px-Coursera-Logo_600x600.svg.png',
    certImage: '/assets/certificates/js-michigan.png',
    year: '2024',
    verify: '',
  },
  {
    id: 'py',
    name: 'Python for Data Science, AI & Dev',
    org: 'IBM',
    orgLogo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    platform: 'Coursera',
    platformLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/120px-Coursera-Logo_600x600.svg.png',
    // certImage: '/assets/certificates/py-ibm.png',
    year: '2024',
    verify: '',
  },
  {
    id: 'analytics',
    name: 'Introduction to Data Analytics',
    org: 'IBM',
    orgLogo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    platform: 'Coursera',
    platformLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/120px-Coursera-Logo_600x600.svg.png',
    // certImage: '/assets/certificates/analytics-ibm.png',
    year: '2024',
    verify: '',
  },
  {
    id: 'rn',
    name: 'React Native',
    org: 'Meta',
    orgLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/200px-Meta_Platforms_Inc._logo.svg.png',
    platform: 'Coursera',
    platformLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/120px-Coursera-Logo_600x600.svg.png',
    // certImage: '/assets/certificates/rn-meta.png',
    year: '2023',
    verify: '',
  },
  {
    id: 'oop',
    name: 'Introduction to OOP with C++',
    org: 'EPFL',
    orgLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Logo_EPFL.svg/200px-Logo_EPFL.svg.png',
    platform: 'Coursera',
    platformLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/120px-Coursera-Logo_600x600.svg.png',
    // certImage: '/assets/certificates/oop-epfl.png',
    year: '2023',
    verify: '',
  },
]

export const CERTS_SECTION = {
  fr: { label: 'Certifications', title: 'Mes certificats', sub: 'Certifications délivrées par des institutions internationales reconnues.', verify: 'Voir le certificat', noImg: 'Aperçu non disponible', via: 'via' },
  en: { label: 'Certifications', title: 'My Certificates', sub: 'Certifications issued by internationally recognised institutions.',        verify: 'View certificate',  noImg: 'Preview not available',   via: 'via' },
}

// ─── CONTACT ────────────────────────────────────────
export const CONTACT = {
  fr: {
    label: 'Contact', title: 'Travaillons ensemble',
    intro: "Je suis toujours ouverte à de nouveaux projets ou opportunités. N'hésitez pas à me contacter !",
    fields: { nom: 'Nom', email: 'Email', sujet: 'Sujet', message: 'Message' },
    placeholders: { nom: 'Votre nom', email: 'you@example.com', sujet: 'Votre projet', message: 'Décrivez votre projet...' },
    submit: 'Envoyer le message', success: '✓ Message envoyé !', sending: 'Envoi...',
  },
  en: {
    label: 'Contact', title: "Let's work together",
    intro: "I'm always open to new projects or opportunities. Feel free to reach out!",
    fields: { nom: 'Name', email: 'Email', sujet: 'Subject', message: 'Message' },
    placeholders: { nom: 'Your name', email: 'you@example.com', sujet: 'Your project', message: 'Describe your project...' },
    submit: 'Send message', success: '✓ Message sent!', sending: 'Sending...',
  },
}

export const SOCIALS = [
  { label: '✉ nasrihiba20@gmail.com', href: 'mailto:nasrihiba20@gmail.com'                  },
  { label: 'in LinkedIn',             href: 'https://linkedin.com/in/hiba-nasri-565928279'  },
  { label: '⌘ GitHub',                href: 'https://github.com/tiancielle'                 },
]

// ─── FOOTER ─────────────────────────────────────────
export const FOOTER = { fr: 'Conçu & développé avec ♥', en: 'Designed & built with ♥' }

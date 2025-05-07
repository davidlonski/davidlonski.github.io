// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'davidlonski', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'manual',
      manual: {
        projects: [], // Add your GitHub repo names here if you want to feature them
      },
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'EDU Ally: Web Application',
          description: 'Web app for teachers and students to take quizzes and exams with AI assistance. Tech stack: Next.js, Python Flask, MySQL.',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: '',
        },
        {
          title: 'Higher-Ed Course Registration: Web Application',
          description: 'Full stack web app for course registration and management. Tech stack: React.js, Node.js, PostgreSQL.',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: '',
        },
        {
          title: 'Generative Adversarial Networks (GANs): Independent Study',
          description: 'Used DCGANs to generate synthetic OCT images. Hands-on with PyTorch, Torch Vision, Matplotlib, NumPy.',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: '',
        },
        {
          title: 'Object Character Recognition (OCR): Independent Study',
          description: 'Studied OCR and object recognition using Gemini API, OpenCV, NumPy, Matplotlib.',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of David Lonski',
    description: 'Computer science student with a passion for problem solving and a solid foundation in Agile development practices and the Software Development Life Cycle (SDLC).',
    imageURL: '',
  },
  social: {
    linkedin: 'davidlonski',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'davelonski12@outlook.com',
  },
  resume: {
    fileUrl: '', // Add a link to your resume PDF if available
  },
  skills: [
    'Java',
    'Python',
    'SQL',
    'C',
    'Docker',
    'Azure',
    'JavaScript',
    'Bash',
    'React.js',
    'Python Flask',
    'SQL',
    'Next.js',
    'PyTorch',
    'Node.js',
    'MS Office',
    'JetBrains Toolbox',
    'Git',
    'phpMyAdmin',
    'VS Code',
    'Linux',
    'NumPy',
    'Matplotlib',
    'OpenCV',
  ],
  experiences: [
    {
      company: 'SUNY Brockport',
      position: 'Teaching Assistant',
      from: 'Sep 2024',
      to: 'Present',
      companyLink: 'https://www2.brockport.edu/',
    },
    {
      company: 'Floor Fix',
      position: 'Flooring Apprentice',
      from: 'May 2021',
      to: 'Present',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'CPR certified',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'SUNY Brockport',
      degree: 'Bachelor of Science (B.S.), Major (Computer Science), Minor (Mathematics)',
      from: '2021',
      to: '2025',
    },
  ],
  publications: [
    {
      title: 'A Low-Cost Approach for Fake Medical Image Synthesis',
      conferenceName: '',
      journalName: '',
      authors: 'Yu. Lonski',
      link: '',
      description: 'Poster Presentation at Scholars Day, SUNY Brockport 2025',
    },
    {
      title: 'Higher-Ed Course Registration: Web Application',
      conferenceName: '',
      journalName: '',
      authors: 'Harris, Lonski, Thomas, Munye, Iskrenova-Ekiert',
      link: '',
      description: 'Poster Presentation at CCSCNE 2025, Poster Presentation at Scholars Day, SUNY Brockport 2025',
    },
    {
      title: 'EDUAlly: Integrated AI Education Assistant',
      conferenceName: '',
      journalName: '',
      authors: 'Thiele, Asbie, Brown, Fantigrossi, Jones, Lonski, Mesiti, Yu, Mitra',
      link: '',
      description: 'Poster Presentation at CCSCNE 2025, Poster Presentation at Scholars Day, SUNY Brockport 2025',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '',
    username: '',
    limit: 2,
  },
  googleAnalytics: {
    id: '',
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;

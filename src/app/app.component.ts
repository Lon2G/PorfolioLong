import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  isNavScrolled = false;
  private statsAnimated = false;

  constructor(private host: ElementRef<HTMLElement>) {}
  name = 'Huynh Quoc Long';
  gpa = '8.24/10.00';
  email = 'huynhquoclong.2005@gmail.com';
  linkedin = 'https://www.linkedin.com/in/qu%E1%BB%91c-long-hu%E1%BB%B3nh/';
  github = 'https://github.com/';
  cv = '#';
  photo = 'Images/anhava.jpg';

  navItems = [
    { label: 'STORY', fragment: 'story' },
    { label: 'CAPABILITIES', fragment: 'capabilities' },
    { label: 'WORK', fragment: 'projects' },
    { label: 'TIMELINE', fragment: 'experience' },
    { label: 'KNOWLEDGE', fragment: 'insights' },
    { label: 'CONTACT', fragment: 'contact' }
  ];

  heroHighlights = [
    { icon: 'fas fa-award', label: 'Academic performance', prefix: 'GPA = ', target: 8.24, decimals: 2, suffix: '/10.00', display: '0.00' },
    { icon: 'fas fa-graduation-cap', label: 'University of Economics and Law', prefix: '', target: null as number | null, decimals: 0, suffix: 'Final Year', display: '' },
    { icon: 'fas fa-cart-shopping', label: 'Major focus', prefix: '', target: null as number | null, decimals: 0, suffix: 'E-commerce', display: '' },
    { icon: 'fas fa-layer-group', label: 'Hybrid product profile', prefix: '', target: null as number | null, decimals: 0, suffix: 'Business + Tech + AI', display: '' }
  ];

  journeySteps = ['Business', 'E-commerce', 'Business Analysis', 'AI', 'Product Operations'];

  capabilityBlocks = [
    {
      badge: 'STRATEGY',
      title: 'Business Systems',
      icon: 'fas fa-diagram-project',
      text: 'I map messy operations into workflows, requirements, and business logic that teams can build from.',
      tags: ['BPMN', 'Requirement Analysis', 'Use Case', 'Product Operations']
    },
    {
      badge: 'AI',
      title: 'AI Product Thinking',
      icon: 'fas fa-brain',
      text: 'I use AI to accelerate research, automate repetitive work, and design smarter digital experiences.',
      tags: ['ChatGPT', 'Claude', 'Gemini', 'Prompt Engineering']
    },
    {
      badge: 'COMMERCE',
      title: 'Commerce Execution',
      icon: 'fas fa-bag-shopping',
      text: 'I connect customer experience, growth funnels, analytics, and product detail into practical e-commerce systems.',
      tags: ['E-commerce', 'Growth', 'Customer Experience', 'Analytics']
    }
  ];

  skillGroups = [
    {
      category: 'Business',
      icon: 'fas fa-briefcase',
      level: 86,
      items: ['E-commerce', 'Product Operations', 'Digital Marketing']
    },
    {
      category: 'Product',
      icon: 'fas fa-cube',
      level: 82,
      items: ['Product Strategy', 'Customer Journey', 'Feature Thinking']
    },
    {
      category: 'BA',
      icon: 'fas fa-diagram-project',
      level: 88,
      items: ['Requirement Analysis', 'BPMN', 'Use Case', 'User Flow']
    },
    {
      category: 'AI',
      icon: 'fas fa-brain',
      level: 84,
      items: ['ChatGPT', 'Claude', 'Gemini', 'Prompt Engineering', 'Automation']
    },
    {
      category: 'Development',
      icon: 'fas fa-code',
      level: 76,
      items: ['Java', 'Android', 'Supabase', 'SQL', 'Angular']
    },
    {
      category: 'Data',
      icon: 'fas fa-chart-line',
      level: 78,
      items: ['SQL', 'Analytics', 'Metrics', 'Dashboard Logic']
    },
    {
      category: 'Tools',
      icon: 'fas fa-toolbox',
      level: 80,
      items: ['Figma', 'Canva', 'Git', 'Notion']
    }
  ];

  experienceItems = [
    {
      role: 'Product Operations & E-commerce Builder',
      duration: '2024 - Present',
      type: 'University Projects',
      responsibilities: ['Mapped user journeys, operations flows, and system requirements for commerce products.', 'Connected market research, BA documentation, and functional prototypes.'],
      achievements: ['Delivered multiple A/A+ product and system projects.', 'Built a reusable product mindset across business, technology, and AI workflows.']
    },
    {
      role: 'Business Analyst Contributor',
      duration: '2025',
      type: 'Information System Analysis',
      responsibilities: ['Analyzed recruitment and HR management processes.', 'Created BPMN, use cases, database structures, and prototype flows.'],
      achievements: ['Translated stakeholder needs into clear technical specifications.', 'Improved clarity of application and candidate-management workflows.']
    },
    {
      role: 'Marketing Technology Strategist',
      duration: '2026',
      type: 'MarTech Project',
      responsibilities: ['Built campaign funnel logic across ads, tracking, landing pages, and CRM.', 'Evaluated conversion metrics and lead-generation efficiency.'],
      achievements: ['Produced an A+ campaign strategy with measurable optimization logic.', 'Connected digital marketing decisions with product experience.']
    },
    {
      role: 'Volunteer & Leadership Contributor',
      duration: '2023 - Present',
      type: 'Campus Activities',
      responsibilities: ['Supported student activities, planning, communication, and team coordination.', 'Practiced ownership, stakeholder communication, and delivery discipline.'],
      achievements: ['Strengthened teamwork and presentation confidence.', 'Built a practical foundation for product operations roles.']
    }
  ];

  marketInsights = [
    {
      topic: 'AI Commerce',
      analysis: 'How AI assistants, recommendation engines, and automation improve discovery, trust, and purchase confidence.',
      icon: 'fas fa-wand-magic-sparkles',
      color: '#00ffcc'
    },
    {
      topic: 'Customer Experience',
      analysis: 'Studying journey friction, onboarding, support flows, and product moments that make digital commerce feel easier.',
      icon: 'fas fa-users-viewfinder',
      color: '#8e2de2'
    },
    {
      topic: 'Product Strategy',
      analysis: 'Connecting user needs, business models, feature priorities, and operating constraints before building solutions.',
      icon: 'fas fa-chess',
      color: '#66fcf1'
    },
    {
      topic: 'Business Analytics',
      analysis: 'Using metrics, funnels, SQL thinking, and dashboards to understand growth opportunities and operational performance.',
      icon: 'fas fa-chart-line',
      color: '#d1a3ff'
    }
  ];

  projects = [
    {
      id: 'afterglow',
      name: 'Afterglow',
      fullName: 'Afterglow - AI-Powered Cosmetic E-Commerce Platform [A+]',
      year: '2026',
      course: '[UEL] Advanced Business Website Development',
      role: 'Product BA / AI Commerce Builder — full-stack build (Angular, Node.js, MongoDB), UI/UX and AI feature design',
      link: '#',
      github: '#',
      caseStudy: '#',
      image: 'Images/projects/afterglow/cover.jpg',
      summary: 'AI-powered cosmetics e-commerce platform pairing a modern Angular/Node.js/MongoDB stack with an "AI Doctor" advisory suite for personalized skincare and makeup recommendations.',
      problem: 'Cosmetics shoppers rarely know their real skin type (~63% of women don\'t), and most e-commerce sites offer only generic recommendations — hurting trust, conversion, and retention.',
      solution: 'Built a full-stack platform (Angular + Node.js/Express + MongoDB) with an "AI Doctor" suite — AI Dermatologist, AI Client Advisor, AI Makeup Artist, and a real-time AI Voice Concierge (LiveKit/WebRTC) — for personalized skincare and product guidance.',
      impact: 'All core business flows (auth, cart, checkout, order management, admin dashboard) reached a 100% test-pass rate, validated against a real competitor (Flower Knows) as differentiated by AI-driven personalization.',
      features: [
        'AI Dermatologist, Client Advisor & Makeup Artist advisory suite',
        'Real-time AI Voice Concierge via LiveKit/WebRTC',
        'Full shopping flow: catalog, wishlist, cart, multi-method checkout',
        'Secure auth: JWT + Google OAuth2.0 with OTP password recovery',
        'Admin dashboard with real-time revenue and sales analytics'
      ],
      tags: ['Angular', 'Node.js/Express', 'MongoDB', 'JWT/OAuth2.0', 'LiveKit/WebRTC'],
      metrics: [
        { value: '100%', label: 'core flows passed testing' },
        { value: '4', label: 'AI advisory features' }
      ],
      expanded: false,
      themeColor: 'rgba(0, 255, 204, 0.6)',
      details: [
        'Identified customer pain points in online cosmetic shopping and proposed AI-driven personalization.',
        'Designed business workflows and system logic with BPMN and Use Case diagrams.',
        'Collaborated on a functional web prototype combining UI/UX with backend logic.',
        'Designed conversion-focused features for AI-assisted shopping.'
      ]
    },
    {
      id: 'vinfast-vf6-campaign',
      name: 'VinFast VF6 Campaign',
      fullName: 'VinFast VF6 Digital Campaign - MarTech Strategy [A+]',
      year: '2026',
      course: '[UEL] Marketing Technology',
      role: 'Sales & CRM Strategy + KPI/Budget/Risk planning (20% contribution share)',
      link: '#',
      github: '#',
      caseStudy: '#',
      image: 'Images/projects/vinfast-vf6-campaign/cover.jpg',
      summary: 'Integrated MarTech campaign strategy using a WordPress-centered digital funnel to convert EV-hesitant Vietnamese families into VinFast VF6 test drives and buyers.',
      problem: 'Vietnamese consumers remain hesitant about EV adoption (charging, cost, family fit); VinFast needed a data-driven marketing system to convert that hesitation into test drives and purchases for the VF6.',
      solution: 'Designed an integrated MarTech architecture centered on a WordPress landing page hub, connecting Meta/Google/TikTok Ads, GA4/GTM/Hotjar tracking, and HubSpot CRM across three phases — Awareness, Engagement, Maintenance — mapped to the customer journey.',
      impact: 'Projected funnel: 5,000,000 reach → 180,000 site visits → 2,000 test-drive registrations → 900 completed test drives → 120 purchases, with a full budget plan and CPC/CPL/CAC evaluation model.',
      features: [
        'WordPress landing hub with VF5-vs-VF6 comparison content',
        'Full-funnel paid media plan across TikTok/Google/Meta Ads',
        'HubSpot CRM lead capture and nurturing pipeline',
        'GA4/GTM/Hotjar behavior tracking stack',
        'AI-assisted content production (ChatGPT/Gemini, Canva/Pippit)'
      ],
      tags: ['MarTech Strategy', 'GA4/GTM', 'Meta & Google Ads', 'HubSpot CRM'],
      metrics: [
        { value: '5M', label: 'projected reach' },
        { value: '120', label: 'projected VF6 purchases' }
      ],
      expanded: false,
      themeColor: 'rgba(142, 45, 226, 0.6)',
      details: [
        'Conducted market and competitor analysis to define target segments and personas.',
        'Designed an Ads to Tracking to CRM funnel for lead generation.',
        'Built and tested a high-conversion landing page.',
        'Applied CPC, CPL, and conversion-rate metrics to optimize campaign decisions.'
      ]
    },
    {
      id: 'oldie-zone',
      name: 'OLDIE ZONE',
      fullName: 'OLDIE ZONE - E-Commerce Platform for Classic Culture Enthusiasts [A]',
      year: '2025',
      course: '[UEL] Advanced Business Website Development',
      role: 'Team member (5-person team, equal contribution) — front-end, AWS serverless integration, and AI feature design',
      link: '#',
      github: '#',
      caseStudy: '#',
      image: 'Images/projects/oldie-zone/cover.jpg',
      summary: 'A serverless, AI-enhanced e-commerce platform blending retail, streaming, and a peer marketplace to help Vietnamese collectors buy, trade, and relive vintage VHS/CD/DVD culture together.',
      problem: 'Vietnamese collectors of vintage VHS/CD/DVD culture have no specialized platform to catalog, trade, or connect over their collections — existing sites are simple retail with no personalization or community.',
      solution: 'Built a serverless B2C platform (AWS S3/CloudFront/Lambda/Location Service) combining shopping with a community marketplace (THREAD), a VHS-style streaming room (CINE ROOM), an AI recommendation engine, and a RAG chatbot powered by Claude 4.5 Sonnet.',
      impact: 'All core e-commerce and AI features (auth, search, cart, checkout, cine room, thread posting) passed functional testing, delivering a fully working front-end prototype on a serverless + AI architecture.',
      features: [
        'AI chatbot (RAG + Claude 4.5 Sonnet) for store Q&A',
        'AI product recommendation engine',
        'CINE ROOM: VHS-style streaming with live chat',
        'THREAD peer marketplace for trading collectibles',
        'Checkout with COD/MoMo/QR + AWS Location Service address autofill'
      ],
      tags: ['AWS S3/CloudFront/Lambda', 'RAG + Claude 4.5 Sonnet', 'Figma', 'Agile/Scrum'],
      metrics: [
        { value: '100%', label: 'core features passed testing' },
        { value: '3', label: 'AI-powered features' }
      ],
      expanded: false,
      themeColor: 'rgba(255, 88, 88, 0.6)',
      details: [
        'Designed e-commerce workflows for browsing, purchasing, and community interaction.',
        'Developed a functional platform with product management and UX optimization.',
        'Enhanced experience through location-based features and AI-assisted support.',
        'Created Figma prototypes to align requirements with system design.'
      ]
    },
    {
      id: 'unijobs-plus',
      name: 'UniJobs+',
      fullName: 'UniJobs+ - Centralized Recruitment Platform for VNU-HCM [A+]',
      year: '2025',
      course: '[UEL] Information System Analysis and Design',
      role: 'Team member (Group E3, 5 people) — business analysis, requirements modeling (BPMN/DFD/UML), and database design',
      link: '#',
      github: '#',
      caseStudy: '#',
      image: 'Images/projects/unijobs-plus/cover.jpg',
      summary: 'A system-analysis case study proposing and prototyping "UniJobs+," a centralized, verified recruitment platform to replace VNU-HCM\'s fragmented student job-search channels.',
      problem: 'VNU-HCM\'s ~90,000 students across 8 member universities have no centralized, trustworthy recruitment channel — job info is scattered across Facebook groups and unverified forms, with no employer verification or tracking.',
      solution: 'Designed and prototyped a centralized, role-based (Student/Recruiter/SAO Admin) recruitment platform with verified-employer postings and personalized matching — modeled via BPMN, DFD, UML, and a normalized (3NF) ERD, built as a Figma prototype and functional Flask/Bootstrap site.',
      impact: 'Delivered a complete analysis-to-prototype system — full SRS, database schema, working Flask/JSON proof-of-concept, and mobile + desktop UI flows — demonstrating a viable path to replace informal recruitment channels.',
      features: [
        'Student profiles with personalized job matching by major/GPA/skills',
        'Employer verification workflow and applicant management dashboard',
        'SAO Admin panel for approvals and statistical reporting',
        'OTP-based registration/login for all roles',
        '3NF relational schema plus working Flask/Bootstrap prototype'
      ],
      tags: ['Flask', 'Figma', 'BPMN/DFD/UML', 'ERD/3NF Design'],
      metrics: [
        { value: '90K+', label: 'students across 8 universities' },
        { value: '3', label: 'user roles modeled' }
      ],
      expanded: false,
      themeColor: 'rgba(58, 123, 213, 0.6)',
      details: [
        'Analyzed recruitment processes for students and employers.',
        'Translated business requirements into system specifications.',
        'Designed database structure for job postings, applications, and users.',
        'Developed UI/UX prototypes to streamline the application process.'
      ]
    },
    {
      id: 'cv-management',
      name: 'CV Management',
      fullName: 'Curricula Vitae Management Software for HR [A]',
      year: '2024',
      course: '[UEL] Programming Techniques',
      role: 'System architecture rationale, file-based storage implementation, and database/entity design',
      link: '#',
      github: '#',
      caseStudy: '#',
      image: 'Images/projects/cv-management/cover.jpg',
      summary: 'A Flask + Bootstrap HR web app that replaces spreadsheet-based hiring with JSON-backed candidate tracking, automated status emails, and exportable recruitment dashboards.',
      problem: 'HR teams relying on spreadsheets or manual filing for candidate data find it slow, error-prone, and hard to scale.',
      solution: 'Built a web-based CV Management System with a Flask backend and Bootstrap front-end, storing candidate/event/user data in structured JSON files to support profile management, status tracking, and automated recruiter workflows.',
      impact: 'Manual functional and usability testing found all core workflows stable with a smooth user experience; minor UX issues were identified and resolved or logged as future work.',
      features: [
        'Candidate profile management backed by JSON file storage',
        'Automated SMTP email notifications on status change',
        'Interactive interview scheduling calendar (FullCalendar.js)',
        'HR dashboard with Chart.js visualizations',
        'Search/filter with Export to Excel and PDF'
      ],
      tags: ['Flask (Python)', 'Bootstrap', 'JSON Storage', 'Chart.js'],
      metrics: [
        { value: '100%', label: 'core workflows stable' },
        { value: '2', label: 'export formats (Excel/PDF)' }
      ],
      expanded: false,
      themeColor: 'rgba(248, 87, 166, 0.6)',
      details: [
        'Collaborated on a web-based CV management system.',
        'Designed system structure and data flow for efficient CV processing.',
        'Contributed to frontend development and system documentation.',
        'Supported planning and presentation to communicate business value.'
      ]
    },
    {
      id: 'socom',
      name: 'Trong Lá Nớ',
      fullName: 'Trong Lá Nớ - Social Commerce Campaign for a Hue Food Brand',
      year: '2026',
      course: '[UEL] Social Commerce',
      role: 'Team member (Group 2, 6 people, equal contribution) — campaign strategy, content, and KPI analysis',
      link: '#',
      github: '#',
      caseStudy: '#',
      image: 'Images/projects/socom/cover.jpg',
      summary: 'A 10-day AISAS-based social commerce campaign that used clone-account seeding across Facebook and TikTok to build trust and purchase intent for a small homemade Hue food brand.',
      problem: '"Trong Lá Nớ," a new homemade Hue-style nem chả brand, needed to build awareness, trust, and purchase intent in a crowded local food market where competitors compete mainly on price rather than storytelling.',
      solution: 'Designed and ran a 10-day AISAS-based social commerce campaign across Facebook and TikTok using three coordinated "clone" personas, a content matrix (storytelling video, packaging contest, education, minigame), and structured A/B testing of content and audiences.',
      impact: 'Exceeded targets on several KPIs — 13,544 impressions vs. 10,000 target, 2,000 unique visitors vs. 1,500, 89% positive sentiment vs. 80% target — and drove 12 real product purchases during the campaign window.',
      features: [
        'Three-persona "clone account" seeding ecosystem',
        'AISAS-mapped content calendar (storytelling, contest, education, minigame)',
        'A/B tested messaging and audience segments',
        'Group-buying and Messenger-based social CRM conversion',
        'Full KPI Pyramid performance report + reputation-management process'
      ],
      tags: ['Social Commerce', 'AISAS Model', 'A/B Testing', 'Facebook/TikTok'],
      metrics: [
        { value: '13.5K', label: 'impressions vs 10K target' },
        { value: '89%', label: 'positive sentiment' }
      ],
      expanded: false,
      themeColor: 'rgba(107, 155, 91, 0.6)',
      details: [
        'Mapped the campaign to the AISAS model across a 10-day content calendar.',
        'Ran a three-persona clone-account seeding strategy to simulate organic word-of-mouth.',
        'Executed A/B tests on messaging and target-audience segments.',
        'Measured results against a full KPI Pyramid (Awareness, Brand Health, Engagement, Action).'
      ]
    },
    {
      id: 'w2-competitor-analysis',
      name: 'Galaxy Play Analysis',
      fullName: 'Galaxy Play vs. VieON & Netflix Vietnam - Facebook Competitor Analysis',
      year: '2025',
      course: '[UEL] Digital Marketing Data Analysis',
      role: 'Team member (5-person team, equal contribution) — data collection, cleaning automation, and strategic recommendations',
      link: '#',
      github: '#',
      caseStudy: '#',
      image: 'Images/projects/w2-competitor-analysis/cover.jpg',
      summary: 'A data-driven competitor analysis comparing Galaxy Play\'s Facebook/TikTok strategy against VieON and Netflix Vietnam, revealing a strong-acquisition/weak-retention gap driven by app UX issues.',
      problem: 'Galaxy Play needed to understand how its Facebook/TikTok marketing compared to competitors VieON and Netflix Vietnam, and why strong acquisition wasn\'t translating into retention.',
      solution: 'Built a multi-tool data pipeline (Apify, Fanpage Karma, Meta Ads Library, custom Python/Selenium scraper) to collect posts/comments/ads, then applied engagement-rate benchmarking, hashtag/word-cloud analysis, and an experimental linear-regression engagement model, visualized in Power BI.',
      impact: 'Found Galaxy Play leads in ad volume/localization and acquisition but suffers a major retention drop-off (56.8% negative app reviews citing crashes/login errors); delivered a SWOT and prioritized strategic recommendations.',
      features: [
        'Multi-source scraping pipeline (Apify, Fanpage Karma, Meta Ads Library, custom Selenium script)',
        'Automated data-cleaning scripts with engagement-rate feature extraction',
        'Linear regression engagement-prediction model + hashtag/word-cloud analysis',
        'Cross-platform AARRR funnel benchmarking across 3 brands',
        'SWOT analysis and prioritized strategy recommendations'
      ],
      tags: ['Apify', 'Python/Selenium', 'Power BI', 'AARRR Funnel'],
      metrics: [
        { value: '56.8%', label: 'negative reviews found' },
        { value: '3', label: 'brands benchmarked' }
      ],
      expanded: false,
      themeColor: 'rgba(58, 180, 210, 0.6)',
      details: [
        'Built a custom Python/Selenium scraper alongside Apify and Fanpage Karma data collection.',
        'Cleaned and standardized multi-source data with automated feature-engineering scripts.',
        'Modeled engagement prediction with linear regression and hashtag/word-cloud analysis.',
        'Benchmarked all three brands on an AARRR funnel and delivered a SWOT-based strategy.'
      ]
    }
  ];

  onNavClick(fragment: string) {
    setTimeout(() => {
      document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }

  trackByProject(index: number, project: any) {
    return project.id ?? index;
  }

  scrollCarousel(track: HTMLElement, direction: number) {
    track.scrollBy({ left: direction * 360, behavior: 'smooth' });
  }

  toggleDetails(project: any) {
    project.expanded = !project.expanded;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isNavScrolled = window.scrollY > 40;
  }

  ngAfterViewInit() {
    const root = this.host.nativeElement;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          if (entry.target.classList.contains('stats-bar')) {
            this.animateStats();
          }
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 }
    );

    root.querySelectorAll('.reveal, .stats-bar, .timeline-list').forEach((el) => observer.observe(el));
  }

  private animateStats() {
    if (this.statsAnimated) return;
    this.statsAnimated = true;

    const duration = 1400;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      this.heroHighlights.forEach((highlight) => {
        if (highlight.target == null) return;
        const value = highlight.target * eased;
        highlight.display = highlight.decimals ? value.toFixed(highlight.decimals) : String(Math.round(value));
      });

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }
}

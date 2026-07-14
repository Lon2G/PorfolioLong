import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Huynh Quoc Long';
  gpa = '> 3.5';
  email = 'huynhquoclong.2005@gmail.com';
  linkedin = 'https://www.linkedin.com/in/qu%E1%BB%91c-long-hu%E1%BB%B3nh/';
  github = 'https://github.com/';
  cv = '#';
  photo = 'Images/anhava.jpg';

  heroBackground = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2200&q=85';

  navItems = [
    { label: 'STORY', fragment: 'story' },
    { label: 'CAPABILITIES', fragment: 'capabilities' },
    { label: 'WORK', fragment: 'projects' },
    { label: 'TIMELINE', fragment: 'experience' },
    { label: 'KNOWLEDGE', fragment: 'insights' },
    { label: 'CONTACT', fragment: 'contact' }
  ];

  heroHighlights = [
    { value: 'GPA > 3.5', label: 'Academic performance' },
    { value: 'Year 3 @ UEL', label: 'University of Economics and Law' },
    { value: 'E-commerce', label: 'Major focus' },
    { value: 'Business + Tech + AI', label: 'Hybrid product profile' }
  ];

  journeySteps = ['Business', 'E-commerce', 'Business Analysis', 'AI', 'Product Operations'];

  capabilityBlocks = [
    {
      title: 'Business Systems',
      icon: 'fas fa-diagram-project',
      text: 'I map messy operations into workflows, requirements, and business logic that teams can build from.',
      tags: ['BPMN', 'Requirement Analysis', 'Use Case', 'Product Operations']
    },
    {
      title: 'AI Product Thinking',
      icon: 'fas fa-brain',
      text: 'I use AI to accelerate research, automate repetitive work, and design smarter digital experiences.',
      tags: ['ChatGPT', 'Claude', 'Gemini', 'Prompt Engineering']
    },
    {
      title: 'Commerce Execution',
      icon: 'fas fa-bag-shopping',
      text: 'I connect customer experience, growth funnels, analytics, and product detail into practical e-commerce systems.',
      tags: ['E-commerce', 'Growth', 'Customer Experience', 'Analytics']
    }
  ];

  skillGroups = [
    {
      category: 'Business',
      level: 86,
      items: ['E-commerce', 'Product Operations', 'Digital Marketing']
    },
    {
      category: 'Product',
      level: 82,
      items: ['Product Strategy', 'Customer Journey', 'Feature Thinking']
    },
    {
      category: 'BA',
      level: 88,
      items: ['Requirement Analysis', 'BPMN', 'Use Case', 'User Flow']
    },
    {
      category: 'AI',
      level: 84,
      items: ['ChatGPT', 'Claude', 'Gemini', 'Prompt Engineering', 'Automation']
    },
    {
      category: 'Development',
      level: 76,
      items: ['Java', 'Android', 'Supabase', 'SQL', 'Angular']
    },
    {
      category: 'Data',
      level: 78,
      items: ['SQL', 'Analytics', 'Metrics', 'Dashboard Logic']
    },
    {
      category: 'Tools',
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
      course: '[UEL] Advanced Business Web Development',
      role: 'Product BA / AI Commerce Builder',
      link: '#',
      github: '#',
      caseStudy: '#',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&q=80',
      video: 'https://cdn.pixabay.com/video/2020/07/31/46077-446702758_tiny.mp4',
      summary: 'AI-assisted cosmetic commerce experience designed around personalization, trust, and conversion.',
      problem: 'Online cosmetic shoppers struggle to choose products confidently without personalized guidance.',
      solution: 'Designed AI recommendation flows, business workflows, and an end-to-end commerce prototype.',
      impact: 'A+ project focused on improving product discovery, trust, and conversion readiness.',
      features: ['AI Recommendation', 'BPMN', 'Use Case', 'UI/UX Flow', 'E-commerce'],
      tags: ['AI Recommendation', 'Supabase', 'BPMN', 'Admin Dashboard'],
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
      role: 'MarTech Strategist',
      link: '#',
      github: '#',
      caseStudy: '#',
      image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1000&q=80',
      video: 'https://cdn.pixabay.com/video/2019/11/24/29571-376518171_tiny.mp4',
      summary: 'Integrated funnel strategy connecting ads, tracking, landing-page UX, CRM, and conversion metrics.',
      problem: 'Lead-generation campaigns need a clear funnel, measurable touchpoints, and conversion accountability.',
      solution: 'Built a MarTech funnel and optimized landing-page flow for better registration intent.',
      impact: 'A+ project with clear CPC, CPL, and conversion-rate evaluation logic.',
      features: ['CRM Funnel', 'Landing Page', 'Analytics', 'Customer Persona'],
      tags: ['MarTech', 'CRM', 'Growth', 'Analytics'],
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
      course: '[UEL] Business Web Development',
      role: 'E-commerce Product Designer',
      link: '#',
      github: '#',
      caseStudy: '#',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80',
      video: 'https://cdn.pixabay.com/video/2023/10/22/186008-877148906_tiny.mp4',
      summary: 'Community-led commerce platform for vintage product browsing, purchasing, and engagement.',
      problem: 'Classic culture shoppers need product discovery and community context in one commerce experience.',
      solution: 'Created end-to-end workflows, product management flows, and Figma prototypes.',
      impact: 'A project connecting e-commerce logic with user experience and community interaction.',
      features: ['E-commerce', 'Figma Prototype', 'Community', 'AI Support'],
      tags: ['E-Commerce', 'Figma', 'System Design', 'Customer Experience'],
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
      role: 'Business Analyst',
      link: '#',
      github: '#',
      caseStudy: '#',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
      video: 'https://cdn.pixabay.com/video/2021/08/04/83896-584742784_tiny.mp4',
      summary: 'Recruitment platform analysis translating student and employer needs into system specifications.',
      problem: 'Student job applications are fragmented across channels, making recruitment harder to manage.',
      solution: 'Modeled workflows, designed database structures, and defined core platform features.',
      impact: 'A+ project showing clear BA thinking from process analysis to product requirements.',
      features: ['BPMN', 'Database Design', 'Use Case', 'Recruitment Flow'],
      tags: ['System Analysis', 'Database Design', 'BPMN', 'User Flow'],
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
      role: 'Frontend & Documentation Contributor',
      link: '#',
      github: '#',
      caseStudy: '#',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80',
      video: 'https://cdn.pixabay.com/video/2024/02/10/190867-889078658_tiny.mp4',
      summary: 'HR workflow tool for storing, managing, and retrieving candidate profile data.',
      problem: 'HR teams need faster ways to organize and retrieve candidate information.',
      solution: 'Contributed frontend implementation, data-flow structure, documentation, and presentation.',
      impact: 'A project focused on practical workflow efficiency and system communication.',
      features: ['Frontend', 'Project Planning', 'HR Workflow', 'Documentation'],
      tags: ['Frontend', 'Project Planning', 'Data Flow', 'HR Tech'],
      themeColor: 'rgba(248, 87, 166, 0.6)',
      details: [
        'Collaborated on a web-based CV management system.',
        'Designed system structure and data flow for efficient CV processing.',
        'Contributed to frontend development and system documentation.',
        'Supported planning and presentation to communicate business value.'
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
}

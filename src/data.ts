// Program content for the Master in Information Technology (MIT) site.
// Single source of truth — components read from this file.
// Content is drawn from official ISUFST–CICT program documents:
// the MIT Study Plan, Graduate Catalogue, Capstone Project Manual,
// CICT Research Agenda 2026–2031, and the CICT AI Ethics Policy.

export const program = {
  degree: 'Master in Information Technology',
  abbrev: 'MIT',
  specialization: 'Applied AI and Data Analytics for Fisheries and Agriculture',
  college: 'College of Information and Communications Technology',
  collegeAbbrev: 'CICT',
  university: 'Iloilo State University of Fisheries Science and Technology',
  universityAbbrev: 'ISUFST',
  location: 'Barotac Nuevo, Iloilo · Western Visayas · Philippines',
  badge: 'PQF Level 7 · 36 Units · Trimestral · CHED CMO 15 s.2019',
  tagline:
    'A master’s degree completed not by a traditional theoretical thesis, but by a demonstrable, peer-evaluated technology artifact that solves real-world challenges in fisheries, agriculture, and the Philippine blue economy.',
  chair: 'Dr. Jassiel I. Padios',
  dean: 'Dr. Noel P. Caliston',
  academicYear: 'AY 2026–2027',
  intakeTerm: 'First Trimester Intake',
  scheduleMode: 'Executive Saturday & HyFlex Hybrid Modality',
}

export const heroStats = [
  { v: '36', l: 'Units Total', desc: '12 Core · 18 Specialization · 6 Capstone' },
  { v: 'Level 7', l: 'PQF Master’s', desc: 'Aligned with CHED CMO 15 s.2019' },
  { v: '15–24', l: 'Months', desc: 'Accelerated trimestral timeline' },
  { v: '100%', l: 'DOST STRAND', desc: 'Full scholarship & ₱30k/mo stipend available' },
]

export const stats = [
  { value: '36', label: 'Curriculum Units', sub: '12 core · 18 specialization · 6 capstone' },
  { value: '11', label: 'Taught Courses', sub: 'MIT 701–710 plus CAPS 1 & 2' },
  { value: '3', label: 'Rigorous Quality Gates', sub: 'Comprehensive Exam · Concept Defense · Final Artifact Defense' },
  { value: '1', label: 'Refereed Journal Paper', sub: 'Mandatory Scopus / WoS indexed paper before graduation' },
]

// The three graduation gates
export const requirements = [
  {
    n: '01',
    icon: 'doc',
    title: 'Pass the Comprehensive Examination',
    body: 'A written diagnostic and synoptic examination across core and specialization coursework, administered at the close of the Summer term of Year 1 before capstone enrollment.',
    when: 'Summer Term · Year 1',
    badge: 'Synoptic Written Exam',
  },
  {
    n: '02',
    icon: 'build',
    title: 'Build & Defend the Capstone Artifact',
    body: 'Complete CAPS 1 (Proposal & Prototype) and CAPS 2 (Production Artifact & Evaluation) under Design Science Research Methodology (DSRM). Live demonstration required.',
    when: 'Trimesters 1–2 · Year 2',
    badge: 'Live Working System',
  },
  {
    n: '03',
    icon: 'journal',
    title: 'Publish in an Internationally Refereed Journal',
    body: 'At least one manuscript derived from your capstone artifact must be accepted for publication in an internationally refereed, peer-reviewed journal prior to the final oral defense.',
    when: 'During CAPS 2 · Before Final Defense',
    badge: 'Scopus / WoS Refereed',
  },
]

export const highlights = [
  {
    icon: 'build',
    title: 'Build, Don’t Just Describe',
    body: 'Your capstone deliverable is a functional software, embedded, or data system — evaluated rigorously against real industry benchmarks, not just theoretical prose.',
  },
  {
    icon: 'anchor',
    title: 'Rooted in the Philippine Blue Economy',
    body: 'Directly address food security, sustainable mariculture, smart fishing, and agricultural value chains across Panay Island and Western Visayas.',
  },
  {
    icon: 'brain',
    title: 'Deep Applied Machine Learning',
    body: 'Computer vision on edge devices, predictive geospatial time-series, and large model architectures integrated as core computational components.',
  },
  {
    icon: 'flask',
    title: 'Design Science Research (DSRM)',
    body: 'Follow the internationally recognized DSRM framework (Hevner, Peffers et al.) to ensure your engineering work qualifies as publishable academic research.',
  },
  {
    icon: 'scale',
    title: 'AI Governance & Data Privacy',
    body: 'Full alignment with the CICT AI Ethics Policy, the Philippine National AI Strategy, and Republic Act 10173 (Data Privacy Act of 2012).',
  },
  {
    icon: 'globe',
    title: 'Executive HyFlex Schedule',
    body: 'Engineered for full-time software engineers, network engineers, educators, and IT managers with Saturday modular sessions and asynchronous labs.',
  },
]

// Program outcomes (PO1–PO6) pursuant to CHED CMO 15 s.2019 & PQF Level 7.
export const outcomes = [
  { n: 'PO1', title: 'Advanced IT Problem Solving', body: 'Analyze, architect, and deploy high-concurrency, secure IT solutions addressing complex industrial and institutional problems.' },
  { n: 'PO2', title: 'Design Science & Applied Research', body: 'Produce innovative technological artifacts and contribute original empirical findings to peer-reviewed international scientific literature.' },
  { n: 'PO3', title: 'Ethical & Responsible Technology', body: 'Integrate information security, algorithmic transparency, data stewardship, and societal welfare into every system lifecycle.' },
  { n: 'PO4', title: 'High-Level Technical Communication', body: 'Defend architectural decisions, present research findings at international symposia, and author peer-reviewed manuscripts.' },
  { n: 'PO5', title: 'Engineering Leadership & Governance', body: 'Lead multidisciplinary engineering teams, implement ITIL/COBIT governance, and manage mission-critical digital transformation projects.' },
  { n: 'PO6', title: 'Lifelong Technological Mastery', body: 'Independently assimilate emerging computing paradigms, generative models, quantum concepts, and distributed technologies.' },
]

export type CourseDetail = {
  code: string
  title: string
  units: number
  kind: 'core' | 'spec' | 'caps' | 'milestone'
  description: string
  technologies: string[]
  deliverable: string
}

export type CurriculumTerm = {
  term: string
  ay: string
  units: number
  tag: string
  courses: CourseDetail[]
}

// Complete rich curriculum with syllabus descriptions and tech stacks
export const curriculum: CurriculumTerm[] = [
  {
    term: 'First Trimester',
    ay: 'Year 1 · Trimester 1',
    units: 9,
    tag: 'Cloud Foundations & Distributed Systems',
    courses: [
      {
        code: 'MIT 701',
        title: 'Cloud Infrastructure and Virtualization',
        units: 3,
        kind: 'core',
        description:
          'Architecting fault-tolerant, elastic cloud solutions. Covers container orchestration, infrastructure as code, serverless compute, and microservices networking.',
        technologies: ['Docker', 'Kubernetes', 'Terraform', 'AWS/GCP', 'Linux Kernel'],
        deliverable: 'Automated CI/CD multi-tier containerized cluster with monitoring',
      },
      {
        code: 'MIT 702',
        title: 'Data Management and Analytics',
        units: 3,
        kind: 'core',
        description:
          'Advanced relational modeling, spatial GIS databases, columnar data lakes, time-series storage, and high-throughput data processing pipelines.',
        technologies: ['PostgreSQL', 'PostGIS', 'Apache Spark', 'TimescaleDB', 'dbt'],
        deliverable: 'Spatial-temporal analytics pipeline for fisheries & agricultural telemetry',
      },
      {
        code: 'MIT 703',
        title: 'IT Infrastructure and Service Management',
        units: 3,
        kind: 'core',
        description:
          'Enterprise infrastructure reliability, high-availability networks, zero-trust security postures, and ITIL v4 service delivery frameworks.',
        technologies: ['ITIL 4', 'WireGuard', 'Prometheus', 'Grafana', 'Zero Trust Architecture'],
        deliverable: 'Enterprise SLA & disaster recovery architecture blueprint',
      },
    ],
  },
  {
    term: 'Second Trimester',
    ay: 'Year 1 · Trimester 2',
    units: 9,
    tag: 'Machine Learning & Predictive Systems',
    courses: [
      {
        code: 'MIT 704',
        title: 'IT Project Management and Governance',
        units: 3,
        kind: 'core',
        description:
          'Agile and hybrid engineering management, COBIT governance, technology risk valuation, budget forecasting, and intellectual property protection.',
        technologies: ['Scrum', 'COBIT 2019', 'Jira', 'IP Law / RA 8293', 'Risk Matrix'],
        deliverable: 'Audited enterprise digital governance charter & product roadmap',
      },
      {
        code: 'MIT 705',
        title: 'Artificial Intelligence and Machine Learning',
        units: 3,
        kind: 'spec',
        description:
          'Supervised and unsupervised learning, deep neural architectures, edge vision models, transfer learning, and model optimization for constrained devices.',
        technologies: ['Python', 'PyTorch', 'Hugging Face', 'ONNX', 'OpenCV'],
        deliverable: 'Trained, pruned edge-AI model for species detection or crop diagnosis',
      },
      {
        code: 'MIT 706',
        title: 'Data Mining and Predictive Modeling',
        units: 3,
        kind: 'spec',
        description:
          'Advanced feature engineering, time-series forecasting, anomaly detection, geospatial spatial autocorrelation, and ensemble predictive algorithms.',
        technologies: ['XGBoost', 'Prophet', 'GeoPandas', 'SHAP', 'Scikit-Learn'],
        deliverable: 'Validated predictive yield/catch forecasting system with explanatory metrics',
      },
    ],
  },
  {
    term: 'Third Trimester',
    ay: 'Year 1 · Trimester 3',
    units: 9,
    tag: 'Edge Systems, IoT & Research Methodology',
    courses: [
      {
        code: 'MIT 707',
        title: 'AI Governance, Ethics, and Information Assurance',
        units: 3,
        kind: 'spec',
        description:
          'Regulatory compliance, ISO 42001 AI management systems, algorithmic bias auditing, differential privacy, and cybersecurity penetration testing.',
        technologies: ['ISO 42001', 'RA 10173', 'Fairlearn', 'OWASP Top 10', 'Wireshark'],
        deliverable: 'Comprehensive AI algorithmic bias audit & ethical safety dossier',
      },
      {
        code: 'MIT 708',
        title: 'Internet of Things and Embedded Systems',
        units: 3,
        kind: 'spec',
        description:
          'Low-power microcontroller programming, LoRa/LoRaWAN telemetry, environmental telemetry sensors, solar-powered edge nodes, and MQTT broker mesh.',
        technologies: ['ESP32', 'FreeRTOS', 'LoRaWAN', 'MQTT', 'Embedded C++'],
        deliverable: 'Solar-powered remote field telemetry node with cloud gateway link',
      },
      {
        code: 'MIT 709',
        title: 'Design Science Research in IT',
        units: 3,
        kind: 'spec',
        description:
          'Formal research methodologies for computing artifacts. Formulating design problems, systematic literature reviews, artifact design frameworks, and empirical evaluation.',
        technologies: ['DSRM (Hevner/Peffers)', 'Zotero', 'LaTeX', 'PRISMA', 'IEEE Format'],
        deliverable: 'Complete Capstone Proposal (Chapters 1–3) with peer-reviewed bibliography',
      },
    ],
  },
  {
    term: 'Summer Term',
    ay: 'Year 1 · Summer',
    units: 3,
    tag: 'Advanced Seminars & Comprehensive Examination',
    courses: [
      {
        code: 'MIT 710',
        title: 'Seminar in Applied AI and Emerging Technologies',
        units: 3,
        kind: 'spec',
        description:
          'Deep dives into current breakthroughs: Generative AI, multimodal foundation models, spatial computing, edge TPU silicon, and regional industrial applications.',
        technologies: ['LangChain', 'Ollama / vLLM', 'Edge TPU', 'Vector DBs', 'RAG'],
        deliverable: 'Prototype demonstration and research white paper presented at symposium',
      },
      {
        code: 'COMP-EXAM',
        title: 'Comprehensive Examination',
        units: 0,
        kind: 'milestone',
        description:
          'A rigorous written examination testing mastery across Core and Specialization domains. Passing is a prerequisite to enrolling in CAPS 1.',
        technologies: ['Core IT', 'Machine Learning', 'Systems Architecture', 'DSRM'],
        deliverable: 'Written Comprehensive Examination Clearance Certificate',
      },
    ],
  },
  {
    term: 'Fourth Trimester',
    ay: 'Year 2 · Trimester 1',
    units: 3,
    tag: 'Capstone Proposal & Functional Prototype',
    courses: [
      {
        code: 'CAPS 1',
        title: 'Capstone 1 — Proposal & Prototype Defense',
        units: 3,
        kind: 'caps',
        description:
          'Problem validation with regional industry/community stakeholders, architecture modeling using C4 diagrams, and defense of a working proof-of-concept artifact.',
        technologies: ['System Prototype', 'C4 Architecture', 'Stakeholder Validation'],
        deliverable: 'Approved Proposal Manuscript & Verified Working Prototype',
      },
    ],
  },
  {
    term: 'Fifth Trimester',
    ay: 'Year 2 · Trimester 2',
    units: 3,
    tag: 'Full Implementation, Defense & Publication',
    courses: [
      {
        code: 'CAPS 2',
        title: 'Capstone 2 — Production Artifact & Final Defense',
        units: 3,
        kind: 'caps',
        description:
          'Production hardening, rigorous dual-method empirical evaluation (technical benchmarking + field stakeholder deployment), and refereed journal publication.',
        technologies: ['Production System', 'Empirical Benchmarking', 'Journal Manuscript'],
        deliverable: 'Live Public Artifact Demonstration & Journal Acceptance Letter',
      },
    ],
  },
]



// The 6 Design Science capstone milestones
export const capstone = [
  {
    phase: 'CAPS 1 · Weeks 1–3',
    kind: 'DSRM Phase 1 & 2',
    gate: false,
    title: 'Problem Identification & Stakeholder Validation',
    body: 'Validate an authentic technical or domain problem with actual practitioners in Western Visayas. Synthesize 20+ peer-reviewed sources and define measurable artifact evaluation criteria.',
  },
  {
    phase: 'CAPS 1 · Week 4',
    kind: 'Formative Gate',
    gate: true,
    title: 'Concept Defense (Quality Gate 1)',
    body: 'Present problem validity, theoretical grounding, and architectural feasibility before the Capstone Advisory Committee. Actionable rubric feedback; prevents wasted engineering cycles.',
  },
  {
    phase: 'CAPS 1 · Weeks 5–9',
    kind: 'DSRM Phase 3',
    gate: false,
    title: 'System Architecture & Working Prototype',
    body: 'Design system with C4 architecture models, construct a working prototype demonstrating core algorithms or IoT hardware, and draft Chapters 1–3 of the proposal.',
  },
  {
    phase: 'CAPS 1 · Week 10',
    kind: 'Summative Gate',
    gate: true,
    title: 'Pre-Oral Proposal Defense (Quality Gate 2)',
    body: 'Defend complete proposal and demonstrate the working prototype to the committee. Requires a passing grade of 2.50 or better to clear enrollment into CAPS 2.',
  },
  {
    phase: 'CAPS 2 · Weeks 1–6',
    kind: 'DSRM Phase 4 & 5',
    gate: false,
    title: 'Production Build, Empirical Testing & Journal Submission',
    body: 'Harden the artifact into production readiness. Execute dual empirical evaluations (technical benchmarking + field usability), and submit a manuscript to a refereed journal.',
  },
  {
    phase: 'CAPS 2 · Week 10',
    kind: 'Final Summative Gate',
    gate: true,
    title: 'Public Oral Defense & Live Artifact Demonstration',
    body: 'Demonstrate the running system live before the panel and university audience. Proof of journal acceptance clears the final requirement for graduation.',
  },
]

// Scoping matrix for prospective candidates
export const scope = {
  headers: ['Under-Scoped', 'Ideal MIT Level', 'Over-Scoped'],
  rows: [
    { c: 'Users & Impact', narrow: 'Single individual / toy app', right: 'Specific cooperative, agency, or enterprise', broad: 'Entire national population' },
    { c: 'Technical Depth', narrow: 'Basic CRUD website without AI', right: 'Trained model, edge pipeline, or distributed mesh', broad: 'Multiple concurrent novel deep learning architectures' },
    { c: 'Dataset Scale', narrow: '< 100 sample records', right: '1,000 – 50,000 real domain records', broad: 'Petabyte-scale multi-cloud telemetry' },
    { c: 'Evaluation', narrow: 'Basic subjective survey only', right: 'Benchmarking (latency, F1, RMSE) + field validation', broad: 'Decade-long longitudinal study' },
    { c: 'Timeline', narrow: 'Can be built in a weekend', right: 'Fills 2 focused trimesters (6–8 months)', broad: 'Requires 4+ years of full-time team effort' },
  ],
}

// Research frontiers aligned with CICT Research Agenda 2026–2031
export const frontiers = [
  {
    n: '01',
    icon: 'anchor',
    title: 'AI for Marine & Fisheries Resource Management',
    body: 'Edge computer vision and acoustic telemetry for automated species identification, biomass estimation, illegal fishing monitoring, and coastal stock health.',
  },
  {
    n: '02',
    icon: 'wave',
    title: 'IoT & Telemetry Systems for Smart Aquaculture',
    body: 'Autonomous sensory buoys and low-cost embedded systems monitoring dissolved oxygen, pH, salinity, and automated feeding in brackishwater fish pens.',
  },
  {
    n: '03',
    icon: 'sprout',
    title: 'Data Analytics for Agricultural Value Chains',
    body: 'Spatial-temporal predictive modeling for crop disease diagnosis, soil nutrient depletion, yield forecasting, and market price stabilization.',
  },
  {
    n: '04',
    icon: 'globe',
    title: 'Offline-First & Inclusive Regional Computing',
    body: 'Resilient, low-bandwidth, and edge-native architectures ensuring critical digital services reach island municipalities and rural coastal communities.',
  },
  {
    n: '05',
    icon: 'scale',
    title: 'AI Governance, Ethics & Information Assurance',
    body: 'Frameworks, algorithmic bias auditing, and differential privacy safeguards ensuring AI systems in agriculture and governance comply with RA 10173 and ISO 42001.',
  },
  {
    n: '06',
    icon: 'compass',
    title: 'Maritime Digital Solutions & Blue Economy',
    body: 'Informatics for maritime safety, marine protected area telemetry, eco-tourism carrying capacity, and post-harvest cold-chain assurance.',
  },
]

// Interactive eligibility tracks
export const eligibilityTracks = [
  {
    id: 'computing',
    title: 'Computing Graduates',
    degrees: 'BS in Computer Science, BS in Information Technology, BS in Information Systems, BS in Software Engineering, BS in Computer Engineering',
    status: 'Direct Admission',
    bridging: '0 Bridging Units',
    timeline: '15 Months (Fast-Track) or 24 Months',
    recommendation: 'Directly eligible to enroll in regular 36-unit MIT study plan. Full credit for all core computing coursework.',
  },
  {
    id: 'engineering',
    title: 'STEM & Engineering Allied',
    degrees: 'BS in Electronics Engineering, BS in Electrical Engineering, BS in Applied Mathematics, BS in Statistics, BS in Data Science',
    status: 'Admission with 1 Bridging Subject',
    bridging: '3 Bridging Units (MIT 501: Advanced Software Engineering & Algorithms)',
    timeline: '18–24 Months',
    recommendation: 'Admitted into regular program alongside 1 foundational bridging module to ensure software architecture fluency.',
  },
  {
    id: 'non-computing',
    title: 'Interdisciplinary & Domain Experts',
    degrees: 'BS in Fisheries, BS in Marine Biology, BS in Agriculture, BS in Business Administration / MIS, BS in Education (Tech Voc), Allied Sciences',
    status: 'Admission with Bridging Cluster',
    bridging: '6 Bridging Units (MIT 501: Programming Fundamentals + MIT 502: Database & Systems Architecture)',
    timeline: '24 Months',
    recommendation: 'Highly valued for deep domain expertise in aquaculture/agriculture! Complete 2 bridging subjects before or concurrently with Year 1.',
  },
]

// Working professional executive schedule features
export const executiveFeatures = [
  {
    title: 'Executive Saturday Intensive Sessions',
    time: 'Saturdays, 8:00 AM – 5:00 PM',
    desc: 'Core synchronous lectures and seminar discussions are consolidated onto Saturdays, allowing tech professionals and educators to maintain full-time weekday employment.',
  },
  {
    title: 'HyFlex Hybrid Mode (Online + On-Campus)',
    time: 'Flexible Delivery',
    desc: 'Attend synchronous lectures virtually via high-definition conference links or on-campus at the CICT Innovation Amphitheater in Barotac Nuevo, Iloilo.',
  },
  {
    title: 'Asynchronous Cloud Lab Workstations',
    time: '24/7 Virtual Access',
    desc: 'Hands-on programming and model training labs are provisioned via cloud instances and remote GPU servers, accessible whenever your schedule permits.',
  },
  {
    title: 'Quarterly In-Person Innovation Bootcamps',
    time: 'Once Per Trimester',
    desc: 'Hands-on hardware labs (IoT sensors, microcontroller wiring, drone orthomosaic flights) during scheduled weekend intensives with faculty mentors.',
  },
]

// Tuition & DOST STRAND financial model
export const financialModel = {
  selfFunded: {
    unitCost: '₱1,200',
    totalUnits: 36,
    tuitionEstimate: '₱43,200',
    miscPerTerm: '₱2,100',
    totalProgramCost: '₱53,700',
    notes: 'Subsidized state university rate. Payable in manageable trimester installments (~₱10,740 per term). No hidden tuition spikes.',
  },
  strandScholarship: {
    totalValue: '₱500,000+',
    monthlyStipend: '₱30,000 / month',
    researchGrant: '₱114,000',
    disseminationGrant: '₱75,000',
    outrightThesisGrant: '₱60,000',
    bookAllowance: '₱20,000 / year',
    tuitionCoverage: '100% Fully Covered by DOST-SEI',
    notes: 'The prestigious DOST-SEI STRAND scholarship covers 100% of all university fees and provides high-level financial support for full-time graduate study.',
  },
}

export const admission = [
  'Bachelor’s degree from a CHED-recognized higher education institution (Official Transcript of Records required)',
  'Certified True Copy of Transcript of Records (TOR) with Special Order (SO) number or SUC exemption',
  'Accomplished School of Graduate Studies (SGS) Graduate Admission Application Form',
  'Two (2) Confidential Letters of Recommendation from former professors, supervisors, or department heads',
  'Certificate of Good Moral Character or NBI Clearance',
  'Passing the School of Graduate Studies technical assessment and panel interview',
  'Bridging modules may be assigned for non-computing graduates upon recommendation of the admissions committee',
]

export const careers = [
  'AI / Machine Learning Engineer',
  'Enterprise Solutions & Cloud Architect',
  'Lead Data Scientist / Analytics Director',
  'Director of Information Technology / CIO',
  'Cybersecurity & Information Assurance Officer',
  'Precision Agriculture & Fisheries Technologist',
  'Assistant Professor / Senior IT Faculty',
  'Chief Technology Officer (CTO) & Tech Founder',
  'Doctor in Information Technology (DIT) Candidate',
]

export const faqs = [
  {
    q: 'How does the Capstone Project differ from a traditional Thesis?',
    a: 'Unlike a conventional Master of Science (MS) thesis which focuses predominantly on theoretical discovery, the Master in Information Technology (MIT) requires a demonstrable technological artifact — a working software platform, embedded IoT system, machine learning model, or enterprise architecture. You design, build, and empirically evaluate this system using Design Science Research Methodology (DSRM).',
  },
  {
    q: 'Can I complete this program while working full-time?',
    a: 'Yes. The MIT is structured specifically for practicing IT professionals, software engineers, government technologists, and collegiate faculty. Synchronous lectures are held on Saturdays in a HyFlex format (combining live virtual attendance with on-campus access), supplemented by asynchronous cloud-hosted lab environments that you can access 24/7.',
  },
  {
    q: 'What is the publication requirement for graduation?',
    a: 'Pursuant to CHED CMO 15 s.2019 and ISUFST graduate regulations, every candidate must have at least one paper derived from their capstone research accepted for publication in an internationally refereed journal (Scopus, Web of Science, or CHED-recognized peer-reviewed index) before scheduling the final defense.',
  },
  {
    q: 'What if my undergraduate degree is in Engineering, Business, or Science?',
    a: 'You are welcome to apply! The School of Graduate Studies evaluates applicants from non-computing disciplines individually. Depending on your transcript, you will be assigned 1 to 2 bridging subjects (such as MIT 501: Advanced Programming & Algorithms) which you complete alongside or prior to regular coursework.',
  },
  {
    q: 'How does the DOST-SEI STRAND scholarship work?',
    a: 'The DOST-SEI STRAND program provides comprehensive funding for graduate students in regional STEM priority fields. Qualified scholars receive full tuition coverage, a ₱30,000 monthly living stipend, ₱114,000 research grant, ₱75,000 dissemination grant, and book allowances. Recipients render return service in the Philippines upon graduation.',
  },
  {
    q: 'What hardware or computing resources does ISUFST provide?',
    a: 'Students have access to the CICT Advanced Computing Laboratory at the Main-Poblacion Campus, featuring high-performance GPU workstations for deep learning workloads, microcontroller prototyping benches, water quality optical test rigs, and cloud compute credits for coursework.',
  },
]

export const contact = {
  office: 'School of Graduate Studies · College of Information and Communications Technology',
  address: 'ISUFST Main-Poblacion Campus, J.T. Bretaña St., Barotac Nuevo, Iloilo 5007, Philippines',
  email: 'sgs@isufst.edu.ph',
  phone: '(+63) 917-624-6100',
  landline: '(033) 361-2401',
  hours: 'Monday – Friday, 8:00 AM – 5:00 PM PHT · Saturday Graduate Office Desk Open',
}

export type FacultyMember = {
  name: string
  title: string
  degree: string
  specialization: string
  email?: string
  photo?: string
  researchInterests?: string[]
  courses?: string[]
}

export const leadership: FacultyMember[] = [
  {
    name: 'Dr. Noel P. Caliston',
    title: 'Dean, College of Information & Communications Technology',
    degree: 'DIT — Doctor in Information Technology',
    specialization: 'Artificial Intelligence, Machine Learning & Academic Leadership',
    photo: '/faculty/caliston-noel.png',
    email: 'ncaliston@isufst.edu.ph',
    researchInterests: ['Applied Deep Learning', 'Algorithmic Optimization', 'Higher Education Tech Leadership'],
    courses: ['MIT 705 — Artificial Intelligence & Machine Learning', 'CAPS 1 & 2 Advising'],
  },
  {
    name: 'Dr. Jassiel I. Padios',
    title: 'Program Chair, Master in Information Technology',
    degree: 'DIT — Doctor in Information Technology',
    specialization: 'Artificial Intelligence, Data Analytics & Enterprise Database Systems',
    photo: '/faculty/padios-jassiel.png',
    email: 'jpadios@isufst.edu.ph',
    researchInterests: ['Data Engineering', 'Predictive Modeling', 'Spatial Database Architecture'],
    courses: ['MIT 702 — Data Management & Analytics', 'MIT 706 — Data Mining & Predictive Modeling'],
  },
]

export const facultyMembers: FacultyMember[] = [
  {
    name: 'Dr. John Rey A. Alipe',
    title: 'Instructor III & Lab Lead',
    degree: 'DIT — Doctor in Information Technology',
    specialization: 'Cloud Infrastructure, IoT & Embedded Systems',
    photo: '/faculty/alipe-johnrey.png',
    email: 'jalipe@isufst.edu.ph',
    researchInterests: ['LoRaWAN Sensory Mesh', 'Edge Computing', 'Virtualization Clusters'],
    courses: ['MIT 701 — Cloud Infrastructure', 'MIT 708 — Internet of Things'],
  },
  {
    name: 'Dr. Angie C. Almarza',
    title: 'Assistant Professor II',
    degree: 'DIT — Doctor in Information Technology',
    specialization: 'Design Science Research, IT Project Management & Governance',
    photo: '/faculty/almarza-angie.png',
    email: 'aalmarza@isufst.edu.ph',
    researchInterests: ['Design Science Research Methodology (DSRM)', 'ITIL 4 Alignment', 'COBIT Governance'],
    courses: ['MIT 704 — IT Project Management', 'MIT 709 — Design Science Research in IT'],
  },
  {
    name: 'Dr. Renante A. Diamante',
    title: 'Associate Professor IV',
    degree: 'DIT — Doctor in Information Technology',
    specialization: 'Data Mining, Predictive Analytics & Neural Architectures',
    photo: '/faculty/diamante-renante.png',
    email: 'rdiamante@isufst.edu.ph',
    researchInterests: ['Supervised Learning', 'Agricultural Informatics', 'Spatial Predictive Modeling'],
    courses: ['MIT 706 — Data Mining & Predictive Modeling', 'MIT 710 — Emerging AI Seminars'],
  },
  {
    name: 'Ram Eujohn Diamante, MIT',
    title: 'Instructor III & Systems Engineer',
    degree: 'DIT Candidate · Master in Information Technology',
    specialization: 'Applied Machine Learning, Computer Vision & Edge Systems',
    email: 'rediamante@isufst.edu.ph',
    researchInterests: ['Computer Vision (YOLO/TFLite)', 'Edge Silicon Acceleration', 'Open Source Tooling'],
    courses: ['MIT 705 — Applied Machine Learning Labs', 'CAPS Technical Mentorship'],
  },
  {
    name: 'Dr. Wenda D. Panes',
    title: 'Professor V',
    degree: 'DIT Candidate · Master in Information Technology',
    specialization: 'AI Governance, Information Assurance & Enterprise Architecture',
    email: 'wpanes@isufst.edu.ph',
    researchInterests: ['Information Security Assurance', 'Data Privacy Law (RA 10173)', 'Enterprise Resilience'],
    courses: ['MIT 703 — IT Infrastructure Management', 'MIT 707 — AI Governance & Ethics'],
  },
]

// DOST-SEI STRAND Scholarship Detailed Data
export const scholarship = {
  name: 'DOST-SEI STRAND Graduate Scholarship Program',
  abbrev: 'STRAND',
  agency: 'Department of Science and Technology — Science Education Institute (DOST-SEI)',
  tagline:
    'Full financial sponsorship, monthly living stipends, and research funding for Master’s candidates in Science and Technology priority fields.',
  description:
    'The Science and Technology Regional Alliance of Universities for National Development (STRAND) strengthens the scientific and technical capabilities of regional institutions across the Philippines. At ISUFST, STRAND directly finances qualified scholars pursuing the Master in Information Technology (MIT) degree in regional priority areas.',
}

export const scholarshipEligibility = [
  'Filipino citizen of good moral character and certified physical health',
  'Not more than 50 years old at the time of application',
  'Must meet the admission requirements for the Master in Information Technology program at ISUFST',
  'Must successfully pass the DOST-SEI STRAND technical interview and university evaluation',
  'Pursuing full-time study in an identified STEM priority area (Information Technology / Applied AI)',
  'Must have no existing scholarship or study grant with another government agency or private institution',
]

export const scholarshipRequirements = [
  'Accomplished STRAND Information Sheet (available through the School of Graduate Studies office)',
  'PSA Authenticated Birth Certificate',
  'Certified True Copy of Official Transcript of Records (TOR) with GWA computation',
  'Endorsement from two (2) former college professors or technical supervisors',
  'Official Notice of Admission (Regular Status) from the ISUFST SGS Graduate Dean',
  'Approved Program of Study signed by the MIT Program Chair',
  'Valid NBI Clearance (issued within the last 6 months)',
  'Medical Certificate of Fitness to Study issued by a licensed physician with PRC license number',
]

export const scholarshipIfEmployed = [
  'Official Written Recommendation from Head of Agency or Company Executive',
  'Form 2A — Certificate of Employment and Official Permit to Study',
  'Form 2B — Certificate of DepEd Employment and Permit to Study (for DepEd Personnel)',
  'Form A — Professional Career Plans & Five-Year Trajectory',
  'Form B — Proposed Graduate Research Direction & Regional Problem Statement',
  'Form 3 — Official Agency Certification of Health Status and Physical Capacity',
]

export const scholarshipBenefits = {
  level: 'Master’s Level Support',
  duration: 'Full coverage for the duration of the 36-unit trimestral program (up to 24 months)',
  amounts: [
    { label: 'Monthly Living Allowance', amount: '₱30,000 / mo', detail: 'Up to ₱720,000 total stipend over 2 years' },
    { label: 'Research & Capstone Grant', amount: '₱114,000', detail: 'Directly funds hardware, sensors, cloud compute, and field data collection' },
    { label: 'Dissemination / Conference Grant', amount: '₱75,000', detail: 'Sponsors presentation and travel to internationally refereed academic conferences' },
    { label: 'Thesis / Capstone Outright Allowance', amount: '₱60,000', detail: 'Disbursed upon successful pre-oral proposal defense' },
    { label: 'Learning Materials & Book Allowance', amount: '₱20,000 / yr', detail: 'Allocated for textbooks, research paper access, and dev tools' },
    { label: 'Advisory / Mentor’s Honorarium', amount: '₱36,000', detail: 'Compensates the approved capstone chair and panel committee' },
  ],
  notes: [
    '100% full coverage of university tuition, laboratory, and miscellaneous registration fees',
    'One roundtrip economy transportation allowance per year for candidates residing outside Iloilo province',
    'Comprehensive Group Accident and Hospitalization Health Insurance policy coverage',
  ],
}

export const scholarshipSteps = [
  {
    step: '01',
    title: 'Secure University Admission',
    body: 'Apply and receive an official Certificate of Admission to the Master in Information Technology program at ISUFST.',
  },
  {
    step: '02',
    title: 'Assemble STRAND Dossier',
    body: 'Complete the STRAND application forms, compile endorsements, TOR, medical certificate, and submit to the ISUFST STRAND Focal Office.',
  },
  {
    step: '03',
    title: 'University Evaluation & Interview',
    body: 'The graduate committee reviews your dossier for technical readiness and conducts the formal scholarship screening interview.',
  },
  {
    step: '04',
    title: 'DOST-SEI National Validation',
    body: 'Submissions are forwarded to the DOST Science Education Institute in Manila for final merit evaluation and slot allocation.',
  },
  {
    step: '05',
    title: 'DOST Secretary Confirmation',
    body: 'The official list of approved graduate scholars is signed by the Secretary of Science and Technology.',
  },
  {
    step: '06',
    title: 'Scholarship Agreement Execution',
    body: 'Awardees execute the official Scholarship Memorandum of Agreement and begin fully sponsored trimestral graduate coursework.',
  },
]

export const scholarshipReminders = [
  'STRAND awards are dedicated to full-time graduate study to ensure on-time graduation within 24 months.',
  'Recipients must not be actively engaged in concurrent paid employment unless on an officially approved study leave from their employer.',
  'Satisfactory academic performance (GWA of 1.75 or better with no failing grade) is required for continued term renewal.',
  'A standard return service obligation of 1:1 applies — one year of professional or academic service in the Philippines per year of scholarship.',
]

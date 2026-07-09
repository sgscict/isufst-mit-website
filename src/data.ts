// Program content for the Master in Information Technology (MIT) site.
// This is the single source of truth — components read from this file.
// Content is drawn from the official ISUFST–CICT program documents:
// the MIT Study Plan, Graduate Catalogue, Capstone Project Manual,
// CICT Research Agenda 2026–2031, and the CICT AI Ethics Policy.

export const program = {
  degree: 'Master in Information Technology',
  abbrev: 'MIT',
  specialization: 'Applied AI and Data Analytics for Fisheries and Agriculture',
  college: 'College of Information and Communication Technology',
  collegeAbbrev: 'CICT',
  university: 'Iloilo State University of Fisheries Science and Technology',
  universityAbbrev: 'ISUFST',
  location: 'Barotac Nuevo, Iloilo · Western Visayas · Philippines',
  badge: 'PQF Level 7 · 36 Units · Trimestral',
  tagline:
    'A master’s degree completed not by a thesis, but by a working technology artifact that solves a real problem — where computing meets the sea, the soil, and the communities of the Philippines.',
  chair: 'Jassiel I. Padios, DIT',
  dean: 'Noel P. Caliston, DIT',
}

export const heroStats = [
  { v: '36', l: 'Units' },
  { v: 'Level 7', l: 'PQF (Master’s)' },
  { v: '3', l: 'Terms + summer' },
]

export const stats = [
  { value: '36', label: 'Total units', sub: '12 core · 18 specialization · 6 capstone' },
  { value: '11', label: 'Taught courses', sub: 'MIT 701–710, then CAPS 1 & 2' },
  { value: '3', label: 'Capstone defenses', sub: 'Concept · pre-oral · final' },
  { value: '1', label: 'Journal paper', sub: 'Required for graduation' },
]

// The single most important thing a student must know.
export const requirements = [
  {
    n: '01',
    icon: 'doc',
    title: 'Pass the Comprehensive Examination',
    body: 'A written examination across your core and specialization coursework, taken at the close of the Summer term of Year 1 — before you may enrol in the capstone.',
    when: 'Summer · AY 2026–2027',
  },
  {
    n: '02',
    icon: 'build',
    title: 'Build & defend the Capstone',
    body: 'Complete and successfully defend CAPS 1 (proposal) and CAPS 2 (implementation). A working artifact, three defenses, and a Capstone Advisory Committee stand between you and this checkmark.',
    when: 'Trimesters 1–2 · AY 2027–2028',
  },
  {
    n: '03',
    icon: 'journal',
    title: 'Publish in a refereed journal',
    body: 'At least one paper from your work must be accepted for publication in an internationally refereed journal. Acceptance is a precondition for scheduling the final defense — plan for it from CAPS 1.',
    when: 'During CAPS 2 · submit by Week 5',
  },
]

export const highlights = [
  {
    icon: 'build',
    title: 'Build, don’t just describe',
    body: 'The deliverable is a working artifact — a system, model, framework, or tool — that is demonstrable, testable, and evaluated against real requirements, not a purely theoretical analysis.',
  },
  {
    icon: 'anchor',
    title: 'Solve a real problem',
    body: 'Every capstone addresses an authentic problem in fisheries, aquaculture, agriculture, or the blue economy — validated with actual stakeholders, preferably in Western Visayas.',
  },
  {
    icon: 'brain',
    title: 'Apply AI rigorously',
    body: 'Machine learning, data analytics, or IoT must be a core component — never a superficial add-on — with substantive command of the technology’s capabilities, limits, and ethics.',
  },
  {
    icon: 'flask',
    title: 'Design Science method',
    body: 'The capstone is governed by Design Science Research Methodology (DSRM): you build an artifact and evaluate it as a legitimate, publishable contribution to knowledge.',
  },
  {
    icon: 'scale',
    title: 'Responsible by design',
    body: 'Grounded in the CICT AI Ethics Policy and RA 10173, you build systems that are fair, transparent, private, and accountable to the communities they touch.',
  },
  {
    icon: 'globe',
    title: 'Internationally legible',
    body: 'Built to CHED CMO 15 s. 2019, the Philippine Qualifications Framework, ACM/IEEE IT2017, and the Philippine Standard Framework for AI — a qualification that reads clearly anywhere.',
  },
]

// Program outcomes (PO1–PO6) — pursuant to CHED CMO 15 s.2019 & PQF Level 7.
export const outcomes = [
  { n: 'PO1', title: 'Apply advanced knowledge', body: 'Analyze, design, and implement innovative IT solutions for complex, real-world problems.' },
  { n: 'PO2', title: 'Conduct research', body: 'Contribute to knowledge creation, technological advancement, or practical applications in IT.' },
  { n: 'PO3', title: 'Act ethically', body: 'Integrate ethical, professional, legal, and societal responsibilities into practice.' },
  { n: 'PO4', title: 'Communicate', body: 'Convey complex IT concepts and research clearly to technical and non-technical audiences.' },
  { n: 'PO5', title: 'Lead teams', body: 'Demonstrate initiative, accountability, and adaptability in managing and executing IT projects.' },
  { n: 'PO6', title: 'Learn for life', body: 'Stay abreast of emerging trends and technologies through continuous professional development.' },
]

// The study plan, term by term.
export const curriculum = [
  {
    term: 'First Trimester',
    ay: 'AY 2026–2027',
    units: 9,
    courses: [
      { code: 'MIT 701', title: 'Cloud Infrastructure and Virtualization', units: 3, kind: 'core' },
      { code: 'MIT 702', title: 'Data Management and Analytics', units: 3, kind: 'core' },
      { code: 'MIT 703', title: 'IT Infrastructure and Service Management', units: 3, kind: 'core' },
    ],
  },
  {
    term: 'Second Trimester',
    ay: 'AY 2026–2027',
    units: 9,
    courses: [
      { code: 'MIT 704', title: 'IT Project Management and Governance', units: 3, kind: 'core' },
      { code: 'MIT 705', title: 'Artificial Intelligence and Machine Learning', units: 3, kind: 'spec' },
      { code: 'MIT 706', title: 'Data Mining and Predictive Modeling', units: 3, kind: 'spec' },
    ],
  },
  {
    term: 'Third Trimester',
    ay: 'AY 2026–2027',
    units: 9,
    courses: [
      { code: 'MIT 707', title: 'AI Governance, Ethics, and Information Assurance', units: 3, kind: 'spec' },
      { code: 'MIT 708', title: 'Internet of Things and Embedded Systems', units: 3, kind: 'spec' },
      { code: 'MIT 709', title: 'Design Science Research in IT', units: 3, kind: 'spec' },
    ],
  },
  {
    term: 'Summer',
    ay: 'AY 2026–2027',
    units: 3,
    courses: [
      { code: 'MIT 710', title: 'Seminar in Applied AI and Emerging Technologies', units: 3, kind: 'spec' },
      { code: 'EXAM', title: 'Comprehensive Examination', units: 0, kind: 'milestone' },
    ],
  },
  {
    term: 'First Trimester',
    ay: 'AY 2027–2028',
    units: 3,
    courses: [
      { code: 'CAPS 1', title: 'Capstone 1 — Capstone Proposal', units: 3, kind: 'caps' },
    ],
  },
  {
    term: 'Second Trimester',
    ay: 'AY 2027–2028',
    units: 3,
    courses: [
      { code: 'CAPS 2', title: 'Capstone 2 — Implementation and Defense', units: 3, kind: 'caps' },
    ],
  },
]

// The capstone journey — two courses, three defenses, one artifact.
export const capstone = [
  {
    phase: 'CAPS 1 · weeks 1–2',
    kind: 'Design Science · Phase 1–3',
    gate: false,
    title: 'Problem, literature & architecture',
    body: 'Validate a real problem with actual stakeholders, review 15–25 sources, and design the artifact with C4 diagrams and justified technology decisions.',
  },
  {
    phase: 'CAPS 1 · week 3',
    kind: 'Defense · Formative',
    gate: true,
    title: 'Concept Defense',
    body: 'A quality gate on the idea itself — is the problem real and the approach sound? Written feedback, no pass/fail. Catches issues before you commit to writing.',
  },
  {
    phase: 'CAPS 1 · weeks 4–8',
    kind: 'Design Science · Phase 3',
    gate: false,
    title: 'Prototype & proposal document',
    body: 'Build a working prototype with a genuine AI or data-analytics component, and complete Chapters 1–3 of the proposal.',
  },
  {
    phase: 'CAPS 1 · week 9',
    kind: 'Defense · Summative',
    gate: true,
    title: 'Pre-oral Defense',
    body: 'Formal approval of the proposal. An average rating of 2.5 or better lets you proceed to CAPS 2.',
  },
  {
    phase: 'CAPS 2 · weeks 1–5',
    kind: 'Design Science · Phase 4–5',
    gate: false,
    title: 'Build, evaluate & submit',
    body: 'Complete the artifact, run at least two evaluation methods (technical + expert/user), and submit your paper to a refereed journal.',
  },
  {
    phase: 'CAPS 2 · week 9',
    kind: 'Defense · Summative',
    gate: true,
    title: 'Final Defense',
    body: 'A public defense with a live artifact demonstration. Journal acceptance must be secured first. Pass, and you have your degree.',
  },
]

// Scoping guidance — helps students pick a doable capstone.
export const scope = {
  headers: ['Too narrow', 'Just right', 'Too broad'],
  rows: [
    { c: 'Users', narrow: 'One person', right: 'One organization or community', broad: 'An entire province' },
    { c: 'Features', narrow: 'One screen', right: '3–8 core features', broad: 'Enterprise system' },
    { c: 'Data', narrow: '< 100 records', right: '500–10,000 records', broad: 'National database' },
    { c: 'AI component', narrow: 'Simple threshold', right: 'Trained model with evaluation', broad: 'Multiple ML pipelines' },
    { c: 'Timeline', narrow: 'Two weeks', right: 'Fills two trimesters', broad: 'Two+ years' },
  ],
}

// The six research frontiers (CICT Research Agenda 2026–2031).
export const frontiers = [
  { n: '01', icon: 'anchor', title: 'AI for Fisheries Resource Management', body: 'Computer vision and geospatial analytics for stock assessment, species ID, catch reporting, and habitat protection.' },
  { n: '02', icon: 'wave', title: 'IoT & Sensor Systems for Aquaculture', body: 'Embedded sensing that monitors water quality, automates feeding, and issues early warnings for tilapia, seaweed, and mariculture.' },
  { n: '03', icon: 'sprout', title: 'Data Analytics for Agricultural Value Chains', body: 'Predictive modeling across farm-to-market — disease detection, yield forecasting, price intelligence, and land-use planning.' },
  { n: '04', icon: 'globe', title: 'Adaptive & Inclusive Digital Systems', body: 'Offline-first, low-bandwidth, and accessible technologies that reach rural and underserved communities.' },
  { n: '05', icon: 'scale', title: 'AI Governance, Ethics & Policy', body: 'Frameworks, audits, and safeguards that keep AI fair, transparent, and accountable across the sectors ISUFST serves.' },
  { n: '06', icon: 'compass', title: 'Maritime Digital Solutions', body: 'Blue-economy systems — maritime transport, coastal zone management, marine protected areas, and coastal-tourism informatics.' },
]

export const admission = [
  'Bachelor’s degree in IT, Computer Science, or a related computing field from a recognized institution',
  'Certified true copy of Transcript of Records (TOR)',
  'Completed School of Graduate Studies application form',
  'Applicants from non-computing fields may be admitted with bridging subjects, subject to committee evaluation',
  'Working fluency in Python, statistics, SQL, Git, and reading research papers is strongly recommended',
  'Passing the School of Graduate Studies admission interview / assessment',
]

export const careers = [
  'AI / Machine-Learning Engineer',
  'Data Scientist / Analyst',
  'Systems & Solutions Architect',
  'IT Governance & Project Lead',
  'Public-Sector & Development-Agency Technologist',
  'Fisheries / Agriculture Data Specialist',
  'IT Educator & Researcher',
  'Founder / Technical Lead',
  'Doctor in Information Technology (DIT) candidate',
]

export const faqs = [
  {
    q: 'Is this a thesis program?',
    a: 'No. The MIT is completed by a two-part capstone (CAPS 1 & CAPS 2) governed by Design Science Research Methodology. Instead of a conventional thesis, you build a working technology artifact — a system, model, framework, or tool — that solves a validated real-world problem and is evaluated against genuine requirements.',
  },
  {
    q: 'How long does it take to finish?',
    a: 'Coursework spans the three trimesters and summer of the first academic year; the comprehensive examination is taken at the close of the summer term; and the two-part capstone runs across the first and second trimesters of the second academic year. Maximum residency is five (5) years from first enrolment.',
  },
  {
    q: 'Do I really have to publish?',
    a: 'Yes. At least one paper drawn from your work must be accepted for publication in an internationally refereed journal — this is required by CHED CMO 15 s. 2019 and is a precondition to scheduling your final defense and to graduation. Plan for it from CAPS 1.',
  },
  {
    q: 'What is the comprehensive examination?',
    a: 'A written examination across your core and specialization coursework, taken at the close of the Summer term of Year 1. Passing it is required before you may enrol in the capstone.',
  },
  {
    q: 'What does the specialization mean for my capstone?',
    a: 'Your capstone must address an authentic problem in fisheries, aquaculture, agriculture, the blue economy, or a related domain within the Philippine context — preferably in Western Visayas — validated with actual stakeholders, with AI, analytics, or IoT as a core component.',
  },
  {
    q: 'Do I need a computing degree to apply?',
    a: 'A bachelor’s degree in IT, Computer Science, or a closely related field is preferred. Applicants from other fields may be admitted with bridging subjects, subject to evaluation by the School of Graduate Studies.',
  },
]

export const contact = {
  office: 'School of Graduate Studies · CICT',
  address: 'ISUFST, Main-Poblacion Campus, Barotac Nuevo, Iloilo, Philippines',
  email: 'sgs@isufst.edu.ph',
  phone: '(+63) 917-624-6100',
  hours: 'Mon–Fri, 8:00 AM – 5:00 PM',
}

// ── Faculty ──────────────────────────────────────────────────────────
// PLACEHOLDER DATA — replace with the actual roster before publishing.
// `photo` is optional: add an image path (e.g. '/faculty/name.jpg') once
// photos are available; the Avatar component falls back to initials.
export type FacultyMember = {
  name: string
  title: string
  degree: string
  specialization: string
  email?: string
  photo?: string
}

export const leadership: FacultyMember[] = [
  {
    name: 'Dr. Noel P. Caliston',
    title: 'Dean',
    degree: 'DIT — Doctor in Information Technology',
    specialization: 'AI and Machine Learning',
    photo: '/faculty/caliston-noel.png',
  },
  {
    name: 'Dr. Jassiel I. Padios',
    title: 'Program Chair',
    degree: 'DIT — Doctor in Information Technology',
    specialization: 'AI, Data Management and Analytics',
    photo: '/faculty/padios-jassiel.png',
  },
]

export const facultyMembers: FacultyMember[] = [
  {
    name: 'Dr. John Rey A. Alipe',
    title: 'Instructor III',
    degree: 'DIT — Doctor in Information Technology',
    specialization: 'Cloud Infrastructure, IoT',
    photo: '/faculty/alipe-johnrey.png',
  },
  {
    name: 'Dr. Angie C. Almarza',
    title: 'Assistant Professor II',
    degree: 'DIT — Doctor in Information Technology',
    specialization: 'Design Science Research, IT Project Management',
    photo: '/faculty/almarza-angie.png',
  },
  {
    name: 'Dr. Renante A. Diamante',
    title: 'Associate Professor IV',
    degree: 'DIT — Doctor in Information Technology',
    specialization: 'Data Mining and Predictive Modelling',
    photo: '/faculty/diamante-renante.png',
  },
  {
    name: 'Ram Eujohn Diamante',
    title: 'Instructor III',
    degree: 'MIT — Master in Information Technology · DIT (ongoing)',
    specialization: 'Machine Learning',
  },
  {
    name: 'Dr. Wenda D. Panes',
    title: 'Professor V',
    degree: 'DIT — Doctor in Information Technology (ongoing)',
    specialization: 'AI Governance and IT Infrastructure',
  },
]

// ── DOST-SEI STRAND Scholarship ─────────────────────────────────────
// Science and Technology Regional Alliance of Universities for National
// Development (STRAND) — DOST Science Education Institute graduate
// scholarship program. Content reflects the publicly published STRAND
// program guidelines; always confirm current cycle details with the
// DOST-SEI STRAND focal office before applying.
export const scholarship = {
  name: 'DOST-SEI STRAND Graduate Scholarship',
  abbrev: 'STRAND',
  agency: 'Department of Science and Technology — Science Education Institute (DOST-SEI)',
  tagline:
    'Full financial support for Master\u2019s studies in Science, Technology, Engineering, and Mathematics (STEM) priority fields — including Information Technology.',
  description:
    'The Science and Technology Regional Alliance of Universities for National Development (STRAND) strengthens the faculty profile of regional universities by granting Master\u2019s-level graduate scholarships in identified STEM niche fields, while training high-level human resources for research and development in the regions. At ISUFST, STRAND supports the Master in Information Technology (MIT) program.',
}

export const scholarshipEligibility = [
  'Filipino citizen',
  'Not more than 50 years old at the time of application',
  'In good health condition and of good moral character',
  'Must pass the admission requirements for the Master\u2019s program at a STRAND member university',
  'Must pass the STRAND interview and screening procedure',
  'Must be pursuing a Master\u2019s degree in a STEM priority field, such as the Master in Information Technology',
]

export const scholarshipRequirements = [
  'Accomplished STRAND Information Sheet (available from the School of Graduate Studies office)',
  'Photocopy of Birth Certificate',
  'Certified True Copy of the Official Transcript of Records',
  'Endorsement from two (2) former professors in college',
  'Letter of Admission with regular status from the Program Head, including the evaluation sheet',
  'Approved Program of Study',
  'Valid NBI Clearance',
  'Medical Certificate of good health, fit to study, from a licensed physician (with PRC license number)',
]

export const scholarshipIfEmployed = [
  'Recommendation from employer or head of agency',
  'Form 2A — Certificate of Employment and Permit to Study',
  'Form 2B — Certificate of DepEd Employment and Permit to Study (DepEd employees only)',
  'Form A — Career Plans',
  'Form B — Research Plans',
  'Form 3 — Certification of Health Status',
]

// STRAND at ISUFST is offered for the Master's level only.
export const scholarshipBenefits = {
  level: 'Master\u2019s',
  duration: 'Full support for the duration of the MIT program',
  amounts: [
    { label: 'Monthly stipend', amount: '₱30,000' },
    { label: 'Learning materials allowance', amount: '₱20,000' },
    { label: 'Thesis outright allowance', amount: '₱60,000' },
    { label: 'Research grant', amount: '₱114,000' },
    { label: 'Dissemination grant', amount: '₱75,000' },
    { label: 'Mentor\u2019s fee', amount: '₱36,000' },
  ],
  notes: [
    'Actual tuition and other school fees',
    'One economy roundtrip transportation allowance per year (if studying outside home province)',
    'Premium group accident and health insurance',
  ],
}

export const scholarshipSteps = [
  {
    step: '01',
    title: 'Secure admission',
    body: 'Apply and gain admission to the MIT graduate program at a STRAND member university, such as ISUFST, before or alongside your scholarship application.',
  },
  {
    step: '02',
    title: 'Submit application & documents',
    body: 'Prepare the complete STRAND documentary requirements and submit them to the university\u2019s DOST-SEI STRAND focal office.',
  },
  {
    step: '03',
    title: 'University evaluation',
    body: 'The university evaluates your accomplished application form and requirements for completeness and eligibility.',
  },
  {
    step: '04',
    title: 'SEI validation & selection',
    body: 'DOST-SEI validates submissions and selects qualifiers based on merit and available slots.',
  },
  {
    step: '05',
    title: 'DOST Secretary approval',
    body: 'The final list of awardees is approved by the DOST Secretary. This list is final and unappealable.',
  },
  {
    step: '06',
    title: 'Notification & scholarship agreement',
    body: 'Approved awardees are notified and execute a Scholarship Agreement with DOST before enrollment begins.',
  },
]

export const scholarshipReminders = [
  'The award is for full-time graduate study only, to ensure on-time completion.',
  'Scholars must not be employed or practicing their profession while on scholarship, unless on an approved official leave of absence.',
  'Academic performance is evaluated every term to determine continued scholarship status.',
  'A return service obligation applies after graduation — typically one year of service in the Philippines for every year of scholarship received.',
  'Refund of the scholarship grant, with interest, may be required for non-completion of the program or failure to render the service obligation.',
]

// Only verified information is published here.
// Not published yet (waiting for certificate titles, dates or project details):
//   AI Fluency, CompTIA AI, Anthropic AI, AWS AI, SheCodes workshop,
//   Women Techsters Fellowship, CareQueue, Project Astra, DevDen.

export const PROJECTS = [
  {
    id: 'anchor-agent',
    title: 'Anchor Agent',
    category: 'AI application · Hackathon project',
    event: 'AMD AI DevMaster Hackathon',
    summary: 'An AI-powered emergency-response application developed as a hackathon project.',
    role: 'Development work covered the React and Vite application, an Express back end and AI integration with Fireworks AI and MiniMax M3.',
    tech: ['React', 'Vite', 'Express', 'Fireworks AI', 'MiniMax M3'],
    status: 'Hackathon prototype',
    links: [{ label: 'Live demo', href: 'https://anchor-agent-amd-hackathon.vercel.app/' }],
    featured: true,
  },
  {
    id: 'pangolin-loop',
    title: 'Pangolin Loop',
    category: 'SaaS platform · Collaborative project',
    event: null,
    summary: 'An accountability platform that tracks meeting commitments through to verified completion.',
    role: 'Frontend engineer in a collaborative team, working through feature branches, pull requests and code review.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    status: 'In development',
    links: [],
    featured: false,
  },
]

export const QUALIFICATIONS = [
  {
    title: 'Software Engineering Mentorship Programme',
    issuer: 'Tech4Dev',
    category: 'Software engineering',
    status: 'Expected',
    detail: 'Expected graduation: 22 October 2026.',
  },
  {
    title: 'TW4Tech Programme',
    issuer: 'TW4Tech',
    category: 'Professional programme',
    status: 'Completed',
    detail: 'Completion confirmed on 6 October 2026, including the final examination and final deliverable.',
  },
  {
    title: 'Future Digital Skills',
    issuer: 'FNB App Academy · University of Johannesburg LMS',
    category: 'Digital skills',
    status: 'Assessment result',
    detail: 'Scored 100% on the Foundations of Digital Literacy assessment on 18 August 2026.',
  },
]

export const SKILLS = [
  { group: 'Frontend and web', items: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'React', 'Vite', 'Next.js', 'Tailwind CSS', 'shadcn/ui', 'WordPress'] },
  { group: 'Backend and APIs', items: ['Node.js', 'Express', 'tRPC', 'REST APIs', 'Drizzle ORM'] },
  { group: 'Data', items: ['PostgreSQL', 'Supabase', 'Firebase'] },
  { group: 'AI', items: ['Generative AI', 'AI API integration', 'AI prototyping', 'Agents and workflows'] },
  { group: 'Tools and collaboration', items: ['Git', 'GitHub', 'Pull requests and code review', 'Deployment'] },
]

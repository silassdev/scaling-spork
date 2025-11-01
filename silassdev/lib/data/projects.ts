export type Project = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  live?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: 'mentorlink',
    title: 'MentorLink',
    summary: 'Platform connecting learners with tech mentors; bookings, reviews and profiles.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'MySQL', 'Tailwind'],
    repo: 'https://github.com/you/mentorlink',
    live: 'https://mentorlink.example',
  },
  {
    id: 'devprompt',
    title: 'DevPrompt',
    summary: 'AI-assisted prompt generator for developers — integrate with LLMs for boilerplate generation.',
    tags: ['Next.js', 'TypeScript', 'AI', 'HuggingFace'],
    repo: 'https://github.com/you/devprompt',
  },
  {
    id: 'shoplite',
    title: 'ShopLite',
    summary: 'Lightweight ecommerce store with SSR product pages and Stripe checkout.',
    tags: ['Next.js', 'Stripe', 'MySQL', 'Tailwind'],
    live: 'https://shoplite.example',
  },
];

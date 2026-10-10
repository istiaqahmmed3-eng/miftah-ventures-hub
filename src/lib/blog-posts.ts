import architecture from '@/assets/founder-architecture.jpg';
import helloLogo from '@/assets/hello-02-logo.png.asset.json';
import supportLogo from '@/assets/hello-02-support-logo.png.asset.json';

export const blogPosts = [
  {
    slug: 'hello-02-growing-community',
    title: 'A growing community. The same mission.',
    category: 'Founder updates',
    date: 'June 23, 2026',
    readTime: '2 min read',
    excerpt: '15,743 downloads, 11,576 reported active users, and a shared commitment to accessible mental healthcare.',
    image: helloLogo.url,
    imageAlt: 'Hello-02 Mental Health App logo',
    imageClass: 'blog-cover-brand',
    source: 'https://www.linkedin.com/posts/hello-02-mental-health-app_activity-7475189971155382273-CTns',
    sourceLabel: 'Hello-02’s June 2026 LinkedIn update',
    paragraphs: [
      'Hello-02 began with a clear goal: make mental healthcare accessible to everyone. In its June 2026 public update, the platform reported 15,743 downloads and 11,576 active users.',
      'The update credited users, psychologists, volunteers, partners, and supporters for the milestone. It also described 1.5 years of prototyping, testing, and strengthening security infrastructure ahead of a planned iOS release.',
      'These figures reflect the June 2026 update, not a live count. The broader mission remains accessible, affordable, and stigma-free mental health support.',
    ],
  },
  {
    slug: 'mental-health-beyond-borders',
    title: 'Mental health doesn’t stop at borders.',
    category: 'Partnerships',
    date: 'September 12, 2026',
    readTime: '2 min read',
    excerpt: 'Opening conversations with mental health organizations and professionals in Nepal.',
    image: architecture,
    imageAlt: 'Contemporary architecture beneath an open sky',
    imageClass: 'blog-cover-photo',
    source: 'https://www.linkedin.com/posts/miftah-rahman-hello02_hello02-mentalhealth-nepal-activity-7504414104414134272-q4Tj',
    sourceLabel: 'Miftah’s September 2026 LinkedIn post',
    paragraphs: [
      'In September 2026, Hello-02 invited mental health organizations and professionals in Nepal to explore collaboration. The message was simple: mental health challenges do not stop at borders, and neither should the solutions.',
      'The invitation included mental health service providers, counseling centers, psychologists, NGOs, volunteer organizations, and groups working with young people and students.',
      'Potential areas of collaboration included awareness campaigns, knowledge exchange, professional networks, referrals, research, and community programs. This was an invitation to start conversations, not an announcement of completed partnerships.',
    ],
  },
  {
    slug: 'two-apps-one-purpose',
    title: 'Two apps. One shared purpose.',
    category: 'Product spotlight',
    date: 'Product overview',
    readTime: '1 min read',
    excerpt: 'Hello-02 for mental health support. Hello-02 Support App exclusively for mental health professionals.',
    image: supportLogo.url,
    imageAlt: 'Hello-02 Support App professionals logo',
    imageClass: 'blog-cover-support',
    source: undefined,
    sourceLabel: undefined,
    paragraphs: [
      'Hello-02 Mental Health App and Hello-02 Support App serve distinct audiences within the same mental health ecosystem.',
      'Hello-02 Mental Health App is focused on making mental healthcare more accessible. Its identity is the friendly Hello-02 robot logo.',
      'Hello-02 Support App is exclusively for psychologists and mental health professionals. Its Hello-02 Professionals logo represents that separate professional audience.',
    ],
  },
];
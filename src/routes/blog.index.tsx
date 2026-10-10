import { createFileRoute } from '@tanstack/react-router';
import { BlogCards } from '@/components/blog-cards';
import { ContactBand, pageMeta } from '@/components/founder-site';

export const Route = createFileRoute('/blog/')({ head: () => pageMeta('Blog — Miftah Rahman | Building with Purpose', 'Updates from Hello-02, mental health partnerships, and a closer look at the products Miftah Rahman is building.'), component: Blog });

function Blog() {
  return <main className="page-enter"><div className="site-container"><section className="page-heading"><p className="eyebrow"><span className="status-dot" />The founder’s journal</p><h1>Ideas. Progress.<br />Perspective<span className="text-primary">.</span></h1><p className="body-copy">Updates from the journey — building Hello-02, opening conversations, and making mental healthcare more accessible.</p></section><section className="section"><BlogCards /></section></div><ContactBand /></main>;
}
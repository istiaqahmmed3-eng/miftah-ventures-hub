import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowUpRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BlogCards } from '@/components/blog-cards';
import { ContactBand, pageMeta } from '@/components/founder-site';
import { blogPosts } from '@/lib/blog-posts';

export const Route = createFileRoute('/blog/')({ head: () => pageMeta('Blog — Miftah Rahman | Building with Purpose', 'Updates from Hello-02, mental health partnerships, and a closer look at the products Miftah Rahman is building.'), component: Blog });

function Blog() {
  const [category, setCategory] = useState('All stories');
  const [search, setSearch] = useState('');
  const featured = blogPosts.find(post => post.slug === 'mental-health-beyond-borders');
  const categories = ['All stories', ...new Set(blogPosts.map(post => post.category))];
  const posts = blogPosts.filter(post => (category === 'All stories' || post.category === category) && `${post.title} ${post.excerpt} ${post.category}`.toLowerCase().includes(search.toLowerCase()));
  return <main className="page-enter founder-journal">
    <div className="site-container">
      <section className="journal-heading"><div><p className="eyebrow text-primary">Miftah Rahman / Journal</p><h1>The founder’s blog<span className="text-primary">.</span></h1></div><p className="body-copy">Building with purpose. Updates on Hello-02, the people behind the mission, and conversations beyond borders.</p></section>
      {featured && <Link to="/blog/$slug" params={{ slug: featured.slug }} className="journal-feature group"><img src={featured.image} alt={featured.imageAlt} width={1920} height={1024} fetchPriority="high" /><div className="journal-feature-content"><p className="eyebrow">Featured / {featured.category}</p><h2>{featured.title}</h2><p>{featured.excerpt}</p><div className="journal-feature-bottom"><span>{featured.date} · {featured.readTime}</span><span className="journal-feature-arrow"><ArrowUpRight size={25} /></span></div></div></Link>}
      <section className="journal-stories" aria-label="Blog stories"><div className="journal-stories-heading"><h2>From the journey<span className="text-primary">.</span></h2><span className="small-label">{posts.length} {posts.length === 1 ? 'story' : 'stories'}</span></div><div className="journal-toolbar"><div className="journal-tabs" aria-label="Story topics">{categories.map(topic => <Button key={topic} variant="ghost" className="journal-tab" aria-pressed={category === topic} onClick={() => setCategory(topic)}>{topic}</Button>)}</div><label className="journal-search"><Search size={17} /><input type="search" aria-label="Search stories" placeholder="Search stories" value={search} onChange={event => setSearch(event.target.value)} /></label></div>{posts.length ? <BlogCards posts={posts} /> : <div className="journal-empty"><h3>No stories found.</h3><p className="body-copy">Try a different topic or search.</p><Button variant="editorial" onClick={() => { setSearch(''); setCategory('All stories'); }}>Show all stories</Button></div>}</section>
      <section className="journal-signoff"><span className="journal-monogram">MR<span className="text-primary">.</span></span><div><p className="eyebrow text-primary">Behind the journal</p><h2>Miftah Rahman</h2><p className="body-copy">Founder of Hello-02. Focused on accessible mental healthcare through technology and community.</p></div><Button asChild variant="editorial"><Link to="/about">Meet the founder <ArrowUpRight /></Link></Button></section>
    </div><ContactBand />
  </main>;
}
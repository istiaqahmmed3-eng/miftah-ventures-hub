import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight, Heart, Users, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactBand, VentureRows, pageMeta, socialLinks } from '@/components/founder-site';
import portrait from '@/assets/miftah-rahman-pencil.png';
import { BlogCards } from '@/components/blog-cards';

export const Route = createFileRoute('/')({
  head: () => pageMeta('Miftah Rahman — Founder, Hello-02', 'Miftah Rahman is the founder of Hello-02, working to make mental healthcare accessible, affordable, and stigma-free.'),
  component: Index,
});

function Index() {
  return <main className="page-enter">
    <section className="site-container founder-intro">
      <div className="founder-intro-copy"><p className="eyebrow">Miftah Rahman <span className="text-primary">/ Founder</span></p><h1><span>Mental health.</span><br /><span>Youth-led impact.</span></h1><p className="hero-description">Building Hello-02 to bring mental healthcare within reach, and leading Team BBS, a youth-led movement for social impact in Bangladesh.</p><div className="hero-actions"><Button asChild variant="founder"><Link to="/ventures">View work <ArrowUpRight /></Link></Button><Button asChild variant="editorial"><Link to="/contact">Get in touch <ArrowUpRight /></Link></Button></div></div>
      <div className="intro-portrait"><img src={portrait} alt="Pencil sketch of Miftah Rahman, founder of Hello-02" width={768} height={954} fetchPriority="high" /></div>
    </section>
    <section className="site-container founder-roles" aria-label="Areas of focus"><div><span className="role-icon"><Heart size={19} /></span><div><h2>Mental health founder</h2><p>Building Hello-02 for accessible, affordable, stigma-free mental healthcare.</p></div></div><div><span className="role-icon"><Users size={19} /></span><div><h2>Youth-led impact</h2><p>Community and mental health advocacy through Team BBS in Bangladesh.</p></div></div><div><span className="role-icon"><Layers size={19} /></span><div><h2>Technology with purpose</h2><p>Connecting people, professionals, and care through a shared ecosystem.</p></div></div></section>
    <section className="journal-band"><div className="site-container section"><div className="section-heading"><div><p className="eyebrow text-primary">From the founder’s journal</p><h2>Building with purpose<span className="text-primary">.</span></h2></div><Button asChild variant="founder"><Link to="/blog">Explore the blog <ArrowUpRight /></Link></Button></div><BlogCards /></div></section>
    <section className="site-container section section-intro"><div><p className="eyebrow text-muted-foreground">01 / The motivation</p><h2>A mission worth<br />building for.</h2></div><div><p className="body-copy">Mental health support shouldn’t be a privilege. That belief is at the heart of Hello-02 — and the work I do to bring technology, community, and care closer together.</p><p className="body-copy mt-4">I’m focused on building with purpose: addressing a real human need and creating something that matters beyond the screen.</p><Link to="/about" className="text-link">More about me <ArrowUpRight /></Link></div></section>
    <section className="site-container pb-20"><div className="flex justify-between items-end mb-8"><p className="eyebrow text-muted-foreground">02 / What I’m building</p><Link to="/ventures" className="text-link mt-0">View ventures <ArrowUpRight /></Link></div><VentureRows /></section>
    <div className="site-container metrics"><div><p className="eyebrow">Purpose, with progress.</p><a href={socialLinks.growth} target="_blank" rel="noreferrer" className="text-[10px] text-muted-foreground mt-2 inline-block underline underline-offset-4">Hello-02 · June 2026 update ↗</a></div><div className="metric"><strong>20,000+</strong><span>App downloads</span></div><div className="metric"><strong>13,576+</strong><span>Reported active users</span></div><div className="metric"><strong>One mission.</strong><span>Mental healthcare for everyone</span></div></div>
    <ContactBand />
  </main>;
}

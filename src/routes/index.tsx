import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactBand, VentureRows, pageMeta, socialLinks } from '@/components/founder-site';
import architecture from '@/assets/founder-architecture.jpg';
import { BlogCards } from '@/components/blog-cards';
import helloLogo from '@/assets/hello-02-logo.png.asset.json';
import supportLogo from '@/assets/hello-02-support-logo.png.asset.json';

export const Route = createFileRoute('/')({
  head: () => pageMeta('Miftah Rahman — Founder, Hello-02', 'Miftah Rahman is the founder of Hello-02, working to make mental healthcare accessible, affordable, and stigma-free.'),
  component: Index,
});

function Index() {
  return <main className="page-enter">
    <section className="hero">
      <img className="hero-image" src={architecture} alt="Modern architecture rising toward an open sky" width={1920} height={1024} fetchPriority="high" />
      <div className="site-container hero-inner">
        <p className="eyebrow"><span className="status-dot" />Founder. Builder. Mental health advocate.</p>
        <h1>Miftah<br />Rahman<span className="text-primary">.</span></h1>
        <p className="hero-description">Building a future where mental healthcare is within everyone’s reach.<br />Founder of <span className="text-foreground font-semibold">Hello-02.</span> Driven by purpose.</p>
        <div className="hero-actions"><Button asChild variant="founder"><Link to="/ventures">Explore my work <ArrowUpRight /></Link></Button><Button asChild variant="editorial"><Link to="/contact">Let’s talk <ArrowUpRight /></Link></Button></div>
        <p className="hero-footnote"><MapPin size={13} strokeWidth={1.5} />Dhaka, Bangladesh <span className="mx-2">/</span> Building beyond borders</p>
        <div className="hero-products"><Link to="/ventures"><img src={helloLogo.url} alt="" width={500} height={500} /><span>Hello-02<small>Mental Health App</small></span></Link><Link to="/ventures"><img src={supportLogo.url} alt="" width={480} height={480} /><span>Hello-02 Support<small>For professionals</small></span></Link></div>
      </div>
    </section>
    <div className="site-container metrics"><div><p className="eyebrow">Purpose, with progress.</p><a href={socialLinks.growth} target="_blank" rel="noreferrer" className="text-[10px] text-muted-foreground mt-2 inline-block underline underline-offset-4">Hello-02 · June 2026 update ↗</a></div><div className="metric"><strong>15,743<span className="text-primary inline">+</span></strong><span>App downloads</span></div><div className="metric"><strong>11,576</strong><span>Reported active users</span></div><div className="metric"><strong>One mission.</strong><span>Mental healthcare for everyone</span></div></div>
    <section className="journal-band"><div className="site-container section"><div className="section-heading"><div><p className="eyebrow text-primary">From the founder’s journal</p><h2>Building with purpose<span className="text-primary">.</span></h2></div><Button asChild variant="founder"><Link to="/blog">Explore the blog <ArrowUpRight /></Link></Button></div><BlogCards /></div></section>
    <section className="site-container section section-intro"><div><p className="eyebrow text-muted-foreground">01 / The motivation</p><h2>A mission worth<br />building for.</h2></div><div><p className="body-copy">Mental health support shouldn’t be a privilege. That belief is at the heart of Hello-02 — and the work I do to bring technology, community, and care closer together.</p><p className="body-copy mt-4">I’m focused on building with purpose: addressing a real human need and creating something that matters beyond the screen.</p><Link to="/about" className="text-link">More about me <ArrowUpRight /></Link></div></section>
    <section className="site-container pb-20"><div className="flex justify-between items-end mb-8"><p className="eyebrow text-muted-foreground">02 / What I’m building</p><Link to="/ventures" className="text-link mt-0">View ventures <ArrowUpRight /></Link></div><VentureRows /></section>
    <ContactBand />
  </main>;
}

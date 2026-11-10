import { createFileRoute } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pageMeta, socialLinks } from '@/components/founder-site';
import architecture from '@/assets/founder-architecture.jpg';
import portrait from '@/assets/miftah-rahman-pencil.png';
import helloLogo from '@/assets/hello-02-logo.png.asset.json';
import teamBbsLogo from '@/assets/team-bbs-logo.png.asset.json';

export const Route = createFileRoute('/about')({
  head: () => pageMeta(
    'About Miftah Rahman — Founder of Hello-02',
    'Meet Miftah Rahman, a Bangladeshi entrepreneur building Hello-02 and advancing accessible mental healthcare through technology and community.',
  ),
  component: About,
});

function About() {
  return (
    <main className="page-enter about-page">
      <section className="site-container about-hero">
        <div className="about-hero-copy">
          <p className="eyebrow text-muted-foreground">The person behind the purpose</p>
          <h1>Building for people.<br />Scaling meaningful impact<span className="text-primary">.</span></h1>
          <p className="about-lead">I’m Miftah Rahman — a Bangladeshi entrepreneur, founder of Hello-02, and mental health advocate working at the intersection of technology, mental healthcare, and community development.</p>
          <p className="about-location"><span className="status-dot" /> Dhaka, Bangladesh</p>
        </div>
        <div className="about-portrait-wrap">
          <img className="founder-portrait about-portrait" src={portrait} alt="Pencil sketch of Miftah Rahman" width={600} height={760} fetchPriority="high" />
        </div>
      </section>

      <section className="site-container about-story section">
        <div className="about-story-image">
          <img src={architecture} alt="Contemporary architecture open to the sky" width={1920} height={1024} loading="lazy" />
          <p className="small-label">Dhaka, Bangladesh · A local starting point</p>
        </div>
        <div className="about-story-copy">
          <p className="eyebrow text-muted-foreground">01 / Beyond an idea</p>
          <h2>Turning human challenges into meaningful solutions.</h2>
          <p className="body-copy">My work begins with a practical question: how can more people find trustworthy mental health support when they need it?</p>
          <p className="body-copy">Through Hello-02, I’m building a youth-focused mental health platform that brings self-care resources and professional psychological support closer to everyday life. Through Team BBS, I’m part of a community-led effort to grow mental health awareness and education across Bangladesh.</p>
          <p className="body-copy">The ambition is to make approaches shaped by local needs useful well beyond one community or one border.</p>
        </div>
      </section>

      <section className="about-building">
        <div className="site-container">
          <div className="about-section-heading">
            <p className="eyebrow text-muted-foreground">02 / What I’m building</p>
            <h2>Purpose, put into practice.</h2>
          </div>

          <article className="about-venture">
            <div className="about-venture-brand">
              <img src={helloLogo.url} alt="Hello-02 logo" width={500} height={500} loading="lazy" />
              <div><p className="small-label">Digital mental healthcare</p><h3>Hello-02</h3></div>
            </div>
            <div className="about-venture-copy">
              <p className="body-copy">A youth-focused mental health platform combining technology, self-care resources, and professional psychological support.</p>
              <a className="text-link" href="https://hello02.app" target="_blank" rel="noreferrer">Explore Hello-02 <ArrowUpRight /></a>
            </div>
            <div className="about-impact" aria-label="Hello-02 reported impact">
              <div><strong>17,000+</strong><span>Users</span></div>
              <div><strong>120+</strong><span>Psychologists</span></div>
              <div><strong>→ Nepal</strong><span>Expanding regionally</span></div>
            </div>
            <p className="about-reporting-note">Figures supplied for this page; reporting period not specified.</p>
          </article>

          <article className="about-venture">
            <div className="about-venture-brand">
              <img src={teamBbsLogo.url} alt="Team BBS logo" width={576} height={579} loading="lazy" />
              <div><p className="small-label">Community-led mental health</p><h3>Team BBS</h3></div>
            </div>
            <div className="about-venture-copy">
              <p className="body-copy">A community-driven initiative focused on mental health awareness and education, creating pathways for people to learn and seek support.</p>
              <a className="text-link" href="https://teambbs.org" target="_blank" rel="noreferrer">Explore Team BBS <ArrowUpRight /></a>
            </div>
            <div className="about-impact" aria-label="Team BBS reported impact">
              <div><strong>325,000+</strong><span>People reached</span></div>
              <div><strong>63,000+</strong><span>Assessments conducted</span></div>
              <div><strong>64</strong><span>Districts covered</span></div>
            </div>
            <p className="about-reporting-note">Figures supplied for this page; reporting period not specified.</p>
          </article>
        </div>
      </section>

      <section className="site-container about-perspective section">
        <div className="about-section-heading">
          <p className="eyebrow text-muted-foreground">03 / My perspective</p>
          <h2>Principles for the long work.</h2>
        </div>
        <div className="about-principles">
          <article><span>01</span><div><h3>People before technology.</h3><p className="body-copy">Start with the real barriers people face; use technology only where it makes support more reachable.</p></div></article>
          <article><span>02</span><div><h3>Impact with sustainability.</h3><p className="body-copy">Build for lasting access by strengthening the people, partnerships, and operating models behind the work.</p></div></article>
          <article><span>03</span><div><h3>Think globally, start locally.</h3><p className="body-copy">Stay grounded in local context while building ideas that can travel and serve communities across borders.</p></div></article>
        </div>
      </section>

      <section className="about-next">
        <div className="site-container about-next-inner">
          <div>
            <p className="eyebrow">04 / What’s next</p>
            <h2>The ambition is bigger than the beginning<span className="text-primary">.</span></h2>
          </div>
          <div>
            <p className="body-copy">The focus is on expanding Hello-02 across South Asia, strengthening the technology and operations behind it, and building sustainable ways to make mental healthcare more accessible.</p>
            <p className="small-label mt-6">From Dhaka, with a regional outlook</p>
          </div>
        </div>
      </section>

      <section className="about-contact">
        <div className="site-container about-contact-inner">
          <p className="eyebrow text-muted-foreground">Good things start with a conversation</p>
          <h2>Let’s build something meaningful<span className="text-primary">.</span></h2>
          <p className="body-copy">For fellow founders, thoughtful investors, researchers, collaborators, and people who believe in building a better future.</p>
          <div className="about-contact-actions">
            <Button asChild variant="founder"><a href="mailto:miftah@hello02.app">Get in touch <ArrowUpRight /></a></Button>
            <a className="text-link" href={socialLinks.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight /></a>
          </div>
        </div>
      </section>
    </main>
  );
}
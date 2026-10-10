import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Menu, X, MoveUpRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import helloLogo from '@/assets/hello-02-logo.png.asset.json';
import supportLogo from '@/assets/hello-02-support-logo.png.asset.json';

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/miftah-rahman-hello02/',
  facebook: 'https://www.facebook.com/themiftahrahman',
  growth: 'https://www.linkedin.com/posts/hello-02-mental-health-app_activity-7475189971155382273-CTns',
};

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="bg-background">
    <div className="site-container site-header">
      <Link to="/" className="brand" onClick={() => setOpen(false)}><img src="/favicon.svg" alt="" /><span>Miftah Rahman<span className="text-primary">.</span></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        <Link to="/" className="nav-link" activeOptions={{ exact: true }}>Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/ventures" className="nav-link">Ventures</Link>
        <Link to="/blog" className="nav-link">Blog</Link>
        <Button asChild variant="editorial"><Link to="/contact">Let’s connect <ArrowUpRight /></Link></Button>
      </nav>
      <Button variant="ghost" size="icon" className="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav className="site-container mobile-nav" aria-label="Mobile navigation">
      <Link to="/" onClick={() => setOpen(false)}>Home</Link><Link to="/about" onClick={() => setOpen(false)}>About</Link><Link to="/ventures" onClick={() => setOpen(false)}>Ventures</Link><Link to="/blog" onClick={() => setOpen(false)}>Blog</Link><Link to="/contact" onClick={() => setOpen(false)}>Let’s connect</Link>
    </nav>}
  </header>;
}

export function SiteFooter() {
  return <footer className="site-container site-footer"><span>© {new Date().getFullYear()} Miftah Rahman</span><span>Purpose first. Progress always.</span><div className="footer-socials"><a href={socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={socialLinks.facebook} target="_blank" rel="noreferrer">Facebook ↗</a></div></footer>;
}

export function ContactBand() {
  return <section className="contact-band"><div className="site-container contact-band-inner"><div><p className="eyebrow mb-4">Good things start with a conversation</p><h2>Let’s build something meaningful.</h2><p className="body-copy mt-4">For fellow founders, thoughtful investors, and people who care.</p></div><Button asChild variant="inverse"><Link to="/contact">Get in touch <ArrowUpRight /></Link></Button></div></section>;
}

export function VentureRows() {
  return <div>
    <a href="https://hello02.app" target="_blank" rel="noreferrer" className="venture-row group"><div className="venture-logo"><img src={helloLogo.url} alt="Hello-02 Mental Health App logo" width={500} height={500} loading="lazy" /></div><div><h3>Hello-02<span className="text-primary">.</span></h3><p className="small-label">Mental Health App · For everyone</p></div><p className="body-copy">Making mental healthcare accessible, affordable, and stigma-free through technology.</p><ArrowUpRight className="venture-arrow group-hover:text-primary" /></a>
    <Link to="/blog/$slug" params={{ slug: 'two-apps-one-purpose' }} className="venture-row group"><div className="venture-logo"><img src={supportLogo.url} alt="Hello-02 Support App logo" width={480} height={480} loading="lazy" /></div><div><h3>Hello-02 Support App</h3><p className="small-label">Exclusively for professionals</p></div><p className="body-copy">The dedicated app exclusively for psychologists and mental health professionals.</p><ArrowUpRight className="venture-arrow group-hover:text-primary" /></Link>
    <a href="https://teambbs.org" target="_blank" rel="noreferrer" className="venture-row group"><div className="venture-logo">bbs<span className="text-primary">.</span></div><div><h3>Team BBS</h3><p className="small-label">Leadership · Social impact</p></div><p className="body-copy">A youth-led movement for mental health awareness and children’s rights in Bangladesh.</p><MoveUpRight className="venture-arrow group-hover:text-primary" /></a>
  </div>;
}

export function pageMeta(title: string, description: string) {
  return { meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}
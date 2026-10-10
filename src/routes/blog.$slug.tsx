import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { blogPosts } from '@/lib/blog-posts';
import { pageMeta } from '@/components/founder-site';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/blog/$slug')({
  loader: ({ params }) => {
    const post = blogPosts.find(item => item.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => loaderData ? pageMeta(`${loaderData.title} — Miftah Rahman`, loaderData.excerpt) : { meta: [{ title: 'Article not found — Miftah Rahman' }, { name: 'robots', content: 'noindex' }] },
  component: BlogPost,
  notFoundComponent: () => <main className="site-container section"><h1 className="text-4xl mb-6">Article not found.</h1><Button asChild variant="editorial"><Link to="/blog">Back to the blog <ArrowLeft /></Link></Button></main>,
});

function BlogPost() {
  const post = Route.useLoaderData();
  return <main className="site-container page-enter"><article className="article-layout"><Link to="/blog" className="text-link"><ArrowLeft />All articles</Link><p className="eyebrow text-primary mt-12">{post.category}</p><h1>{post.title}</h1><div className="article-byline"><span className="article-avatar">MR</span><div><strong>Miftah Rahman</strong><p>{post.date} · {post.readTime}</p></div></div><div className={`blog-cover article-cover ${post.imageClass}`}><img src={post.image} alt={post.imageAlt} width={500} height={500} /></div><div className="article-body">{post.paragraphs.map(text => <p key={text}>{text}</p>)}{post.source && <a href={post.source} target="_blank" rel="noreferrer" className="article-source">Source: {post.sourceLabel}<ArrowUpRight size={16} /></a>}{!post.source && <p className="article-note">Product overview based on the founder’s supplied app descriptions.</p>}</div><div className="article-end"><span>Have a thought or a shared interest?</span><Button asChild variant="editorial"><Link to="/contact">Let’s connect <ArrowUpRight /></Link></Button></div></article></main>;
}
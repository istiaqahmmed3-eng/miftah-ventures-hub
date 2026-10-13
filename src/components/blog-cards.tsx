import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { blogPosts } from '@/lib/blog-posts';

export function BlogCards({ posts = blogPosts }: { posts?: typeof blogPosts }) {
  return <div className="blog-grid">{posts.map(post => <Link key={post.slug} to="/blog/$slug" params={{ slug: post.slug }} className="blog-card group"><div className={`blog-cover ${post.imageClass}`}><img src={post.image} alt={post.imageAlt} width={500} height={500} loading="lazy" /><span className="blog-category">{post.category}</span></div><div className="blog-card-meta"><span>{post.date}</span><span>{post.readTime}</span></div><div className="flex items-start justify-between gap-4"><h3>{post.title}</h3><ArrowUpRight className="shrink-0 mt-1 group-hover:text-primary" size={20} /></div><p className="body-copy mt-3">{post.excerpt}</p><span className="blog-read">Read story <ArrowUpRight size={15} /></span></Link>)}</div>;
}
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { posts } from '@/data/posts';
import { BlogPostContent } from '@/components/sections/BlogPostContent';
import { JsonLd } from '@/components/seo/JsonLd';

// Required for Next.js static export
export function generateStaticParams() {
  return posts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find(p => p.slug === slug);
  if (!post) return {};

  const BASE_URL = "https://devhubfusionx.github.io/DevHubFusion-X";
  const OG_IMAGE = `${BASE_URL}/devHub.png`;

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.category, "Frank software engineer", "Nigeria tech blog", post.title, "DevHubFusionX blog"],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Frank'],
      url: `${BASE_URL}/blog/${post.slug}`,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [OG_IMAGE],
    }
  };
}

export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = posts.find(p => p.slug === slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "dateModified": post.date,
    "url": `https://devhubfusionx.github.io/DevHubFusion-X/blog/${post.slug}`,
    "author": {
      "@type": "Person",
      "name": "Frank",
      "jobTitle": "Lead Full-Stack Engineer",
      "url": "https://devhubfusionx.github.io/DevHubFusion-X/",
      "email": "devhubfusionx@gmail.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "DevHubFusionX",
      "url": "https://devhubfusionx.github.io/DevHubFusion-X/"
    },
    "keywords": post.category,
    "articleSection": post.category,
    "timeRequired": post.readTime,
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <BlogPostContent post={post} />
    </>
  );
}

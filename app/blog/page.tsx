import { Metadata } from 'next';
import { BlogContent } from '@/components/sections/BlogContent';
import { Contact } from '@/components/sections/Contact';
import { JsonLd } from '@/components/seo/JsonLd';
import { posts } from '@/data/posts';

export const metadata: Metadata = {
  title: "Blog — Engineering Insights by Frank",
  description: "Practical guides on building custom software, ride-hailing platforms, logistics systems, SaaS products, and making technical decisions for Nigerian businesses.",
  keywords: [
    "software engineering blog Nigeria",
    "how to build ride-hailing app Nigeria",
    "Next.js vs WordPress for business",
    "logistics platform build guide",
    "custom software cost Nigeria",
    "SaaS development guide",
    "Frank software engineer blog",
  ],
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Frank's Engineering Journal",
    "description": "Practical software engineering insights for Nigerian businesses and founders — covering build costs, technical decisions, and system architecture.",
    "url": "https://devhubfusionx.github.io/DevHubFusion-X/blog",
    "author": {
      "@type": "Person",
      "name": "Frank",
      "jobTitle": "Lead Full-Stack Engineer",
      "url": "https://devhubfusionx.github.io/DevHubFusion-X/"
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "url": `https://devhubfusionx.github.io/DevHubFusion-X/blog/${post.slug}`,
      "author": { "@type": "Person", "name": "Frank" },
      "keywords": post.category,
    }))
  };

  return (
    <>
      <JsonLd data={blogSchema} />
      <BlogContent />
      <div className="border-t border-border/40">
        <Contact />
      </div>
    </>
  );
}

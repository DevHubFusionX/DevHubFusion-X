import { projects } from '@/data/projects';
import { ProjectDetail } from '@/components/sections/ProjectDetail';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return { title: "Project Not Found" };

  const BASE_URL = "https://devhubfusionx.github.io/DevHubFusion-X";

  return {
    title: `${project.title} — Software Engineered by Frank`,
    description: project.description,
    keywords: [
      project.title,
      project.category,
      ...(project.architecture || []),
      "Frank software engineer",
      "DevHubFusionX project",
      "Lagos software developer"
    ],
    alternates: {
      canonical: `/projects/${project.id}`,
    },
    openGraph: {
      title: `${project.title} — Software Engineered by Frank`,
      description: project.description,
      url: `${BASE_URL}/projects/${project.id}`,
      type: "website",
      images: [
        {
          url: `${BASE_URL}${project.image}`,
          alt: project.title,
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Software Engineered by Frank`,
      description: project.description,
      images: [`${BASE_URL}${project.image}`],
    }
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    notFound();
  }

  const BASE_URL = "https://devhubfusionx.github.io/DevHubFusion-X";

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "image": `${BASE_URL}${project.image}`,
    "genre": project.category,
    "creator": {
      "@type": "Person",
      "name": "Frank",
      "jobTitle": "Lead Full-Stack Engineer"
    },
    "url": project.liveLink || `${BASE_URL}/projects/${project.id}`,
    "about": {
      "@type": "Thing",
      "name": project.category,
      "description": project.description
    }
  };

  return (
    <>
      <JsonLd data={projectSchema} />
      <ProjectDetail project={project} />
    </>
  );
}

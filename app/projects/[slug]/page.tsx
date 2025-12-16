import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllProjects, getProjectBySlug } from '@/lib/projects'
import ImageCarousel from '@/components/ImageCarousel'
import VideoPlayer from '@/components/VideoPlayer'

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: 'Projeto não encontrado',
    }
  }

  return {
    title: `${project.metadata.title} | Portfólio`,
    description: project.metadata.description,
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const { metadata, content } = project

  const projectImages: Record<string, string[]> = {
    'cintos-fashion': [
      '/images/projects/cintos-fashion/cintos-fashion-home.png',
      '/images/projects/cintos-fashion/cintos-fashion-catalog.png',
      '/images/projects/cintos-fashion/cintos-fashion-login.png',
      '/images/projects/cintos-fashion/cintos-fashion-register.png',
      '/images/projects/cintos-fashion/cintos-fashion-myaccount.png',
    ],
    'valorant-quiz': [
      '/images/projects/valorant-quiz/valorant-quiz-dashboard.png',
      '/images/projects/valorant-quiz/valorant-quiz-login.png',
      '/images/projects/valorant-quiz/valorant-quiz-register.png',
      '/images/projects/valorant-quiz/valorant-quiz-guessAgent.png',
      '/images/projects/valorant-quiz/valorant-quiz-guessQuote.png',
    ],
    'teccel-website': [
      '/images/projects/teccel-website/teccel-project-home.png',
      '/images/projects/teccel-website/teccel-project-contact.png',
      '/images/projects/teccel-website/teccel-project-login.png',
      '/images/projects/teccel-website/teccel-project-register.png',

    ],
    'hydra-launcher': [
      '/images/projects/hydra-launcher/library_import.png',
      '/images/projects/hydra-launcher/hydra-launcher-home.png',
    ]
  }

  const images = projectImages[params.slug] || [metadata.image]

  return (
    <div className="min-h-screen pt-20">
      <section className="max-w-4xl mx-auto px-6 py-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para Projetos
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          {metadata.title}
        </h1>

        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          {metadata.description}
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {metadata.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 text-sm font-medium rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          {metadata.github && (
            <a
              href={metadata.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              <Github className="w-4 h-4" />
              Ver Código
            </a>
          )}
          {metadata.demo && (
            <a
              href={metadata.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              <ExternalLink className="w-4 h-4" />
              Ver Demo
            </a>
          )}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-16">
        <ImageCarousel images={images} alt={metadata.title} />
      </section>

      {metadata.video && (
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <VideoPlayer src={metadata.video} title={metadata.title} />
        </section>
      )}

      <section className="max-w-4xl mx-auto px-6 pb-20">
        <article className="prose prose-slate dark:prose-invert prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-p:leading-relaxed prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 dark:prose-strong:text-white prose-code:text-primary-600 dark:prose-code:text-primary-400 prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-['']">
          <MDXRemote source={content} />
        </article>
      </section>
    </div>
  )
}


import Link from 'next/link'
import { ArrowRight, Code2, Sparkles } from 'lucide-react'
import ProjectCard from '@/components/ProjectCard'
import { getAllProjects } from '@/lib/projects'

export default function Home() {
  const projects = getAllProjects().slice(0, 3)

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="max-w-3xl animate-fade-in">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-primary-500" />
            <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
              Bem-vindo ao meu portfólio
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Desenvolvedor
            <br />
            <span className="text-primary-600 dark:text-primary-400">
              Full-Stack
            </span>
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl">
            Transformo ideias em experiências digitais elegantes e funcionais.
            Especializado em criar soluções web modernas com foco em design e performance.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 hover:scale-105"
            >
              Ver Projetos
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-lg font-medium transition-all duration-300"
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-12">
          <Code2 className="w-6 h-6 text-primary-500" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Projetos em Destaque
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard
                title={project.metadata.title}
                description={project.metadata.description}
                image={project.metadata.image}
                tags={project.metadata.tags}
                slug={project.slug}
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:gap-3 font-medium transition-all"
          >
            Ver todos os projetos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}


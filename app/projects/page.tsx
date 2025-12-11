import { Code2 } from 'lucide-react'
import ProjectCard from '@/components/ProjectCard'
import { getAllProjects } from '@/lib/projects'

export default function Projects() {
  const projects = getAllProjects()

  return (
    <div className="min-h-screen pt-20">
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="mb-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="w-8 h-8 text-primary-500" />
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white">
              Projetos
            </h1>
          </div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl">
            Uma seleção dos meus trabalhos mais recentes. Cada projeto representa
            um desafio único e uma oportunidade de aprendizado e crescimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </section>
    </div>
  )
}


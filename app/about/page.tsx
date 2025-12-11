import { Code2, Palette, Rocket, Users } from 'lucide-react'

const skills = [
  {
    icon: Code2,
    title: 'Desenvolvimento',
    description:
      'Experiência em React, Next.js, TypeScript, Node.js e tecnologias modernas de desenvolvimento web.',
  },
  {
    icon: Palette,
    title: 'Design',
    description:
      'Criação de interfaces intuitivas e atraentes com foco em experiência do usuário e design system.',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description:
      'Otimização de aplicações para máxima performance, SEO e acessibilidade em todos os dispositivos.',
  },
  {
    icon: Users,
    title: 'Colaboração',
    description:
      'Trabalho em equipe, comunicação clara e entrega de projetos dentro do prazo e escopo definido.',
  },
]

const technologies = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Tailwind CSS',
  'Git',
  'MongoDB',
  'PostgreSQL',
  'REST APIs',
  'GraphQL',
  'Docker',
]

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Sobre Mim
          </h1>
          <div className="space-y-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              Olá! Eu me chamo Caio, Sou um desenvolvedor full-stack apaixonado por criar experiências
              digitais que fazem a diferença. Com alguns anos de experiência no desenvolvimento
              web, eu transformo ideias complexas em soluções digitais simples e elegantes.
            </p>
            <p>
              Minha jornada no desenvolvimento começou com curiosidade sobre como as
              coisas funcionam na web. Hoje, conto com as tecnologias mais modernas
              para criar aplicações digitais rápidas, acessíveis e bonitas.
            </p>
            <p>
              Quando não estou codificando, você pode me encontrar explorando novas
              tecnologias, desenvolvendo projetos pessoais e aperfeiçoando minhas
              habilidades por meio de estudos, experimentação e criação de soluções que me desafiam.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 py-20 bg-slate-50 dark:bg-slate-900/50">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          O que Eu Faço
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.title}
                className="p-8 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 hover:shadow-lg animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-10 h-10 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {skill.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {skill.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Technologies */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          Tecnologias
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <span
              key={tech}
              className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 rounded-lg text-slate-700 dark:text-slate-300 font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}


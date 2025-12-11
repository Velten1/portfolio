import { Briefcase, GraduationCap, Code2, Calendar, Wrench } from 'lucide-react'

const experiences = [
  {
    type: 'work',
    title: 'Engenheiro de Software',
    company: 'Produtores do Futuro',
    period: 'Nov 2025 - Presente',
    description: 'Plataforma web para criação, produção e gestão de eventos. Fiz uma API RESTful com autenticação JWT, controle de acesso por roles e integração com Stripe para assinaturas. Inclui gestão de eventos, locais, participantes, custos, receitas (projetadas vs. reais), gestão de bebidas/bar, atividades/tarefas e relatórios financeiros. Analytics com insights e sugestões de preços, dashboard com métricas em tempo real e análise de risco financeiro. Painel administrativo com analytics de acesso, gerenciamento de usuários e planos. Upload de arquivos via Firebase Storage, proteção com reCAPTCHA e sistema de planos com limites mensais. Interface responsiva com Vue.js e Vuetify. Backend em Node.js/Express com Prisma ORM e MySQL.',
    technologies: ['Vue.js', 'JavaScript', 'MySQL', 'REST API', 'JWT', 'Node.js', 'Express.js', 'Prisma', 'Vuetify', 'Stripe', 'Firebase', 'Vite', 'Pinia',],
  },
  {
    type: 'work',
    title: 'Estagiário',
    company: 'Comn',
    period: 'Nov 2023 - Mai 2024',
    description: 'Implementação de integração com banco de dados ArangoDB para armazenar usuários, tópicos e progresso de aprendizado. Criação e consumo de API GraphQL para operações CRUD otimizadas. Desenvolvimento de interface responsiva com React e TypeScript, priorizando usabilidade e clareza.',
    technologies: ['React', 'TypeScript', 'ArangoDB', 'GraphQL', 'JWT', 'Node.js', 'Prisma', 'Tailwind CSS'],
  }
]

const education = [
  {
    title: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Anhanguera Educacional S.A',
    period: '2024 - Presente',
    description: 'Participação em projetos usando Scrum, Kanban e metodologias ágeis. Desenvolvimento de algoritmos eficientes e resolução de problemas computacionais. Gestão de requisitos: levantar, documentar e priorizar requisitos com stakeholders.',
    highlights: ['Scrum', 'Kanban', 'Algoritmos', 'Gestão de Requisitos', 'UI/UX'],
  },
  {
    title: 'Desenvolvimento em JavaScript',
    institution: 'SENAI - Serviço Nacional de Aprendizagem Industrial',
    period: '2025',
    description: 'Arquitetura da informação aplicada à otimização de fluxos complexos de dados. Design de interação e experiência do usuário (UI/UX) com foco em performance e escalabilidade. Integração avançada de linguagens de programação para aplicações web dinâmicas.',
    highlights: ['JavaScript', 'React', 'Node.js', 'UI/UX', 'Performance', 'Arquitetura'],
  },
  {
    title: 'Banco de Dados para Data Science',
    institution: 'SENAI',
    period: '2025',
    description: 'Modelagem e otimização de bancos de dados relacionais e não-relacionais. Criação de pipelines de dados e consultas SQL avançadas para análise. Análise e visualização de dados para suporte a decisões estratégicas.',
    highlights: ['SQL', 'MySQL', 'MongoDB', 'Data Analysis', 'Pipeline de Dados'],
  },
]

const projects = [
  {
    title: 'CintosFashion',
    description: 'Ecommerce para fábrica de acessórios',
    period: '2024',
    technologies: ['React', 'Node.js', 'Prisma', 'MySQL'],
  },
  {
    title: 'Valorant Quiz',
    description: 'Jogo interativo de adivinhação',
    period: '2024',
    technologies: ['React', 'Node.js', 'Prisma', 'JWT'],
  },
  {
    title: 'Teccel Website',
    description: 'Website institucional - Projeto SENAI',
    period: '2024',
    technologies: ['React', 'TypeScript', 'Prisma', 'MySQL'],
  },
]

export default function Experience() {
  return (
    <div className="min-h-screen pt-20">
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Experiências
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl">
            Minha trajetória profissional, acadêmica e projetos desenvolvidos ao longo da minha carreira como desenvolvedor.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-8 h-8 text-primary-500" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Experiência Profissional
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-8 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 hover:shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                    {exp.company}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap className="w-8 h-8 text-primary-500" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Formação Acadêmica
          </h2>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-8 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 hover:shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {edu.title}
                  </h3>
                  <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                    {edu.institution}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{edu.period}</span>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {edu.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {edu.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="flex items-center gap-3 mb-12">
          <Wrench className="w-8 h-8 text-primary-500" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Habilidades Técnicas
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { category: 'Frontend', skills: ['JavaScript (React)', 'TypeScript', 'Tailwind CSS', 'UI/UX'] },
            { category: 'Backend', skills: ['Node.js', 'Express', 'APIs REST', 'GraphQL'] },
            { category: 'Banco de Dados', skills: ['MySQL', 'MongoDB', 'ArangoDB', 'SQL Avançado'] },
            { category: 'Outros', skills: ['JWT', 'Prisma', 'Docker', 'Git', 'Scrum/Kanban'] },
          ].map((group, index) => (
            <div
              key={group.category}
              className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-12">
          <Code2 className="w-8 h-8 text-primary-500" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Projetos Desenvolvidos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 hover:shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {project.period}
                </span>
              </div>

              <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-medium rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 text-xs font-medium rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Ver Todos os Projetos
          </a>
        </div>
      </section>
    </div>
  )
}


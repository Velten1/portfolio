import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Braces, Database, Layers3, Sparkles } from 'lucide-react'
import KineticHero from '@/components/KineticHero'
import { getAllProjects } from '@/lib/projects'

const disciplines = [
  { icon: Layers3, number: '01', title: 'Interfaces', copy: 'Produtos claros, responsivos e desenhados para tornar decisões complexas mais simples.' },
  { icon: Braces, number: '02', title: 'Engenharia', copy: 'Frontend conectado a APIs, dados e regras de negócio, com uma base pronta para evoluir.' },
  { icon: Database, number: '03', title: 'Sistemas', copy: 'Arquiteturas completas, autenticação, pagamentos, telemetria e fluxos em tempo real.' },
  { icon: Sparkles, number: '04', title: 'Inteligência', copy: 'LLMs, RAG e modelos aplicados como parte do produto, não apenas como demonstração.' },
]

const stack = ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Node.js', 'GraphQL', 'Prisma', 'MySQL', 'AWS', 'Python', 'LLMs', 'RAG', 'Docker', 'Stripe']

export default function Home() {
  const allProjects = getAllProjects()
  const projects = allProjects.slice(0, 5)

  return (
    <div className="home-page">
      <KineticHero />

      <section className="lp-intro">
        <span className="lp-label">Sobre / 01</span>
        <p>Desenvolvo produtos digitais que precisam funcionar de verdade. Da interface ao dado, transformo operações complexas em sistemas <em>claros, rápidos e confiáveis.</em></p>
        <div className="lp-intro-meta"><span>São Paulo, Brasil</span></div>
      </section>

      <section className="capability-section">
        <header><span className="lp-label">O que eu construo / 02</span><h2>Entre a ideia<br/>e a operação.</h2></header>
        <div className="capability-list">{disciplines.map(item => { const Icon = item.icon; return <article key={item.number}><span>{item.number}</span><Icon/><h3>{item.title}</h3><p>{item.copy}</p></article> })}</div>
      </section>

      <section className="stack-section">
        <div><span className="lp-label">Repertório / 03</span><p>Tecnologias são ferramentas.<br/>O produto é a resposta.</p></div>
        <div className="stack-wall">{stack.map((item, index) => <span key={item} className={index % 4 === 0 ? 'accent' : ''}>{item}</span>)}</div>
      </section>

      <section className="work-index">
        <div className="index-intro"><span>Arquivo de projetos / 04</span><h2>Sistemas que<br/>ganharam <em>forma.</em></h2><p>Produtos, experimentos e contribuições construídos ao longo da minha trajetória.</p></div>
        <div className="project-list">
          {projects.map((project, index) => {
            const isCurrent = project.slug === 'agroguard'
            return <Link href={`/projects/${project.slug}`} className={`project-row${isCurrent ? ' project-row-current' : ''}`} key={project.slug}>
              <span className="project-number">0{index + 1}</span>
              <div className="project-thumb"><Image src={project.metadata.image} alt={isCurrent ? 'Interface do AgroGuard' : ''} fill sizes={isCurrent ? '(max-width: 800px) 88vw, 38vw' : '230px'} priority={isCurrent} /></div>
              <div className="project-name">
                {isCurrent && <span className="project-current"><i /> Projeto FIAP / Challenge Sompo</span>}
                <h3>{project.metadata.title.split(' - ')[0]}</h3>
                <p>{project.metadata.description}</p>
              </div>
              <div className="project-stack">{project.metadata.tags.slice(0, 3).map(tag => <span key={tag}>{tag}</span>)}</div>
              <ArrowUpRight className="project-arrow" />
            </Link>
          })}
        </div>
        <Link href="/projects" className="all-work">Todos os projetos <ArrowRight/></Link>
      </section>

      <section className="manifesto"><div className="manifesto-aside"><span>(05)</span><span>Manifesto</span></div><div className="manifesto-copy"><p>O melhor software não pede atenção.</p><p>Ele responde rápido, explica a si mesmo</p><p>e <em>sai do caminho.</em></p></div><div className="manifesto-foot"><p>Estratégia / Interface / Engenharia</p><Link href="/about">Mais sobre mim <ArrowUpRight/></Link></div></section>
      <section className="contact-strip"><div><span>Tem um problema interessante?</span><Link href="/contact">Vamos resolver.<ArrowUpRight/></Link></div></section>
    </div>
  )
}

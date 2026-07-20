import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import KineticHero from '@/components/KineticHero'
import Reveal from '@/components/Reveal'
import { getAllProjects } from '@/lib/projects'

export default function Home() {
  const projects = getAllProjects().slice(0, 4)
  return (
    <div className="home-page">
      <KineticHero />

      <section className="work-index">
        <Reveal className="index-intro">
          <span>Selected work / 04</span>
          <h2>Não faço telas.<br/>Faço <em>sistemas.</em></h2>
          <p>Cada projeto abaixo nasceu de um problema real e foi resolvido da interface ao banco de dados.</p>
        </Reveal>
        <div className="project-list">
          {projects.map((project, index) => (
            <Reveal key={project.slug}>
              <Link href={`/projects/${project.slug}`} className="project-row">
                <span className="project-number">0{index + 1}</span>
                <div className="project-thumb"><Image src={project.metadata.image} alt="" fill sizes="(max-width: 700px) 35vw, 230px" /></div>
                <div className="project-name"><h3>{project.metadata.title.split(' - ')[0]}</h3><p>{project.metadata.description}</p></div>
                <div className="project-stack">{project.metadata.tags.slice(0, 3).map(tag => <span key={tag}>{tag}</span>)}</div>
                <ArrowUpRight className="project-arrow" />
              </Link>
            </Reveal>
          ))}
        </div>
        <Link href="/projects" className="all-work">Todos os projetos <ArrowRight /></Link>
      </section>

      <section className="manifesto">
        <div className="manifesto-aside"><span>(03)</span><span>Manifesto</span></div>
        <Reveal className="manifesto-copy">
          <p>O melhor software não pede atenção.</p>
          <p>Ele responde rápido, explica a si mesmo</p>
          <p>e <em>sai do caminho.</em></p>
        </Reveal>
        <div className="manifesto-foot"><p>Estratégia / Interface / Engenharia</p><Link href="/about">Mais sobre mim <ArrowUpRight /></Link></div>
      </section>

      <section className="contact-strip">
        <Reveal><span>Tem um problema interessante?</span><Link href="/contact">Vamos resolver.<ArrowUpRight /></Link></Reveal>
      </section>
    </div>
  )
}

'use client'

import { ArrowUpRight, BookOpen, Boxes, BrainCircuit, Factory, PanelsTopLeft, TicketCheck, TrendingUp, X } from 'lucide-react'
import { useEffect, useState } from 'react'

type Chapter = {
  year: string
  period: string
  eyebrow: string
  title: string
  role: string
  copy: string
  longCopy: string
  tags: string[]
  details: string[]
  visual: 'comn' | 'anhanguera' | 'senai' | 'voy' | 'produtores' | 'fiap' | 'mide'
  current?: boolean
}

const chapters: Chapter[] = [
  { year: '23', period: 'NOV 2023 / MAI 2024', eyebrow: 'O primeiro código em produção', title: 'Comn', role: 'Estagiário de desenvolvimento', copy: 'React, GraphQL e ArangoDB em uma plataforma de aprendizagem. Foi onde teoria ganhou usuários, prazos e consequências reais.', longCopy: 'Atuei na construção da aplicação de ponta a ponta, trabalhando persistência de dados, API, segurança, backend e interface. A experiência consolidou minha base em aplicações TypeScript organizadas, reutilizáveis e preparadas para evolução.', tags: ['React', 'GraphQL', 'ArangoDB'], details: ['Implementação de integração com ArangoDB para persistência de usuários, incluindo estruturação de coleções e relacionamentos.', 'Criação e consumo de API GraphQL, desenvolvendo queries e mutations para operações de CRUD de forma eficiente.', 'Implementação de autenticação e autorização utilizando JWT, com proteção de rotas no backend e controle de acesso no frontend.', 'Desenvolvimento de interface web responsiva com React e TypeScript, focando em usabilidade, clareza e boa experiência do usuário.', 'Criação de componentes reutilizáveis, organização de estado e separação de responsabilidades seguindo boas práticas de frontend.', 'Estruturação de backend em Node.js com TypeScript, aplicando arquitetura modular e padronização de código.', 'Configuração de ambiente de desenvolvimento com Vite, ESLint e Prettier para padronização e qualidade do código.', 'Versionamento de código com Git e GitHub, utilizando commits organizados e controle de alterações.'], visual: 'comn' },
  { year: '24', period: '2024 / PRESENTE', eyebrow: 'A base', title: 'Anhanguera', role: 'Análise e Desenvolvimento de Sistemas', copy: 'Algoritmos, requisitos e arquitetura formaram a estrutura que hoje sustenta minhas decisões de engenharia.', longCopy: 'Participo de projetos usando Scrum, Kanban e metodologias ágeis. A formação cobre desenvolvimento de algoritmos eficientes, resolução de problemas computacionais e gestão de requisitos, desde o levantamento até a documentação e priorização com stakeholders.', tags: ['ADS', 'Algoritmos', 'Arquitetura'], details: ['Desenvolvimento de algoritmos e resolução estruturada de problemas.', 'Levantamento, documentação e priorização de requisitos.', 'Projetos com Scrum, Kanban, frontend, backend e bancos de dados.'], visual: 'anhanguera' },
  { year: '25', period: '2025 / 2026', eyebrow: 'Aprender construindo', title: 'SENAI', role: 'JavaScript, dados, frontend e cloud', copy: 'Especialização que virou produto real: um totem capaz de transformar planilhas complexas em informação simples.', longCopy: 'Aprofundei arquitetura da informação, design de interação, JavaScript, bancos de dados e serviços em nuvem AWS. Também desenvolvi competências em interfaces responsivas, tipografia, navegabilidade, performance e integração de fontes de dados complexas.', tags: ['JavaScript', 'Dados', 'AWS'], details: ['Desenvolvi um totem para o SENAI Anchieta que transforma planilhas em grades de aulas, professores e salas.', 'Trabalhei modelagem de bancos relacionais e não relacionais, consultas SQL e pipelines de dados.', 'Estudei implantação em AWS com EC2, Lambda, S3, RDS, VPC e CloudWatch.'], visual: 'senai' },
  { year: '25', period: 'NOV 2025 / ABR 2026', eyebrow: 'Escala e transações', title: 'Voy Tecnologia', role: 'Junior Full-stack Developer', copy: 'Na ticketme.app, construí fluxos de pagamento e integrações para eventos de grande porte.', longCopy: 'Atuei no desenvolvimento de funcionalidades para sistemas de pagamento voltados a eventos de grande porte, projetando fluxos de transação escaláveis e integrando soluções como Stripe.', tags: ['Vue.js', 'Node.js', 'Stripe'], details: ['Implementei fluxos de pagamento pré e pós pago, contribuindo para maior flexibilidade e eficiência durante eventos ao vivo.', 'Liderei o desenvolvimento de uma feature de pagamentos em colaboração direta com o fundador.', 'Trabalhei com foco na experiência do usuário, permitindo transações diretamente no local do evento.'], visual: 'voy' },
  { year: '25', period: 'NOV 2025 / ABR 2026', eyebrow: 'Produto ponta a ponta', title: 'Produtores do Futuro', role: 'Engenheiro de Software', copy: 'Gestão financeira, analytics, autenticação e pagamentos reunidos em um produto completo para gestão de eventos.', longCopy: 'Desenvolvi uma plataforma web completa para gestão de eventos com API RESTful, autenticação JWT, controle de acesso por roles e integração Stripe. O produto reuniu gestão financeira, analytics, dashboard em tempo real e ferramentas administrativas.', tags: ['Prisma', 'MySQL', 'Firebase'], details: ['Desenvolvimento de sistema de gestão financeira com custos, receitas projetadas e valores reais.', 'Criação de analytics com insights e dashboard em tempo real.', 'Construção de painel administrativo com gerenciamento de usuários, planos e upload de arquivos via Firebase.', 'Desenvolvimento de interface responsiva com Vue.js e Vuetify.', 'Estruturação do backend com Node.js, Express, Prisma e MySQL.'], visual: 'produtores' },
  { year: '26', period: '2026 / PRESENTE', eyebrow: 'Nova camada de inteligência', title: 'FIAP', role: 'Inteligência Artificial', copy: 'Machine learning, redes neurais e LLMs ampliando o que consigo imaginar e o que consigo entregar.', longCopy: 'Desenvolvo algoritmos de inteligência artificial com foco em aprendizado de máquina e redes neurais. A formação explora implementação de modelos para problemas reais, deep learning, LLMs e arquiteturas com recuperação de contexto.', tags: ['Python', 'LLMs', 'RAG'], details: ['Desenvolvimento de modelos com Python, TensorFlow e Keras.', 'Estudo de redes neurais, deep learning e aplicações com LLMs.', 'Experimentação com RAG e inteligência artificial aplicada a problemas reais.'], visual: 'fiap' },
  { year: 'NOW', period: 'JUN 2026 / PRESENTE', eyebrow: 'Onde estou agora', title: 'MIDE', role: 'Desenvolvedor Frontend', copy: 'Hoje construo interfaces para um produto conectado ao mercado financeiro, onde clareza, velocidade e confiança são requisitos do produto.', longCopy: 'Atuo como Desenvolvedor Frontend dentro da MIDE. Meu trabalho está concentrado na construção e evolução das interfaces do produto, traduzindo informações e fluxos do mercado financeiro em experiências claras, responsivas e confiáveis.', tags: ['Frontend', 'Interfaces', 'Trading tech'], details: ['Desenvolvo e evoluo interfaces dentro do ecossistema de produtos da MIDE.', 'Transformo fluxos e informações financeiras em experiências mais claras para o usuário.', 'Trabalho com foco em responsividade, consistência visual e velocidade de interação.'], visual: 'mide', current: true },
]

function CardVisual({ type }: { type: Chapter['visual'] }) {
  if (type === 'anhanguera') return <div className="identity-art art-anhanguera"><span>AN</span><BookOpen/><div><i/><i/><i/></div><b>ADS / 2024</b></div>
  if (type === 'senai') return <div className="identity-art art-senai"><Factory/><strong>SENAI</strong><div className="industry-stripes"/><small>INDÚSTRIA · DADOS · WEB</small></div>
  if (type === 'fiap') return <div className="identity-art art-fiap"><span>FIAP</span><BrainCircuit/><div className="ai-orbit"><i/><i/><i/></div><small>NEXT IS NOW</small></div>
  if (type === 'mide') return <div className="identity-art art-mide"><div className="mide-brand"><span>MIDE</span><PanelsTopLeft/></div><div className="mide-interface"><i/><i/><i/><i/><b/></div><strong>FRONTEND</strong><small>INTERFACES / PRODUTO</small></div>
  if (type === 'voy') return <div className="identity-art art-voy"><TicketCheck/><strong>TICKET / 001</strong><div className="ticket-cut"/><small>PAYMENT APPROVED</small></div>
  if (type === 'produtores') return <div className="identity-art art-produtores"><TrendingUp/><div><span>Receita</span><strong>+28.4%</strong></div><div className="mini-bars"><i/><i/><i/><i/><i/></div></div>
  return <div className="identity-art art-comn"><Boxes/><span>COMN_</span><div className="code-lines"><i/><i/><i/><i/></div><small>learning.graph / connected</small></div>
}

export default function CareerJourney() {
  const [selected, setSelected] = useState<Chapter | null>(null)

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setSelected(null)
    window.addEventListener('keydown', close)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', close) }
  }, [selected])

  return (
    <section className="journey-map">
      <svg className="route-map" viewBox="0 0 1000 4200" preserveAspectRatio="none" aria-hidden="true">
        <path className="route-base" d="M80 90 L720 390 L310 820 L825 1270 L190 1700 L700 2180 L310 2640 L805 3150 L470 3650 L650 4110" />
      </svg>

      {chapters.map((chapter, index) => (
        <article
          key={chapter.title}
          className={`map-stop stop-${index + 1} ${chapter.current ? 'is-current' : ''}`}
          onClick={() => setSelected(chapter)}
          onKeyDown={(event) => (event.key === 'Enter' || event.key === ' ') && setSelected(chapter)}
          role="button"
          tabIndex={0}
          aria-label={`Abrir detalhes sobre ${chapter.title}`}
        >
          <span className="route-dot" aria-hidden="true" />
          <div className="map-card-top"><span className="map-year">'{chapter.year}</span><span>{chapter.period}</span></div>
          <CardVisual type={chapter.visual} />
          <div className="map-card-copy">
            <span className="map-eyebrow">{chapter.eyebrow}</span>
            <h2>{chapter.title}</h2>
            <h3>{chapter.role}</h3>
            <p>{chapter.copy}</p>
          </div>
          <div className="map-card-bottom"><div>{chapter.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{chapter.current ? <b><i/> atual</b> : <ArrowUpRight/>}</div>
        </article>
      ))}
      <div className="map-finish"><span>continua</span><ArrowUpRight/></div>

      {selected && (
          <div className="chapter-dialog-backdrop" onClick={() => setSelected(null)}>
            <div className={`chapter-dialog dialog-${selected.visual}`} role="dialog" aria-modal="true" aria-label={`Minha experiência em ${selected.title}`} onClick={(event) => event.stopPropagation()}>
              <button onClick={() => setSelected(null)} aria-label="Fechar detalhes"><X /></button>
              <div className="dialog-heading"><span>{selected.period}</span><h2>{selected.title}</h2><p>{selected.role}</p></div>
              <CardVisual type={selected.visual} />
              <div className="dialog-story"><span>O que eu fiz</span><p className="dialog-long-copy">{selected.longCopy}</p><ol>{selected.details.map((detail, index) => <li key={detail}><b>{String(index + 1).padStart(2, '0')}</b><p>{detail}</p></li>)}</ol></div>
            </div>
          </div>
      )}
    </section>
  )
}

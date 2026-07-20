import { ArrowUpRight } from 'lucide-react'

const links = [
  ['GitHub', 'https://github.com/Velten1'],
  ['LinkedIn', 'https://www.linkedin.com/in/caio-velten-1351b22b7/'],
  ['E-mail', 'mailto:caioryan.ca@gmail.com'],
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div><a className="footer-brand" href="/">Caio Velten<span>.</span></a><p>Software engineer focado em produtos digitais<br />claros, rápidos e bem construídos.</p></div>
      <div className="footer-links">{links.map(([label, href]) => <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{label}<ArrowUpRight /></a>)}</div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Caio Velten</span><span>São Paulo • Brasil</span></div>
    </footer>
  )
}

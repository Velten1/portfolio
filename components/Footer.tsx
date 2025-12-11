import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/Velten1', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/caio-velten-1351b22b7/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:caioryan.ca@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white dark:bg-slate-800 hover:bg-primary-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
            © {new Date().getFullYear()} Portfolio de Caio Velten. Desenvolvido usando as tecnologias mais modernas.
          </p>
        </div>
      </div>
    </footer>
  )
}


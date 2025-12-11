'use client'

import { Mail, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Nova mensagem de ${formData.name} - Portfólio`,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Vamos Conversar
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">
              Tem um projeto em mente? Quer colaborar ou apenas dizer oi? Adoraria
              ouvir você!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
                  <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:caioryan.ca@gmail.com"
                    className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    caioryan.ca@gmail.com 
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                    Localização
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    São Paulo, Brasil
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-up">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-900 dark:text-white mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-900 dark:text-white mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-900 dark:text-white mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Conte-me sobre seu projeto..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                <Send className="w-4 h-4" />
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200 text-center animate-fade-in">
                  ✓ Mensagem enviada com sucesso! Responderei em breve.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200 text-center animate-fade-in">
                  ✗ Erro ao enviar mensagem. Tente novamente ou envie um email direto.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}


import CareerJourney from '@/components/CareerJourney'

export const metadata = {
  title: 'Trajetória',
  description: 'A trajetória profissional e acadêmica de Caio Velten.',
}

export default function Experience() {
  return (
    <div className="journey-page">
      <section className="journey-hero">
        <div className="journey-overline"><span>03 / Trajetória</span><span>2023 / Agora</span></div>
        <h1>Por onde<br/><em>eu passei.</em></h1>
        <div className="journey-intro"><span>↘</span><p>Uma linha do tempo sobre trabalho, estudo<br/>e as escolhas que moldaram meu jeito de construir.</p></div>
      </section>
      <CareerJourney />
    </div>
  )
}

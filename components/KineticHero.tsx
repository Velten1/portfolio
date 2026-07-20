'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'

export default function KineticHero() {
  const hero = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = hero.current
    if (!element) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!reduced) {
      animate(element.querySelectorAll('.kinetic-word > span'), {
        translateY: ['110%', '0%'],
        rotate: [2, 0],
        duration: 1100,
        delay: stagger(90, { start: 650 }),
        ease: 'outExpo',
      })
      animate(element.querySelectorAll('.hero-reveal'), {
        opacity: [0, 1],
        translateY: [18, 0],
        duration: 700,
        delay: stagger(75, { start: 880 }),
        ease: 'outCubic',
      })
      animate(element.querySelectorAll('.hero-cursor-shape'), {
        opacity: [0, 1],
        scale: [.65, 1],
        rotate: [-7, 0],
        duration: 900,
        delay: 760,
        ease: 'outExpo',
      })
    }

  }, [])

  return (
    <section ref={hero} className="kinetic-hero">
      <div className="hero-intro-curtain" aria-hidden="true"><span>CAIO VELTEN</span><i>PORTFOLIO / 2026</i></div>
      <div className="hero-rule hero-rule-top hero-reveal"><span>Software engineer</span></div>

      <div className="name-composition" aria-label="Caio Velten, Software Engineer">
        <div className="kinetic-line line-caio">
          <span className="line-index hero-reveal">01</span>
          <span className="kinetic-word"><span>CAIO</span></span>
          <span className="role-note hero-reveal">FULL STACK<br/>ENGINEER</span>
        </div>
        <div className="kinetic-line line-velten">
          <span className="availability hero-reveal">OPEN TO<br/>GOOD IDEAS <i /></span>
          <span className="kinetic-word kinetic-outline"><span>VELTEN</span></span>
        </div>
      </div>

      <div className="hero-statement hero-reveal">
        <ArrowDownRight aria-hidden="true" />
        <p>Projeto e construo sistemas digitais em que<br/><strong>complexidade vira clareza.</strong></p>
        <Link href="/projects">Ver trabalho <ArrowUpRight /></Link>
      </div>
      <div className="hero-cursor-shape" aria-hidden="true"><Image src="/caio-profile.png" alt="" fill sizes="110px" priority /></div>
    </section>
  )
}

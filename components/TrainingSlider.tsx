'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

const slides = [
  {
    letter: 'A',
    bg: '#B8B8FF',
    content: 'Master developing generative AI apps, building AI agents, and solutions that implement knowledge connections.',
    boldLabel: 'Microsoft AI-103 Training',
    href: '/microsoft-ai-103-training',
  },
  {
    letter: 'B',
    bg: '#8A8AFF',
    content: 'Claude — Building Intelligent AI Agents with Automation & Advanced GenAI (Claude).',
    boldLabel: 'Claude Code & Cowork',
    href: '/claude-code-cowork',
  },
  {
    letter: 'C',
    bg: '#5C5CFF',
    content: 'Training designed by industry experts to give professionals practical, job-ready AI skills.',
    boldLabel: 'AI+ Workforce Enablement',
    href: '/AI+-Workforce-Enablement-Courses',
  },
  {
    letter: 'D',
    bg: '#2E2EFF',
    content: 'Your gateway to mastering one of the most powerful enterprise AI tools for Microsoft 365.',
    boldLabel: 'Microsoft 365 Copilot Training',
    href: '/microsoft-365-copilot-training',
  },
]

export default function TrainingSlider() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [renderKey, setRenderKey] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        setActiveSlide(0)
        setRenderKey(prev => prev + 1)
      }
    }

    let visibilityTimeout: NodeJS.Timeout
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        clearTimeout(visibilityTimeout)
        visibilityTimeout = setTimeout(() => {
          setRenderKey(prev => prev + 1)
        }, 100)
      }
    }

    window.addEventListener('pageshow', handlePageShow)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      window.removeEventListener('pageshow', handlePageShow)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      clearTimeout(visibilityTimeout)
    }
  }, [])

  const goNext = useCallback(() => {
    setActiveSlide(prev => (prev + 1) % slides.length)
  }, [])

  const goPrev = useCallback(() => {
    setActiveSlide(prev => (prev - 1 + slides.length) % slides.length)
  }, [])

  const goTo = useCallback((i: number) => {
    setActiveSlide(i)
  }, [])

  return (
    <div key={renderKey}>
      <section style={{ backgroundColor: '#ffffff', paddingTop: '60px', paddingLeft: '80px', paddingRight: '80px', paddingBottom: '110px' }}>
        <div style={{
          display: 'flex',
          borderRadius: '16px',
          overflow: 'hidden',
          maxWidth: '1100px',
          margin: '0 auto',
          minHeight: '420px',
        }}>

          {/* Left column */}
          <div style={{
            backgroundColor: '#E6E6FF',
            flex: '0 0 280px',
            padding: '48px 40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <h2 style={{ margin: 0, lineHeight: 1.15 }}>
              <span style={{ display: 'block', fontSize: '36px', fontWeight: 700, color: '#1a1a6e' }}>Your AI</span>
              <span style={{ display: 'block', fontSize: '36px', fontWeight: 700, color: '#1a1a6e' }}>training.</span>
              <span style={{ display: 'block', fontSize: '36px', fontWeight: 700, color: '#00A326', marginTop: '75px', marginBottom: '35px' }}>Your way.</span>
            </h2>
            <p style={{
              fontSize: '14px',
              fontWeight: 400,
              color: '#000000',
              lineHeight: 1.4,
              margin: '0 0 24px 0',
              maxWidth: '200px',
            }}>
              Use the arrows below to navigate our most popular training programs
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px' }}>
              <button
                type="button"
                onClick={goPrev}
                style={{
                  background: 'none', border: 'none', color: '#1a1a6e',
                  fontSize: '28px', fontWeight: 900, cursor: 'pointer',
                  lineHeight: 1, padding: '4px 8px',
                }}
              >&lt;</button>
              <button
                type="button"
                onClick={goNext}
                style={{
                  background: 'none', border: 'none', color: '#1a1a6e',
                  fontSize: '28px', fontWeight: 900, cursor: 'pointer',
                  lineHeight: 1, padding: '4px 8px',
                }}
              >&gt;</button>
            </div>
          </div>

          {/* Slides */}
          <div ref={containerRef} style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
            {slides.map((slide, i) => {
              const isActive = i === activeSlide
              return (
                <div
                  key={i}
                  onClick={() => goTo(i)}
                  style={{
                    backgroundColor: slide.bg,
                    flex: isActive ? '1' : '0 0 60px',
                    transition: 'flex 0.4s ease',
                    padding: isActive ? '32px 36px' : '24px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: isActive ? 'default' : 'pointer',
                    overflow: 'hidden',
                  }}
                >
                  {/* Letter */}
                  <div style={{
                    fontSize: '13px', fontWeight: 500,
                    color: 'rgba(255,255,255,0.85)',
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    borderRadius: '50%',
                    width: '32px', height: '32px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    alignSelf: isActive ? 'flex-start' : 'center',
                  }}>
                    {slide.letter}
                  </div>

                  {/* Content */}
                  {isActive && (
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '24px 0' }}>
                      <p style={{
                        fontSize: '22px', fontWeight: 400,
                        color: '#ffffff', lineHeight: 1.4,
                        margin: 0, maxWidth: '480px',
                      }}>
                        {slide.content}
                      </p>
                    </div>
                  )}

                  {/* Label with arrow */}
                  {isActive && (
                    <a
                      href={slide.href}
                      onClick={e => e.stopPropagation()}
                      style={{
                        display: 'inline-flex', alignItems: 'center',
                        gap: '12px', fontSize: '30px', fontWeight: 700,
                        color: '#ffffff', textDecoration: 'none', cursor: 'pointer',
                      }}
                      onMouseEnter={e => {
                        const span = e.currentTarget.querySelector('.label-text') as HTMLElement | null
                        if (span) span.style.textDecoration = 'underline'
                      }}
                      onMouseLeave={e => {
                        const span = e.currentTarget.querySelector('.label-text') as HTMLElement | null
                        if (span) span.style.textDecoration = 'none'
                      }}
                    >
                      <span className="label-text">{slide.boldLabel}</span>
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        width: '36px', height: '36px', borderRadius: '50%',
                        backgroundColor: '#ffffff', flexShrink: 0,
                      }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </a>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

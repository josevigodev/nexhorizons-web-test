'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { ExclamationIcon } from '../common/Icons'
import { TechnologiesCarrousel } from '../common/TechnologiesCarrousel'
import { HighlightText } from '../common/HighlighText'
import { ProjectNextStep } from './ProjectNextStep'

const services = [
  {
    title: 'Análisis de Software & Estrategia MVP',
    description:
      'Validación de mercado antes de invertir capital. Basado en la estrategia de Cuba Negocios para validarse con ventas en tiempo récord.',
    chips: ['Minimizar Riesgo', 'MVP Strategy'],
    image:
      'https://images.unsplash.com/photo-1552664730-cfec5f28eb68?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Diseño de Experiencias (UX/UI)',
    description:
      'Buscamos flujos funcionales, no solo belleza. De wireframes en papel a prototipos de alta fidelidad que garantizan la usabilidad.',
    chips: ['Wireframes', 'Interactive'],
    image:
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Identidad de Marca',
    description:
      'No es un logo, es autoridad. Proceso de 3 propuestas con manual de identidad y aplicaciones según tu nicho de mercado.',
    chips: ['Brand Book', '3 Propuestas'],
    image:
      'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Desarrollo Web & Contenidos',
    description:
      'Sitios Corporativos, Blogs y Portafolios. Optimización SEO, gestión de servidores VPS y mantenimiento técnico continuo.',
    chips: ['WordPress', 'VPS Hosting'],
    image:
      'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'E-commerce & Reservas',
    description:
      'Plataformas de venta e inmobiliarias con pasarelas de pago. Stripe, PayPal y sistemas de reserva en tiempo real.',
    chips: ['WooCommerce', 'Payments'],
    image:
      'https://images.unsplash.com/photo-1556742031-c6961e8560b8?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Desarrollo Custom (Apps/IA)',
    description:
      'Software complejo: Apps nativas, PWA, APIs Rest y sistemas dinámicos con Inteligencia Artificial integrada.',
    chips: ['Flutter/React', 'AI Integrated'],
    image:
      'https://images.unsplash.com/photo-1552664730-cfec5f28eb68?auto=format&fit=crop&w=900&q=80'
  }
]

const reasons = [
  {
    title: 'Validación Real',
    description:
      'Nuestros proyectos generan ingresos y captan usuarios desde el primer día.'
  },
  {
    title: 'Enfoque MVP',
    description:
      'Priorizamos lo esencial para que no gastes en funciones que nadie usará.'
  },
  {
    title: 'Equipo Experto',
    description:
      'Ingenieros senior especializados en las tecnologías más avanzadas del mercado.'
  },
  {
    title: 'Full-Lifecycle',
    description:
      'Te acompañamos desde la idea en papel hasta el servidor de producción.'
  }
]

const countryOptions = [
  { value: 'USA', label: '🇺🇸 USA' },
  { value: 'ESP', label: '🇪🇸 ESP' },
  { value: 'MEX', label: '🇲🇽 MEX' },
  { value: 'CUB', label: '🇨🇺 CUB' }
] as const

const serviceOptions = [
  {
    value: 'mvp',
    label: 'Análisis MVP & Estrategia',
    description:
      'Documento de requerimientos, mapa de procesos y estrategia de validación en tiempo récord.'
  },
  {
    value: 'uxui',
    label: 'Diseño UX/UI Completo',
    description:
      'Diseño de flujos y prototipo interactivo en Figma de alta fidelidad.'
  },
  {
    value: 'brand',
    label: 'Identidad de Marca',
    description:
      '3 propuestas de diseño, manual básico de marca y aplicaciones digitales.'
  },
  {
    value: 'web',
    label: 'Web Corporativa WordPress',
    description:
      'Sitios corporativos o portafolios, optimización SEO y despliegue en servidor VPS.'
  },
  {
    value: 'commerce',
    label: 'E-commerce & Reservas',
    description:
      'Tienda en línea o plataforma inmobiliaria, integración de pasarelas de pago y reservas.'
  },
  {
    value: 'custom',
    label: 'Desarrollo App Custom',
    description:
      'Software a medida, aplicaciones móviles e integración de modelos de IA / APIs.'
  }
] as const

const priceCatalog = {
  mvp: {
    USA: { min: 400, max: 800, currency: 'USD' },
    ESP: { min: 300, max: 600, currency: 'EUR' },
    MEX: { min: 5000, max: 9000, currency: 'MXN' },
    CUB: { min: 50, max: 150, currency: 'USD' }
  },
  uxui: {
    USA: { min: 800, max: 1500, currency: 'USD' },
    ESP: { min: 600, max: 1200, currency: 'EUR' },
    MEX: { min: 10000, max: 20000, currency: 'MXN' },
    CUB: { min: 150, max: 500, currency: 'USD' }
  },
  brand: {
    USA: { min: 350, max: 700, currency: 'USD' },
    ESP: { min: 300, max: 500, currency: 'EUR' },
    MEX: { min: 4500, max: 8500, currency: 'MXN' },
    CUB: { min: 150, max: 300, currency: 'USD' }
  },
  web: {
    USA: { min: 800, max: 1800, currency: 'USD' },
    ESP: { min: 600, max: 1400, currency: 'EUR' },
    MEX: { min: 8000, max: 18000, currency: 'MXN' },
    CUB: { min: 300, max: 500, currency: 'USD' }
  },
  commerce: {
    USA: { min: 1500, max: 3000, currency: 'USD' },
    ESP: { min: 1200, max: 2500, currency: 'EUR' },
    MEX: { min: 18000, max: 38000, currency: 'MXN' },
    CUB: { min: 500, max: 1200, currency: 'USD' }
  },
  custom: {
    USA: { min: 2500, max: 6000, currency: 'USD' },
    ESP: { min: 2000, max: 5000, currency: 'EUR' },
    MEX: { min: 30000, max: 75000, currency: 'MXN' },
    CUB: { min: 1000, max: 3000, currency: 'USD' }
  }
} as const

const formatCurrency = (value: number, currency: 'USD' | 'EUR' | 'MXN') => {
  const formatted = new Intl.NumberFormat('en-US').format(value)

  if (currency === 'USD') return `$${formatted}`
  if (currency === 'EUR') return `€${formatted}`
  return `$${formatted}`
}

const formatRangeLabel = (
  country: 'USA' | 'ESP' | 'MEX' | 'CUB',
  service: keyof typeof priceCatalog
) => {
  const { min, max, currency } = priceCatalog[service][country]
  return `${currency} ${formatCurrency(min, currency)} — ${formatCurrency(max, currency)}`
}

export function ServicesPage() {
  const [selectedCountry, setSelectedCountry] = useState<
    'USA' | 'ESP' | 'MEX' | 'CUB'
  >('USA')
  const [selectedService, setSelectedService] =
    useState<keyof typeof priceCatalog>('web')

  const estimatedRange = useMemo(
    () => formatRangeLabel(selectedCountry, selectedService),
    [selectedCountry, selectedService]
  )

  const selectedServiceInfo =
    serviceOptions.find((service) => service.value === selectedService) ??
    serviceOptions[0]

  return (
    <section className='min-h-screen bg-background text-text-primary'>
      <section className='px-4 py-22 sm:py-28'>
        <div className='max-w-primary-max-width mx-auto'>
          <div className='mt-16 max-w-4xl mx-auto'>
            <span className='block text-xs uppercase tracking-[0.2em] text-text-secondary font-bold text-center'>
              Minimizamos riesgo, maximizamos impacto
            </span>
            <h1 className='mt-5 text-6xl sm:text-7xl md:text-8xl font-heading font-bold text-primary text-center'>
              Servicios.
            </h1>
            <p className='mt-6 mx-auto max-w-3xl text-lg sm:text-xl md:text-2xl text-text-secondary text-center'>
              Soluciones digitales completas desde el análisis de mercado hasta
              el despliegue en producción con foco absoluto en ROI.
            </p>
          </div>
        </div>
      </section>

      <section className='bg-linear-to-b from-background to-secondary-background px-4 py-16 sm:py-24 rounded-t-4xl'>
        <div className='max-w-primary-max-width mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((service) => (
              <article
                key={service.title}
                className='group border border-border rounded-3xl overflow-hidden bg-on-primary shadow-sm hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300'
              >
                <div className='relative h-48 overflow-hidden bg-secondary-background'>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className='object-cover group-hover:scale-105 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-linear-to-t from-text-primary/60 to-transparent'></div>
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-primary font-heading min-h-17.5'>
                    {service.title}
                  </h3>
                  <p className='mt-3 text-sm text-text-secondary'>
                    {service.description}
                  </p>
                  <div className='mt-6 flex flex-wrap gap-2'>
                    {service.chips.map((chip) => (
                      <span
                        key={chip}
                        className='rounded-full border border-primary text-primary px-3 py-1 text-2xs font-bold uppercase tracking-wide bg-secondary-background/30'
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-background px-4 py-20 sm:py-28 rounded-t-4xl -mt-5'>
        <div className='max-w-primary-max-width mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div>
              <h2 className='text-3xl sm:text-5xl font-heading font-bold text-text-primary'>
                Calculadora de <HighlightText>Presupuesto</HighlightText>.
              </h2>
              <p className='mt-5 text-sm sm:text-lg text-text-secondary'>
                Entendemos que cada proyecto es único. Usa nuestra herramienta
                para obtener un rango estimado basado en tus necesidades y
                mercado objetivo.
              </p>
            </div>

            <div className='bg-on-primary rounded-4xl p-8 sm:p-12 border border-border flex flex-col justify-center'>
              <div className='mb-7'>
                <label className='block text-xs font-bold uppercase text-text-tertiary'>
                  Selecciona País de Operación
                </label>
                <div className='mt-3 flex flex-wrap gap-2'>
                  {countryOptions.map((country) => (
                    <button
                      key={country.value}
                      type='button'
                      aria-pressed={selectedCountry === country.value}
                      onClick={() => setSelectedCountry(country.value)}
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                        selectedCountry === country.value
                          ? 'border-primary bg-primary text-on-primary'
                          : 'border-border text-text-secondary hover:bg-primary hover:text-on-primary'
                      }`}
                    >
                      {country.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className='mb-7'>
                <label className='block text-xs font-bold uppercase text-text-tertiary'>
                  Tipo de Servicio o Pack
                </label>
                <select
                  value={selectedService}
                  onChange={(event) =>
                    setSelectedService(
                      event.target.value as keyof typeof priceCatalog
                    )
                  }
                  className='mt-3 block w-full border border-border rounded-2xl bg-secondary-background px-4 py-4 text-sm text-text-primary outline-none focus:border-primary'
                >
                  {serviceOptions.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className='mb-7 rounded-2xl bg-primary p-5 text-on-primary'>
                <span className='text-2xs font-bold uppercase tracking-[0.2em]'>
                  Rango estimado
                </span>
                <div className='mt-2 text-2xl sm:text-3xl font-bold'>
                  {estimatedRange}
                </div>
              </div>

              <div className='mt-2 rounded-2xl border border-border bg-secondary-background/60 p-4'>
                <p className='text-xs font-bold uppercase tracking-wide text-text-tertiary'>
                  Descripción del servicio seleccionado
                </p>
                <p className='mt-2 text-sm text-text-secondary'>
                  {selectedServiceInfo.description}
                </p>
              </div>

              <p className='mt-4 text-sm text-text-secondary'>
                {
                  'Nota aclaratoria del sistema: "El rango de precio mostrado es un estimado de referencia basado en casos y proyectos previos realizados por la Agencia. El valor final del proyecto dependerá de las necesidades específicas y el alcance real de tu negocio, pudiendo situarse en el valor mínimo, promedio, máximo o ajustarse según requerimientos personalizados."'
                }
              </p>

              <div className='pt-4 mt-4 border-t border-t-border flex items-center gap-2'>
                <ExclamationIcon className='text-text-tertiary' />
                <span className='text-sm text-text-tertiary font-medium'>
                  Incluye despliegue básico y 1 mes de soporte técnico.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-linear-to-b from-complementary/30 to-secondary-background px-4 py-20 sm:py-30 rounded-4xl'>
        <div className='max-w-primary-max-width mx-auto'>
          <h2 className='text-3xl sm:text-4xl font-heading font-bold text-text-primary text-center'>
            ¿Por Qué <HighlightText>Elegirnos?</HighlightText>
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20'>
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className='group rounded-4xl p-6 sm:p-10 bg-on-primary border border-border transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'
              >
                <h3 className='text-lg font-semibold text-text-primary font-heading'>
                  {reason.title}
                </h3>
                <p className='mt-3 text-sm text-text-secondary font-medium'>
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-background py-20 sm:py-28'>
        <div className='max-w-primary-max-width mx-auto px-4'>
          <div className='flex flex-col gap-8'>
            <h2 className='text-3xl sm:text-4xl font-heading font-bold text-text-primary'>
              Nuestro <HighlightText>Stack Tecnológico</HighlightText>
            </h2>
          </div>
        </div>
        <TechnologiesCarrousel isBackground />
      </section>

      <ProjectNextStep
        showCases={true}
        title='¿Listo para llevar tu idea al mercado?'
        description='Agenda una asesoría gratis de 15-30 minutos con un especialista y validemos tu próximo gran proyecto.'
        linkText='Iniciar Proyecto y Agendar Llamada'
      />
    </section>
  )
}

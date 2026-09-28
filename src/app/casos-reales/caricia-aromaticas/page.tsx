import { HighlightText } from '@/components/common/HighlighText'
import {
  CubeIcon,
  StadisticsIcon,
  StarsIcon,
  SuitcaseIcon,
  ThunderIcon,
  UsersIcon
} from '@/components/common/Icons'
import { CaseHero } from '@/components/sections/CaseHero'
import { ProjectNextStep } from '@/components/sections/ProjectNextStep'

const aditionalInfo = [
  {
    id: 0,
    title: 'Recuperación Digital',
    description: 'ROI Directo en Ventas'
  },
  {
    id: 1,
    title: 'UX/UI Optimizada',
    description: 'Basada en Beneficios'
  },
  {
    id: 2,
    title: 'Multi-canal B2B/B2C',
    description: 'Escala Emprendedores'
  }
]

const content = [
  {
    id: 1,
    title: 'Fuga de Clientes en Checkout',
    description:
      'Flujo de pago complejo que generaba abandono masivo de carritos listos para comprar.'
  },
  {
    id: 2,
    title: 'Catálogo Confuso',
    description:
      'Búsqueda centrada en nombres de aceites en lugar de necesidades de bienestar del usuario.'
  },
  {
    id: 3,
    title: 'Canal Online Rezagado',
    description:
      'El sitio web no transmitía la misma confianza ni exclusividad que las tiendas físicas.'
  }
]

const content2 = [
  {
    id: 0,
    title: 'Checkout',
    description: 'Fuga de Clientes',
    details:
      'Rediseño del embudo con compras rápidas (One-Click) en WooCommerce para reducir fricción mental.'
  },
  {
    id: 1,
    title: 'Arquitectura',
    description: 'Catálogo Confuso',
    details:
      'Navegación intuitiva por beneficios: Sueño, Estrés, Dolor Muscular, Enfoque y Respiración.'
  },
  {
    id: 2,
    title: 'Estrategia',
    description: 'Canal Rezagado',
    details:
      'Integración de bazares digitales, programa de marca blanca B2B y captación de influencers.'
  }
]

const content3 = [
  {
    id: 1,
    icon: <StarsIcon className='size-8' />,
    title: 'Comprar por Beneficio',
    description:
      'Filtros emocionales que ayudan al cliente a encontrar el aceite exacto para su síntoma.'
  },
  {
    id: 2,
    icon: <CubeIcon className='size-8' />,
    title: 'Kits & Combos',
    description:
      'Estrategia de kits 3x2 y packs de regalo que aumentaron el ticket promedio en un 40%.'
  },
  {
    id: 3,
    icon: <ThunderIcon className='size-8' />,
    title: 'Checkout Fast-Lane',
    description:
      'Eliminación de campos innecesarios y flujos de pago nativos para móvil sin registros obligatorios.'
  },
  {
    id: 4,
    icon: <SuitcaseIcon className='size-8' />,
    title: 'Módulo B2B / Influencers',
    description:
      'Portal dedicado para captación de marca blanca y solicitudes de influencers automatizadas.'
  }
]

const content4 = [
  {
    id: 0,
    title: 'Retail',
    description: 'Igualado a físico'
  },
  {
    id: 1,
    title: '+B2B',
    description: 'Captación socios'
  },
  {
    id: 2,
    title: '+40%',
    description: 'Ticket Promedio'
  }
]

const content5 = [
  {
    id: 0,
    title: '6 Semanas',
    description: 'Tiempo de Rediseño Total'
  },
  {
    id: 1,
    title: '+280%',
    description: 'Aumento Conversión por Sesión'
  },
  {
    id: 2,
    title: 'ROI Digital',
    description: 'Equivalencia Lograda Retail'
  }
]

export default function CariciaAromaticasPage() {
  return (
    <>
      <CaseHero
        name='Caricia Aromáticas'
        description='De canal e-commerce estancado a motor de ventas equivalente al retail físico: rediseño estratégico de conversión.'
        aditionalInfo={aditionalInfo}
      />

      <section className='py-32 bg-linear-to-b from-complementary/20 to-secondary-background rounded-4xl px-4'>
        <div className='max-w-primary-max-width mx-auto'>
          <div className='grid lg:grid-cols-2 gap-20 items-start'>
            <div className='space-y-8'>
              <h2 className='text-2xl sm:text-4xl text-text-primary font-heading font-bold'>
                El <HighlightText>Reto</HighlightText> de la Aromaterapia Online
              </h2>
              <p className='text-text-secondary text-xl mt-3 sm:mt-6'>
                Un negocio consolidado en ventas físicas cuya presencia online
                era nula, estando al borde de descartar por completo la
                estrategia e-commerce por falta de resultados.
              </p>
              <div className='space-y-4'>
                {content.map((item) => (
                  <article
                    key={item.id}
                    className='p-6 bg-on-primary rounded-3xl border border-gray-100 flex items-start gap-6 hover-lift shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'
                  >
                    <div className='w-12 h-12 rounded-2xl bg-secondary-background text-primary flex items-center justify-center shrink-0 text-xl font-bold'>
                      {item.id}
                    </div>
                    <div>
                      <h4 className='font-semibold text-lg font-heading'>
                        {item.title}
                      </h4>
                      <p className='text-text-secondary mt-2'>
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className='grid gap-6'>
              <div className=' aspect-16/10 rounded-[3rem] wireframe-line flex flex-col items-center justify-center text-center  '>
                <p className='text-xs font-mono uppercase text-gray-300 tracking-[0.2em]'>
                  E-commerce Abandonment Analysis
                </p>
              </div>
              <div className='p-12 bg-primary text-on-primary rounded-4xl space-y-6  '>
                <h3 className='text-on-primary text-3xl font-semibold font-heading'>
                  La Decisión
                </h3>
                <p className='text-on-primary'>
                  En lugar de cerrar, el cliente optó por un rediseño total
                  centrado en <strong>conversión psicológica</strong> y
                  optimización técnica extrema.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-32 bg-white  '>
        <div className='max-w-7xl mx-auto px-6 text-center space-y-12'>
          <div className='space-y-4 max-w-3xl mx-auto'>
            <h2 className='text-2xl sm:text-4xl text-text-primary font-heading font-bold'>
              Estrategia de Rescate:{' '}
              <HighlightText>ROI Inmediato</HighlightText>
            </h2>
            <p className='italic text-text-secondary text-2xl text-center mt-6 max-w-quaternary-max-width mx-auto'>
              &quot;No se trataba de lanzar más marketing. Se trataba de
              rediseñar la experiencia de compra.&quot;
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-0 border border-gray-100 rounded-[3rem] overflow-hidden bg-secondary-background'>
            {content2.map((item) => (
              <div
                className='p-12 border-b md:border-b-0 md:border-r border-gray-100 text-left space-y-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(15,23,42,0.06)]'
                key={item.id}
              >
                <div className='text-xs font-semibold font-heading uppercase tracking-[0.2em] text-text-tertiary'>
                  {item.title}
                </div>
                <h4 className='text-xl font-semibold text-text-primary'>
                  {item.description}
                </h4>
                <p className='text-sm text-text-secondary'>{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-32 bg-secondary-background rounded-t-4xl px-4'>
        <div className='max-w-primary-max-width mx-auto'>
          <div className='mb-20 space-y-4 text-center md:text-left'>
            <h2 className='text-2xl sm:text-4xl text-text-primary font-heading font-bold'>
              Funcionalidades <HighlightText>Clave de Conversión</HighlightText>
            </h2>
            <p className='text-text-secondary text-xl mt-3 sm:mt-6'>
              Reestructuración técnica para maximizar cada visita al sitio.
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {content3.map((item) => (
              <div
                key={item.id}
                className='bg-white p-10 rounded-3xl border border-gray-100 space-y-8 group hover:border-primary transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(15,23,42,0.08)]'
              >
                <span className='p-3 w-fit rounded-2xl bg-secondary-background text-primary flex items-center justify-center shrink-0 text-xl font-bold'>
                  {item.icon}
                </span>
                <div className='space-y-4'>
                  <h4 className='font-semibold font-heading'>{item.title}</h4>
                  <p className='text-sm text-text-secondary'>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-32 bg-background  rounded-4xl -mt-5'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid lg:grid-cols-2 gap-20 items-center'>
            <div className='order-2 lg:order-1'>
              <div className='grid grid-cols-2 gap-4'>
                <div className=' aspect-square rounded-4xl wireframe-line  '></div>
                <div className=' aspect-square rounded-4xl bg-secondary-background border-none flex items-center justify-center  '>
                  <UsersIcon className='text-primary size-14' />
                </div>
                <div className=' aspect-square rounded-4xl bg-primary border-none flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.14)]'>
                  <StadisticsIcon className='text-on-primary size-14' />
                </div>
                <div className=' aspect-square rounded-4xl wireframe-line transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'></div>
              </div>
            </div>
            <div className='order-1 lg:order-2 space-y-8'>
              <h2 className='text-2xl sm:text-4xl text-text-primary font-heading font-bold'>
                Ecosistema <HighlightText>Multi-modelo:</HighlightText> B2C +
                B2B
              </h2>
              <p className='text-lg text-text-secondary'>
                La tienda dejó de ser un simple catálogo para convertirse en una
                plataforma de generación de negocio recurrente tanto para
                cliente final como para socios mayoristas.
              </p>
              <div className='grid grid-cols-3 gap-8 pt-8 border-t border-secondary-background'>
                {content4.map((item) => (
                  <div key={item.id}>
                    <span className='block text-primary text-3xl font-semibold font-heading tracking-tighter'>
                      {item.title}
                    </span>
                    <p className='text-2xs font-bold uppercase tracking-widest text-gray-400'>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-40 bg-secondary-background -mt-5 relative -z-10'>
        <div className='max-w-5xl mx-auto px-6 text-center space-y-12'>
          <p className='italic text-text-secondary text-2xl md:text-4xl text-center mt-6 max-w-quaternary-max-width mx-auto font-heading'>
            &quot;No era un problema de tráfico. Era un problema de fricción.
            Cada paso innecesario en el checkout era dinero perdido. Rediseñamos
            para vender, no para decorar.&quot;
          </p>
          <div className='flex justify-center gap-12 pt-12 border-t border-primary'>
            <div className='flex flex-col items-center gap-3'>
              <span className='text-xs font-bold uppercase tracking-widest text-text-tertiary'>
                Diseño basado en datos
              </span>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <span className='text-xs font-bold uppercase tracking-widest text-text-tertiary'>
                Enfocado en la conversión
              </span>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <span className='text-xs font-bold uppercase tracking-widest text-text-tertiary'>
                Flujo mobile-first
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className='py-32 bg-background  rounded-t-4xl -mt-5'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid md:grid-cols-3 gap-12'>
            {content5.map((item) => (
              <div
                key={item.id}
                className='text-center space-y-4 p-12 border border-border rounded-[3rem] hover:border-primary transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'
              >
                <h4 className='text-primary text-5xl font-bold tracking-tighter'>
                  {item.title}
                </h4>
                <div className='h-px w-12 bg-gray-200 mx-auto'></div>
                <p className='text-xs font-bold uppercase tracking-widest text-text-secondary'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-32  bg-tertiary-background text-on-primary  '>
        <div className='max-w-primary-max-width mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center'>
          <div className='space-y-8'>
            <h2 className='text-2xl sm:text-4xl text-on-primary font-heading font-bold'>
              Stack Tecnológico: Optimización sobre Estándares
            </h2>
            <p className='text-lg text-on-primary'>
              Este caso demuestra que la excelencia en UX/UI aplicada sobre
              herramientas conocidas genera ROI inmediato. No cambiamos de
              plataforma, cambiamos la forma en que la plataforma se comunica
              con el cliente.
            </p>
            <div className='flex flex-wrap gap-4 pt-4'>
              <div className='px-6 py-2 bg-primary/20 border border-white/10 rounded-full text-2xs font-bold uppercase tracking-widest'>
                WordPress
              </div>
              <div className='px-6 py-2 bg-primary/20 border border-white/10 rounded-full text-2xs font-bold uppercase tracking-widest'>
                WooCommerce
              </div>
              <div className='px-6 py-2 bg-primary/20 border border-white/10 rounded-full text-2xs font-bold uppercase tracking-widest'>
                Stripe API
              </div>
              <div className='px-6 py-2 bg-primary/20 border border-white/10 rounded-full text-2xs font-bold uppercase tracking-widest'>
                Redis Cache
              </div>
            </div>
          </div>
          <div className='relative flex justify-center'>
            <div className='w-full aspect-video rounded-[3rem] bg-primary/20 border-white/10 relative z-10 flex items-center justify-center  '></div>
          </div>
        </div>
      </section>

      <ProjectNextStep
        title='¿Tu e-commerce estancado necesita rediseño?'
        description='Analizamos tu tasa de conversión y aplicamos optimizaciones enfocadas en ROI directo.'
        linkText='Iniciar Proyecto y Agendar Llamada'
      />
    </>
  )
}

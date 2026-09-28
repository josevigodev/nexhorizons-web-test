import { HighlightText } from '../common/HighlighText'
import {
  CheckedIcon,
  ReloadIcon,
  ThunderIcon,
  UsersIcon
} from '../common/Icons'
import { Contact } from './Contact'
import { FAQ } from './FAQ'
import { ProjectNextStep } from './ProjectNextStep'

const reasons = [
  {
    title: '9 Casos Reales',
    description:
      'Ingresos comprobados y validación en mercado local e internacional.',
    icon: <CheckedIcon />
  },
  {
    title: 'Equipo Senior',
    description:
      'Ingenieros con +10 años de experiencia en desarrollo de productos digitales.',
    icon: <UsersIcon className='size-5' />
  },
  {
    title: 'Enfoque MVP',
    description:
      'Metodología ágil que evita el desperdicio de capital en funciones irrelevantes.',
    icon: <ThunderIcon className='size-5' />
  },
  {
    title: 'Garantía de Iteración',
    description:
      'Si los supuestos de negocio fallan, iteramos la estrategia sin costo adicional.',
    icon: <ReloadIcon className='size-5' />
  }
]

const steps = [
  {
    number: '1',
    title: 'Envía tu Consulta',
    description: 'Describe tu idea o duda en el formulario de arriba.'
  },
  {
    number: '2',
    title: 'Análisis Inicial (24h)',
    description:
      'Nuestro equipo revisa tus requerimientos y prepara preguntas clave.'
  },
  {
    number: '3',
    title: 'Llamada Estratégica',
    description:
      'Sesión de 15-30 min para validar viabilidad técnica y presupuesto.'
  }
]

export function ContactPage() {
  return (
    <>
      <section className='bg-background px-4 py-22 sm:py-28 mt-20'>
        <div className='max-w-primary-max-width mx-auto flex flex-col items-center gap-14 text-center'>
          <span className='block text-xs uppercase tracking-[0.2em] text-text-secondary font-bold'>
            Conecta con especialistas
          </span>
          <h1 className='text-6xl sm:text-7xl md:text-8xl font-heading font-bold text-primary'>
            Contacto.
          </h1>
          <p className='mx-auto max-w-3xl text-lg sm:text-xl md:text-2xl text-text-secondary'>
            ¿Tienes una idea? Cuéntanos y te ayudaremos a llevarla al mercado.
            Estamos aquí para evacuar tus dudas.
          </p>
        </div>
      </section>

      <Contact />
      <FAQ />

      <section className='bg-background px-4 py-20 sm:py-28'>
        <div className='max-w-primary-max-width mx-auto'>
          <h2 className='text-3xl sm:text-4xl font-heading font-bold text-text-primary text-center'>
            ¿Por Qué <HighlightText>Confiar</HighlightText> en{' '}
            <HighlightText>NexHorizon?</HighlightText>
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12'>
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className='bg-on-primary p-8 text-center'
              >
                <span className='mx-auto h-12 w-12 rounded-full bg-secondary-background text-primary flex items-center justify-center'>
                  {reason.icon}
                </span>
                <h3 className='mt-5 text-lg font-heading font-semibold text-text-primary'>
                  {reason.title}
                </h3>
                <p className='mt-3 text-sm text-text-secondary leading-6'>
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-linear-to-b from-secondary-background to-complementary/30 px-4 py-20 sm:py-28 rounded-t-4xl'>
        <div className='max-w-primary-max-width mx-auto'>
          <h2 className='text-3xl sm:text-4xl font-heading font-bold text-text-primary text-center'>
            <HighlightText>Próximos</HighlightText> Pasos
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
            {steps.map((step) => (
              <article
                key={step.number}
                className='group rounded-4xl border border-border bg-on-primary p-8 text-center transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'
              >
                <span className='flex h-16 w-16 rounded-full bg-primary text-on-primary items-center justify-center font-heading font-bold text-2xl mx-auto transition-all duration-300 group-hover:shadow-[0_12px_24px_rgba(15,23,42,0.12)]'>
                  {step.number}
                </span>
                <h3 className='mt-6 text-xl font-heading font-semibold text-text-primary'>
                  {step.title}
                </h3>
                <p className='mt-3 text-sm text-text-secondary leading-6'>
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProjectNextStep
        showCases={false}
        title='¿Prefieres una llamada directa?'
        description='Agenda una asesoría gratis de 15-30 minutos con un especialista
            ahora mismo.'
        linkText='Agendar Asesoría Gratis'
      />
    </>
  )
}

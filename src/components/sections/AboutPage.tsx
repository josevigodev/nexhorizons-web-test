import Link from 'next/link'
import { HighlightText } from '../common/HighlighText'
import {
  CheckedIcon,
  GlobeIcon,
  HandShakeIcon,
  RocketIcon,
  SettingsIcon,
  StadisticsIcon,
  StarIcon
} from '../common/Icons'
import { ProjectNextStep } from './ProjectNextStep'

const differences = [
  {
    title: 'Socios, No Proveedores',
    description:
      'No vendemos horas de desarrollo. Nos comprometemos con el éxito de tu producto. Tu ganancia es nuestra métrica fundamental de éxito.',
    icon: <HandShakeIcon className='size-6' />
  },
  {
    title: 'Casos Reales, No Portfolios',
    description:
      '9 productos activos en mercado generando ingresos verificables. No mostramos demostraciones teóricas, mostramos clientes pagando hoy.',
    icon: <StadisticsIcon className='size-6' />
  },
  {
    title: 'De la Idea a la Operación',
    description:
      'Desde validación MVP hasta optimización operativa. No abandonamos el proyecto en el lanzamiento; evolucionamos y escalamos contigo.',
    icon: <RocketIcon className='size-6' />
  }
]

const philosophy = [
  <>
    En NexHorizon creemos que la tecnología debe servir a un único propósito:{' '}
    <strong>generar valor real y sostenible para tu negocio.</strong>
  </>,
  'Hemos aprendido de 9 productos en mercado que lo que importa no es la tecnología más avanzada, sino la más alineada con las necesidades del cliente y la capacidad de mercado de pago.',
  <>
    Nos especializamos en esa zona incómoda entre la idea brillante y el
    producto viable:{' '}
    <strong>
      el MVP pragmático que valida supuestos sin arruinar el presupuesto.
    </strong>
  </>,
  'Cuando lanzamos, no nos vamos. Escalamos contigo. Porque tu éxito operativo es nuestro indicador de impacto real más importante.'
]

const journey = [
  {
    phase: 'Aprendizajes Iniciales',
    description:
      'Empezamos validando si la tecnología podía resolver problemas reales de mercado, no teóricos. Construyendo bases sólidas para lo que vendría.',
    icon: <CheckedIcon />
  },
  {
    phase: 'Primeras Victorias',
    description:
      'Cuba Negocios fue nuestro primer gran caso: 12 semanas para lograr 180 negocios pagando. Probó que el MVP estratégico funciona.',
    icon: <StarIcon />
  },
  {
    phase: 'Evolución Operativa',
    description:
      'Aprendimos que lanzar es solo el inicio. El verdadero reto es escalar sin perder eficiencia. Nacieron nuestros modelos de Fase 2 y automatización.',
    icon: <SettingsIcon />
  },
  {
    phase: 'Asociación Global',
    description:
      'Hoy trabajamos con clientes en CDMX, Cuba, México y globalmente. Cada nuevo caso valida más nuestra metodología de asociación estratégica.',
    icon: <GlobeIcon />
  }
]

const stats = [
  {
    value: '9',
    label: 'Productos en Mercado',
    detail: 'Generando ingresos verificables'
  },
  {
    value: '180+',
    label: 'Clientes Pagando',
    detail: 'En ecosistemas NexHorizon'
  },
  {
    value: '$2M+',
    label: 'en Transacciones',
    detail: 'Procesadas anualmente'
  },
  {
    value: '3',
    label: 'Países con Sede',
    detail: 'Presencia física en CDMX y Cuba'
  }
]

const team = [
  {
    role: 'CEO / Socio Fundador',
    title: 'CEO & Strategic Advisor',
    summary:
      '15+ años en digital product strategy y startup scaling. Especialista en validación de mercado.',
    tags: ['MVP Validation', 'Market Fit']
  },
  {
    role: 'Tech Lead',
    title: 'Software Architect',
    summary:
      '10+ años en backend architecture and cloud infrastructure. Experto en sistemas escalables.',
    tags: ['Node.js', 'AWS Cloud']
  },
  {
    role: 'UX Director',
    title: 'Experience & Brand Lead',
    summary:
      '8+ años en UX research, design systems y optimización de conversión centrada en el usuario.',
    tags: ['User Flows', 'Design Systems']
  },
  {
    role: 'Operations Manager',
    title: 'Delivery Lead',
    summary:
      '7+ años in agile project management y escalamiento de equipos de alto rendimiento.',
    tags: ['Agile Ops', 'Delivery Success']
  }
]

const values = [
  {
    title: 'Pragmatismo',
    description:
      'La mejor tecnología es la que funciona. La mejor solución es la que el mercado valida con ventas.'
  },
  {
    title: 'Transparencia',
    description:
      'Sin sorpresas presupuestarias. Sin funciones inútiles. Compromiso total hasta el lanzamiento.'
  },
  {
    title: 'Impacto Real',
    description:
      'Medimos el éxito en dinero: ingresos generados, costos reducidos y clientes reales pagando.'
  },
  {
    title: 'Partnership',
    description:
      'Tu crecimiento es el nuestro. Nos comprometemos a evolucionar contigo a largo plazo.'
  }
]

export function AboutPage() {
  return (
    <>
      <section className='bg-background px-4 py-22 sm:py-28 mt-20'>
        <div className='max-w-primary-max-width mx-auto'>
          <span className='block text-xs uppercase tracking-[0.2em] text-text-secondary font-bold text-center'>
            Socios Estratégicos, No Proveedores
          </span>
          <h1 className='mt-5 text-6xl sm:text-7xl md:text-8xl text-center font-heading font-bold text-text-primary'>
            Más que software. <br />
            <HighlightText>Resultados reales.</HighlightText>
          </h1>
          <p className='mt-6 mx-auto max-w-3xl text-center text-lg sm:text-xl md:text-2xl text-text-secondary'>
            No somos una agencia de software convencional. Somos tus socios
            tecnológicos dedicados a validar ideas, generar ingresos y escalar
            operaciones.
          </p>
        </div>
      </section>

      <section className='bg-linear-to-b  from-complementary/40 to-secondary-background px-4 py-20 sm:py-28 rounded-t-4xl -mt-5'>
        <div className='max-w-primary-max-width mx-auto'>
          <h2 className='text-3xl sm:text-4xl font-heading font-bold text-text-primary'>
            ¿Qué Nos Hace <HighlightText>Diferentes?</HighlightText>
          </h2>
          <p className='mt-4 text-lg text-text-secondary'>
            Nuestra identidad se basa en el impacto directo en tu balance
            financiero.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-20'>
            {differences.map((item) => (
              <article
                key={item.title}
                className='group rounded-4xl border border-border bg-on-primary p-8 shadow-sm transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'
              >
                <div className='flex items-center justify-center h-16 w-16 rounded-2xl bg-secondary-background text-primary transition-all duration-300 group-hover:shadow-[0_12px_24px_rgba(15,23,42,0.08)]'>
                  {item.icon}
                </div>
                <h3 className='mt-6 text-xl font-heading font-semibold text-text-primary'>
                  {item.title}
                </h3>
                <p className='mt-3 text-sm text-text-secondary leading-6'>
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-linear-to-b from-secondary-background to-background px-4 py-20 sm:py-28'>
        <div className='max-w-primary-max-width mx-auto flex flex-col sm:flex-row gap-10'>
          <h2 className='text-3xl sm:text-4xl font-heading font-bold text-text-primary shrink-0'>
            Nuestra <HighlightText>Filosofía</HighlightText>
          </h2>
          <div className='grid grid-cols-1 gap-5'>
            {philosophy.map((sentence, index) => (
              <div key={index} className='border-l-4 border-primary pl-4'>
                <p className='text-lg text-text-secondary italic leading-8'>
                  “{sentence}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-linear-to-b from-complementary/30 to-secondary-background px-4 py-20 sm:py-28 pb-50 sm:pb-50 -mt-5 rounded-t-4xl'>
        <div className='max-w-primary-max-width mx-auto'>
          <div className='mb-12 text-center'>
            <h2 className='text-3xl sm:text-4xl font-heading font-bold text-text-primary'>
              Nuestro Camino
            </h2>
          </div>

          <div className='relative mt-30'>
            <div className='hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-primary'></div>
            <div className='hidden md:flex flex-col justify-center gap-10'>
              {journey.map((step, index) => (
                <article
                  key={step.phase}
                  className='flex flex-col md:flex-row items-center gap-12 md:gap-0'
                >
                  <div className='md:w-1/2 md:pr-24 md:text-right'>
                    {index % 2 === 0 && (
                      <div>
                        <h4 className='text-2xl font-semibold font-heading'>
                          {step.phase}
                        </h4>
                        <p className='mt-4 text-text-secondary'>
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className='w-12 h-12 rounded-full bg-primary border-4 border-white shadow-lg z-20 flex items-center justify-center text-white shrink-0'>
                    {step.icon && step.icon}
                  </div>
                  <div className='md:w-1/2 md:pl-24'>
                    {index % 2 !== 0 && (
                      <div>
                        <h4 className='text-2xl font-semibold font-heading'>
                          {step.phase}
                        </h4>
                        <p className='mt-4 text-text-secondary'>
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
            <div className='flex md:hidden flex-col justify-center gap-20'>
              {journey.map((step) => (
                <article
                  key={step.phase}
                  className='flex flex-col items-center gap-4'
                >
                  <div className='w-12 h-12 rounded-full bg-black border-4 border-white shadow-lg z-20 flex items-center justify-center text-white shrink-0'>
                    {step.icon && step.icon}
                  </div>
                  <h4 className='text-center text-2xl font-semibold font-heading'>
                    {step.phase}
                  </h4>
                  <p className='text-center text-text-secondary'>
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='relative bg-secondary-background px-4 pb-20 md:pb-0'>
        <div className='max-w-primary-max-width mx-auto'>
          <div className='md:absolute -bottom-20 left-0 right-0 mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 max-w-secondary-max-width'>
            {stats.map((stat) => (
              <article
                key={stat.label}
                className='rounded-4xl border border-border bg-on-primary p-8 text-center'
              >
                <div className='text-5xl font-heading font-bold text-primary'>
                  {stat.value}
                </div>
                <div className='mt-3 text-sm font-semibold font-heading uppercase text-text-primary'>
                  {stat.label}
                </div>
                <div className='mt-2 text-xs text-text-secondary'>
                  {stat.detail}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-background px-4 py-30 sm:py-38 rounded-4xl'>
        <div className='max-w-primary-max-width mx-auto'>
          <h2 className='text-3xl sm:text-4xl font-heading font-bold text-text-primary'>
            Nuestro <HighlightText>Equipo</HighlightText>
          </h2>
          <p className='mt-4 text-lg text-text-secondary max-w-2xl'>
            Socios estratégicos con experiencia comprobada en construcción de
            productos digitales de alto impacto. No somos freelancers, somos
            asociados comprometidos con el éxito de tu idea.
          </p>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20'>
            {team.map((person) => (
              <article
                key={person.role}
                className='group p-10 bg-white rounded-[3rem] border border-gray-100 flex flex-col items-center text-center space-y-8 transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'
              >
                <div className='w-32 h-32 rounded-full bg-gray-100 border border-gray-200 transition-all duration-300 group-hover:shadow-[0_12px_24px_rgba(15,23,42,0.08)]'></div>
                <div className='space-y-4'>
                  <div>
                    <h4 className='font-semibold text-lg font-heading'>
                      {person.title}
                    </h4>
                    <p className='font-bold uppercase tracking-widest text-text-tertiary text-sm'>
                      {person.role}
                    </p>
                  </div>
                  <p className='text-md text-text-secondary'>
                    {person.summary}
                  </p>
                  <div className='flex flex-wrap justify-center gap-2 pt-2'>
                    {person.tags.map((tag) => (
                      <span
                        key={tag}
                        className='px-3 py-1 bg-secondary-background/30 border border-primary text-primary text-xs font-medium rounded-full'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='relative bg-linear-to-b from-complementary/30 to-secondary-background px-4 py-20 pb-30 sm:py-28 sm:pb-38 -mt-10'>
        <div className='max-w-primary-max-width mx-auto'>
          <h2 className='text-3xl sm:text-4xl font-heading font-bold text-text-primary text-center'>
            Nuestros <HighlightText>Valores</HighlightText>
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12'>
            {values.map((value) => (
              <article
                key={value.title}
                className='rounded-4xl p-6 bg-on-primary border border-border hover:border-primary hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)] transition-all duration-300'
              >
                <h3 className='text-xl font-heading font-semibold text-text-primary'>
                  {value.title}
                </h3>
                <p className='mt-4 text-sm text-text-secondary leading-6'>
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProjectNextStep
        showCases={false}
        title='¿Listo para trabajar con socios reales?'
        description='No buscamos proyectos de corto plazo. Buscamos ideas con potencial real que necesiten partners estratégicos comprometidos.'
        linkText='Iniciar Proyecto y Agendar Llamada'
      />
    </>
  )
}

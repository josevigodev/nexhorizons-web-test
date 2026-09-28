import FirebaseIcon from '@/assets/icons/firebase.svg'
import NestjsIcon from '@/assets/icons/nestjs.svg'
import PostgreSQLIcon from '@/assets/icons/postgresql.svg'
import FlutterIcon from '@/assets/icons/flutter.svg'
import HostingerIcon from '@/assets/icons/hostinger-icon.svg'
import Image from 'next/image'

const content = [
  {
    title: 'Flutter',
    description:
      'Impacto: Multiplataforma con un solo código base = 40% menos costo de desarrollo inicial (MVP).',
    icon: FlutterIcon
  },
  {
    title: 'NestJS',
    description:
      'Impacto: Backend rápido y escalable. Facilita la implementación de APIs robustas para el dashboard B2B.',
    icon: NestjsIcon
  },
  {
    title: 'PostgreSQL + Local',
    description:
      'Impacto: Funcionamiento offline/online crítico para la baja conectividad del mercado objetivo.',
    icon: PostgreSQLIcon
  },
  {
    title: 'Firebase Cloud',
    description:
      'Impacto: Re-engagement directo mediante notificaciones push sin costo de infraestructura adicional.',
    icon: FirebaseIcon
  },
  {
    title: 'Ubuntu Hostinger',
    description:
      'Impacto: Infraestructura cloud ligera y económica, manteniendo OPEX al mínimo en etapa de validación.',
    icon: HostingerIcon
  },
  {
    title: 'AppHive Local',
    description:
      'Impacto: Caché inteligente para una experiencia de usuario fluida incluso con datos móviles inestables.',
    icon: HostingerIcon
  }
]

export function TechnicalArchitecure() {
  return (
    <section className='bg-tertiary-background py-20 sm:py-30 px-4 rounded-t-4xl -mt-5'>
      <div className='max-w-primary-max-width mx-auto'>
        <h2 className='text-on-primary text-2xl sm:text-4xl text-center font-bold font-heading'>
          Arquitectura Técnica vs Impacto en Negocio
        </h2>
        <p className='text-on-primary text-lg text-center mt-3'>
          Ingeniería estratégica para maximizar rentabilidad y reducir riesgos
          operativos.
        </p>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-20'>
          {content.map((item) => (
            <article
              key={item.title}
              className='bg-primary/20 border border-border/40 p-8 rounded-3xl'
            >
              <div className='flex items-center gap-4'>
                <div className='bg-on-primary size-10 flex items-center justify-center rounded-lg shrink-0'>
                  <Image src={item.icon} alt={item.title} height={30} />
                </div>
                <h3 className='text-on-primary font-semibold font-heading'>
                  {item.title}
                </h3>
              </div>
              <p className='text-sm text-on-primary mt-5'>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

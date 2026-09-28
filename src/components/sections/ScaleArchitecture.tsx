import NestjsIcon from '@/assets/icons/nestjs.svg'
import NextjsIcon from '@/assets/icons/nextjs_logo_light.svg'
import RedisIcon from '@/assets/icons/redis.svg'
import Image from 'next/image'

const content = [
  {
    icon: NextjsIcon,
    title: 'React + Next.js',
    description: 'Frontend Administrativo'
  },
  {
    icon: NestjsIcon,
    title: 'NestJS + PostgreSQL',
    description: 'Core API Engine'
  },
  {
    icon: RedisIcon,
    title: 'Redis Caché',
    description: 'High Speed Real-time'
  }
]

export function ScaleArchitecture() {
  return (
    <section className='bg-tertiary-background py-30 px-4 rounded-t-4xl'>
      <div className='max-w-primary-max-width mx-auto flex flex-col md:flex-row items-stretch gap-5 lg:gap-20'>
        <div className='md:w-1/2'>
          <h2 className='text-2xl sm:text-4xl text-on-primary font-heading font-bold'>
            Arquitectura para la Escala
          </h2>
          <p className='text-center md:text-start text-on-primary/80 text-lg mt-3'>
            La Phase 2 demandó una infraestructura robusta diseñada para
            dashboards de alta densidad de datos.
          </p>
          <div className='flex flex-col sm: gap-4 mt-8'>
            {content.map((item) => (
              <article
                key={item.title}
                className='bg-primary/10 border border-border/40 p-6 rounded-xl'
              >
                <div className='flex items-center gap-4'>
                  <div className='bg-on-primary size-10 flex items-center justify-center rounded-lg shrink-0'>
                    <Image src={item.icon} alt={item.title} height={25} />
                  </div>
                  <div>
                    <h3 className='text-on-primary font-heading font-semibold'>
                      {item.title}
                    </h3>
                    <p className='text-xs text-on-primary/90 uppercase'>
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className='md:w-1/2 flex items-stretch gap-5'>
          <div className='bg-on-primary rounded-3xl p-10 md:p-5 lg:p-10 flex flex-col gap-2'>
            <span className='uppercase text-text-tertiary text-2xs font-semibold'>
              Impacto en OPEX
            </span>
            <span className='text-text-primary text-5xl font-semibold'>
              -60%
            </span>
            <p className='text-text-secondary text-sm font-medium'>
              Reducción en costos de soporte mediante autonomía del cliente.
            </p>
            <div className='bg-gray-500 rounded-2xl h-25 mt-30'></div>
          </div>
          <div className='bg-primary/10 rounded-3xl p-10 md:p-5 lg:p-10 flex flex-col gap-2'>
            <span className='uppercase text-text-tertiary text-2xs font-semibold'>
              Escalabilidad
            </span>
            <span className='text-on-primary text-5xl font-semibold'>10x</span>
            <p className='text-on-primary/70 text-sm font-medium'>
              Capacidad de gestionar miles de negocios sin overhead operativo.
            </p>
            <div className='bg-gray-500 rounded-2xl h-25 mt-30'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

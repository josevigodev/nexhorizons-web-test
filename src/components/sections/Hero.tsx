import Link from 'next/link'
import { ArrowIcon } from '../common/Icons'
import { HighlightText } from '../common/HighlighText'
import { BOOKING_LINK } from '@/constants/booking'

export function Hero() {
  return (
    <section className='min-h-screen px-4 pt-48'>
      <div className='flex items-center gap-4 m-auto max-w-quaternary-max-width'>
        <div className='flex flex-col gap-5 sm:gap-10'>
          <h1 className='text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-heading font-bold text-text-primary flex flex-col'>
            <span>Construimos</span>
            <HighlightText>productos digitales</HighlightText>
            <span>que el mercado realmente quiere.</span>
          </h1>
          <p className='text-lg md:text-xl lg:text-2xl text-text-secondary text-center text-balance'>
            Ayudamos a empresas a validar ideas rápidamente, optimizar costos y
            lanzar software escalable sin desperdiciar presupuesto.
          </p>
          <div className='flex flex-col xs:flex-row gap-2 sm:gap-4 text-lg font-bold mx-auto mt-5 md:mt-0'>
            <a
              href={BOOKING_LINK}
              target='_blank'
              className='relative group flex items-center justify-center gap-1 rounded-full bg-primary px-7 sm:px-8 py-3 text-on-primary text-sm sm:text-lg hover:bg-complementary hover:text-text-secondary hover:-translate-y-0.5 transition-all duration-300'
            >
              <span>Iniciar Proyecto</span>
              <ArrowIcon className='absolute top-3.5 right-4 opacity-0 size-4 sm:size-5 sm:top-4 group-hover:translate-x-2 group-hover:opacity-100 transition-all duration-150' />
            </a>
            <Link
              href='/casos-reales'
              className='rounded-full bg-secondary px-6 py-3 text-primary border border-primary/30 transition-all duration-300 text-sm sm:text-lg hover:bg-complementary hover:text-text-secondary hover:border-complementary hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(15,23,42,0.08)]'
            >
              Ver Casos de Éxito
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

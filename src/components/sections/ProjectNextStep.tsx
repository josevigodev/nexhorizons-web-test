import Link from 'next/link'
import { BOOKING_LINK } from '../../constants/booking'
import { CalendarIcon } from '../common/Icons'

interface ProjectNextStepProps {
  title: string
  description: string
  showCases?: boolean
  linkText: string
}

export function ProjectNextStep({
  title,
  description,
  showCases,
  linkText
}: ProjectNextStepProps) {
  return (
    <section className='bg-primary py-15 sm:py-25 px-4 rounded-t-4xl -mt-8'>
      <div className='max-w-primary-max-width mx-auto flex flex-col items-center gap-5'>
        <h2 className='text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-on-primary text-center font-bold font-heading'>
          {title}
        </h2>
        <p className='text-lg md:text-xl lg:text-2xl text-on-primary text-center max-w-xl mx-auto'>
          {description}
        </p>
        <div className='flex flex-col sm:flex-row gap-5'>
          <a
            href={BOOKING_LINK}
            target='_blank'
            rel='noreferrer'
            className='mt-3 sm:mt-6 bg-on-primary rounded-full px-5 sm:px-10 py-2 sm:py-5 flex items-center justify-center gap-4 font-medium text-md sm:text-lg box-shadow hover:bg-complementary transition-colors'
          >
            <span>{linkText}</span>
            <CalendarIcon className='shrink-0' />
          </a>
          {showCases && (
            <Link
              href='/casos-reales'
              className='mt-3 sm:mt-6 bg-primary border border-background rounded-full px-5 sm:px-10 py-2 sm:py-5 flex items-center justify-center gap-4 font-medium text-on-primary text-md sm:text-lg hover:bg-complementary transition-colors'
            >
              Ver Casos de Éxito
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

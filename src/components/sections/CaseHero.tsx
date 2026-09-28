import Link from 'next/link'
import { LineArrowIcon } from '../common/Icons'

interface AditionalInfo {
  id: number
  title: string
  description: string
}

interface CaseHeroProps {
  name: string
  description: string
  aditionalInfo: AditionalInfo[]
}

export function CaseHero({ name, description, aditionalInfo }: CaseHeroProps) {
  return (
    <section className='px-4 py-20 sm:py-40'>
      <div className='max-w-primary-max-width mx-auto flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-10'>
        <div className='flex flex-col gap-4 sm:gap-8 sm:w-2/3'>
          <div className='flex items-center gap-2.5 text-sm font-medium'>
            <Link
              href='/casos-reales'
              className='shrink-0 text-2xs sm:text-sm text-text-tertiary hover:text-text-primary transition-colors duration-150'
            >
              CASOS REALES
            </Link>
            <LineArrowIcon className='text-text-tertiary shrink-0' />
            <span className='uppercase text-2xs sm:text-sm shrink-0'>
              {name}
            </span>
          </div>
          <h1 className='text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary font-bold font-heading'>
            {name}
          </h1>
          <p className='text-xl md:text-2xl lg:text-3xl text-text-secondary'>
            {description}
          </p>
        </div>
        <div className='border-t border-t-border sm:border-0 sm:border-l sm:border-l-border flex sm:flex-col gap-6 sm:pl-8 py-2'>
          {aditionalInfo.map((info) => (
            <article key={info.id} className='flex flex-col gap-1'>
              <span className='text-text-primary font-semibold text-xl sm:text-2xl'>
                {info.title}
              </span>
              <span className='font-medium text-text-tertiary uppercase text-xs sm:text-sm'>
                {info.description}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

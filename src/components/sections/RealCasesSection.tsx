'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { ArrowIcon } from '../common/Icons'

const categories = [
  {
    key: 'all',
    value: 'Todos'
  },
  {
    key: 'nativeAppsAndSasS',
    value: 'Apps Nativas & SasS'
  },
  {
    key: 'e-commerceAndConvertion',
    value: 'E-commerce & Conversión'
  },
  {
    key: 'contentAndAuthoroty',
    value: 'Contenido & Autoridad'
  },
  {
    key: 'professionalsAndServices',
    value: 'Profesionales & Servicios'
  }
] as const

type CategoryKey = (typeof categories)[number]['key']

export type RealCaseItem = {
  id: number
  mainTag: string
  title: string
  description: string
  metrics: Array<{ title: string; description: string }>
  tags: string[]
  link: string
  category: Exclude<CategoryKey, 'all'>
}

export function RealCasesSection({ cases }: { cases: RealCaseItem[] }) {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all')

  const filteredCases = useMemo(() => {
    if (activeCategory === 'all') return cases
    return cases.filter((realCase) => realCase.category === activeCategory)
  }, [activeCategory, cases])

  return (
    <section className='pt-10 sm:pt-30'>
      <div className='border-b border-gray-200 py-4'>
        <ul className='flex items-center lg:justify-center gap-2 overflow-x-auto flex-nowrap px-4 py-2 scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'>
          {categories.map((category) => (
            <li key={category.key} className='shrink-0'>
              <button
                type='button'
                onClick={() => setActiveCategory(category.key)}
                className={`px-5 py-1.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                  activeCategory === category.key
                    ? 'bg-primary text-on-primary border-primary shadow-[0_12px_24px_rgba(15,23,42,0.06)]'
                    : 'bg-gray-100 text-gray-700 border-transparent hover:border-primary hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(15,23,42,0.06)] hover:text-primary'
                }`}
              >
                {category.value}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className='bg-linear-to-b from-secondary-background via-complementary/50 to-secondary-background'>
        <div className='mx-auto py-10 px-4 max-w-primary-max-width grid grid-cols-1 lg:grid-cols-2 place-items-center lg:place-items-stretch gap-8 sm:gap-12'>
          {filteredCases.length > 0 ? (
            filteredCases.map((realCase) => (
              <Link
                key={realCase.id}
                href={realCase.link}
                className='group cursor-pointer border border-border rounded-xl sm:rounded-4xl p-4 bg-background backdrop-blur-xl sm:p-8 max-w-xl hover:border-primary hover:shadow-xl hover:-translate-y-0.5 transition-all duration-500'
              >
                <article>
                  <div className='h-50 sm:h-70 bg-primary/30 rounded-lg sm:rounded-3xl'></div>
                  <div className='flex flex-col gap-2 sm:gap-4 mt-4 sm:mt-8'>
                    <span className='flex items-center justify-center uppercase rounded-full border border-text-tertiary py-0.5 pt-1 px-3 text-2xs text-text-tertiary font-semibold w-fit tracking-widest'>
                      {realCase.mainTag}
                    </span>
                    <div>
                      <h3 className='text-2xl sm:text-3xl font-bold font-heading text-primary'>
                        {realCase.title}
                      </h3>
                      <p className='text-text-secondary font-medium text-sm sm:text-md mt-1'>
                        {realCase.description}
                      </p>
                    </div>
                    <div className='flex flex-col gap-3.5 p-3 sm:p-6 bg-secondary-background/50 rounded-lg sm:rounded-2xl mt-2'>
                      <h4 className='uppercase text-text-secondary font-semibold text-2xs sm:text-xs'>
                        Métricas Clave de Negocio
                      </h4>
                      <div className='flex items-center justify-between gap-3'>
                        {realCase.metrics.map((metric) => (
                          <div
                            className='flex flex-col gap-0.5'
                            key={`${realCase.id}-${metric.title}`}
                          >
                            <span className='text-text-primary text-xs sm:text-sm font-semibold'>
                              {metric.title}
                            </span>
                            <span className='text-2xs sm:text-xs text-gray-500 uppercase font-medium'>
                              {metric.description}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className='flex flex-wrap items-center gap-2 sm:gap-4 mt-2'>
                      {realCase.tags.map((tag) => (
                        <span
                          key={`${realCase.id}-${tag}`}
                          className='uppercase py-1 px-3 rounded-full bg-secondary-background/30 text-primary border border-primary text-2xs font-medium'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className='text-text-secondary text-sm font-semibold flex items-center gap-1 group group-hover:underline group-hover:text-text-primary decoration-dotted decoration-2 decoration-text-primary p-3 pl-0 w-fit'>
                      <span>Ver Detalles del Caso</span>
                      <ArrowIcon className='size-4 opacity-0 group-hover:translate-x-2 group-hover:opacity-100 transition-all duration-150' />
                    </button>
                  </div>
                </article>
              </Link>
            ))
          ) : (
            <div className='col-span-full text-center py-16'>
              <p className='text-lg font-semibold text-text-primary'>
                No hay casos en esta categoría aún.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

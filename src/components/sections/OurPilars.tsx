import { HighlightText } from '../common/HighlighText'
import { TechnologiesCarrousel } from '../common/TechnologiesCarrousel'

const pilars = [
  {
    number: '01',
    title: 'Estrategia & MVP',
    description:
      'Definición de producto y validación rápida antes de realizar grandes inversiones.'
  },
  {
    number: '02',
    title: 'Diseño UI/UX',
    description:
      'Prototipos e interfaces enfocados en conversión y experiencia de usuario premium.'
  },
  {
    number: '03',
    title: 'Desarrollo Escalable',
    description:
      'Web, apps móviles y sistemas cloud construidos con el stack tecnológico más moderno.'
  }
]

export function OurPilars() {
  return (
    <section className='bg-linear-to-b from-80% from-secondary-background to-background mt-30 pt-15 sm:pt-30 pb-40 rounded-t-4xl relative'>
      <div className='max-w-primary-max-width mx-auto px-4'>
        <div>
          <h2 className='text-2xl sm:text-4xl text-text-primary font-bold font-heading'>
            Nuestros <HighlightText>3 Pilares</HighlightText>
          </h2>
          <p className='text-text-secondary text-lg mt-2'>
            Combinamos estrategia de negocio con ejecución técnica impecable.
          </p>
          <div className='flex flex-col md:flex-row items-stretch gap-8 mt-10'>
            {pilars.map((pilar) => (
              <article
                key={pilar.number}
                className='group flex flex-col gap-2 md:gap-3 bg-background p-10 rounded-3xl border border-border max-w-tertiary-max-width hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'
              >
                <span className='text-3xl md:text-5xl font-medium text-text-tertiary group-hover:text-primary transition-colors duration-300'>
                  {pilar.number}.
                </span>
                <h3 className='text-lg md:text-2xl font-heading font-semibold text-text-primary mt-3'>
                  {pilar.title}
                </h3>
                <p className='text-sm md:text-md text-text-secondary'>
                  {pilar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
      <TechnologiesCarrousel isBackground={false} />
    </section>
  )
}

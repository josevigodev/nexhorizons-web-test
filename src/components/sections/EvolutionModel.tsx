import { HighlightText } from '../common/HighlighText'
const evolutionSteps = [
  {
    id: 1,
    title: 'MVP',
    description: 'Lanzamiento ágil y enfocado.'
  },
  {
    id: 2,
    title: 'Feedback',
    description: 'Análisis de datos de usuarios reales.'
  },
  {
    id: 3,
    title: 'Evolución',
    description: 'Inversión en lo que aporta valor real.'
  }
]

export function EvolutionModel() {
  return (
    <section className='mt-10 pt-10 pb-25 px-4'>
      <div className='max-w-secondary-max-width mx-auto'>
        <h2 className='text-2xl sm:text-4xl text-text-primary text-center font-bold font-heading'>
          Modelo de <HighlightText>Evolución Digital</HighlightText>
        </h2>
        <p className='text-text-secondary text-lg text-center md:mt-4'>
          Optimización e IA para reducir costos operativos y escalar
          inteligentemente.
        </p>
        <div className='flex flex-col lg:flex-row items-center justify-center mx-auto gap-4 mt-20 lg:mt-10'>
          {evolutionSteps.map((step) => (
            <div
              key={step.id}
              className={`flex flex-col lg:flex-row items-center justify-center gap-3 ${step.id !== evolutionSteps.length ? 'w-full' : 'w-fit'}`}
            >
              <article className='flex flex-col items-center gap-3 w-48 rounded-3xl bg-on-primary p-4'>
                <div className='size-15 bg-black rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-primary'>
                  <span className='text-on-primary text-lg font-bold'>
                    {step.id}
                  </span>
                </div>
                <h3 className='text-lg font-bold font-heading text-text-primary'>
                  {step.title}
                </h3>
                <p className='text-text-secondary text-sm text-pretty text-center'>
                  {step.description}
                </p>
              </article>
              {step.id !== evolutionSteps.length && (
                <div className='w-0.5 lg:w-full h-40 lg:h-0.5 bg-gray-300 rounded-full'></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

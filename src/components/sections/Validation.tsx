import { CheckedIcon } from '../common/Icons'
import { HighlightText } from '../common/HighlighText'
const traditionalPath = [
  '6 a 12 meses sin probar el mercado',
  'Grandes inversiones iniciales a ciegas',
  'Presupuesto agotado antes de lanzar'
]

const nexHorizonPath = [
  'MVP funcional listo en semanas',
  'Validación temprana con usuarios reales',
  'Evolución continua basada en datos'
]

export function Validation() {
  return (
    <section className='px-4'>
      <div className='flex flex-col sm:flex-row items-center gap-8 max-w-primary-max-width mx-auto'>
        <div className='flex flex-col gap-5 sm:gap-8 md:w-1/2'>
          <span className='uppercase text-xs font-medium text-text-tertiary -mb-4'>
            Validación de Mercado
          </span>
          <h2 className='text-2xl sm:text-4xl text-text-primary font-bold font-heading'>
            Tu <HighlightText>visión</HighlightText> merece un camino{' '}
            <HighlightText>eficiente</HighlightText>.
          </h2>
          <article className='hidden text-text-primary p-10 bg-gray-100 border border-border rounded-4xl sm:flex flex-col gap-4'>
            <h3 className='font-semibold font-heading flex items-center gap-1 text-lg'>
              El Camino Tradicional
            </h3>
            <ul className='flex flex-col gap-3 pl-4'>
              {traditionalPath.map((item, index) => (
                <li key={index} className='text-text-secondary list-disc'>
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className='hidden text-on-primary p-10 bg-primary border border-border rounded-4xl sm:flex flex-col gap-4'>
            <h3 className='font-semibold font-heading text-lg'>
              El Enfoque NexHorizon
            </h3>
            <ul className='flex flex-col gap-4'>
              {nexHorizonPath.map((item, index) => (
                <li
                  key={index}
                  className='flex items-center gap-1.5 text-on-primary'
                >
                  <CheckedIcon className='size-3 stroke-3' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
        <div className='md:w-1/2'>
          <div className='bg-gray-300 h-full flex items-center justify-center p-4'>
            <video width='100%' height='100%' controls>
              <source src='/video.mp4' type='video/mp4' />
              Tu navegador no soporta la reproducción de video.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}

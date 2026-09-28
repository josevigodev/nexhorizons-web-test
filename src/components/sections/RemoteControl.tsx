import {
  ReloadIcon,
  ShieldIcon,
  TagIcon,
  ThunderIcon
} from '@/components/common/Icons'
import { HighlightText } from '../common/HighlighText'

const content = [
  {
    id: 0,
    title: 'Precio de Planes',
    description: 'Actualiza precios B2B al instante.',
    icon: <TagIcon className='size-6' />
  },
  {
    id: 1,
    title: 'Promociones Flash',
    description: 'Lanza ofertas segmentadas.',
    icon: <ThunderIcon className='size-6' />
  },
  {
    id: 2,
    title: 'Moderación',
    description: 'Aprueba o bloquea negocios',
    icon: <ShieldIcon className='size-6' />
  },
  {
    id: 3,
    title: 'Reembolsos',
    description: 'Gestiona quejas sin demoras.',
    icon: <ReloadIcon className='size-6' />
  }
]

export function RemoteControl() {
  return (
    <section className='bg-background py-30 px-4'>
      <div className='max-w-primary-max-width mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-20'>
        <div className='md:w-3/5'>
          <h2 className='text-2xl sm:text-4xl text-text-primary font-heading font-bold'>
            Control Remoto: Cambios Sin{' '}
            <HighlightText>Republishing</HighlightText>
          </h2>
          <p className='text-text-secondary mt-3 text-lg max-w-3xl'>
            El Manager permite que las decisiones de negocio se reflejen
            instantáneamente en la aplicación móvil de los usuarios sin pasar
            por procesos de aprobación de tiendas.
          </p>
          <div className='grid grid-cols-2 gap-6 mt-10'>
            {content.map((item) => (
              <article
                key={item.id}
                className='flex flex-col xs:flex-row items-center gap-4 p-6 rounded-2xl bg-secondary-background/50'
              >
                <span className='shrink-0 text-primary'>{item.icon}</span>
                <div>
                  <h4 className='text-text-primary text-center xs:text-start text-sm sm:text-base font-semibold font-heading'>
                    {item.title}
                  </h4>
                  <p className='text-center xs:text-start text-xs sm:text-sm text-text-secondary mt-2 xs:mt-0'>
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className='w-full md:w-2/5 h-150 bg-gray-500 rounded-4xl'></div>
      </div>
    </section>
  )
}

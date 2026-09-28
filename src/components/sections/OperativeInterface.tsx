import Image from 'next/image'
import { HighlightText } from '../common/HighlighText'

const gallery = [
  {
    id: 0,
    title: 'Estado Global del Ecosistema',
    src: ''
  },
  {
    id: 1,
    title: 'Control Individual de Cuentas',
    src: ''
  },
  {
    id: 2,
    title: 'Flujo de Caja y Transacciones',
    src: ''
  },
  {
    id: 3,
    title: 'Gestión de Fuerza de Ventas Física',
    src: ''
  }
]

export function OperativeInterface() {
  return (
    <section className='bg-linear-to-b from-complementary/20 to-secondary-background py-30 px-4 rounded-t-4xl -mt-5'>
      <div className='max-w-primary-max-width mx-auto'>
        <h2 className='text-2xl sm:text-4xl text-text-primary font-heading font-bold'>
          Interfaz Operativa: <HighlightText>Visión 360°</HighlightText>
        </h2>
        <p className='text-text-secondary mt-3 text-lg max-w-3xl'>
          El centro de comando de Cuba Negocios.
        </p>
        <div className='grid sm:grid-cols-2 gap-8 mt-10'>
          {gallery.map((picture) => (
            <article key={picture.id}>
              <div className='bg-on-primary w-full h-75 overflow-hidden rounded-3xl'>
                <Image src={picture.src} alt={picture.title} />
              </div>
              <p className='text-center text-text-secondary uppercase text-xs font-semibold mt-4'>
                {picture.title}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

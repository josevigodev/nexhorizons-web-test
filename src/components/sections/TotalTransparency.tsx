import { HighlightText } from '../common/HighlighText'

const content = [
  {
    id: 0,
    title: '100% Tuyo',
    description:
      'Código fuente y repositorios bajo tu propiedad legal y técnica desde el día uno.'
  },
  {
    id: 1,
    title: 'Sin Bloqueos',
    description:
      'Acceso total e inmediato a servidores, bases de datos y archivos maestros de diseño.'
  },
  {
    id: 2,
    title: 'Libertad',
    description:
      'Garantizamos una migración sencilla y absoluta independencia tecnológica.'
  }
]

export function TotalTransparency() {
  return (
    <section className='bg-background -mt-10 pt-30 px-4 rounded-4xl'>
      <div className='max-w-secondary-max-width mx-auto'>
        <h2 className='text-2xl sm:text-4xl text-text-primary text-center font-bold font-heading'>
          <HighlightText>Transparencia</HighlightText> Total
        </h2>
        <p className='text-text-secondary text-md sm:text-lg text-center italic mt-3'>
          Tu producto. Tu código. Tu infraestructura.
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-10 sm:gap-5 justify-center mt-15'>
          {content.map((item) => (
            <div
              key={item.id}
              className='px-6 py-4 border-l border-primary/40 rounded-r-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(15,23,42,0.06)] hover:border-primary/60'
            >
              <h3 className='text-lg sm:text-xl font-bold text-primary font-heading'>
                {item.title}
              </h3>
              <p className='text-text-secondary mt-3'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

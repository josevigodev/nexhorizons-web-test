import { HighlightText } from '../common/HighlighText'

const content = [
  {
    id: 1,
    title: 'Lanzamiento Ágil (MVP)',
    description:
      'Desarrollo en Flutter + NestJS enfocado únicamente en geolocalización de negocios y cartelera digital diaria.'
  },
  {
    id: 2,
    title: 'Modelo de Ingresos B2B (Día 1)',
    description:
      'Implementación de suscripciones escalonadas que permitieron probar la disposición de pago antes de sobre-construir.'
  },
  {
    id: 3,
    title: 'Estrategia de Crecimiento',
    description:
      'Red de vendedores afiliados localizados para acelerar la captación de negocios en terreno con comisiones en moneda local.'
  }
]

export function TheChallange() {
  return (
    <section className='bg-linear-to-b from-complementary/30 to-secondary-background py-20 md:py-30 lg:py-20 px-4 rounded-t-4xl sm:rounded-t-none -mt-5 sm:m-0'>
      <div className='max-w-primary-max-width mx-auto flex flex-col md:flex-row items-stretch gap-10 md:gap-15'>
        <div className='md:w-1/2'>
          <h2 className='text-2xl sm:text-4xl text-text-primary font-heading font-bold'>
            El <HighlightText>Reto</HighlightText>
          </h2>
          <p className='text-text-secondary text-xl mt-3 sm:mt-6'>
            Validar un directorio comercial geolocalizado en un mercado con alta
            restricción de conectividad y sin cultura de pagos digitales
            masivos. El objetivo era lograr facturación sin depender de
            pasarelas internacionales.
          </p>

          <h2 className='text-text-primary text-2xl sm:text-4xl font-bold font-heading mt-5 sm:mt-10'>
            Estrategia de <HighlightText>Validación</HighlightText>
          </h2>
          <ul className='flex flex-col gap-6 mt-6'>
            {content.map((item) => (
              <li key={item.id} className='flex items-start gap-4'>
                <span className='size-10 flex items-center justify-center shrink-0 rounded-full bg-primary text-on-primary font-semibold'>
                  {item.id}
                </span>
                <div>
                  <h3 className='text-text-primary font-semibold font-heading'>
                    {item.title}
                  </h3>
                  <p className='text-text-secondary mt-2'>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='h-125 bg-primary md:w-1/2 rounded-4xl'></div>
      </div>
    </section>
  )
}

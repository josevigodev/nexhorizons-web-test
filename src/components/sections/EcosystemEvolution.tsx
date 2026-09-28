import { HighlightText } from '../common/HighlighText'

export function EcosystemEvolution() {
  return (
    <section className='bg-secondary-background py-20 px-4 mt-20 rounded-t-4xl'>
      <div className='max-w-primary-max-width mx-auto'>
        <h2 className='text-2xl sm:text-4xl text-text-primary text-center font-heading font-bold'>
          La <HighlightText>Evolución</HighlightText> del Ecosistema
        </h2>
        <p className='text-center text-text-secondary text-lg mt-3'>
          De validar una idea a gestionar un negocio escalable con control
          total.
        </p>
        <div className='bg-on-primary rounded-4xl border border-border flex flex-col sm:flex-row items-center mt-20'>
          <div className='border-b border-b-border sm:border-0 sm:border-r sm:border-r-border p-8 sm:p-12 sm:w-1/2'>
            <h3 className='text-text-primary uppercase font-semibold font-heading text-sm'>
              Fase 1: Validación (MVP)
            </h3>
            <ul className='mt-5 pl-4 flex flex-col gap-4'>
              <li className='list-disc text-text-secondary'>
                Validación rápida de mercado
              </li>
              <li className='list-disc text-text-secondary'>
                Primeros clientes de pago (Tracción)
              </li>
              <li className='list-disc text-text-secondary'>
                App Móvil (Flutter + NestJS)
              </li>
            </ul>
          </div>
          <div className='p-8 sm:p-12 sm:w-1/2'>
            <h3 className='text-text-primary uppercase font-semibold font-heading text-sm'>
              Fase 2: Evolución (Manager)
            </h3>
            <ul className='mt-5 pl-4 flex flex-col gap-4'>
              <li className='list-disc text-text-secondary'>
                Panel de control administrativo total
              </li>
              <li className='list-disc text-text-secondary'>
                Monitoreo de ingresos y pagos reales
              </li>
              <li className='list-disc text-text-secondary'>
                Gestión remota sin republishing en tiendas
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

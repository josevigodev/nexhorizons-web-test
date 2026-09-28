import { HighlightText } from '../common/HighlighText'
import { AdjustIcon, BagIcon, ReloadIcon, UserPlus } from '../common/Icons'

const cases = [
  {
    id: 0,
    icon: <UserPlus className='size-5' />,
    title: 'Landing Premium B2B',
    description:
      'Modelo de Captación: Diseñada para reducir el CAC y cerrar ventas de alto valor corporativo.'
  },
  {
    id: 1,
    icon: <AdjustIcon className='size-5' />,
    title: 'Portal Integraciones',
    description:
      'Modelo Operativo: Automatización de flujos para escalar transacciones sin aumentar personal.'
  },
  {
    id: 2,
    icon: <ReloadIcon className='size-5' />,
    title: 'Onboarding SaaS',
    description:
      'Modelo de Retención: Optimización de activación para convertir pruebas en suscripciones.'
  },
  {
    id: 3,
    icon: <BagIcon className='size-5' />,
    title: 'Ecosistema Comercial',
    description:
      'Modelo de Marketplace: Monetiza transacciones directas entre usuarios con comisiones.'
  }
]

export function ReusableValidation() {
  return (
    <section className='bg-transparent py-20 sm:py-30 px-4'>
      <div className='max-w-primary-max-width mx-auto'>
        <h2 className='text-text-primary text-2xl sm:text-4xl font-bold font-heading text-center sm:text-start'>
          Escenarios de <HighlightText>Validación Reutilizables</HighlightText>
        </h2>
        <p className='text-text-secondary mt-3 text-lg text-center sm:text-start'>
          Casos de usos utilizados para maximizar ingresos y reducir costos
          operativos desde el día 1.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 items-center mt-10 sm:mt-20'>
          {cases.map((caseItem) => (
            <article
              className='group h-full p-4 sm:p-8 rounded-xl sm:rounded-3xl bg-on-primary flex flex-col gap-3 sm:gap-6 border border-border transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'
              key={caseItem.id}
            >
              <div className='bg-primary p-3 sm:p-3.5 rounded-xl sm:rounded-2xl w-fit text-on-primary transition-all duration-300 group-hover:shadow-[0_12px_24px_rgba(15,23,42,0.12)]'>
                {caseItem.icon}
              </div>
              <h3 className='text-text-primary font-semibold font-heading'>
                {caseItem.title}
              </h3>
              <p className='text-text-secondary text-sm'>
                {caseItem.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

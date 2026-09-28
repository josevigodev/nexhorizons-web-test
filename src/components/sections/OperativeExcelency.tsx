import { HighlightText } from '../common/HighlighText'
import { HeartBeatIcon, PieChartIcon, SwitchIcon } from '../common/Icons'

const content = [
  {
    id: 0,
    title: 'Toma de Decisiones con Datos',
    tag: 'Dashboard de Métricas',
    description:
      'Monitoreo en tiempo real de usuarios activos, tasa de conversión, volumen de recaudación y alertas de expiración. Control basado en hechos.',
    icon: <PieChartIcon className='size-8' />
  },
  {
    id: 1,
    title: 'Autonomía y Flexibilidad',
    tag: 'Control Dinámico Remoto',
    description:
      'Modifica planes de pago, gestiona clientes vencidos y modera contenido instantáneamente sin forzar descargas en App Store o Play Store.',
    icon: <SwitchIcon className='size-8' />
  },
  {
    id: 2,
    title: 'Gestión Centralizada',
    tag: 'Ingresos, Vendedores y Soporte',
    description:
      'Integración de facturación, control de comisiones por vendedor y gestión de reportes en una sola interfaz limpia que reduce OPEX.',
    icon: <HeartBeatIcon className='size-8' />
  }
]

export function OperativeExcelency() {
  return (
    <section className='bg-background py-20 px-4'>
      <div className='max-w-primary-max-width mx-auto'>
        <h2 className='text-2xl sm:text-4xl text-text-primary font-heading font-bold'>
          Excelencia Operativa en <HighlightText>3 Pilares</HighlightText>
        </h2>
        <p className='text-text-secondary mt-3 text-lg max-w-3xl'>
          Construimos las herramientas que permiten al cliente operar su negocio
          sin depender de nosotros para el día a día.
        </p>
        <div className='flex flex-col sm:flex-row gap-10 mt-20'>
          {content.map((item) => (
            <article key={item.id}>
              <span className='rounded-3xl text-primary flex items-center justify-center p-4 bg-secondary-background w-fit'>
                {item.icon}
              </span>
              <span className='block text-text-tertiary uppercase font-semibold text-xs mt-6'>
                {item.tag}
              </span>
              <h3 className='font-semibold font-heading text-text-primary text-xl mt-2'>
                {item.title}
              </h3>
              <p className='text-text-secondary text-sm mt-2'>
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

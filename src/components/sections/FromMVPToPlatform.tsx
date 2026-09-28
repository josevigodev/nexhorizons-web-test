const content = [
  {
    title: 'Por Qué Es Crítico',
    description:
      'NexHorizon no solo ayuda a lanzar y facturar rápido. Acompaña al cliente en la sostenibilidad del producto, creando herramientas que reducen el costo operativo a medida que el proyecto escala.'
  },
  {
    title: 'Sostenibilidad',
    description:
      'La autonomía sin fricción es lo que diferencia una startup que muere después de 6 meses de una que prospera y se vuelve rentable.'
  },
  {
    title: 'La Lección',
    description:
      'Construir para la evolución desde el día 1 significa pensar en quién va a operar el sistema mañana. El Manager es libertad para el cliente.'
  }
]

export function FromMVPToPlatform() {
  return (
    <section className='bg-background py-30 px-4'>
      <div className='max-w-primary-max-width mx-auto'>
        <h2 className='uppercase text-xs font-medium text-text-secondary text-center'>
          Del MVP a la Plataforma
        </h2>
        <p className='italic text-text-secondary text-2xl md:text-4xl text-center mt-6 max-w-quaternary-max-width mx-auto font-heading'>
          &quot;Pasamos de validar una idea a gestionar un ecosistema vivo. Con
          Cuba Negocios Manager, el equipo cliente tomó el control total de sus
          cobros, usuarios y contenido sin necesidad de recurrir a soporte
          técnico para tareas del día a día.&quot;
        </p>
        <div className='border-t border-t-border flex flex-col sm:flex-row items-start gap-10 mt-15 pt-15'>
          {content.map((item) => (
            <article key={item.title} className='flex-1'>
              <h3 className='text-xl font-semibold font-heading text-text-primary'>
                {item.title}
              </h3>
              <p className='text-sm text-text-secondary mt-2 sm:mt-5'>
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

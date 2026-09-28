import Link from 'next/link'
import { ArrowIcon } from '../common/Icons'

export function SuccessCase() {
  return (
    <section className='bg-linear-to-b from-primary to-complementary min-h-dvh mt-10 py-20 sm:py-30 px-8 rounded-t-4xl'>
      <div className='max-w-secondary-max-width mx-auto'>
        <h2 className='text-2xl sm:text-4xl text-on-primary text-center font-bold font-heading'>
          Caso de Éxito
        </h2>
        <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 mx-auto'>
          <div className='w-full max-w-90 h-160 bg-gray-300 rounded-2xl'></div>
          <div className='flex-1 sm:max-w-95 flex flex-col items-center sm:items-start gap-3'>
            <h3 className='text-center sm:text-start text-2xl font-bold font-heading text-on-primary'>
              Cuba Negocios
            </h3>
            <p className='text-center sm:text-start text-on-primary font-medium text-lg text-pretty'>
              Ecosistema digital completo (App Móvil + Web + Panel
              Administrativo) con directorio geolocalizado y búsqueda
              inteligente.
            </p>
            <Link
              href='/casos-reales/cuba-negocios-app'
              className='relative group flex items-center justify-center gap-1 rounded-full px-7 sm:px-8 py-3 bg-on-primary font-semibold text-primary text-sm sm:text-lg hover:bg-primary hover:text-on-primary hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-black/20'
            >
              <span>Ver Caso Completo</span>
              <ArrowIcon className='absolute top-3.5 right-4 opacity-0 size-4 sm:size-5 sm:top-4 group-hover:translate-x-2 group-hover:opacity-100 transition-all duration-150' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'
import {
  ArrowIcon,
  BuildingIcon,
  ClockIcon,
  MailIcon,
  MessageIcon,
  MonitorIcon,
  SmallBuildingIcon
} from '../common/Icons'
import { HighlightText } from '../common/HighlighText'
import { BOOKING_LINK } from '@/constants/booking'

const contactDetails = [
  {
    title: 'SEDE PRINCIPAL (México)',
    description: 'Ciudad de México (CDMX)',
    extra: 'Atención presencial disponible bajo previa cita.',
    icon: <BuildingIcon className='size-5' />
  },
  {
    title: 'OFICINA REGIONAL (Caribe)',
    description: 'La Habana & Santiago de Cuba',
    extra: 'Atención presencial disponible.',
    icon: <SmallBuildingIcon className='size-5' />
  },
  {
    title: 'GLOBAL / REMOTE',
    description: 'Otras regiones:',
    extra: 'Comunicación y facturación 100% en línea.',
    icon: <MonitorIcon className='size-5' />
  }
]

export function Contact() {
  return (
    <section className='bg-background px-4 py-20 sm:py-28 border-t border-t-border rounded-t-4xl'>
      <div className='max-w-primary-max-width mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10'>
        <div>
          <h2 className='text-3xl sm:text-4xl font-heading font-bold text-text-primary'>
            <HighlightText>Cuéntanos</HighlightText> sobre tu{' '}
            <HighlightText>proyecto</HighlightText>
          </h2>
          <p className='mt-4 text-text-secondary'>
            Completa el formulario y un especialista te responderá en máximo 24
            horas.
          </p>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14'>
            <div>
              <label className='block text-xs font-bold uppercase text-text-tertiary'>
                Nombre Completo
              </label>
              <input
                className='mt-3 w-full rounded-2xl border border-secondary-background bg-secondary-background/30 px-5 py-4 text-sm text-text-primary outline-none hover:shadow-md focus:border-primary focus:bg-background focus:shadow-md focus:-translate-y-0.5 transition-all'
                placeholder='Tu nombre'
              />
            </div>
            <div>
              <label className='block text-xs font-bold uppercase text-text-tertiary'>
                Correo Electrónico
              </label>
              <input
                className='mt-3 w-full rounded-2xl border border-secondary-background bg-secondary-background/30 px-5 py-4 text-sm text-text-primary outline-none hover:shadow-md focus:border-primary focus:bg-background focus:shadow-md focus:-translate-y-0.5 transition-all'
                placeholder='email@ejemplo.com'
              />
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6'>
            <div>
              <label className='block text-xs font-bold uppercase text-text-tertiary'>
                Nombre de Empresa / Proyecto
              </label>
              <input
                className='mt-3 w-full rounded-2xl border border-secondary-background bg-secondary-background/30 px-5 py-4 text-sm text-text-primary outline-none  hover:shadow-md focus:border-primary focus:bg-background focus:shadow-md focus:-translate-y-0.5 transition-all'
                placeholder='Tu empresa'
              />
            </div>
            <div className='relative'>
              <label className='block text-xs font-bold uppercase text-text-tertiary'>
                Servicio de Interés
              </label>
              <select className='mt-3 w-full rounded-2xl border border-secondary-background bg-secondary-background/30 px-5 pr-10 py-4 text-sm text-text-primary outline-none hover:shadow-md focus:border-primary focus:bg-background focus:shadow-md focus:-translate-y-0.5 transition-all'>
                <option>Selecciona un servicio</option>
                <option>Análisis MVP &amp; Estrategia</option>
                <option>Diseño UX/UI</option>
                <option>Identidad de Marca</option>
                <option>Web de Contenidos (WP)</option>
                <option>E-commerce &amp; Reservas</option>
                <option>Desarrollo Custom / App</option>
                <option>No estoy seguro</option>
              </select>
            </div>
          </div>

          <div className='mt-6'>
            <label className='block text-xs font-bold uppercase text-text-tertiary'>
              Rango de Presupuesto (USD)
            </label>
            <select
              defaultValue='Hasta $1,000 USD'
              className='mt-3 w-full rounded-2xl border border-secondary-background bg-secondary-background/30 px-5 py-4 text-sm text-text-primary outline-none hover:shadow-md focus:border-primary focus:bg-background focus:shadow-md focus:-translate-y-0.5 transition-all'
            >
              <option value='Hasta $1,000 USD'>Hasta $1,000 USD</option>
              <option value='$1,000 - $5,000 USD'>$1,000 - $5,000 USD</option>
              <option value='$5,000 - $15,000 USD'>$5,000 - $15,000 USD</option>
              <option value='+$15,000 USD'>+$15,000 USD</option>
              <option value='No tengo presupuesto definido'>
                No tengo presupuesto definido
              </option>
            </select>
          </div>

          <div className='mt-6'>
            <label className='block text-xs font-bold uppercase text-text-tertiary'>
              Cuéntanos sobre tu idea, desafío o pregunta
            </label>
            <textarea
              className='mt-3 w-full rounded-2xl border border-secondary-background bg-secondary-background/30 px-5 py-4 text-sm text-text-primary outline-none hover:shadow-md focus:border-primary focus:bg-background focus:shadow-md focus:-translate-y-0.5 transition-all'
              placeholder='Describe brevemente qué necesitas...'
            />
          </div>

          {/* <div className='mt-6'>
            <label className='block text-xs font-bold uppercase text-text-tertiary'>
              Método de contacto preferido
            </label>
            <div className='mt-3 flex flex-wrap gap-4'>
              {['Email', 'WhatsApp', 'Llamada telefónica'].map((method) => (
                <label
                  key={method}
                  className='flex items-center gap-2 text-sm font-medium text-text-secondary'
                >
                  <input
                    type='radio'
                    name='method'
                    className='accent-primary'
                  />
                  <span>{method}</span>
                </label>
              ))}
            </div>
          </div> */}

          <button className='mt-8 rounded-full w-full bg-primary py-4 text-sm font-semibold text-on-primary hover:bg-complementary hover:text-text-primary transition-colors'>
            Enviar Consulta
          </button>
          <p className='mt-4 text-sm text-text-secondary italic'>
            Recibirás una respuesta en un plazo máximo de 24 horas hábiles.
          </p>
        </div>

        <aside>
          <div className='bg-secondary-background/30 rounded-4xl p-8 sm:p-12'>
            <h3 className='text-2xl font-heading font-bold text-text-primary'>
              Información de Contacto
            </h3>
            <div className='mt-8 space-y-8'>
              {contactDetails.map((detail) => (
                <div
                  key={detail.title}
                  className='flex gap-4 rounded-2xl p-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(15,23,42,0.06)]'
                >
                  <span className='mt-1 size-10 rounded-lg border border-secondary-background bg-background text-primary flex items-center justify-center'>
                    {detail.icon}
                  </span>
                  <div>
                    <div className='font-semibold uppercase text-sm text-text-primary'>
                      {detail.title}
                    </div>
                    <div className='mt-1 text-sm text-text-secondary'>
                      {detail.description}
                    </div>
                    <div className='mt-1 text-sm text-text-secondary'>
                      {detail.extra}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='mt-8 space-y-4 border-t border-t-border pt-10'>
              <a
                href='mailto:info@nexhorizon.com'
                className='group flex items-center gap-3 text-sm font-bold text-text-primary underline-offset-6 decoration-dotted hover:underline'
              >
                <MailIcon className='size-4 text-text-tertiary group-hover:text-text-primary' />
                <span>info@nexhorizon.com</span>
              </a>
              <a
                href='https://wa.me/'
                className='group flex items-center gap-3 text-sm font-bold text-text-primary underline-offset-6 decoration-dotted hover:underline'
              >
                <MessageIcon className='size-4 text-text-tertiary group-hover:text-text-primary' />
                <span>+1-XXX-XXX-XXXX</span>
              </a>
              <div className='flex items-center gap-3 text-sm text-text-secondary'>
                <ClockIcon className='size-4 text-text-tertiary' />
                <span>Lunes a Viernes 9:00 AM - 6:00 PM (CDMX)</span>
              </div>
            </div>
          </div>

          <div className='mt-10 rounded-4xl bg-primary p-6'>
            <h4 className='text-xl font-heading font-bold text-on-primary'>
              ¿Buscas agendar una llamada hoy?
            </h4>
            <p className='mt-3 text-sm text-on-primary/90 font-medium'>
              Si ya tienes claro tu requerimiento y prefieres una sesión
              estratégica directa, usa nuestra herramienta de agendamiento.
            </p>
            <a
              target='_blank'
              href={BOOKING_LINK}
              className='mt-5 group flex items-center justify-center gap-1 text-on-primary text-sm sm:text-lg underline decoration-dotted underline-offset-6 font-semibold w-fit'
            >
              <span>Agendar Asesoría Gratis</span>
              <ArrowIcon className='opacity-0 size-4 sm:size-5 sm:top-4 group-hover:translate-x-2 group-hover:opacity-100 transition-all duration-150' />
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}

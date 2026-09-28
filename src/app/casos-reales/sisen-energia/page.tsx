import { HighlightText } from '@/components/common/HighlighText'
import {
  CalendarClockIcon,
  CheckedIcon,
  ClockIcon,
  DataBaseIcon,
  FourSquaresIcon,
  MailIcon,
  NotebookIcon,
  PorcentageIcon,
  StadisticsIcon,
  ThreeCubesIcon,
  UsersIcon,
  VersionIcon
} from '@/components/common/Icons'
import { CaseHero } from '@/components/sections/CaseHero'
import { ProjectNextStep } from '@/components/sections/ProjectNextStep'

const aditionalInfo = [
  {
    id: 0,
    title: 'Doble Canal',
    description: 'Monetización Híbrida'
  },
  {
    id: 1,
    title: 'Operativa Unificada',
    description: 'Centralización Total'
  },
  {
    id: 2,
    title: 'B2B / B2C',
    description: 'Audiencia Segmentada'
  }
]

const content = [
  {
    id: 0,
    icon: <VersionIcon className='size-7' />,
    title: 'Fragmentación de Canales',
    description:
      'Servicios y productos vivían en silos desconectados, duplicando esfuerzos de marketing.'
  },
  {
    id: 1,
    icon: <CalendarClockIcon className='size-7' />,
    title: 'Agendamiento Manual',
    description:
      'La coordinación de visitas técnicas dependía de llamadas telefónicas y procesos lentos.'
  },
  {
    id: 2,
    icon: <UsersIcon className='size-7' />,
    title: 'Dualidad de Audiencia',
    description:
      'Necesidad de separar la experiencia para técnicos instaladores (B2B) y dueños de hogar (B2C).'
  }
]

const content2 = [
  {
    id: 0,
    icon: <ClockIcon className='size-7' />,
    title: 'Agendamiento 24/7',
    description:
      'Sistema autónomo que elimina la necesidad de atención telefónica para toma de citas.'
  },
  {
    id: 1,
    icon: <FourSquaresIcon className='size-7' />,
    title: 'Catálogo Técnico',
    description:
      'Organización de productos por tipo de instalación, facilitando la compra a ingenieros.'
  },
  {
    id: 2,
    icon: <DataBaseIcon className='size-7' />,
    title: 'Panel Unificado',
    description:
      'Gestión centralizada de pedidos de tienda y citas de servicio en un solo backend.'
  },
  {
    id: 3,
    icon: <PorcentageIcon className='size-7' />,
    title: 'Incentivos B2C',
    description:
      'Automatización de descuentos por primera compra para acelerar la captación de prospectos.'
  }
]

const content3 = [
  {
    id: 0,
    icon: <NotebookIcon className='size-5' />,
    title: 'Dashboard de Citas Técnicas',
    description: 'Control de agenda y técnicos en campo.'
  },
  {
    id: 1,
    icon: <ThreeCubesIcon className='size-5' />,
    title: 'Inventario de Productos',
    description: 'Sincronización total con la tienda online'
  },
  {
    id: 2,
    icon: <StadisticsIcon className='size-5' />,
    title: 'Ingresos Unificados',
    description: 'Visibilidad clara de la facturación híbrida.'
  }
]

export default function SISENEnergiaPage() {
  return (
    <>
      <CaseHero
        name='SISEN Energía'
        description='Unificar reservas de servicios técnicos y ventas e-commerce en un solo ecosistema rentable.'
        aditionalInfo={aditionalInfo}
      />

      <section className='py-32 bg-linear-to-b from-complementary/20 to-secondary-background rounded-4xl'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid lg:grid-cols-2 gap-24 items-start'>
            <div className='space-y-12'>
              <div className='space-y-4'>
                <h2 className='text-2xl sm:text-4xl text-text-primary font-heading font-bold'>
                  El <HighlightText>Reto:</HighlightText> Fusionar Dos Modelos
                </h2>
                <p className='text-text-secondary text-xl mt-3 sm:mt-6'>
                  Combinar la captación de clientes para servicios técnicos con
                  la venta directa de equipamiento pesado sin generar fricción
                  ni confusión en el usuario final.
                </p>
              </div>
              <div className='grid gap-6'>
                {content.map((item) => (
                  <div
                    key={item.id}
                    className='group p-8 bg-white rounded-4xl border border-gray-100 hover:border-primary transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'
                  >
                    <div className='mb-4 text-primary transition-all duration-500'>
                      {item.icon}
                    </div>
                    <h3 className='font-semibold font-heading mb-2'>
                      {item.title}
                    </h3>
                    <p className='text-sm text-text-secondary'>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className='aspect-4/5 rounded-[3rem] wireframe-line flex flex-col items-center justify-center p-12 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'>
              <h4 className='display-text text-xl font-bold text-gray-400'>
                Estructura del Ecosistema
              </h4>
              <p className='text-2xs font-mono text-gray-300 mt-4 tracking-[0.2em] uppercase'>
                Unified Energy Platform
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-32 bg-white transition-all duration-300 hover:shadow-[0_18px_38px_rgba(15,23,42,0.03)]'>
        <div className='max-w-7xl mx-auto px-6 space-y-20'>
          <div className='text-center space-y-4 max-w-3xl mx-auto'>
            <h2 className='text-2xl sm:text-4xl text-text-primary font-heading font-bold'>
              Estrategia: <HighlightText>Dos Webs, Un Ecosistema</HighlightText>
            </h2>
            <p className='text-xl font-light text-text-secondary italic'>
              &quot;Separación inteligente de experiencias bajo orquestación
              unificada.&quot;
            </p>
          </div>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='p-12 bg-secondary-background rounded-[3rem] space-y-8 border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'>
              <div className='flex justify-between items-start'>
                <div className='space-y-1'>
                  <h4 className='text-xl font-semibold font-heading text-text-primary'>
                    Web de Servicios
                  </h4>
                  <p className='text-sm text-text-tertiary'>sisenenergia.com</p>
                </div>
              </div>
              <p className='text-text-secondary'>
                Embudo de conversión directo enfocado en agendamiento de citas
                técnicas en minutos.
              </p>
              <ul className='space-y-4 pt-4'>
                <li className='flex items-center gap-3 text-sm'>
                  <span>
                    <CheckedIcon />
                  </span>
                  <span>Calendario de disponibilidad real</span>
                </li>
                <li className='flex items-center gap-3 text-sm'>
                  <span>
                    <CheckedIcon />
                  </span>
                  <span>Confirmación y pago de reserva</span>
                </li>
                <li className='flex items-center gap-3 text-sm'>
                  <span>
                    <CheckedIcon />
                  </span>
                  <span>Recordatorios vía SMS/Email</span>
                </li>
              </ul>
            </div>
            <div className='p-12 bg-primary text-white rounded-[3rem] space-y-8 shadow-2xl shadow-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(15,23,42,0.14)]'>
              <div className='flex justify-between items-start'>
                <div className='space-y-1'>
                  <h4 className='text-xl font-semibold font-heading text-on-primary'>
                    Tienda Online
                  </h4>
                  <p className='text-sm text-on-primary'>
                    shop.sisenenergia.com
                  </p>
                </div>
              </div>
              <p className='text-on-primary'>
                Catálogo WooCommerce estructurado para la venta de insumos
                solares y fotovoltaicos de alta potencia.
              </p>
              <ul className='space-y-4 pt-4'>
                <li className='flex items-center gap-3 text-sm'>
                  <span>
                    <CheckedIcon />
                  </span>
                  <span>Cupones de bienvenida por registro</span>
                </li>
                <li className='flex items-center gap-3 text-sm'>
                  <span>
                    <CheckedIcon />
                  </span>
                  <span>Precios dinámicos para mayoristas</span>
                </li>
                <li className='flex items-center gap-3 text-sm'>
                  <span>
                    <CheckedIcon />
                  </span>
                  <span>Gestión de stock sincronizada</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='py-32 bg-secondary-background rounded-t-4xl'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='mb-20 space-y-4'>
            <h2 className='text-2xl sm:text-4xl text-text-primary font-heading font-bold'>
              Funcionalidades <HighlightText>Operativas</HighlightText>
            </h2>
            <p className='text-text-secondary'>
              Optimización de flujos B2B y B2C bajo el mismo stack tecnológico.
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {content2.map((item) => (
              <div
                key={item.id}
                className='bg-white p-10 rounded-[2.5rem] border border-gray-100 space-y-6 group hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'
              >
                <div className='text-primary transition-all duration-500'>
                  {item.icon}
                </div>
                <h4 className='font-semibold font-heading'>{item.title}</h4>
                <p className='text-sm text-text-secondary'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-32 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid lg:grid-cols-12 gap-16 items-center'>
            <div className='lg:col-span-6 space-y-8'>
              <h2 className='text-2xl sm:text-4xl text-text-primary font-heading font-bold'>
                Operativa <HighlightText>Centralizada</HighlightText>
              </h2>
              <p className='text-text-secondary text-xl mt-3 sm:mt-6'>
                Un solo panel para orquestar toda la actividad comercial. Menos
                complejidad, más rentabilidad.
              </p>
              <div className='space-y-4'>
                {content3.map((item, index) => (
                  <div
                    key={item.id}
                    className={`flex items-center gap-6 p-6 border-primary/20 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-secondary-background ${index < content3.length - 1 ? 'border-b' : ''}`}
                  >
                    <div className='text-primary p-4 bg-secondary-background rounded-2xl flex items-center justify-center shrink-0'>
                      {item.icon}
                    </div>
                    <div>
                      <h5 className='font-semibold font-heading'>
                        {item.title}
                      </h5>
                      <p className='text-xs font-medium text-text-tertiary'>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='lg:col-span-6 grid grid-cols-2 gap-4'>
              <div className='wireframe-box aspect-square rounded-3xl wireframe-line transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'></div>
              <div className='wireframe-box aspect-square rounded-3xl bg-secondary-background border-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'></div>
              <div className='wireframe-box aspect-square rounded-3xl bg-primary border-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.14)]'></div>
              <div className='wireframe-box aspect-square rounded-3xl wireframe-line transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'></div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-40 bg-tertiary-background text-white text-center transition-all duration-300 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'>
        <div className='max-w-4xl mx-auto px-6 space-y-12'>
          <p className='italic text-on-primary text-2xl md:text-4xl text-center mt-6 max-w-quaternary-max-width mx-auto font-heading'>
            &quot;No se trata de elegir entre servicios o productos. Se trata de
            construir un ecosistema donde ambos canales se fortalecen
            mutuamente.&quot;
          </p>
          <div className='grid md:grid-cols-3 gap-12 pt-16 border-t border-white/10'>
            <div className='space-y-2'>
              <h4 className='text-xs font-bold uppercase tracking-widest text-gray-500'>
                Upsell Inteligente
              </h4>
              <p className='text-sm'>Instalación + Accesorios</p>
            </div>
            <div className='space-y-2'>
              <h4 className='text-xs font-bold uppercase tracking-widest text-gray-500'>
                Optimización
              </h4>
              <p className='text-sm'>Plataforma Única</p>
            </div>
            <div className='space-y-2'>
              <h4 className='text-xs font-bold uppercase tracking-widest text-gray-500'>
                Tracción
              </h4>
              <p className='text-sm'>Datos Centralizados</p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-32 bg-white'>
        <div className='max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center'>
          <div className='space-y-8'>
            <h2 className='text-2xl sm:text-4xl text-text-primary font-heading font-bold'>
              Por Qué SISEN <HighlightText>Importa</HighlightText>
            </h2>
            <p className='text-text-secondary text-xl mt-3 sm:mt-6'>
              Este caso demuestra que la arquitectura de plataforma es lo que
              diferencia entre un negocio fragmentado y un ecosistema rentable.
              SISEN Energía no solo captura clientes para servicios, sino que
              los convierte en compradores recurrentes bajo una operativa
              unificada.
            </p>
            <div className='flex flex-wrap gap-4 pt-4' data-sd-id='142'>
              <span
                className='px-6 py-2 text-primary bg-secondary-background rounded-full text-2xs font-bold uppercase tracking-widest'
                data-sd-id='143'
              >
                WordPress
              </span>
              <span
                className='px-6 py-2 text-primary bg-secondary-background rounded-full text-2xs font-bold uppercase tracking-widest'
                data-sd-id='144'
              >
                WooCommerce
              </span>
              <span
                className='px-6 py-2 text-primary bg-secondary-background rounded-full text-2xs font-bold uppercase tracking-widest'
                data-sd-id='145'
              >
                Elementor Pro
              </span>
              <span
                className='px-6 py-2 text-primary bg-secondary-background rounded-full text-2xs font-bold uppercase tracking-widest'
                data-sd-id='146'
              >
                Stripe API
              </span>
            </div>
          </div>
          <div className='grid md:grid-cols-3 gap-8' data-sd-id='147'>
            <div className='text-center space-y-2' data-sd-id='148'>
              <h4
                className='text-primary text-5xl font-bold tracking-tighter'
                data-sd-id='149'
              >
                4 Sem
              </h4>
              <p
                className='text-2xs font-bold uppercase text-gray-400'
                data-sd-id='150'
              >
                Lanzamiento Dual
              </p>
            </div>
            <div className='text-center space-y-2' data-sd-id='151'>
              <h4
                className='text-primary text-5xl font-bold tracking-tighter'
                data-sd-id='152'
              >
                90%
              </h4>
              <p
                className='text-2xs font-bold uppercase text-gray-400'
                data-sd-id='153'
              >
                Automatización
              </p>
            </div>
            <div className='text-center space-y-2' data-sd-id='154'>
              <h4
                className='text-primary text-5xl font-bold tracking-tighter'
                data-sd-id='155'
              >
                Dual
              </h4>
              <p
                className='text-2xs font-bold uppercase text-gray-400'
                data-sd-id='156'
              >
                Ecosistema ROI
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProjectNextStep
        title='¿Tu negocio técnico necesita un motor e-commerce?'
        description='Diseñamos arquitecturas B2B/B2C que generan ingresos desde múltiples canales simultáneamente.'
        linkText='Iniciar Proyecto y Agendar Llamada'
      />
    </>
  )
}

import { HighlightText } from '@/components/common/HighlighText'
import { CaseHero } from '@/components/sections/CaseHero'
import {
  BankIcon,
  DataBaseIcon,
  FilterIcon,
  HammerIcon,
  HideIcon,
  LayoutIcon,
  ShieldIcon,
  UpscaleIcon,
  UsersIcon
} from '@/components/common/Icons'
import { ProjectNextStep } from '@/components/sections/ProjectNextStep'
import WordpressIcon from '@/assets/icons/wordpress.svg'
import HostingerIcon from '@/assets/icons/hostinger-icon.svg'
import ElementorIcon from '@/assets/icons/elementor.svg'
import Image from 'next/image'

const aditionalInfo = [
  {
    id: 0,
    title: 'Lanzamiento Rápido',
    description: 'Validación Inmediata'
  },
  {
    id: 1,
    title: 'Stack Ágil',
    description: 'WordPress + JetEngine'
  },
  {
    id: 2,
    title: 'Monetización Multiservicio',
    description: 'Inmuebles + Legalización'
  }
]

const content = [
  {
    id: 0,
    title: 'Falta de Transparencia',
    description:
      'Dificultad para conocer precios reales de mercado en diferentes regiones.',
    icon: <HideIcon />
  },
  {
    id: 1,
    title: 'Complejidad Legal',
    description:
      'Procesos legales lentos y opacos para la legalización de tierras.',
    icon: <HammerIcon />
  },
  {
    id: 2,
    title: 'Fragmentación de Datos',
    description:
      'Información de activos dispersa y de difícil acceso para el comprador.',
    icon: <DataBaseIcon />
  }
]

const content2 = [
  {
    id: 0,
    icon: WordpressIcon,
    title: 'WP + JetEngine',
    description:
      'Motores de búsqueda y filtros complejos desarrollados a bajo costo y alta velocidad.'
  },
  {
    id: 1,
    icon: ElementorIcon,
    title: 'Elementor Pro',
    description:
      'Diseño flexible y editable por el equipo cliente sin depender de programadores expertos.'
  },
  {
    id: 2,
    icon: HostingerIcon,
    title: 'Hostinger Lite',
    description:
      'Infraestructura económica en etapa de validación con alto rendimiento de carga inicial.'
  }
]

const content3 = [
  {
    id: 0,
    icon: <FilterIcon className='size-8' />,
    title: 'Filtrado Avanzado',
    description:
      'Búsqueda por provincia, rango de precio en Kwanzas/USD y tipo de activo inmobiliario.'
  },
  {
    id: 1,
    icon: <UsersIcon className='size-8' />,
    title: 'Publicación Directa',
    description:
      'Módulos integrados para agencias e intermediarios con control total de sus listados.'
  },
  {
    id: 2,
    icon: <BankIcon className='size-8' />,
    title: 'Legalización Integrada',
    description:
      'Flujo directo para servicios jurídicos, diversificando las fuentes de ingresos del portal.'
  },
  {
    id: 3,
    icon: <LayoutIcon className='size-8' />,
    title: 'Gestión Autónoma',
    description:
      'Capacitación del equipo local para administrar listados y blog sin soporte técnico.'
  }
]

export default function AngolaTerrenosPage() {
  return (
    <>
      <CaseHero
        name='Angola Terrenos'
        description='Marketplace y gestor de terrenos para inversión inmobiliaria en mercados emergentes.'
        aditionalInfo={aditionalInfo}
      />

      <section className='bg-linear-to-b from-complementary/20 to-secondary-background py-20 md:py-30 lg:py-20 px-4 rounded-t-4xl -mt-5'>
        <div className='max-w-primary-max-width mx-auto flex flex-col md:flex-row items-stretch gap-10 md:gap-15'>
          <div className='md:w-1/2'>
            <h2 className='text-2xl sm:text-4xl text-text-primary font-heading font-bold'>
              El <HighlightText>Reto</HighlightText> del Mercado Inmobiliario
              Angoleño
            </h2>
            <p className='text-text-secondary text-xl mt-3 sm:mt-6'>
              Digitalizar la oferta de lotes y terrenos agrícolas en Angola, un
              mercado con poca transparencia de precios y una alta necesidad de
              seguridad jurídica.
            </p>
            <ul className='flex flex-col gap-6 mt-6'>
              {content.map((item) => (
                <li
                  key={item.id}
                  className='flex items-start gap-4 bg-background p-5 rounded-3xl border border-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)] hover:border-primary/20'
                >
                  <span className='size-10 flex items-center justify-center shrink-0 rounded-full bg-primary text-on-primary font-semibold'>
                    {item.icon}
                  </span>
                  <div>
                    <h3 className='text-text-primary font-semibold font-heading'>
                      {item.title}
                    </h3>
                    <p className='text-text-secondary mt-1'>
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className='h-auto bg-primary md:w-1/2 rounded-4xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)]'>
            <span className='text-on-primary font-bold'>
              Mapas Activos Angola
            </span>
          </div>
        </div>
      </section>

      <section className='py-32 bg-white  '>
        <div className='max-w-primary-max-width mx-auto px-6 text-center space-y-12'>
          <div className='space-y-4 max-w-3xl mx-auto'>
            <h2 className='text-2xl sm:text-4xl text-text-primary font-heading font-bold'>
              Estrategia de Validación:{' '}
              <HighlightText>Time-to-Market Récord</HighlightText>
            </h2>
            <p className='italic text-text-secondary text-xl text-center mt-6 max-w-quaternary-max-width mx-auto'>
              &quot;No siempre se necesita custom code. A veces, pragmatismo
              técnico es rentabilidad.&quot;
            </p>
          </div>
          <div className='grid md:grid-cols-3 gap-8 text-left pt-12'>
            {content2.map((item) => (
              <article
                key={item.id}
                className='space-y-6 p-10 bg-secondary-background rounded-[2.5rem] group hover:bg-primary transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]'
              >
                <div className='w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl transition-colors'>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={25}
                    height={25}
                  />
                </div>
                <div className='space-y-3'>
                  <h3 className='text-xl font-semibold font-heading group-hover:text-on-primary transition-colors'>
                    {item.title}
                  </h3>
                  <p className='text-sm text-text-secondary group-hover:text-on-primary leading-relaxed transition-colors'>
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='py-32 bg-secondary-background  rounded-4xl -mt-5'>
        <div className='max-w-primary-max-width mx-auto px-6'>
          <div className='mb-20 space-y-4'>
            <h2 className='text-2xl sm:text-4xl text-text-primary font-heading font-bold'>
              Funcionalidades Operativas
            </h2>
            <p className='text-text-secondary text-xl mt-3 sm:mt-4'>
              Ecosistema de captación y gestión desarrollado en pocas semanas.
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {content3.map((item) => (
              <article
                key={item.id}
                className='bg-white p-8 rounded-3xl border border-gray-100 space-y-6 group hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]'
              >
                <span className='block text-text-tertiary mb-4'>
                  {item.icon}
                </span>
                <h4 className='text-lg font-semibold font-heading text-text-primary'>
                  {item.title}
                </h4>
                <p className='text-text-secondary text-sm'>
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='py-32 bg-background  '>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='p-12 rounded-[3rem] bg-secondary-background border-border space-y-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'>
              <h3 className='text-2xl font-heading font-semibold text-text-primary flex items-center gap-3'>
                <span>
                  <UpscaleIcon />
                </span>
                <span>Ingresos por Listados</span>
              </h3>
              <ul className='flex flex-col gap-4 pl-4'>
                <li className='text-text-secondary list-disc'>
                  Comisiones de agencias por visibilidad destacada.
                </li>
                <li className='text-text-secondary list-disc'>
                  <span>
                    Planes de suscripción para intermediarios recurrentes.
                  </span>
                </li>
              </ul>
            </div>
            <div className='p-12 rounded-[3rem] bg-primary text-white space-y-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.14)]'>
              <h3 className='text-2xl font-semibold font-heading text-on-primary flex items-center gap-3'>
                <span>
                  <ShieldIcon />
                </span>
                <span>Servicios Jurídicos</span>
              </h3>
              <ul className='flex flex-col gap-4 pl-4'>
                <li className='text-on-primary list-disc'>
                  <span>
                    Honorarios por servicios de legalización de inmuebles.
                  </span>
                </li>
                <li className='text-on-primary list-disc'>
                  <span>
                    Asesoría directa en compra/venta de terrenos agrícolas.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='py-32 bg-linear-to-b from-complementary/20 to-secondary-background  rounded-t-4xl'>
        <div className='max-w-primary-max-width mx-auto px-6'>
          <div className='grid lg:grid-cols-3 gap-8'>
            <div className='space-y-4'>
              <div className='wireframe-box aspect-16/10 rounded-3xl wireframe-line  '></div>
              <p className='text-xs font-bold uppercase tracking-widest text-text-tertiary text-center'>
                Portal Listings View
              </p>
            </div>
            <div className='space-y-4'>
              <div className='wireframe-box aspect-16/10 rounded-3xl wireframe-line  '></div>
              <p className='text-xs font-bold uppercase tracking-widest text-text-tertiary text-center'>
                Advanced Search / Filter UI
              </p>
            </div>
            <div className='space-y-4'>
              <div className='wireframe-box aspect-16/10 rounded-3xl wireframe-line  '></div>
              <p className='text-xs font-bold uppercase tracking-widest text-text-tertiary text-center'>
                Property Detail Page
              </p>
            </div>
          </div>

          <div className='grid md:grid-cols-3 gap-8 mt-20 pt-20 border-t border-gray-200'>
            <div className='text-center space-y-2'>
              <h4 className='text-primary text-5xl font-bold tracking-tighter'>
                &lt; 4 Semanas
              </h4>
              <p className='text-xs font-bold uppercase tracking-widest text-text-secondary'>
                Tiempo a Mercado
              </p>
            </div>
            <div className='text-center space-y-2'>
              <h4 className='text-primary text-5xl font-bold tracking-tighter'>
                -70%
              </h4>
              <p className='text-xs font-bold uppercase tracking-widest text-text-secondary'>
                Costo vs Custom Build
              </p>
            </div>
            <div className='text-center space-y-2'>
              <h4 className='text-primary text-5xl font-bold tracking-tighter'>
                Semana 2
              </h4>
              <p className='text-xs font-bold uppercase tracking-widest text-text-secondary'>
                Primeros Ingresos
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-40 bg-white  '>
        <div className='max-w-5xl mx-auto px-6 text-center space-y-12'>
          <p className='italic text-text-secondary text-2xl md:text-4xl text-center mt-6 max-w-quaternary-max-width mx-auto font-heading'>
            &quot;No siempre custom code es sinónimo de mejor resultado. A
            veces, la herramienta correcta elegida con pragmatismo es lo que
            diferencia entre validación rápida y desperdicio de
            presupuesto.&quot;
          </p>
          <div className='flex justify-center gap-12 pt-12 border-t border-gray-100'>
            <div className='flex flex-col items-center gap-3'>
              <span className='text-xs font-bold uppercase tracking-widest text-text-tertiary'>
                Evaluación Directa
              </span>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <span className='text-xs font-bold uppercase tracking-widest text-text-tertiary'>
                Zero Desperdicio
              </span>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <span className='text-xs font-bold uppercase tracking-widest text-text-tertiary'>
                Rentabilidad Temprana
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className='py-32 bg-tertiary-background px-4 rounded-t-4xl -mt-5'>
        <div className='max-w-primary-max-width mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center'>
          <div className='space-y-8'>
            <h2 className='text-2xl sm:text-4xl text-on-primary font-heading font-bold'>
              Por Qué Angola Terrenos Importa
            </h2>
            <p className='text-on-primary/80 mt-3'>
              Este caso demuestra que la mejor solución no siempre es la más
              compleja. NexHorizon evalúa el contexto de mercado, presupuesto y
              timelines para entregar exactamente lo que se necesita. Angola
              Terrenos validó su modelo de negocio con inversión mínima,
              permitiendo escalar sin riesgo financiero.
            </p>
            <div className='flex gap-4 pt-4'>
              <div className='bg-primary/20 px-4 py-2 border border-white/20 text-on-primary rounded-full text-2xs font-bold uppercase tracking-widest'>
                Pragmatismo
              </div>
              <div className='bg-primary/20 px-4 py-2 border border-white/20 text-on-primary rounded-full text-2xs font-bold uppercase tracking-widest'>
                Eficiencia
              </div>
              <div className='bg-primary/20 px-4 py-2 border border-white/20 text-on-primary rounded-full text-2xs font-bold uppercase tracking-widest'>
                Resultados
              </div>
            </div>
          </div>
          <div className='relative'>
            <div className='wireframe-box aspect-square rounded-[3rem] bg-white/5 border-white/10 flex items-center justify-center  '></div>
          </div>
        </div>
      </section>

      <ProjectNextStep
        title='¿Tu mercado emergente necesita validación pragmática?'
        description='Evaluamos tu contexto y te recomendamos la mejor ruta técnica para monetizar rápido.'
        linkText='Iniciar Proyecto y Agendar Llamada'
      />
    </>
  )
}

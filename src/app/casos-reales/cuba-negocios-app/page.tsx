import { HighlightText } from '@/components/common/HighlighText'
import {
  CheckedIcon,
  DollarIcon,
  StadisticsIcon,
  UpscaleIcon,
  WalletIcon
} from '@/components/common/Icons'
import { CaseHero } from '@/components/sections/CaseHero'
import { ProjectNextStep } from '@/components/sections/ProjectNextStep'
import { TechnicalArchitecure } from '@/components/sections/TechnicalArchitecure'
import { TheChallange } from '@/components/sections/The Challange'

const aditionalInfo = [
  {
    id: 0,
    title: '+1,000',
    description: 'Descargas Totales'
  },
  {
    id: 1,
    title: '+180',
    description: 'Negocios Pagando'
  },
  {
    id: 2,
    title: '+300',
    description: 'Usuarios Diarios'
  }
]

const content = [
  {
    id: 0,
    icon: <StadisticsIcon className='size-5' />,
    title: 'Descargas & Usuarios',
    description:
      '+1,000 instalaciones orgánicas y +300 usuarios activos que utilizan la app para decisiones de compra diarias.'
  },
  {
    id: 1,
    icon: <WalletIcon className='size-5' />,
    title: 'Negocios Monetizando',
    description:
      '+180 negocios registrados con suscripción activa, validando la disposición de pago desde el mes 2.'
  },
  {
    id: 2,
    icon: <DollarIcon className='size-5' />,
    title: 'Ingresos Recurrentes',
    description:
      'Plan Emprendedor (2 USD/mes) y Plan Empresas (5 USD/mes). Monetización B2B real y escalable.'
  }
]

export default function CubaNegociosAppPage() {
  return (
    <>
      <CaseHero
        name='Cuba Negocios App'
        description='Directorio comercial geolocalizado con modelo de monetización B2B validado en mercado con restricción de conectividad.'
        aditionalInfo={aditionalInfo}
      />
      <section className='hidden md:block relative bg-complementary/30 px-4 py-20 rounded-t-4xl'>
        <div className='absolute -top-8 sm:-top-20 left-0 right-0 flex flex-col sm:flex-row items-stretch gap-8 max-w-primary-max-width mx-auto px-4'>
          {content.map((item) => (
            <article
              className='group flex-1 border border-border p-8 rounded-3xl bg-on-primary flex flex-col gap-4 transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'
              key={item.id}
            >
              <div className='bg-secondary-background p-3.5 rounded-2xl w-fit text-primary transition-all duration-300 group-hover:shadow-[0_12px_24px_rgba(15,23,42,0.08)]'>
                {item.icon}
              </div>
              <h3 className='text-text-primary font-semibold font-heading'>
                {item.title}
              </h3>
              <p className='text-text-secondary text-sm'>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
      <TheChallange />
      <TechnicalArchitecure />
      {/* Validacion b2b */}
      <section className='bg-background py-30 px-4'>
        <div className='max-w-primary-max-width mx-auto flex flex-col sm:flex-row items-center gap-5'>
          <div className='bg-gray-500 w-full sm:w-1/2 h-87.5 rounded-4xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'></div>
          <div className='sm:w-1/2 flex flex-col gap-3 sm:gap-6'>
            <span className='uppercase text-xs sm:text-sm text-text-tertiary font-medium'>
              Validación B2B
            </span>
            <h2 className='font-bold font-heading text-2xl sm:text-3xl text-text-primary text-pretty'>
              <HighlightText>Ingresos Activos</HighlightText> desde el Mes 2
            </h2>
            <p className='text-text-secondary'>
              La base recurrente de +180 negocios pagando valida el modelo de
              suscripción. Cero desperdicio en infraestructura cloud optimizada.
            </p>
          </div>
        </div>
        <div className='max-w-primary-max-width mx-auto flex flex-col sm:flex-row items-center gap-5 mt-20'>
          <div className='sm:w-1/2 flex flex-col gap-3 sm:gap-6'>
            <span className='uppercase text-sm text-text-tertiary font-medium'>
              UX Estratégico
            </span>
            <h2 className='font-bold font-heading text-2xl sm:text-3xl text-text-primary text-pretty'>
              Diseño Centrado en <HighlightText>Conversión</HighlightText>
            </h2>
            <p className='text-text-secondary'>
              Interfaces pulidas que eliminan la fricción. Cada decisión de
              diseño fue testeada para convertir negocios en clientes de pago.
            </p>
            <div className='flex items-center gap-6'>
              <div className='w-1/2 bg-gray-500 h-42 md:h-62.5 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'></div>
              <div className='w-1/2 bg-gray-500 h-42 md:h-62.5 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'></div>
            </div>
          </div>
          <div className='bg-gray-500 w-full sm:w-1/2 h-87.5 rounded-4xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'></div>
        </div>
      </section>

      <section className='bg-secondary-background py-20 sm:py-30 px-4 rounded-4xl -mt-5'>
        <div className='max-w-primary-max-width mx-auto'>
          <h2 className='text-2xl sm:text-4xl text-text-primary text-center font-bold font-heading'>
            Estrategia de <HighlightText>Escalabilidad</HighlightText>
          </h2>
          <p className='text-text-secondary text-lg text-center mt-3'>
            Desarrollamos un canal de crecimiento único para el contexto del
            mercado cubano.
          </p>
          <article className='bg-background flex flex-col sm:flex-row gap-5 sm:gap-10 rounded-2xl sm:rounded-4xl p-6 sm:p-12 mt-10 box-shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'>
            <div className='flex items-center gap-4'>
              <span className='rounded-full p-7 flex items-center justify-center  shrink-0 bg-primary text-on-primary w-fit'>
                <UpscaleIcon className='size-6 sm:size-10' />
              </span>
              <h3 className='sm:hidden text-lg sm:text-xl text-text-primary font-semibold font-heading text-pretty'>
                Programa de Vendedores Comisionistas
              </h3>
            </div>
            <div>
              <h3 className='hidden sm:block text-xl text-text-primary font-bold'>
                Programa de Vendedores Comisionistas
              </h3>
              <p className='sm:mt-5 text-text-secondary'>
                Creación de una red de afiliados que cobran en moneda local
                (CUP). Esta estrategia física descentralizada permitió un CAC
                (Costo de Adquisición de Clientes) optimizado y una penetración
                de mercado masiva sin inversión en Ads digitales tradicionales.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className='bg-background py-20 sm:py-30 px-4'>
        <div className='max-w-primary-max-width mx-auto flex flex-col items-center'>
          <h2 className='text-2xl sm:text-4xl text-text-primary text-center font-bold font-heading'>
            Por Qué <HighlightText>Funciona</HighlightText> Este{' '}
            <HighlightText>Modelo</HighlightText>
          </h2>
          <p className='text-text-secondary text-center text-lg mt-3 sm:mt-5 italic max-w-2xl'>
            No vendemos software. Aplicamos ingeniería y diseño estratégico para
            que tu proyecto empiece a facturar lo antes posible.
          </p>
          <div className='bg-secondary-background p-5 sm:p-10 rounded-3xl max-w-quaternary-max-width mt-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.06)]'>
            <p className='text-lg text-text-primary'>
              &quot;<strong>Cuba Negocios </strong> demuestra que es posible
              construir <strong>negocios digitales sostenibles </strong>incluso
              en mercados con restricciones técnicas y económicas severas. La
              clave no es la complejidad del código, sino la velocidad de la
              validación comercial.&quot;
            </p>
            <div className='flex items-center gap-2 mt-5 text-text-secondary'>
              <CheckedIcon />
              <p className='uppercase text-2xs sm:text-sm font-medium'>
                Conclusión Estratégica NexHorizons
              </p>
            </div>
          </div>
        </div>
      </section>
      <ProjectNextStep
        title='¿Tu proyecto necesita este mismo modelo?'
        description='Hablemos de cómo validar tu idea y generar ingresos en tiempo récord.'
        linkText='Iniciar Proyecto y Agendar Llamada'
      />
    </>
  )
}

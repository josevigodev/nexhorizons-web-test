import { HighlightText } from '@/components/common/HighlighText'
import {
  AwardIcon,
  BookIcon,
  CalendarCheckedIcon,
  EstetoIcon,
  HeartIcon,
  MessageSquareIcon,
  PlaneIcon,
  UserOkIcon
} from '@/components/common/Icons'
import { CaseHero } from '@/components/sections/CaseHero'
import { ProjectNextStep } from '@/components/sections/ProjectNextStep'

const aditionalInfo = [
  {
    id: 0,
    title: 'Presencia Digital',
    description: 'Autoridad Validada'
  },
  {
    id: 1,
    title: 'Confianza Médica',
    description: 'Transparencia Total'
  },
  {
    id: 2,
    title: 'Agendamiento Directo',
    description: 'Cero Fricción'
  }
]

const content2 = [
  {
    id: 0,
    icon: <AwardIcon className='size-6' />,
    title: 'Credenciales & Experiencia',
    description:
      'Destacar +35 años de práctica, especializaciones en ecografía y certificaciones médicas internacionales.'
  },
  {
    id: 1,
    icon: <MessageSquareIcon className='size-6' />,
    title: 'Credenciales & Experiencia',
    description:
      'Destacar +35 años de práctica, especializaciones en ecografía y certificaciones médicas internacionales.'
  },
  {
    id: 2,
    icon: <CalendarCheckedIcon className='size-6' />,
    title: 'Credenciales & Experiencia',
    description:
      'Destacar +35 años de práctica, especializaciones en ecografía y certificaciones médicas internacionales.'
  }
]

const content3 = [
  {
    id: 0,
    icon: <UserOkIcon className='size-8' />,
    title: 'Credenciales & Experiencia',
    description:
      'Destacar +35 años de práctica, especializaciones en ecografía y certificaciones médicas internacionales.'
  },
  {
    id: 1,
    icon: <HeartIcon className='size-8' />,
    title: 'Credenciales & Experiencia',
    description:
      'Destacar +35 años de práctica, especializaciones en ecografía y certificaciones médicas internacionales.'
  },
  {
    id: 2,
    icon: <PlaneIcon className='size-8' />,
    title: 'Credenciales & Experiencia',
    description:
      'Destacar +35 años de práctica, especializaciones en ecografía y certificaciones médicas internacionales.'
  },
  {
    id: 3,
    icon: <BookIcon className='size-8' />,
    title: 'Credenciales & Experiencia',
    description:
      'Destacar +35 años de práctica, especializaciones en ecografía y certificaciones médicas internacionales.'
  }
]

const content4 = [
  {
    id: 0,
    title: 'Falta de Presencia Profesional',
    description:
      'Sin un hub central, la información profesional estaba fragmentada y no transmitía la autoridad real del doctor.'
  },
  {
    id: 1,
    title: 'Barrera de Agendamiento',
    description:
      'Procesos de reserva indirectos o complejos que disuadían al paciente de primer contacto.'
  },
  {
    id: 2,
    title: 'Credibilidad No Comunicada',
    description:
      'Más de 35 años de experiencia y miles de pacientes satisfechos que no eran visibles digitalmente.'
  }
]

export default function DrHubertoFeblesPage() {
  return (
    <>
      <CaseHero
        name='Dr. Humberto Febles'
        description='Presencia digital médica que transmite confianza inmediata y elimina fricción en la captación de pacientes: +35 años de experiencia digitalizada.'
        aditionalInfo={aditionalInfo}
      />

      <section className='py-32 bg-linear-to-b from-complementary/20 to-secondary-background rounded-4xl'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid lg:grid-cols-2 gap-24 items-start'>
            <div className='space-y-12'>
              <h2 className='text-2xl sm:text-4xl text-text-primary font-heading font-bold'>
                <HighlightText>El Reto</HighlightText> de la Medicina Privada
                Digital
              </h2>
              <p className='text-text-secondary text-xl mt-3 sm:mt-6'>
                Un profesional médico altamente establecido pero sin una
                presencia digital efectiva, lo que resultaba en la pérdida de
                pacientes potenciales que hoy buscan y validan credenciales
                exclusivamente en línea antes de llamar.
              </p>
              <div className='grid gap-6'>
                {content4.map((item) => (
                  <div
                    key={item.id}
                    className='group p-8 bg-white rounded-4xl border border-gray-100 hover:border-primary transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'
                  >
                    <h4 className='font-semibold font-heading text-lg mb-2'>
                      {item.title}
                    </h4>
                    <p className='text-sm text-text-secondary'>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className='relative'>
              <div className='wireframe-box aspect-3/4 rounded-[3rem] wireframe-line  '></div>
              <div className='absolute -bottom-10 -left-10 p-10 bg-primary text-white rounded-[2.5rem] shadow-2xl max-w-xs space-y-4'>
                <span className='block mb-4'>
                  <EstetoIcon className='size-10' />
                </span>
                <h3 className='text-xl font-semibold font-heading'>
                  Digitalización Ética
                </h3>
                <p className='text-sm text-on-primary'>
                  Transferimos 35 años de medicina analógica a una interfaz
                  humana y eficiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-32 bg-white  '>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center max-w-3xl mx-auto mb-20 space-y-4'>
            <h2 className='text-2xl sm:text-4xl text-text-primary font-heading font-bold'>
              Estrategia de{' '}
              <HighlightText>Presencia Médica Confiable</HighlightText>
            </h2>
            <p className='text-text-secondary text-xl mt-3 sm:mt-6 italic'>
              &quot;No se trataba de un sitio web. Se trataba de transferir 35
              años de experiencia al formato digital sin perder humanidad.&quot;
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {content2.map((item) => (
              <div
                key={item.id}
                className='p-12 bg-secondary-background rounded-[3rem] space-y-6 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1'
              >
                <div className='p-3 bg-primary text-on-primary flex items-center justify-center rounded-xl w-fit'>
                  {item.icon}
                </div>
                <h4 className='text-xl text-text-primary font-semibold font-heading'>
                  {item.title}
                </h4>
                <p className='text-sm text-text-secondary'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-32 bg-secondary-background rounded-4xl '>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid lg:grid-cols-4 gap-6'>
            {content3.map((item) => (
              <div
                key={item.id}
                className='group bg-white p-10 rounded-3xl border border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'
              >
                <span className='block mb-4 text-primary'>{item.icon}</span>
                <h4 className='font-semibold font-heading mb-3 text-text-primary'>
                  {item.title}
                </h4>
                <p className='text-sm text-text-secondary'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-32 bg-white  '>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid lg:grid-cols-2 gap-20 items-center'>
            <div className='space-y-8'>
              <h2 className='text-2xl sm:text-4xl text-text-primary font-heading font-bold'>
                Alcance Local, <HighlightText>Confianza Global</HighlightText>
              </h2>
              <p className='text-lg text-text-secondary'>
                Digitalizar la consulta permitió al Dr. Febles no solo captar
                pacientes en su localidad, sino también atraer a personas de
                toda la provincia que buscaban su especialidad específica.
              </p>
              <div className='grid md:grid-cols-3 gap-6 pt-4'>
                <div className='space-y-2 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(15,23,42,0.08)]'>
                  <span className='text-3xl font-bold text-primary'>
                    Alicante
                  </span>
                  <p className='text-2xs uppercase font-bold text-gray-400 tracking-widest'>
                    Cobertura Local
                  </p>
                </div>
                <div className='space-y-2 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(15,23,42,0.08)]'>
                  <span className='text-3xl font-bold text-primary'>
                    Directo
                  </span>
                  <p className='text-2xs uppercase font-bold text-gray-400 tracking-widest'>
                    Sin Intermediarios
                  </p>
                </div>
                <div className='space-y-2 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(15,23,42,0.08)]'>
                  <span className='text-3xl font-bold text-primary'>+95%</span>
                  <p className='text-2xs uppercase font-bold text-gray-400 tracking-widest'>
                    Tasa Satisfacción
                  </p>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='wireframe-box aspect-square rounded-4xl wireframe-line  '></div>
              <div className='wireframe-box aspect-square rounded-4xl bg-secondary-background border-none  '></div>
              <div className='wireframe-box aspect-square rounded-4xl bg-primary border-none flex items-center justify-center  '></div>
              <div className='wireframe-box aspect-square rounded-4xl wireframe-line  '></div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-40 bg-tertiary-background text-white relative overflow-hidden  '>
        <div className='max-w-4xl mx-auto px-6 text-center space-y-12 relative z-10'>
          <p className='italic text-on-primary text-2xl md:text-4xl text-center mt-6 max-w-quaternary-max-width mx-auto font-heading'>
            &quot;Un sitio web médico no vende servicios. Transmite confianza.
            La confianza vende citas. Las citas venden credibilidad.&quot;
          </p>
          <div className='flex justify-center gap-12 pt-8 border-t border-white/10'>
            <span className='text-2xs font-bold uppercase tracking-[0.3em] text-on-primary/50'>
              Transparencia Médica
            </span>
            <span className='text-2xs font-bold uppercase tracking-[0.3em] text-on-primary/50'>
              Arquitectura Humana
            </span>
          </div>
        </div>
      </section>

      <section className='py-32 bg-background'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='p-12 border border-gray-100 rounded-[3rem] text-center space-y-4 hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'>
              <h4 className='text-primary text-5xl font-bold font-heading tracking-tighter'>
                4 Semanas
              </h4>
              <p className='text-2xs font-bold uppercase tracking-[0.2em] text-gray-400'>
                Implementación Total
              </p>
            </div>
            <div className='p-12 border border-gray-100 rounded-[3rem] text-center space-y-4 bg-secondary-background transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'>
              <h4 className='text-primary text-5xl font-bold font-heading tracking-tighter'>
                Sostenido
              </h4>
              <p className='text-2xs font-bold uppercase tracking-[0.2em] text-gray-400'>
                Crecimiento de Citas
              </p>
            </div>
            <div className='p-12 border border-gray-100 rounded-[3rem] text-center space-y-4 hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'>
              <h4 className='text-primary text-5xl font-bold font-heading tracking-tighter'>
                ROI Directo
              </h4>
              <p className='text-2xs font-bold uppercase tracking-[0.2em] text-gray-400'>
                Validación Inmediata
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-32 bg-linear-to-b from-complementary/20 to-secondary-background rounded-4xl'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='bg-white rounded-[4rem] p-16 md:p-24 border border-gray-100 grid lg:grid-cols-2 gap-20 items-center  '>
            <div className='space-y-8'>
              <h2 className='text-2xl sm:text-4xl text-text-primary font-heading font-bold'>
                Stack Tecnológico:{' '}
                <HighlightText>Simplicidad y Confiabilidad</HighlightText>
              </h2>
              <p className='text-lg text-text-secondary'>
                Para el Dr. Febles, elegimos un stack que prioriza la velocidad
                de carga y la facilidad de contacto, eliminando cualquier capa
                de complejidad innecesaria para el paciente.
              </p>
              <div className='flex flex-wrap gap-4'>
                <span className='px-6 py-2 border border-transparent bg-secondary-background text-primary rounded-full text-2xs font-bold uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_12px_24px_rgba(15,23,42,0.08)]'>
                  WordPress
                </span>
                <span className='px-6 py-2 border border-transparent bg-secondary-background text-primary rounded-full text-2xs font-bold uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_12px_24px_rgba(15,23,42,0.08)]'>
                  Elementor Pro
                </span>
                <span className='px-6 py-2 border border-transparent bg-secondary-background text-primary rounded-full text-2xs font-bold uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_12px_24px_rgba(15,23,42,0.08)]'>
                  WhatsApp API
                </span>
                <span className='px-6 py-2 border border-transparent bg-secondary-background text-primary rounded-full text-2xs font-bold uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_12px_24px_rgba(15,23,42,0.08)]'>
                  Local SEO
                </span>
              </div>
            </div>
            <div className='wireframe-box aspect-video rounded-[2.5rem] wireframe-line flex items-center justify-center bg-gray-50  '>
              <div className='text-center space-y-2'>
                <p className='text-2xs font-mono text-gray-300'>
                  Infraestructura de Confianza
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-32 bg-white  '>
        <div className='max-w-4xl mx-auto px-6 space-y-10'>
          <h2 className='text-2xl sm:text-4xl text-text-primary font-heading font-bold'>
            Por Qué Dr. Humberto Febles <HighlightText>Importa</HighlightText>{' '}
            para NexHorizon
          </h2>
          <div className='h-px w-20 bg-primary'></div>
          <p className='italic text-text-secondary text-2xl md:text-2xl text-center mt-6 max-w-quaternary-max-width mx-auto'>
            &quot;Este caso demuestra que un profesional establecido puede
            multiplicar su alcance digital sin sacrificar la confianza médica.
            La presencia en línea no es un lujo, es una necesidad estratégica.
            Validamos que 35 años de experiencia pueden condensarse en un activo
            digital que genera rentabilidad permanente.&quot;
          </p>
        </div>
      </section>

      <ProjectNextStep
        title='¿Tu práctica profesional necesita presencia digital confiable?'
        description='Construimos la arquitectura de confianza que convierte visitantes en clientes/pacientes recurrentes.'
        linkText='Iniciar Proyecto y Agendar Llamada'
      />
    </>
  )
}

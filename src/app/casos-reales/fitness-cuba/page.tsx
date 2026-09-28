import { HighlightText } from '@/components/common/HighlighText'
import {
  AwardIcon,
  CameraIcon,
  ClockIcon,
  CollageIcon,
  LaptopIcon,
  LocationIcon,
  LupeIcon,
  MailIcon,
  ShieldIcon,
  UpscaleIcon,
  VideoIcon
} from '@/components/common/Icons'
import { CaseHero } from '@/components/sections/CaseHero'
import { ProjectNextStep } from '@/components/sections/ProjectNextStep'

const aditionalInfo = [
  {
    id: 0,
    title: 'Autoridad Digital',
    description: 'Expertise Joekenpo'
  },
  {
    id: 1,
    title: 'Contenido de Valor',
    description: 'Biblioteca Educativa'
  },
  {
    id: 2,
    title: 'Monetización Recurrente',
    description: 'Pasivo + Activo'
  }
]

const content = [
  {
    id: 0,
    title: 'Alcance Geográfico Limitado',
    description:
      'El conocimiento del experto solo impactaba a quienes podían asistir físicamente a sus sesiones.',
    icon: <LocationIcon className='size-6' />
  },
  {
    id: 1,
    title: 'Dependencia del Tiempo',
    description:
      'Ingresos directamente proporcionales a las horas de entrenamiento presencial ejecutadas.',
    icon: <ClockIcon className='size-6' />
  },
  {
    id: 2,
    title: 'Fragilidad de Autoridad',
    description:
      'Marca personal sin un respaldo digital de contenido que validara su prestigio internacional.',
    icon: <ShieldIcon className='size-6' />
  }
]

const content2 = [
  {
    id: 0,
    title: 'Publicidad & Tráfico',
    description:
      'Monetización pasiva del volumen de visitas mediante patrocinios y redes de anuncios contextuales.',
    icon: <UpscaleIcon className='size-6' />
  },
  {
    id: 1,
    title: 'Certificaciones',
    description:
      'Venta de formaciones profesionales para avalar la metodología Joekenpo ante nuevos entrenadores.',
    icon: <CollageIcon className='size-6' />
  },
  {
    id: 2,
    title: 'Mentorías Online',
    description:
      'Servicio premium de consultoría y entrenamiento remoto 1-a-1 altamente escalable.',
    icon: <LaptopIcon className='size-6' />
  }
]

const content3 = [
  {
    id: 0,
    title: 'Atracción (Awareness)',
    description:
      'Lectores de blog atraídos por contenido SEO sobre bienestar y rendimiento.'
  },
  {
    id: 1,
    title: 'Interés (Database)',
    description:
      'Suscriptores que intercambian su email por guías de nutrición exclusivas.'
  },
  {
    id: 2,
    title: 'Conversión (Revenue)',
    description:
      'Venta de mentorías personalizadas y programas de certificación profesional.'
  },
  {
    id: 3,
    title: 'Lealtad (Legacy)',
    description: 'Graduados IIDCA que se convierten en embajadores de la marca.'
  }
]

export default function CariciaAromaticasPage() {
  return (
    <>
      <CaseHero
        name='Fitness Cuba'
        description='Plataforma de democratización de contenido y alcance internacional para Joekenpo: transformar expertise en activo digital escalable.'
        aditionalInfo={aditionalInfo}
      />

      <section className='py-32 bg-linear-to-b from-complementary/20 to-secondary-background rounded-4xl'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid lg:grid-cols-2 gap-20 items-start'>
            <div className='space-y-8'>
              <h2 className='text-2xl sm:text-4xl text-text-primary font-heading font-bold'>
                <HighlightText>El Reto:</HighlightText> De Entrenador Presencial
                a Marca Digital Global
              </h2>

              <p className='text-text-secondary text-xl mt-3 sm:mt-6'>
                Un experto en alto rendimiento deportivo y entrenamiento
                internacional cuya expertise estaba limitada al ámbito
                presencial y local, sin un activo digital que respaldara su
                autoridad a escala global.
              </p>
              <div className='space-y-4'>
                {content.map((item) => (
                  <div
                    key={item.id}
                    className='p-8 bg-white rounded-[2.5rem] border border-gray-100 flex items-start gap-6 hover-lift transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'
                  >
                    <span className='p-4 rounded-2xl bg-secondary-background flex items-center justify-center shrink-0 text-primary'>
                      {item.icon}
                    </span>
                    <div>
                      <h4 className='font-semibold font-heading text-lg'>
                        {item.title}
                      </h4>
                      <p className='text-sm text-text-secondary'>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='relative'>
              <div className='wireframe-box aspect-4/5 rounded-[3.5rem] wireframe-line flex flex-col items-center justify-center p-12 text-center  '>
                <h3 className='display-text text-xl font-bold text-gray-400'>
                  Joekenpo: Perfil de Autoridad
                </h3>
                <p className='text-xs font-mono uppercase text-gray-300 tracking-[0.2em] mt-2'>
                  Ex-deportista / Entrenador Internacional
                </p>
              </div>
              <div className='absolute -bottom-8 -left-8 p-10 bg-primary text-on-primary rounded-[2.5rem] max-w-xs shadow-2xl'>
                <p className='text-sm italic font-medium'>
                  &quot;El objetivo era digitalizar 20 años de experiencia en un
                  activo que trabaje 24/7.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-32 bg-background  '>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid lg:grid-cols-12 gap-16'>
            <div className='lg:col-span-5 space-y-6'>
              <h2 className='text-2xl sm:text-4xl text-text-primary font-heading font-bold'>
                <HighlightText>Estrategia:</HighlightText> Convertir Expertise
                en Patrimonio Digital
              </h2>
              <p className='italic text-text-secondary text-xl md:text-2xl'>
                &quot;No se trataba de vender entrenamiento. Se trataba de
                construir una biblioteca de autoridad digital.&quot;
              </p>
              <div className='h-1 w-20 bg-primary'></div>
            </div>
            <div className='lg:col-span-7'>
              <p className='text-lg text-text-secondary mb-8'>
                Diseñamos una arquitectura de contenido dinámico sobre WordPress
                + Elementor Pro enfocada en posicionamiento SEO. La meta: que
                cada búsqueda sobre nutrición o entrenamiento en Cuba terminara
                en fitnesscuba.com.
              </p>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                <div className='text-center space-y-2'>
                  <span className='text-xs font-bold uppercase tracking-widest text-text-tertiary'>
                    Keyword Focus
                  </span>
                  <p className='font-bold text-primary'>Nutrición</p>
                </div>
                <div className='text-center space-y-2'>
                  <span className='text-xs font-bold uppercase tracking-widest text-text-tertiary'>
                    Keyword Focus
                  </span>
                  <p className='font-bold text-primary'>MMA / Combat</p>
                </div>
                <div className='text-center space-y-2'>
                  <span className='text-xs font-bold uppercase tracking-widest text-text-tertiary'>
                    Keyword Focus
                  </span>
                  <p className='font-bold text-primary'>SIR Method</p>
                </div>
                <div className='text-center space-y-2'>
                  <span className='text-xs font-bold uppercase tracking-widest text-text-tertiary'>
                    Keyword Focus
                  </span>
                  <p className='font-bold text-primary'>Rutinas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20 bg-secondary-background rounded-4xl'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200 rounded-[3rem] overflow-hidden'>
            <div className='group p-12 bg-on-primary group hover:bg-primary transition-all duration-500 cursor-default  '>
              <h4 className='text-xs font-bold uppercase tracking-widest text-text-tertiary group-hover:text-on-primary mb-6'>
                Categoría 01
              </h4>
              <h3 className='display-text text-2xl font-semibold font-heading group-hover:text-on-primary transition-colors'>
                Nutrición
              </h3>
              <p className='text-sm text-text-secondary mt-4 group-hover:text-on-primary transition-colors'>
                Artículos científicos y guías prácticas sobre alimentación para
                deportistas.
              </p>
            </div>
            <div className='group p-12 bg-on-primary group hover:bg-primary transition-all duration-500 cursor-default  '>
              <h4 className='text-xs font-bold uppercase tracking-widest text-text-tertiary group-hover:text-on-primary mb-6'>
                Categoría 02
              </h4>
              <h3 className='display-text text-2xl font-semibold font-heading group-hover:text-on-primary transition-colors'>
                Suplementos
              </h3>
              <p className='text-sm text-text-secondary mt-4 group-hover:text-on-primary transition-colors'>
                Revisiones honestas y guías de uso de productos suplementarios.
              </p>
            </div>
            <div className='group p-12 bg-on-primary group hover:bg-primary transition-all duration-500 cursor-default  '>
              <h4 className='text-xs font-bold uppercase tracking-widest text-text-tertiary group-hover:text-on-primary mb-6'>
                Categoría 03
              </h4>
              <h3 className='display-text text-2xl font-semibold font-heading group-hover:text-on-primary transition-colors'>
                SIR Method
              </h3>
              <p className='text-sm text-text-secondary mt-4 group-hover:text-on-primary transition-colors'>
                Metodología exclusiva Joekenpo: Sostenibilidad, Intensidad y
                Resultados.
              </p>
            </div>
            <div className='group p-12 bg-on-primary group hover:bg-primary transition-all duration-500 cursor-default  '>
              <h4 className='text-xs font-bold uppercase tracking-widest text-text-tertiary group-hover:text-on-primary mb-6'>
                Categoría 04
              </h4>
              <h3 className='display-text text-2xl font-semibold font-heading group-hover:text-on-primary transition-colors'>
                MMA / Combat
              </h3>
              <p className='text-sm text-text-secondary mt-4 group-hover:text-on-primary transition-colors'>
                Técnica de combate aplicada al acondicionamiento físico extremo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-32 bg-white  '>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='mb-20 space-y-4'>
            <h2 className='text-2xl sm:text-4xl text-text-primary font-heading font-bold'>
              Funcionalidades de <HighlightText>Monetización</HighlightText>
            </h2>
            <p className='text-text-secondary text-xl mt-3 sm:mt-6'>
              Ecosistema diseñado para convertir lectores anónimos en clientes
              fidelizados.
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='p-10 rounded-[2.5rem] border border-gray-100 space-y-6 hover-lift bg-secondary-background  '>
              <span className='block text-primary mb-5'>
                <VideoIcon className='size-10' />
              </span>
              <h4 className='text-xl font-semibold font-heading'>
                Hub Educativo Multimedia
              </h4>
              <p className='text-sm text-text-secondary leading-relaxed'>
                Galería dinámica de video-rutinas incrustadas y módulos visuales
                de entrenamiento.
              </p>
            </div>
            <div className='p-10 rounded-[2.5rem] border border-gray-100 space-y-6 hover-lift bg-secondary-background  '>
              <span className='block text-primary mb-5'>
                <LupeIcon className='size-10' />
              </span>
              <h4 className='text-xl font-semibold font-heading'>
                Blog SEO de Alto Tráfico
              </h4>
              <p className='text-sm text-text-secondary leading-relaxed'>
                Arquitectura editorial optimizada para captar cientos de
                intenciones de búsqueda mensuales.
              </p>
            </div>
            <div className='p-10 rounded-[2.5rem] border border-gray-100 space-y-6 hover-lift bg-secondary-background  '>
              <span className='block text-primary mb-5'>
                <CameraIcon className='size-10' />
              </span>
              <h4 className='text-xl font-semibold font-heading'>
                Mentorías Digitales
              </h4>
              <p className='text-sm text-text-secondary leading-relaxed'>
                Sistema de agendamiento y venta de servicios de entrenamiento
                personalizado online.
              </p>
            </div>
            <div className='p-10 rounded-[2.5rem] border border-gray-100 space-y-6 hover-lift bg-primary text-white lg:col-span-2 flex items-center gap-12 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.12)]'>
              <div className='shrink-0 w-24 h-24 bg-white/20 rounded-full flex items-center justify-center'>
                <AwardIcon className='size-14' />
              </div>
              <div className='space-y-2'>
                <h4 className='text-2xl font-semibold font-heading text-on-primary'>
                  Certificación IIDCA CUBA
                </h4>
                <p className='text-on-primary font-light leading-relaxed'>
                  Integración de portal de formación profesional para avalar
                  nuevos entrenadores bajo la metodología fitnesscuba.
                </p>
              </div>
            </div>
            <div className='p-10 rounded-[2.5rem] border border-gray-100 space-y-6 hover-lift bg-secondary-background  '>
              <span className='block text-primary mb-5'>
                <MailIcon className='size-10' />
              </span>
              <h4 className='text-xl font-semibold font-heading'>
                Email Marketing
              </h4>
              <p className='text-sm text-text-secondary leading-relaxed'>
                Captación de leads mediante lead-magnets (rutinas gratis) para
                nutrición de base de datos propia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-32 bg-linear-to-b from-complementary/20 to-secondary-background rounded-t-4xl'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid lg:grid-cols-2 gap-20 items-center'>
            <div className='space-y-12'>
              <div className='space-y-4'>
                <h2 className='text-2xl sm:text-4xl text-text-primary font-heading font-bold'>
                  El Ecosistema:{' '}
                  <HighlightText>Tráfico → Ingresos</HighlightText>
                </h2>
                <p className='text-text-secondary text-xl mt-3 sm:mt-6'>
                  Un flujo circular que alimenta la autoridad de marca
                  constantemente.
                </p>
              </div>

              <div className='relative border-l-2 border-primary pl-12 space-y-12'>
                {content3.map((item) => (
                  <div key={item.id} className='relative'>
                    <div className='absolute -left-14.25 top-0 w-4 h-4 rounded-full bg-primary'></div>
                    <h4 className='font-semibold font-heading text-xl'>
                      {item.title}
                    </h4>
                    <p className='text-text-secondary text-sm mt-2'>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className='grid grid-cols-2 gap-6'>
              <div className='wireframe-box aspect-square rounded-[2.5rem] wireframe-line transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'></div>
              <div className='wireframe-box aspect-square rounded-[2.5rem] bg-primary border-none flex items-center justify-center p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.12)]'>
                <p className='text-white display-text font-bold text-center leading-tight'>
                  Biblioteca de Video-Rutinas
                </p>
              </div>
              <div className='wireframe-box aspect-square rounded-[2.5rem] bg-on-primary border-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'></div>
              <div className='wireframe-box aspect-square rounded-[2.5rem] wireframe-line transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'></div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-40 bg-white  '>
        <div className='max-w-5xl mx-auto px-6 text-center space-y-12'>
          <p className='italic text-text-secondary text-2xl md:text-4xl text-center mt-6 max-w-quaternary-max-width mx-auto font-heading'>
            &quot;El conocimiento sin plataforma es talento escondido. El
            contenido bien estructurado es patrimonio que escala sin límites de
            tiempo ni geografía.&quot;
          </p>
          <div className='flex justify-center gap-16 pt-12 border-t border-gray-100'>
            <div className='text-center'>
              <span className='block display-text text-xl font-bold'>
                Joekenpo
              </span>
              <span className='text-2xs font-bold uppercase tracking-widest text-gray-400'>
                CEO Fitness Cuba
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className='py-32 bg-secondary-background rounded-4xl'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid md:grid-cols-3 gap-12'>
            {content2.map((item) => (
              <div key={item.id} className='space-y-6'>
                <div className='w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl'>
                  {item.icon}
                </div>
                <h3 className='text-2xl font-semibold font-heading'>
                  {item.title}
                </h3>
                <p className='text-text-secondary'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-32 bg-white  '>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='p-12 text-center border border-border rounded-[3rem] hover-lift  '>
              <h4 className='text-primary text-6xl font-bold font-heading tracking-tighter'>
                Miles
              </h4>
              <p className='text-xs font-bold uppercase tracking-widest text-gray-400 mt-4'>
                Visitas Mensuales Orgánicas
              </p>
            </div>
            <div className='p-12 text-center bg-primary text-white rounded-[3rem] hover-lift transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.12)]'>
              <h4 className='text-on-primary text-6xl font-bold font-heading tracking-tighter'>
                Propia
              </h4>
              <p className='text-xs font-bold uppercase tracking-widest text-on-primary mt-4'>
                Base de Datos de Audiencia
              </p>
            </div>
            <div className='p-12 text-center border border-border rounded-[3rem] hover-lift  '>
              <h4 className='text-primary text-6xl font-bold font-heading tracking-tighter'>
                Global
              </h4>
              <p className='text-xs font-bold uppercase tracking-widest text-gray-400 mt-4'>
                Alcance e Impacto Internacional
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-32 bg-background'>
        <div className='max-w-5xl mx-auto px-6 text-center space-y-8'>
          <h2 className='text-2xl sm:text-4xl text-text-primary font-heading font-bold'>
            <HighlightText>Por Qué</HighlightText> Fitness Cuba{' '}
            <HighlightText>Importa</HighlightText>
          </h2>
          <p className='italic text-text-secondary text-xl md:text-2xl text-center mt-6 max-w-quaternary-max-width mx-auto font-heading'>
            &quot;Este caso demuestra el poder transformador del contenido de
            calidad. Una plataforma WordPress con arquitectura editorial fuerte
            puede generar autoridad y convertirla en ingresos recurrentes sin
            invertir en publicidad pagada. Pasamos de ser un experto local a un
            referente internacional.&quot;
          </p>
        </div>
      </section>

      <ProjectNextStep
        title='¿Tu expertise está escondida sin plataforma digital?'
        description='Construimos ecosistemas de contenido que generan tráfico, autoridad y monetización recurrente.'
        linkText='Iniciar Proyecto y Agendar Llamada'
      />
    </>
  )
}

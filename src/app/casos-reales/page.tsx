import { RealCasesHero } from '@/components/sections/RealCasesHero'
import {
  RealCasesSection,
  type RealCaseItem
} from '@/components/sections/RealCasesSection'
import Link from 'next/link'
import { ArrowIcon } from '../../components/common/Icons'
import { ReusableValidation } from '@/components/sections/ReusableValidation'
import { ProjectNextStep } from '@/components/sections/ProjectNextStep'

const realCases: RealCaseItem[] = [
  {
    id: 0,
    category: 'nativeAppsAndSasS',
    mainTag: 'CASO DE ÉXITO VALIDADO',
    title: 'Cuba Negocios',
    description:
      'Directorio comercial geolocalizado con validación de mercado en 12 semanas.',
    metrics: [
      {
        title: '12 Semanas',
        description: 'Tiempo a Mercado'
      },
      {
        title: '+1,000',
        description: 'Descargas Totales'
      },
      {
        title: '+180',
        description: 'Negocios Pagando'
      }
    ],
    tags: ['Flutter', 'NestJS', 'Geolocalización', 'Pagos'],
    link: '/casos-reales/cuba-negocios-app'
  },
  {
    id: 1,
    category: 'nativeAppsAndSasS',
    mainTag: 'EVOLUCIÓN OPERATIVA ESCALABLE',
    title: 'Cuba Negocios Manager',
    description:
      'Panel administrativo centralizado para gestionar clientes, ingresos y operaciones sin código.',
    metrics: [
      {
        title: 'Control Remoto',
        description: 'Gestión Sin Código'
      },
      {
        title: '-60%',
        description: 'Reducción OPEX'
      },
      {
        title: '10x',
        description: 'Escalabilidad'
      }
    ],
    tags: ['React', 'Next.js', 'PostgreSQL', 'Redis'],
    link: '/casos-reales/cuba-negocios-manager'
  },
  {
    id: 2,
    category: 'nativeAppsAndSasS',
    mainTag: 'MODELO OPERATIVO AUTOMATIZADO',
    title: 'Portal Integraciones',
    description:
      'Automatización de flujos de cobro y pagos para escalar transacciones masivas.',
    metrics: [
      {
        title: 'Zero Ops',
        description: 'Error Humano'
      },
      {
        title: '10K+ Trans.',
        description: 'Procesadas'
      },
      {
        title: 'x3 Escala',
        description: 'Capacidad Operativa'
      }
    ],
    tags: ['Node.js', 'Stripe API', 'Cloud'],
    link: '/casos-reales/portal-integraciones'
  },
  {
    id: 3,
    category: 'nativeAppsAndSasS',
    mainTag: 'MODELO DE RETENCIÓN SAAS',
    title: 'Onboarding SaaS',
    description:
      'Optimización de activación para convertir pruebas gratuitas en suscripciones recurrentes.',
    metrics: [
      {
        title: '+25% LTV',
        description: 'Customer Value'
      },
      {
        title: '-40% Drop',
        description: 'Abandono Inicial'
      },
      {
        title: 'x2 Retención',
        description: 'Mes 3'
      }
    ],
    tags: ['React', 'UX Research', 'Mixpanel'],
    link: '/casos-reales/onboarding-sass'
  },
  {
    id: 4,
    category: 'e-commerceAndConvertion',
    mainTag: 'VALIDACIÓN PRAGMÁTICA',
    title: 'Angola Terrenos',
    description:
      'Portal inmobiliario digital con stack ágil para mercado emergente angoleño.',
    metrics: [
      {
        title: '<4 Semanas',
        description: 'Tiempo a Mercado'
      },
      {
        title: '-70%',
        description: 'Costo vs Custom'
      },
      {
        title: 'Semana 2',
        description: 'Primeros Ingresos'
      }
    ],
    tags: ['WordPress', 'JetEngine', 'Elementor Pro', 'Hostinger'],
    link: '/casos-reales/angola-terrenos'
  },
  {
    id: 5,
    category: 'e-commerceAndConvertion',
    mainTag: 'REDISEÑO E-COMMERCE',
    title: 'Caricia Aromáticas',
    description:
      'Transformación de canal online estancado a equivalencia con ventas físicas: optimización de conversión.',
    metrics: [
      {
        title: '6 Semanas',
        description: 'Rediseño Total'
      },
      {
        title: '+280%',
        description: 'Aumento Conversión'
      },
      {
        title: 'ROI Digital',
        description: 'Equivalencia Retail'
      }
    ],
    tags: ['WordPress', 'WooCommerce', 'Stripe API', 'Redis Cache'],
    link: '/casos-reales/caricia-aromaticas'
  },
  {
    id: 6,
    category: 'e-commerceAndConvertion',
    mainTag: 'DUAL MONETIZACIÓN',
    title: 'SISEN Energía',
    description:
      'Unificar servicios técnicos y e-commerce en un solo ecosistema rentable.',
    metrics: [
      {
        title: '4 Semanas',
        description: 'Lanzamiento Dual'
      },
      {
        title: '90%',
        description: 'Automatización'
      },
      {
        title: 'Dual',
        description: 'Ecosistema ROI'
      }
    ],
    tags: ['WordPress', 'WooCommerce', 'Elementor Pro', 'Stripe API'],
    link: '/casos-reales/sisen-energia'
  },
  {
    id: 7,
    category: 'contentAndAuthoroty',
    mainTag: 'AUTORIDAD DIGITAL',
    title: 'Fitness Cuba',
    description:
      'Plataforma de contenido dinámico para alcance internacional y monetización recurrente.',
    metrics: [
      {
        title: 'Miles',
        description: 'Visitas Mensuales'
      },
      {
        title: 'Recurrente',
        description: 'Monetización'
      },
      {
        title: 'SEO',
        description: 'Tráfico Orgánico'
      }
    ],
    tags: ['WordPress', 'Elementor Pro', 'SEO Optimization', 'Mailchimp'],
    link: '/casos-reales/fitness-cuba'
  },
  {
    id: 8,
    category: 'professionalsAndServices',
    mainTag: 'PRESENCIA MÉDICA',
    title: 'Dr. Humberto Febles',
    description:
      'Presencia digital médica que transmite confianza inmediata y elimina fricción en agendamiento.',
    metrics: [
      {
        title: 'Confianza',
        description: 'Inmediata'
      },
      {
        title: 'Directo',
        description: 'Agendamiento'
      },
      {
        title: '+35 Años',
        description: 'Experiencia'
      }
    ],
    tags: ['WordPress', 'Elementor Pro', 'WhatsApp API', 'Local SEO'],
    link: '/casos-reales/dr-humberto-febles'
  }
]

export default function RealCasesPage() {
  return (
    <>
      <RealCasesHero />
      <RealCasesSection cases={realCases} />
      <ReusableValidation />
      <ProjectNextStep
        title='¿Tu idea necesita pasar la prueba del mercado?
'
        description='Diseñamos y construimos tu MVP enfocado en conseguir tus primeros clientes de pago.'
        linkText='Iniciar Proyecto y Agendar Llamada'
      />
    </>
  )
}

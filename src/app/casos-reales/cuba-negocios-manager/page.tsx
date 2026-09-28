import { CaseHero } from '@/components/sections/CaseHero'
import { EcosystemEvolution } from '@/components/sections/EcosystemEvolution'
import { FromMVPToPlatform } from '@/components/sections/FromMVPToPlatform'
import { OperativeExcelency } from '@/components/sections/OperativeExcelency'
import { OperativeInterface } from '@/components/sections/OperativeInterface'
import { ProjectNextStep } from '@/components/sections/ProjectNextStep'
import { RemoteControl } from '@/components/sections/RemoteControl'
import { ScaleArchitecture } from '@/components/sections/ScaleArchitecture'

const aditionalInfo = [
  {
    id: 0,
    title: 'Fase 2 de Escala',
    description: 'Evolución de Producto'
  },
  {
    id: 1,
    title: 'Control Remoto',
    description: 'Autonomía Total'
  },
  {
    id: 2,
    title: 'Zero Friction',
    description: 'Escalabilidad Pura'
  }
]

export default function CubaNegociosManagerPage() {
  return (
    <>
      <CaseHero
        name='Cuba Negocios Manager'
        description='Panel operativo centralizado para gestionar clientes, ingresos y contenido en tiempo real sin fricción técnica.'
        aditionalInfo={aditionalInfo}
      />
      <EcosystemEvolution />
      <OperativeExcelency />
      <OperativeInterface />
      <RemoteControl />
      <ScaleArchitecture />
      <FromMVPToPlatform />
      <ProjectNextStep
        title='¿Tu producto necesita escalar de manera inteligente?'
        description='Hablemos de cómo construir para la evolución desde el primer día.'
        linkText='Iniciar Proyecto y Agendar Llamada'
      />
    </>
  )
}

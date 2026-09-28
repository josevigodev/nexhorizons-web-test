import { Contact } from '@/components/sections/Contact'
import { EvolutionModel } from '@/components/sections/EvolutionModel'
import { Hero } from '@/components/sections/Hero'
import { OurPilars } from '@/components/sections/OurPilars'
import { SuccessCase } from '@/components/sections/SuccessCase'
import { TotalTransparency } from '@/components/sections/TotalTransparency'
import { Validation } from '@/components/sections/Validation'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Validation />
      <OurPilars />
      <EvolutionModel />
      <SuccessCase />
      <TotalTransparency />
      <div className='mt-50'>
        <Contact />
      </div>
    </>
  )
}

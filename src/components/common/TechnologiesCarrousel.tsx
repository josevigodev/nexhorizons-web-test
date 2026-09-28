'use client'
import { technologies } from '@/mocks/technologies'
import {
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useVelocity
} from 'motion/react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { useRef } from 'react'

interface TechnologiesCarrouselProps {
  isBackground: boolean
}

export function TechnologiesCarrousel({
  isBackground
}: TechnologiesCarrouselProps) {
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })

  const x = useMotionValue(0)
  const direction = useRef(1)

  useAnimationFrame((_, delta) => {
    const velocity = smoothVelocity.get()

    if (velocity > 0) direction.current = -1
    if (velocity < 0) direction.current = 1

    const baseSpeed = 0.09
    const scrollSpeed = Math.min(Math.abs(velocity) * 0.002, 2)

    x.set(x.get() + direction.current * (baseSpeed + scrollSpeed) * delta)
  })

  return (
    <div className='relative overflow-hidden flex items-center justify-center flex-nowrap gap-10 md:gap-30 py-4 mt-24'>
      {[...technologies, ...technologies, ...technologies, ...technologies].map(
        (technology, index) => (
          <motion.div
            style={{ x }}
            key={technology.name + index}
            className='shrink-0'
          >
            <Image
              alt={technology.name}
              src={technology.Icon}
              height={80}
              className='max-h-15 md:max-h-20'
            />
          </motion.div>
        )
      )}
      <div
        className={`absolute top-0 left-0 h-full w-25 bg-linear-to-r from-25% ${isBackground ? 'from-background' : 'from-secondary-background'} to-transparent`}
      ></div>
      <div
        className={`absolute top-0 right-0 h-full w-25 bg-linear-to-l from-25% ${isBackground ? 'from-background' : 'from-secondary-background'} to-transparent`}
      ></div>
    </div>
  )
}

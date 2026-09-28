'use client'
import Link from 'next/link'
import NexHorizonsLogo from '@/assets/NexHorizons_Logo.svg'
import Image from 'next/image'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useState } from 'react'
import { LineArrowIcon } from './common/Icons'
import { BOOKING_LINK } from '@/constants/booking'

const links = [
  { name: 'Inicio', href: '/', id: 0 },
  { name: 'Casos Reales', href: '/casos-reales', id: 1 },
  { name: 'Servicios', href: '/servicios', id: 2 },
  { name: 'Acerca de', href: '/acerca-de', id: 3 },
  { name: 'Contacto', href: '/contacto', id: 4 }
]

export function NavBar() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [showLinks, setShowLinks] = useState(false)

  useMotionValueEvent(scrollY, 'change', (current) => {
    const previous = scrollY.getPrevious() ?? 0
    if (current > previous && current > 100) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  const handleSwitchShowLinks = () => {
    setShowLinks(!showLinks)
  }

  return (
    <motion.header
      animate={{ y: hidden ? -290 : 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className='fixed top-0 left-0 z-40 w-full px-4 pt-5 pb-2 lg:py-5 bg-background'
    >
      <div className='mx-auto flex max-w-primary-max-width items-center justify-between gap-8 pb-4 lg:pb-0'>
        <Link href='/' className='shrink-0 w-full max-w-30 sm:max-w-35'>
          <Image
            src={NexHorizonsLogo.src}
            alt='NextHorizon Logo'
            width={170}
            height={70}
          />
        </Link>
        <nav className='text-sm text-on-background font-medium font-sans'>
          <ul className='flex items-center gap-5'>
            {links.map((link) => (
              <li
                key={link.id}
                className='hidden lg:block shrink-0 font-semibold text-text-secondary hover:text-text-tertiary transition-colors'
              >
                <Link href={link.href} className='p-2'>
                  {link.name}
                </Link>
              </li>
            ))}
            <li className='cursor-pointer font-sans rounded-full bg-primary shrink-0 px-4 py-2 lg:px-6 lg:py-3 text-on-primary font-semibold hover:bg-complementary hover:text-text-primary transition-colors'>
              <a target='_blank' href={BOOKING_LINK}>
                Iniciar Proyecto
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <motion.nav
        animate={{ height: showLinks ? 'auto' : 0, opacity: showLinks ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className='lg:hidden text-sm text-on-background font-medium font-sans'
      >
        <ul className='flex flex-col items-center gap-4'>
          {links.map((link) => (
            <li
              key={link.id}
              className='shrink-0 font-semibold hover:text-text-secondary transition-colors'
            >
              <Link href={link.href} className='p-2'>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
      <div className='lg:hidden flex items-center justify-center'>
        <button
          onClick={handleSwitchShowLinks}
          className='relative p-1 flex items-center justify-center rounded-full text-gray-600 overflow-hidden open-navbar-button cursor-pointer'
        >
          <LineArrowIcon
            className={`size-8 shrink-0 ${showLinks ? '-rotate-90' : 'rotate-90'} transition-all`}
          />
        </button>
      </div>
    </motion.header>
  )
}

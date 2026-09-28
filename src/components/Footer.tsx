import Image from 'next/image'
import NexHorizonsLogo from '@/assets/NexHorizons_Logo.svg'
import Link from 'next/link'
import { BOOKING_LINK } from '@/constants/booking'

const links = [
  { name: 'Inicio', href: '/', id: 0 },
  { name: 'Casos Reales', href: '/casos-reales', id: 1 },
  { name: 'Servicios', href: '/servicios', id: 2 },
  { name: 'Acerca de', href: '/acerca-de', id: 3 },
  { name: 'Contacto', href: '/contacto', id: 4 }
]

export function Footer() {
  return (
    <footer className='flex flex-col gap-10 pt-20 pb-5 px-4 bg-secondary-background'>
      <article className='w-full max-w-tertiary-max-width mx-auto bg-background/90 rounded-4xl p-10 flex gap-10 shadow-xl shadow-primary/50'>
        <div className='flex flex-col gap-4'>
          <span className='text-text-tertiary font-medium'>
            ¿Tienes una idea?
          </span>
          <h3 className='font-bold font-heading text-text-primary text-2xl'>
            Hagámosla realidad.
          </h3>
          <p className='text-text-secondary font-medium'>
            Analizaremos tu proyecto y encontraremos juntos el mejor camino para
            llevarlo adelante.
          </p>
          <a
            target='_blank'
            className='rounded-full bg-primary w-fit px-4 py-2 lg:px-6 lg:py-3 text-on-primary font-semibold text-center hover:bg-complementary hover:text-text-primary transition-colors'
            href={BOOKING_LINK}
          >
            Iniciar Proyecto
          </a>
        </div>
        <div className='hidden md:flex items-center justify-center w-full'>
          aqui va elemento grafico
        </div>
      </article>
      <section className='w-full max-w-tertiary-max-width mx-auto'>
        <div className='flex flex-col md:flex-row gap-10 justify-between'>
          <div>
            <Link href='/' className='shrink-0 w-full max-w-30'>
              <Image
                src={NexHorizonsLogo.src}
                alt='NextHorizon Logo'
                width={150}
                height={50}
              />
            </Link>
            <p className='text-text-secondary mt-4 font-medium'>
              Construimos productos digitales que el mercado realmente quiere.
            </p>
          </div>
          <nav>
            <h4 className='font-heading text-text-secondary font-semibold'>
              Compañía
            </h4>
            <ul className='flex flex-col mt-2'>
              {links.map((link) => (
                <li
                  key={link.id}
                  className='shrink-0 font-semibold text-sm text-text-secondary hover:text-text-tertiary transition-colors'
                >
                  <Link className='py-2 block' href={link.href}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div>
          <p className='text-sm text-text-secondary mt-5 md:mt-0'>
            2026 Todos los derechos reservados
          </p>
        </div>
      </section>
    </footer>
  )
}

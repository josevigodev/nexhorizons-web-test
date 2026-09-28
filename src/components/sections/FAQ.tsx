'use client'
import { useState } from 'react'
import { HighlightText } from '../common/HighlighText'
import { motion } from 'motion/react'
import { PlusIcon } from 'lucide-react'

const faqs = [
  {
    id: 0,
    question: '¿Cuál es el presupuesto mínimo para un proyecto?',
    answer:
      'Depende del alcance, pero la consulta inicial permite definir un rango real basado en tus objetivos.'
  },
  {
    id: 1,
    question: '¿Cuánto tiempo toma desarrollar una app o sitio web?',
    answer:
      'La entrega real depende del tipo de producto. En general, comenzamos con MVP y validación en semanas.'
  },
  {
    id: 2,
    question: '¿Ofrecen soporte técnico después del lanzamiento?',
    answer:
      'Sí. Incorporamos despliegue, soporte técnico y evolución operativa para cada proyecto.'
  },
  {
    id: 3,
    question: '¿Atienden proyectos desde cualquier país?',
    answer:
      'Sí. Trabajamos con equipos remotos y también con presencia presencial bajo coordinación.'
  }
]

export function FAQ() {
  const [isOpenIndex, setIsOpenIndex] = useState<number | null>(null)

  return (
    <section className='bg-secondary-background px-4 py-20 sm:py-28 rounded-4xl'>
      <div className='max-w-quaternary-max-width mx-auto'>
        <div className='text-center'>
          <h2 className='text-3xl sm:text-4xl font-heading font-bold text-text-primary'>
            ¿Tienes <HighlightText>Dudas Frecuentes?</HighlightText>
          </h2>
          <p className='mt-4 text-text-secondary'>
            Aquí están las respuestas a las preguntas más comunes de nuestros
            clientes.
          </p>
        </div>
        <div className='space-y-4 mt-15'>
          {faqs.map((faq) => (
            <div
              onClick={() =>
                setIsOpenIndex(isOpenIndex === faq.id ? null : faq.id)
              }
              key={faq.id}
              className='rounded-3xl cursor-pointer border border-border bg-on-primary p-8 pb-0 group relative overflow-hidden hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]'
            >
              <div className='flex items-center justify-between'>
                <p className='font-semibold font-heading text-text-primary text-lg'>
                  {faq.question}
                </p>
                <PlusIcon
                  className={`text-primary ${isOpenIndex === faq.id ? 'rotate-45' : ''} transition-transform duration-300 shrink-0`}
                />
              </div>
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: isOpenIndex === faq.id ? 1 : 0,
                  height: isOpenIndex === faq.id ? 'auto' : 0
                }}
                transition={{ duration: 0.3 }}
                className='text-text-secondary leading-6 mt-2 pb-6'
              >
                {faq.answer}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { ReactNode } from 'react'

export function HighlightText({ children }: { children: ReactNode }) {
  return <span className='italic text-primary'>{children}</span>
}

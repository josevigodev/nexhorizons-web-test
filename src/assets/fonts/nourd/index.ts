import localFont from 'next/font/local'

export const nourd = localFont({
  src: [
    {
      path: './nourd_light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: './nourd_regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './nourd_medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './nourd_semi_bold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: './nourd_bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './nourd_heavy.ttf',
      weight: '800',
      style: 'normal'
    }
  ],
  variable: '--font-nourd',
  display: 'swap'
})

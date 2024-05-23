import { Metadata } from 'next'

type TRoute = {
  name: string
  path: string
  meta: Metadata
}

type TRoutes = TRoute[]

export const routes: TRoutes = [
  {
    name: 'Home',
    path: '/',
    meta: {
      title: 'Homepage',
      description: 'Homepage description',
    },
  },
  {
    name: 'About',
    path: '/about',
    meta: {
      title: 'About',
      description: 'About description',
    },
  },
  {
    name: 'Contacts',
    path: '/contacts',
    meta: {
      title: 'Contacts',
      description: 'Contacts description',
    },
  },
]

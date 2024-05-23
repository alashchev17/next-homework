'use client'

import Link from 'next/link'
import styles from './Navigation.module.css'
import { usePathname, useRouter } from 'next/navigation'
import { routes } from '@/routes'

export const Navigation = () => {
  const pathname = usePathname()
  const router = useRouter()
  return (
    <nav className="flex gap-3 px-4 py-4 bg-slate-950 text-white">
      {routes.map((route) => (
        // <Link key={route.path} href={route.path} className={route.path === pathname ? styles.bordered : styles.nonBordered}>
        //   {route.name}
        // </Link>
        <button
          key={route.path}
          onClick={(e) => {
            e.preventDefault()
            router.push(route.path)
          }}
          className={route.path === pathname ? styles.bordered : styles.nonBordered}
        >
          {route.name}
        </button>
      ))}
    </nav>
  )
}

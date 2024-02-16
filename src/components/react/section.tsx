import type { ReactNode } from 'react'

export function Section({ children }: { children: ReactNode }): JSX.Element {
  return (
    <section className="py-24 md:py-48 border-neutral-200 bg-neutral-50 dark:bg-neutral-800 dark:bg-opacity-40 dark:border-t-neutral-800 border-y dark:border-b-neutral-800">
      {children}
    </section>
  )
}

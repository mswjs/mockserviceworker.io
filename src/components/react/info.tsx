import type { ReactNode } from 'react'

export function Info({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div
      role="alert"
      className="flex items-start gap-2 px-4 py-2.5 my-5 font-medium dark:text-blue-500 text-blue-800 dark:bg-blue-950 bg-blue-50 dark:bg-opacity-10 border border-blue-500 dark:border-blue-900 rounded-lg"
    >
      {children}
    </div>
  )
}

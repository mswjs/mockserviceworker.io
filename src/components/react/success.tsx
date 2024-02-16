import type { ReactNode } from 'react'

export function Success({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div
      role="alert"
      className="flex items-start gap-2 px-4 py-2.5 my-5 font-medium dark:text-green-500 text-green-800 dark:bg-green-950 bg-green-50 dark:bg-opacity-10 border border-green-500 dark:border-green-900 rounded-lg"
    >
      {children}
    </div>
  )
}

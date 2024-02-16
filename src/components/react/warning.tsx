import type { ReactNode } from 'react'

export function Warning({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div
      role="alert"
      className="flex items-start gap-2 px-4 py-2.5 my-5 font-medium dark:text-yellow-500 text-yellow-800 dark:bg-yellow-950 bg-yellow-50 dark:bg-opacity-10 border border-yellow-500 dark:border-yellow-900 rounded-lg"
    >
      {children}
    </div>
  )
}

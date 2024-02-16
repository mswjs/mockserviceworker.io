import { type ReactNode } from 'react'

export function UppercaseLabel({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  return (
    <p className="mb-10 text-sm font-semibold tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
      {children}
    </p>
  )
}

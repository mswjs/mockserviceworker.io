import { type ReactNode } from 'react'

interface Props {
  children: ReactNode
  actionText?: ReactNode
  actionUrl?: string
}

export function AnnouncementBanner({
  children,
  actionText,
  actionUrl,
}: Props): JSX.Element {
  return (
    <aside className="relative text-sm leading-4 font-bold rounded-lg bg-neutral-950 text-white  dark:bg-slate-500 dark:bg-opacity-20 border dark:border-slate-700 px-4 py-1.5 flex flex-col sm:inline-flex sm:flex-row items-center gap-2 mb-8">
      {children}
      {actionText ? (
        <a
          href={actionUrl}
          className="text-orange ml-[1ch] flex-shrink-0 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {actionText}
        </a>
      ) : null}
    </aside>
  )
}

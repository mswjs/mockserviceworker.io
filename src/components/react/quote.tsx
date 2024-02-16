import type { ReactNode } from 'react'
import { Avatar } from './avatar'

export function Quote({
  children,
  author,
  position,
  imageUrl,
}: {
  children: ReactNode
  author: string
  position?: string
  imageUrl: string
}): JSX.Element {
  return (
    <figure className="p-5 md:p-10 border rounded-md border-neutral-200 dark:border-neutral-800">
      <blockquote className="font-medium">{children}</blockquote>
      <figcaption className="relative flex items-center gap-3 mt-8">
        <Avatar name={author} url={imageUrl} className="w-14 h-14">
          {position || 'Software Engineer'}
        </Avatar>
      </figcaption>
    </figure>
  )
}

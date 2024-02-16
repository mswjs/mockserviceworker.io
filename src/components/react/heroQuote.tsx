import type { ReactNode } from 'react'
import { Avatar } from './avatar'
import QuotesIcon from './icons/quotes'

interface Props {
  children: ReactNode
  author: string
  position: string
  avatarUrl: string
}

export function HeroQuote({
  children,
  author,
  position,
  avatarUrl,
}: Props): JSX.Element {
  return (
    <blockquote className="relative flex flex-col max-w-2xl mx-auto">
      <QuotesIcon className="select-none lg:absolute mb-10 lg:mb-0 top-0 left-0 right-0 mx-auto lg:-ml-8 lg:mt-3 lg:-translate-x-full text-8xl fill-orange w-16 lg:w-24" />
      <p className="text-xl md:text-2xl leading-8 md:leading-9 font-medium text-black dark:text-white">
        {children}
      </p>
      <figcaption className="flex items-center md:self-center gap-4 mt-16">
        <Avatar url={avatarUrl} name={author} className="w-20">
          {position}
        </Avatar>
      </figcaption>
    </blockquote>
  )
}

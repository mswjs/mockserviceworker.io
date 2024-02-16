import { type ReactNode } from 'react'
import { cls } from '../../utils/cls'

export function PageHeaderWrapper(
  props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
) {
  return (
    <header
      {...props}
      className={cls('mb-16 xl:mb-24 text-center', props.className)}
    />
  )
}

export function PageHeaderPrefix({ children }: { children: ReactNode }) {
  return (
    <p className="mb-1 text-sm font-bold tracking-widest uppercase text-orange">
      {children}
    </p>
  )
}

export function PageHeaderSubtitle(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >
) {
  return (
    <p
      {...props}
      className={cls(
        'mx-auto text-xl text-neutral-500 dark:text-neutral-400 leading-8 font-medium',
        props.className
      )}
    />
  )
}

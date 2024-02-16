import * as React from 'react'

export function YouTubeIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg viewBox="0 0 159 110" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="m154 17.5c-1.82-6.73-7.07-12-13.8-13.8-9.04-3.49-96.6-5.2-122 0.1-6.73 1.82-12 7.07-13.8 13.8-4.08 17.9-4.39 56.6 0.1 74.9 1.82 6.73 7.07 12 13.8 13.8 17.9 4.12 103 4.7 122 0 6.73-1.82 12-7.07 13.8-13.8 4.35-19.5 4.66-55.8-0.1-75z"
        fill="currentColor"
      />
      <path
        d="m105 55-40.8-23.4v46.8z"
        className="dark:fill-black fill-white"
      />
    </svg>
  )
}

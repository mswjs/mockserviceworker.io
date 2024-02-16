import { StorybookIcon } from '../icons/storybook'

export function StorybookBookmarkIcon(
  props: React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg viewBox="0 0 1024 1024" width={12} height={12} {...props}>
      <path
        d="M772 1012L511 761l-260 251a49 49 0 0 1-52 10c-18-7-29-24-29-43V132c0-25 21-46 47-46h588c26 0 47 21 47 46v847c0 19-11 36-29 43a49 49 0 0 1-51-10zM545 664l213 205V181H265v688l213-205c9-9 21-14 33-14s24 5 34 14z"
        fill="currentColor"
      />
    </svg>
  )
}

export function StorybookShowcase(): JSX.Element {
  return (
    <div className="flex flex-col md:flex-row border border-neutral-300 dark:border-neutral-700 rounded-lg w-full select-none overflow-hidden">
      <div>
        <div className="flex-1 py-4">
          <ul>
            <li className="mt-1.5 mb-2 px-4 uppercase font-bold text-sm text-neutral-600 dark:text-neutral-500 tracking-widest">
              Components
            </li>
            <li>
              <p className="flex items-center gap-2 px-4">
                <span className="inline-flex w-4 h-4 items-center justify-center text-xs border border-blue-500 rounded-sm text-blue-500">
                  +
                </span>
                <span className="font-bold">ProductDetail</span>
              </p>
              <ul>
                <li className="px-8 py-0.5 bg-neutral-100 dark:bg-neutral-800 font-bold">
                  <StorybookBookmarkIcon className="inline-block align-baseline text-[#37d5d3]" />{' '}
                  Idle
                </li>
                <li className="px-8 py-0.5">
                  <StorybookBookmarkIcon className="inline-block align-baseline text-[#37d5d3]" />{' '}
                  Network error
                </li>
                <li className="px-8 py-0.5">
                  <StorybookBookmarkIcon className="inline-block align-baseline text-[#37d5d3]" />{' '}
                  Added to cart
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-12 bg-neutral-100 dark:bg-neutral-800">
        <StorybookIcon className="fill-[#ff528c] w-12" />
      </div>
    </div>
  )
}

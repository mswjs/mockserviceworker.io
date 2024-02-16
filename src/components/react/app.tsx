import type { ReactNode } from 'react'

export function AppTrayIcons(): JSX.Element {
  return (
    <div className="flex items-center gap-2">
      <div className="h-3 w-3 rounded-full bg-red-500" />
      <div className="h-3 w-3 rounded-full bg-yellow-500" />
      <div className="h-3 w-3 rounded-full bg-green-500" />
    </div>
  )
}

export function ComponentExample(): JSX.Element {
  return (
    <BrowserWindow>
      <ProductDetailComponent />
    </BrowserWindow>
  )
}

export function ProductDetailComponent(): JSX.Element {
  return (
    <div className="p-5 flex items-center gap-5">
      <div className="w-14 h-14 rounded-lg bg-gradient-to-tl from-red-500 to-amber-500" />
      <div className="flex-1 text-left">
        <p className="mb-1 text-lg font-bold leading-5 text-black dark:text-white">
          Porcelain Mug
        </p>
        <p className="text-neutral-500 dark:text-neutral-400">$9.99</p>
      </div>
      <button className="bg-transparent border border-orange text-orange font-semibold rounded-full px-4 py-1 pointer-events-none">
        Buy
      </button>
    </div>
  )
}

export function BrowserWindow({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  return (
    <div className="bg-white dark:bg-black border border-neutral-300 dark:border-neutral-700 rounded-xl select-none max-w-full">
      <header className="px-5 py-2 flex items-center justify-between gap-5 border-b border-neutral-200 dark:border-neutral-800">
        <AppTrayIcons />
        <div className="px-3 py-0.5 border border-neutral-200 dark:border-neutral-800 rounded-lg text-neutral-500 dark:text-neutral-400 text-sm md:text-base font-medium whitespace-nowrap text-ellipsis overflow-hidden">
          <span className="opacity-60">acme.com</span>
          <span>/product/abc-123</span>
        </div>
        <div />
      </header>
      <div>{children}</div>
    </div>
  )
}

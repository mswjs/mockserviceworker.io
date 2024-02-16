import { AppTrayIcons } from '../app'

export function VitestRunner(): JSX.Element {
  return (
    <div className="border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-black dark:text-white rounded-lg p-4 font-mono select-none">
      <header className="pb-4">
        <AppTrayIcons />
      </header>
      <p>
        <span className="opacity-50">$</span> vitest
      </p>
      <p>
        <span className="text-yellow-500">❯</span>{' '}
        <span className="text-neutral-500 dark:text-neutral-400">
          components/
          <span className="text-black dark:text-white">ProductDetail</span>
          .test.ts
        </span>
      </p>
      <p className="pl-[2ch] text-ellipsis overflow-hidden whitespace-nowrap">
        <span className="text-green-600">✓</span>{' '}
        <span>displays product name</span>
      </p>
      <p className="pl-[2ch] text-ellipsis overflow-hidden whitespace-nowrap">
        <span className="text-green-600">✓</span>{' '}
        <span>displays net price</span>
      </p>
      <p className="pl-[2ch] text-ellipsis overflow-hidden whitespace-nowrap">
        <span className="text-green-600">✓</span>{' '}
        <span>handles network errors</span>
      </p>
      <br />
      <p className="ml-[5ch] dark:text-neutral-400 text-neutral-500">
        <span>Tests</span>{' '}
        <span className="text-green-500 font-bold">3 passed</span> (3)
      </p>
      <p className="ml-[2ch] dark:text-neutral-400 text-neutral-500">
        <span>Duration</span>{' '}
        <span className="text-black dark:text-white">100ms</span>
      </p>
    </div>
  )
}

import { CommandLineIcon } from '@heroicons/react/24/outline'
import { Container } from './container'
import { MswBlockItem } from './mswBlockItem'
import { PageHeaderSubtitle } from './pageHeader'

export function GettingStarted(): JSX.Element {
  return (
    <div className="hero-gradient items-center py-24 text-center bg-white dark:bg-neutral-800 dark:bg-opacity-40 border-neutral-200 dark:border-neutral-800 border-y -mb-px">
      <Container>
        <MswBlockItem />

        <div className="max-w-2xl mx-auto">
          <h2 className="mt-12 mb-8 capitalize">Ship better products today.</h2>
          <PageHeaderSubtitle className="text-left md:text-center">
            <span className="text-black dark:text-white">
              Mock Service Worker
            </span>{' '}
            is the best way to integrate API mocking across your entire stack.
            Test, prototype, and debug withouth sacrificing your application's
            integrity. Give it a try, it's open-source and free!
          </PageHeaderSubtitle>

          <a
            href="/docs/getting-started"
            className="button button-primary inline-flex items-center justify-center gap-2 text-lg mt-10 px-10 w-full md:w-auto"
          >
            <CommandLineIcon className="w-8 text-orange" />
            Get started in 3 steps
          </a>
        </div>
      </Container>
    </div>
  )
}

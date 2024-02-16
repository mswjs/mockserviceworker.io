import { HeartIcon } from '@heroicons/react/24/solid'
import { DiscordIcon } from './icons/discord'
import { GitHubIcon } from './icons/github'
import { TwitterIcon } from './icons/twitter'
import { OpenCollectiveIcon } from './icons/opencollective'
import { YouTubeIcon } from './icons/youtube'
import { Container } from './container'
import { Grid } from './grid'
import { cls } from '../../utils/cls'
import { DISCORD_URL } from '../../consts'

export function Footer({ isCompact }: { isCompact?: boolean }): JSX.Element {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className={cls(
        'footer',
        'py-10 text-sm font-medium text-neutral-500 dark:text-neutral-400',
        !isCompact && 'border-t border-neutral-200 dark:border-neutral-800'
      )}
    >
      <Container isFluid={isCompact}>
        {isCompact ? (
          <Grid>
            <div className="pb-12 border-t col-span-full xl:col-span-10 xl:col-start-4 border-neutral-200 dark:border-neutral-800" />
          </Grid>
        ) : null}
        <Grid className="sm:grid-cols-6 gap-y-16">
          <div
            className={cls(
              isCompact ? 'xl:col-span-3 xl:col-start-4' : 'sm:col-span-6'
            )}
          >
            <p className="text-neutral-800 dark:text-neutral-200 font-medium">
              &copy; {currentYear} Mock Service Worker
            </p>
            <p className="font-normal text-neutral-500 dark:text-neutral-400">
              Created with <HeartIcon className="w-3.5 inline text-orange" /> by{' '}
              <a href="https://twitter.com/kettanaito" target="_blank">
                kettanaito
              </a>
            </p>
            <SocialLinksBlock />
          </div>

          <div className="sm:col-span-2">
            <h4 className="mb-8 font-bold tracking-widest uppercase text-md text-black dark:text-neutral-400">
              Library
            </h4>
            <nav>
              <ul className="space-y-3 list-none text-neutral-500 dark:text-white">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/docs">Documentation</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="sm:col-span-2">
            <h4 className="mb-8 font-bold tracking-widest uppercase text-md text-black dark:text-neutral-400">
              Resources
            </h4>
            <nav>
              <ul className="space-y-3 list-none text-neutral-500 dark:text-white">
                <li>
                  <a href="/docs/getting-started">Getting started</a>
                </li>
                <li>
                  <a href="/docs/best-practices">Best practices</a>
                </li>
                <li>
                  <a href="https://github.com/mswjs/examples">Examples</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="sm:col-span-2">
            <h4 className="mb-8 font-bold tracking-widest uppercase text-md text-black dark:text-neutral-400">
              Community
            </h4>
            <nav>
              <ul className="space-y-3 list-none text-neutral-500 dark:text-white">
                <li>
                  <a
                    href="https://github.com/mswjs/msw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/ApiMocking"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href={DISCORD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </Grid>
      </Container>
    </footer>
  )
}

export function SocialLinksBlock(
  props: React.HTMLAttributes<HTMLUListElement>
) {
  return (
    <ul className={cls('flex items-center gap-1 mt-5 -ml-2', props.className)}>
      <li>
        <a
          href="https://github.com/mswjs"
          aria-label="GitHub organization"
          className="flex p-2 text-neutral-500  dark:hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className="w-[20px]" />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/ApiMocking"
          aria-label="Twitter account"
          className="flex p-2 text-neutral-500  dark:hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon className="w-[20px]" />
        </a>
      </li>
      <li>
        <a
          href="https://youtube.com/c/MockServiceWorker"
          aria-label="YouTube channel"
          className="flex p-2 text-neutral-500  dark:hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YouTubeIcon className="w-[20px]" />
        </a>
      </li>
      <li>
        <a
          href={DISCORD_URL}
          arial-label="Discord server"
          className="flex p-2 text-neutral-500  dark:hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DiscordIcon className="w-[20px]" />
        </a>
      </li>
      <li>
        <a
          href="https://opencollective.com/mswjs"
          aria-label="Open Collective page"
          className="flex p-2 text-neutral-500  dark:hover:text-white"
          rel="noopener noreferrer"
          target="_blank"
        >
          <OpenCollectiveIcon className="w-[20px]" />
        </a>
      </li>
    </ul>
  )
}

import { NewspaperIcon } from '@heroicons/react/24/solid'
import { DiscordIcon } from './icons/discord'
import { GitHubIcon } from './icons/github'
import { DISCORD_URL } from '../../consts'

export function DocsSidebarLinks() {
  return (
    <section>
      <h4 className="text-xs mb-2 font-bold tracking-widest text-black dark:text-white uppercase">
        Community
      </h4>
      <ul>
        <li>
          <a
            href="https://github.com/mswjs/msw"
            className="py-1.5 inline-flex items-center gap-1.5 leading-5 text-neutral-500 dark:text-neutral-400  hover:text-black dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="text-lg w-5" />
            <span>GitHub</span>
          </a>
        </li>
        <li>
          <a
            href={DISCORD_URL}
            className="py-1.5 inline-flex items-center gap-1.5 leading-5 text-neutral-500 dark:text-neutral-400  hover:text-black dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiscordIcon className="text-lg w-5" />
            <span>Discord</span>
          </a>
        </li>
        <li>
          <a
            href="/blog"
            className="py-1.5 inline-flex items-center gap-1.5 leading-5 text-neutral-500 dark:text-neutral-400  hover:text-black dark:hover:text-white"
            target="_blank"
            ref="noopener noreferrer"
          >
            <NewspaperIcon className="w-5" />
            <span>Blog</span>
          </a>
        </li>
      </ul>
    </section>
  )
}

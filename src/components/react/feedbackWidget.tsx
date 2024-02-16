import { useEffect, useState } from 'react'
import { cls } from '../../utils/cls'

type Feedback = 'great' | 'meh' | 'bad'

const newDiscussionUrl = new URL(
  'discussions/new',
  'https://github.com/mswjs/mswjs.io/'
)
newDiscussionUrl.searchParams.set('category', 'q-a')
newDiscussionUrl.searchParams.set('labels', 'feedback')

export function FeedbackWidget({ pageTitle }: { pageTitle: string }) {
  const [feedback, setFeedback] = useState<Feedback | null>(null)

  useEffect(() => {
    if (typeof location !== 'undefined') {
      const pageUrl = new URL(location.pathname, location.origin)

      newDiscussionUrl.searchParams.set('title', `Feedback: ${pageTitle}`)
      newDiscussionUrl.searchParams.set(
        'body',
        `\
<!-- Please do not delete this link, it helps us get to the issue faster -->
- [Open page](${pageUrl.href})

## Feedback

<!-- Tell us what you were looking for, what you found, and what was missing -->

`
      )
    }
  }, [])

  const setFeedbackOrReset = (nextFeedback: Feedback) => {
    if (feedback !== null) {
      return setFeedback(null)
    }

    setFeedback(nextFeedback)
  }

  return (
    <aside className="mt-10 px-5 py-4 border-neutral-200 bg-white border dark:border-neutral-700 dark:bg-neutral-800 bg-opacity-40 rounded-md">
      <header className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-center mb-0 font-bold">Was this helpful?</p>
        <ol className="flex items-center justify-center gap-5 text-2xl">
          <li>
            <FeedbackButton
              value="great"
              actualValue={feedback}
              onClick={() => setFeedbackOrReset('great')}
            >
              🤩
            </FeedbackButton>
          </li>
          <li>
            <FeedbackButton
              value="meh"
              actualValue={feedback}
              onClick={() => setFeedbackOrReset('meh')}
            >
              😐
            </FeedbackButton>
          </li>
          <li>
            <FeedbackButton
              value="bad"
              actualValue={feedback}
              onClick={() => setFeedbackOrReset('bad')}
            >
              😩
            </FeedbackButton>
          </li>
        </ol>
      </header>
      {feedback != null ? (
        <div className="mt-5 mb-1 pt-5 border-t border-neutral-200 text-neutral-500 dark:border-neutral-800 dark:text-neutral-300 space-y-5">
          {feedback === 'great' ? (
            <>
              <p>
                Glad to hear that! Our team and our contributors work hard to
                keep this documentation top-notch for everyone. We are here to
                prove that open-source projects can have stellar documentation
                without VC funding or a paid product behind it.
              </p>
              <p className="p-4  font-medium bg-neutral-100 text-neutral-800 dark:bg-neutral-600 dark:text-white rounded-sm">
                If this page answered your question or helped you solve an
                issue, please consider{' '}
                <a
                  href="https://github.com/sponsors/mswjs"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-orange underline"
                >
                  Sponsoring us
                </a>
                . Let's build sustainable, quality open source together. Thank
                you.
              </p>
            </>
          ) : null}

          {feedback === 'meh' || feedback === 'bad' ? (
            <div className="md:flex gap-10 space-y-5 md:space-y-0">
              <p>
                Looks like we could do better. Please, share your thoughts on
                what would make this page more useful for you.
              </p>
              <a
                href={newDiscussionUrl.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-block button button-secondary shrink-0"
              >
                Share feedback
              </a>
            </div>
          ) : null}
        </div>
      ) : null}
    </aside>
  )
}

function FeedbackButton({
  children,
  value,
  actualValue,
  onClick,
}: {
  children: React.ReactNode
  value: Feedback
  actualValue: Feedback | null
  onClick: () => void
}) {
  return (
    <button
      className={cls(
        'flex items-center justify-center w-12 h-12 p-3 rounded-sm',
        !actualValue && 'hover:bg-neutral-200 dark:hover:bg-neutral-700',
        actualValue === value && 'bg-neutral-200 dark:bg-neutral-700',
        !!actualValue && actualValue !== value && 'opacity-40 grayscale'
      )}
      onClick={onClick}
      disabled={!!actualValue && actualValue !== value}
    >
      {children}
    </button>
  )
}

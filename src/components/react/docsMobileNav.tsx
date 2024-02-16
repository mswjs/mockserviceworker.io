import { type ReactNode, useEffect, useState, useRef, forwardRef } from 'react'
import { useScrollTrap } from './hooks/useScrollTrap'
import {
  Bars2Icon as MenuIcon,
  XMarkIcon as CloseIcon,
} from '@heroicons/react/24/solid'
import { cls } from '../../utils/cls'

export function DocsMovileNav({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      const { current: menu } = menuRef

      if (menu) {
        const activeLinks =
          menu.querySelectorAll<HTMLElement>('.docs-link-active')
        // Grab the last active link to scroll into view the child page
        // instead of the first parent page (which will also be active).
        const lastActiveLink = activeLinks[activeLinks.length - 1]

        if (lastActiveLink) {
          lastActiveLink.scrollIntoView({
            block: 'center',
            behavior: 'instant',
          })
          lastActiveLink.focus()
        } else {
          const firstNavLink = menu.querySelector('a')
          firstNavLink?.focus()
        }
      }
    }
  }, [menuRef, isOpen])

  const handleMenuButtonClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  return (
    <div>
      <button
        className="fixed z-[6] flex items-center justify-center w-16 h-16 text-black bg-white border-4 border-black rounded-full bottom-5 right-5 xl:hidden"
        tabIndex={2}
        onClick={handleMenuButtonClick}
        aria-label="Docs menu"
      >
        {isOpen ? <CloseIcon className="w-5" /> : <MenuIcon className="w-5" />}
      </button>
      <MobileMenuContainer
        ref={menuRef}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {children}
      </MobileMenuContainer>
    </div>
  )
}

interface MobileMenuContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  children: ReactNode
  isOpen: boolean
  onClose(): void
}

export const MobileMenuContainer = forwardRef<
  HTMLDivElement,
  MobileMenuContainerProps
>(({ children, isOpen, onClose, ...props }, ref) => {
  const [scrollTrapRef, trapScroll, restoreScroll] =
    useScrollTrap<HTMLDivElement>()

  useEffect(() => {
    if (isOpen) {
      trapScroll()

      const { current: menu } = scrollTrapRef

      if (menu) {
        const firstLink = menu.querySelector('a')
        firstLink?.focus()
      }
    } else {
      restoreScroll()
    }

    return () => restoreScroll()
  }, [isOpen])

  useEffect(() => {
    const keydownListener = (event: KeyboardEvent) => {
      // Close the mobile nav when clicking "Escape"
      if (event.key === 'Escape') {
        onClose?.()
      }
    }

    document.addEventListener('keydown', keydownListener)

    return () => {
      document.removeEventListener('keydown', keydownListener)
    }
  }, [])

  return (
    <section
      ref={ref}
      {...props}
      className={cls(
        'fixed block top-[60px] bg-white dark:bg-neutral-950 inset-0 max-h-[100vh] z-[5]',
        props.className,
      )}
      style={{ display: isOpen ? 'block' : 'none' }}
    >
      <div
        ref={scrollTrapRef}
        className="px-5 pr-24 py-10 max-h-full overflow-y-auto"
      >
        {children}
      </div>
    </section>
  )
})

import { useState, type ReactNode } from 'react'
import {
  Bars3Icon as MenuIcon,
  XMarkIcon as CloseIcon,
} from '@heroicons/react/24/solid'
import { MobileMenuContainer } from './docsMobileNav'
import { SocialLinksBlock } from './footer'

export function MobileMenu({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  return (
    <>
      <button
        className="px-2 py-1 hover:text-black dark:hover:text-white transition-colors"
        aria-labelledby="Menu"
        onClick={handleMenuClick}
      >
        {isOpen ? (
          <CloseIcon className="w-[22px] text-black dark:text-white" />
        ) : (
          <MenuIcon className="w-[22px]" />
        )}
      </button>
      <MobileMenuContainer
        id="mobile-menu-container"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {children}
        <SocialLinksBlock className="justify-center" />
      </MobileMenuContainer>
    </>
  )
}

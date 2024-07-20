'use client'

import Link from 'next/link'
import {
  useCallback,
  useEffect,
  useState
} from 'react'
import {
  RxCross1,
  RxHamburgerMenu
} from 'react-icons/rx';
import {
  Dialog,
  DialogPanel
} from '@headlessui/react';

import { headerNavItems } from 'lib/nav-items'
import { Logo } from 'components/common/logo';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = useCallback(() => {
    setTimeout(() => {
      setMobileMenuOpen(false);
    }, 200);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 transition-colors duration-200 ${
      isScrolled ? 'bg-white/80 dark:bg-black/60 backdrop-blur-lg' : 'bg-white dark:bg-black'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex flex-1">
          <Link
            href="/"
            className="-m-1.5 p-1.5"
          >
            <Logo className="h-6 w-auto text-black dark:text-white" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700 dark:text-neutral-300 cursor-pointer"
          >
            <RxHamburgerMenu
              className="h-6 w-6"
            />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative flex space-x-10">
            {Object.entries(headerNavItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="flex items-center text-sm leading-6 text-neutral-700 dark:text-neutral-300 transition-all hover:text-neutral-950 dark:hover:text-neutral-50 hover:underline"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-white dark:bg-black p-4 lg:px-8 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10 dark:sm:ring-neutral-100/10">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="-m-1.5 p-1.5"
              onClick={handleLinkClick}
            >
              <Logo className="h-6 w-auto text-black dark:text-white" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-neutral-700 dark:text-neutral-300 cursor-pointer"
            >
              <RxCross1
                className="h-6 w-6"
                fill="none"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-neutral-500/10 dark:divide-neutral-200">
              <div className="py-6 space-y-2">
                {Object.entries(headerNavItems).map(([path, { name }]) => {
                  return (
                    <Link
                      key={path}
                      href={path}
                      className="-mx-3 block rounded-lg py-2 px-3 text-xl leading-9 text-neutral-950 dark:text-neutral-50 font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-900"
                      onClick={handleLinkClick}
                    >
                      {name}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
};

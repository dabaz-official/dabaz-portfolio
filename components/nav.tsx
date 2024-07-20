'use client'

import Link from 'next/link'
import Image from 'next/image';
import { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';

import { headerNavItems } from 'lib/nav-items'

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

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className={`fixed top-0 left-0 right-0 transition-colors duration-200 ${
      isScrolled ? 'bg-white/80 backdrop-blur' : 'bg-white'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex flex-1">
          <Link
            href="/"
            className="-m-1.5 p-1.5"
          >
            <Image
              className="h-7 w-auto"
              src="/logo-black.svg"
              alt="Logo"
              width={32}
              height={32}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700"
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
                  className="flex items-center text-sm leading-6 text-neutral-700 transition-all hover:text-neutral-950 hover:underline"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </header>
  )
};

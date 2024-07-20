import { footerNavItems } from 'lib/nav-items'
import { social } from 'lib/social'

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="mt-16">
      <div className="mx-auto py-12 md:flex md:items-center md:justify-between">
        <div className="flex justify-center space-x-6 md:order-2">
          {social.map((item) => (
            <a
              key={item.name}
              href={item.href} 
              className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition"
              target='_blank'
            >
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm leading-5 text-neutral-700 dark:text-neutral-300">
            &copy; {new Date().getFullYear()} Design & Code by DabAZ
          </p>
        </div>
      </div>
    </footer>
  )
}

import { footerNavItems } from "lib/nav-items"

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
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:grid md:grid-cols-4 md:space-y-0 dark:text-neutral-300">
        {Object.entries(footerNavItems).map(([path, { name }]) => {
          return (
            <a
              className="flex items-center transition-all hover:text-black dark:hover:text-white"
              rel="noopener noreferrer"
              target="_blank"
              key={path}
              href={path}
            >
              <ArrowIcon />
              <p className="ml-2 h-7">
                {name}
              </p>
            </a>
          )
        })}
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} DabAZ
      </p>
    </footer>
  )
}

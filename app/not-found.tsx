import Link from 'next/link';
import { RxChevronRight } from 'react-icons/rx';

export default function NotFound() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tight">
        404 - Page Not Found
      </h1>
      <p className="mb-4">
       The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="flex items-center text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-neutral-50 hover:underline"
      >
        Go back to home page
        <RxChevronRight
          className="h-4 w-4 mt-0.5 ml-0.5"
        />
      </Link>
    </section>
  )
}
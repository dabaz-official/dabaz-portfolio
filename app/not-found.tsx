import Link from 'next/link';

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
        className=''
      >
        Go back to home page -&gt;
      </Link>
    </section>
  )
}
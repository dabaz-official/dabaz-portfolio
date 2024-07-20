import ContactForm from 'components/contact-form'

export const metadata = {
  title: 'Contact',
  description: "Let's create something great together.",
}

export default function Page() {
  return (
    <section className="relative isolate z-10 overflow-hidden pt-8 mx-auto space-y-6 max-w-2xl lg:max-w-none">
      <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-6xl">
        Contact
      </h1>
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-600 dark:text-neutral-400 sm:text-3xl">
        {`Let's create something great together.`}
      </h2>
      <ContactForm />
    </section>
  )
}

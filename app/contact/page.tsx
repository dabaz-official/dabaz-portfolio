import ContactForm from 'components/contact-form'

export const metadata = {
  title: 'Contact',
  description: "Let's create something great together.",
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Contact</h1>
      <p className="mb-8">
        {`Let's create something great together.`}
      </p>
      <ContactForm />
    </section>
  )
}

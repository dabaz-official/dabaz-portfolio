import { BlogPosts } from 'components/posts'

export const metadata = {
  title: 'Contact',
  description: "Let's create something great together.",
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Contact Me</h1>
      <p className="mb-4">
        {`Let's create something great together.`}
      </p>
    </section>
  )
}

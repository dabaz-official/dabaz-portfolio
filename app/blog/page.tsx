import { BlogPosts } from 'components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Delve into my explorations.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-bold text-xl mb-8 tracking-tight">Blog</h1>
      <p className="mb-4">
        {`Delve into my explorations!`}
      </p>
      <BlogPosts />
    </section>
  )
}

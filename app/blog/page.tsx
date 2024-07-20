import { BlogPosts } from 'components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Delve into my explorations.',
}

export default function Page() {
  return (
    <section className="relative isolate z-10 overflow-hidden pt-8 mx-auto space-y-6 max-w-2xl lg:max-w-none">
      <h1 className="max-w-2xl text-6xl font-bold tracking-tight sm:text-9xl lg:col-span-2 xl:col-auto">
        DabBlog
      </h1>
      <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1 space-y-4 sm:space-y-6">
        <h2 className="max-w-2xl text-4xl font-bold tracking-tight text-neutral-600 dark:text-neutral-400 sm:text-6xl lg:col-span-2 xl:col-auto mt-6">
          I write about my experiences, my craft, and the world around me.
        </h2>
      </div>
      <BlogPosts />
    </section>
  )
}

import { Crafts } from 'components/crafts'
import { BlogPosts } from 'components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hello, I'm DabAZ 👋
      </h1>
      <p className="mb-8">
        {`I'm a versatile professional with a passion for cybersecurity, front-end development, and creative arts. As a ethical hacker, entrepreneur, musician, designer, and front-end development enthusiast, I thrive on exploring new technologies and pushing creative boundaries. Whether I'm securing digital landscapes, crafting user-friendly interfaces, or producing music, I bring dedication and innovation to everything I do. Let's connect and create something amazing together!`}
      </p>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Crafts
      </h1>
      <div className="my-8">
        <Crafts />
      </div>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        From my blog
      </h1>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

import Image from 'next/image';

export function Hero() {
  return (
    <div className="relative isolate z-10 overflow-hidden pt-8 mx-auto">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
        <h1 className="max-w-2xl text-6xl font-bold tracking-tight sm:text-9xl lg:col-span-2 xl:col-auto">
          DabAZ
        </h1>
        <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1 space-y-4 sm:space-y-6">
          <h2 className="max-w-2xl text-4xl font-bold tracking-tight text-neutral-600 dark:text-neutral-400 sm:text-6xl lg:col-span-2 xl:col-auto">
            I am an ethical hacker, artist, designer, and developer.
          </h2>
          <h2 className="max-w-2xl text-4xl font-bold tracking-tight text-neutral-600 dark:text-neutral-400 sm:text-6xl lg:col-span-2 xl:col-auto">
            This is a place for my crafty adventures.
          </h2>
        </div>
        <Image
          src="/images/home/portrait-light.png"
          alt="DabAZ's portrait."
          width={936}
          height={936}
          className="flex dark:hidden mt-10 aspect-[1/1] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
        />
        <Image
          src="/images/home/portrait-dark.png"
          alt="DabAZ's portrait."
          width={936}
          height={936}
          className="hidden dark:flex mt-10 aspect-[1/1] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
        />
      </div>
    </div>
  )
}
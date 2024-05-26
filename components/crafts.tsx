import Link from 'next/link'
import Image from 'next/image'

import { craftsItems } from "lib/crafts-items";

export function Crafts() {
  return (
    <div>
      {Object.entries(craftsItems).map(([path, { name, imageSrc }]) => {
        return (
          <a
            key={path}
            className="flex flex-col space-y-1 mb-4"
            href={path}
            target='_blank'
          >
            <div className="w-full flex flex-col space-y-4">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {name}
              </p>
              <Image src={imageSrc} alt={name} width={1920} height={1080} className='rounded-xl' />
            </div>
          </a>
        )
      }
    )}
  </div>
)}

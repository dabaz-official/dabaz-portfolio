export const seo = {
  home: {
    title: "DabAZ",
    description: "I am an ethical hacker, entrepreneur, music producer, designer, and front-end developer.",
    url: new URL(
      process.env.NODE_ENV === "production"
        ? "https://dabaz.me"
        : "http://localhost:3000"
    ),
    imageSrc: "https://dabaz.me/images/home/opengraph-image.jpg",
    imageAlt: "Logo of 'DabAZ' featuring a stylized white semi-circular arrow pointing up and to the right, set against a dark navy blue background. The word 'DabAZ' is displayed to the right of the icon in large white capital letters, with a modern sans-serif typeface.",
    siteName: "DabAZ",
  },
  blog: {
    title: "Blog",
    description: "Introducing my thoughts on tech, dev, cybersecurity, music, and life.",
    imageSrc: "https://dabaz.me/images/blog/opengraph-image.jpg",
    imageAlt: "Logo for 'Blog by DabAZ' displaying a stylized white semi-circular arrow pointing up and to the right, on a dark navy blue background. Next to the arrow, the text 'Blog by DabAZ' in large, white, modern sans-serif capital letters.",
  }
} as const;
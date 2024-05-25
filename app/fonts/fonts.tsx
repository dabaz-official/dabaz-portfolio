import { Inconsolata as FontMono } from "next/font/google";
import { Playfair_Display as FontSerif } from "next/font/google";
import localFont from "next/font/local";

export const fontSans = localFont({
  variable: "--font-sans",
  src: [
    {
      path: './test-soehne-buch.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './test-soehne-buch-kursiv.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './test-soehne-kraftig.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './test-soehne-kraftig-kursiv.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: './test-soehne-halbfett.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './test-soehne-halbfett-kursiv.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: './test-soehne-dreiviertelfett.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './test-soehne-dreiviertelfett-kursiv.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontSerif = FontSerif({
  subsets: ["latin"],
  variable: "--font-serif",
})
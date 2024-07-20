'use client'

import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xyyvpklk")

  if (state.succeeded) {
    return (
      <h1 className="mb-8 text-2xl font-semibold tracking-tight">
        Thank you for your message!
      </h1>
  )}

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="mx-auto lg:mr-0">
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-md font-regular leading-6 text-black dark:text-white">
              First name *
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                required
                className="block w-full rounded-md border-0 bg-black/5 dark:bg-white/5 px-3.5 py-2 text-black dark:text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring focus:ring-inset focus:ring-neutral-300 dark:focus:ring-neutral-600 sm:leading-6 outline-none duration-200"
              />
              <ValidationError
                prefix="First name"
                field="first-name"
                errors={state.errors}
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-md font-regular leading-6 text-black dark:text-white">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 bg-black/5 dark:bg-white/5 px-3.5 py-2 text-black dark:text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring focus:ring-inset focus:ring-neutral-300 dark:focus:ring-neutral-600 sm:leading-6 outline-none duration-200"
              />
              <ValidationError
                prefix="Last name"
                field="last-name"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-md font-regular leading-6 text-black dark:text-white">
              Email *
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 bg-black/5 dark:bg-white/5 px-3.5 py-2 text-black dark:text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring focus:ring-inset focus:ring-neutral-300 dark:focus:ring-neutral-600 sm:leading-6 outline-none duration-200"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-md font-regular leading-6 text-black dark:text-white">
              Phone number
            </label>
            <div className="mt-2.5">
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 bg-black/5 dark:bg-white/5 px-3.5 py-2 text-black dark:text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring focus:ring-inset focus:ring-neutral-300 dark:focus:ring-neutral-600 sm:leading-6 outline-none duration-200"
              />
              <ValidationError
                prefix="Phone number"
                field="phone-number"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-md font-regular leading-6 text-black dark:text-white">
              Message *
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 bg-black/5 dark:bg-white/5 px-3.5 py-2 text-black dark:text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring focus:ring-inset focus:ring-neutral-300 dark:focus:ring-neutral-600 sm:leading-6 outline-none duration-200"
                defaultValue={''}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-start">
          <button
            type="submit"
            className="rounded-md bg-black dark:bg-white px-4 py-2.5 text-center text-md font-regular text-white dark:text-black shadow-sm hover:bg-neutral-800 dark:hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={state.submitting}
          >
            Send message
          </button>
        </div>
      </div>
    </form>
  )
}
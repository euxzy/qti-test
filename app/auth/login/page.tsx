import Image from 'next/image'

import brandLogo from '~/assets/images/only-logo.png'
import bannerAuth from '~/assets/images/banner-auth.png'
import bannerAuthMobile from '~/assets/images/banner-auth-mobile.png'
import { LoginClient } from './client'

export default function LoginPage() {
  return (
    <section className="grid md:min-h-svh md:grid-cols-2">
      <div className="relative grid md:place-content-center md:bg-primary-700">
        <Image src={bannerAuth} alt="Banner Auth" fill className="!relative hidden max-w-md md:block" />
        <Image src={bannerAuthMobile} alt="Banner Auth" fill className="!relative md:hidden" />

        <div className="absolute inset-x-0 top-8 mx-auto grid place-items-center text-white md:hidden">
          <div className="mb-2 h-10 w-max">
            <Image src={brandLogo} alt="Logo" fill className="!relative !w-auto" />
          </div>
          <h1 className="mb-4 text-4xl font-bold">Welcome back!</h1>
          <p className="max-w-56 text-center text-lg font-medium leading-tight">
            You&#39;ve been missed, Please sign in your account
          </p>
        </div>
      </div>
      <div className="px-8 pt-12 md:grid md:place-content-center md:px-0 md:pt-0">
        <div>
          <div className="mb-12 hidden place-items-center md:grid">
            <div className="mb-4 h-10 w-max">
              <Image src={brandLogo} alt="Logo" fill className="!relative !w-auto" />
            </div>
            <h1 className="mb-4 text-5xl font-bold">Welcome back!</h1>
            <p className="max-w-56 text-center text-lg font-medium leading-tight text-neutral-400">
              You&#39;ve been missed, Please sign in your account
            </p>
          </div>

          <LoginClient />
        </div>
      </div>
    </section>
  )
}

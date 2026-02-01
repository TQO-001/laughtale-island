'use client'

import Image from 'next/image'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import SplashCursor from '@/components/SplashCursor'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <SplashCursor />
      <NavBar />
      
      <main className="grow flex items-center justify-center px-4 relative">
        <div className="flex flex-col items-center text-center justify-center text-4xl md:text-6xl font-bold z-10">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hello, World!
          </span>
          <br />
          <Image
            src="/img/Black-Blue-Stroke.png"
            width={420}
            height={100}
            alt="LaughTale Logo"
            className="my-4"
          /> 
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            is Coming Soon
          </span>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
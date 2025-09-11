"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="pb-40 px-4">
        <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] font-extrabold tracking-tighter pr-2 pb-2 text-transparent bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text">
  Manage Your Finances <br /> with Intelligence
</h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Take Control of Your Money with confidence and clarity. Whether you're budgeting for daily expenses, planning for long-term savings, or investing wisely, our intelligent tools empower you to make informed decisions and achieve financial freedom. Say goodbye to stress and hello to a secure financial future.</p>
            <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="#watch_demo/coming_soon">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div>
            <Image
              src="/banner.jpeg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
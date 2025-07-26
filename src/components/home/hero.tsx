"use client" 

import { TypeAnimation } from "react-type-animation"
import Animate from "../Animate"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"

const HeroSection = () => {
  return (<>
    <Animate>
      <header className="flex min-h-[calc(100vh-10rem)] px-5 sm:px-10 md:px-32 py-8 smpy-0">
        <div className="flex flex-col sm:flex-row items-center gap-7 sm:gap-10 md:gap-20">
          <div className="px-8 sm:px-0 md:w-120">
            <img src="/logo.jpg" alt="Syeda Hoorain Ali" className="rounded-full md:size-80 shadow-glow-fuchsia" />
          </div>

          <div className="flex flex-col w-full">
            <span className="text-xl sm:text-2xl mb-1">Hi,</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">I am {' '}
              <span className="text-fuchsia-500">Hoorain Ali</span>
            </h1>

            <h2 className="text-xl md:text-3xl font-bold mb-2">I&apos;m a {' '}
              <TypeAnimation
                sequence={[
                  'Web Developer', 1000,
                  'Agentic AI Develpor', 1000,
                  'Front-end Developer', 1000,
                  'Back-end Developer', 1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: 'inline-block', color: '#d946ef' }}
                repeat={Infinity}
                preRenderFirstString={true}
              />
            </h2>
            <h3 className="text-xl md:text-3xl font-bold">Future Cloud Applied Gen-AI Engineer...</h3>

            <ul className="flex gap-4 mt-6">
              <li className="icons">
                <Link href="https://github.com/syeda-hoorain-ali">
                  <FaGithub className="size-5 sm:size-7" />
                </Link>
              </li>

              <li className="icons">
                <Link href="https://www.linkedin.com/in/syedahoorainali">
                  <FaLinkedin className="size-5 sm:size-7" />
                </Link>
              </li>

              <li className="icons">
                <Link href="https://x.com/syedahorainali">
                  <FaXTwitter className="size-5 sm:size-7" />
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </header>
    </Animate>
  </>)
}

export default HeroSection
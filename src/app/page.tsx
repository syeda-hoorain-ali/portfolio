"use client";

import Animate from "@/components/Animate";
import Card from "@/components/Card";
import { ChangeEvent, FormEvent, useState } from "react";
import { CgNpm } from "react-icons/cg";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { toast } from "react-toastify";
import { TypeAnimation } from "react-type-animation";

const Home = () => {


  const [isSubmittingForm, setIsSubmittingForm] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let name = e.target.name;
    let value = e.target.value;
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmittingForm(true)

    const response = await fetch('/api/resend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
    const data = await response.json();
    console.log(data);

    if (data.success) {
      toast.success('Message send successfully!');

      setForm({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      })
    }
    setIsSubmittingForm(false);
  }

  return (<>

    <Animate>
      <header className="flex min-h-[calc(100vh-10rem)] px-5 sm:px-10 md:px-32 py-8 smpy-0">
        <div className="flex flex-col sm:flex-row items-center gap-7 sm:gap-10 md:gap-20">
          <div className="px-8 sm:px-0 md:w-[30rem]">
            <img src="/logo.jpg" alt="Syeda Hoorain Ali" className="rounded-full md:size-80 shadow-glow-fuchsia" />
          </div>

          <div className="flex flex-col w-full">
            <span className="text-xl sm:text-2xl mb-1">Hi,</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">I am {' '}
              <span className="text-fuchsia-500">Hoorain</span>
            </h1>

            <h2 className="text-xl md:text-3xl font-bold mb-2">I&apos;m a {' '}
              <TypeAnimation
                sequence={[
                  'Web Developer', 1000,
                  'Web Designer', 1000,
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
                <a href="https://github.com/syeda-hoorain-ali"><FaGithub className="size-5 sm:size-7" /></a>
              </li>
              <li className="icons">
                <a href="https://www.linkedin.com/in/syedahoorainali"><FaLinkedin className="size-5 sm:size-7" /></a>
              </li>
              <li className="icons">
                <a href="https://www.npmjs.com/~syedahoorainali"><CgNpm className="size-5 sm:size-7" /></a>
              </li>
            </ul>
          </div>

        </div>
      </header>
    </Animate>

    {/* About */}
    <Animate>
      <section className="md:px-32 flex flex-col items-center gap-8 my-7">
        <h2 className="text-4xl underline decoration-fuchsia-500 font-bold tracking-wide">About Me</h2>

        <img src="./logo.jpg" alt="Syeda Hoorain ali" className="h-52 rounded-lg" />

        <p className="sm:text-lg text-center px-4 sm:px-16">
          Hi! I&apos;m Hoorain, a 13-year-old tech enthusiast and a senior student at the Governor Sindh IT Initiative (GIAIC). I have a deep passion for web development and a keen interest in emerging technologies. My journey in the tech world has been both exciting and challenging, and I&apos;ve enjoyed every step of it.
          <br /> <br />
          I&apos;ve acquired skills in various programming languages and frameworks, including HTML, CSS, JavaScript, TypeScript, Node.js, Express, MongoDB, React, and Next.js. Currently, I am diving into Python to expand my programming repertoire. My goal is to become a Cloud Applied Gen-AI Engineer, and I am committed to continuously learning and evolving in the field of technology.
          <br /> <br />
          Beyond my technical skills, I am a creative problem solver and a team player who enjoys collaborating on projects. I believe in the power of innovation to transform the digital landscape and am excited to be a part of this dynamic industry. Explore my portfolio to see how I am applying my skills and passion to create impactful solutions.
        </p>
      </section>
    </Animate>

    {/* Projects */}
    <Animate>
      <section className="px-10 md:px-32 flex flex-col items-center gap-5 sm:gap-8 my-10 md:my-20">
        <h2 className="text-4xl underline decoration-fuchsia-500 font-bold tracking-wide">My Projects</h2>

        <div className="grid grid-rows-8 sm:grid-rows-4 md:grid-rows-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 sm:gap-10">
          <Card github="https://github.com/syeda-hoorain-ali/text-editor" live="https://text-editor-hoorain.vercel.app/" title="Text Editor" image="./projects/text-editor.png" />
          <Card github="https://github.com/syeda-hoorain-ali/pass-guard" live="https://pass-guard-eight.vercel.app/" title="Password Manager" image="./projects/password-manager.png" />
          <Card github="https://github.com/syeda-hoorain-ali/twitter" live="https://syeda-hoorain-ali.github.io/twitter/" title="Twitter" image="./projects/twitter.png" />
          <Card github="https://github.com/syeda-hoorain-ali/clock-craft" live="https://syeda-hoorain-ali.github.io/clock-craft/" title="Clock" image="./projects/clock.png" />

          <Card github="https://github.com/syeda-hoorain-ali/netflix" live="https://syeda-hoorain-ali.github.io/netflix/" title="Netflix" image="./projects/netflix.png" />
          <Card github="https://github.com/syeda-hoorain-ali/starbucks" live="https://syeda-hoorain-ali.github.io/starbucks" title="Starbucks" image="./projects/starbucks.png" />
          <Card github="https://github.com/syeda-hoorain-ali/foodpanda" live="https://syeda-hoorain-ali.github.io/foodpanda" title="Foodpanda" image="./projects/foodpanda.png" />
          <Card github="https://github.com/syeda-hoorain-ali/amazon" live="https://syeda-hoorain-ali.github.io/amazon" title="Amazon" image="./projects/amazon.png" />
        </div>

        <button className="sm:text-lg border-2 border-fuchsia-600 px-5 py-2 rounded-full transition-all hover:bg-fuchsia-600 hover:shadow-glow-fuchsia hover:border-fuchsia-300">
          <a href="https://github.com/syeda-hoorain-ali/">Show more</a>
        </button>
      </section>
    </Animate>

    {/* contact */}
    <Animate>
      <section className="sm:px-10 md:px-32 flex flex-col items-center gap-8 my-7">
        <h2 className="text-4xl underline decoration-fuchsia-500 font-bold tracking-wide">Contact Me</h2>

        <form onSubmit={handleSubmit} className="mx-auto max-w-2xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="label">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="firstName"
                  type="text"
                  className="input"
                  value={form.firstName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="label">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  name="lastName"
                  type="text"
                  className="input"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="label">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="input"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="label">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-600 bg-gray-900 focus:ring-2 focus:ring-inset focus:ring-fuchsia-600 sm:text-sm sm:leading-6"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md disabled:bg-gray-600 bg-fuchsia-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600"
              disabled={isSubmittingForm}
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </Animate>

  </>)
}

export default Home;

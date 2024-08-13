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
      <header className="flex h-[calc(100vh-10rem)] px-32">
        <div className="flex items-center gap-32 translate-3d">
          <img src="/logo.jpg" alt="Syeda Hoorain Ali" className="rounded-full h-96 shadow-glow-fuchsia" />

          <div className="flex flex-col">
            <span className="text-3xl mb-3">Hi,</span>
            <h1 className="text-6xl font-bold mb-8">I am {' '}
              <span className="text-fuchsia-500">Hoorain</span>
            </h1>

            <h2 className="text-4xl font-bold mb-3">I'm a {' '}
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
            <h3 className="text-4xl font-bold">Future Cloud Applied Gen-AI Engineer...</h3>

            <ul className="flex gap-7 mt-10">
              <li className="icons">
                <a href="https://github.com/syeda-hoorain-ali"><FaGithub className="size-9" /></a>
              </li>
              <li className="icons">
                <a href="https://www.linkedin.com/in/syedahoorainali"><FaLinkedin className="size-9" /></a>
              </li>
              <li className="icons">
                <a href="https://www.npmjs.com/~syedahoorainali"><CgNpm className="size-9" /></a>
              </li>
            </ul>
          </div>

        </div>
      </header>
    </Animate>

    <Animate>
      <section className=" px-32 flex flex-col items-center gap-8 my-7">
        <h2 className="text-5xl underline decoration-fuchsia-500 font-bold tracking-wide sm:text-4xl">About Me</h2>

        <img src="./logo.jpg" alt="Syeda Hoorain ali" className="h-52 rounded-lg" />

        <p className="text-lg text-center px-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corrupti soluta omnis minus excepturi, voluptates necessitatibus harum. Voluptate nulla earum ratione quod ipsam nihil? Tempore, eos error. Aliquid magnam ratione fuga non recusandae officiis, dolorem illum iste ad, velit nam! Itaque culpa doloribus libero eum explicabo molestiae voluptatibus officiis dolorum neque est nemo odio recusandae blanditiis magni nisi facilis illo, repellat, ipsa ad! Dolor illo fugit labore saepe nostrum praesentium maiores ullam, tempore, quos dolores voluptas officia eligendi nesciunt voluptatibus dicta odio harum vero laudantium explicabo? Quidem laudantium cum suscipit natus soluta facere sit ratione. Corrupti, voluptatum molestiae? Voluptatum, nisi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iure magnam, ea molestiae cum quos, officia minima similique asperiores obcaecati veritatis distinctio vitae aperiam sed placeat dolorum quo. Dolor dignissimos voluptatem eius, reprehenderit obcaecati amet voluptate iste tempora quibusdam in explicabo, sit id velit accusantium modi sed distinctio, quidem ratione perferendis ducimus vitae architecto! Beatae aliquam consequatur ratione maxime! Aspernatur labore dolores itaque vel eveniet nihil non tempora quo ad, veritatis accusamus? Mollitia iste nesciunt alias ducimus earum neque facilis accusamus officia totam facere commodi consectetur assumenda, quae explicabo excepturi. Veniam animi cupiditate, ex ad distinctio nulla minus dolore, doloremque in repudiandae error cum at nihil earum non officia aut incidunt debitis facere consequuntur quae reprehenderit! Sed suscipit sapiente asperiores dicta ad eius quasi in consequatur, voluptates odit minus voluptatibus eaque reprehenderit ea id. Ab minus laboriosam quaerat rem soluta unde similique velit. Aperiam veniam, neque adipisci voluptatem perferendis beatae.
          </p>
      </section>
    </Animate>

    <Animate>
      <section className=" px-32 flex flex-col items-center gap-8 my-20">
        <h2 className="text-5xl underline decoration-fuchsia-500 font-bold tracking-wide sm:text-4xl text-r">My Projects</h2>

        <div className="grid grid-rows-2 grid-cols-4 gap-10">
          <Card github="https://github.com/syeda-hoorain-ali/text-editor" live="https://text-editor-hoorain.vercel.app/" title="Text Editor" image="./projects/text-editor.png" />
          <Card github="https://github.com/syeda-hoorain-ali/pass-guard" live="https://pass-guard-eight.vercel.app/" title="Password Manager" image="./projects/password-manager.png" />
          <Card github="https://github.com/syeda-hoorain-ali/twitter" live="https://syeda-hoorain-ali.github.io/twitter/" title="Twitter" image="./projects/twitter.png" />
          <Card github="https://github.com/syeda-hoorain-ali/clock-craft" live="https://syeda-hoorain-ali.github.io/clock-craft/" title="Clock" image="./projects/clock.png" />

          <Card github="https://github.com/syeda-hoorain-ali/netflix" live="https://syeda-hoorain-ali.github.io/netflix/" title="Netflix" image="./projects/netflix.png" />
          <Card github="https://github.com/syeda-hoorain-ali/starbucks" live="https://syeda-hoorain-ali.github.io/starbucks" title="Starbucks" image="./projects/starbucks.png" />
          <Card github="https://github.com/syeda-hoorain-ali/foodpanda" live="https://syeda-hoorain-ali.github.io/foodpanda" title="Foodpanda" image="./projects/foodpanda.png" />
          <Card github="https://github.com/syeda-hoorain-ali/amazon" live="https://syeda-hoorain-ali.github.io/amazon" title="Amazon" image="./projects/amazon.png" />
        </div>

        <button className="text-lg border-2 border-fuchsia-600 px-5 py-2 rounded-full transition-all hover:bg-fuchsia-600 hover:shadow-glow-fuchsia hover:border-fuchsia-300">
          <a href="https://github.com/syeda-hoorain-ali/">Show more</a>
        </button>
      </section>
    </Animate>

    <Animate>
      <section className=" px-32 flex flex-col items-center gap-8 my-7">
        <h2 className="text-5xl underline decoration-fuchsia-500 font-bold tracking-wide sm:text-4xl text-r">Contact Me</h2>

        <form onSubmit={handleSubmit} className="mx-auto w-[40rem]">
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

"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Animate from "../Animate"
import { toast } from "react-hot-toast";

const ContactSection = () => {

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
      <section className="px-4 sm:px-10 md:px-32 flex flex-col items-center gap-8 my-7">
        <h2 className="text-4xl underline underline-offset-4 decoration-fuchsia-500 font-bold tracking-wide">Contact Me</h2>

        <form onSubmit={handleSubmit} className="mx-auto max-w-2xl w-full">
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
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-xs ring-1 ring-inset ring-gray-600 bg-gray-900 focus:ring-2 focus:ring-inset focus:ring-fuchsia-600 sm:text-sm sm:leading-6"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md disabled:bg-gray-600 bg-fuchsia-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-fuchsia-900 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600"
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

export default ContactSection
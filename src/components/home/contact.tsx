"use client";

import Animate from "../Animate"
import { ContactForm } from "../contact-form";

const ContactSection = () => {
  return (<>
    <Animate id="contact">
      <section className="px-4 sm:px-10 md:px-32 flex flex-col items-center gap-8 my-7">
        <h2 className="text-4xl underline underline-offset-4 decoration-fuchsia-500 font-bold tracking-wide">Contact Me</h2>
        <ContactForm />
      </section>
    </Animate>
  </>)
}

export default ContactSection
"use client";

import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { zodResolver } from "@hookform/resolvers/zod"
// import axios from "axois";
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactFormSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.email(),
  message: z.string().min(2).max(500),
})

type ContactFormSchema = z.infer<typeof contactFormSchema>

export const ContactForm = () => {

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (values: ContactFormSchema) => {
    const response = await fetch('/api/resend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    const data = await response.json();
    // const { data } = await axios.post("/api/resend", values)
    console.log(data);

    if (data.success) {
      toast.success('Message send successfully!');
    }
  }

  return (
    // <div className="isolat px-6 py-20 sm:py-10 lg:px-8">

    //   <div className="mx-auto max-w-2xl text-center">
    //     <h2 className="text-4xl underline decoration-fuchsia-500 font-bold tracking-wide">Contact Me</h2>
    //     <p className="mt-2 text-lg leading-8 text-gray-300">
    //       I&apos;m always excited to connect with fellow enthusiasts, collaborators, and potential mentors. Whether you have a project in mind or simply want to chat about tech, feel free to reach out!
    //     </p>
    //   </div>

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto mt-14 max-w-lg space-y-6">

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Textarea className='bg-gray-950 py-2' {...field} rows={5} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="mt-10">
          <Button type="submit" className="cursor-pointer" disabled={form.formState.isSubmitting}>
            Send Message
          </Button>
        </div>
      </form>
    </Form>
    // </div>
  )
}

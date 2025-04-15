'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const contactFormSchema = z.object({
  name: z.string().min(1, "Can't be empty"),
  email: z.string().min(1, "Can't be empty").email(),
  phone: z.string().min(1, "Can't be empty"),
  message: z.string().min(1, "Can't be empty"),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  function handleSubmit(data: z.infer<typeof contactFormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <fieldset className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input placeholder="Name" {...field} />
                    <FormMessage />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input placeholder="Email Address" {...field} />
                    <FormMessage />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input placeholder="Phone" {...field} />
                    <FormMessage />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Textarea placeholder="Your Message" {...field} rows={3} className="resize-none" />
                    <FormMessage />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex justify-center md:justify-end">
            <Button type="submit" className="cursor-pointer ">
              Submit
            </Button>
          </div>
        </fieldset>
      </form>
    </Form>
  );
}

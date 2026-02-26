'use client';
import { useId, useState } from 'react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { Button, FadeIn } from '.';

function TextInput({ label, ...props }: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId();

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-gray-500/20 bg-transparent px-6 pb-4 pt-12 text-base/6 text-white ring-2 ring-transparent transition focus:outline-none focus:ring-blue-400 group-first:-t-2xl group-last:-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-white transition-all duration-200 peer-focus:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-90 peer-focus:scale-90 peer-focus:font-semibold peer-focus:text-blue-400 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:text-blue-400"
      >
        {label}
      </label>
    </div>
  );
}

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const templateParams = {
        from_name: formData.get('person_name') as string,
        to_name: 'Girish Gaikwad',
        from_email: formData.get('email') as string,
        to_email: 'your-email@example.com',
        message: formData.get('message') as string,
        company: formData.get('company') as string,
    };

    try {
        await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            templateParams,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );
        toast.success('Email sent!');
        form.reset();
    } catch (error) {
        toast.error('Something went wrong, please try again later.');
        console.error(error);
    } finally {
        setLoading(false);
    }
  };

  return (
    <FadeIn >
      {/* Corner Targeting Brackets */}

      <form  method="POST" onSubmit={handleSubmit}>
        <div className="isolate mt-6 -space-y-px relative z-10 font-mono bg-gray-900/20">
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[rgb(var(--dark-border))] group-hover:border-[rgb(var(--work-yellow))] transition-colors z-20"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[rgb(var(--dark-border))] group-hover:border-[rgb(var(--work-yellow))] transition-colors z-20"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[rgb(var(--dark-border))] group-hover:border-[rgb(var(--work-yellow))] transition-colors z-20"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[rgb(var(--dark-border))] group-hover:border-[rgb(var(--work-yellow))] transition-colors z-20"></div>
          <TextInput label="Name" name="person_name" autoComplete="name" required />
          <TextInput label="Email" type="email" name="email" autoComplete="email" required />
          <TextInput label="Company" name="company" autoComplete="organization" required />
          <TextInput label="Message" name="message" required />
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="mt-6" variant="secondary" disabled={loading}>
            Send
          </Button>
        </div>
      </form>
    </FadeIn>
  );
}

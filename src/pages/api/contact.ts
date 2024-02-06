import type { APIRoute } from 'astro';
import { z } from 'zod';
import { Resend } from 'resend'

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_KEY ?? 'v1');

const contactFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  details: z.string().min(1),
});

const useTemplate = (name: string, email: string, details: string) => `
  <h1>New contact form submission</h1>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Details:</strong> ${details}</p>
`;

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const details = formData.get('comment');

  try {
    const validatedData = contactFormSchema.parse({
      name,
      email,
      details,
    });

    // Handle the form data and perform necessary operations with validatedData
    console.log(validatedData);
    
    // Send an email
    const { error } = await resend.emails.send({
      to: 'ldlizcano@uninorte.edu.co',
      subject: 'Nuevo Contacto desde el Portfolio!!!!',
      from: 'Portfolio <onboarding@resend.dev>',
      html: useTemplate(validatedData.name, validatedData.email, validatedData.details),
    });

    if (error) {
      console.error(error);
      return new Response('Failed to send email', { status: 500 });
    }

    return new Response('Email sent', { status: 200 });
  } catch (error) {
    return new Response('Invalid form data', { status: 400 });
  }
};
import type { APIRoute } from 'astro';
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  details: z.string().min(1),
});

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const details = formData.get('details');

  try {
    const validatedData = contactFormSchema.parse({
      name,
      email,
      details,
    });

    // Handle the form data and perform necessary operations with validatedData

    return new Response('Form submitted successfully');
  } catch (error) {
    return new Response('Invalid form data', { status: 400 });
  }
};
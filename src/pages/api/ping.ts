import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = () => {
  return new Response('pong', { status: 200 });
};

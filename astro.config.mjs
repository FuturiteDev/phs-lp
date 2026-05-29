// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isVercel = !!process.env.VERCEL;

// https://astro.build/config
export default defineConfig({
  site: 'https://phs-desarrollos.com',
  base: isVercel ? '/' : '/naves-industriales',
  vite: {
    plugins: [tailwindcss()],
  },
});

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://bio.colindomoney.com',
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['host.docker.internal'],
    },
  },
});

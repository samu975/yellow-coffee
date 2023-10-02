import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import vercel from '@astrojs/vercel/serverless';
// import nodejs from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'static',
  // adapter: nodejs(),
  // adapter: vercel(),
  // site: 'https://yellowcoffee.com.co',
});

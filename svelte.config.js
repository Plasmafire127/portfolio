import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
      prerender: {
        handleHttpError: ({ path, referrer, message }) => {
          // ignore deliberate link to shiny 404 page
          if (path === '/not-found' && referrer === '/blog/how-we-built-our-404-page') {
            return;
          }
  
          // otherwise fail the build
          throw new Error(message);
        }
      },
    adapter: adapter(),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
    }
  }
};
export default config;

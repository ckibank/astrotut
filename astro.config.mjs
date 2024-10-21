import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site : "https://astrotut-ckib-test.netlify.app/",
  integrations: [preact()]
});
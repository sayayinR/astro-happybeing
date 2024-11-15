import { defineConfig } from "astro/config";
// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import svelte from "@astrojs/svelte";

import netlify from '@astrojs/netlify';


// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  base: 'astro-happybeing',
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    svelte(),
  ],
});

/** @type {import('tailwindcss').Config} */

import flowbite from 'flowbite-react/tailwind';
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    flowbite.content()
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    flowbite.plugin()
  ],
}


# Outpainter

Expand the contents of an image using generative fill.

## How it works

This app is powered by:

🚀 [fal](https://fal.ai)

🖍️ [Stable Diffusion Inpainting](https://fal.ai/models/stable-diffusion-xl-inpainting), an open-source machine learning model that generates images from text.

▲ [Vercel](https://vercel.com/), a platform for running web apps.

⚡️ Nuxt.js [server-side API routes](server/api), for talking to fal's API.

👀 Nuxt.js Vue components, for the browser UI.

🍃 [Tailwind CSS](https://tailwindcss.com/), for styles.

This is a fork of an [outpainting demo](https://github.com/replicate/outpainter) for [Replicate](https://replicate.com).

## Development

1. Install a recent version of [Node.js](https://nodejs.org/)
1. Copy your [fal API key](https://fal.ai/dashboard/keys) and set it in your environment:
   ```
   echo "FAL_KEY=<your-key-here>" > .env
   ```
1. Install dependencies and run the server:
   ```
   npm install
   npm run dev
   ```
1. Open [localhost:3000](http://localhost:3000) in your browser. That's it!

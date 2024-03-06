import * as fal from '@fal-ai/serverless-client'

fal.config({ credentials: useRuntimeConfig().falKey })

const falDefaults = {
  enable_safety_checker: false,
  image_size: 'square_hd',
  sync_mode: true,
}

type Input = {
  image: string
  mask: string
  prompt: string
  guidance_scale: number
  num_inference_steps: number
  num_outputs: number
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { input } = body

  const falInput = {
    ...falDefaults,
    image_url: input.image,
    mask_url: input.mask,
    prompt: input.prompt,
    num_inference_steps: input.num_inference_steps,
    num_images: input.num_outputs,
  }

  return fal.subscribe('fal-ai/fast-sdxl/inpainting', { input: falInput })
})

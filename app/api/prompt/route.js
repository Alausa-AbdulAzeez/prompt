import { Prompt } from '@models/prompt'
import { connectToDB } from '@utils/database'
import { stringify } from 'postcss'

export const GET = async (req, res) => {
  try {
    await connectToDB()
    const prompts = await Prompt.find({}).populate('creator')

    return new Response(JSON.stringify(prompts), { status: 200 })
  } catch (error) {
    console.log(error)
    return new Response(error, { status: 500 })
  }
}

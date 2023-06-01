import { Prompt } from '@models/prompt'
import { connectToDB } from '@utils/database'

// GET SINGLE PROMPT
export const GET = async (req, { params }) => {
  // CONNECT TO THE DB
  try {
    await connectToDB()
    const selectedPost = await Prompt.findById(params?.id).populate('creator')
    if (!selectedPost) {
      return new Response('Could not get Prompt', { status: 404 })
    }
    return new Response(JSON.stringify(selectedPost), { status: 200 })
  } catch (error) {
    console.log(error)
    return new Response('Could not get Prompt', { status: 500 })
  }
}

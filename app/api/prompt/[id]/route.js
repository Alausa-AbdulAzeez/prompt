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

// UPDATE PROMPT
export const PATCH = async (req, { params }) => {
  const { tag, prompt } = await req.json()
  try {
    // CONNECT TO THE DB
    await connectToDB()
    const selectedPost = await Prompt.findById(params?.id).populate('creator')

    // CHECK IF PROMPT EXISTS
    if (!selectedPost) {
      return new Response('Could not get Prompt', { status: 404 })
    }

    // UPDATE PROMPT DETAILS AND SAVE
    selectedPost.tag = tag
    selectedPost.prompt = prompt
    await selectedPost.save()

    return new Response(JSON.stringify(selectedPost), { status: 201 })
  } catch (error) {
    console.log(error)
    return new Response('Could not update Prompt', { status: 500 })
  }
}

// DELETE PROMPT
export const DELETE = async (req, { params }) => {
  try {
    // CONNECT TO THE DB
    await connectToDB()

    // FIND PROMPT BY ID AND DELETE IT
    await Prompt.findByIdAndRemove(params?.id)

    return new Response('Prompt successfully deleted', { status: 200 })
  } catch (error) {
    console.log(error)
    return new Response('Failed to delete prompt', { status: 500 })
  }
}

import { Prompt } from '@models/prompt'
import { connectToDB } from '@utils/database'

export const POST = async (req) => {
  const { tag, prompt, userId } = await req.json()
  console.log(tag)

  try {
    await connectToDB()
    const newPrompt = await Prompt.create({
      tag,
      prompt,
      creator: userId,
    })

    return new Response(JSON.stringify(newPrompt), { status: 201 })
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify(error), { status: 500 })
  }
}

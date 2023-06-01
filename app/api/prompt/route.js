import { Prompt } from '@models/prompt'
import { connectToDB } from '@utils/database'
import { stringify } from 'postcss'

export const GET = async () => {
  try {
    // CONNECT TO THE DATABASE
    await connectToDB()

    // FETCH ALL PROMPTS AND RETURN THE DEAILS OF THE CREATOR DUE TO THE ONE TO MANY RELATIONSHIP THAT EXISTS
    const prompts = await Prompt.find({}).populate('creator')

    return new Response(JSON.stringify(prompts), { status: 200 })
  } catch (error) {
    console.log(error)
    return new Response(error, { status: 500 })
  }
}

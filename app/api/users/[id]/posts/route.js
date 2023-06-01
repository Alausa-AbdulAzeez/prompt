import { Prompt } from '@models/prompt'
import User from '@models/user'
import { connectToDB } from '@utils/database'
import { Schema } from 'mongoose'

// const { Router } = require('next/router')

export const GET = async (req, { params }) => {
  // CONNECT TO THE DB
  try {
    await connectToDB()

    // CHECK IF USER EXISTS
    const userExists = await User.findById({ _id: params?.id })

    if (!userExists) {
      throw new Error('User does not exist')
    }

    // IF USER EXISTS, RETURN USER PROMPTS
    const prompts = await Prompt.find({ creator: params?.id }).populate(
      'creator'
    )
    return new Response(JSON.stringify(prompts), { status: 200 })
  } catch (error) {
    console.log(error)
    return new Response(
      error.message || 'Failed to fetch prompts created by user',
      {
        status: 500,
      }
    )
  }
}

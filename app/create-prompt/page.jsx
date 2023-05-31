'use client'
import Form from '@components/Form'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

const CreatePrompt = () => {
  // ROUTING
  // const router = useRouter()
  // POST DETAILS
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  })

  // BUTTON STATE
  const [submitting, setSubmitting] = useState(false)

  //   FUNCTION TO HANDLE POST INFO CHANGE
  const handlePostInfoChange = (e, infoType) => {
    setPost({ ...post, [infoType]: e?.target?.value })
  }
  //   END OF FUNCTION TO HANDLE POST INFO CHANGE

  //   FUNCTION TO HANDLE POST INFO CHANGE
  const createPost = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const response = await fetch('/api/prompt/new', {
        method: 'POST',
        body: JSON.stringify({
          prompt: post?.prompt,
          tag: post?.tag,
          userId: session?.user?.id,
        }),
      })
      if (response.ok) {
        // router.push('/')
      }
    } catch (error) {
      console.log(error)
    } finally {
      setSubmitting(false)
    }
  }
  //   END OF FUNCTION TO HANDLE POST INFO CHANGE
  return (
    <Form
      submitting={submitting}
      handlePostInfoChange={handlePostInfoChange}
      post={post}
      setPost={setPost}
      handleSubmit={createPost}
    />
  )
}

export default CreatePrompt

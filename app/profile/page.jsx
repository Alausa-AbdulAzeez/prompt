'use client'

import Profile from '@components/Profile'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

const ProfilePage = () => {
  const [myPosts, setMyPosts] = useState([])

  //   USER SESSION
  const { data: session } = useSession()

  //   EDIT POST FUNCTION
  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`)
  }
  //   END OF EDIT POST FUNCTION

  //   DELETE POST FUNCTION
  const handleDelete = async (post) => {
    const hasConfirmed = confirm('Are you sure you want to delete this prompt?')
    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: 'DELETE',
        })
        const filteredPosts = myPosts.filter((item) => item._id !== post._id)
        setMyPosts(filteredPosts)
      } catch (error) {
        console.log(error)
      }
    }
  }
  //   END OF DELETE POST FUNCTION

  // USE EFFECT TO FETCH USER POSTS
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`)
      const data = await response.json()

      setMyPosts(data)
    }

    if (session?.user?.id) fetchPosts()
  }, [session])

  // END OF USE EFFECT TO FETCH USER POSTS

  return (
    <Profile
      name='My'
      desc='Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination'
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}

export default ProfilePage

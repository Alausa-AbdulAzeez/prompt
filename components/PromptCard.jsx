'use client'

import Image from 'next/image'
import { useState } from 'react'

const PromptCard = ({ post }) => {
  // CURRENTLY COPIED PROMPT
  const [copied, setCopied] = useState('')

  // COPY TO CLIPBOARD FUNCTIONALITY
  const handleCopy = () => {
    setCopied(post?.prompt)
    navigator.clipboard.writeText(post?.prompt)

    // SET COPIED BACK TO DEFAULT AFTER 3 SECONDS
    setTimeout(() => setCopied(''), 3000)
  }

  return (
    <div className='prompt_card'>
      <div className='flex justify-between items-start gap-5'>
        <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
          <Image
            alt='user_image'
            width={40}
            height={40}
            className='rounded-full object-contain'
            src={post?.creator?.image}
          />
          <div className='flex flex-col'>
            <h3 className='font-satoshi font-semibold text-gray-900'>
              {post?.creator?.userName}
            </h3>
            <p className='font-inter text-sm text-gray-500'>
              {post?.creator?.email}
            </p>
          </div>
          <div className='copy_btn' onClick={handleCopy}>
            <Image
              alt='copy_icon'
              width={12}
              height={12}
              src={
                copied === post?.prompt
                  ? '/assets/icons/tick.svg'
                  : '/assets/icons/copy.svg'
              }
            />
          </div>
        </div>
      </div>
      <p className='my-4 font-satoshi text-sm text-gray-700'>{post.prompt}</p>
      <p className='font-inter text-sm blue_gradient cursor-pointer'>
        #{post.tag}
      </p>
    </div>
  )
}

export default PromptCard

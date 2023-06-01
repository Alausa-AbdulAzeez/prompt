'use client'

import { useEffect, useState } from 'react'
import PromptCard from './PromptCard'

const Feed = () => {
  // SEARCH TEXT
  const [searchText, setSearchText] = useState('')

  // PROMPT LIST
  const [promptList, setPromptList] = useState([])

  // FUNCTION FOR SETTING SEARCH TEXT
  const handleSearchChange = (e) => {
    setSearchText(e?.target.value)
  }
  // END OF FUNCTION FOR SETTING SEARCH TEXT

  // USE EFFECT TO FETCH FEEDS
  useEffect(() => {
    const getFeed = async () => {
      try {
        const res = await (await fetch('/api/prompt')).json()
        const res2 = await fetch('/api/prompt')
        console.log(await res2.json())
        setPromptList(res)
      } catch (error) {
        console.log(error)
      }
    }
    getFeed()
  }, [])
  // END OF USE EFFECT TO FETCH FEEDS

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>
      <div className='mt16 prompt_layout'>
        {promptList?.map((singlePrompt) => {
          return <PromptCard key={singlePrompt?._id} post={singlePrompt} />
        })}
      </div>
    </section>
  )
}

export default Feed

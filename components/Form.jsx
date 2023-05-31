import Link from 'next/link'

const Form = ({
  submitting,
  handlePostInfoChange,
  post,
  handleSubmit,
  setPost,
}) => {
  return (
    <section
      className=' w-full max-w-full flex flex-col justify-start items-start mb-10
    '
    >
      <h1 className='mt-5 text-5xl font-extrabold text-black sm:text-6xl leading-[1.15] text-left'>
        <span className='blue_gradient'>Create Post</span>
      </h1>
      <p className='desc text-left max-w-md'>
        Create and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform.
      </p>
      <form
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
        onSubmit={handleSubmit}
      >
        <label>
          <span className='font-satoshi font-semibold text-gray-700 text-base'>
            Your AI Prompt
          </span>

          <textarea
            value={post?.prompt}
            onChange={(e) => handlePostInfoChange(e, 'prompt')}
            required
            className='form_textarea'
            placeholder='Write your prompt here...'
          ></textarea>
        </label>
        <label>
          <span className='font-satoshi font-semibold text-gray-700 text-base'>
            Tag{' '}
            <span className='font-normal'>
              {' '}
              (#product #webdevelopment #idea){' '}
            </span>
          </span>

          <input
            value={post?.tag}
            onChange={(e) => handlePostInfoChange(e, 'tag')}
            required
            className='form_input'
            placeholder='#tag'
          ></input>
        </label>
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancle
          </Link>
          <button
            type='submit '
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white hover:bg-orange-700 disabled:cursor-not-allowed disabled:bg-orange-400'
            disabled={submitting}
          >
            Create
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form

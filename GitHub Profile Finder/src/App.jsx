import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState(null)
  const [input, setInput] = useState("Shivam0099x")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async (username) => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch(`https://api.github.com/users/${username}`)
      if (!response.ok) {
        throw new Error(response.status === 404 ? 'User not found' : `GitHub returned ${response.status}`)
      }
      const result = await response.json()
      setData(result)
    } catch (err) {
      setData(null)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData(input)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (input.trim()) fetchData(input.trim())
  }

  return (
    <div className='min-h-screen w-full bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white flex flex-col items-center gap-8 p-6'>
      <h1 className='text-3xl font-bold'>Github Profile Finder</h1>

      <form onSubmit={handleSearch} className='flex gap-2'>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Enter GitHub username'
          className='px-4 py-2 rounded-lg bg-zinc-700 outline-none focus:ring-2 focus:ring-emerald-500'
        />
        <button className='px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 cursor-pointer'>
          Search
        </button>
      </form>

      {loading && <p>Loading... Please wait a while</p>}

      {error && !loading && <p className='text-red-400'>{error}</p>}

      {data && !loading && (
        <div className='w-full max-w-sm bg-zinc-800 border border-zinc-700 rounded-2xl p-6 shadow-xl text-center'>
          <img
            src={data.avatar_url}
            alt={data.login}
            className='w-28 h-28 rounded-full mx-auto border-4 border-emerald-500'
          />

          <h2 className='mt-4 text-xl font-semibold'>{data.name || data.login}</h2>
          <p className='text-zinc-400'>@{data.login}</p>

          {data.bio && <p className='mt-3 text-sm text-zinc-300'>{data.bio}</p>}

          <div className='mt-5 grid grid-cols-3 gap-2 text-center'>
            <div className='bg-zinc-700 rounded-lg py-2'>
              <p className='font-bold'>{data.public_repos}</p>
              <p className='text-xs text-zinc-400'>Repos</p>
            </div>
            <div className='bg-zinc-700 rounded-lg py-2'>
              <p className='font-bold'>{data.followers}</p>
              <p className='text-xs text-zinc-400'>Followers</p>
            </div>
            <div className='bg-zinc-700 rounded-lg py-2'>
              <p className='font-bold'>{data.following}</p>
              <p className='text-xs text-zinc-400'>Following</p>
            </div>
          </div>

          <div className='mt-5 text-sm text-zinc-300 space-y-1'>
            {data.location && <p>📍 {data.location}</p>}
            {data.company && <p>🏢 {data.company}</p>}
            <p>📅 Joined {new Date(data.created_at).toLocaleDateString()}</p>
          </div>

          <a
            href={data.html_url}
            target='_blank'
            rel='noreferrer'
            className='inline-block mt-5 px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500'
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  )
}

export default App
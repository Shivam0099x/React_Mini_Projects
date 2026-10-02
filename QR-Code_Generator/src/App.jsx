import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const App = () => {
  const [input, setInput] = useState("")
  const [qrCode, setQrCode] = useState("")

  const handleGenerate = () => {
    setQrCode(input)
    setInput("")
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input.trim() !== "") {
      handleGenerate()
      setInput("")
    }
  }

  return (
    <div className='min-h-screen w-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white flex flex-col items-center justify-center p-6 gap-10'>

      <div className='text-center space-y-2'>
        <h1 className='text-4xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent'>
          QR Code Generator
        </h1>
        <p className='text-zinc-400 text-sm'>Turn any text or URL into a QR code instantly</p>
      </div>

      {/* Card */}
      <div className='w-full max-w-md bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-2xl p-6 shadow-2xl flex flex-col gap-6'>
        
        {/* Input & Button */}
        <div className='flex flex-col gap-3'>
          <input
            type="text"
            className='w-full bg-zinc-900/70 text-white px-4 py-3 rounded-xl outline-none border border-zinc-700 focus:border-emerald-500 transition-colors placeholder:text-zinc-500'
            placeholder='Enter your name or URL here'
            name='qr-code'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className='w-full bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] transition-all text-white font-medium py-3 rounded-xl disabled:bg-zinc-700 disabled:text-zinc-500 disabled:cursor-not-allowed'
            onClick={handleGenerate}
            disabled={!input || input.trim() === ""}
          >
            Generate QR Code
          </button>
        </div>

        {/* QR Code Display */}
        <div className='flex items-center justify-center'>
          {qrCode ? (
            <div className='bg-white p-4 rounded-2xl shadow-lg'>
              <QRCode
                id='qr-code-value'
                value={qrCode}
                size={220}
                bgColor='#ffffff'
                fgColor='#18181b'
              />
            </div>
          ) : (
            <div className='w-[220px] h-[220px] border-2 border-dashed border-zinc-700 rounded-2xl flex items-center justify-center text-zinc-500 text-sm text-center px-6'>
              Your QR code will appear here
            </div>
          )}
        </div>
      </div>

      <p className='text-zinc-500 text-xs'>Press Enter or click Generate</p>
    </div>
  )
}

export default App
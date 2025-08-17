import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-8">
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank" rel="noreferrer" className="group">
          <img 
            src={viteLogo} 
            className="w-32 h-32 p-4 rounded-full transition-all duration-300 group-hover:bg-blue-100 group-hover:scale-105" 
            alt="Vite logo" 
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer" className="group">
          <img 
            src={reactLogo} 
            className="w-32 h-32 p-4 rounded-full animate-spin-slow transition-all duration-300 group-hover:bg-blue-100 group-hover:scale-105" 
            alt="React logo" 
          />
        </a>
      </div>

      <h1 className="text-5xl font-bold text-blue-600 mb-8">
        Warian Enterprises
      </h1>

      <div className="bg-white p-8 rounded-xl shadow-lg text-center mb-8 w-full max-w-md">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="px-8 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 active:bg-green-700 
                    focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 
                    transition-all duration-200 ease-in-out text-lg font-medium shadow-md
                    hover:shadow-lg transform hover:-translate-y-1"
        >
          Count: {count}
        </button>
        <p className="mt-6 text-gray-600">
          Edit <code className="font-mono bg-gray-100 px-2 py-1 rounded">src/App.jsx</code> to customize
        </p>
      </div>

      <p className="text-gray-500 text-sm">
        Click logos to visit documentation
      </p>
    </div>
  )
}

export default App
import { useState } from 'react'
import ChatInterface from './components/ChatInterface'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">AI Primary Care Assessment</h1>
        <p className="text-gray-500 max-w-md">
          A prototype for automated patient triage and symptom analysis.
        </p>
      </div>

      <ChatInterface />

      <div className="mt-8 text-xs text-gray-400 max-w-xl text-center">
        <p className="font-semibold text-red-400 mb-1">DISCLAIMER: DEMO PURPOSE ONLY</p>
        <p>
          This is an AI prototype and does not provide real medical advice.
          If you are experiencing a medical emergency, please call 911 (or your local emergency number).
        </p>
      </div>
    </div>
  )
}

export default App

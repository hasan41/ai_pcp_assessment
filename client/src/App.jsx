import { useState } from 'react'
import ChatInterface from './components/ChatInterface'

function App() {
  return (
    <div className="h-[100dvh] w-full bg-slate-50 flex flex-col overflow-hidden relative selection:bg-blue-100">

      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-100/40 rounded-full blur-3xl"></div>
      </div>

      {/* Main Layout Container */}
      <div className="relative z-10 flex-1 flex flex-col w-full max-w-[1600px] mx-auto p-2 sm:p-4 lg:p-6 h-full min-h-0">

        {/* Chat Main Area - Flex-1 to fill space, min-h-0 to allow scrolling inside */}
        <main className="flex-1 w-full min-h-0 shadow-2xl rounded-2xl overflow-hidden bg-white ring-1 ring-gray-100 flex flex-col">
          <ChatInterface />
        </main>

        {/* Footer Disclaimer */}
        <footer className="flex-none pt-3 pb-1 text-center">
          <p className="text-xs text-gray-400 max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold text-gray-500">Medical Disclaimer:</span> This AI system can make mistakes. It does not provide medical advice.
            <span className="block sm:inline sm:ml-1 font-medium text-red-400/80">If you have an emergency, call 911 immediately.</span>
          </p>
        </footer>
      </div>

    </div>
  )
}

export default App

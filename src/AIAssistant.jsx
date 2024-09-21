import { useState } from 'react'

export default function AIAssistant() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }])
      // Simulate AI response (replace with actual AI integration)
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: `AI response to: "${input}"`, sender: 'ai' },
        ])
      }, 1000)
      setInput('')
    }
  }

  return (
    <div className="w-full space-y-6 p-4">
      <h2 className="text-3xl font-bold">AI Assistant</h2>
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md h-96 flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-indigo-100 ml-auto'
                  : 'bg-gray-100'
              } max-w-full sm:max-w-[80%]`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask the AI assistant..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';

const ChatInterface = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // Initial Greeting
    useEffect(() => {
        setMessages([{
            role: 'assistant',
            content: "Hello. I am Dr. AI, an automated primary care assistant.\n\nI can help assess your symptoms and provide guidance, but I cannot replace an in-person examination.\n\nWhat brings you in today?"
        }]);
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMsg = { role: 'user', content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:3001/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages: [...messages, userMsg].map(({ role, content }) => ({ role, content }))
                }),
            });

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }

            setMessages(prev => [...prev, { role: 'assistant', content: data.content }]);
        } catch (error) {
            console.error("Error:", error);
            setMessages(prev => [...prev, { role: 'assistant', content: "I apologize, but I'm having trouble connecting right now. Please try again." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="h-full w-full flex flex-col bg-white relative">

            {/* Chat UI Header - Minimal */}
            <div className="flex-none bg-white px-6 py-4 border-b border-gray-100 flex items-center justify-between z-20 relative shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-100 to-indigo-50 flex items-center justify-center text-blue-600 font-bold shadow-inner">
                            AI
                        </div>
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white ring-1 ring-emerald-100"></div>
                    </div>
                    <div>
                        <div className="font-bold text-gray-800 text-sm">Dr. AI Assistant</div>
                        <div className="text-[11px] text-emerald-600 font-medium flex items-center gap-1.5">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                            </span>
                            Active Now
                        </div>
                    </div>
                </div>
            </div>

            {/* Messages Area - Scrollable */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 space-y-6 scroll-smooth bg-gray-50/30">
                {messages.map((msg, idx) => (
                    <ChatMessage key={idx} role={msg.role} content={msg.content} />
                ))}

                {isLoading && (
                    <div className="flex justify-start mb-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <div className="bg-white px-5 py-3 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 flex items-center gap-1.5">
                            <span className="text-xs text-gray-400 mr-2 font-medium">Analyzing</span>
                            <div className="flex gap-1">
                                <span className="w-1.5 h-1.5 bg-blue-400/60 rounded-full animate-bounce delay-0"></span>
                                <span className="w-1.5 h-1.5 bg-blue-400/60 rounded-full animate-bounce delay-150"></span>
                                <span className="w-1.5 h-1.5 bg-blue-400/60 rounded-full animate-bounce delay-300"></span>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area - Fixed at bottom of container */}
            <div className="bg-white p-4 sm:p-5 border-t border-gray-100">
                <form onSubmit={sendMessage} className="relative flex gap-2 items-center max-w-4xl mx-auto">
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your symptoms here..."
                            className="w-full pl-5 pr-4 py-4 bg-gray-100/50 border-0 rounded-2xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all text-gray-700 placeholder:text-gray-400 text-base shadow-inner"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading || !input.trim()}
                        className="h-[56px] px-6 bg-gray-900 text-white font-medium rounded-xl hover:bg-black disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-gray-900 transition-all shadow-md active:scale-95 flex items-center justify-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M3.478 2.404a.75.75 0 00-.926.941l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.404z" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChatInterface;

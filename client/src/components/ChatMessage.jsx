import React from 'react';
import ReactMarkdown from 'react-markdown';

const ChatMessage = ({ role, content }) => {
    const isAi = role === 'assistant';

    return (
        <div className={`flex w-full ${isAi ? 'justify-start' : 'justify-end'} mb-4`}>
            <div
                className={`max-w-[80%] rounded-2xl px-5 py-3 shadow-sm ${isAi
                        ? 'bg-white text-gray-800 border border-gray-100'
                        : 'bg-blue-600 text-white'
                    }`}
            >
                <div className={`text-xs font-semibold mb-1 ${isAi ? 'text-blue-600' : 'text-blue-100'}`}>
                    {isAi ? 'Dr. AI' : 'You'}
                </div>
                <div className="prose prose-sm max-w-none leading-relaxed">
                    {/* Use strict markdown rendering or just simple text preserving whitespace */}
                    <div className="whitespace-pre-wrap">{content}</div>
                </div>
            </div>
        </div>
    );
};

export default ChatMessage;

import React from 'react';

const ChatMessage = ({ role, content }) => {
    const isAi = role === 'assistant';

    return (
        <div className={`flex w-full ${isAi ? 'justify-start' : 'justify-end'} mb-2 group`}>
            <div
                className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-6 py-4 shadow-sm text-base transition-all duration-300 ${isAi
                        ? 'bg-white text-gray-800 border border-gray-100 rounded-tl-sm shadow-md group-hover:shadow-lg'
                        : 'bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-tr-sm shadow-blue-500/20 shadow-lg'
                    }`}
            >
                {!isAi && <div className="text-[10px] text-blue-100 uppercase tracking-wider mb-1 font-bold">You</div>}
                {isAi && <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1 font-bold flex items-center gap-1">
                    <span className="text-blue-500">Dr. AI</span>
                </div>}

                <div className="prose prose-sm max-w-none leading-relaxed">
                    <div className="whitespace-pre-wrap">{content}</div>
                </div>
            </div>
        </div>
    );
};

export default ChatMessage;

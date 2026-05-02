'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Send, X, MessageSquare, Bot, User, Loader2, MinusCircle, Maximize2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const CHAT_STORAGE_KEY = 'creon_chat_history';
const CHAT_OPEN_KEY = 'creon_chat_open';

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi! I\'m the Creon Motion Assistant. How can I help you bring your vision to life today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLabelVisible, setIsLabelVisible] = useState(true);

  // Auto-hide label on mobile after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if mobile (approx < 640px)
      if (window.innerWidth < 640) {
        setIsLabelVisible(false);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Persistence Hydration
  useEffect(() => {
    const savedMessages = sessionStorage.getItem(CHAT_STORAGE_KEY);
    const savedOpenState = sessionStorage.getItem(CHAT_OPEN_KEY);

    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
        }
      } catch (e) {
        console.error('Failed to parse saved chat messages');
      }
    }

    if (savedOpenState) {
      setIsOpen(savedOpenState === 'true');
    }
  }, []);

  // Sync to Storage
  useEffect(() => {
    sessionStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    sessionStorage.setItem(CHAT_OPEN_KEY, isOpen.toString());
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, { role: 'user', content: userMessage }] }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.content }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again later.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    if (url.startsWith('#')) {
      e.preventDefault();
      const id = url.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setIsOpen(false); // Close chat to show the user the section
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const renderMessageContent = (content: string) => {
    // Regex to match [text](#id) or [text](/path)
    const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(content)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        parts.push(content.substring(lastIndex, match.index));
      }

      const [fullMatch, text, url] = match;
      
      parts.push(
        <a
          key={match.index}
          href={url}
          onClick={(e) => handleLinkClick(e, url)}
          target={url.startsWith('#') ? undefined : '_blank'}
          className="text-[#00E0FF] font-bold underline hover:text-white transition-colors cursor-pointer"
        >
          {text}
        </a>
      );

      lastIndex = regex.lastIndex;
    }

    // Add remaining text
    if (lastIndex < content.length) {
      parts.push(content.substring(lastIndex));
    }

    return parts.length > 0 ? parts : content;
  };

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
    }
  }, [input]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[9999] font-sans">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <div className="relative group">
          {/* Permanent Label Above Icon (Auto-hides on mobile) */}
          {isLabelVisible && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1 bg-[#001A1F]/80 backdrop-blur-md border border-[#00E0FF]/30 rounded-full shadow-[0_0_15px_rgba(0,224,255,0.1)] transition-opacity duration-1000">
              <span className="text-[#00E0FF] text-[9px] font-bold uppercase tracking-[0.15em] whitespace-nowrap">
                Chat Assistant
              </span>
            </div>
          )}

          <button
            onClick={() => setIsOpen(true)}
            className="relative flex items-center justify-center w-16 h-16 bg-[#001A1F] border border-[#00E0FF]/50 rounded-2xl shadow-[0_0_30px_rgba(0,224,255,0.2)] hover:scale-110 transition-all duration-500 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00E0FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 border-2 border-[#00E0FF]/20 rounded-2xl animate-pulse" />
            <MessageSquare className="w-7 h-7 text-[#00E0FF] relative z-10 transition-transform duration-500 group-hover:rotate-[360deg]" />
            
            {/* Notification Pulse */}
            <div className="absolute top-3 right-3 w-3 h-3 bg-[#00E0FF] rounded-full shadow-[0_0_10px_#00E0FF] z-20">
              <div className="absolute inset-0 bg-[#00E0FF] rounded-full animate-ping opacity-75" />
            </div>
          </button>

          {/* Tooltip (Hover) */}
          <div className="absolute right-full mr-6 top-1/2 -translate-y-1/2 px-4 py-2 bg-[#020D12] border border-[#00E0FF]/30 text-[#00E0FF] text-[10px] font-bold uppercase tracking-[0.2em] rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 whitespace-nowrap pointer-events-none shadow-[0_0_20px_rgba(0,224,255,0.1)]">
            Chat Assistant
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="flex flex-col w-[calc(100vw-32px)] sm:w-[380px] h-[500px] sm:h-[550px] bg-[#001A1F] border border-[#00E0FF]/30 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-500">
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 bg-gradient-to-r from-[#001A1F] via-[#002A30] to-[#001A1F] border-b border-[#00E0FF]/10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-[#001A1F] border border-[#00E0FF]/50 rounded-xl flex items-center justify-center">
                  <Bot className="w-5 h-5 text-[#00E0FF]" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-[#001A1F] rounded-full animate-pulse" />
              </div>
              <div>
                <h3 className="text-white text-sm font-bold tracking-tight">AI Assistant</h3>
                <p className="text-[#00E0FF] text-[10px] uppercase tracking-widest font-medium opacity-80">Creon Motion Online</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer text-white/40 hover:text-white">
                <MinusCircle className="w-5 h-5" />
              </button>
              <button onClick={() => setIsOpen(false)} className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors cursor-pointer text-white/60 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div 
            className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col-reverse gap-4 sm:gap-6 scrollbar-thin scrollbar-thumb-[#00E0FF]/20 scrollbar-track-transparent"
          >
            {/* 
              In flex-col-reverse, the order is visually flipped. 
              The first child in the DOM is at the visual bottom.
            */}
            {isLoading && (
              <div className="flex items-start gap-3 animate-pulse">
                <div className="w-8 h-8 bg-[#002A30] border border-[#00E0FF]/20 text-[#00E0FF] rounded-lg flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-[#020D12] text-white/40 border border-white/5 rounded-2xl rounded-tl-none px-4 py-3 text-sm">
                  <Loader2 className="w-4 h-4 animate-spin" />
                </div>
              </div>
            )}

            {[...messages].reverse().map((m, idx) => (
              <div key={idx} className={`flex items-start gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-lg ${
                  m.role === 'user' 
                  ? 'bg-[#00E0FF] text-[#001A1F]' 
                  : 'bg-[#002A30] border border-[#00E0FF]/20 text-[#00E0FF]'
                }`}>
                  {m.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-xl ${
                  m.role === 'user'
                  ? 'bg-gradient-to-br from-[#00B8CC] to-[#00E0FF] text-[#001A1F] rounded-tr-none font-medium'
                  : 'bg-[#020D12] text-white/90 border border-white/5 rounded-tl-none'
                }`}>
                  {renderMessageContent(m.content)}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 sm:p-6 bg-[#001418] border-t border-white/5">
            <form onSubmit={handleSubmit} className="relative group">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                rows={1}
                className="w-full bg-[#020D12] border border-white/10 rounded-2xl pl-5 pr-14 py-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#00E0FF]/50 transition-all shadow-inner resize-none min-h-[56px] overflow-y-auto"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isLoading}
                className={`absolute right-3 bottom-4 p-2.5 rounded-xl transition-all duration-300 ${
                  input.trim() && !isLoading 
                  ? 'bg-[#00E0FF] text-[#001A1F] shadow-[0_0_15px_rgba(0,224,255,0.4)] hover:scale-105' 
                  : 'text-white/20 cursor-not-allowed'
                }`}
              >
                <Send className="w-5 h-5 shrink-0" />
              </button>
            </form>
            <p className="mt-4 text-center text-[9px] text-white/20 uppercase tracking-[0.2em] font-medium italic">
              Powered by Creon Intelligence
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatWidget;

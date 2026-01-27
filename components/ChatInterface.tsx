
import React, { useState, useRef, useEffect } from 'react';
import { Message, Category } from '../types';
import { getWisdom, getSpeech } from '../services/geminiService';

interface ChatInterfaceProps {
  onGrowth: (amount: number) => void;
}

// Utility functions for audio as per guidelines
function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ onGrowth }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [category, setCategory] = useState<Category>(Category.LIFE);
  const [loading, setLoading] = useState(false);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handlePlaySpeech = async (text: string, msgId: string) => {
    if (playingId === msgId) return;
    
    setPlayingId(msgId);
    try {
      const base64Audio = await getSpeech(text);
      if (!base64Audio) {
        setPlayingId(null);
        return;
      }

      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      }

      const audioBuffer = await decodeAudioData(
        decode(base64Audio),
        audioContextRef.current,
        24000,
        1
      );

      const source = audioContextRef.current.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContextRef.current.destination);
      source.onended = () => setPlayingId(null);
      source.start();
    } catch (e) {
      console.error(e);
      setPlayingId(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
      category
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const wisdom = await getWisdom(input, category);

    const assistantMsg: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: wisdom || 'The wisdom is currently flowing, please wait...',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, assistantMsg]);
    setLoading(false);
    onGrowth(5); 
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-100">
      <div className="p-4 bg-emerald-600 text-white">
        <h3 className="text-lg font-bold">Ask the Wisdom Gardener</h3>
        <div className="flex gap-2 mt-2 overflow-x-auto pb-1 no-scrollbar">
          {Object.values(Category).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs whitespace-nowrap transition-colors ${
                category === cat ? 'bg-white text-emerald-700 font-bold' : 'bg-emerald-500 text-emerald-100 hover:bg-emerald-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto bg-slate-50 space-y-4">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center p-8 opacity-60">
            <div className="text-5xl mb-4">🌻</div>
            <p className="text-emerald-800 font-medium italic">
              "The example of a good word is like a good tree..."
            </p>
            <p className="mt-4 text-sm">Plant a seed of knowledge by asking your first question.</p>
          </div>
        )}
        
        {messages.map((m) => (
          <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl shadow-sm relative ${
                m.role === 'user' ? 'bg-emerald-600 text-white rounded-tr-none' : 'bg-white text-slate-800 border border-emerald-50 rounded-tl-none'
              }`}>
              {m.role === 'assistant' && (
                <div className="flex justify-between items-start mb-1">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 flex items-center">
                    <span className="mr-1">🌿</span> Wisdom Gardener
                  </div>
                  <button 
                    onClick={() => handlePlaySpeech(m.content, m.id)}
                    className={`p-1 rounded-full transition-colors ${playingId === m.id ? 'bg-emerald-100 text-emerald-600 animate-pulse' : 'text-slate-400 hover:bg-slate-100'}`}
                    title="Listen to Wisdom"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                  </button>
                </div>
              )}
              <div className="whitespace-pre-wrap text-sm leading-relaxed prose-sm prose-emerald">
                {m.content}
              </div>
              <div className={`text-[10px] mt-2 opacity-60 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white p-4 rounded-2xl border border-emerald-50 flex space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-emerald-50">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Ask about ${category.toLowerCase()}...`}
            className="flex-1 p-3 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-emerald-500 text-sm outline-none"
          />
          <button 
            type="submit"
            disabled={loading || !input.trim()}
            className="bg-emerald-600 text-white p-3 rounded-xl hover:bg-emerald-700 transition-colors disabled:opacity-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface;

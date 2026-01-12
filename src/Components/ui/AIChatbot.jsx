// src/components/ui/AIChatbot.jsx

import React, { useState } from 'react';
/* eslint-disable-next-line no-unused-vars */
import { motion } from 'framer-motion';
import { Button } from '@/Components/ui/Button.jsx';
import { Textarea } from '@/Components/ui/Textarea.jsx';
import { MessageCircle, Send, Loader2, Zap } from 'lucide-react';
import { ChatWithAI } from '@/integrations/Core.js'; 

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'AI', text: 'hi there! i\'m mariah\'s personal ai assistant. i can answer questions about her skills, projects, and philosophy. what would you like to know? 🧠' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { sender: 'User', text: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      // Simulate API call to the LLM
      const response = await ChatWithAI(userMessage.text);
      const aiResponse = { sender: 'AI', text: response.reply };
      setMessages([...newMessages, aiResponse]);
    } catch {
      setMessages([...newMessages, { sender: 'AI', text: 'oops! i\'m having trouble connecting right now. please try again later!' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        className="fixed bottom-8 right-8 lg:right-40 bg-purple-600 text-white p-4 rounded-full shadow-2xl hover:bg-purple-700 transition-all z-50"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      {isOpen && (
        <motion.div
          className="fixed bottom-24 right-8 lg:right-40 w-80 h-96 bg-white rounded-xl shadow-2xl flex flex-col z-50 overflow-hidden border border-gray-200"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-bold flex items-center gap-2">
              <Zap className="w-4 h-4" /> Mariah's AI Tour Guide
            </h3>
            <button onClick={() => setIsOpen(false)} className="text-white opacity-70 hover:opacity-100 transition-opacity">×</button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 space-y-3 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'User' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[75%] p-3 rounded-lg text-sm ${
                  msg.sender === 'User' 
                    ? 'bg-blue-500 text-white rounded-br-none' 
                    : 'bg-gray-100 text-gray-800 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[75%] p-3 rounded-lg text-sm bg-gray-100 text-gray-800 rounded-tl-none">
                  <Loader2 className="w-4 h-4 inline mr-2 animate-spin" />
                  ai is thinking...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="border-t border-gray-200 p-3 flex gap-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="ask me anything..."
              className="resize-none h-10 border-gray-300 focus:ring-purple-500"
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              disabled={isLoading}
            />
            <Button type="submit" disabled={isLoading} className="bg-purple-600 hover:bg-purple-700 p-2 h-10">
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </motion.div>
      )}
    </>
  );
}
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X } from 'lucide-react';

const faqData = {
  "What is SaaSLogo?": "SaaSLogo is a cutting-edge SaaS solution designed to revolutionize your workflow and boost productivity.",
  "How much does it cost?": "We offer flexible pricing plans starting from $29/month. Check our pricing section for more details.",
  "Is there a free trial?": "Yes, we offer a 14-day free trial for all our plans. No credit card required!",
  "How secure is my data?": "We use state-of-the-art security measures to ensure your data is always protected and encrypted.",
  "Can I integrate with other tools?": "Absolutely! SaaSLogo offers easy integration with a wide range of popular business tools and platforms."
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const userMessage = { type: 'user', content: input };
    setMessages([...messages, userMessage]);

    // Simple FAQ matching
    const answer = faqData[input] || "I'm sorry, I don't have an answer for that question. Please try asking something else or contact our support team for more assistance.";
    const botMessage = { type: 'bot', content: answer };
    
    setTimeout(() => {
      setMessages(prev => [...prev, botMessage]);
    }, 500);

    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <Button onClick={toggleChat} className="rounded-full w-12 h-12 flex items-center justify-center">
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
      {isOpen && (
        <Card className="w-80 h-96 flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Chat with us</CardTitle>
            <Button variant="ghost" size="icon" onClick={toggleChat}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="flex-grow overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${msg.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                  {msg.content}
                </span>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <form onSubmit={handleSubmit} className="w-full flex">
              <Input
                type="text"
                placeholder="Type your question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow mr-2"
              />
              <Button type="submit">Send</Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default ChatBot;
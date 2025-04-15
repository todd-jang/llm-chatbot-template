interface MessageProps {
    text: string;
    sender: 'user' | 'bot';
  }
  
  export default function MessageBubble({ text, sender }: MessageProps) {
    const isUser = sender === 'user';
    return (
      <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
        <div className={`rounded-xl p-3 m-1 max-w-xs ${isUser ? 'bg-green-200' : 'bg-blue-100'}`}>
          <p>{text}</p>
        </div>
      </div>
    );
  }
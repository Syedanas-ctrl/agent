'use client';
import ChatMessage from "@/components/ChatMessage";
import PromptInput from "@/components/PromptInput";
import { useChat } from "ai/react";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    keepLastMessageOnError: true,
  });

  return (
    <main className="flex min-h-screen w-full mx-auto md:w-[720px] flex-col relative">
      <section className="flex flex-col gap-4 p-4">
        {messages.map((message) => (
          <ChatMessage sender={message.role === "user" ? "self" : "agent"} content={message.content} />
        ))}
      </section>
      <PromptInput
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}

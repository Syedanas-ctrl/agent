"use client";
import ChatMessage from "@/components/ChatMessage";
import PromptInput from "@/components/PromptInput";
import useYoutube from "@/hooks/youtube";
import { useChat } from "ai/react";
import { useEffect } from "react";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    keepLastMessageOnError: true,
  });
  useYoutube();

  return (
    <main className="flex min-h-screen w-full mx-auto md:w-[720px] flex-col relative">
      <section className="flex flex-col gap-4 p-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} sender={message.role === "user" ? "self" : "agent"} content={message.content} />
        ))}
        {isLoading && (
          <div className="animate-spin w-fit h-fit flex items-center justify-center">
            <span className="material-symbols-rounded text-rose-600">progress_activity</span>
          </div>
        )}
      </section>
      <PromptInput input={input} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
    </main>
  );
}

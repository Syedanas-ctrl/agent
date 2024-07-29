import React from "react";

const ChatMessage = ({ sender, content }: { sender: "self" | "agent"; content: React.ReactNode | string }) => {
  return (
    <section className={`flex gap-2 items-start ${sender === "agent" ? "justify-start" : "justify-end"}`}>
      <div className="bg-rose-100 max-w-[85%] rounded-xl p-4">{content}</div>
    </section>
  );
};

export default ChatMessage;

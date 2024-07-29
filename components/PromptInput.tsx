import React from "react";

const PromptInput = ({
  input,
  handleInputChange,
  handleSubmit,
}:{
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <section className="absolute bottom-0 w-full py-4 px-4">
        <div className="flex gap-2 items-center border-2 border-gray-300 rounded-3xl p-2 bg-white">
          <textarea name="prompt" value={input} onChange={handleInputChange} className="flex-grow outline-none px-2" rows={1} placeholder="Type a Prompt"></textarea>
          <button type="submit" className="rounded-full bg-rose-600 w-8 h-8 grow-0 shrink-0 flex items-center justify-center">
            <span className="material-symbols-rounded text-white">send</span>
          </button>
        </div>
      </section>
    </form>
  );
};

export default PromptInput;

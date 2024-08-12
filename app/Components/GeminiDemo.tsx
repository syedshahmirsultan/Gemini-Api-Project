'use client';

import { useChat } from 'ai/react';

export default function GeminiDemo() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col items-center mt-44 w-full min-h-screen">
     

<p className="text-white text-center w-full p-4 md:max-w-5xl md:mx-auto mb-4"><span className='font-semibold'>Example :</span>   A 17-year-old patient presents with headaches and is currently self-medicating with Panadol. Request comprehensive information regarding the medication’s mechanism of action, efficacy for headaches in this age group, potential side effects, recommended dosage, and general advice on headache management </p>
      <form onSubmit={handleSubmit} className='h-72 border w-[99%] m-1 md:m-0 md:w-[500px] rounded-md'>
        <textarea
          value={input}
          placeholder="Enter your prompt ...   "
          onChange={handleInputChange}
          className='border-none h-full w-full p-4 outline-none'
        />
        <button type='submit' className="w-full h-12 flex justify-center items-center mt-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-semibold text-md text-lg"> Submit</button>
      </form>

<div className="w-full m-4 md:m-0 h-auto bg-slate-800/10 border border-gray-700 flex flex-col items-start ml-2 md:ml-0 md:items-center text-gray-950 p-6 mt-28 md:mt-28">
      {messages.map(m => (
        <div key={m.id} className=' text-white break-words text-md md:text-lg whitespace-pre-wrap '>
          {m.role === 'user' ? 'User: ' : ' \n AI: '}
  {m.content}
        </div>
      ))}
    </div></div>
  );
}



"use client"
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

export default function Home() {
  const [inputValue, SetInputValue] = useState('');
  const { push } = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`prediction/${inputValue}`)
  }

  return (
    <div>
      <div>
        <h1>Enter Your Name</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Type Your Name..." 
        value={inputValue} 
        onChange={(e) => SetInputValue(e.target.value)}/>
        <button type="submit" >Predict Data</button>
      </form>
    </div>
  )
}

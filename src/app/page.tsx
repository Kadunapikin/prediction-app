"use client"
import { useState, FormEvent } from "react";

export default function Home() {
  const [inputValue, SetInputValue] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  }

  return (
    <div>
      <div>
        <h1>Enter Your Name</h1>
      </div>
      <form action="">
        <input type="text" placeholder="Type Your Name" value={inputValue} onChange={(e) => SetInputValue(e.target.value)}/>
        <button type="submit" onSubmit={handleSubmit}>Predict Data</button>
      </form>
    </div>
  )
}

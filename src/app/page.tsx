"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useState } from "react";
import axios from "axios";

import { openai } from "@/lib/open";
import { log } from "console";

export default function Home() {
  const [field, setField] = useState("");

  const getGeneration = async (e: FormEvent) => {
    e.preventDefault();
    const completion = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt: `write me a cover letter in few words for this job description: ${field}`,
    });

    console.log("completion", completion);

    // const requiredData = {
    //   model: "gpt-3.5-turbo",

    //   messages: {
    //     role: "user",
    //     content: `write me a cover letter in few words for this job description: ${field}`,
    //   },
    // };

    // const response = axios.post(
    //   "https://api.openai.com/v1/chat/completions",
    //   requiredData,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
    //     },
    //   }
    // );

    // console.log("response", response);

    // const response = await fetch("https://api.openai.com/v1/chat/completions", {
    //   method: "POST",
    //   headers: {
    //     Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
    //   },
    //   body: JSON.stringify({
    //     model: "gpt-3.5-turbo",
    //     messages: {
    //       role: "assistant",
    //       content: `write me a cover letter in few words for this job description: ${field}`,
    //     },
    //   }),
    // });

    // const data = await response.json();

    // console.log("data", data);
  };
  return (
    <div className="max-w-5xl mx-auto p-10">
      <form onSubmit={getGeneration} className="flex flex-col gap-5">
        <Textarea placeholder="Type your job description here." />
        <Input
          placeholder="Your fullname here."
          type="text"
          onChange={(e) => setField(e.target.value)}
        />
        <Button>Generate</Button>
      </form>
    </div>
  );
}

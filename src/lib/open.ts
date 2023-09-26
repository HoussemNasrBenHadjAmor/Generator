import { OpenAI } from "openai";

export const openai = new OpenAI({
  //   organization: "Generator",
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

// const completion = await openai.completions.create({
//     model: 'gpt-3.5-turbo-instruct',
//     prompt: 'Write a tagline for an ice cream shop.'
// });

"use server";

import OpenAI from "openai";

export async function action(data: string) {
  const opeanai = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY,
  });
  try {
    const response = await opeanai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a financial advisor. You are helping a client with their financial planning. He will provide you three stock tickers and you will provide him with a prediction of the stock price - whether he should buy, sell, or hold. Your answer should be concise enough but not too short, like : 'I would advice ... '.",
          name: "system_message",
        },
        {
          role: "user",
          content: data,
          name: "user_message",
        },
      ],
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

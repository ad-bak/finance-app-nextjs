import OpenAI from "openai";
import { Card } from "./_components/welcome-card";

const Home = async () => {
  const opeanai = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY,
  });

  const response = await opeanai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are a helpful general knowledge expert",
        name: "system_message",
      },
      {
        role: "user",
        content: "What is Kanye West's most influential album?",
        name: "user_message",
      },
    ],
  });

  console.log(response.choices[0].message.content);

  return <Card />;
};

export default Home;

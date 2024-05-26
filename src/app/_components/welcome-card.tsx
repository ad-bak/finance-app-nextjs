"use client";

import { useState } from "react";
import Image from "next/image";

import { action } from "@/actions";
import { CardContent, CardFooter, CardHeader, Card as ShadCard } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Card = ({ className }: { className?: string }) => {
  const [tickers, setTickers] = useState<string[]>([]);
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleAddTicker = (e: any) => {
    if (tickers.length < 3 && e.target.value.trim() !== "") {
      setTickers([...tickers, e.target.value.trim().toUpperCase()]);
      e.target.value = "";
    }
  };

  const handleGetAdvice = async () => {
    setLoading(true);
    const message = `Predict the stock prices for: ${tickers.join(", ")}`;
    const result = await action(message);
    setResponse(result as string);
    setLoading(false);
  };

  return (
    <ShadCard className={`mx-auto my-20 bg-opacity-10 border-none p-5 max-w-lg ${className}`}>
      <CardHeader className="border-b-2">
        <div className="bg-[#70D99E] max-w-32 rounded-full self-center">
          <Image src="/file.png" width={200} height={200} alt="Finance App" />
        </div>
        <h1 className="text-2xl font-semibold text-center">Financial Advice from a Literal Wolf From Wall Street</h1>
      </CardHeader>
      <CardContent className="flex  flex-col gap-3 my-4">
        <div className="flex">
          <Input
            id="ticker"
            placeholder="Ticker"
            onBlur={handleAddTicker}
            className="rounded-none focus:border-transparent focus:outline-none"
          />
          <Button onClick={handleAddTicker} className="h-10 rounded-none">
            +
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          <p>{tickers.join(", ")}</p>
          <Button onClick={handleGetAdvice} disabled={loading || tickers.length < 3}>
            {loading ? "Loading..." : "Get Advice"}
          </Button>
        </div>
        {response && <p className="text-center">{response}</p>}
      </CardContent>
      <CardFooter>
        <p className="text-center">All my advice is correct 100% of the time (if you ignore the times I'm wrong).</p>
      </CardFooter>
    </ShadCard>
  );
};

export { Card };

"use client";

import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, CardHeader, Card as ShadCard } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

const Card = ({ className }: { className?: string }) => {
  const [tickers, setTickers] = useState<string[]>([]);
  return (
    <ShadCard className={`mx-auto my-20 bg-opacity-10 border-none p-5 max-w-lg ${className}`}>
      <CardHeader className="border-b-2">
        <div className="bg-[#70D99E] max-w-32 rounded-full self-center">
          <Image src="/file.png" width={200} height={200} alt="Finance App" />
        </div>
        <h1 className="text-2xl font-semibold text-center">Financial Advice from a Literal Wolf From Wall Street</h1>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col px-10 gap-4 my-4">
          <label htmlFor="ticker" className="text-center font-bold">
            Add up to 3 stock tickers below to get a super accurate stock predictions 👇🏻
          </label>
          <div className="flex border-4 border-black">
            <Input
              id="ticker"
              name="ticker"
              placeholder="Ticker"
              className="rounded-none  focus:border-transparent focus:outline-none"
            />

            <Button
              disabled={tickers.length >= 3}
              className="transition rounded-none border-l-4 border-black bg-white text-black text-2xl hover:bg-black hover:text-white  duration-300 ease-linear disabled:cursor-not-allowed
                "
              onClick={() => {
                const ticker = document.getElementById("ticker") as HTMLInputElement;
                if (ticker.value) {
                  setTickers([...tickers, ticker.value.trim()]);
                  ticker.value = "";
                }
              }}
            >
              +
            </Button>
          </div>

          <div>
            {tickers.map((ticker, index) => (
              <p key={index} className="text-center">
                {ticker}
              </p>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-center">All my advice are correct 100% of the time (if you ignore the times I'm wrong)</p>
      </CardFooter>
    </ShadCard>
  );
};

export { Card };

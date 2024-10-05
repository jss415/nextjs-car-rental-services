"use client";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface InputCounterProps {
  detail: string;
  defaultValue?: number;
}

export default function InputCounter({
  detail,
  defaultValue,
}: InputCounterProps) {
  const [count, setCount] = useState(defaultValue || 0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => Math.max(0, prev - 1));

  return (
    <>
      <div className="space-y-2 mt-4 mb-4">
        <h3 className="text-xl font-semibold capitalize">{detail}</h3>
        <p className="text-sm text-muted-foreground">
          Specify the number of {detail}
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="icon" type="button" onClick={decrement}>
          <FaMinus className="h-4 w-4" />
        </Button>
        <div className="relative w-20">
          <input type="hidden" name={detail} value={count} />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {count}
          </div>
        </div>
        <Button variant="outline" size="icon" type="button" onClick={increment}>
          <FaPlus className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
}

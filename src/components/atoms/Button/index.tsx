import { useState } from "react";

type ButtonProps = {
  title: string;
};

export default function Button({ title }: ButtonProps) {
  const [state, setState] = useState(false);

  return (
    <button className="h-10 border-2 border-gray-300 rounded-md ml-2 p-2">
      <p className="text-xs text-center font-medium">{title}</p>
    </button>
  );
}

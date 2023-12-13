import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

type DropdownProps = {
  title: string;
  options: string[];
};

export default function Dropdown({ title, options }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex justify-center items-center text-left w-full border-2 border-gray-300 rounded-md p-2 ml-2"
      >
        <p className="text-xs font-medium px-1">{title}</p>
        <span className="float-right">
          <IoIosArrowDown className="text-gray-400" size="20" />
        </span>
      </button>
      {isOpen && (
        <div className="absolute left-0 right-0 mt-1 bg-white shadow-md rounded-md border-1 border-gray-300 z-10">
          {options.map((option, id) => (
            <a
              key={id}
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {option}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

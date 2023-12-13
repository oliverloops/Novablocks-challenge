import { useState, useContext } from "react";
import { IoIosClose } from "react-icons/io";
//* Components
import Dropdown from "../../atoms/Dropdown";
//* Utils
import { ModalContext } from "../LeaderBoard";

export default function ModalColumn() {
  const { isOpen, setIsOpen, columns, setColumns, currentColumn } =
    useContext(ModalContext);
  const [title, setTitle] = useState<string>("");

  const editColumn = (id: string) => {
    const newColumns = columns.map((column: any) => {
      if (column.id === id) {
        return {
          ...column,
          title: title,
        };
      }
      return column;
    });
    setColumns(newColumns);
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      id="my-modal"
    >
      <div className="relative top-64 mx-auto p-4 border w-2/6 shadow-lg rounded-md bg-white">
        <div className="mt-2 text-center">
          <div className="flex justify-between items-center">
            <p className="text-xl leading-6 font-bold text-gray-900">
              Edit Column
            </p>
            <button onClick={() => setIsOpen(!isOpen)}>
              <IoIosClose className="text-gray-400" size="36" />
            </button>
          </div>
          <form className="flex flex-col items-start py-3">
            <label className="text-sm text-gray-500">Enter title</label>
            <input
              type="text"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 block w-full"
              placeholder="Placeholder"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="text-sm text-gray-500 mt-4">Data</label>
            <div className="flex justify-between space-x-2">
              <Dropdown
                title="Type"
                options={["Time", "Points", "Score", "Wins", "Losses"]}
              />
              <Dropdown title="Color" options={["Red", "Green", "Blue"]} />
            </div>
          </form>
          <div className="flex justify-start items-start my-4">
            <img
              className="w-9 h-9 rounded-3xl"
              src={"https://i.pravatar.cc/300?img=10"}
            />
            <div className="flex flex-col justify-start items-start">
              <p className="text-sm text-center font-medium px-2">Shooter</p>
              <p className="text-xs text-center text-gray-400 px-2">
                Last edit: 12/12/23
              </p>
            </div>
          </div>
          <div className="flex justify-end items-end border-t-2 border-gray-200 mt-5 pt-5 pb-2">
            <button
              id="cancel-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="px-3 py-1.5 border-2 border-gray-300 rounded-md mr-2"
            >
              <p className="text-sm">Cancel</p>
            </button>
            <button
              id="create-btn"
              className="px-3 py-1.5 bg-blue-500 border-2 border-blue-500 text-white rounded-md"
              onClick={() => editColumn(currentColumn)}
            >
              <p className="text-sm">Confirm</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

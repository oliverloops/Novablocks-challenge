import { useState, useContext } from "react";
import { IoIosClose } from "react-icons/io";
//* Components
import Dropdown from "../../atoms/Dropdown";
//* Utils
import { ModalContext } from "../LeaderBoard";

export default function Modal() {
  const { tabModal, setTabModal, tabs, setTabs } = useContext(ModalContext);
  const [title, setTitle] = useState<string>("");

  const createTab = () => {
    const newTab = {
      id: tabs.length + 1,
      title: title,
      icon: "",
    };
    setTabs([...tabs, newTab]);
    setTabModal(!tabModal);
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
              New Tab Title
            </p>
            <button onClick={() => setTabModal(!tabModal)}>
              <IoIosClose className="text-gray-400" size="36" />
            </button>
          </div>
          <form className="flex flex-col items-start py-3">
            <label className="text-sm text-gray-500">Label</label>
            <input
              type="text"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 block w-full"
              placeholder="Placeholder"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Dropdown title="Icon" options={[]} />
          </form>
          <div className="flex justify-end items-end border-t-2 border-gray-200 mt-5 pt-5 pb-2">
            <button
              id="cancel-btn"
              onClick={() => setTabModal(!tabModal)}
              className="px-3 py-1.5 border-2 border-gray-300 rounded-md mr-2"
            >
              <p className="text-sm">Cancel</p>
            </button>
            <button
              id="create-btn"
              className="px-3 py-1.5 bg-blue-500 border-2 border-blue-500 text-white rounded-md"
              onClick={createTab}
            >
              <p className="text-sm">Confirm</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

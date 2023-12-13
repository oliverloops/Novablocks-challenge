import React, { useContext } from "react";
//* Utils
import { ModalContext } from "../../organisms/LeaderBoard";

type TabProps = {
  title: string;
  icon: React.ReactNode | JSX.Element;
  addTab?: boolean;
};

export default function Tab({ title, icon, addTab = false }: TabProps) {
  const { tabModal, setTabModal } = useContext(ModalContext);

  return (
    <button
      className="flex h-10 w-1/12 justify-center items-center bg-slate-100 rounded-t-md cursor-pointer mr-1"
      onClick={addTab ? () => setTabModal(!tabModal) : () => null}
    >
      {icon}
      <p className="text-sm font-semibold ml-1">{title}</p>
    </button>
  );
}

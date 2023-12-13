import { useState, createContext } from "react";
import {
  IoSparkles,
  IoSkullSharp,
  IoRibbon,
  IoAddCircleSharp,
  IoGameController,
} from "react-icons/io5";
import { DndContext } from "@dnd-kit/core";
//* Components
import Tab from "../../atoms/Tab";
import Button from "../../atoms/Button";
import Dropdown from "../../atoms/Dropdown";
import Column from "../../molecules/Column";
import Modal from "../Modal";
import ModalColumn from "../ModalColumn";
//* Utils
import data from "../../../../data/ranks.json";

export const ModalContext = createContext({});

export default function LeaderBoard() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [tabModal, setTabModal] = useState<boolean>(false);
  //* Columns Logic
  const [columns, setColumns] = useState([]);
  const [currentColumn, setCurrentColumn] = useState(null);
  //* Tabs Logic
  const [tabs, setTabs] = useState([]);

  const contextValues = {
    isOpen,
    setIsOpen,
    tabModal,
    setTabModal,
    columns,
    setColumns,
    tabs,
    setTabs,
    currentColumn,
    setCurrentColumn,
  };

  return (
    <ModalContext.Provider value={contextValues}>
      <div className="flex flex-col w-1/6 h-1/6 justify-center items-center">
        <div className="flex flex-col">
          <div className="flex w-5/6 rounded-tr-lg absolute -translate-y-10 z-20">
            <Tab title="XP" icon={<IoSparkles color="black" size="16" />} />
            <Tab
              title="Kills"
              icon={<IoSkullSharp color="black" size="16" />}
            />
            <Tab title="Points" icon={<IoRibbon color="black" size="16" />} />
            {tabs.map((tab: any, id: number) => (
              <Tab
                key={id}
                title={tab.title}
                icon={<IoGameController className="text-black" size="16" />}
              />
            ))}
            <Tab
              title=""
              icon={<IoAddCircleSharp className="text-blue-400" size="28" />}
              addTab
            />
          </div>
          <div className="h-5/6 w-5/6 rounded-lg rounded-tl-none bg-white absolute z-10">
            <div className="flex items-center mx-8">
              <IoSparkles color="black" size="22" />
              <p className="text-2xl font-bold my-5 mx-1">XP</p>
            </div>
            <ToolSection />
            <ColumnSection columns={columns} setColumns={setColumns} />
            {tabModal && <Modal />}
            {isOpen && <ModalColumn />}
          </div>
        </div>
      </div>
    </ModalContext.Provider>
  );
}

function ToolSection() {
  return (
    <div className="flex justify-between mx-4">
      <div className=" flex px-2">
        <Button title="Add column" />
        <Button title="Add subcategory" />
        <Dropdown
          title="Top players"
          options={["Top 10", "Top 20", "Top 30"]}
        />
      </div>
      <div className="flex px-8">
        <Dropdown title="View as Creator" options={["Player View"]} />
      </div>
    </div>
  );
}

function ColumnSection({
  columns,
  setColumns,
}: {
  columns: any[];
  setColumns: React.Dispatch<any>;
}) {
  const [parent, setParent] = useState(null);
  const handleDragEnd = ({ over }: { over: any }) => {
    setParent(over ? over.id : null);
  };

  return (
    <div className="flex px-7 py-4">
      <DndContext onDragEnd={handleDragEnd}>
        <Column
          id="draggable"
          columnId={0}
          title="Players"
          enableAvatar
          data={data.users}
        />
      </DndContext>
      {columns.map((column, id) => (
        <DndContext key={id} onDragEnd={handleDragEnd}>
          <Column
            id="draggable"
            columnId={column.columnId}
            title={column.title}
            data={data.ranks}
            type={column.type}
          />
        </DndContext>
      ))}
      {columns.length < 5 && (
        <button
          className="flex w-24 h-8 justify-center items-center bg-blue-500 rounded-md mx-2 my-1 p-2"
          onClick={() =>
            setColumns([
              ...columns,
              {
                ColumnId: Math.random().toFixed,
                title: "Category",
                type: "points",
              },
            ])
          }
        >
          <p className="text-xs font-semibold text-white">Add Column</p>
        </button>
      )}
    </div>
  );
}

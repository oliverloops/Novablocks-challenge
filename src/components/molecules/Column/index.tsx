import { useContext } from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { HiOutlineDotsVertical, HiPencil } from "react-icons/hi";
//* Components
import { ModalContext } from "../../organisms/LeaderBoard";

type ColumnProps = {
  title: string;
  data: any[];
  id: string;
  enableAvatar?: boolean;
  columnId: number;
  type?: string;
};

export default function Column({
  title,
  data,
  id,
  enableAvatar = false,
  columnId,
  type,
}: ColumnProps) {
  const { isOpen, setIsOpen, setCurrentColumn } = useContext(ModalContext);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });
  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
    setCurrentColumn(columnId);
  };

  return (
    <div className="flex w-1/6" style={style}>
      <table className="w-full border-2 bg-white border-gray-300 rounded-lg overflow-hidden">
        <thead className="h-10 bg-blue-100">
          <tr className="flex justify-center items-center w-full my-2">
            <th className="flex w-full justify-center items-center text-sm">
              <p className="font-semibold mx-8">{title}</p>
              <div onClick={handleModal}>
                <HiPencil className="text-gray-400 cursor-pointer" size="18" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="p-2">
          {data.map((item, id) => (
            <tr
              key={id}
              className="flex items-center h-12 border-2 border-t-0 border-gray-200 pl-2"
            >
              {enableAvatar && (
                <>
                  <img className="w-8 h-8 rounded-3xl" src={item.avatar} />
                  <td className="text-sm text-center px-2">{item.title}</td>
                </>
              )}
              {type === "points" ? (
                <td className="text-sm text-center px-2">{item.points}</td>
              ) : type === "wins" ? (
                <td className="text-sm text-center px-2">{item.wins}</td>
              ) : type === "losses" ? (
                <td>{item.losses}</td>
              ) : (
                <td>{item.matches}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div
        className="flex flex-col justify-center items-center w-4 h-8 bg-gray-200 rounded-r-md cursor-grab -ml-0.5 mt-1.5 mr-2"
        ref={setNodeRef}
        {...listeners}
        {...attributes}
      >
        <HiOutlineDotsVertical className="text-gray-500" size="18" />
      </div>
    </div>
  );
}

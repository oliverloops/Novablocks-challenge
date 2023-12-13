import { useContext } from "react";
//* Utils
import { LeaderBoardContext } from "../../../App";

export default function LeaderBoardTab() {
  const { modal, setModal } = useContext(LeaderBoardContext);

  return (
    <div className="flex h-10 items-center right-20 rounded-b-lg bg-slate-600 absolute cursor-pointer z-1">
      <button onClick={() => setModal(!modal)}>
        <p className="text-sm font-semibold text-white p-6">Leaderboard 👑</p>
      </button>
    </div>
  );
}

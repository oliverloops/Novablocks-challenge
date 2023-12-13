import { useState, createContext } from "react";
//* Components
import LeaderBoardTab from "./components/atoms/LeaderBoardTab";
import LeaderBoard from "./components/organisms/LeaderBoard";
//* Styling
import "./App.css";

export const LeaderBoardContext = createContext({});

function App() {
  const [modal, setModal] = useState(false);

  const data = {
    modal: modal,
    setModal: setModal,
  };

  return (
    <LeaderBoardContext.Provider value={data}>
      <main
        style={{
          backgroundColor: modal ? "rgba(0,0,0,0.6)" : "#fff",
        }}
      >
        <LeaderBoardTab />
        {modal && <LeaderBoard />}
      </main>
    </LeaderBoardContext.Provider>
  );
}

export default App;

import React from "react";
import SinnerList from "./components/SinnerList";
import SinnerForm from "./components/SinnerForm";
import useSinner from "./hooks/useSinner";
import "./App.css";

function App() {
  const {
    sinners,
    addSinner,
    updateRoom,
    updateSinner,
    deleteSinner,
    editingSinner,
    setEditingSinner,
  } = useSinner();

  return (
    <div className="App">
      <h1>Gerenciamento de Residents</h1>
      <SinnerForm
        addSinner={addSinner}
        updateRoom={updateRoom}
        updateSinner={updateSinner}
        editingSinner={editingSinner}
        setEditingSinner={setEditingSinner}
      />
      <SinnerList
        sinners={sinners}
        deleteSinner={deleteSinner}
        setEditingSinner={setEditingSinner}
      />
    </div>
  );
}

export default App;

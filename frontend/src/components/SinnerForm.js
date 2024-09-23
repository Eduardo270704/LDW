import React, { useState, useEffect } from "react";

function SinnerForm({
  addSinner,
  updateRoom,
  updateSinner,
  editingSinner,
  setEditingSinner,
}) {
  const [sinner, setSinner] = useState({ sinner: "", room: "" });

  useEffect(() => {
    if (editingSinner) {
      setSinner(editingSinner);
    } else {
      setSinner({ sinner: "", room: "" });
    }
  }, [editingSinner]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingSinner) {
      updateSinner(sinner);
      updateRoom(sinner);
      setEditingSinner(null);
    } else {
      addSinner(sinner);
    }
    setSinner({ sinner: "", room: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Sinner Name:</label>
        <input
          type="text"
          value={sinner.sinner}
          onChange={(e) => setSinner({ ...sinner, sinner: e.target.value })}
        />
      </div>
      <div>
        <label>Room:</label>
        <input
          type="text"
          value={sinner.room}
          onChange={(e) => setSinner({ ...sinner, room: e.target.value })}
        />
      </div>
      <button type="submit">
        {editingSinner ? "Update Resident" : "Insert new Resident"}
      </button>
    </form>
  );
}

export default SinnerForm;

import React from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

function SinnerList({ sinners, deleteSinner, setEditingSinner }) {
  return (
    <ul>
      {sinners.map((sinner) => (
        <li key={sinner._id}>
          <span>
            <strong>Sinner:</strong> {sinner.sinner} <br />
            <strong>Room:</strong> {sinner.room}
          </span>
          <div>
            <button
              className="icon-button"
              onClick={() => setEditingSinner(sinner)}
            >
              <FaEdit />
            </button>
            <button
              className="icon-button delete-button"
              onClick={() => deleteSinner(sinner._id)}
            >
              <FaTrashAlt />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SinnerList;

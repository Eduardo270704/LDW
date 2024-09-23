import { useState, useEffect } from "react";
import api from "../services/api";

const useSinner = () => {
  const [sinners, setSinners] = useState([]);
  const [editingSinner, setEditingSinner] = useState(null);

  useEffect(() => {
    fetchSinners();
  }, []);

  const fetchSinners = async () => {
    try {
      const response = await api.get("/sinner");
      setSinners(response.data);
    } catch (error) {
      console.error("Error to find sinners", error);
    }
  };

  const addSinner = async (sinner) => {
    try {
      const response = await api.post("/sinner", sinner);
      setSinners((prevSinners) => [...prevSinners, response.data]);
    } catch (error) {
      console.error("Erro inserting new sinner", error);
    }
  };

  const updateRoom = async (sinner) => {
    try {
      await api.put("/sinner/room", {
        id: sinner._id,
        room: sinner.room,
      });
      fetchSinners();
    } catch (error) {
      console.error("Error updating sinner room", error);
    }
  };

  const updateSinner = async (sinner) => {
    try {
      await api.put("/sinner/sinner", {
        id: sinner._id,
        nome: sinner.sinner,
      });
      fetchSinners();
    } catch (error) {
      console.error("Error updating sinner name", error);
    }
  };

  const deleteSinner = async (id) => {
    try {
      await api.delete("/sinner", { data: { id } });
      fetchSinners();
    } catch (error) {
      console.error("Error deleting sinner", error);
    }
  };

  return {
    sinners,
    addSinner,
    updateRoom,
    updateSinner,
    deleteSinner,
    editingSinner,
    setEditingSinner,
  };
};

export default useSinner;

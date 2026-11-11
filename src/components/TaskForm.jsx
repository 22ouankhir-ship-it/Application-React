import { useState } from "react";

function TaskForm({ ajouterTache }) {

  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [dateLimite, setDateLimite] = useState("");

  function handleSubmit(e) {

    e.preventDefault();

    const nouvelleTache = {
      titre: titre,
      description: description,
      statut: "En attente",
      dateLimite: dateLimite
    };

    ajouterTache(nouvelleTache);

    setTitre("");
    setDescription("");
    setDateLimite("");
  }

  return (
    <div style={{ padding: "20px" }}>

      <h2>Ajouter une tâche</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Titre :</label>
          <input
            type="text"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Description :</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Date limite :</label>
          <input
            type="date"
            value={dateLimite}
            onChange={(e) => setDateLimite(e.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit">
          Ajouter
        </button>

      </form>

    </div>
  );
}

export default TaskForm;
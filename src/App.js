import { useState } from "react";

import Header from "./components/Header";
import TaskCard from "./components/TaskCard";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {

  const [tasks, setTasks] = useState([
    {
      titre: "Apprendre React",
      description: "Comprendre les composants",
      statut: "En cours",
      dateLimite: "2026-11-15"
    },
    {
      titre: "Apprendre Git",
      description: "Comprendre les branches",
      statut: "En attente",
      dateLimite: "2026-11-18"
    }
  ]);

  function ajouterTache(nouvelleTache) {

    setTasks([...tasks, nouvelleTache]);

  }

  return (
    <div>

      <Header />

      <TaskForm ajouterTache={ajouterTache} />

      <TaskList tasks={tasks} />

    </div>
  );
}

export default App;
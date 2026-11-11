
import { useState } from "react";
import TaskForm from "./TaskForm";

function App() {

    const [taches, setTaches] = useState([]);

    function ajouterTache(tache) {
        setTaches([...taches, tache]);
    }

    return (
        <div>
            <h1>Gestion des tâches</h1>

            <TaskForm ajouterTache={ajouterTache} />

            {taches.map((tache, index) => (
                <div key={index}>
                    <h3>{tache.titre}</h3>
                    <p>{tache.description}</p>
                    <p>{tache.dateLimite}</p>
                </div>
            ))}
        </div>
    );
}

export default App;

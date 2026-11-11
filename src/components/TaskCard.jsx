function TaskCard({ task }) {
  return (
    <div style={{
      border: "1px solid gray",
      padding: "15px",
      margin: "10px",
      borderRadius: "10px",
      width: "250px"
    }}>

      <h3>{task.titre}</h3>

      <p>{task.description}</p>

      <p>
        Statut : {task.statut}
      </p>

      <p>
        Date limite : {task.dateLimite}
      </p>

    </div>
  );
}

export default TaskCard;
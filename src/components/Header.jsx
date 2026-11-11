function Header() {
  return (
    <div style={{
      backgroundColor: "#2563eb",
      color: "white",
      padding: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>

      <h1>TaskManager</h1>

      <button style={{
        padding: "10px 20px",
        cursor: "pointer"
      }}>
        Connexion
      </button>

    </div>
  );
}

export default Header;
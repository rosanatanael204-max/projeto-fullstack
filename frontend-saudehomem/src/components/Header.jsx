import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ padding: "20px", backgroundColor: "#f5f5f5", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h1 style={{ margin: 0, color:"#2196F3" }}>Viva Bem Homem</h1>
      <nav style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <Link to="/home" style={{ textDecoration: "none", color: "#000" }}>Home</Link>
        <Link to="/exames-preventivos" style={{ textDecoration: "none", color: "#000" }}>Exames Preventivos</Link>
        <Link to="/exames-hormonais" style={{ textDecoration: "none", color: "#000" }}>Exames Hormonais</Link>
        <Link to="/exames-sexuais" style={{ textDecoration: "none", color: "#000" }}>Exames Sexuais</Link>
        <Link to="/dicas" style={{ textDecoration: "none", color: "#000" }}>Dicas</Link>

       

        <Link 
          to="/agendamento"
          style={{
            padding: "8px 12px",
            backgroundColor: "#FF9800",
            color: "#fff",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Agendamento
        </Link>
      </nav>
    </header>
  );
}

export default Header;
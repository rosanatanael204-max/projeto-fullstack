import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header
      style={{
        width: "100vw",
        padding: "10px 50px",
        backgroundColor: "#fdfdfdff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        boxSizing: "border-box",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          alt="Logo Viva Bem Homem"
          style={{
            height: "200px",
            width: "auto",
            objectFit: "contain",
            marginRight: "-10px"
          }}
        />
      </div>

      {/* Menu */}
      <nav style={{ display: "flex", gap: "50px", alignItems: "center" }}>
        <Link to="/home" style={{ textDecoration: "none", color: "#000" }}>Home</Link>
        <Link to="/exames-preventivos" style={{ textDecoration: "none", color: "#000" }}>Exames Preventivos</Link>
        <Link to="/exames-hormonais" style={{ textDecoration: "none", color: "#000" }}>Exames Hormonais</Link>
        <Link to="/exames-sexuais" style={{ textDecoration: "none", color: "#000" }}>Exames Sexuais</Link>
        <Link to="/dicas" style={{ textDecoration: "none", color: "#000" }}>Dicas</Link>
        <Link to="/contato" style={{ textDecoration: "none", color: "#000" }}>Contato</Link>

        <Link
          to="/agendamento"
          style={{
            padding: "8px 30px",
            backgroundColor: "#0e2893ff",
            color: "#fff",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Agendamento
        </Link>
      </nav>
    </header>
  );
}

export default Header; // <-- ESSENCIAL

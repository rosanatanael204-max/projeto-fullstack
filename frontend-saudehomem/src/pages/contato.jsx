function Contato() {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        padding: "50px 20px",
        boxSizing: "border-box",
        fontFamily: "'Segoe UI', sans-serif",
        background: "linear-gradient(to bottom, #f8fafc, #eef1f7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "850px",
          backgroundColor: "#fff",
          padding: "50px 40px",
          borderRadius: "20px",
          boxShadow: "0 12px 30px rgba(0, 0, 0, 0.08)",
          border: "1px solid #e7e9ef",
        }}
      >
        {/* TÍTULO */}
        <h1
          style={{
            textAlign: "center",
            marginBottom: "40px",
            color: "#1a2a5b",
            fontSize: "38px",
            fontWeight: "600",
            letterSpacing: "1px",
          }}
        >
          Fale Conosco
        </h1>

        {/* GRID DOS CARDS */}
        <div
          style={{
            display: "grid",
            gap: "25px",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          {/* CARD */}
          <div
            style={{
              backgroundColor: "#fafbff",
              padding: "25px",
              borderRadius: "16px",
              border: "1px solid #e1e4eb",
              boxShadow: "0 6px 14px rgba(0,0,0,0.05)",
              transition: "0.3s",
            }}
          >
            <h2
              style={{
                margin: "0 0 12px 0",
                color: "#2d3e77",
                fontSize: "22px",
                fontWeight: "600",
              }}
            >
              📍 Endereço
            </h2>
            <p style={{ fontSize: "17px", color: "#515b6d" }}>
              Travessa amapá, 659- siqueira - Aracaju
            </p>
          </div>

          {/* CARD */}
          <div
            style={{
              backgroundColor: "#fafbff",
              padding: "25px",
              borderRadius: "16px",
              border: "1px solid #e1e4eb",
              boxShadow: "0 6px 14px rgba(0,0,0,0.05)",
            }}
          >
            <h2
              style={{
                margin: "0 0 12px 0",
                color: "#2d3e77",
                fontSize: "22px",
                fontWeight: "600",
              }}
            >
              ✉️ E-mail
            </h2>
            <p style={{ fontSize: "17px", color: "#515b6d" }}>
              contato@vivabemhomem.com
            </p>
          </div>

          {/* CARD */}
          <div
            style={{
              backgroundColor: "#fafbff",
              padding: "25px",
              borderRadius: "16px",
              border: "1px solid #e1e4eb",
              boxShadow: "0 6px 14px rgba(0,0,0,0.05)",
            }}
          >
            <h2
              style={{
                margin: "0 0 12px 0",
                color: "#2d3e77",
                fontSize: "22px",
                fontWeight: "600",
              }}
            >
              💬 WhatsApp
            </h2>
            <a
              href="https://wa.me/5599999999999"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "18px",
                color: "#1a3dbf",
                fontWeight: "600",
                textDecoration: "none",
                borderBottom: "2px solid #1a3dbf",
                paddingBottom: "2px",
              }}
            >
              Chamar no WhatsApp
            </a>
          </div>

          {/* CARD */}
          <div
            style={{
              backgroundColor: "#fafbff",
              padding: "25px",
              borderRadius: "16px",
              border: "1px solid #e1e4eb",
              boxShadow: "0 6px 14px rgba(0,0,0,0.05)",
            }}
          >
            <h2
              style={{
                margin: "0 0 12px 0",
                color: "#2d3e77",
                fontSize: "22px",
                fontWeight: "600",
              }}
            >
              🕒 Horários
            </h2>
            <ul
              style={{
                paddingLeft: "20px",
                fontSize: "17px",
                color: "#515b6d",
                lineHeight: "1.6",
              }}
            >
              <li>Segunda a Sexta: 08h às 18h</li>
              <li>Sábado: 08h às 12h</li>
              <li>Domingos e feriados: fechado</li>
            </ul>
          </div>
        </div>

        {/* FOOTER SUAVE */}
        <p
          style={{
            marginTop: "40px",
            textAlign: "center",
            color: "#8a90a2",
            fontSize: "15px",
          }}
        >
          Clínica VivaBem Homem — Saúde e Bem-Estar Masculino
        </p>
      </div>
    </div>
  );
}

export default Contato;

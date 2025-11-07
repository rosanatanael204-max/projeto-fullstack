function ExamesSexuais() {
  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "30px",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        lineHeight: "1.8",
        color: "#333",
        fontFamily: "'Segoe UI', Roboto, sans-serif",
      }}
    >
      <h2
        style={{
          color: "#0a4d8c",
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "1.8rem",
        }}
      >
        Exames Sexuais
      </h2>

      <p style={{ fontSize: "1.1rem", textAlign: "justify" }}>
        Os <strong>exames sexuais</strong> ajudam a avaliar a saúde íntima masculina,
        identificar infecções sexualmente transmissíveis (ISTs) e prevenir complicações
        futuras. Eles são importantes tanto para quem é sexualmente ativo quanto para quem
        está iniciando a vida sexual.
      </p>

      <h3 style={{ color: "#1565c0", marginTop: "25px" }}>Principais exames:</h3>
      <ul style={{ paddingLeft: "20px" }}>
        <li>
          <strong>HIV:</strong> teste para detecção do vírus HIV, essencial para diagnóstico
          precoce.
        </li>
        <li>
          <strong>Sífilis:</strong> exame de sangue para identificar infecção e iniciar
          tratamento rapidamente.
        </li>
        <li>
          <strong>Hepatite B e C:</strong> exames de sangue para avaliar a presença dos
          vírus e prevenir complicações no fígado.
        </li>
        <li>
          <strong>Clamídia e Gonorreia:</strong> exames de urina ou secreção para detectar
          infecções comuns.
        </li>
      </ul>

      <h3 style={{ color: "#1565c0", marginTop: "25px" }}>Quando realizar:</h3>
      <ul style={{ paddingLeft: "20px" }}>
        <li>Antes de iniciar a vida sexual ativa.</li>
        <li>Periodicamente, especialmente se houver múltiplos parceiros.</li>
        <li>Quando houver sintomas como dor, secreção ou alterações na função sexual.</li>
      </ul>

      <p
        style={{
          fontWeight: "bold",
          color: "#0a4d8c",
          textAlign: "center",
          marginTop: "30px",
          fontSize: "1.1rem",
        }}
      >
        Cuidar da saúde sexual é fundamental para qualidade de vida e bem-estar.
      </p>
    </main>
  );
}

export default ExamesSexuais;
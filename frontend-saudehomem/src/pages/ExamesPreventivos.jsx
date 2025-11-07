function ExamesPreventivos() {
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
        Exames Preventivos Masculinos
      </h2>

      <p style={{ fontSize: "1.1rem", textAlign: "justify" }}>
        Cuidar da saúde é essencial em todas as idades. Os exames preventivos ajudam a
        identificar problemas antes que se tornem graves.
      </p>

      <h3 style={{ color: "#1565c0", marginTop: "25px" }}>Principais exames:</h3>
      <ul style={{ paddingLeft: "20px" }}>
        <li>
          <strong>Check-up geral:</strong> Avaliação de pressão, peso e exames de sangue
          (glicemia, colesterol, função renal e hepática).
        </li>
        <li>
          <strong>Saúde da próstata:</strong> PSA e toque retal, especialmente a partir dos
          50 anos ou antes se houver histórico familiar.
        </li>
        <li>
          <strong>Exames cardiovasculares:</strong> Eletrocardiograma e avaliação do coração a
          partir dos 40 anos.
        </li>
        <li>
          <strong>Câncer de cólon e reto:</strong> Colonoscopia a partir dos 45 anos.
        </li>
        <li>
          <strong>Saúde da pele:</strong> Avaliação dermatológica para prevenir câncer de pele.
        </li>
      </ul>

      <h3 style={{ color: "#1565c0", marginTop: "25px" }}>Dicas rápidas:</h3>
      <ul style={{ paddingLeft: "20px" }}>
        <li>Consulte o médico regularmente, mesmo sem sintomas.</li>
        <li>Mantenha alimentação saudável, pratique exercícios e durma bem.</li>
        <li>Informe histórico familiar para ajustar a frequência dos exames.</li>
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
        Prevenir é viver melhor: cuidar da saúde hoje evita problemas amanhã!
      </p>
    </main>
  );
}

export default ExamesPreventivos;
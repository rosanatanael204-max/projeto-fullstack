function ExamesHormonais() {
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
        Exames Hormonais
      </h2>

      <p style={{ fontSize: "1.1rem", textAlign: "justify" }}>
        Os <strong>exames hormonais</strong> avaliam os níveis de hormônios essenciais no
        organismo, como testosterona, TSH, T4 livre, cortisol e prolactina. Esses exames
        ajudam a identificar desequilíbrios que podem afetar o metabolismo, o sono, o humor,
        a fertilidade e o desempenho físico.
      </p>

      <h3 style={{ color: "#1565c0", marginTop: "25px" }}>
        Principais exames hormonais:
      </h3>
      <ul style={{ paddingLeft: "20px" }}>
        <li>
          <strong>Testosterona total e livre:</strong> avalia os níveis do hormônio masculino
          responsável pela força muscular, libido e energia.
        </li>
        <li>
          <strong>TSH e T4 livre:</strong> verificam o funcionamento da glândula tireoide,
          importante para o metabolismo.
        </li>
        <li>
          <strong>Prolactina:</strong> níveis elevados podem causar queda de libido e
          disfunção erétil.
        </li>
        <li>
          <strong>Cortisol:</strong> mede o hormônio do estresse e ajuda a avaliar a função
          das glândulas suprarrenais.
        </li>
      </ul>

      <h3 style={{ color: "#1565c0", marginTop: "25px" }}>Quando fazer:</h3>
      <ul style={{ paddingLeft: "20px" }}>
        <li>
          Quando houver sintomas como fadiga, perda de massa muscular, baixa libido, sono
          irregular ou alterações de humor.
        </li>
        <li>Durante check-ups anuais, especialmente após os 35 anos.</li>
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
        Equilíbrio hormonal é sinônimo de bem-estar e qualidade de vida.
      </p>
    </main>
  );
}

export default ExamesHormonais;
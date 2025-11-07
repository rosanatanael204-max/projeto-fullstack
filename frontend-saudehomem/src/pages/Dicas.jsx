function Dicas() {
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
        Dicas de Saúde
      </h2>

      <p style={{ fontSize: "1.1rem", textAlign: "justify" }}>
        Manter hábitos saudáveis é essencial para prevenir doenças e melhorar a qualidade de vida. 
        Aqui estão algumas orientações importantes para cuidar do corpo e da mente:
      </p>

      <h3 style={{ color: "#1565c0", marginTop: "25px" }}>Alimentação</h3>
      <ul style={{ paddingLeft: "20px", fontSize: "1.1rem" }}>
        <li>Prefira alimentos frescos, como frutas, legumes e verduras.</li>
        <li>Evite excesso de açúcar, sal e alimentos ultraprocessados.</li>
        <li>Mantenha uma boa hidratação, bebendo água regularmente.</li>
      </ul>

      <h3 style={{ color: "#1565c0", marginTop: "25px" }}>Atividade Física</h3>
      <ul style={{ paddingLeft: "20px", fontSize: "1.1rem" }}>
        <li>Pratique exercícios aeróbicos (caminhada, corrida, bicicleta) pelo menos 3x por semana.</li>
        <li>Inclua treino de força ou resistência para melhorar músculos e articulações.</li>
        <li>Mantenha hábitos ativos no dia a dia: subir escadas, caminhar, alongar-se.</li>
      </ul>

      <h3 style={{ color: "#1565c0", marginTop: "25px" }}>Sono e Descanso</h3>
      <ul style={{ paddingLeft: "20px", fontSize: "1.1rem" }}>
        <li>Dorme entre 7 a 9 horas por noite.</li>
        <li>Crie uma rotina de sono regular, indo para a cama e acordando sempre no mesmo horário.</li>
        <li>Evite eletrônicos e luz intensa antes de dormir.</li>
      </ul>

      <h3 style={{ color: "#1565c0", marginTop: "25px" }}>Saúde Mental</h3>
      <ul style={{ paddingLeft: "20px", fontSize: "1.1rem" }}>
        <li>Reserve momentos de lazer e hobbies para reduzir o estresse.</li>
        <li>Pratique meditação, respiração ou exercícios de relaxamento.</li>
        <li>Converse com amigos ou profissionais de saúde mental quando necessário.</li>
      </ul>

      <h3 style={{ color: "#1565c0", marginTop: "25px" }}>Check-ups e Prevenção</h3>
      <ul style={{ paddingLeft: "20px", fontSize: "1.1rem" }}>
        <li>Faça exames preventivos regularmente, de acordo com a sua idade e histórico familiar.</li>
        <li>Vacine-se conforme o calendário de imunização.</li>
        <li>Visite o médico mesmo sem sintomas para manter a saúde em dia.</li>
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
        Pequenas mudanças diárias fazem grande diferença na sua saúde e bem-estar!
      </p>
    </main>
  );
}

export default Dicas;
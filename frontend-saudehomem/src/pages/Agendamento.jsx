import React, { useState, useEffect } from "react";

function Agendamento() {
  const [form, setForm] = useState({
    nome: "",
    idade: "",
    email: "",
    telefone: "",
    cidade: "",
    exames: [],
    data: "",
  });

  const [agendamentos, setAgendamentos] = useState([]);
  const [mensagem, setMensagem] = useState("");

  const examesDisponiveis = [
    "Check-up geral",
    "Exames Preventivos",
    "Exames Hormonais",
    "Exames Sexuais",
  ];

  const corPadrao = "#0a4d8c";

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setForm((prev) => ({
      ...prev,
      exames: prev.exames.includes(value)
        ? prev.exames.filter((ex) => ex !== value)
        : [...prev.exames, value],
    }));
  };

  const fetchAgendamentos = async () => {
    try {
      const res = await fetch("http://localhost:8080/agendamentos");
      const data = await res.json();
      setAgendamentos(data);
    } catch (err) {
      console.error("Erro ao buscar agendamentos:", err);
    }
  };

  useEffect(() => {
    fetchAgendamentos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !form.nome ||
      !form.idade ||
      !form.email ||
      !form.telefone ||
      !form.cidade
    ) {
      setMensagem("⚠️ Preencha todos os campos!");
      return;
    }
    if (!form.exames.length || !form.data) {
      setMensagem("⚠️ Selecione ao menos um exame e uma data!");
      return;
    }

    try {
      const resPaciente = await fetch("http://localhost:8080/pacientes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: form.nome,
          idade: form.idade,
          email: form.email,
          telefone: form.telefone,
          cidade: form.cidade,
        }),
      });

      const paciente = await resPaciente.json();

      await fetch("http://localhost:8080/agendamentos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paciente_id: paciente.id,
          data_agendamento: form.data,
          exames: form.exames.map((exame) => ({
            nome_exame: exame,
            status: "Agendado",
          })),
        }),
      });

      setMensagem(`✅ Agendamento realizado com sucesso, ${form.nome}!`);
      setForm({
        nome: "",
        idade: "",
        email: "",
        telefone: "",
        cidade: "",
        exames: [],
        data: "",
      });
      fetchAgendamentos();
    } catch (err) {
      console.error(err);
      setMensagem("❌ Erro ao cadastrar agendamento!");
    }

    setTimeout(() => setMensagem(""), 4000);
  };

  const atualizarStatusExame = async (agendamentoId, nomeExame, status) => {
    try {
      await fetch("http://localhost:8080/exames/status", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ agendamento_id: agendamentoId, nome_exame: nomeExame, status }),
      });
      fetchAgendamentos();
    } catch (err) {
      console.error("Erro ao atualizar exame:", err);
    }
  };

  // Excluir exame individual
  const excluirExame = async (exameId) => {
    if (!window.confirm("Tem certeza que deseja excluir este exame?")) return;

    try {
      await fetch(`http://localhost:8080/exames/${exameId}`, {
        method: "DELETE",
      });

      setAgendamentos((prev) =>
        prev.map((ag) => ({
          ...ag,
          exames: ag.exames.filter((ex) => ex.id !== exameId),
        }))
      );
    } catch (err) {
      console.error("Erro ao excluir exame:", err);
    }
  };

  // Excluir histórico completo do agendamento
  const excluirAgendamento = async (agendamentoId) => {
    if (!window.confirm("Deseja realmente excluir todo o histórico deste agendamento?")) return;

    try {
      await fetch(`http://localhost:8080/agendamentos/${agendamentoId}`, {
        method: "DELETE",
      });

      setAgendamentos((prev) => prev.filter((ag) => ag.id !== agendamentoId));
    } catch (err) {
      console.error("Erro ao excluir agendamento:", err);
    }
  };

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: corPadrao,
          marginBottom: "25px",
        }}
      >
        Cadastro e Agendamento
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gap: "15px",
          marginBottom: "40px",
          background: "#fff",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ color: corPadrao }}>Seus Dados</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "15px",
          }}
        >
          {["nome", "idade", "email", "telefone", "cidade"].map((campo) => (
            <input
              key={campo}
              type={campo === "idade" ? "number" : "text"}
              name={campo}
              placeholder={campo.charAt(0).toUpperCase() + campo.slice(1)}
              value={form[campo]}
              onChange={handleChange}
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
          ))}
        </div>

        <h3 style={{ color: corPadrao }}>Selecione os exames</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {examesDisponiveis.map((exame) => (
            <label
              key={exame}
              style={{
                padding: "10px 15px",
                background: form.exames.includes(exame)
                  ? corPadrao
                  : "#e0e0e0",
                color: form.exames.includes(exame) ? "#fff" : "#333",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              <input
                type="checkbox"
                value={exame}
                checked={form.exames.includes(exame)}
                onChange={handleCheckboxChange}
                style={{ display: "none" }}
              />
              {exame}
            </label>
          ))}
        </div>

        <input
          type="date"
          name="data"
          value={form.data}
          onChange={handleChange}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <button
          type="submit"
          style={{
            background: corPadrao,
            color: "#fff",
            padding: "12px 25px",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Cadastrar e Agendar
        </button>
      </form>

      {mensagem && (
        <p
          style={{
            marginTop: "20px",
            padding: "15px",
            background: "#d0f0ff",
            borderRadius: "8px",
            color: corPadrao,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {mensagem}
        </p>
      )}

      <section>
        <h3 style={{ color: corPadrao, marginBottom: "15px" }}>
          Exames Agendados / Em andamento / Realizados
        </h3>

        {agendamentos.length === 0 ? (
          <p style={{ textAlign: "center" }}>Nenhum exame cadastrado.</p>
        ) : (
          agendamentos.map((a) => (
            <div
              key={a.id}
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "15px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                marginBottom: "20px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>
                  <strong>{a.nome}</strong> ({a.idade} anos) — {a.email},{" "}
                  {a.telefone}, {a.cidade}
                </p>
                <button
                  onClick={() => excluirAgendamento(a.id)}
                  style={{
                    cursor: "pointer",
                    background: "#d9534f",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    padding: "4px 10px",
                    fontWeight: "bold",
                  }}
                >
                  🗑 Excluir Histórico
                </button>
              </div>

              <p>
                <strong>Data:</strong> {a.data_agendamento}
              </p>

              {a.exames.map((ex) => (
                <div
                  key={ex.id}
                  style={{
                    background:
                      ex.status === "Realizado"
                        ? "#c8f7c5"
                        : ex.status === "Em andamento"
                        ? "#fff6b3"
                        : "#d0e4ff",
                    padding: "6px 10px",
                    borderRadius: "8px",
                    marginTop: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <strong>{ex.nome_exame}</strong> — {ex.status}
                  </div>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <button
                      onClick={() =>
                        atualizarStatusExame(
                          a.id,
                          ex.nome_exame,
                          ex.status === "Realizado"
                            ? "Agendado"
                            : ex.status === "Agendado"
                            ? "Em andamento"
                            : "Realizado"
                        )
                      }
                      style={{
                        cursor: "pointer",
                        background: "#34a853",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        padding: "2px 6px",
                        fontSize: "0.8rem",
                      }}
                    >
                      ✔ Atualizar
                    </button>
                    <button
                      onClick={() => excluirExame(ex.id)}
                      style={{
                        cursor: "pointer",
                        background: "#d9534f",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        padding: "2px 6px",
                        fontSize: "0.8rem",
                      }}
                    >
                      🗑 Excluir
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))
        )}
      </section>
    </main>
  );
}

export default Agendamento;

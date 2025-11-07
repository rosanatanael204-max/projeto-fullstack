import { useState } from "react";

function Cadastro() {
  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    tipo: "TEXTO",
    itens: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleConfirmar = (e) => {
    e.preventDefault();
    alert(
      `Dados salvos:\n\nNome: ${form.nome}\nDescrição: ${form.descricao}\nTipo: ${form.tipo}\nItens: ${form.itens}`
    );
  };

  const handleCancelar = () => {
    setForm({
      nome: "",
      descricao: "",
      tipo: "TEXTO",
      itens: "",
    });
  };

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f7f9fc",
      }}
    >
      <form
        onSubmit={handleConfirmar}
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <h2 style={{ color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Nova Propriedade
        </h2>

        <label style={{ display: "block", marginBottom: "10px" }}>
          Nome:
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              marginTop: "5px",
            }}
          />
        </label>

        <label style={{ display: "block", marginBottom: "10px" }}>
          Descrição:
          <input
            type="text"
            name="descricao"
            value={form.descricao}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              marginTop: "5px",
            }}
          />
        </label>

        <label style={{ display: "block", marginBottom: "10px" }}>
          Tipo:
          <select
            name="tipo"
            value={form.tipo}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              marginTop: "5px",
            }}
          >
            <option value="TEXTO">TEXTO</option>
            <option value="NÚMERO">NÚMERO</option>
            <option value="DATA">DATA</option>
          </select>
        </label>

        <label style={{ display: "block", marginBottom: "10px" }}>
          Itens (separados por ";"):
          <input
            type="text"
            name="itens"
            value={form.itens}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              marginTop: "5px",
            }}
          />
        </label>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
          <button
            type="button"
            onClick={handleCancelar}
            style={{
              background: "#ccc",
              color: "#333",
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Cancelar
          </button>

          <button
            type="submit"
            style={{
              background: "#f97316",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Confirmar
          </button>
        </div>
      </form>
    </section>
  );
}

export default Cadastro;
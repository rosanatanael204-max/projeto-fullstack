import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

const app = express();
app.use(express.json());
app.use(cors());

let db;

// 🔗 Conectar ao banco SQLite e criar tabelas
(async () => {
  db = await open({
    filename: "./banco.db",
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS pacientes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      idade INTEGER,
      email TEXT,
      telefone TEXT,
      cidade TEXT
    );
  `);

  await db.exec(`
    CREATE TABLE IF NOT EXISTS agendamentos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      paciente_id INTEGER,
      data_agendamento TEXT,
      FOREIGN KEY(paciente_id) REFERENCES pacientes(id)
    );
  `);

  await db.exec(`
    CREATE TABLE IF NOT EXISTS exames (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      agendamento_id INTEGER,
      nome_exame TEXT,
      status TEXT DEFAULT 'Agendado',
      FOREIGN KEY(agendamento_id) REFERENCES agendamentos(id)
    );
  `);

  console.log("📦 Banco de dados pronto!");
})();

// ➕ Cadastrar paciente
app.post("/pacientes", async (req, res) => {
  const { nome, idade, email, telefone, cidade } = req.body;
  const result = await db.run(
    "INSERT INTO pacientes (nome, idade, email, telefone, cidade) VALUES (?, ?, ?, ?, ?)",
    [nome, idade, email, telefone, cidade]
  );
  res.json({ id: result.lastID });
});

// ➕ Cadastrar agendamento e exames
app.post("/agendamentos", async (req, res) => {
  const { paciente_id, data_agendamento, exames } = req.body;
  const agRes = await db.run(
    "INSERT INTO agendamentos (paciente_id, data_agendamento) VALUES (?, ?)",
    [paciente_id, data_agendamento]
  );
  const agendamentoId = agRes.lastID;

  for (const ex of exames) {
    await db.run(
      "INSERT INTO exames (agendamento_id, nome_exame, status) VALUES (?, ?, ?)",
      [agendamentoId, ex.nome_exame, ex.status || "Agendado"]
    );
  }

  res.json({ sucesso: true });
});

// 📋 Listar agendamentos e exames
app.get("/agendamentos", async (req, res) => {
  const agendamentos = await db.all(`
    SELECT a.id, a.data_agendamento, p.nome, p.idade, p.email, p.telefone, p.cidade
    FROM agendamentos a
    JOIN pacientes p ON a.paciente_id = p.id
  `);

  for (const ag of agendamentos) {
    ag.exames = await db.all(
      "SELECT * FROM exames WHERE agendamento_id = ?",
      [ag.id]
    );
  }

  res.json(agendamentos);
});

// 🔁 Atualizar status de exame
app.put("/exames/status", async (req, res) => {
  const { agendamento_id, nome_exame, status } = req.body;
  await db.run(
    "UPDATE exames SET status = ? WHERE agendamento_id = ? AND nome_exame = ?",
    [status, agendamento_id, nome_exame]
  );
  res.json({ sucesso: true });
});

// ❌ Excluir exame individual
app.delete("/exames/:id", async (req, res) => {
  const { id } = req.params;
  await db.run("DELETE FROM exames WHERE id = ?", [id]);
  res.json({ sucesso: true });
});

// ❌ Excluir agendamento completo (histórico)
app.delete("/agendamentos/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // 1️⃣ Deleta todos os exames do agendamento
    await db.run("DELETE FROM exames WHERE agendamento_id = ?", [id]);

    // 2️⃣ Deleta o agendamento
    await db.run("DELETE FROM agendamentos WHERE id = ?", [id]);

    res.json({ sucesso: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: "Não foi possível excluir o agendamento" });
  }
});

// ▶️ Iniciar servidor
app.listen(8080, () => console.log("🚀 Servidor rodando em http://localhost:8080"));

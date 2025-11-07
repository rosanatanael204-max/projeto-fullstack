import { useState } from "react";

function CardExame({ nome, idade, descricao, local, observacao }) {
  const [abrir, setAbrir] = useState(false);

  return (
    <div className="card-exame">
      <h3>{nome}</h3>
      <p>Idade recomendada: {idade}</p>
      <button onClick={() => setAbrir(true)}>Mais info</button>

      {abrir && (
        <div className="modal">
          <div className="modal-conteudo">
            <h3>{nome}</h3>
            <p>{descricao}</p>
            <p><strong>Local para realizar:</strong> {local}</p>
            {observacao && <p><strong>Observação:</strong> {observacao}</p>}
            <button onClick={() => setAbrir(false)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardExame;
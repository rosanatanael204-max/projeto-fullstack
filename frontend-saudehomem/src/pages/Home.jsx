import CardExame from "../components/CardExame";
import VisualComponents from "../pages/VisualComponents"

function Home() {
  return (
    <main>
      <section>
        <VisualComponents></VisualComponents>
      </section>
      <section id="home">
        <h2>Cuidados básicos</h2>
        <p>
          Alimentação saudável, exercícios físicos, sono adequado e acompanhamento médico regular.
        </p>
      </section>

      <section id="exames-preventivos">
        <h2>Exames Preventivos</h2>
        <CardExame
          nome="Exame de próstata"
          idade="50+"
          descricao="Recomendado anualmente para homens acima de 50 anos."
          local="Unidade de Saúde Central"
          observacao="Agendar consulta com urologista"
        />
        <CardExame
          nome="Check-up geral"
          idade="40+"
          descricao="Exames de sangue, pressão arterial e avaliação cardíaca."
          local="Clínica Preventiva"
          observacao="Levar resultados anteriores"
        />
        <CardExame
          nome="Colesterol e glicemia"
          idade="35+"
          descricao="Monitoramento de colesterol, triglicerídeos e glicemia para prevenir doenças."
          local="Laboratório XYZ"
          observacao="Jejum de 12h antes do exame"
        />
      </section>

      <section id="exames-hormonais">
        <h2>Exames Hormonais</h2>
        <CardExame
          nome="Exame de testosterona"
          idade="30+"
          descricao="Avaliação dos níveis hormonais."
          local="Clínica Endócrina"
          observacao=""
        />
      </section>

      <section id="exames-sexuais">
        <h2>Exames de Saúde Sexual</h2>
        <CardExame
          nome="Exame de HIV e DSTs"
          idade="18+"
          descricao="Testes para HIV, sífilis, hepatite B e C, gonorreia e clamídia."
          local="Unidade de Saúde Sexual"
          observacao="Resultado disponível em 48h"
        />
      </section>

      <section id="dicas">
        <h2>Dicas rápidas</h2>
        <ul>
          <li>Beba bastante água</li>
          <li>Evite excesso de álcool</li>
          <li>Pratique atividade física regularmente</li>
          <li>Não fume</li>
          <li>Faça acompanhamento médico anual</li>
        </ul>
      </section>
    </main>
  );
}

export default Home;

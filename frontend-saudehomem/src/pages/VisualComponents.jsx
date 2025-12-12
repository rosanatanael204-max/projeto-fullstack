import { useState, useEffect } from "react";
import "./VisualComponents.css";

function VisualComponents() {
  const slides = [
    {
      frase: "Cuide da sua saúde todos os dias!",
      imagem: "https://blog.amorsaude.com.br/wp-content/uploads/2019/08/saude-do-homem-1024x576.jpg",
    },
    {
      frase: "Alimente-se bem e viva melhor!",
      imagem: "https://novaclinicaluz.com.br/images/08-Agosto23/novembro23-04.jpg"
    },
    {
      frase: "Faça exames preventivos regularmente!",
      imagem: "https://checkuplab.com.br/wp-content/uploads/2022/11/imagem-2-post-blog-exames-essenciais-para-saude-do-homem-Check-Up-Lab-1536x864.jpg",
    },
    {
      frase: "Sua saúde é seu maior patrimônio!",
      imagem: "https://3.bp.blogspot.com/-w-l-e0MTN_4/VyY1J4AT-wI/AAAAAAABknc/Om1mhDKLy5c8unPnGoi1xFdZ5IkOedpSQCKgB/s1600/Fam%25C3%25ADlia22.jpg",
    },
    {
      frase:"Se Cuidar é coisa de Homem!",
      imagem:"https://labvital.com.br/wp-content/uploads/2023/05/saude-masculina-1170x740.png"
    },
  ];

  const [indexAtual, setIndexAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndexAtual((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(intervalo);
  }, [slides.length]);

  return (
    <section
      className="visual-banner premium"
      style={{ backgroundImage: `url(${slides[indexAtual].imagem})` }}
    >
      <div className="overlay-premium">
        <h1 className="frase-premium">{slides[indexAtual].frase}</h1>
      </div>
    </section>
  );
}

export default VisualComponents;

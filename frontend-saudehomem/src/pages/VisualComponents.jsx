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
      imagem: "https://img.freepik.com/fotos-premium/feliz-e-amoroso-pai-de-familia-e-seu-filho-brincando-e-abracando-ao-ar-livre_812426-84856.jpg?w=2000",
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
    }, 4000); // troca a cada 4 segundos
    return () => clearInterval(intervalo);
  }, [slides.length]);

  return (
    <section
      className="visual-banner"
      style={{ backgroundImage: `url(${slides[indexAtual].imagem})` }}
    >
      <div className="overlay">
        <h1 className="frase">{slides[indexAtual].frase}</h1>
      </div>
    </section>
  );
}

export default VisualComponents;
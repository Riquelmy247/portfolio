import styles from '../styles/About.module.css'

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.image}>
-            <img src={placeholder} alt="Desenvolvedor" />
+          </div>
          <div className={styles.text}>
            <h2>Sobre Mim</h2>
            <p>
              Sou um desenvolvedor web apaixonado por criar soluções tecnológicas inovadoras.
              Com experiência em desenvolvimento back-end, estou sempre focado em entregar
              projetos de alta qualidade, desempenho e eficiência.
            </p>
            <p>
              O que mais me inspira é a constante evolução tecnológica. Adoro desenvolver
              novos projetos e explorar diferentes abordagens e ferramentas. Atualmente,
              sou Analista de Sistemas IV na Kyros Tecnologia e curso o 5º período de
              Sistemas de Informação na UNIUBE Uberlândia, com o objetivo de me tornar
              um desenvolvedor full stack.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

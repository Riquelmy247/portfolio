import styles from '../styles/Hero.module.css'

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Eu crio sites profissionais que geram resultados para o seu negócio.</h1>
          <p>Transforme sua presença online e conquiste mais clientes.</p>
          <button className={styles.btn} onClick={scrollToContact}>Solicitar orçamento</button>
        </div>
      </div>
    </section>
  )
}

export default Hero

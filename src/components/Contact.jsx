import styles from '../styles/Contact.module.css'

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2>Contato</h2>
        <div className={styles.content}>
          <div className={styles.info}>
            <h3>Entre em contato</h3>
            <p>Estou disponível para discutir seu projeto e responder suas dúvidas. Vamos conversar sobre como posso ajudar a transformar suas ideias em realidade digital.</p>
            <div className={styles.socialLinks}>
              <a href="https://wa.me/5534992308318?text=Olá%20Riquelmy!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20como%20posso%20te%20ajudar%20com%20seu%20projeto%20digital." target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <i className="fab fa-whatsapp"></i>
                <span>WhatsApp</span>
              </a>
              <a href="https://www.linkedin.com/in/riquelmy-martins-4a517a1b9/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <i className="fab fa-linkedin-in"></i>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/Riquelmy247" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <i className="fab fa-github"></i>
                <span>GitHub</span>
              </a>
              <a href="https://www.instagram.com/riquelmy_2612/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
              <a href="mailto:riquelmy.martins@example.com" className={styles.socialLink}>
                <i className="fas fa-envelope"></i>
                <span>E-mail</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

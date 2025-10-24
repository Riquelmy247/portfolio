import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>&copy; 2025 Riquelmy Martins - Todos os direitos reservados</p>
          <ul className={styles.social}>
            <li><a href="https://www.linkedin.com/in/riquelmy-martins-4a517a1b9/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li>
            <li><a href="https://github.com/Riquelmy247" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a></li>
            <li><a href="https://www.instagram.com/riquelmy_2612/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
            <li><a href="https://www.facebook.com/riquelmy.martins.3/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

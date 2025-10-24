import { Link } from 'react-router-dom'
import { useState } from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">Riquelmy Martins</Link>
        </div>
        <div className={styles.menuToggle} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)}>Serviços</Link></li>
          <li><Link to="/portfolio" onClick={() => setIsOpen(false)}>Projetos Criados</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

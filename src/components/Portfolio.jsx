import styles from '../styles/Portfolio.module.css'

const Portfolio = () => {
  const projects = [
    {
      name: 'Java - Restauro Rápido',
      description: 'Aplicativo Celular - Restauro Rápido',
      link: 'https://github.com/Riquelmy247/restauro-rapido',
      language: 'Java'
    },
    {
      name: 'Java - CRUD Universidade',
      description: 'CRUD Universidade',
      link: 'https://github.com/Riquelmy247/University',
      language: 'Java'
    },
    {
      name: 'Java - Projetinhos Simples',
      description: 'Projetinhos Simples',
      link: 'https://github.com/Riquelmy247/java-dev/blob/main/src/',
      language: 'Java'
    },
    {
      name: 'Python - Projetinhos Simples',
      description: 'Projetinhos Simples',
      link: 'https://github.com/Riquelmy247/python-dev/tree/main/',
      language: 'Python'
    },
    {
      name: 'GitHub - Readme',
      description: 'Readme',
      link: 'https://github.com/Riquelmy247/Riquelmy247/blob/main/README.md?plain=1',
      language: 'GitHub'
    },
    {
      name: 'C# - CRUD',
      description: 'CRUD',
      link: 'https://github.com/Riquelmy247/Cadastro_Dotnet',
      language: 'C#'
    }
  ]

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <h2>Projetos Criados</h2>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectContent}>
                <h3 className={styles.projectLanguage}>{project.language}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <a href={project.link} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                  Ver Projeto
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

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

  const experiences = [
    'Java',
    'Shell',
    'Banco de Dados',
    'Python',
    'C, C++, C#',
    'PHP',
    'HTML & CSS',
    'JavaScript',
    'React',
    'Node.js'
  ]

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.aboutSection}>
          <div className={styles.image}>
            <img src="/assets/placeholder.jpg" alt="Desenvolvedor" />
          </div>
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
        <h2>Experiências</h2>
        <div className={styles.experienceList}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.experience}>
              <h3>{exp}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

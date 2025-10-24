import styles from '../styles/Services.module.css'

const Services = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Criação de Sites Institucionais',
      description: 'Sites modernos e responsivos para apresentar sua empresa.',
      whatsappLink: 'https://wa.me/5534992308318?text=Olá%20Riquelmy!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20a%20criação%20de%20um%20site%20institucional%20para%20minha%20empresa.%20Podemos%20discutir%20os%20detalhes?'
    },
    {
      icon: '📈',
      title: 'Landing Pages de Alta Conversão',
      description: 'Páginas focadas em converter visitantes em clientes.',
      whatsappLink: 'https://wa.me/5534992308318?text=Olá%20Riquelmy!%20Estou%20interessado%20em%20uma%20landing%20page%20de%20alta%20conversão%20para%20minha%20campanha.%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços.'
    },
    {
      icon: '🔧',
      title: 'Manutenção e Otimização',
      description: 'Atualizações e melhorias para manter seu site sempre atual.',
      whatsappLink: 'https://wa.me/5534992308318?text=Olá%20Riquelmy!%20Preciso%20de%20manutenção%20e%20otimização%20para%20meu%20site.%20Vi%20que%20você%20oferece%20esse%20serviço%20e%20gostaria%20de%20conversar%20sobre%20as%20possibilidades.'
    },
    {
      icon: '🔍',
      title: 'SEO Básico',
      description: 'Otimização para motores de busca para mais visibilidade.',
      whatsappLink: 'https://wa.me/5534992308318?text=Olá%20Riquelmy!%20Gostaria%20de%20melhorar%20o%20posicionamento%20do%20meu%20site%20nos%20motores%20de%20busca.%20Podemos%20discutir%20sobre%20SEO%20básico?'
    },
    {
      icon: '📝',
      title: 'Blogs / Portais de conteúdo',
      description: 'Plataformas para compartilhamento de conteúdo e conhecimento.',
      whatsappLink: 'https://wa.me/5534992308318?text=Olá%20Riquelmy!%20Estou%20planejando%20criar%20um%20blog%20ou%20portal%20de%20conteúdo%20e%20gostaria%20de%20conversar%20sobre%20suas%20experiências%20nessa%20área.'
    },
    {
      icon: '🛒',
      title: 'Lojas virtuais',
      description: 'E-commerce completo para vendas online.',
      whatsappLink: 'https://wa.me/5534992308318?text=Olá%20Riquelmy!%20Preciso%20de%20uma%20loja%20virtual%20para%20meu%20negócio.%20Vi%20seus%20trabalhos%20e%20gostaria%20de%20discutir%20um%20projeto%20de%20e-commerce.'
    },
    {
      icon: '🎉',
      title: 'Sites de eventos',
      description: 'Plataformas para divulgação e gestão de eventos.',
      whatsappLink: 'https://wa.me/5534992308318?text=Olá%20Riquelmy!%20Estou%20organizando%20um%20evento%20e%20preciso%20de%20um%20site%20para%20divulgação.%20Podemos%20conversar%20sobre%20essa%20possibilidade?'
    },
    {
      icon: '💼',
      title: 'Sistemas web',
      description: 'Aplicações web personalizadas para diversos setores.',
      whatsappLink: 'https://wa.me/5534992308318?text=Olá%20Riquelmy!%20Preciso%20de%20um%20sistema%20web%20personalizado%20para%20meu%20negócio.%20Gostaria%20de%20entender%20melhor%20como%20você%20pode%20me%20ajudar.'
    },
    {
      icon: '👤',
      title: 'Portfólios ou páginas pessoais',
      description: 'Sites pessoais para profissionais e artistas.',
      whatsappLink: 'https://wa.me/5534992308318?text=Olá%20Riquelmy!%20Gostaria%20de%20criar%20um%20portfólio%20pessoal%20profissional.%20Vi%20seu%20trabalho%20e%20acredito%20que%20você%20pode%20me%20ajudar%20nisso.'
    },
    {
      icon: '🚀',
      title: 'Landing pages (páginas únicas)',
      description: 'Páginas únicas otimizadas para campanhas específicas.',
      whatsappLink: 'https://wa.me/5534992308318?text=Olá%20Riquelmy!%20Preciso%20de%20uma%20landing%20page%20para%20uma%20campanha%20específica.%20Podemos%20discutir%20as%20opções%20disponíveis?'
    },
    {
      icon: '⚙️',
      title: 'Sistemas de Gerenciamento',
      description: 'Softwares para gestão empresarial e processos.',
      whatsappLink: 'https://wa.me/5534992308318?text=Olá%20Riquelmy!%20Estou%20procurando%20um%20sistema%20de%20gerenciamento%20para%20otimizar%20os%20processos%20da%20minha%20empresa.%20Gostaria%20de%20conversar%20sobre%20isso.'
    },
    {
      icon: '🍽️',
      title: 'Cardápios Digitais',
      description: 'Cardápios interativos para restaurantes e bares.',
      whatsappLink: 'https://wa.me/5534992308318?text=Olá%20Riquelmy!%20Tenho%20um%20restaurante%20e%20gostaria%20de%20um%20cardápio%20digital%20interativo.%20Podemos%20discutir%20essa%20ideia?'
    }
  ]

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <h2>Serviços</h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={service.whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
                Solicitar Orçamento
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

import { motion } from 'framer-motion'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { socials } from '../data/socials'

const iconMap = {
  FaInstagram,
  FaLinkedin,
  FaGithub,
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0a0a0f] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <p className="text-gray-500 text-sm">
            © {year} Desenvolvido por Riquelmy Martins.
          </p>
          <div className="flex items-center gap-4">
            {socials.map((social) => {
              const Icon = iconMap[social.icon]
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                >
                  {Icon && <Icon size={22} />}
                </a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

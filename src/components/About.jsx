import { motion } from 'framer-motion'
import { profile } from '../data/profile'

export default function About() {
  const aboutText = profile.aboutText

  return (
    <section id="sobre" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-4"
        >
          Sobre Mim
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl"
        >
          <p className="text-gray-400 whitespace-pre-line leading-relaxed">
            {aboutText}
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-gray-400">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Sistemas web e APIs
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Empresas e negócios locais
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Projetos para igrejas
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Freelance sob medida
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

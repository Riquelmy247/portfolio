import { motion } from 'framer-motion'
import * as Si from 'react-icons/si'
import * as Di from 'react-icons/di'
import { technologies } from '../data/technologies'

const iconMap = {
  DiJava: Di.DiJava,
  DiMsqlServer: Di.DiMsqlServer,
  DiDotnet: Di.DiDotnet,
  SiPython: Si.SiPython,
  SiC: Si.SiC,
  SiCplusplus: Si.SiCplusplus,
  SiDotnet: Si.SiDotnet,
  SiReact: Si.SiReact,
  SiAngular: Si.SiAngular,
  SiPostgresql: Si.SiPostgresql,
  SiMysql: Si.SiMysql,
  SiOracle: Si.SiOracle,
}

export default function Technologies() {
  return (
    <section id="tecnologias" className="py-24 bg-[#12121a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-2"
        >
          Tecnologias
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 mb-12"
        >
          Linguagens e ferramentas com as quais trabalho no dia a dia.
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, i) => {
            const Icon = iconMap[tech.icon]
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.07] transition-all"
              >
                {Icon && (
                  <Icon
                    size={32}
                    style={{ color: tech.color }}
                    className="flex-shrink-0"
                  />
                )}
                <span className="text-sm font-medium text-white">{tech.name}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import {
  FaGlobe,
  FaThLarge,
  FaCalendarAlt,
  FaChurch,
  FaRocket,
  FaCode,
} from 'react-icons/fa'
import WhatsAppButton from './WhatsAppButton'
import { services as servicesData } from '../data/services'

const iconMap = {
  Globe: FaGlobe,
  Layout: FaThLarge,
  Calendar: FaCalendarAlt,
  Church: FaChurch,
  Rocket: FaRocket,
  Code: FaCode,
}

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-[#12121a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-2"
        >
          Serviços
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 mb-12"
        >
          Soluções para empresas e clientes que desejam presença digital e sistemas sob medida.
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-xl bg-white/5 border border-white/5 p-6 flex flex-col hover:border-blue-500/30 hover:bg-white/[0.07] transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                  {Icon && <Icon size={24} />}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-1">
                  {service.description}
                </p>
                <WhatsAppButton
                  text={`Olá! Tenho interesse no serviço: ${service.title}.`}
                  className="w-full justify-center"
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

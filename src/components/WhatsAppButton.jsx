import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { profile } from '../data/profile'

const whatsappUrl = (text) => {
  const base = `https://wa.me/${profile.whatsappNumber}`
  if (text) return `${base}?text=${encodeURIComponent(text)}`
  return base
}

export default function WhatsAppButton({ floating = false, text, className = '' }) {
  const url = whatsappUrl(text)

  if (floating) {
    return (
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25d366] text-white shadow-lg hover:bg-[#20bd5a] transition-colors"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp size={28} />
      </motion.a>
    )
  }

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#25d366] text-white font-medium hover:bg-[#20bd5a] transition-colors ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <FaWhatsapp size={20} />
      {text || 'Falar no WhatsApp'}
    </motion.a>
  )
}

export { whatsappUrl }

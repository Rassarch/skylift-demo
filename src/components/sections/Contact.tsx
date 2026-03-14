'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { MapPin, Phone, Clock, InstagramLogo, TiktokLogo, WhatsappLogo, PaperPlaneTilt } from '@phosphor-icons/react'

const schema = z.object({
  name: z.string().min(2, 'Nama minimal 2 karakter'),
  phone: z.string().min(9, 'Nomor HP tidak valid'),
  plan: z.string().min(1, 'Pilih paket membership'),
  message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const [sent, setSent] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    const msg = encodeURIComponent(
      `Halo Skylift Fitness!\n\nNama: ${data.name}\nHP: ${data.phone}\nPaket: ${data.plan}${data.message ? `\nPesan: ${data.message}` : ''}\n\nSaya ingin mendaftar membership. Mohon infonya!`
    )
    window.open(`https://wa.me/6282160966686?text=${msg}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  const inputClass = `w-full bg-sk-bg3 border border-sk-border text-sk-white text-sm px-4 py-3 
    placeholder-sk-concrete/50 focus:outline-none focus:border-sk-orange transition-colors duration-200`

  return (
    <section id="kontak" ref={ref} className="py-24 md:py-32 px-6 md:px-16 relative">

      {/* Header */}
      <div className="mb-16">
        <motion.div
          className="flex items-center gap-2 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
        >
          <div className="w-6 h-[1px] bg-sk-orange" />
          <span className="text-[10px] text-sk-orange tracking-[0.3em] uppercase">Kontak & Lokasi</span>
        </motion.div>
        <div className="overflow-hidden">
          <motion.h2
            className="font-display text-[clamp(44px,7vw,80px)] leading-none text-sk-white"
            initial={{ y: '100%' }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            MULAI HARI INI.
          </motion.h2>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            className="font-display text-[clamp(44px,7vw,80px)] leading-none text-sk-orange"
            initial={{ y: '100%' }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
          >
            BUKAN BESOK.
          </motion.h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-sk-border">
        {/* Form */}
        <motion.div
          className="bg-sk-bg2 p-8 md:p-12"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <h3 className="font-display text-2xl text-sk-white mb-8 tracking-wide">DAFTAR MEMBER</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div>
              <input
                {...register('name')}
                placeholder="Nama lengkap"
                className={inputClass}
              />
              {errors.name && <p className="text-red-400 text-[11px] mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <input
                {...register('phone')}
                placeholder="Nomor HP / WhatsApp"
                className={inputClass}
              />
              {errors.phone && <p className="text-red-400 text-[11px] mt-1">{errors.phone.message}</p>}
            </div>

            <div>
              <select {...register('plan')} className={`${inputClass} cursor-pointer`}>
                <option value="" className="bg-sk-bg">-- Pilih paket membership --</option>
                <option value="Harian" className="bg-sk-bg">Harian — Rp 40.000</option>
                <option value="Harian + Sauna" className="bg-sk-bg">Harian + Sauna — Rp 50.000</option>
                <option value="Bulanan" className="bg-sk-bg">Bulanan — Rp 250.000</option>
                <option value="3/6 Bulan" className="bg-sk-bg">3 / 6 Bulan (Diskon 10%)</option>
              </select>
              {errors.plan && <p className="text-red-400 text-[11px] mt-1">{errors.plan.message}</p>}
            </div>

            <div>
              <textarea
                {...register('message')}
                placeholder="Pesan tambahan (opsional)"
                rows={3}
                className={`${inputClass} resize-none`}
              />
            </div>

            <motion.button
              type="submit"
              className="flex items-center justify-center gap-2 bg-sk-orange hover:bg-sk-orangeDim text-white py-4 text-[11px] tracking-[0.2em] uppercase font-medium transition-colors mt-2"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              data-cursor
            >
              {sent ? (
                'Dikirim! Cek WhatsApp kamu ✓'
              ) : (
                <>
                  <WhatsappLogo size={14} weight="fill" />
                  Kirim via WhatsApp
                  <PaperPlaneTilt size={14} />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Info */}
        <motion.div
          className="bg-sk-bg2 p-8 md:p-12 flex flex-col gap-8"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <div>
            <h3 className="font-display text-2xl text-sk-white mb-6 tracking-wide">INFO LOKASI</h3>

            <div className="flex flex-col gap-5">
              {[
                {
                  icon: <MapPin size={16} weight="fill" className="text-sk-orange mt-0.5" />,
                  label: 'Alamat',
                  value: 'Jl. Brigjend Sutiyoso, Metro Pusat\nKota Metro, Lampung 34124',
                },
                {
                  icon: <Phone size={16} weight="fill" className="text-sk-orange" />,
                  label: 'Telepon',
                  value: '0821-6096-6686',
                },
                {
                  icon: <Clock size={16} weight="fill" className="text-sk-orange" />,
                  label: 'Jam Operasional',
                  value: 'Senin–Minggu\n07.00 – 22.30 WIB',
                },
              ].map(item => (
                <div key={item.label} className="flex gap-3">
                  {item.icon}
                  <div>
                    <div className="text-[10px] text-sk-concrete tracking-widest uppercase mb-1">{item.label}</div>
                    <div className="text-sm text-sk-light font-light whitespace-pre-line">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-sk-border" />

          {/* Social */}
          <div>
            <div className="text-[10px] text-sk-concrete tracking-widest uppercase mb-4">Ikuti Kami</div>
            <div className="flex gap-3">
              {[
                { icon: <InstagramLogo size={18} />, label: 'Instagram', href: 'https://instagram.com' },
                { icon: <TiktokLogo size={18} />, label: 'TikTok', href: 'https://tiktok.com' },
                { icon: <WhatsappLogo size={18} weight="fill" />, label: 'WhatsApp', href: 'https://wa.me/6282160966686' },
              ].map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-sk-border px-4 py-2.5 text-sk-concrete hover:border-sk-orange hover:text-sk-orange transition-colors text-xs tracking-wide"
                  whileHover={{ y: -2 }}
                  data-cursor
                >
                  {s.icon}
                  {s.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Map placeholder */}
          <div className="flex-1 min-h-[160px] bg-sk-bg3 border border-sk-border relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
              <MapPin size={24} className="text-sk-orange" weight="fill" />
              <span className="text-[11px] text-sk-concrete tracking-widest uppercase">Kota Metro, Lampung</span>
              <a
                href="https://maps.google.com/?q=Skylift+Fitness+Center+Metro+Lampung"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-sk-orange hover:underline tracking-widest uppercase mt-1"
                data-cursor
              >
                Buka di Google Maps →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

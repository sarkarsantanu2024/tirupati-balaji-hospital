import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react'
import { navigationData } from '@/data/navigation'
import { contactInfo } from '@/data/contact'
import { departmentsData } from '@/data/departments'

const socialIconMap: Record<string, React.ElementType> = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  twitter: Twitter,
  linkedin: Linkedin,
}

export default function Footer() {
  const quickLinks = navigationData.filter(n => !n.children).concat([
    { label: 'Careers', href: '/careers' },
    { label: 'Patient Portal', href: '/patient-portal' },
  ])

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="/images/brand-logo.jpeg"
                alt="Tirupati Balaji Health Care Group"
                width={48}
                height={48}
                className="w-12 h-12 rounded-xl object-cover shadow-md shrink-0"
              />
              <div className="leading-tight max-w-[220px]">
                <div className="font-extrabold text-white text-base leading-tight">
                  Tirupati Balaji <span className="text-white/70">Health Care Group</span>
                </div>
              </div>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Tirupati Balaji Health Care Group is dedicated to delivering world-class, compassionate healthcare to the people of Kolkata since 1996.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {contactInfo.socialLinks.map((social) => {
                const Icon = socialIconMap[social.icon] ?? Facebook
                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary-500 flex items-center justify-center transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <span
                    aria-disabled="true"
                    className="text-sm text-neutral-500 flex items-center gap-1.5 cursor-not-allowed select-none"
                  >
                    <span className="w-1 h-1 rounded-full bg-neutral-600" />
                    {link.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-5">Departments</h3>
            <ul className="space-y-2.5">
              {departmentsData.slice(0, 10).map((dept) => (
                <li key={dept.slug}>
                  <span
                    aria-disabled="true"
                    className="text-sm text-neutral-500 flex items-center gap-1.5 cursor-not-allowed select-none"
                  >
                    <span className="w-1 h-1 rounded-full bg-neutral-600" />
                    {dept.name}
                  </span>
                </li>
              ))}
              <li>
                <span
                  aria-disabled="true"
                  className="text-sm text-primary-400/60 font-semibold cursor-not-allowed select-none"
                >
                  View All Departments →
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-5">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-accent-400 mt-0.5 shrink-0" style={{ fontSize: 13 }}>location_on</span>
                <p className="text-sm text-neutral-400 leading-relaxed">{contactInfo.address}</p>
              </div>
              {contactInfo.phone.map((p) => (
                <div key={p.label} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-accent-400 shrink-0" style={{ fontSize: 13 }}>phone</span>
                  <div>
                    <p className="text-sm text-neutral-500 leading-none mb-0.5">{p.label}</p>
                    <a href={`tel:${p.value.replace(/[\s-]/g, '')}`} className="text-sm text-neutral-300 hover:text-white transition-colors font-medium">
                      {p.value}
                    </a>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent-400 shrink-0" style={{ fontSize: 13 }}>mail</span>
                <a href={`mailto:${contactInfo.email}`} className="text-sm text-neutral-400 hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Hours quick view */}
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-sm font-bold text-white/50 uppercase tracking-wider mb-2">Timings</p>
              {contactInfo.hours.map((h) => (
                <div key={h.label} className="flex justify-between text-sm text-neutral-400 py-0.5">
                  <span>{h.label}</span>
                  <span className="text-white/70 font-medium">{h.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>
            © {new Date().getFullYear()} Tirupati Balaji Health Care Group. All Rights Reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Crafted with <span className="material-symbols-outlined text-red-500" style={{ fontSize: 15, fontVariationSettings: "'FILL' 1" }}>favorite</span> for better health
          </p>
          <div className="flex items-center gap-4">
            <span aria-disabled="true" className="cursor-not-allowed select-none">Privacy Policy</span>
            <span aria-disabled="true" className="cursor-not-allowed select-none">Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

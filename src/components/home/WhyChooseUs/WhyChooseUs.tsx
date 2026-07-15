import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { whyChooseUsPoints } from '@/data/home'

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80&fit=crop"
                alt="Tirupoti Balaji Hospital team"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/30 to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-accent-500 text-white rounded-2xl p-5 shadow-button hidden md:block">
              <div className="text-4xl font-extrabold leading-none">28+</div>
              <div className="text-base mt-1 font-semibold opacity-90">Years of Excellence</div>
            </div>
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-card hidden md:block border border-neutral-100">
              <div className="text-3xl font-extrabold text-primary-700 leading-none">42L+</div>
              <div className="text-base text-neutral-500 mt-1">Happy Patients</div>
            </div>
          </div>

          {/* Text Column */}
          <div>
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-800 mb-4 leading-tight">
              Why Tirupoti Balaji Is{' '}
              <span className="gradient-text">Andhra Pradesh&apos;s</span>{' '}
              Most Trusted Hospital?
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed mb-8">
              Tirupoti Balaji Multi-Specialty Hospital combines 28 years of clinical experience with
              state-of-the-art technology and a team of 150+ specialist doctors, delivering the
              highest standards of healthcare across all medical and surgical disciplines — all
              under one roof in Vijayawada.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {whyChooseUsPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined text-secondary-500 mt-0.5 shrink-0"
                    style={{ fontSize: 20, fontVariationSettings: "'FILL' 1" }}
                  >check_circle</span>
                  <span className="text-neutral-700 text-base font-medium leading-snug">{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 flex-wrap">
              <Button href="/about" variant="primary">
                Discover More
              </Button>
              <Button href="/find-a-doctor" variant="secondary">
                Find a Doctor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

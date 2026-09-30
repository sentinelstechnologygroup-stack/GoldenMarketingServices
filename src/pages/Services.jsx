import { Container, CTAButton, Reveal } from '@/components/site/ui';
import PageHero, { LINK_MEDIA } from '@/components/site/PageHero';
import { ArrowRight } from 'lucide-react';

const SERVICES = [
  { name: 'Lead Generation', desc: 'Targeted campaigns use market, microterritory, intent, and audience signals to create inquiries aligned to your ideal customer.' },
  { name: 'Identity & Mobile Verification', desc: 'Contact details can be verified before an inquiry advances, reducing bad numbers and preventing unverified registrations from being treated as qualified leads.' },
  { name: 'Lead Response', desc: 'Every inquiry enters a documented response workflow so speed, attempts, and next actions are visible instead of assumed.' },
  { name: 'Lead Qualification', desc: 'Each conversation is measured against client-approved criteria for fit, intent, timing, geography, and other campaign-specific requirements.' },
  { name: 'Behavioral Intent Monitoring', desc: 'Declared intent and observed activity can be compared so renewed interest, repeat behavior, and timing changes trigger the right follow-up.' },
  { name: 'Appointment Setting', desc: 'Qualified prospects are booked directly onto the appropriate sales calendar with qualification context attached.' },
  { name: 'Live Call Transfers', desc: 'Ready-now prospects are connected live with an evidence trail showing qualification, transfer, and acceptance checkpoints.' },
  { name: 'Lead Routing & Acceptance', desc: 'Routing rules, acceptance timers, and backup paths help qualified handoffs reach the right professional without disappearing in the gap.' },
  { name: 'Database Reactivation', desc: 'Older opportunities can be re-engaged and requalified when behavior or direct response indicates renewed intent.' },
  { name: 'Evidence-Backed Reporting', desc: 'Verification, consent, qualification, contact, handoff, acceptance, and outcome records support transparent reporting and billing.' },
];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything Between an Inquiry and a Documented Handoff"
        subtitle="Link works the acquisition gap end-to-end—from initial inquiry through verification, qualification, documented contact, routing, handoff, acceptance, and outcome tracking."
        image={LINK_MEDIA.representative}
        imageAlt="Professional GMS representative engaging a prospect"
        imagePosition="62% center"
      >
        <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#E7B84B]">The engagement path</p>
        <div className="mt-5 grid grid-cols-4 gap-2">
          {['Verify', 'Qualify', 'Connect', 'Prove'].map((label, i) => (
            <div key={label} className="text-center">
              <span className="mx-auto flex h-8 w-8 items-center justify-center rounded-full border border-[#C9962E]/60 text-[10px] text-[#E7B84B]">{i + 1}</span>
              <p className="mt-2 text-[9px] uppercase tracking-[.08em] text-white/65">{label}</p>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {SERVICES.map((s, i) => (
              <Reveal key={s.name} delay={(i % 2) * 0.08}>
                <div className="card-light rounded-xl p-8 h-full group hover:border-[#C9962E]/40 transition-all">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[#C9962E] text-sm font-mono">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <ArrowRight className="h-5 w-5 text-[#7A838C] group-hover:text-[#C9962E] transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#07111F] mb-3">{s.name}</h3>
                  <p className="text-[#4a5a5c] leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-[#0D2235] border-t border-[#C9962E]/10">
        <Container>
          <Reveal>
            <div className="card-surface rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px pulse-line" />
              <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto">
                Want a program built around your lead flow?
              </h2>
              <div className="mt-8 flex justify-center">
                <CTAButton to="/get-started">Build My Lead Program</CTAButton>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
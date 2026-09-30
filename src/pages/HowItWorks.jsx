import { Container, CTAButton, Reveal } from '@/components/site/ui';
import PageHero, { LINK_MEDIA } from '@/components/site/PageHero';

const STEPS = [
  { n: '01', title: 'Inquiry', desc: 'A prospect raises a hand through an ad, landing page, search experience, referral, or other approved source.' },
  { n: '02', title: 'Verified Prospect', desc: 'Identity and contact information are validated before the opportunity advances through the qualification gate.' },
  { n: '03', title: 'Qualified Lead', desc: 'The prospect meets the campaign-specific criteria your team approved for fit, intent, geography, timing, and other requirements.' },
  { n: '04', title: 'Contacted Lead', desc: 'A GMS representative completes real outreach and records the conversation, attempts, disposition, and next action.' },
  { n: '05', title: 'Qualified Handoff', desc: 'The opportunity has passed the required checks and is packaged with qualification context and supporting evidence.' },
  { n: '06', title: 'Warm Transfer / Appointment', desc: 'When appropriate, Link connects the prospect live or schedules the next conversation directly with the receiving professional.' },
  { n: '07', title: 'Accepted Handoff', desc: 'The receiving client accepts the handoff, creating a clear operational and billing checkpoint.' },
  { n: '08', title: 'Client Outcome', desc: 'The result is tracked through follow-up, appointment, sale, closed-lost, or another final disposition so the acquisition loop can be optimized.' },
];

export default function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="From Inquiry to Client Outcome in Eight Controlled Stages"
        subtitle="A controlled qualification gate that separates raw inquiries from verified, qualified, documented handoffs your team can act on."
        image={LINK_MEDIA.bridge}
        imageAlt="Architectural bridge representing the connection between marketing and sales"
      >
        <p className="font-serif text-2xl leading-tight text-white">Marketing creates demand.</p>
        <div className="my-4 h-px bg-[#C9962E]/45" />
        <p className="font-serif text-2xl leading-tight text-[#E7B84B]">Link works the opportunity.</p>
        <div className="my-4 h-px bg-[#C9962E]/45" />
        <p className="font-serif text-2xl leading-tight text-white">Sales closes the deal.</p>
      </PageHero>

      <section className="py-24">
        <Container>
          <div className="relative">
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C9962E]/40 to-transparent md:-translate-x-1/2" />
            <div className="space-y-12">
              {STEPS.map((s, i) => (
                <Reveal key={s.n} delay={(i % 2) * 0.05}>
                  <div className={`flex items-center gap-6 md:gap-10 ${i % 2 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="hidden md:block flex-1" />
                    <div className="relative shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border-2 border-[#C9962E]/50 text-[#C9962E] font-bold glow-cyan">
                        {s.n}
                      </div>
                    </div>
                    <div className="flex-1 card-light rounded-xl p-6 md:p-8">
                      <h3 className="text-xl font-semibold text-[#07111F] mb-2">{s.title}</h3>
                      <p className="text-[#4a5a5c] leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-[#0D2235] border-t border-[#C9962E]/10">
        <Container>
          <Reveal>
            <div className="card-surface rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px pulse-line" />
              <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto">
                Ready to define your qualified opportunity?
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
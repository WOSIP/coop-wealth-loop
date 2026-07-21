import { motion } from "framer-motion";
import { Users, Bank, Storefront, Code, ArrowRight, Handshake, Star, ShieldCheck } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const stakeholders = [
  {
    icon: Users,
    title: "Cooperative Members",
    subtitle: "Individuals & Families",
    description: "Access digital savings, fair micro-loans, and community investment opportunities — all from your phone.",
    benefits: [
      "Digital savings accounts with competitive returns",
      "Quick micro-loan applications and approvals",
      "Member voting and governance participation",
      "Real-time balance and transaction tracking",
    ],
    cta: "Join as a Member",
    gradient: "from-[#D4A853] to-[#B8860B]",
  },
  {
    icon: Bank,
    title: "Cooperative Leaders",
    subtitle: "Board & Management",
    description: "Run your cooperative efficiently with automated member management, accounting, and reporting tools.",
    benefits: [
      "Automated member onboarding and KYC",
      "Loan portfolio management and risk analytics",
      "Financial reporting and audit trails",
      "Multi-role access and permissions",
    ],
    cta: "Lead Your Co-op",
    gradient: "from-[#C4993E] to-[#A67B2E]",
  },
  {
    icon: Storefront,
    title: "Local Merchants",
    subtitle: "Business Partners",
    description: "Connect with cooperative members, offer exclusive deals, and grow your business with community support.",
    benefits: [
      "Member-only promotions and loyalty programs",
      "Direct payment integration with co-op accounts",
      "Business analytics and customer insights",
      "Community marketplace listing",
    ],
    cta: "Partner With Us",
    gradient: "from-[#E8C97A] to-[#C4993E]",
  },
  {
    icon: Code,
    title: "Developer Partners",
    subtitle: "API & Integration",
    description: "Build on top of Hpass Wealth OS with our comprehensive API, SDKs, and developer tools.",
    benefits: [
      "RESTful API with comprehensive documentation",
      "SDKs for JavaScript, Python, and mobile",
      "Sandbox environment for testing",
      "Webhook integrations and event system",
    ],
    cta: "Build With Us",
    gradient: "from-[#D4A853] to-[#8B6914]",
  },
];

export default function Stakeholders() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-warm-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-[#B8860B] uppercase tracking-widest">Our Ecosystem</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-3">
              Built for{" "}
              <span className="text-gradient-gold">Everyone</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Hpass Wealth OS serves every part of the cooperative ecosystem — from members and leaders to merchants and developers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stakeholder Cards */}
      <section className="py-16 lg:py-20 bg-warm-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {stakeholders.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
            >
              {/* Image/Visual side */}
              <div className={`${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="relative">
                  <div className={`rounded-2xl overflow-hidden shadow-gold-lg bg-gradient-to-br ${s.gradient} p-8 aspect-[4/3] flex items-center justify-center`}>
                    <div className="text-center">
                      <s.icon size={80} weight="fill" className="text-white/30 mx-auto" />
                      <p className="text-white/80 text-lg font-semibold mt-4">{s.subtitle}</p>
                    </div>
                  </div>
                  <div className="absolute -top-3 -right-3 w-24 h-24 border-2 border-[#D4A853]/20 rounded-full -z-10" />
                  <div className="absolute -bottom-3 -left-3 w-16 h-16 border-2 border-[#D4A853]/15 rounded-full -z-10" />
                </div>
              </div>

              {/* Content side */}
              <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/20 text-xs font-medium text-[#B8860B] mb-4">
                  <Handshake size={14} />
                  {s.subtitle}
                </div>
                <h2 className="text-3xl font-bold text-foreground">{s.title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.description}</p>
                <ul className="mt-6 space-y-3">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                      <ShieldCheck size={18} weight="fill" className="text-[#D4A853] shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 rounded-xl bg-gold-gradient text-white font-semibold text-sm shadow-gold hover:shadow-gold-lg transition-all hover:-translate-y-0.5"
                >
                  {s.cta} <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#1F1E1B] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Star size={32} weight="fill" className="text-[#D4A853] mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Not sure where you fit?
            </h2>
            <p className="mt-4 text-lg text-[#B8A99A] max-w-xl mx-auto leading-relaxed">
              We'll help you find the right role in the cooperative ecosystem. Reach out and we'll guide you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-gold-gradient text-white font-semibold shadow-gold hover:shadow-gold-lg transition-all hover:-translate-y-0.5"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
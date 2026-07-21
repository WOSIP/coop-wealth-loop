import { motion } from "framer-motion";
import { ArrowRight, Users, Bank, Coins, ChartLineUp, Rocket, CheckCircle, ArrowDown } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const steps = [
  {
    num: "01",
    title: "Register Your Cooperative",
    desc: "Sign up your cooperative in minutes. Provide basic information, verify your organization, and set up your admin dashboard.",
    icon: Bank,
    details: [
      "Simple online registration form",
      "Document verification and KYC",
      "Customizable dashboard setup",
      "Multi-admin role configuration",
    ],
  },
  {
    num: "02",
    title: "Onboard Members",
    desc: "Invite members to join your cooperative digitally. They can sign up via mobile or web, complete verification, and start participating.",
    icon: Users,
    details: [
      "Bulk invite via email or SMS",
      "Self-service member registration",
      "Digital identity verification",
      "Automated welcome and training",
    ],
  },
  {
    num: "03",
    title: "Activate Financial Services",
    desc: "Enable savings, loans, and investment features. Set contribution rules, interest rates, and lending criteria tailored to your cooperative.",
    icon: Coins,
    details: [
      "Flexible savings plan templates",
      "Customizable loan products",
      "Automated interest calculations",
      "Risk scoring and approval workflows",
    ],
  },
  {
    num: "04",
    title: "Grow & Manage",
    desc: "Use real-time analytics, reporting, and member engagement tools to grow your cooperative. Track performance and make data-driven decisions.",
    icon: ChartLineUp,
    details: [
      "Real-time financial dashboards",
      "Member engagement analytics",
      "Automated dividend distribution",
      "Compliance and audit reports",
    ],
  },
];

const benefits = [
  "No upfront costs — pay as you grow",
  "White-label mobile app for your cooperative",
  "24/7 customer support and training",
  "Regular updates and new features",
  "Data portability and export",
  "Bank-grade security and compliance",
];

export default function HowItWorks() {
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
            <span className="text-sm font-semibold text-[#B8860B] uppercase tracking-widest">Getting Started</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-3">
              How It <span className="text-gradient-gold">Works</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From registration to full operation — get your cooperative up and running on Hpass Wealth OS in four simple steps.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 lg:py-20 bg-warm-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative flex gap-6 sm:gap-10 pb-16 last:pb-0"
            >
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gold-gradient flex items-center justify-center shadow-gold shrink-0">
                  <step.icon size={26} weight="fill" className="text-white" />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-[#D4A853]/40 to-transparent mt-4" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#B8860B] mb-2">
                  <span className="w-8 h-px bg-[#D4A853]" />
                  Step {step.num}
                </div>
                <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{step.desc}</p>
                <div className="grid sm:grid-cols-2 gap-2 mt-4">
                  {step.details.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle size={16} weight="fill" className="text-[#D4A853] shrink-0" />
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#1F1E1B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Why choose <span className="text-gradient-gold">Hpass Wealth OS</span>?
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="flex items-center gap-3 px-5 py-4 rounded-xl bg-white/5 border border-white/10"
              >
                <CheckCircle size={18} weight="fill" className="text-[#D4A853] shrink-0" />
                <span className="text-sm text-[#EDE6DC]">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-warm-sand text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Rocket size={32} weight="fill" className="text-[#D4A853] mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Ready to get started?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Set up your cooperative on Hpass Wealth OS today. Our team will guide you through every step.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-gold-gradient text-white font-semibold shadow-gold hover:shadow-gold-lg transition-all hover:-translate-y-0.5"
            >
              Get Started Today <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
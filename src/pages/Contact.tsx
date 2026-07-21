import { motion } from "framer-motion";
import { Envelope, Phone, MapPin, PaperPlane, Clock, CheckCircle, ArrowRight, CaretDown } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { BRAND_NAME, CONTACT_EMAIL, CONTACT_PHONE, ADDRESS } from "../lib/constants";

const contactMethods = [
  { icon: Envelope, label: "Email Us", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { icon: Phone, label: "Call Us", value: CONTACT_PHONE, href: `tel:${CONTACT_PHONE}` },
  { icon: MapPin, label: "Office", value: ADDRESS, href: "#" },
  { icon: Clock, label: "Hours", value: "Mon–Fri, 9:00 AM – 6:00 PM EST", href: "#" },
];

const faqs = [
  {
    q: "How long does onboarding take?",
    a: "Most cooperatives are fully onboarded within 2–3 business days. Our team provides hands-on support throughout the process.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. We use bank-grade encryption, SOC 2 compliant infrastructure, and regular security audits to protect your data.",
  },
  {
    q: "Can I migrate from another platform?",
    a: "Yes! We offer free data migration services. Our team will handle the entire migration process with minimal disruption.",
  },
  {
    q: "What support do you offer?",
    a: "All plans include 24/7 email support. Premium plans include phone support, dedicated account management, and training sessions.",
  },
];

export default function Contact() {
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
            <span className="text-sm font-semibold text-[#B8860B] uppercase tracking-widest">Get In Touch</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-3">
              Let's <span className="text-gradient-gold">Talk</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Ready to transform your cooperative? Reach out and our team will get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 lg:py-20 bg-warm-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl border border-gold bg-white text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[#D4A853]/40 focus:border-[#D4A853] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                    <input
                      type="email"
                      placeholder="jane@cooperative.org"
                      className="w-full px-4 py-3 rounded-xl border border-gold bg-white text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[#D4A853]/40 focus:border-[#D4A853] transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Cooperative Name</label>
                  <input
                    type="text"
                    placeholder="Your cooperative"
                    className="w-full px-4 py-3 rounded-xl border border-gold bg-white text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[#D4A853]/40 focus:border-[#D4A853] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your cooperative and what you're looking for..."
                    className="w-full px-4 py-3 rounded-xl border border-gold bg-white text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[#D4A853]/40 focus:border-[#D4A853] transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-gradient text-white font-semibold shadow-gold hover:shadow-gold-lg transition-all hover:-translate-y-0.5"
                >
                  <PaperPlane size={18} /> Send Message
                </button>
              </form>
            </motion.div>

            {/* Right: Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gold hover:border-[#D4A853]/40 hover:shadow-gold transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center shrink-0 shadow-gold">
                    <method.icon size={22} weight="fill" className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-muted-foreground">{method.label}</p>
                    <p className="text-foreground font-semibold truncate group-hover:text-[#B8860B] transition-colors">
                      {method.value}
                    </p>
                  </div>
                  <ArrowRight size={16} className="text-[#D4A853] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.details
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="group rounded-2xl border border-gold bg-warm-sand overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer text-foreground font-semibold hover:text-[#B8860B] transition-colors list-none">
                  {faq.q}
                  <CaretDown size={18} className="text-[#D4A853] shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-5 text-muted-foreground leading-relaxed text-sm">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1F1E1B] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Prefer to explore on your own?
            </h2>
            <p className="mt-4 text-lg text-[#B8A99A] max-w-xl mx-auto leading-relaxed">
              Check out our documentation and resources to learn more about {BRAND_NAME}.
            </p>
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-gold-gradient text-white font-semibold shadow-gold hover:shadow-gold-lg transition-all hover:-translate-y-0.5"
            >
              How It Works <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
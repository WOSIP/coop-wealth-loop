import { motion } from "framer-motion";
import { ArrowRight, Users, Bank, Coins, ChartLineUp, ShieldCheck, Handshake, Star, CheckCircle } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Users,
    title: "Member Management",
    desc: "Onboard, verify, and manage members with a seamless digital experience.",
  },
  {
    icon: Bank,
    title: "Digital Savings",
    desc: "Automated savings plans with competitive returns for cooperative members.",
  },
  {
    icon: Coins,
    title: "Micro-Loans",
    desc: "Fair, transparent lending powered by community trust and shared risk.",
  },
  {
    icon: ChartLineUp,
    title: "Investment Pooling",
    desc: "Pool resources for collective investments that benefit all members.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Platform",
    desc: "Enterprise-grade security with end-to-end encryption and audit trails.",
  },
  {
    icon: Handshake,
    title: "Merchant Integration",
    desc: "Connect local merchants with cooperative members for exclusive benefits.",
  },
];

const stats = [
  { value: "50K+", label: "Active Members" },
  { value: "$120M+", label: "Assets Managed" },
  { value: "2,000+", label: "Cooperatives" },
  { value: "99.9%", label: "Uptime" },
];

const heroImages = [
  "https://storage.googleapis.com/dala-prod-public-sv2/fb1eac66-4b97-45e8-8bc0-1c0b4f0cdb1a/hero-main.webp",
  "https://storage.googleapis.com/dala-prod-public-sv2/fb1eac66-4b97-45e8-8bc0-1c0b4f0cdb1a/hero-community.webp",
  "https://storage.googleapis.com/dala-prod-public-sv2/fb1eac66-4b97-45e8-8bc0-1c0b4f0cdb1a/hero-dashboard.webp",
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-warm-sand">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#D4A853] blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#B8860B] blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/20 text-sm text-[#B8860B] font-medium mb-6">
                <Star size={14} weight="fill" className="text-[#D4A853]" />
                Trusted by 2,000+ cooperatives
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                Enriching community{" "}
                <br className="hidden sm:block" />
                members by{" "}
                <span className="text-gradient-gold">Empowering</span>
                <br />
                <span className="text-gradient-gold">cooperatives</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
                Hpass Wealth OS is the all-in-one platform for modern cooperatives.
                Manage members, savings, loans, and investments — all in one place.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-gradient text-white font-semibold shadow-gold hover:shadow-gold-lg transition-all hover:-translate-y-0.5"
                >
                  Get Started <ArrowRight size={18} />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#D4A853]/30 text-foreground font-semibold hover:bg-[#D4A853]/5 transition-all"
                >
                  See How It Works
                </Link>
              </div>
              {/* Trust indicators */}
              <div className="flex items-center gap-4 mt-10 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={16} weight="fill" className="text-[#D4A853]" />
                  SOC 2 Compliant
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={16} weight="fill" className="text-[#D4A853]" />
                  Bank-Grade Security
                </div>
              </div>
            </motion.div>

            {/* Right: Hero image grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-gold-lg aspect-[3/4]">
                    <img
                      src={heroImages[0]}
                      alt="Hpass Wealth OS Platform"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                    <img
                      src={heroImages[1]}
                      alt="Community of cooperative members"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="pt-8 space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img
                      src={heroImages[2]}
                      alt="Dashboard analytics"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-gold-lg bg-gold-gradient p-6 aspect-[3/2] flex flex-col justify-center">
                    <p className="text-white/90 text-sm font-medium">Total Assets Managed</p>
                    <p className="text-white text-3xl font-bold mt-1">$120M+</p>
                    <div className="flex items-center gap-1 mt-2 text-white/70 text-xs">
                      <ChartLineUp size={14} />
                      Growing 24% YoY
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative ring */}
              <div className="absolute -top-4 -right-4 w-48 h-48 border-2 border-[#D4A853]/20 rounded-full -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-[#D4A853]/15 rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1F1E1B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <p className="text-3xl sm:text-4xl font-bold text-[#D4A853]">{stat.value}</p>
                <p className="mt-1 text-sm text-[#B8A99A]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-warm-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-sm font-semibold text-[#B8860B] uppercase tracking-widest">Platform Features</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">
              Everything your cooperative needs
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From member onboarding to investment management, Hpass Wealth OS provides a complete toolkit for modern cooperatives.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group p-6 rounded-2xl bg-white border border-gold hover:border-[#D4A853]/40 hover:shadow-gold transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center mb-4 shadow-gold">
                  <feature.icon size={22} weight="fill" className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-[#1F1E1B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-[#D4A853] blur-3xl" />
          <div className="absolute bottom-10 left-20 w-48 h-48 rounded-full bg-[#B8860B] blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to transform your cooperative?
            </h2>
            <p className="mt-4 text-lg text-[#B8A99A] max-w-2xl mx-auto leading-relaxed">
              Join thousands of cooperatives already using Hpass Wealth OS to manage their finances and grow their communities.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-gradient text-white font-semibold shadow-gold hover:shadow-gold-lg transition-all hover:-translate-y-0.5"
              >
                Start Your Journey <ArrowRight size={18} />
              </Link>
              <Link
                to="/stakeholders"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#D4A853]/30 text-[#B8A99A] font-semibold hover:bg-[#D4A853]/10 hover:text-white transition-all"
              >
                Explore Stakeholders
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
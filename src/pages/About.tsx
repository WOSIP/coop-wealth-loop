import { motion } from "framer-motion";
import { Users, Handshake, Star, Target, Globe, ArrowRight, Diamond, ShieldCheck } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { BRAND_NAME } from "../lib/constants";

const values = [
  {
    icon: Users,
    title: "Community First",
    desc: "Every decision we make starts with the question: 'How does this benefit the cooperative community?'",
  },
  {
    icon: Handshake,
    title: "Trust & Transparency",
    desc: "We believe in open communication, clear pricing, and honest partnerships with every cooperative we serve.",
  },
  {
    icon: Diamond,
    title: "Innovation",
    desc: "We continuously evolve our platform to bring the best financial technology to cooperatives worldwide.",
  },
  {
    icon: Target,
    title: "Inclusive Growth",
    desc: "Financial empowerment should be accessible to everyone. We build tools that leave no community behind.",
  },
];

const team = [
  {
    name: "Amara Osei",
    role: "CEO & Co-Founder",
    bio: "Former microfinance executive with 15+ years of experience in cooperative banking across Africa and Southeast Asia.",
  },
  {
    name: "David Chen",
    role: "CTO & Co-Founder",
    bio: "Fintech architect who built payment systems processing $2B+ annually. Previously led engineering at two YC-backed startups.",
  },
  {
    name: "Sarah Mensah",
    role: "COO",
    bio: "Operations leader with deep expertise in scaling cooperative networks. Former director at a top-10 credit union.",
  },
  {
    name: "James Akinwale",
    role: "Head of Product",
    bio: "Product leader focused on delivering intuitive financial tools. Previously led product at a leading neobank in Africa.",
  },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-warm-sand overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-[#B8860B] uppercase tracking-widest">Our Story</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-3">
              About <span className="text-gradient-gold">{BRAND_NAME}</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We're on a mission to empower 100 million cooperative members with modern financial tools that build stronger communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-20 bg-warm-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Our <span className="text-gradient-gold">Mission</span>
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Cooperatives have been a pillar of community finance for over a century. Yet most still rely on outdated tools — 
                spreadsheets, paper records, and fragmented systems. We built {BRAND_NAME} to change that.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our platform combines the trust and community focus of traditional cooperatives with the power of modern 
                financial technology. We believe that when cooperatives thrive, communities prosper.
              </p>
              <div className="flex items-center gap-8 mt-8">
                <div>
                  <p className="text-3xl font-bold text-[#D4A853]">50K+</p>
                  <p className="text-sm text-muted-foreground">Members Served</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#D4A853]">2K+</p>
                  <p className="text-sm text-muted-foreground">Cooperatives</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#D4A853]">24</p>
                  <p className="text-sm text-muted-foreground">Countries</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-gold-lg">
                <img
                  src="https://storage.googleapis.com/dala-prod-public-sv2/fb1eac66-4b97-45e8-8bc0-1c0b4f0cdb1a/hero-community.webp"
                  alt="Community of cooperative members"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-[#D4A853]/20 rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              What We <span className="text-gradient-gold">Believe</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our values guide everything we do — from product design to customer support.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl bg-warm-sand border border-gold hover:border-[#D4A853]/40 hover:shadow-gold transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center mb-4 shadow-gold">
                  <v.icon size={22} weight="fill" className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-warm-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Meet the <span className="text-gradient-gold">Team</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A passionate team of fintech experts, cooperative enthusiasts, and community builders.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl bg-white border border-gold hover:border-[#D4A853]/40 hover:shadow-gold transition-all text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gold-gradient flex items-center justify-center mx-auto mb-4 shadow-gold">
                  <span className="text-white text-2xl font-bold">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-[#B8860B] font-medium mt-0.5">{member.role}</p>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
              </motion.div>
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
            <Globe size={32} weight="fill" className="text-[#D4A853] mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Join us in building the future of cooperative finance
            </h2>
            <p className="mt-4 text-lg text-[#B8A99A] max-w-xl mx-auto leading-relaxed">
              Whether you're a cooperative leader, member, or partner — we'd love to hear from you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-gold-gradient text-white font-semibold shadow-gold hover:shadow-gold-lg transition-all hover:-translate-y-0.5"
            >
              Get In Touch <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
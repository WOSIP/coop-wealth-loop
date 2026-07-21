import { motion } from "framer-motion";
import { ArrowRight, Code, BookOpen, Terminal, Cube, Key, CheckCircle, Users, Star, Link } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const sdks = [
  { name: "JavaScript", desc: "Node.js & browser SDK", color: "bg-yellow-100 text-yellow-800" },
  { name: "Python", desc: "Python 3.8+ SDK", color: "bg-blue-100 text-blue-800" },
  { name: "React", desc: "React hooks & components", color: "bg-cyan-100 text-cyan-800" },
  { name: "Mobile", desc: "iOS & Android SDKs", color: "bg-green-100 text-green-800" },
];

const features = [
  {
    icon: Key,
    title: "Authentication",
    desc: "API keys, OAuth 2.0, and JWT-based authentication for secure access.",
  },
  {
    icon: Cube,
    title: "Core API",
    desc: "Comprehensive RESTful API covering members, accounts, transactions, and more.",
  },
  {
    icon: Terminal,
    title: "Webhooks",
    desc: "Real-time event notifications for transactions, member updates, and system events.",
  },
  {
    icon: BookOpen,
    title: "Documentation",
    desc: "Detailed guides, API references, and interactive examples to accelerate development.",
  },
  {
    icon: Link,
    title: "Payment Links",
    desc: "Generate payment links and QR codes for seamless member transactions.",
  },
  {
    icon: Users,
    title: "Community SDK",
    desc: "Build cooperative-specific features with our community-focused SDKs.",
  },
];

export default function Developers() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-warm-sand overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold text-[#B8860B] uppercase tracking-widest">Developer Portal</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-3">
                Build on{" "}
                <span className="text-gradient-gold">Hpass</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-lg leading-relaxed">
                Integrate cooperative financial services into your applications with our powerful APIs, SDKs, and developer tools.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-gradient text-white font-semibold shadow-gold hover:shadow-gold-lg transition-all hover:-translate-y-0.5"
                >
                  <Code size={18} /> Start Building
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#D4A853]/30 text-foreground font-semibold hover:bg-[#D4A853]/5 transition-all"
                >
                  <BookOpen size={18} /> Read Docs
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Code snippet card */}
              <div className="rounded-2xl bg-[#1F1E1B] p-6 shadow-gold-lg border border-[#D4A853]/20">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-xs text-[#B8A99A] ml-2">api-example.js</span>
                </div>
                <pre className="text-sm text-[#EDE6DC] font-mono leading-relaxed">
                  <code>{`import { HpassClient } from "@hpass/sdk";

const hpass = new HpassClient({
  apiKey: "sk_..."
});

// Create a member
const member = await hpass.members.create({
  name: "Jane Doe",
  coopId: "coop_123",
});

// Initiate a savings account
const savings = await hpass.savings.create({
  memberId: member.id,
  plan: "growth_plus",
});`}</code>
                </pre>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#D4A853]/20 rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-12 bg-warm-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {sdks.map((sdk) => (
              <div key={sdk.name} className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-gold">
                <div className={`w-8 h-8 rounded-lg ${sdk.color} flex items-center justify-center text-xs font-bold`}>
                  {sdk.name.slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{sdk.name}</p>
                  <p className="text-xs text-muted-foreground">{sdk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-warm-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Everything you need to <span className="text-gradient-gold">integrate</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our developer platform provides all the tools and resources to build powerful cooperative financial applications.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="p-6 rounded-2xl bg-white border border-gold hover:border-[#D4A853]/40 hover:shadow-gold transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-gold-gradient flex items-center justify-center mb-4 shadow-gold">
                  <f.icon size={20} weight="fill" className="text-white" />
                </div>
                <h3 className="font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
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
            <Star size={32} weight="fill" className="text-[#D4A853] mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Join our developer community
            </h2>
            <p className="mt-4 text-lg text-[#B8A99A] max-w-xl mx-auto leading-relaxed">
              Get early access to our API, SDKs, and developer tools. Build the future of cooperative finance.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-gradient text-white font-semibold shadow-gold hover:shadow-gold-lg transition-all hover:-translate-y-0.5"
              >
                Get API Access <ArrowRight size={18} />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#D4A853]/30 text-[#B8A99A] font-semibold hover:bg-[#D4A853]/10 hover:text-white transition-all"
              >
                View Documentation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
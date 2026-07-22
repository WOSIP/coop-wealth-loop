import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Wallet,
  CreditCard,
  DeviceMobile,
  QrCode,
  ShoppingCart,
  Storefront,
  Gift,
  CheckCircle,
  Star,
  Users,
  Coins,
  Percent,
  Clock,
  Diamond,
  ChartLineUp,
  Globe,
  Sparkle,
  Copy,
  Lightning,
  Lock,
  Bell,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const stagger = (i: number) => ({
  ...fadeUp,
  transition: { ...fadeUp.transition, delay: i * 0.08 },
});

const financialAdvantages = [
  {
    icon: Percent,
    title: "Zero Account Fees",
    desc: "No monthly maintenance fees, no hidden charges. Keep every penny you earn.",
    stat: "0%",
    statLabel: "Monthly Fees",
  },
  {
    icon: Coins,
    title: "Higher Savings Returns",
    desc: "Earn competitive interest rates on your savings — up to 3x the national average.",
    stat: "3x",
    statLabel: "Avg. Returns",
  },
  {
    icon: ArrowRight,
    title: "Lower Loan Rates",
    desc: "Access micro-loans at rates significantly below traditional banks and fintech lenders.",
    stat: "From 5%",
    statLabel: "APR Loans",
  },
  {
    icon: Gem,
    title: "Annual Profit Sharing",
    desc: "As a member, you get a share of the cooperative's annual profits based on your participation.",
    stat: "Up to 15%",
    statLabel: "Annual Dividend",
  },
];

const shoppingFeatures = [
  {
    icon: ShoppingCart,
    title: "Buy Now, Pay Later",
    desc: "Split purchases into interest-free installments. No credit check required for co-op members.",
    tag: "BNPL",
    highlight: true,
  },
  {
    icon: Storefront,
    title: "Merchant Discounts",
    desc: "Exclusive deals and discounts at local partner merchants — from groceries to electronics.",
    tag: "Up to 40%",
    highlight: false,
  },
  {
    icon: Gift,
    title: "Group Buying Power",
    desc: "Pool purchases with other members to unlock bulk discounts on everyday essentials.",
    tag: "Bulk",
    highlight: false,
  },
  {
    icon: Lightning,
    title: "Instant Rewards",
    desc: "Earn cashback and loyalty points on every purchase. Redeem instantly at any partner store.",
    tag: "Cashback",
    highlight: false,
  },
];

const mobileFeatures = [
  {
    icon: DeviceMobile,
    title: "Mobile Banking",
    desc: "Manage your savings, loans, and investments from anywhere. Full-featured mobile app included.",
  },
  {
    icon: QrCode,
    title: "QR Payments",
    desc: "Pay at any partner merchant with a simple QR scan. No card, no cash, no hassle.",
  },
  {
    icon: Wallet,
    title: "Digital Wallet",
    desc: "Store funds, send money to members, and pay bills directly from your digital wallet.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    desc: "Real-time notifications for transactions, savings milestones, and exclusive member offers.",
  },
];

const communityBenefits = [
  {
    icon: Users,
    title: "Democratic Governance",
    desc: "One member, one vote. You have a say in how the cooperative is run and where profits go.",
  },
  {
    icon: Globe,
    title: "Community Projects",
    desc: "A portion of profits funds local community projects — schools, health centers, and infrastructure.",
  },
  {
    icon: ChartLineUp,
    title: "Financial Literacy",
    desc: "Free access to financial education, budgeting tools, and personal finance coaching.",
  },
  {
    icon: Lock,
    title: "Member Protection",
    desc: "Your savings are protected by cooperative insurance and a community-backed safety net.",
  },
];

const creditBuildingSteps = [
  {
    icon: Clock,
    title: "Build Credit History",
    desc: "Your savings history and loan repayments build a credit profile that opens doors to larger loans.",
  },
  {
    icon: Star,
    title: "Credit Score",
    desc: "Get a transparent credit score based on your cooperative activity, not just traditional credit bureaus.",
  },
  {
    icon: Copy,
    title: "Credit Portability",
    desc: "Take your credit history with you if you move to another cooperative within the network.",
  },
];

export default function EndUser() {
  const [bnplActive, setBnplActive] = useState(true);

  const heroImages = {
    phone: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/afdf640b-1a24-4b12-a871-6774dca6836b/enduser-hero-5e73fafa-1784742364733.webp",
    shopping: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/afdf640b-1a24-4b12-a871-6774dca6836b/enduser-shopping-e2c398d7-1784742363791.webp",
    community: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/afdf640b-1a24-4b12-a871-6774dca6836b/enduser-community-7bd30fa1-1784742364459.webp",
  };

  return (
    <div>
      {/* ===== HERO BANNER ===== */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-warm-sand">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#D4A853] blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#B8860B] blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-36 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/20 text-sm text-[#B8860B] font-medium mb-6">
                <Sparkle size={14} weight="fill" className="text-[#D4A853]" />
                Built for members, by members
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                Financial power for{" "}
                <span className="text-gradient-gold">every member</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
                Save more, borrow less, and earn your share. Hpass Wealth OS
                gives cooperative members the tools to build wealth, access
                affordable credit, and enjoy exclusive member benefits.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-gradient text-white font-semibold shadow-gold hover:shadow-gold-lg transition-all hover:-translate-y-0.5"
                >
                  Join Your Co-op <ArrowRight size={18} />
                </Link>
                <Link
                  to="/stakeholders"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#D4A853]/30 text-foreground font-semibold hover:bg-[#D4A853]/5 transition-all"
                >
                  Explore Membership
                </Link>
              </div>
              {/* Trust indicators */}
              <div className="flex items-center gap-4 mt-10 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={16} weight="fill" className="text-[#D4A853]" />
                  No Hidden Fees
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={16} weight="fill" className="text-[#D4A853]" />
                  Member-Owned
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={16} weight="fill" className="text-[#D4A853]" />
                  Insured Savings
                </div>
              </div>
            </motion.div>

            {/* Right: Hero image */}
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
                      src={heroImages.phone}
                      alt="Mobile banking app"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                    <img
                      src={heroImages.shopping}
                      alt="Member shopping deals"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="pt-8 space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img
                      src={heroImages.community}
                      alt="Cooperative community"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-gold-lg bg-gold-gradient p-6 aspect-[3/2] flex flex-col justify-center">
                    <p className="text-white/90 text-sm font-medium">Cooperative Members</p>
                    <p className="text-white text-3xl font-bold mt-1">50K+</p>
                    <div className="flex items-center gap-1 mt-2 text-white/70 text-xs">
                      <Users size={14} />
                      Growing 24% YoY
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-48 h-48 border-2 border-[#D4A853]/20 rounded-full -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-[#D4A853]/15 rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FINANCIAL & COST ADVANTAGES ===== */}
      <section className="py-20 lg:py-28 bg-warm-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-[#B8860B] uppercase tracking-widest">
              Financial Advantages
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">
              More for your money, less for the bank
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              As a cooperative member, you're not just a customer — you're an owner.
              That means better rates, fewer fees, and a share of the profits.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {financialAdvantages.map((item, i) => (
              <motion.div
                key={item.title}
                {...stagger(i)}
                className="group relative p-6 rounded-2xl bg-white border border-gold hover:border-[#D4A853]/40 hover:shadow-gold transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold shrink-0">
                    <item.icon size={22} weight="fill" className="text-white" />
                  </div>
                  <span className="text-2xl font-bold text-[#D4A853]">{item.stat}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                <p className="mt-3 text-xs font-medium text-[#B8860B]">{item.statLabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SHOPPING & PURCHASING POWER (BNPL CARD TOGGLE) ===== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-[#B8860B] uppercase tracking-widest">
              Member Purchasing Power
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">
              Shop smarter, together
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From buy-now-pay-later to group discounts, members get access to
              purchasing power that traditional banking can't match.
            </p>
          </motion.div>

          {/* BNPL Card Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-16"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1F1E1B] to-[#2A2824] shadow-gold-lg">
              {/* Decorative glow */}
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[#D4A853]/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-[#B8860B]/10 blur-3xl" />

              <div className="relative p-8 sm:p-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold">
                      <CreditCard size={24} weight="fill" className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Buy Now, Pay Later</h3>
                      <p className="text-sm text-[#B8A99A]">Interest-free installments for members</p>
                    </div>
                  </div>
                  {/* Toggle */}
                  <button
                    onClick={() => setBnplActive(!bnplActive)}
                    className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                      bnplActive ? "bg-[#D4A853]" : "bg-white/20"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 ${
                        bnplActive ? "translate-x-7" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>

                {/* Animated content */}
                <motion.div
                  key={bnplActive ? "active" : "inactive"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {bnplActive ? (
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-3 gap-3">
                        <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                          <p className="text-2xl font-bold text-[#D4A853]">₦50K</p>
                          <p className="text-xs text-[#B8A99A] mt-1">Max Purchase</p>
                        </div>
                        <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                          <p className="text-2xl font-bold text-[#D4A853]">4</p>
                          <p className="text-xs text-[#B8A99A] mt-1">Installments</p>
                        </div>
                        <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                          <p className="text-2xl font-bold text-[#D4A853]">0%</p>
                          <p className="text-xs text-[#B8A99A] mt-1">Interest</p>
                        </div>
                      </div>
                      <p className="text-sm text-[#B8A99A] leading-relaxed">
                        Split any purchase at partner merchants into 4 interest-free
                        payments. No credit check required — your cooperative membership
                        is your credit.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-3 gap-3">
                        <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                          <p className="text-2xl font-bold text-white/60">—</p>
                          <p className="text-xs text-[#B8A99A] mt-1">Max Purchase</p>
                        </div>
                        <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                          <p className="text-2xl font-bold text-white/60">—</p>
                          <p className="text-xs text-[#B8A99A] mt-1">Installments</p>
                        </div>
                        <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                          <p className="text-2xl font-bold text-white/60">—</p>
                          <p className="text-xs text-[#B8A99A] mt-1">Interest</p>
                        </div>
                      </div>
                      <p className="text-sm text-[#B8A99A] leading-relaxed">
                        Toggle BNPL on to unlock interest-free installment payments at
                        thousands of partner merchants nationwide.
                      </p>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Shopping Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {shoppingFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                {...stagger(i)}
                className={`group p-6 rounded-2xl border transition-all duration-300 ${
                  feature.highlight
                    ? "bg-gradient-to-br from-[#D4A853]/5 to-[#B8860B]/5 border-[#D4A853]/30 hover:shadow-gold"
                    : "bg-white border-gold hover:border-[#D4A853]/40 hover:shadow-gold"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold shrink-0">
                    <feature.icon size={22} weight="fill" className="text-white" />
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#D4A853]/10 text-[#B8860B] border border-[#D4A853]/20">
                    {feature.tag}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CREDIT BUILDING ===== */}
      <section className="py-20 lg:py-28 bg-warm-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <motion.div {...fadeUp}>
              <span className="text-sm font-semibold text-[#B8860B] uppercase tracking-widest">
                Credit Building
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">
                Build credit through <span className="text-gradient-gold">cooperative participation</span>
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Your savings habits, loan repayments, and cooperative activity build
                a credit profile that grows with you. No traditional credit history
                required to get started.
              </p>

              <div className="space-y-5 mt-8">
                {creditBuildingSteps.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold shrink-0 mt-0.5">
                      <step.icon size={20} weight="fill" className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-gold-lg">
                <img
                  src={heroImages.phone}
                  alt="Credit building on mobile"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1E1B]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3">
                    <ChartLineUp size={24} weight="fill" className="text-[#D4A853]" />
                    <div>
                      <p className="text-white font-semibold">Your Co-op Credit Score</p>
                      <p className="text-[#D4A853] text-sm">Excellent — 780</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-24 h-24 border-2 border-[#D4A853]/20 rounded-full -z-10" />
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border-2 border-[#D4A853]/15 rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== MOBILE-FIRST BANKING ===== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-[#B8860B] uppercase tracking-widest">
              Mobile-First Banking
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">
              Your cooperative in your pocket
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Access every feature of your cooperative membership from your phone.
              Save, borrow, pay, and earn — all from one app.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mobileFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                {...stagger(i)}
                className="group p-6 rounded-2xl bg-warm-sand border border-gold hover:border-[#D4A853]/40 hover:shadow-gold transition-all duration-300"
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

      {/* ===== COMMUNITY BENEFITS ===== */}
      <section className="py-20 lg:py-28 bg-warm-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-[#B8860B] uppercase tracking-widest">
              Community Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">
              More than a bank — a community
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              When you join a cooperative, you're not just a member. You're an owner
              with a voice, a vote, and a share in the success.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityBenefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                {...stagger(i)}
                className="group p-6 rounded-2xl bg-white border border-gold hover:border-[#D4A853]/40 hover:shadow-gold transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center mb-4 shadow-gold">
                  <benefit.icon size={22} weight="fill" className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
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
            <Diamond size={36} weight="fill" className="text-[#D4A853] mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to experience the <span className="text-gradient-gold">cooperative difference</span>?
            </h2>
            <p className="mt-4 text-lg text-[#B8A99A] max-w-2xl mx-auto leading-relaxed">
              Join a cooperative near you or start one with your community. Get the
              financial tools, purchasing power, and community support you deserve.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-gradient text-white font-semibold shadow-gold hover:shadow-gold-lg transition-all hover:-translate-y-0.5"
              >
                Find Your Co-op <ArrowRight size={18} />
              </Link>
              <Link
                to="/stakeholders"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#D4A853]/30 text-[#B8A99A] font-semibold hover:bg-[#D4A853]/10 hover:text-white transition-all"
              >
                Learn About Membership
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
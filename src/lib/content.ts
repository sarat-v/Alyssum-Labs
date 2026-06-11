export const site = {
  name: "Alyssum Labs",
  legalName: "Alyssum Labs PTE Ltd",
  location: "Singapore",
  email: "info@alyssumlabs.com",
  tagline: "Where Intelligence Meets Consequence.",
  description:
    "Singapore-based technology intelligence company embedding AI-driven systems into life sciences and financial markets programmes.",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/our-model", label: "Our Model" },
  { href: "/why-alyssum-labs", label: "Why Alyssum Labs" },
  { href: "/contact", label: "Contact" },
] as const;

export const home = {
  hero: {
    headline: ["Where Intelligence", "Meets Consequence."],
    body: "Alyssum Labs builds advanced technology systems for environments where complexity is the norm, precision is non-negotiable, and the quality of intelligence determines the quality of outcomes. We do not sit at the edge of the organisations we work with. We are embedded at their core.",
  },
  pillars: [
    {
      title: "Technology at the Centre",
      body: "AI and advanced data systems are the foundation of every solution we build — not a layer added on top.",
      featured: true,
    },
    {
      title: "Embedded at Program Level",
      body: "We integrate our intelligence frameworks directly into the operations and workflows of the organisations we work with.",
    },
    {
      title: "Built for Complexity",
      body: "We work where the data is most dense, the timelines most demanding, and the quality of intelligence most consequential.",
    },
  ],
  statement:
    "Alyssum Labs PTE Ltd is a Singapore-based technology intelligence company. We develop and deploy AI-driven systems and process frameworks across two sectors currently — life sciences and financial markets — where the volume, velocity, and complexity of data has fundamentally outpaced conventional methods of analysis and decision-making. Our role is to be the technology backbone of the programmes we support, and to participate in the value that intelligence creates.",
  sectors: [
    {
      id: "life-sciences",
      title: "Life Sciences",
      body: "Bringing computational precision to drug discovery and development — from target identification and molecule design through to development strategy.",
      href: "/what-we-do#life-sciences",
      image: "/images/life-sciences.png",
      accent: "ls" as const,
    },
    {
      id: "financial-markets",
      title: "Financial Markets",
      body: "Powering the full investment lifecycle with AI-driven intelligence — from market mapping, portfolio oversight and exit positioning.",
      href: "/what-we-do#financial-markets",
      image: "/images/private-equity.png",
      accent: "pe" as const,
    },
  ],
};

export const about = {
  intro: [
    "We were founded on a single conviction: that artificial intelligence, applied with domain depth and structural discipline, can fundamentally change what is achievable — in science, in investment, and in the programmes that sit at their intersection.",
  ],
  founder: {
    name: "Sarat Vakkalanka",
    bio: [
      "He works at the intersection of advanced data science, artificial intelligence, and complex industry programmes — environments where precision is non-negotiable and the quality of intelligence directly determines the quality of outcomes.",
      "His focus is building systems that sit at the structural centre of how organisations operate — embedded in how decisions are made and programmes are run, not applied selectively at the edges. He founded Alyssum Labs to do that at scale, with the domain depth and governance rigour these environments demand.",
      "He holds a Master’s in Information Systems and Management from Carnegie Mellon University.",
    ],
    portrait: "/images/sarat-headshot.png",
    portraitWidth: 1066,
    portraitHeight: 1052,
  },
  foundation: [
    {
      title: "Singapore-Based, Globally Oriented",
      body: "A sophisticated regulatory environment, strong institutional networks, and direct access to Asian and global markets in life sciences and financial services.",
    },
    {
      title: "Governance by Design",
      body: "Compliance, documentation integrity, and auditability are foundational requirements — built into every system, structure, and commercial arrangement from inception.",
    },
    {
      title: "Built to Compound",
      body: "Through technology platforms, collaborative arrangements, and equity participation in the programmes we power, Alyssum Labs is designed to generate and share in durable, long-term value.",
    },
  ],
};

export const whatWeDo = {
  intro:
    "Alyssum Labs develops AI-driven intelligence systems and embeds them into complex, high-stakes programmes. We currently operate across two sectors.",
  lifeSciences: {
    title: "Life Sciences",
    intro: [
      "The biological, chemical, and clinical data that informs drug discovery and development has grown beyond the reach of conventional analytical methods. Speed, precision, and the ability to interrogate large multimodal datasets are now as critical to programme success as the science itself.",
      "Alyssum Labs provides the computational infrastructure that addresses this — as a dedicated technology layer within partner programmes.",
    ],
    capabilities: [
      {
        title: "Target Identification and Validation",
        body: "AI-driven analysis across multimodal biological datasets to surface and prioritise high-confidence, druggable targets — focusing resources where translational potential is strongest.",
      },
      {
        title: "Molecule Design and Optimisation",
        body: "Generative AI and synthesis-aware workflows for the design and iterative refinement of drug candidates — scored for potency, selectivity, and developability, with each cycle improving on the last.",
      },
      {
        title: "Development Intelligence",
        body: "Structured analysis of clinical landscapes, regulatory precedent, and competitive pipelines — enabling partners to build development strategies grounded in evidence and regulatory logic.",
      },
      {
        title: "Data Infrastructure",
        body: "Architecture and management of biological and chemical data assets — structured for machine learning readiness, regulatory compliance, and downstream commercialisation.",
      },
    ],
  },
  financialMarkets: {
    title: "Financial Markets",
    intro: [
      "The information required to source, evaluate, and manage private market investments has grown substantially in scale and complexity. Sustaining outperformance requires structural capability — intelligence embedded across the investment lifecycle, not applied selectively.",
    ],
    capabilities: [
      {
        title: "Deal Sourcing and Market Intelligence",
        body: "Continuous AI-driven mapping of markets and company landscapes — dynamic signals for emerging opportunities, sector momentum, and valuation benchmarks.",
      },
      {
        title: "Due Diligence",
        body: "Rapid, structured analysis of complex documentation sets. Pattern recognition across large volumes of material to surface risk signals and areas requiring deeper scrutiny — with outputs structured for investment committee review.",
      },
      {
        title: "Portfolio Monitoring",
        body: "Real-time visibility across portfolio company performance — financial, operational, and competitive — with early-signal detection for risk and value creation opportunities.",
      },
      {
        title: "Exit Readiness and Valuation Intelligence",
        body: "Predictive frameworks for exit timing and valuation positioning, alongside the documentation and compliance narrative that supports strong exit outcomes or capital raises.",
      },
      {
        title: "LP Reporting and Fund Intelligence",
        body: "Automated generation of LP reports, performance attributions, and portfolio summaries — improving consistency and reducing reporting overhead.",
      },
    ],
  },
};

export const ourModel = {
  intro:
    "Alyssum Labs occupies a specific and deliberate position: a technology intelligence partner that operates at programme level, with commercial structures aligned to long-term outcomes, and governance standards that reflect the seriousness of the environments in which we work.",
  howWeWork: [
    {
      title: "We begin with the programme.",
      body: "Every engagement starts with a thorough assessment of the programme context, the data landscape, and the intelligence architecture required. We build for the specific environment — not from a generic template.",
    },
    {
      title: "We build systems that improve.",
      body: "Every platform and workflow we deploy is designed for continuous learning. Programme data feeds back into the system, compounding its precision over time. The intelligence delivered at month twelve is measurably sharper than at month one.",
    },
    {
      title: "We structure every arrangement for durability.",
      body: "Commercial structures, documentation, and compliance architecture are established from the outset — with the rigour required for audit confidence, regulatory resilience, and, where relevant, readiness for funding events or exits.",
    },
  ],
  commercial: [
    {
      title: "Technology Licensing",
      body: "Proprietary AI platforms and workflows licensed to life sciences and financial markets organisations.",
    },
    {
      title: "Collaborative Technology Arrangements",
      body: "Structured partnerships in which Alyssum Labs shares in programme outcomes — through equity participation, milestone payments, or royalty-based returns — positioning the company as a long-term participant in the value its intelligence creates.",
      featured: true,
    },
    {
      title: "Programme Embedding",
      body: "Deep, ongoing integration of Alyssum Labs technology and process frameworks into partner operations — the model through which a transactional engagement becomes a strategic technology relationship.",
    },
  ],
};

export const whyAlyssum = {
  highlights: [
    "Technology built for the domain.",
    "Embedded, not delivered.",
    "Aligned for the long term.",
  ],
  positioning: [
    {
      title: "Technology built for the domain, not adapted to it.",
      body: "The systems Alyssum Labs builds are designed specifically for the data environments, decision structures, and regulatory contexts of life sciences and financial markets. Domain specificity is not a differentiator we claim — it is a prerequisite we take seriously.",
    },
    {
      title: "Embedded, not delivered.",
      body: "We integrate our intelligence frameworks into how our partners operate — into programmes, workflows, and decision architecture. The value compounds over time as systems learn, models improve, and the intelligence infrastructure becomes more deeply woven into the organisation.",
    },
    {
      title: "Aligned across the lifecycle.",
      body: "Through equity participation, milestone arrangements, and royalty-based structures, Alyssum Labs participates in the outcomes its technology enables. This alignment is deliberate — it shapes how we engage, how we build, and where we focus.",
    },
    {
      title: "Structured for the long term.",
      body: "Governance integrity, transfer pricing compliance, and documentation discipline are embedded into every arrangement from inception. Alyssum Labs is built as an institution designed to sustain and compound in value — across a 5–7 year horizon and beyond.",
    },
  ],
};

export const contact = {
  headline: "Work With Us.",
  email: "info@alyssumlabs.com",
  body: [
    "Alyssum Labs partners with organisations that are committed to placing intelligent technology at the structural centre of what they do — in life sciences, in financial markets, and at the intersection of both.",
    "We welcome approaches from pharmaceutical and biotech companies seeking to elevate their discovery and development capability, and from private equity and venture capital firms looking to embed AI-driven intelligence across their investment process.",
  ],
  interests: ["Life Sciences", "Financial Markets", "Other"] as const,
};

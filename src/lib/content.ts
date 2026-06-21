export const site = {
  name: "Alyssum Labs",
  legalName: "Alyssum Labs PTE Ltd",
  location: "Singapore",
  email: "info@alyssumlabs.com",
  registeredOfficeAddress: ["190 Middle Road, #12-07, Fortune Centre", "Singapore 188979"],
  uen: "202610112W",
  linkedinCompanyUrl: "",
  tagline: "Where Intelligence Meets Consequence.",
  description:
    "Singapore-based technology intelligence company embedding AI-driven systems into life sciences and private capital programmes.",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/our-approach", label: "Our Approach" },
  { href: "/insights", label: "Insights" },
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
      title: "Integrated into How You Operate",
      body: "Our intelligence frameworks become part of the operational fabric of the programmes we support — designed to extend, refine, and evolve in step with them.",
    },
    {
      title: "Built for Complexity",
      body: "We work where the data is most dense, the timelines most demanding, and the quality of intelligence most consequential.",
    },
  ],
  statement:
    "Alyssum Labs is a Singapore-headquartered technology intelligence company. We develop and deploy AI-driven systems and process frameworks across two sectors currently — life sciences and private capital — where the volume, velocity, and complexity of data has fundamentally outpaced conventional methods of analysis and decision-making.",
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
      id: "private-capital",
      title: "Private Capital",
      body: "Building the intelligent platforms that allow the private capital ecosystem to manage complex portfolios with structure, clarity, and confidence.",
      href: "/what-we-do#private-capital",
      image: "/images/financial-markets.png",
      accent: "pe" as const,
    },
  ],
};

export const about = {
  intro: [
    "Founded in 2026. Built for the institutional long term.",
    "Alyssum Labs PTE Ltd was established in Singapore as a technology intelligence company purpose-built for institutions whose work cannot be served well by general-purpose tools or transactional vendor relationships. Our role is to design and develop the AI-driven systems and process frameworks that allow such institutions to operate at the standard their work demands — with greater speed, greater precision, and greater reliability than would otherwise be available to them.",
    "The company was founded with a particular ambition: to be a technology partner of consequence to a specific, deliberately chosen set of organisations — one whose work shapes how their programmes function rather than serving them from the outside.",
  ],
  founder: {
    name: "Sarat Vakkalanka",
    linkedinUrl: "https://www.linkedin.com/in/sarat-vakkalanka/",
    bio: [
      "Sarat is the founder of Alyssum Labs, leading the company's direction across technology development, strategic partnerships, and institutional positioning.",
      "His background spans the design of intelligent systems and the application of advanced data techniques in complex operating environments — work shaped by both engineering rigour and the kind of considered judgement that programmes of consequence require.",
      "He established Alyssum Labs to address a specific gap: the absence of technology partners capable of operating at the structural centre of such programmes — not as external suppliers of tools, but as builders whose contribution defines how the programmes function and evolve.",
      "He holds a Master's in Information Systems and Management from Carnegie Mellon University.",
    ],
    portrait: "/images/sarat-headshot.png",
    portraitWidth: 1066,
    portraitHeight: 1052,
  },
  foundation: [
    {
      title: "Singapore Headquarters",
      body: "Alyssum Labs is headquartered in Singapore — a jurisdiction recognised for the calibre of its regulatory frameworks, its institutional depth in life sciences and private capital, and its position as a strategic gateway between Asian and global markets.",
    },
    {
      title: "Governance by Design",
      body: "Every commercial arrangement, technology system, and operational structure is established with compliance, documentation integrity, and audit readiness as foundational design parameters, rather than as functions retrofitted at later stages.",
    },
    {
      title: "Built to Last",
      body: "The company is structured for institutional longevity. Capability deepens through every programme we engage with, partnership we form, and platform we develop — building the kind of institutional depth that sustains the work beyond any single engagement.",
    },
  ],
};

export const whatWeDo = {
  intro:
    "What Alyssum Labs delivers, across two sectors currently, is the technology layer that allows partner programmes to operate at higher precision, greater speed, and the kind of reliability that complex work demands. The capabilities below describe what that layer looks like in practice — in life sciences, and in private capital.",
  lifeSciences: {
    title: "Life Sciences",
    intro: [
      "Drug discovery and development now produces data at a scale that has overtaken conventional analytical methods. The ability to interrogate large multimodal datasets — quickly, precisely, and reliably — has become as critical to programme success as the underlying science.",
      "Alyssum Labs provides the computational infrastructure that meets this requirement, designed into partner programmes from the outset.",
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
  privateCapital: {
    title: "Private Capital",
    intro: [
      "Private capital runs on the depth and timeliness of the information available to it. As portfolios diversify across stages, geographies, and asset types, the technology supporting this ecosystem has to keep pace.",
      "Alyssum Labs acts as an embedded technology development partner to this sector, building the platforms that allow participants to manage complex portfolios with structure, clarity, and confidence.",
    ],
    capabilities: [
      {
        title: "Platform Architecture",
        body: "Designing the technology foundations of portfolio intelligence platforms — built to handle the data heterogeneity, reporting demands, and stage diversity that characterise private capital portfolios.",
      },
      {
        title: "Portfolio Intelligence Systems",
        body: "Development of integrated systems for performance tracking, valuation views, and portfolio-level analysis — designed for the structural realities of private holdings, where data is often fragmented and update cycles are irregular.",
      },
      {
        title: "Workflow and Reporting Capability",
        body: "Engineering of workflows that bring consistency to how investments are tracked, reviewed, and reported on — across geographies, asset stages, and investor types.",
      },
      {
        title: "Continuous Capability Development",
        body: "Ongoing development to extend platform capability as the private capital ecosystem evolves — new asset types, new analytical needs, new participant profiles.",
      },
    ],
  },
};

export const ourApproach = {
  intro:
    "The way Alyssum Labs operates is shaped by what technology work in our chosen industries actually require: a thorough understanding of the programme before engagement begins, systems that improve through use rather than degrade, and commercial arrangements designed to sustain the work over time rather than only to begin it. The sections below describe how this becomes operational practice — what differentiates our work, how we deliver it, and what it is oriented toward.",
  differentiators: [
    {
      title: "Technology built for the domain, not adapted to it.",
      body: "The systems we develop are designed against the specific data environments, decision structures, and regulatory contexts of the industries we serve. Domain specificity, in our work, is treated as a precondition rather than as a feature — and it is reflected in how systems are architected, validated, and refined.",
    },
    {
      title: "Engineering depth over surface intelligence.",
      body: "Our work is grounded in the engineering layer beneath the intelligence — the data architecture, computational frameworks, and integration logic that determine whether an AI system performs reliably within a serious operational environment. This depth is what allows our solutions to remain dependable as programmes scale and evolve.",
    },
    {
      title: "Selective by design.",
      body: "We work with a deliberately limited number of partners at any given time. The discipline of selectivity is what allows us to bring the depth of attention, technical resource, and institutional commitment that serious programmes require.",
    },
    {
      title: "Led by senior, sector-specific judgement.",
      body: "Alyssum Labs is led by individuals whose work has historically operated at the structural centre of complex, high-stakes programmes. This depth of judgement informs every engagement — in how problems are scoped, how solutions are designed, and how partnerships are sustained.",
    },
  ],
  howWeWork: [
    {
      title: "We begin with the programme.",
      body: "Each engagement is preceded by a structured assessment of the programme context, the underlying data landscape, and the intelligence architecture required to address it. Solutions are designed against the specific environment in which they will operate, rather than adapted from generalised templates.",
    },
    {
      title: "We build systems that improve.",
      body: "The platforms and workflows we deploy are engineered for continuous learning. Programme data informs and refines the system over time, with the result that the intelligence delivered at later stages is materially more precise than at the point of initial deployment.",
    },
    {
      title: "We structure every arrangement for durability.",
      body: "Commercial structures, documentation, and compliance architecture are established at the outset of every engagement — designed to meet the standards of audit confidence, regulatory resilience, and, where relevant, the readiness required for downstream funding events or transitions.",
    },
  ],
  howWeEngage: [
    {
      title: "Programme-Level Partnership",
      body: "Alyssum Labs works at the level of programmes, not point projects. Engagements are structured around objectives that extend across timelines and across functional boundaries — with the corresponding depth of involvement and continuity of attention.",
    },
    {
      title: "Continuous Development",
      body: "Our work with partners does not conclude at deployment. Platforms evolve, requirements shift, and the technology we build is structured to be extended, refined, and expanded in step with the programmes it supports.",
    },
    {
      title: "Working as Capability, Not Supplier",
      body: "Within each engagement, we operate as an extension of our partners' own technology and strategy function — bringing specialist depth without the friction or distance of an external supplier relationship.",
    },
  ],
  outcomes: {
    framing:
      "Our engagements are structured for what they are designed to achieve over time — not for what is delivered at the start.",
    items: [
      {
        title: "Long-Term",
        body: "Engagements built for trajectory, not transaction.",
      },
      {
        title: "Outcome-Linked",
        body: "Commercial arrangements that move with what we build.",
      },
      {
        title: "Compounding",
        body: "Value that deepens as platforms and partnerships mature.",
      },
    ],
  },
};

export const contact = {
  headline: "Work With Us.",
  email: "info@alyssumlabs.com",
  body: [
    "Alyssum Labs partners with organisations that are committed to placing intelligent technology at the structural centre of what they do — in life sciences, in private capital, and at the intersection of both.",
    "We welcome approaches from pharmaceutical and biotech companies seeking to elevate their discovery and development capability, and from organisations across the private capital ecosystem seeking to embed sophisticated technology infrastructure within their portfolio management.",
  ],
  mapQuery: "190 Middle Road, Fortune Centre, Singapore 188979",
  interests: ["Life Sciences", "Private Capital", "Other"] as const,
};

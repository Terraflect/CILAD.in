export interface DocumentSection {
  id: string;
  heading: string;
  paragraphs: string[];
  listItems?: string[];
  orderedList?: boolean;
  closingParagraphs?: string[];
  highlightBox?: {
    tag?: string;
    source?: string;
    title: string;
    url: string;
    description?: string;
  };
  quote?: {
    text: string;
    attribution: string;
  };
  table?: {
    caption?: string;
    headers: string[];
    rows: string[][];
  };
}

export interface CiladAuthor {
  name: string;
  affiliation: string;
  bio?: string;
}

export interface CiladPublication {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  authors: CiladAuthor[];
  date: string;
  isoDate?: string;
  updatedDate?: string;
  year: string;
  sortOrder: number;
  status: "published" | "draft";
  format:
    | "Periodical Digest"
    | "Workshop Proceedings"
    | "Research Scope Brief"
    | "Editorial Charter"
    | "Scholarly Article";
  category: string;
  tags: string[];
  readingTimeMinutes: number;
  excerpt: string;
  featured?: boolean;
  isSymposium?: boolean;
  externalUrl?: string;
  coverImage?: string;
  coverCaption?: string;
  keyInstruments: string[];
  sections: DocumentSection[];
  footnotes: string[];
  relatedSlugs?: string[];
}

export interface ResearchArea {
  index: string;
  slug: string;
  title: string;
  shortTitle: string;
  desc: string;
  cluster: "Public & Governance" | "Economic & Maritime" | "Rights & Humanitarian";
  keyInstruments: string[];
  tribunalsAndForums: string[];
  focusScope: string;
}

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    index: "01",
    slug: "international-trade-law",
    title: "International Trade Law",
    shortTitle: "Trade & Economic Law",
    desc: "Analyzing the legal architecture of the global economy and cross-border trade disputes.",
    cluster: "Economic & Maritime",
    keyInstruments: [
      "Marrakesh Agreement Establishing the WTO",
      "General Agreement on Tariffs and Trade (GATT)",
      "General Agreement on Trade in Services (GATS)",
      "TRIPS Agreement & Regional Free Trade Agreements",
    ],
    tribunalsAndForums: ["WTO Dispute Settlement Body", "UNCITRAL", "CTIL"],
    focusScope:
      "Examines multilateral trade rules, appellate dispute settlement mechanisms, non-tariff barriers, supply-chain regulation, and developing-nation trade remedies.",
  },
  {
    index: "02",
    slug: "international-environmental-law",
    title: "International Environmental Law",
    shortTitle: "Environmental Law",
    desc: "Addressing climate change, biodiversity, and sustainable development treaties.",
    cluster: "Public & Governance",
    keyInstruments: [
      "UN Framework Convention on Climate Change (UNFCCC)",
      "Paris Agreement",
      "Convention on Biological Diversity (CBD)",
      "Stockholm & Rio Declarations",
    ],
    tribunalsAndForums: ["ICJ Advisory Proceedings", "ITLOS", "UNEP"],
    focusScope:
      "Investigates transboundary environmental harm, climate finance obligations, loss and damage frameworks, and international judicial advisory opinions on state climate obligations.",
  },
  {
    index: "03",
    slug: "refugee-law",
    title: "Refugee Law",
    shortTitle: "Refugee & Asylum Law",
    desc: "Examining legal protections and international frameworks for displaced persons.",
    cluster: "Rights & Humanitarian",
    keyInstruments: [
      "1951 Convention Relating to the Status of Refugees",
      "1967 Protocol",
      "Customary Principle of Non-Refoulement",
    ],
    tribunalsAndForums: [
      "UNHCR",
      "Domestic Constitutional Courts",
      "Regional Human Rights Commissions",
    ],
    focusScope:
      "Studies asylum adjudication, statelessness, climate-induced displacement, and regional protection frameworks in South Asia and the Global South.",
  },
  {
    index: "04",
    slug: "international-humanitarian-law",
    title: "International Humanitarian Law",
    shortTitle: "Humanitarian Law (IHL)",
    desc: "Investigating the protection of individuals in peacetime and armed conflict.",
    cluster: "Rights & Humanitarian",
    keyInstruments: [
      "1949 Geneva Conventions (I–IV)",
      "1977 Additional Protocols I & II",
      "1998 Rome Statute of the International Criminal Court",
    ],
    tribunalsAndForums: [
      "International Criminal Court (ICC)",
      "ICRC",
      "Ad Hoc International Tribunals",
    ],
    focusScope:
      "Evaluates the conduct of hostilities, protection of civilians and medical personnel, autonomous weapon systems, and accountability for serious violations of humanitarian norms.",
  },
  {
    index: "05",
    slug: "global-governance-and-policy",
    title: "Global Governance & Policy",
    shortTitle: "Global Governance",
    desc: "Studying institutional frameworks and policies shaping state interactions.",
    cluster: "Public & Governance",
    keyInstruments: [
      "Charter of the United Nations",
      "1969 Vienna Convention on the Law of Treaties (VCLT)",
      "ILC Articles on Responsibility of States for Internationally Wrongful Acts",
    ],
    tribunalsAndForums: [
      "UN General Assembly & Sixth Committee",
      "International Law Commission (ILC)",
    ],
    focusScope:
      "Explores sovereign equality, multilateral institutional reform, unilateral sanctions regimes, diplomatic immunities, and the role of non-state actors in norm creation.",
  },
  {
    index: "06",
    slug: "human-rights-law",
    title: "Human Rights Law",
    shortTitle: "Human Rights Law",
    desc: "Addressing contemporary human rights crises and international legal protections.",
    cluster: "Rights & Humanitarian",
    keyInstruments: [
      "Universal Declaration of Human Rights (UDHR)",
      "International Covenant on Civil and Political Rights (ICCPR)",
      "International Covenant on Economic, Social and Cultural Rights (ICESCR)",
    ],
    tribunalsAndForums: [
      "UN Human Rights Council",
      "UN Treaty Bodies",
      "Special Procedures",
    ],
    focusScope:
      "Focuses on civil, political, and socio-economic rights enforcement, extraterritorial human rights obligations, business and human rights, and digital rights governance.",
  },
  {
    index: "07",
    slug: "law-of-the-sea",
    title: "Law of the Sea",
    shortTitle: "Law of the Sea",
    desc: "Exploring legal frameworks governing maritime jurisdictions and oceanic resources.",
    cluster: "Economic & Maritime",
    keyInstruments: [
      "1982 United Nations Convention on the Law of the Sea (UNCLOS)",
      "BBNJ Agreement on Marine Biological Diversity of Areas Beyond National Jurisdiction",
      "1994 Implementation Agreement on Part XI",
    ],
    tribunalsAndForums: [
      "International Tribunal for the Law of the Sea (ITLOS)",
      "ISA",
      "PCA Annex VII Tribunals",
    ],
    focusScope:
      "Covers maritime boundary delimitation, exclusive economic zones, continental shelf claims, deep-seabed mining regulations, and freedom of navigation.",
  },
  {
    index: "08",
    slug: "dispute-settlement",
    title: "Dispute Settlement",
    shortTitle: "Dispute Settlement",
    desc: "Examining mechanisms for resolving conflicts between states and non-state actors.",
    cluster: "Public & Governance",
    keyInstruments: [
      "Statute of the International Court of Justice",
      "PCA Arbitration Rules",
      "1965 ICSID Convention",
      "1958 New York Convention",
    ],
    tribunalsAndForums: [
      "International Court of Justice (ICJ)",
      "Permanent Court of Arbitration (PCA)",
      "ICSID",
    ],
    focusScope:
      "Analyzes peaceful settlement of international disputes, interstate arbitration, investor-state dispute settlement (ISDS) reform, and provisional measures jurisprudence.",
  },
];

export interface IssueArticle {
  number: number;
  slug: string;
  title: string;
  author: string;
  authorAffiliation: string;
  pages: string;
  category: string;
  abstract: string;
  date?: string;
  isoDate?: string;
}

export const CILAD_MONTHLY_ISSUE_1_DATA = {
  title: "CILAD Monthly — Issue 1",
  edition: "Inaugural Edition · November 2025",
  institution: "Damodaram Sanjivayya National Law University, Visakhapatnam",
  centre: "Centre for International Law and Allied Disciplines (CILAD)",
  managingEditor: "S. Phanitawya",
  editorialBoard: {
    honoraryEditor: "Prof. D. Surya Prakasa Rao (Vice-Chancellor, DSNLU)",
    honoraryChairperson: "Dr. Ch. Lakshmi",
    facultyMembers: [
      "Dr. B. Neelima",
      "Dr. Kiran Kumari",
      "Ms. Sherley Hepsiba D",
      "Ms. Gali Parivartana",
    ],
    convenor: "Sourav Ghosh",
    coConvenor: "Atharv Arnav",
    managingEditor: "S. Phanitawya",
    editors: [
      "Kaushik Sharma",
      "Abhyuday Mishra",
      "Shushruth Aanikanti",
      "Sai Jahnavi K.",
      "Shashwat Sinha",
      "Subham Kundu",
      "Ruwa Muneer Ahmed",
      "Zohaa Siddiqui",
      "Nitin Raj",
      "Gangotri Kumari",
      "Rishank Mehrotra",
      "Abhinav Singh",
      "Anshika Suryavansh",
      "Lakshmi Nitya",
      "Vishesh Paliwal",
      "Ayush Kashyap",
      "Kumkum Upadhyay",
      "Jaljakshi Singh",
    ],
  },
  editorNote:
    "As Managing Editor, I am pleased to present the inaugural issue of CILAD Monthly. This publication has been established as a dedicated academic platform to encourage structured and rigorous engagement in the field of International Law. As our first edition, particular care was taken to ensure that the standards adopted at the outset reflect the seriousness with which we approach this initiative. Each submission underwent a structured review process assessing substantive merit, analytical clarity, originality, and compliance with citation and formatting norms.",
  articles: [
    {
      number: 1,
      slug: "environmental-exceptions-or-hidden-protectionism-wto-palm-oil",
      title:
        "Environmental Exceptions or Hidden Protectionism? A Critique of the WTO’s Palm Oil Panel Reports",
      author: "Hargun Dang",
      authorAffiliation:
        "Student at the University of Petroleum and Energy Studies",
      pages: "1–6",
      category: "International Trade & Environmental Law",
      date: "5 November 2025",
      isoDate: "2025-11-05",
      abstract:
        "Analyzes the disparities between WTO DS600 and DS593 regarding EU Renewable Energy Directive (RED II) palm oil biofuel restrictions, examining analytical gaps in environmental jurisprudence, indirect land-use change (ILUC), developing nation impacts, and GATT Article XX exceptions.",
    },
    {
      number: 2,
      slug: "interplay-of-risk-assessment-non-discrimination-wto-sps-measures",
      title:
        "The Interplay of Risk Assessment, Non-Discrimination, and Provisional Safeguards in WTO SPS Measures: Exploring the Synergies Between Articles 5.1, 5.5, and 5.7",
      author: "Arpit Jain",
      authorAffiliation: "3rd Year Law Student at Lloyd Law College",
      pages: "7–11",
      category: "WTO Law & Dispute Settlement",
      date: "10 November 2025",
      isoDate: "2025-11-10",
      abstract:
        "Explores the synergies between Articles 5.1, 5.5, and 5.7 of the WTO SPS Agreement, analyzing how risk assessments inform non-discriminatory appropriate levels of protection (ALOP) and how provisional safeguards bridge scientific uncertainty without undermining legal rigor.",
    },
    {
      number: 3,
      slug: "global-models-uniform-civil-codes-indian-debate-comparative-lessons",
      title:
        "Global Models of Uniform Civil Codes and the Indian Debate: Lessons from Comparative Experiences",
      author: "Shourya Parihar",
      authorAffiliation:
        "4th Year Law Student at VIPS, Guru Gobind Singh Indraprastha University, New Delhi",
      pages: "12–15",
      category: "Comparative Law & Constitutional Jurisprudence",
      date: "15 November 2025",
      isoDate: "2025-11-15",
      abstract:
        "Examines comparative models of uniform civil codes across Goa (Portuguese Civil Code of 1867), Turkey (Kemalist reforms), Tunisia (Code of Personal Status 1956), and France, drawing critical lessons for India's Article 44 discourse and emphasizing substantive equality over mechanical uniformity.",
    },
    {
      number: 4,
      slug: "rise-of-algorithmic-trade-barriers-digital-trade-governance-ai",
      title:
        "The Rise of Algorithmic Trade Barriers: Rethinking Digital Trade Governance in the AI Era",
      author: "Ananya Chauhan",
      authorAffiliation: "Final-Year Law Student at Amity University",
      pages: "16–21",
      category: "Technology Law & Digital Trade",
      date: "20 November 2025",
      isoDate: "2025-11-20",
      abstract:
        "Investigates the emergence of algorithmic trade barriers in the multi-trillion dollar digital trade economy, evaluating WTO law limitations, private platform power, cross-border data flows in CPTPP/USMCA/DEPA, and proposing Algorithmic Impact Assessments and regulatory sandboxes.",
    },
    {
      number: 5,
      slug: "reframing-extradition-nelson-mandela-rules-human-rights-guarantees",
      title:
        "Reframing Extradition: The Nelson Mandela Rules and the Judicial Construction of Human Rights Guarantees",
      author: "Vallimireddy Abhinav Deep Dora and (Prof.) Dr. V. Vijay",
      authorAffiliation:
        "Research Scholar at Andhra University & Assistant Professor at Vignan Institute of Law; Former Principal, Dr. B.R. Ambedkar College of Law, Andhra University",
      pages: "22–28",
      category: "Human Rights & Extradition Law",
      date: "25 November 2025",
      isoDate: "2025-11-25",
      abstract:
        "Examines how the UN Standard Minimum Rules for the Treatment of Prisoners (Nelson Mandela Rules) have operationalized the absolute prohibition of torture and non-refoulement under CAT Article 3 and ECHR Article 3 in extradition proceedings, transforming soft law standards into judicial benchmarks for evaluating diplomatic assurances.",
    },
  ],
};

export const CILAD_PUBLICATIONS: CiladPublication[] = [
  {
    id: "cilad-monthly-issue-1",
    slug: "cilad-monthly-issue-1-november-2025",
    title: "CILAD Monthly — Issue 1 (Inaugural Edition)",
    subtitle:
      "Inaugural Issue · November 2025 · Centre for International Law and Allied Disciplines (CILAD), DSNLU",
    authors: [
      {
        name: "S. Phanitawya (Managing Editor)",
        affiliation: "Managing Editor, CILAD Monthly · DSNLU Visakhapatnam",
        bio: "Managing Editor for the inaugural edition of CILAD Monthly, guiding junior and senior editors through structured substantive reviews.",
      },
      {
        name: "Prof. D. Surya Prakasa Rao (Honorary Editor)",
        affiliation: "Vice-Chancellor, Damodaram Sanjivayya National Law University",
        bio: "Patron & Vice Chancellor of DSNLU, serving as Honorary Editor for CILAD Monthly.",
      },
    ],
    date: "Issue 1 · November 2025",
    isoDate: "2025-11-01",
    year: "2025",
    sortOrder: 150,
    status: "published",
    format: "Periodical Digest",
    category: "Public International Law",
    tags: [
      "CILAD Monthly",
      "Inaugural Edition",
      "WTO Law",
      "Human Rights",
      "Comparative Law",
      "Digital Trade",
    ],
    readingTimeMinutes: 25,
    featured: true,
    externalUrl: "https://mega.nz/file/hQECES4K#Xy19MInSkyk8jTPMFm6qePz91__MPFDDblvnM5-P8Xs",
    excerpt:
      "The inaugural edition of CILAD Monthly (Issue 1, November 2025) published under the aegis of CILAD at DSNLU Visakhapatnam, featuring five peer-reviewed scholarly articles on WTO palm oil disputes, SPS measures, comparative uniform civil codes, algorithmic trade barriers, and the Nelson Mandela Rules in extradition law.",
    keyInstruments: [
      "WTO Agreements (GATT 1994, SPS Agreement, TBT Agreement)",
      "UN Standard Minimum Rules for the Treatment of Prisoners (Nelson Mandela Rules)",
      "Convention Against Torture (CAT Article 3) & ECHR Article 3",
      "Constitution of India Article 44 & Comparative Civil Codes",
    ],
    relatedSlugs: [
      "cilad-monthly-analytical-bulletin",
      "beyond-borders-2-careers-and-trends-in-international-law",
    ],
    sections: [
      {
        id: "editors-note",
        heading: "Editor's Note — Inaugural Issue",
        paragraphs: [
          "As Managing Editor, I am pleased to present the inaugural issue of CILAD Monthly. This publication has been established as a dedicated academic platform to encourage structured and rigorous engagement in the field of International Law.",
          "As our first edition, particular care was taken to ensure that the standards adopted at the outset reflect the seriousness with which we approach this initiative. Each submission underwent a structured review process assessing substantive merit, analytical clarity, originality, and compliance with citation and formatting norms.",
          "Bringing this issue to publication required consistent effort from the editorial team. I extend my sincere appreciation to our Junior and Senior Editors for their diligence and thoughtful review of each manuscript. I also acknowledge the support of the Convenor of CILAD in guiding this initiative. I further thank our contributors for their cooperation and patience throughout the process.",
          "With this inaugural edition, CILAD Monthly sets the foundation for the academic discipline, consistency, and integrity we intend to maintain in future issues. We trust that the scholarship presented herein will contribute meaningfully to discussions in International Law.",
        ],
        quote: {
          text: "With this inaugural edition, CILAD Monthly sets the foundation for the academic discipline, consistency, and integrity we intend to maintain in future issues.",
          attribution: "S. Phanitawya, Managing Editor, CILAD Monthly Issue 1",
        },
      },
      {
        id: "issue-index",
        heading: "Table of Contents & Scholarly Contributions",
        paragraphs: [
          "Issue 1 compiles five peer-reviewed scholarly articles spanning international economic law, public health regulation, comparative civil codes, emerging digital trade governance, and international extradition law:",
        ],
        table: {
          caption: "CILAD Monthly Issue 1 (November 2025) — Index of Articles",
          headers: ["No.", "Article Title", "Author(s)", "Institutional Affiliation", "Pages"],
          rows: [
            [
              "1",
              "Environmental Exceptions or Hidden Protectionism? A Critique of the WTO’s Palm Oil Panel Reports",
              "Hargun Dang",
              "University of Petroleum and Energy Studies",
              "pp. 1–6",
            ],
            [
              "2",
              "The Interplay of Risk Assessment, Non-Discrimination, and Provisional Safeguards in WTO SPS Measures",
              "Arpit Jain",
              "Lloyd Law College",
              "pp. 7–11",
            ],
            [
              "3",
              "Global Models of Uniform Civil Codes and the Indian Debate: Lessons from Comparative Experiences",
              "Shourya Parihar",
              "VIPS, Guru Gobind Singh Indraprastha University",
              "pp. 12–15",
            ],
            [
              "4",
              "The Rise of Algorithmic Trade Barriers: Rethinking Digital Trade Governance in the AI Era",
              "Ananya Chauhan",
              "Amity University",
              "pp. 16–21",
            ],
            [
              "5",
              "Reframing Extradition: The Nelson Mandela Rules and the Judicial Construction of Human Rights Guarantees",
              "Vallimireddy Abhinav Deep Dora & (Prof.) Dr. V. Vijay",
              "Andhra University & Vignan Institute of Law",
              "pp. 22–28",
            ],
          ],
        },
      },
      {
        id: "editorial-governance",
        heading: "Editorial Board & Governance — Issue 1",
        paragraphs: [
          "Honorary Editor: Prof. D. Surya Prakasa Rao (Vice-Chancellor, DSNLU)",
          "Honorary Chairperson, CILAD: Dr. Ch. Lakshmi",
          "Faculty Members of CILAD: Dr. B. Neelima, Dr. Kiran Kumari, Ms. Sherley Hepsiba D, Ms. Gali Parivartana",
          "Student Editors: Sourav Ghosh (Convenor CILAD), Atharv Arnav (Co-Convenor CILAD), S. Phanitawya (Managing Editor)",
          "Junior & Senior Editors: Kaushik Sharma, Abhyuday Mishra, Shushruth Aanikanti, Sai Jahnavi K., Shashwat Sinha, Subham Kundu, Ruwa Muneer Ahmed, Zohaa Siddiqui, Nitin Raj, Gangotri Kumari, Rishank Mehrotra, Abhinav Singh, Anshika Suryavansh, Lakshmi Nitya, Vishesh Paliwal, Ayush Kashyap, Kumkum Upadhyay, Jaljakshi Singh.",
        ],
      },
    ],
    footnotes: [
      "Official Publication Record: CILAD Monthly Issue 1 (November 2025), Damodaram Sanjivayya National Law University, Visakhapatnam, Andhra Pradesh.",
      "Repository Location: Centre for International Law and Allied Disciplines, DSNLU Visakhapatnam.",
    ],
  },
  {
    id: "wto-palm-oil-panel-reports",
    slug: "environmental-exceptions-or-hidden-protectionism-wto-palm-oil",
    title:
      "Environmental Exceptions or Hidden Protectionism? A Critique of the WTO’s Palm Oil Panel Reports",
    subtitle:
      "Disparities Between WTO DS600 and DS593 on EU RED II Palm Oil Biofuel Restrictions",
    authors: [
      {
        name: "Hargun Dang",
        affiliation: "University of Petroleum and Energy Studies",
        bio: "Hargun Dang is a law student at the University of Petroleum and Energy Studies with research focus on international trade law, environmental jurisprudence, and sustainable development.",
      },
    ],
    date: "Issue 1 · November 2025",
    isoDate: "2025-11-05",
    year: "2025",
    sortOrder: 145,
    status: "published",
    format: "Scholarly Article",
    category: "International Trade Law",
    tags: [
      "WTO Law",
      "International Trade and Investment Law",
      "Environmental Exceptions",
      "GATT Article XX",
      "Palm Oil Disputes",
      "TBT Agreement",
    ],
    readingTimeMinutes: 7,
    featured: true,
    excerpt:
      "A doctrinal analysis of the disparities between WTO DS600 and DS593 concerning the EU's Renewable Energy Directive (RED II) palm oil biofuel restrictions, critiquing analytical gaps in environmental jurisprudence, indirect land-use change (ILUC), and developing nation impacts.",
    keyInstruments: [
      "Panel Report, EU — Palm Oil (Malaysia), WT/DS600/R (Mar. 5, 2024)",
      "Panel Report, EU — Palm Oil (Indonesia), WT/DS593/R (Jan. 10, 2025)",
      "EU Renewable Energy Directive II (Directive 2018/2001 - RED II)",
      "GATT 1994 Articles I, III, XI, XX(b), and XX(g)",
      "TBT Agreement Articles 2.1, 2.2, 5.1, and 12 (Special & Differential Treatment)",
    ],
    relatedSlugs: [
      "cilad-monthly-issue-1-november-2025",
      "interplay-of-risk-assessment-non-discrimination-wto-sps-measures",
    ],
    sections: [
      {
        id: "intro-heart-of-disputes",
        heading: "1. The Heart of the Disputes & Regulatory Context",
        paragraphs: [
          "This article examines the disparities between WTO DS600 and DS593. Both matters concern the palm oil biofuel restrictions of the EU pursuant to the Renewable Energy Directive (RED II), raised by Malaysia and Indonesia. It deals with the panel reports’ shortcomings, published on March 5, 2024, for DS600 and January 10, 2025, for DS593, dealing with analytical gaps in environmental jurisprudence, aid for developing nations, and trade exception, while proposing a way forward for more detailed future rulings to harmonize climate action with fair trade.",
          "The core issue here concerns an effort of the EU to phase palm oil out of use in biofuels over fears of Indirect Land-Use Change (ILUC), wherein crop shifts cause unintended deforestation. While RED II purports to be a neutral environmental regulation, the 7% threshold and high-ILUC risk designation for palm oil act as a proxy for protectionism. By utilizing European-centric models (like GTAP) that fail to account for the superior land-yield efficiency of tropical crops, the EU creates a technical barrier that disproportionately burdens developing-nation exporters while shielding domestic producers, with palm oil marked as high ILUC risk due to its expansion on peatlands and biodiverse areas. A 2019 Delegated Act mandates phasing out biofuels from high-expansion crops (e.g., palm oil above 1.7%) by 2030 unless certified as low-risk with no recent land conversion.",
          "While the EU argued its actions were rooted in climate goals, defending these as science-based under GATT Article XX(b) (protecting human health via GHG cuts) and XX(g) (conserving exhaustible resources like forests), citing models showing palm oil’s 65 gCO2/MJ emissions versus rapeseed’s lower footprint of around 20-40 gCO2/MJ, the complainants contended that the measures were discriminatory, protectionist, and non-conforming with WTO rules. Specifically, palm oil—which represents 40% of global vegetable oil—when compared with soy or rapeseed faced stricter limits, breaching GATT Art. I (MFN, by not treating like products equally), Art. III (national treatment, by favouring EU producers), and Art. XI (banning quotas). Under the Technical Barriers to Trade (TBT) Agreement, they claimed violations of Article 2.1 (arbitrary distinctions), Art. 2.2 (unnecessary trade restrictions), and Art. 12 (failing S&DT).",
          "Protectionism allegations were based on EU subsidies funding domestic crops, with ILUC thresholds built to exclude imports; for example, palm oil’s high expansion factor ignored its superior yields (3–4 tons/hectare vs. soy’s 0.7 or rapeseed’s 0.8 tons/hectare). The report did not distinguish between environmental protection and hidden protectionism. By failing to probe the proportionality and necessity of the EU’s measures, the Panel risked legitimizing unilateral actions disguised as environmental policy.",
          "The Panels provisionally justified the goals of the EU but struck down specific operational aspects: in DS600, ILUC reviews and vague certifications were held to violate TBT 5.1 (conformity assessment) and GATT X:3(a) (fair administration). In DS593, the panel reiterated this while adding French tax exclusions as arbitrary under the Article XX chapeau. Still, the rulings leaned toward EU intent, prompting scrutiny of their depth.",
        ],
      },
      {
        id: "flaws-methodological-bias",
        heading: "2. Flaws in the Panel Reports: Implementation Gaps and Methodological Bias",
        paragraphs: [
          "Upon dissecting the reports, several interconnected weaknesses surface, starting with RED II’s core functioning and extending to broader WTO principles. These lapses not only undermine credibility but also tilt outcomes toward wealthier members.",
          "RED II forms the disputes’ backbone, yet panels critiqued its rollout without examining foundational biases. This ILUC methodology is based on European models like the GTAP (Global Trade Analysis Project) database, which assumes expansion factors derived from Europe (i.e., assuming uniform 10–20% cropland shifts) that do not properly credit tropical efficiencies, virtually classifying all palm oil as high-risk within the logic, although clear lands are preserved and yields remain stable.",
          "Panels noted certification inoperability until 2022, granted the need for proof of 'financial additionality' (extra investment beyond business as usual) or smallholder status (<2 hectares), but intentionally ignored 16 million small farmers in Indonesia and Malaysia who carry compliance costs hitting $500–$1,000 per farm annually.",
          "Additionally, the reports accepted 'probable risk' proxies from IPCC data without mandating site-specific validation, ignoring palm oil’s lower direct emissions (12–20 gCO2/MJ with good practices). This points toward protectionism, as EU vegetable oils evade similar scrutiny despite ILUC from set-aside conversions. Without a detailed analysis of the necessity behind RED II’s delegated act—such as assessing whether adjusted thresholds (e.g., Indonesia’s 0.5% cap proposal) could achieve 80% of emission savings—the panels justified a framework that economic models indicate could reduce exporter revenues by €2–3 billion annually without creating proportional global climate gains.",
        ],
      },
      {
        id: "overlooked-sdt-obligations",
        heading: "3. Overlooked Obligations for Developing Economies",
        paragraphs: [
          "TBT Agreement Article 12 promises Special and Differential Treatment (S&DT), including extended comment periods and tailored assessments for developing countries. The Panels found EU consultations (e.g., via trade sustainability dialogues) adequate, citing smallholder exemptions. However, there was no quantitative impact analysis of national GDP shocks—palm oil accounts for 4.5% of Malaysia’s exports, contributing over 2% to its national GDP and supporting 3 million livelihoods.",
          "The Panels’ failure to quantitatively analyse Malaysia’s GDP impact violates Article 12 of the TBT Agreement. By reducing S&DT to mere formal consultation, the dispute settlement system rendered it performative and undermined the WTO’s foundational commitment to fair trade for developing economies.",
          "This superficiality perpetuates structural inequities: developed nations impose extraterritorial environmental criteria without mandatory technology transfers, such as ILUC monitoring tools. The Panels could have invoked landmark precedents such as US–Shrimp, which mandated good-faith multilateral negotiations and technology accommodations. Instead, they reinforced a regime where S&DT feels hollow, eroding trust among developing and least-developed members.",
        ],
      },
      {
        id: "exceptions-and-alternatives",
        heading: "4. Cursory Review of Exceptions and International Standards",
        paragraphs: [
          "Article XX of GATT offers defences for environmental measures, but the panels’ chapeau analysis—testing for arbitrary discrimination and disguised restrictions—was demonstrably rushed. While provisional justifications were held under paragraphs (b) and (g), procedural flaws such as delayed data reviews (the 2019 ILUC update was postponed to 2023) triggered structural failures.",
          "Critically, the panel reports omitted deep alternatives scrutiny and overlooked recognized international standards such as the Roundtable on Sustainable Palm Oil (RSPO) schemes. RSPO mandates strict no-deforestation policies after November 2018, free prior and informed consent (FPIC) for indigenous lands, and biodiversity preservation verified across 30+ principles audited annually.",
          "Under Article XX(b), the Panels should have assessed whether RSPO or Indonesian/Malaysian Sustainable Palm Oil (MSPO/ISPO) schemes, requiring no-deforestation with annual audits, constituted less trade-restrictive alternatives. Dismissing these as merely 'complementary' endorsed unilateralism over international harmonization.",
          "In DS600, panels viewed RSPO as complementary rather than equivalent, skipping harmonization disciplines under TBT Agreement Article 2.4. In DS593, the panel rejected ISO 14067 (carbon footprinting) relevance for ILUC, yet failed to explore hybrids—such as RSPO plus EU audits yielding 95% verification rates. This cursory approach risks greenwashing by validating unilateral measures without strict proportionality tests.",
        ],
      },
      {
        id: "enhancing-analytical-rigor",
        heading: "5. Enhancing WTO Analytical Rigor & Blueprint for Reform",
        paragraphs: [
          "To address these systemic flaws, future WTO panels must evolve beyond binary rulings through three concrete reforms:",
          "First, integrating mandatory impact assessments under S&DT (as established in Tuna–Dolphin II), coupled with enforceable remedies such as capacity-building funds (analogous to the €500M EU-wide precedent).",
          "Second, deepening alternatives evaluation by testing whether blended standards achieve equivalent greenhouse gas reductions (empirical studies demonstrate 40–60% ILUC mitigation under certified regimes). Panels should commission independent third-party audits drawing upon UNFCCC equity principles.",
          "Third, fortifying the GATT Article XX chapeau by expanding it to intent probes that cross-reference domestic subsidy data (such as the EU's €6 billion annual farm aid) for protectionist flags.",
          "These modifications touch the very spirit of the multilateral trading system, establishing a blueprint for the WTO in a multipolar era with genuine sustainability as its foundation. If climate pressures grow, dispute settlement must prevent green policies from becoming masks to disguise trade barriers. The WTO must consistently safeguard forests without placing disproportionate burdens on developing-world farmers, exercising genuine mediating depth across global divides.",
        ],
      },
    ],
    footnotes: [
      "1. Directive 2018/2001 of the European Parliament and of the Council of 11 December 2018 on the Promotion of the Use of Energy from Renewable Sources, 2018 O.J. (L 328) 82 [hereinafter RED II].",
      "2. Panel Report, European Union and Certain Member States, Certain Measures Concerning Palm Oil and Oil Palm Crop-Based Biofuels (Malaysia), WT/DS600/R (Mar. 5, 2024).",
      "3. Panel Report, European Union, Certain Measures Concerning Palm Oil and Oil Palm Crop-Based Biofuels (Indonesia), WT/DS593/R (Jan. 10, 2025).",
      "4. Int’l Council on Clean Transp., Analysis of High and Low Indirect Land-Use Change Definitions in the EU Renewable Energy Directive 1 (2018).",
      "5. Grand View Rsch., Vegetable Oil Market Size, Share & Trends Analysis Report 1 (2024).",
      "6. Mario A. Solórzano, (Bio)Fueled to Combat Climate Change? An Analysis of the WTO Panel Decision in the EU-Palm Oil (Malaysia) Dispute, CELIS Blog (Oct. 21, 2024).",
      "7. Our World in Data, Oil Yield per Hectare by Crop (2023).",
      "8. Prakruti S. Mishra & Aditya S. Bhattacharya, Trade and Environment Back in the Spotlight: Measuring-Up the EU’s Rules on Biofuels, 51 Legal Issues Econ. Integration 7, 12 (2024).",
      "9. Malaysian Palm Oil Bd., Indirect Land Use Change as a Criterion to Determine Sustainable Biofuel Crop Production 4 (2020).",
      "10. D. S. Putri et al., Costs and Benefits of Certification of Independent Oil Palm Smallholders in Indonesia, 14 Int’l Food & Agribusiness Mgmt. Rev. 1, 5 (2018).",
      "11. Agreement on Technical Barriers to Trade art. 12, Apr. 15, 1994, Marrakesh Agreement Establishing the World Trade Organization, Annex 1A, 1868 U.N.T.S. 120.",
      "12. Roundtable on Sustainable Palm Oil [RSPO], RSPO Principles and Criteria for the Production of Sustainable Palm Oil 10 (2020).",
      "13. M. A. Saptorno et al., Mitigating the Risks of Indirect Land Use Change (ILUC) Related to EU Biofuel Policy, 104 Land Use Pol’y 104–110 (2021).",
      "14. United Nations Framework Convention on Climate Change, Equity and Common but Differentiated Responsibilities and Respective Capabilities (2015).",
      "15. Intergovernmental Panel on Climate Change [IPCC], Climate Change 2022: Mitigation of Climate Change ch. 7 (2022).",
    ],
  },
  {
    id: "wto-sps-risk-assessment-synergies",
    slug: "interplay-of-risk-assessment-non-discrimination-wto-sps-measures",
    title:
      "The Interplay of Risk Assessment, Non-Discrimination, and Provisional Safeguards in WTO SPS Measures: Exploring the Synergies Between Articles 5.1, 5.5, and 5.7",
    subtitle:
      "A Doctrinal Inquiry into the Interconnected Triad of the WTO SPS Agreement",
    authors: [
      {
        name: "Arpit Jain",
        affiliation: "Lloyd Law College",
        bio: "Arpit Jain is a 3rd Year law student at Lloyd Law College with academic focus on international trade law, WTO sanitary and phytosanitary jurisprudence, and international dispute resolution.",
      },
    ],
    date: "Issue 1 · November 2025",
    isoDate: "2025-11-10",
    year: "2025",
    sortOrder: 140,
    status: "published",
    format: "Scholarly Article",
    category: "International Trade Law",
    tags: [
      "WTO Law",
      "SPS Agreement",
      "Risk Assessment",
      "Non-Discrimination",
      "Provisional Safeguards",
      "Dispute Settlement",
    ],
    readingTimeMinutes: 6,
    featured: true,
    excerpt:
      "The WTO SPS Agreement balances sovereign rights to protect human, animal, and plant life against trade facilitation. This article investigates the essential synergies between Articles 5.1, 5.5, and 5.7, examining how scientific risk assessment, non-discrimination in protection levels, and provisional measures create a coherent framework for trade regulation.",
    keyInstruments: [
      "Agreement on the Application of Sanitary and Phytosanitary Measures (SPS Agreement, Arts. 5.1, 5.5, 5.7)",
      "Appellate Body Report, EC — Measures Concerning Meat and Meat Products (Hormones), WT/DS26/AB/R",
      "Appellate Body Report, Australia — Measures Affecting Importation of Salmon, WT/DS18/AB/R",
      "Appellate Body Report, Japan — Measures Affecting Agricultural Products, WT/DS76/AB/R",
    ],
    relatedSlugs: [
      "environmental-exceptions-or-hidden-protectionism-wto-palm-oil",
      "cilad-monthly-issue-1-november-2025",
    ],
    sections: [
      {
        id: "intro-sps-balance",
        heading: "1. The Sovereign Balance in the WTO SPS Framework",
        paragraphs: [
          "The Agreement on the Application of Sanitary and Phytosanitary Measures (SPS Agreement) forms a cornerstone of the World Trade Organization (WTO) framework, balancing the sovereign right of Members to protect human, animal, and plant life or health against the imperative to facilitate international trade. Adopted during the Uruguay Round, the SPS Agreement seeks to prevent SPS measures from being used as disguised restrictions on trade while ensuring they are scientifically justified.",
          "Central to this balance are Articles 5.1, 5.5, and 5.7, which address risk assessment, non-discrimination through consistency in protection levels, and provisional measures in the face of scientific uncertainty, respectively. The synergies among these articles create a cohesive framework for risk-based regulation, where risk assessment under 5.1 informs non-discriminatory application under 5.5, and provisional safeguards under 5.7 act as a bridge during evidence gaps.",
        ],
      },
      {
        id: "risk-assessment-art-5-1",
        heading: "2. Risk Assessment Under Article 5.1: The Scientific Foundation",
        paragraphs: [
          "Article 5.1 mandates that SPS measures be based on a risk assessment appropriate to the circumstances, incorporating available scientific evidence. This provision operationalizes the general obligation in Article 2.2 that measures must not be maintained without sufficient scientific evidence. As interpreted in WTO jurisprudence, 'based on' implies that the measure must be reasonably supported by or sufficiently warranted by the risk assessment, not merely conforming to it in a superficial manner.",
          "Prominent WTO scholars like Petros Mavroidis have emphasized that Articles 5.1 to 5.3 translate the broad duties of Article 2.2 into specific requirements, underscoring the role of science in justifying trade-restrictive measures. The WTO Analytical Index clarifies that risk assessment must link the measure to identified risks, as seen in Australia–Salmon, where the Appellate Body stressed that 'based on' requires the assessment to sufficiently warrant the measure.",
          "In EC–Hormones, the Panel found the EU’s ban lacked a proper risk assessment, illustrating how Article 5.1 disciplines measures that deviate from scientific consensus. As Joost Pauwelyn notes, while minority scientific views can be considered, they must rationally connect to the measure. Furthermore, the context of Article 5.1 includes economic factors under Article 5.3, allowing consideration of damage from pests or diseases, which ties into broader risk management and prevents regulatory overreach.",
        ],
      },
      {
        id: "non-discrimination-art-5-5",
        heading: "3. Non-Discrimination and Consistency Under Article 5.5",
        paragraphs: [
          "Article 5.5 obliges Members to avoid arbitrary distinctions in appropriate levels of protection (ALOP) across different situations if such distinctions result in discrimination or disguised trade restrictions. The WTO Analytical Index outlines a three-step test: identifying comparable situations, differing ALOPs, and arbitrary or unjustifiable distinctions leading to discrimination.",
          "In EC–Hormones, the Appellate Body found the EU’s higher ALOP for hormone-treated beef arbitrary compared to natural hormones in other foods. Pauwelyn interprets this as reinforcing non-discrimination beyond GATT, focusing on internal consistency. Mavroidis highlights how Article 5.5 cooperates with international standards under Article 3, promoting harmonization while allowing deviations if scientifically justified.",
          "Alan Sykes notes that findings under Article 5.5 can evidence violations elsewhere, such as under Article 2.3, creating evidentiary synergies. Gabrielle Marceau adds that in complex regulations, transparency in ALOP determination directly assists dispute panels in assessing consistency.",
        ],
      },
      {
        id: "provisional-safeguards-art-5-7",
        heading: "4. Provisional Safeguards Under Article 5.7: Bridging Scientific Gaps",
        paragraphs: [
          "Article 5.7 permits provisional SPS measures where relevant scientific evidence is insufficient, subject to four cumulative requirements: insufficiency of evidence, basis in available information, seeking additional information, and timely review. The Analytical Index positions it as a qualified right—not an exception, but a temporary deviation from Article 5.1.",
          "In Japan–Varietals, the Appellate Body clarified that insufficiency triggers when evidence does not allow a sufficiently objective risk assessment. Mavroidis views Article 5.7 as reflecting the precautionary principle without overriding scientific disciplines. Pauwelyn, analysing Australia–Salmon, stresses the strict obligation to review, ensuring provisionality.",
          "Sykes observes that Article 5.7 limits sovereignty by requiring ongoing evidence gathering, while Marceau links it to broader synergies with multilateral environmental agreements, enabling governments to act prudently without permanently disrupting trade.",
        ],
      },
      {
        id: "exploring-synergies-conclusion",
        heading: "5. Exploring Synergies & The Risk Management Continuum",
        paragraphs: [
          "The synergies lie in their collective promotion of science-based, non-discriminatory, and flexible regulation. Article 5.1 provides the evidentiary core, requiring risk assessments that inform ALOPs under 5.5. Inconsistent ALOPs may signal inadequate risk assessment, as in EC–Hormones where Article 5.5 violations supported Article 5.1 findings.",
          "Article 5.7 complements 5.1 by allowing action in uncertainty, but only provisionally, aligning with 5.5’s non-discrimination by preventing indefinite arbitrary measures. Mavroidis sees this triad as a risk management continuum: assessment (5.1), consistency (5.5), and precaution (5.7). Pauwelyn argues that in disputes like Continued Suspension, synergies ensure measures evolve with science, preventing stasis.",
          "These interplays enhance predictability, as provisional measures under 5.7 must transition to full assessments under 5.1, all under the consistency scrutiny of 5.5. In conclusion, the synergies between Articles 5.1, 5.5, and 5.7 embody the SPS Agreement's ethos: science-driven trade liberalization with room for caution, ensuring the multilateral framework adapts to emerging risks like biotechnology and climate impacts.",
        ],
      },
    ],
    footnotes: [
      "1. Agreement on the Application of Sanitary and Phytosanitary Measures art. 5.1, Apr. 15, 1994, Marrakesh Agreement Establishing the World Trade Organization, Annex 1A, 1867 U.N.T.S. 493 [SPS Agreement].",
      "2. Appellate Body Report, European Communities — Measures Concerning Meat and Meat Products (Hormones), ¶ 189, WTO Docs. WT/DS26/AB/R, WT/DS48/AB/R (Jan. 16, 1998).",
      "3. Petros C. Mavroidis, The Regulation of International Trade: Volume 2: The WTO Agreements on Trade in Goods (MIT Press 2016).",
      "4. SPS Agreement, supra note 1, art. 5.5.",
      "5. Joost Pauwelyn, The WTO Agreement on Sanitary and Phytosanitary (SPS) Measures as Applied in the First Three SPS Disputes, 2 J. Int’l Econ. L. 641 (1999).",
      "6. Gabrielle Marceau, WTO Dispute Settlement and Human Rights, 13 Eur. J. Int’l L. 753 (2002).",
      "7. Alan O. Sykes, Reflections on the Varietals Dispute, the SPS Agreement, and WTO Dispute Settlement (2006).",
      "8. Appellate Body Report, Australia — Measures Affecting Importation of Salmon, ¶ 124, WTO Doc. WT/DS18/AB/R (Oct. 20, 1998).",
      "9. Appellate Body Report, Japan — Measures Affecting Agricultural Products, ¶ 93, WTO Doc. WT/DS76/AB/R (Feb. 22, 1999).",
      "10. Gabrielle Marceau & Joel P. Trachtman, A Map of the World Trade Organization Law of Domestic Regulation of Goods, 48 J. World Trade 351 (2014).",
    ],
  },
  {
    id: "uniform-civil-codes-comparative-models",
    slug: "global-models-uniform-civil-codes-indian-debate-comparative-lessons",
    title:
      "Global Models of Uniform Civil Codes and the Indian Debate: Lessons from Comparative Experiences",
    subtitle:
      "Comparative Inquiries into Goa, Turkey, Tunisia, and France for India's Article 44 Discourse",
    authors: [
      {
        name: "Shourya Parihar",
        affiliation:
          "Vivekananda Institute of Professional Studies, GGSIPU, New Delhi",
        bio: "Shourya Parihar is a 4th Year Law Student at Vivekananda Institute of Professional Studies, Guru Gobind Singh Indraprastha University, New Delhi, focusing on comparative constitutional law and personal laws.",
      },
    ],
    date: "Issue 1 · November 2025",
    isoDate: "2025-11-15",
    year: "2025",
    sortOrder: 135,
    status: "published",
    format: "Scholarly Article",
    category: "Public International Law",
    tags: [
      "Comparative Law",
      "Uniform Civil Code",
      "Constitutional Jurisprudence",
      "Gender Justice",
      "Human Rights Law",
      "Article 44",
    ],
    readingTimeMinutes: 6,
    featured: true,
    excerpt:
      "The Uniform Civil Code under Article 44 has remained contentious in Indian constitutional thought for over seventy years. This article investigates comparative civil codes in Goa, Turkey, Tunisia, and France, drawing insights from Werner Menski, Flavia Agnes, and Upendra Baxi to argue that substantive equality and local legitimacy must prevail over mechanical uniformity.",
    keyInstruments: [
      "Constitution of India, Article 44 (Directive Principles of State Policy)",
      "Portuguese Civil Code of 1867 (Goa)",
      "Swiss Civil Code of 1907 (adopted in Turkey, 1926)",
      "Code of Personal Status (Decree of Aug. 13, 1956, Tunisia)",
      "Code Civil des Français [Civil Code of the French] (1804)",
    ],
    relatedSlugs: [
      "cilad-monthly-issue-1-november-2025",
      "reframing-extradition-nelson-mandela-rules-human-rights-guarantees",
    ],
    sections: [
      {
        id: "intro-indian-predicament",
        heading: "1. Introduction: The Indian Predicament",
        paragraphs: [
          "The Uniform Civil Code (UCC) has consistently held a contradictory status within the realm of Indian constitutional discussions. Looking back at the Indian Constitution, few provisions have been the subject of as much debate and inaction, and one of them is Article 44, the Uniform Civil Code. For over seventy years, the Uniform Civil Code has been invoked by the courts as a way to push the parliament towards legal reform and, unfortunately, shelved when politics gets in the way.",
          "The crux of the problem is that the dilemma faced by India today is very clear-cut: should the nation prioritise equality and consistency, or its commitment to preserve diversity? Because India is soon to mark its hundredth year of freedom, treating the UCC as a mere theoretical concept is no longer viable.",
          "Coming to the heart of the issue, rather than asking whether India should have a Uniform Civil Code, we need to ask what sort of UCC the nation could practically put in place. The answer involves examining how similar codes have worked out in other jurisdictions: the colonial 'model' of Goa, the secularism bulldozed in Turkey, the incremental reforms in Tunisia, and the mythical French neutrality.",
          "As Werner Menski pointed out, law never exists in a vacuum and has to go head-to-head with religion, culture, and people’s way of life. Flavia Agnes warned that a UCC-imposed top-down system rapidly risks becoming crushing majority rule pretending to be reform, and Upendra Baxi argued that the legitimacy of legal change is not about how 'uniform' it is, but whether it rings true with the moral values of the Constitution.",
        ],
      },
      {
        id: "goa-portuguese-experience",
        heading: "2. The Portuguese Experience in Goa: Continuity and Complexity",
        paragraphs: [
          "Goa is a frequent presence in the Indian UCC discussion, often portrayed as the 'model state' for a common code dating back to colonial times. First implemented via the Portuguese Civil Code of 1867, the common code survived Goa's accession to India in 1961. On the records, Goa offers a common code of regulations for marriage, divorce, and succession for every community. But a more intense examination yields a very different picture.",
          "For India, too, the lesson is clear: a UCC is not possible as a colonial transplant or as a symbolic concession. It must be framed with democratic authority, broad consultation, and a real commitment to gender justice, not party politicking. Goa's example proves that 'uniformity' without substantial equality only perpetuates old hierarchies in a different guise.",
        ],
      },
      {
        id: "turkey-radical-secularism",
        heading: "3. Turkey: Constraints of Radical Secularism",
        paragraphs: [
          "Quite a different template is found in Turkey, where, in the 1920s, Mustafa Kemal Atatürk's reforms eliminated religious family law and introduced the Swiss Civil Code in its place. The Turkish system was staunchly secular: they eliminated the religious courts, and marriage became a civic duty. The Turkish state reserved for itself exclusive control of family law, analogous to its overall programme of state building and Westernisation.",
          "While first feted as a product of secular modernity, the model of Turkey reveals the disadvantages inherent in top-down reform. The Turkish example cautions India not to delude itself into thinking that law codes alone are sufficient to change deeply ingrained social customs. Turkey's secular top-down structure created a cultural void that many citizens found hard to fill. Can a country update its family law without giving up its religious character? The answer lies, in part, in the gradualism practiced by Tunisia.",
        ],
      },
      {
        id: "tunisia-incremental-reforms",
        heading: "4. Tunisia: Road to Incremental Reforms",
        paragraphs: [
          "Tunisia's reforms since independence offer a compelling case to analyse. Since 1956 under Habib Bourguiba's leadership, Tunisia implemented the Code of Personal Status, ending polygamy, establishing judicial divorce, and progressing in the promotion of women's rights in an Islamically compatible manner. Where Turkey adopted outright a Western code, Tunisia implemented gradual reform, respecting the maintenance of its Islamic essence while harmonising family law with equality and secularity.",
          "Scholars such as Mounira Charrad have noted that Tunisia was a relevant example where law reform became legitimate through accommodation in domestic cultural and religio-political contexts. Through a gradual approach tied to local movements for female rights, sustainability and acceptability were fostered.",
          "For India, Tunisia's precedent is especially relevant. Reform does not have to mean a polar choice between religious personal law and a fully secular code. Rather, reform can become a development of progressive convergence, grounded in constitutional ideals yet respectful of communal sentiment. A 'phased UCC,' proceeding from consensus points (e.g., equality in inheritance, maintenance, and prohibition of polygamy), presents a far more fruitful path.",
        ],
      },
      {
        id: "france-neutrality-myth",
        heading: "5. France: Civil Code and the Myth of Neutrality",
        paragraphs: [
          "The French Civil Code (1804), frequently regarded as a universal paradigm, simultaneously exposes complexities pertinent to India. Originating from the French Revolution, it established family law as a secular and standardised framework. Yet throughout a significant portion of its history, the Code subordinated women in marriage, bestowing upon husbands legal supremacy until reforms in the late 20th century rectified these disparities.",
          "As the French experience reveals, Flavia Agnes cautions against conflating uniformity with equality. A code can pose as secular and neutral, but unless closely examined, it might only canonically reproduce prevailing patriarchal norms. India must refrain from the temptation to view the UCC as a magic solution for gender justice: equality must be attained through substantive and gender-sensitive drafting, not mechanical uniformity.",
        ],
      },
      {
        id: "indian-scholarship-conclusion",
        heading: "6. Interacting with Indian Scholarship & Conclusion",
        paragraphs: [
          "Indian scholarship on the UCC has been rich, diverse, and contentious. Granville Austin saw the Directive Principles as the conscience of the Constitution, viewing the UCC as integral to transformative changes capable of bringing social revolution. These scholars remind us that the Indian UCC debate does not take place in a vacuum; it must be situated within a long tradition of constitutional thought.",
          "The experiences of Goa, Turkey, Tunisia, and France demonstrate that a Uniform Civil Code cannot be a single universal panacea. No single 'model UCC' exists that can be replicated universally. The case of Goa reveals the hollowness of uniformity without equality; Turkey and Tunisia diverge on the pace of reform and cultural integration; and France warns against the presumption of neutrality in standardized codes.",
          "As Granville Austin and Upendra Baxi aptly emphasize, the Indian Uniform Civil Code must be treated not as a simplistic legislative slogan, but as emerging from deliberative democracy—an evolutionary process that foregrounds substantive justice over mere procedural uniformity.",
        ],
      },
    ],
    footnotes: [
      "1. INDIA CONST. art. 44.",
      "2. Werner Menski, Comparative Law in a Global Context: The Legal Systems of Asia and Africa 200–210 (2d ed. 2006).",
      "3. Upendra Baxi, The Crisis of the Indian Legal System (1982).",
      "4. Portuguese Civil Code, 1867 (Goa).",
      "5. Schweizerisches Zivilgesetzbuch [ZGB], Code Civil [CC], Codice Civile [CC] [Swiss Civil Code] Dec. 10, 1907, SR 210, Art. 1 (Switz.).",
      "6. Code Du Statut Personnel [C.S.P.] [Code of Personal Status] Decree of Aug. 13, 1956 (Tunis.).",
      "7. Mounira M. Charrad, States and Women's Rights: The Making of Postcolonial Tunisia, Algeria, and Morocco (Univ. of Cal. Press 2001).",
      "8. Code Civil Des Français [C. CIV.] [Civil Code of the French] (1804) (Fr.).",
      "9. Granville Austin, The Indian Constitution: Cornerstone of a Nation 75–84 (Oxford Univ. Press, 1996).",
    ],
  },
  {
    id: "algorithmic-trade-barriers-ai-era",
    slug: "rise-of-algorithmic-trade-barriers-digital-trade-governance-ai",
    title:
      "The Rise of Algorithmic Trade Barriers: Rethinking Digital Trade Governance in the AI Era",
    subtitle:
      "Automated Systems, Platform Gatekeepers, and Structural Limitations in International Trade Law",
    authors: [
      {
        name: "Ananya Chauhan",
        affiliation: "Amity University",
        bio: "Ananya Chauhan is a final-year law student at Amity University with a strong interest in legal research and contemporary policy issues, focusing on analyzing emerging legal challenges in artificial intelligence and digital trade.",
      },
    ],
    date: "Issue 1 · November 2025",
    isoDate: "2025-11-20",
    year: "2025",
    sortOrder: 130,
    status: "published",
    format: "Scholarly Article",
    category: "International Trade Law",
    tags: [
      "Digital Trade",
      "Artificial Intelligence",
      "WTO Law",
      "Algorithmic Governance",
      "Data Localization",
      "CPTPP",
    ],
    readingTimeMinutes: 7,
    featured: true,
    excerpt:
      "Digital trade represents nearly $5 trillion of global commerce. As governments and private platforms deploy AI for regulatory and operational functions, algorithmic trade barriers have emerged. This article evaluates structural gaps in WTO law, private platform power, regional trade fragmentation, and proposes Algorithmic Impact Assessments and regulatory sandboxes.",
    keyInstruments: [
      "Marrakesh Agreement Establishing the World Trade Organization (1994)",
      "General Agreement on Tariffs and Trade (GATT 1947, Article III)",
      "General Agreement on Trade in Services (GATS Article XIV)",
      "CPTPP Chapter 14 (Electronic Commerce)",
      "USMCA Chapter 19 (Digital Trade)",
      "Digital Economy Partnership Agreement (DEPA 2020)",
      "OECD Guidelines on Trustworthy AI (2025)",
    ],
    relatedSlugs: [
      "cilad-monthly-issue-1-november-2025",
      "environmental-exceptions-or-hidden-protectionism-wto-palm-oil",
    ],
    sections: [
      {
        id: "intro-digital-trade",
        heading: "1. Introduction: The $5 Trillion Digital Trade Economy",
        paragraphs: [
          "“The world of the future will be an ever more demanding struggle against the limitations of our intelligence.” ~ Norbert Wiener, The Human Use of Human Beings (1950).",
          "Digital trade has become a fundamental component of the multinational economy. In practice, it now shapes how goods and services are exchanged across borders, particularly through data flows, online platforms, and digitally delivered services. According to estimates from the OECD and partner institutions, by 2020 trade that was digitally ordered or delivered accounted for roughly 25% of total global trade, with a value close to five trillion United States dollars.",
          "As governments and private platforms increasingly use artificial intelligence for regulatory and operational functions, a new form of trade restriction has emerged: algorithmic trade barriers. They arise when automated systems unintentionally or deliberately impede the free flow of digital goods and services across borders. Traditional trade law was not designed for these automated systems which operate within complex models that lack transparency and evolve over time, creating an urgent need to rethink digital trade governance.",
        ],
      },
      {
        id: "understanding-algorithmic-barriers",
        heading: "2. Understanding Algorithmic Trade Barriers",
        paragraphs: [
          "Algorithmic trade barriers refer to restrictions arising from automated systems in cross-border digital interactions, including AI content filters, automated data localization tools, algorithmic customs screening, and platform governance systems. Unlike tariffs or quotas, these barriers are embedded within technological architectures, often going unnoticed until market access is significantly altered.",
          "The emergence of algorithmic trade barriers is driven by distinct technical and regulatory factors:",
          "Firstly, many AI models operate as opaque 'black boxes' whose logic is difficult to interpret, reducing the ability of regulators or foreign firms to challenge discriminatory outcomes.",
          "Secondly, bias in training data leads to differential treatment of foreign goods and services. When models are trained primarily on domestic datasets lacking international perspectives, they disadvantage foreign enterprises and generate indirect discrimination.",
          "Thirdly, automated over-compliance occurs when commercial systems block foreign content or services more aggressively than required by domestic law. Lastly, AI systems continuously evolve through machine learning, making their trade impacts dynamic and unpredictable.",
        ],
      },
      {
        id: "structural-limitations-trade-law",
        heading: "3. Structural Limitations in International Trade Law",
        paragraphs: [
          "The emergence of algorithmic barriers exposes three critical structural limitations in international trade law:",
          "A. WTO Law and the State Action Problem: The WTO framework assumes trade barriers are created by sovereign states. Yet most algorithmic barriers are produced by private digital platforms, AI vendors, automated supply-chain intermediaries, and cloud service providers. While state responsibility can arise under GATT Article III or GATS when private conduct is directed by governments, algorithmic systems often fall into a regulatory grey zone (e.g., an AI platform ranking that deprioritizes foreign sellers may not constitute a formal 'measure' under WTO law).",
          "B. Data Governance as Trade Governance: Modern agreements such as CPTPP, USMCA, and DEPA include chapters on digital trade, but focus primarily on prohibiting forced data localization and ensuring cross-border data flows. None explicitly addresses algorithmic opacity, automated discrimination, or AI-driven market exclusion.",
          "C. Competition Law and Trade Law Misalignment: Competition authorities scrutinize algorithmic abuse of dominance, but antitrust law is not designed to address cross-border trade equity. A platform's algorithm may distort international trade flows without meeting high antitrust thresholds.",
        ],
      },
      {
        id: "governance-and-public-policy",
        heading: "4. Algorithmic Governance and Public Policy",
        paragraphs: [
          "Governments often deploy automated systems for legitimate objectives such as data security, cyber resilience, public order, and consumer protection. While these objectives are recognized under GATS Article XIV general exceptions, automated monitoring tools enforcing data localization may create disproportionate restrictions. If an AI filter blocks digital services in a manner that is neither necessary nor proportionate, it may breach trade commitments even when the underlying policy goal is legitimate.",
          "Furthermore, large digital platforms exercise private governance over global trade flows—ranking products, moderating content, and enforcing compliance rules. Because platforms are private actors, they operate without formal WTO accountability mechanisms, creating systemic barriers even in the absence of state-imposed restrictions.",
        ],
      },
      {
        id: "gaps-and-reform-pathways",
        heading: "5. Pathways for Reform & Institutional Reorientation",
        paragraphs: [
          "Addressing algorithmic trade barriers requires a comprehensive reorientation of digital trade governance toward transparency, accountability, and equity:",
          "First, advancing algorithmic transparency: Companies should provide clear explanations of decision-making logic and basic impact documentation without compromising proprietary source code (the USMCA model protects source code while allowing regulatory review).",
          "Second, implementing Algorithmic Impact Assessments: Governments should require assessments analogous to privacy impact reviews to verify that automated trade tools do not unintentionally limit market access or breach necessity and non-discrimination principles.",
          "Third, establishing a Digital-Trade Ombudsperson: Creating accessible mechanisms for small and medium-sized exporters to challenge biased algorithmic decisions and facilitate regulatory dialogue.",
          "Fourth, cross-border regulatory sandboxes: Enabling nations to test AI-driven regulatory approaches in controlled environments before widespread deployment, sharing experimental data to prevent trade friction.",
          "Finally, trade agreements must integrate well-established ethical AI principles from the OECD. Embedding transparency, fairness, and accountability into trade treaties will ensure automation supports fair global commerce rather than creating new barriers.",
        ],
      },
    ],
    footnotes: [
      "1. OECD et al., Measuring Digital Trade: Definitions and Statistics 2 (2025) (noting that digital trade accounted for roughly 25% of global trade in 2020 amounting to nearly USD 5 trillion).",
      "2. OECD, Enablers, Guardrails and Engagement for Unlocking Trustworthy AI: Governing with Artificial Intelligence 1–2 (2025).",
      "3. Marrakesh Agreement Establishing the World Trade Organization, Apr. 15, 1994, 1867 U.N.T.S. 154.",
      "4. General Agreement on Tariffs and Trade (1947), art. III, 61 Stat. pt. 5 T.I.A.S. 1700, 55 U.N.T.S. 194.",
      "5. Comprehensive and Progressive Agreement for Trans-Pacific Partnership (CPTPP) signed Mar. 8, 2018.",
      "6. United States–Mexico–Canada Agreement (USMCA), Can.-Mex.-U.S. signed Nov. 30, 2018, 32 I.L.M. 289 (2018).",
      "7. Digital Economy Partnership Agreement (DEPA) signed June 11, 2020.",
      "8. General Agreement on Trade in Services, art. XIV, Apr. 15, 1994, Marrakesh Agreement Establishing the World Trade Organization, Annex 1B, 1869 U.N.T.S. 183.",
      "9. Agreement on Technical Barriers to Trade, World Trade Organization, WTO Agreements Series (2021).",
      "10. Norbert Wiener, The Human Use of Human Beings (1950).",
    ],
  },
  {
    id: "nelson-mandela-rules-extradition",
    slug: "reframing-extradition-nelson-mandela-rules-human-rights-guarantees",
    title:
      "Reframing Extradition: The Nelson Mandela Rules and the Judicial Construction of Human Rights Guarantees",
    subtitle:
      "Operationalizing Non-Refoulement and Diplomatic Assurances Through UN Prisoner Standards",
    authors: [
      {
        name: "Vallimireddy Abhinav Deep Dora",
        affiliation: "Andhra University & Vignan Institute of Law",
        bio: "Vallimireddy Abhinav Deep Dora is a research scholar at Dr. B.R. Ambedkar College of Law, Andhra University, and Assistant Professor at Vignan Institute of Law, VFSTR University, Guntur, Andhra Pradesh. His research focuses on international law and human rights.",
      },
      {
        name: "(Prof.) Dr. V. Vijay",
        affiliation:
          "Former Principal, Dr. B.R. Ambedkar College of Law, Andhra University",
        bio: "(Prof.) Dr. V. Vijay Lakshmi is a distinguished legal academic, respected research guide, and former principal of Dr. B.R. Ambedkar College of Law, Andhra University, Visakhapatnam.",
      },
    ],
    date: "Issue 1 · November 2025",
    isoDate: "2025-11-25",
    year: "2025",
    sortOrder: 125,
    status: "published",
    format: "Scholarly Article",
    category: "Human Rights Law",
    tags: [
      "Human Rights Law",
      "Extradition Law",
      "Nelson Mandela Rules",
      "Non-Refoulement",
      "Convention Against Torture",
      "ECHR Article 3",
    ],
    readingTimeMinutes: 8,
    featured: true,
    excerpt:
      "The interplay between extradition law and human rights is restrained by the absolute global prohibition on torture and inhuman treatment. This article explores how courts utilize the UN Nelson Mandela Rules as an objective evidentiary bridge to assess detention risk, evaluate diplomatic assurances, and strengthen non-refoulement protections.",
    keyInstruments: [
      "UN Standard Minimum Rules for the Treatment of Prisoners (Nelson Mandela Rules, G.A. Res. 70/175)",
      "Convention Against Torture and Other Cruel, Inhuman or Degrading Treatment (CAT Article 3)",
      "European Convention on Human Rights (ECHR Article 3)",
      "Soering v. United Kingdom, 161 Eur. Ct. H.R. (ser. A) (1989)",
      "Ananyev v. Russia, App. Nos. 42525/07 & 60800/08, Eur. Ct. H.R. (2012)",
      "Vijay Mallya v. Government of India, [2018] EWHC 199 (Admin)",
    ],
    relatedSlugs: [
      "cilad-monthly-issue-1-november-2025",
      "global-models-uniform-civil-codes-indian-debate-comparative-lessons",
    ],
    sections: [
      {
        id: "intro-extradition-human-rights",
        heading: "1. Introduction: Human Dignity and Non-Refoulement",
        paragraphs: [
          "The interplay between extradition law and human rights is both delicate and deeply significant. While extradition helps nations work together to ensure that offenders do not escape justice, it is firmly restrained by the absolute global prohibition on torture and inhuman or degrading treatment. This safeguard, reflected in Article 3 of the European Convention on Human Rights (ECHR) and the Convention Against Torture (CAT), places a clear duty on states: no person can be sent to a country where they face a real and credible risk of such abuse. In this way, the pursuit of justice must never come at the cost of human dignity.",
          "In recent years, courts have turned more frequently to the United Nations Standard Minimum Rules for the Treatment of Prisoners—the Nelson Mandela Rules—when deciding whether extraditing someone would violate basic human rights principles. Even though these rules are considered 'soft law,' they carry significant moral and normative weight, helping transform broad human-rights protections into concrete, measurable standards. This study explores how the Mandela Rules are shaping modern extradition practice by guiding courts in assessing risk, informing the negotiation of diplomatic assurances, and strengthening accountability across international justice systems.",
        ],
      },
      {
        id: "foundational-framework-nmr",
        heading: "2. The Foundational Framework of the Mandela Rules",
        paragraphs: [
          "The Nelson Mandela Rules (NMR) comprise 122 rules adopted by the UN in 1955 and comprehensively amended in 2015, establishing international standards for the humane treatment of prisoners. Although non-binding, their worldwide legitimacy derives from state consensus and judicial recognition as best practices.",
          "The NMR are categorized as soft law, indicating they do not possess formal direct enforcement under treaty frameworks. However, their legal relevance is apparent in their interpretative authority—courts and human rights bodies consistently utilise them to evaluate whether detention conditions comply with international norms. The European Court of Human Rights (ECtHR) and the UN Committee Against Torture (CAT Committee) reference the NMR to elucidate Article 3 of the ECHR and CAT, respectively.",
          "Rule 1 of the Mandela Rules articulates a foundational demand: every person in detention must be treated with respect for their inherent dignity and humanity. This core principle leaves no room for torture or cruel, inhuman, or degrading treatment, regardless of the charges. It creates an indivisible connection to the principle of non-refoulement, ensuring that protection from mistreatment follows wherever a person is transferred.",
        ],
      },
      {
        id: "non-refoulement-evidentiary-bridge",
        heading: "3. Non-Refoulement and the Role of the NMR as an Evidentiary Bridge",
        paragraphs: [
          "Under CAT Article 3 and ECHR Article 3, no state may expel, return ('refouler'), or extradite an individual where there are substantial grounds for believing they would face torture or ill-treatment. No exceptional circumstances, such as terrorism or national security, may justify departing from this absolute restriction.",
          "In extradition proceedings, courts must decide whether potential imprisonment breaches Article 3. The abstract threshold of 'substantial grounds for believing' is operationalized through the specific, quantifiable benchmarks set by the NMR, effectively transforming soft law norms into hard law evidence:",
          "Rules 10–11 mandate adequate floor space, lighting, ventilation, and sanitation, which courts use to evaluate claims of prison overcrowding.",
          "Rule 24 guarantees 'equivalence of care' between prison and community healthcare, serving as a critical measure for assessing the adequacy of medical facilities.",
          "Rule 45 strictly limits solitary confinement to 15 consecutive days, establishing a globally recognized threshold for when isolation crosses into potentially torturous treatment.",
        ],
      },
      {
        id: "applying-standards-risk-assessment",
        heading: "4. Applying NMR Standards in Extradition Risk Assessment",
        paragraphs: [
          "A. Accommodation and Overcrowding: Overcrowding remains the most recurrent issue in extradition litigation involving developing states. The NMR’s accommodation provisions (Rules 10–11) require detention facilities to meet health and safety standards regarding ventilation, minimum floor space, and sanitation. The ECtHR consistently relies on these metrics (e.g., Ananyev v. Russia), holding that severe overcrowding constitutes inhuman treatment per se.",
          "B. Solitary Confinement and Psychological Harm: NMR Rule 45 prohibits 'prolonged solitary confinement' beyond 15 consecutive days without meaningful human contact. Judicial practice increasingly recognizes that extended isolation causes irreversible psychological harm, barring extradition where requesting states lack adequate safeguards.",
          "C. Health Care and Equivalence of Treatment: Under Rule 24, healthcare in prison is a state responsibility and must match community standards. In extradition proceedings involving vulnerable individuals or chronic illness, courts scrutinize clinical independence—medical decisions must remain free from political or security pressures.",
          "D. Procedural Dignity and Access to Justice: Beyond physical conditions, the NMR emphasize procedural rights including privacy in searches (Rule 50) and prompt access to legal counsel (Rule 61). Violations of these procedural guarantees are interpreted as systemic disregard for human dignity, bolstering non-refoulement claims.",
        ],
      },
      {
        id: "diplomatic-assurances-nmr",
        heading: "5. Diplomatic Assurances and the NMR Framework",
        paragraphs: [
          "When courts identify substantial risks of inhuman treatment, extradition may proceed only if the Requesting State provides diplomatic assurances mitigating those risks. Under strict judicial scrutiny, assurances must be specific, verifiable, binding, and originate from authorities capable of enforcement.",
          "Assurances that merely reiterate general commitments to human rights are legally insufficient. Courts demand NMR-based specificity—such as exact cell dimensions, ventilation guarantees, healthcare access protocols, and protections from solitary confinement (as illustrated in Vijay Mallya v. Government of India).",
          "Courts also apply the 'Pattern Test' to evaluate systemic reliability: where evidence demonstrates consistent patterns of prison overcrowding or human rights violations, assurances may lack credibility. Furthermore, because requested states lose jurisdiction post-transfer, best practice demands binding clauses guaranteeing access for independent observers (UN Special Rapporteurs and NGOs) under NMR Rule 57.",
        ],
      },
      {
        id: "policy-recommendations-conclusion",
        heading: "6. Policy Recommendations & Conclusion",
        paragraphs: [
          "To enhance transparency and accountability in extradition practice, states should implement three core reforms:",
          "1. Institutionalizing NMR-Based Assurance Protocols: Requiring all diplomatic assurances to cite specific NMR rules (e.g., Rule 45 on solitary confinement and Rule 24 on healthcare), supported by documentary blueprints, staffing ratios, and medical facility data.",
          "2. Post-Transfer Independent Monitoring: Mandating continuous monitoring by independent bodies with unannounced visits and confidential complaint mechanisms under Rule 57.",
          "3. Systemic Capacity-Building: Anchoring long-term compliance in institutional reform within requesting states, emphasizing professional training under Rule 74 and educational reintegration programs under Rule 105.",
          "Conclusion: The Nelson Mandela Rules have emerged as the definitive interpretive tool for evaluating the absolute prohibition of non-refoulement in extradition law. By aligning risk assessments with NMR benchmarks, courts ensure that human dignity remains the central measure of justice. Only through verifiable adherence to these universal standards can the international community uphold the promise that those behind bars remain beyond cruelty but never beyond rights.",
        ],
      },
    ],
    footnotes: [
      "1. Convention Against Torture and Other Cruel, Inhuman or Degrading Treatment or Punishment art. 3, Dec. 10, 1984, 1465 U.N.T.S. 85.",
      "2. United Nations Standard Minimum Rules for the Treatment of Prisoners (Nelson Mandela Rules), G.A. Res. 70/175, U.N. Doc. A/RES/70/175 (Dec. 17, 2015).",
      "3. European Convention on Human Rights art. 3, Nov. 4, 1950, 213 U.N.T.S. 221.",
      "4. United Nations Office on Drugs & Crime, Nelson Mandela Rules History (2015).",
      "5. Essex Paper No. 3, The Essex Group on the Mandela Rules (2017).",
      "6. Soering v. United Kingdom, 161 Eur. Ct. H.R. (ser. A) (1989).",
      "7. Penal Reform Int’l, Guidance Document on the European Prison Rules (2023).",
      "8. Ananyev v. Russia, App. Nos. 42525/07 & 60800/08, Eur. Ct. H.R. (2012).",
      "9. Council of Europe, Extradition and Human Rights: Diplomatic Assurances in Context (2015).",
      "10. Vijay Mallya v. Government of India, [2018] EWHC 199 (Admin).",
      "11. OHCHR, Diplomatic Assurances and the Prevention of Prohibited Treatment (2015).",
    ],
  },
  {
    id: "cilad-monthly-charter",
    slug: "cilad-monthly-analytical-bulletin",
    title:
      "CILAD Monthly: Analytical Bulletin on International Jurisprudence, State Treaties & Global Legal Doctrines",
    subtitle:
      "Flagship Periodical of the Centre for International Law and Allied Disciplines, DSNLU",
    authors: [
      {
        name: "CILAD Editorial Committee",
        affiliation:
          "Centre for International Law and Allied Disciplines, DSNLU Visakhapatnam",
        bio: "The CILAD Editorial Committee comprises faculty members and researchers at Damodaram Sanjivayya National Law University, Visakhapatnam, overseeing monthly digests of international tribunal jurisprudence, treaty ratifications, and peer-reviewed legal commentary.",
      },
    ],
    date: "Monthly Periodical · 2026 Series",
    isoDate: "2026-01-15",
    year: "2026",
    sortOrder: 100,
    status: "published",
    format: "Periodical Digest",
    category: "Global Governance & Policy",
    tags: [
      "Public International Law",
      "International Institutions and Global Governance",
      "CILAD Monthly",
      "Treaty Practice",
    ],
    readingTimeMinutes: 5,
    featured: true,
    externalUrl:
      "https://dsnlu.ac.in/centre-for-international-law-and-allied-disciplines-cilad/",
    excerpt:
      "Published under the aegis of the Centre for International Law and Allied Disciplines at DSNLU, CILAD Monthly synthesizes landmark case briefs from international tribunals, multilateral treaty ratifications, and peer-reviewed scholarly commentary.",
    keyInstruments: [
      "ICJ Statute & Jurisprudence",
      "1969 Vienna Convention on the Law of Treaties",
      "UNCLOS & ITLOS Decisions",
      "WTO Dispute Settlement Reports",
    ],
    relatedSlugs: [
      "beyond-borders-2-careers-and-trends-in-international-law",
      "call-for-monthly-columns-and-editorial-guidelines",
    ],
    sections: [
      {
        id: "mandate",
        heading: "1. Editorial Mandate & Scope of the Periodical",
        paragraphs: [
          "CILAD Monthly serves as the flagship analytical periodical of the Centre for International Law and Allied Disciplines (CILAD) at Damodaram Sanjivayya National Law University (DSNLU), Visakhapatnam. Conceived to bridge doctrinal scholarship and contemporary state practice, each monthly issue chronicles pivotal developments across public and private international law.",
          "In an era marked by rapid developments before international courts, evolving regional trade architectures, and urgent humanitarian and environmental treaty negotiations, legal researchers require rigorous, accessible synthesis. CILAD Monthly curates primary developments alongside critical commentary by faculty, practitioners, and student researchers.",
        ],
        quote: {
          text: "Advancing research, dialogue, and practice in international law and its intersecting disciplines through sustained monthly analysis of global courts and treaties.",
          attribution:
            "CILAD Periodical Charter, Damodaram Sanjivayya National Law University",
        },
      },
      {
        id: "departments",
        heading: "2. Core Departments Inside Every Issue",
        paragraphs: [
          "Each issue of CILAD Monthly is structured around three permanent analytical departments designed for scholars, students, and practitioners of international law:",
          "I. Global Jurisprudence & Tribunal Case Summaries: Concise, doctrinally rigorous digests of recent judgments, advisory opinions, and provisional measures issued by the International Court of Justice (ICJ), International Criminal Court (ICC), International Tribunal for the Law of the Sea (ITLOS), WTO Dispute Settlement Body, and regional human rights and investment tribunals.",
          "II. Treaty Monitor & State Practice: Systematic tracking of multilateral conventions, bilateral investment agreements, environmental protocols, state ratifications, reservations, and declarations—with particular attention to Indian state practice and Ministry of External Affairs (Legal & Treaties) developments.",
          "III. Scholarly Essays & Peer-Review Columns: Focused analytical essays and op-eds authored by faculty members, legal practitioners, and student researchers examining emerging doctrines in trade law, humanitarian law, refugee protection, and global governance.",
        ],
      },
      {
        id: "portal-access",
        heading: "3. Official Repository & Submission Pathway",
        paragraphs: [
          "Issues and official notices of CILAD Monthly are hosted on the official Damodaram Sanjivayya National Law University portal. Prospective contributors—including law students, doctoral candidates, academicians, and practitioners—are invited to submit case briefs, treaty notes, and analytical columns on a rolling monthly basis.",
        ],
      },
    ],
    footnotes: [
      "Centre for International Law and Allied Disciplines (CILAD), Official University Portal, Damodaram Sanjivayya National Law University: https://dsnlu.ac.in/centre-for-international-law-and-allied-disciplines-cilad/",
      "Correspondence and manuscript submissions for CILAD Monthly may be directed to cilad@dsnlu.ac.in.",
    ],
  },
  {
    id: "beyond-borders-2-proceedings",
    slug: "beyond-borders-2-careers-and-trends-in-international-law",
    title:
      "Beyond Borders 2.0: Careers and Trends in International Law — Workshop Record & Thematic Synthesis",
    subtitle:
      "International Workshop Concluded on 31 August 2026 · Moot Court Hall, DSNLU & Hybrid",
    authors: [
      {
        name: "Prof. (Dr.) R. Venkata Rao (Chief Guest)",
        affiliation:
          "Vice Chancellor (In-Charge), IIULER Goa · Former Vice Chancellor, NLSIU Bangalore",
        bio: "Distinguished legal academic with over 45 years of teaching and research experience; recipient of the Prof. N.R. Madhava Menon Best Law Teacher Award (2018).",
      },
      {
        name: "Mr. Uma Shankar Yedla, Dr. Sukhwinder Kaur Virk, Ms. Vanshika Sulaniya & Ms. Surbhi Gupta",
        affiliation: "Distinguished Guest Speakers, Beyond Borders 2.0",
        bio: "Invited panel featuring sovereign treaty advisors, international humanitarian law scholars, international trade specialists, and legal practitioners.",
      },
    ],
    date: "31 August 2026",
    isoDate: "2026-08-31",
    year: "2026",
    sortOrder: 95,
    status: "published",
    format: "Workshop Proceedings",
    category: "International Trade Law",
    tags: [
      "Workshop Proceedings",
      "International Trade and Investment Law",
      "International Humanitarian Law",
      "Sovereign Treaty Practice",
    ],
    readingTimeMinutes: 6,
    featured: true,
    isSymposium: true,
    excerpt:
      "Held on August 31, 2026 at DSNLU Visakhapatnam, Beyond Borders 2.0 convened leading treaty practitioners, trade law specialists, and legal academics to examine sovereign treaty practice, international economic law, and contemporary International Humanitarian Law.",
    keyInstruments: [
      "1949 Geneva Conventions",
      "WTO Multilateral Trade Agreements",
      "Vienna Convention on the Law of Treaties (1969)",
    ],
    relatedSlugs: [
      "cilad-monthly-analytical-bulletin",
      "international-trade-and-maritime-law-research-programme",
      "humanitarian-law-refugee-protection-and-human-rights-inquiry",
    ],
    sections: [
      {
        id: "overview",
        heading: "1. Workshop Overview & Institutional Context",
        paragraphs: [
          "On 31 August 2026, the Centre for International Law and Allied Disciplines (CILAD) at Damodaram Sanjivayya National Law University successfully convened the international workshop 'Beyond Borders 2.0: Careers and Trends in International Law' in hybrid mode from the Moot Court Hall at DSNLU.",
          "The workshop was structured to provide law students, researchers, and legal professionals with direct insights into three intersecting dimensions of international legal practice: sovereign treaty negotiation and diplomatic legal advisory work, contemporary developments in international trade and investment law, and pressing challenges in International Humanitarian Law (IHL).",
        ],
        highlightBox: {
          tag: "National Press Coverage",
          source: "The Hindu (Visakhapatnam)",
          title: "Workshop on International Law held at DSNLU",
          url: "https://www.thehindu.com/news/cities/Visakhapatnam/workshop-on-international-law-held-at-dsnlu/article71410647.ece",
        },
      },
      {
        id: "inaugural-address",
        heading: "2. Chief Guest Inaugural Address: Prof. (Dr.) R. Venkata Rao",
        paragraphs: [
          "The inaugural session was graced by Chief Guest Prof. (Dr.) R. Venkata Rao, Distinguished Legal Academic and Vice Chancellor (In-Charge) of the India International University of Legal Education and Research (IIULER), Goa. Having previously served as Vice Chancellor of NLSIU, Bangalore for over a decade and with more than 45 years of teaching and research experience—recognized with the Prof. N.R. Madhava Menon Best Law Teacher Award (2018)—Prof. Rao reflected on the evolving vocation of the international lawyer in an interdependent constitutional and international order.",
        ],
        quote: {
          text: "Rigorous training in public and private international law equips young jurists not merely to interpret existing treaties, but to architect just institutional responses to global crises.",
          attribution:
            "Inaugural Reflections, Beyond Borders 2.0 at DSNLU Visakhapatnam (31 August 2026)",
        },
      },
      {
        id: "thematic-sessions",
        heading: "3. Expert Sessions & Distinguished Speakers",
        paragraphs: [
          "Session I — Sovereign Treaty Practice & Diplomatic Legal Advisory: Delivered by Mr. Uma Shankar Yedla, Former Director (Legal & Treaties), Ministry of External Affairs, Government of India. The session examined how states negotiate, draft, and implement bilateral and multilateral treaties, and the role of the Legal and Treaties Division in advising on public international law.",
          "Session II — Contemporary Issues in International Humanitarian Law: Delivered by Dr. Sukhwinder Kaur Virk, Assistant Professor of Law at Rajiv Gandhi National University of Law (RGNUL), Punjab. The discussion addressed the protection of non-combatants, contemporary armed conflict classifications, and compliance mechanisms under the Geneva Conventions.",
          "Session III — Developments in International Trade & Investment Law: Delivered by Ms. Vanshika Sulaniya, Young Professional at the Centre for Trade and Investment Law (CTIL). The session analyzed cross-border trade rules, WTO dispute settlement dynamics, and emerging policy instruments in international economic law.",
          "Session IV — Founding Vision & Practice Pathways in International Law: Delivered by Ms. Surbhi Gupta, Associate at Trilegal and Founder of CILAD, bridging academic research centres with commercial and international legal practice.",
        ],
        table: {
          caption: "Table 1: Beyond Borders 2.0 Session Roster (31 August 2026)",
          headers: ["Session", "Speaker", "Institutional Affiliation", "Thematic Focus"],
          rows: [
            [
              "Inaugural Address",
              "Prof. (Dr.) R. Venkata Rao",
              "Vice Chancellor (In-Charge), IIULER Goa",
              "Vocation of the International Jurist",
            ],
            [
              "Session I",
              "Mr. Uma Shankar Yedla",
              "Former Director (L&T), Ministry of External Affairs",
              "Sovereign Treaty Practice & Diplomatic Advisory",
            ],
            [
              "Session II",
              "Dr. Sukhwinder Kaur Virk",
              "Assistant Professor of Law, RGNUL Punjab",
              "Contemporary International Humanitarian Law",
            ],
            [
              "Session III",
              "Ms. Vanshika Sulaniya",
              "Young Professional, CTIL",
              "International Trade & Investment Law Trends",
            ],
            [
              "Session IV",
              "Ms. Surbhi Gupta",
              "Associate, Trilegal & Founder, CILAD",
              "Founding Vision & International Practice Pathways",
            ],
          ],
        },
      },
    ],
    footnotes: [
      "Event Record: Beyond Borders 2.0: Careers and Trends in International Law, convened 31 August 2026 in Hybrid Mode (Webex & Moot Court Hall, DSNLU Visakhapatnam).",
      "Faculty Coordination: Dr. Ch. Lakshmi (Honorary Chairperson, CILAD) and Faculty Members Prof. Kondaiah Jonnalagadda, Dr. Sanu Rani Paul, Dr. Neelima B., Ms. Gali Parivarthana, and Dr. Sherley Hepsiba D.",
    ],
  },
  {
    id: "trade-and-maritime-scope",
    slug: "international-trade-and-maritime-law-research-programme",
    title:
      "Legal Architecture of the Global Economy & Oceanic Commons: Trade Law and Law of the Sea at CILAD",
    subtitle: "Thematic Research Brief · Economic & Maritime Law Cluster",
    authors: [
      {
        name: "CILAD Research Wing",
        affiliation: "Damodaram Sanjivayya National Law University",
        bio: "The CILAD Research Wing coordinates doctrinal and policy research across the Centre's eight core domains of international law at DSNLU Visakhapatnam.",
      },
    ],
    date: "2026 Academic Session",
    isoDate: "2026-02-15",
    year: "2026",
    sortOrder: 85,
    status: "published",
    format: "Research Scope Brief",
    category: "Law of the Sea",
    tags: [
      "International Trade and Investment Law",
      "Law of the Sea",
      "UNCLOS",
      "WTO Dispute Settlement",
    ],
    readingTimeMinutes: 4,
    excerpt:
      "An overview of CILAD's research agenda across International Trade Law and the Law of the Sea—examining WTO appellate jurisprudence, maritime boundary delimitation under UNCLOS, and oceanic resource governance.",
    keyInstruments: [
      "UNCLOS 1982",
      "WTO Marrakesh Agreement",
      "BBNJ High Seas Treaty",
      "ICSID & PCA Arbitration Rules",
    ],
    relatedSlugs: [
      "beyond-borders-2-careers-and-trends-in-international-law",
      "cilad-monthly-analytical-bulletin",
    ],
    sections: [
      {
        id: "economic-architecture",
        heading: "1. International Trade Law & Cross-Border Dispute Settlement",
        paragraphs: [
          "International Trade Law constitutes a core research pillar of CILAD. The Centre's inquiry focuses on the legal architecture of the global economy, multilateral trade rules under the World Trade Organization, regional trade agreements, and the resolution of cross-border economic disputes.",
          "Located in the port city of Visakhapatnam on India's eastern seaboard, DSNLU is uniquely positioned to study the intersection of international maritime commerce, seaborne trade regulation, and sovereign economic policy.",
        ],
      },
      {
        id: "oceanic-commons",
        heading: "2. Law of the Sea & Maritime Jurisdictions",
        paragraphs: [
          "Complementing its trade law mandate, CILAD's Law of the Sea cluster investigates the legal frameworks governing maritime jurisdictions, exclusive economic zones, continental shelf claims, and oceanic resources under the 1982 United Nations Convention on the Law of the Sea (UNCLOS) and the jurisprudence of the International Tribunal for the Law of the Sea (ITLOS).",
        ],
      },
    ],
    footnotes: [
      "CILAD Thematic Focus Areas 01 (International Trade Law), 07 (Law of the Sea), and 08 (Dispute Settlement), Damodaram Sanjivayya National Law University.",
    ],
  },
  {
    id: "humanitarian-refugee-human-rights-scope",
    slug: "humanitarian-law-refugee-protection-and-human-rights-inquiry",
    title:
      "Protection of the Individual in Peacetime and Armed Conflict: IHL, Refugee Law & Human Rights Frameworks",
    subtitle: "Thematic Research Brief · Rights & Humanitarian Cluster",
    authors: [
      {
        name: "CILAD Research Wing",
        affiliation: "Damodaram Sanjivayya National Law University",
        bio: "The CILAD Research Wing coordinates doctrinal and policy research across the Centre's eight core domains of international law at DSNLU Visakhapatnam.",
      },
    ],
    date: "2026 Academic Session",
    isoDate: "2026-03-20",
    year: "2026",
    sortOrder: 80,
    status: "published",
    format: "Research Scope Brief",
    category: "International Humanitarian Law",
    tags: [
      "International Humanitarian Law",
      "Refugee and Migration Law",
      "International Human Rights",
      "Geneva Conventions",
    ],
    readingTimeMinutes: 4,
    excerpt:
      "Examining the convergence of International Humanitarian Law, Refugee Law, and International Human Rights Law in addressing contemporary displacement, armed conflict, and international accountability.",
    keyInstruments: [
      "1949 Geneva Conventions",
      "1951 Refugee Convention",
      "ICCPR & ICESCR",
      "Rome Statute of the ICC",
    ],
    relatedSlugs: [
      "beyond-borders-2-careers-and-trends-in-international-law",
      "cilad-monthly-analytical-bulletin",
    ],
    sections: [
      {
        id: "convergence",
        heading: "1. Intersecting Regimes of Human Protection",
        paragraphs: [
          "Three of CILAD's eight core research areas—International Humanitarian Law, Refugee Law, and Human Rights Law—are dedicated to the protection of individuals and vulnerable populations across peacetime and armed conflict.",
          "Rather than treating these fields as isolated silos, CILAD fosters interdisciplinary inquiry into how international human rights obligations interact with the lex specialis of armed conflict and the customary principle of non-refoulement for displaced persons.",
        ],
      },
      {
        id: "contemporary-crises",
        heading: "2. Contemporary Crises & Institutional Accountability",
        paragraphs: [
          "Research initiatives within this cluster examine accountability mechanisms before international criminal tribunals, legal protections for persons displaced by conflict and environmental degradation, and the enforcement of treaty body recommendations.",
        ],
      },
    ],
    footnotes: [
      "CILAD Thematic Focus Areas 03 (Refugee Law), 04 (International Humanitarian Law), and 06 (Human Rights Law), DSNLU Visakhapatnam.",
    ],
  },
  {
    id: "submission-and-editorial-guidelines",
    slug: "call-for-monthly-columns-and-editorial-guidelines",
    title: "CILAD Blog | Call for Blogs: Submission Guidelines",
    subtitle: "Editorial Charter & Submission Guidelines · CILAD, DSNLU Visakhapatnam",
    authors: [
      {
        name: "Editorial Board",
        affiliation:
          "Centre for International Law and Allied Disciplines (CILAD), Damodaram Sanjivayya National Law University, Visakhapatnam",
        bio: "The Centre for International Law and Allied Disciplines (CILAD), Damodaram Sanjivayya National Law University (DSNLU), invites contributions to the CILAD Blog from practitioners, academicians, researchers, and PhD scholars working in international law and allied disciplines.",
      },
    ],
    date: "Submission Guidelines",
    isoDate: "2026-09-15",
    year: "2026",
    sortOrder: 75,
    status: "published",
    format: "Editorial Charter",
    category: "Dispute Settlement",
    tags: [
      "Editorial Guidelines",
      "CILAD Blog",
      "Public International Law",
      "Call for Blogs",
    ],
    readingTimeMinutes: 5,
    excerpt:
      "The Centre for International Law and Allied Disciplines (CILAD), Damodaram Sanjivayya National Law University (DSNLU), invites contributions to the CILAD Blog from practitioners, academicians, researchers, and PhD scholars working in international law and allied disciplines. We welcome original, analytical, and accessible writing that engages with contemporary legal developments, examines emerging questions, or offers comparative and interdisciplinary perspectives on issues of legal and global significance.",
    keyInstruments: [],
    relatedSlugs: [
      "cilad-monthly-analytical-bulletin",
      "international-trade-and-maritime-law-research-programme",
    ],
    sections: [
      {
        id: "scope-of-contributions",
        heading: "1. Scope of Contributions",
        paragraphs: [
          "The Centre for International Law and Allied Disciplines (CILAD), Damodaram Sanjivayya National Law University (DSNLU), invites contributions to the CILAD Blog from practitioners, academicians, researchers, and PhD scholars working in international law and allied disciplines.",
          "We welcome original, analytical, and accessible writing that engages with contemporary legal developments, examines emerging questions, or offers comparative and interdisciplinary perspectives on issues of legal and global significance.",
          "Contributions may address, inter alia:",
        ],
        listItems: [
          "Public and private international law;",
          "International trade, investment, and taxation;",
          "International arbitration and dispute settlement;",
          "International human rights and humanitarian law;",
          "International environmental law and climate governance;",
          "Cross-border transactions, banking and finance, and corporate regulation;",
          "Technology, intellectual property, and emerging regulatory frameworks;",
          "International institutions, global governance, and international relations; and",
          "Comparative legal developments and best practices across jurisdictions.",
        ],
        closingParagraphs: [
          "This list is indicative and not exhaustive. Contributions examining the intersection of international law with domestic law, public policy, economics, technology, or other allied disciplines are particularly welcome.",
        ],
      },
      {
        id: "length-and-format",
        heading: "2. Length and Format",
        paragraphs: [],
        listItems: [
          "Contributions should ordinarily be between 1,200 and 1,800 words, inclusive of headings but exclusive of the author's biography.",
          "Longer or shorter submissions may be considered in exceptional circumstances, at the discretion of the Editorial Board.",
          "Submissions must be written in English.",
          "Authors should use clear headings and subheadings wherever appropriate to improve readability.",
          "Contributions should be cogent, concise, well-structured, and accessible to a readership comprising students, researchers, academics, and legal practitioners.",
        ],
      },
      {
        id: "nature-and-quality-of-submissions",
        heading: "3. Nature and Quality of Submissions",
        paragraphs: [],
        listItems: [
          "Contemporary relevance: Preference will be given to contributions analysing recent judgments, legislative or regulatory developments, international instruments, arbitral decisions, and emerging legal or policy questions.",
          "Original analysis: Submissions should advance a clear argument, offer critical engagement, or develop a distinctive perspective. Mere summaries of legal provisions, judgments, or existing literature are discouraged.",
          "International and interdisciplinary perspective: Authors are encouraged to adopt comparative approaches, examine cross-border implications, and draw upon developments in other jurisdictions where relevant.",
          "Research and accuracy: All legal propositions, factual claims, and arguments must be supported by reliable sources. Authors should ensure that the law and authorities discussed are accurately represented.",
          "Clarity and accessibility: Technical concepts should be explained where necessary, and arguments should be presented in a logical and coherent manner.",
        ],
      },
      {
        id: "citations-and-hyperlinks",
        heading: "4. Citations and Hyperlinks",
        paragraphs: [],
        listItems: [
          "All submissions must contain relevant hyperlinks embedded in the text to the sources relied upon. These may include judicial decisions, legislation, treaties, international instruments, journal articles, reports, books, official documents, and other credible sources.",
          "Authors should hyperlink the relevant words or phrases directly to the source, wherever possible.",
          "Footnotes and endnotes should not be used. Sources must instead be cited through hyperlinks within the body of the contribution.",
          "Authors should prioritise primary sources, official publications, and credible academic or institutional materials wherever available.",
          "Hyperlinks must direct readers to the relevant source and should be checked for accuracy and accessibility before submission.",
        ],
      },
      {
        id: "originality-and-publication-ethics",
        heading: "5. Originality and Publication Ethics",
        paragraphs: [],
        listItems: [
          "Submissions must be the author's original work and must not infringe upon the intellectual property rights of any third party.",
          "Any material, ideas, or arguments drawn from other sources must be appropriately acknowledged through hyperlinks.",
          "Authors must disclose any prior publication of the proposed contribution and any relevant simultaneous submissions.",
          "The Editorial Board reserves the right to decline submissions that do not meet the Centre's standards of originality, research, accuracy, or academic integrity.",
        ],
      },
      {
        id: "co-authorship",
        heading: "6. Co-authorship",
        paragraphs: [],
        listItems: [
          "Co-authorship is permitted, subject to a maximum of two authors per contribution.",
          "The names and relevant affiliations of all co-authors must be included in the submission email.",
          "Where a contribution is jointly authored, all co-authors must be copied on the email containing the submission.",
          "Authors are responsible for ensuring that all co-authors have reviewed and approved the final version submitted for consideration.",
        ],
      },
      {
        id: "submission-procedure",
        heading: "7. Submission Procedure",
        paragraphs: [
          "Authors may submit their contributions by email to cilad@dsnlu.ac.in, with the subject line: Submission | CILAD Blog | [Title of Contribution]",
          "The submission email must include:",
        ],
        orderedList: true,
        listItems: [
          "The complete contribution in an editable document format, preferably Microsoft Word (.docx).",
          "A short author biography of one or two lines for each author, indicating their current designation or affiliation and relevant area of interest or expertise.",
          "The names and affiliations of all co-authors, where applicable.",
        ],
        closingParagraphs: [
          "Where a contribution is co-authored, all co-authors must be copied on the submission email.",
          "Authors are requested to submit the complete article rather than an abstract. The Editorial Board does not ordinarily consider abstracts in place of full submissions.",
        ],
      },
      {
        id: "editorial-review-and-publication",
        heading: "8. Editorial Review and Publication",
        paragraphs: [],
        listItems: [
          "All submissions will undergo an internal editorial review by the CILAD Editorial Board.",
          "The review will consider the submission's relevance to the Centre's scope, originality, quality of analysis, research, clarity, and compliance with these guidelines.",
          "The Editorial Board may suggest revisions, request clarifications, or work with authors to refine their contributions before publication.",
          "Submission does not guarantee acceptance or publication. The final decision rests with the Editorial Board.",
          "Authors are expected to respond to editorial suggestions and make agreed revisions within the timelines communicated by the Editorial Board.",
        ],
      },
      {
        id: "topic-pitches-and-queries",
        heading: "9. Topic Pitches and Queries",
        paragraphs: [
          "Authors who are uncertain whether a proposed topic falls within the scope of the CILAD Blog are welcome to contact the Editorial Board before submitting a full contribution. The Centre is also open to discussing and developing proposed themes with prospective contributors.",
          "However, authors are requested to share a brief description of their proposed topic in such correspondence rather than submit a formal abstract as a substitute for the complete article.",
          "We look forward to receiving thoughtful contributions that further informed discussion on international law and its intersections with allied disciplines.",
        ],
        closingParagraphs: [
          "Editorial Board — Centre for International Law and Allied Disciplines (CILAD), Damodaram Sanjivayya National Law University, Visakhapatnam",
        ],
      },
    ],
    footnotes: [
      "Official Submission Channel: cilad@dsnlu.ac.in · Subject Line: Submission | CILAD Blog | [Title of Contribution] · Centre for International Law and Allied Disciplines (CILAD), Damodaram Sanjivayya National Law University, Visakhapatnam.",
    ],
  },
];

export function parsePublicationDate(pub: CiladPublication): number {
  if (pub.isoDate) {
    return new Date(pub.isoDate).getTime();
  }
  if (pub.date.includes("August 2026") || pub.date.includes("31 August 2026")) {
    return new Date("2026-08-31").getTime();
  }
  if (pub.date.includes("November 2025")) {
    return new Date("2025-11-01").getTime();
  }
  if (pub.year === "2025") {
    return new Date("2025-11-01").getTime();
  }
  if (pub.year === "2026") {
    return new Date("2026-01-01").getTime();
  }
  return 0;
}

export function getPublishedArticles(): CiladPublication[] {
  return CILAD_PUBLICATIONS.filter((pub) => pub.status === "published").sort(
    (a, b) => {
      const timeA = parsePublicationDate(a);
      const timeB = parsePublicationDate(b);
      return timeB - timeA || b.sortOrder - a.sortOrder;
    }
  );
}

export function getPublishedArticlesChronological(order: "asc" | "desc" = "asc"): CiladPublication[] {
  return CILAD_PUBLICATIONS.filter((pub) => pub.status === "published").sort(
    (a, b) => {
      const timeA = parsePublicationDate(a);
      const timeB = parsePublicationDate(b);
      return order === "asc" ? timeA - timeB : timeB - timeA;
    }
  );
}

export function calculateReadingTime(pub: CiladPublication): number {
  const words = pub.sections
    .flatMap((s) => [
      s.heading,
      ...s.paragraphs,
      ...(s.listItems || []),
      ...(s.closingParagraphs || []),
      s.quote?.text || "",
    ])
    .join(" ")
    .trim()
    .split(/\s+/).length;
  const computed = Math.max(2, Math.ceil(words / 180));
  return pub.readingTimeMinutes || computed;
}

export const PATRONS_LIST = [
  {
    role: "Visitor, DSNLU",
    name: "Hon'ble Mr. Justice P. Narasimha",
    designation: "Judge, Supreme Court of India",
  },
  {
    role: "Chief Patron & Chancellor",
    name: "Hon'ble Smt. Justice Lisa Gill",
    designation: "Chief Justice, Andhra Pradesh High Court",
  },
  {
    role: "Patron & Vice Chancellor",
    name: "Prof. (Dr.) D. Surya Prakasa Rao",
    designation: "Vice Chancellor, DSNLU",
  },
];

export const FACULTY_COMMITTEE = {
  chairperson: {
    role: "Honorary Chairperson",
    name: "Dr. Ch. Lakshmi",
    affiliation: "Damodaram Sanjivayya National Law University",
  },
  members: [
    {
      index: "01",
      name: "Prof. Kondaiah Jonnalagadda",
      role: "Faculty Member · CILAD",
    },
    { index: "02", name: "Dr. Sanu Rani Paul", role: "Faculty Member · CILAD" },
    { index: "03", name: "Dr. Neelima B.", role: "Faculty Member · CILAD" },
    {
      index: "04",
      name: "Ms. Gali Parivarthana",
      role: "Faculty Member · CILAD",
    },
    {
      index: "05",
      name: "Dr. Sherley Hepsiba D.",
      role: "Faculty Member · CILAD",
    },
  ],
};

export const STUDENT_EDITORIAL_BOARD = [
  {
    index: "01",
    role: "Convener",
    name: "Shashwat Sinha",
  },
  {
    index: "02",
    role: "Chief Editor",
    name: "Sourav Ghosh",
  },
  {
    index: "03",
    role: "Deputy Editor-in-Chief",
    name: "Atharv Arnav",
  },
  {
    index: "04",
    role: "Joint Co-Convener",
    name: "Zoha Siddiqui",
  },
  {
    index: "05",
    role: "Joint Co-Convener",
    name: "Ruwa",
  },
];

export interface CiladInitiative {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  scope: string;
  linkTo: string;
  linkLabel: string;
  isExternal?: boolean;
}

export const CILAD_INITIATIVES: CiladInitiative[] = [
  {
    id: "cilad-monthly-initiative",
    index: "01",
    title: "CILAD Monthly Analytical Bulletin",
    subtitle: "Flagship Periodical & Case Digest Series",
    description:
      "Published under the aegis of CILAD at DSNLU, CILAD Monthly synthesizes landmark case briefs from international tribunals, multilateral treaty ratifications, and peer-reviewed scholarly commentary across three permanent analytical departments: Global Jurisprudence, Treaty Monitor, and Scholarly Columns.",
    scope: "Public & Private International Law · Monthly Periodical",
    linkTo: "/publications",
    linkLabel: "Explore CILAD Monthly Repository",
  },
  {
    id: "beyond-borders-series",
    index: "02",
    title: "Beyond Borders International Workshop Series",
    subtitle: "Symposia on Careers, Treaties & Contemporary International Law",
    description:
      "Convening sovereign treaty practitioners, Ministry of External Affairs legal advisors, trade law specialists, and academic leaders to examine international legal practice and doctrinal trends—most recently through 'Beyond Borders 2.0: Careers and Trends in International Law' (31 August 2026).",
    scope: "International Symposia & Academic Colloquia",
    linkTo: "/events",
    linkLabel: "View Workshop Record & Proceedings",
  },
  {
    id: "trade-maritime-programme",
    index: "03",
    title: "International Trade & Maritime Law Research Programme",
    subtitle: "Economic & Oceanic Commons Inquiry",
    description:
      "Dedicated research stream investigating multilateral trade rules under the WTO, regional free trade agreements, maritime boundary delimitation under UNCLOS 1982, and International Tribunal for the Law of the Sea (ITLOS) jurisprudence.",
    scope: "Economic & Maritime Law Cluster",
    linkTo: "/article/international-trade-and-maritime-law-research-programme",
    linkLabel: "Read Thematic Research Brief",
  },
  {
    id: "ihl-refugee-human-rights-inquiry",
    index: "04",
    title: "Humanitarian Law, Refugee Protection & Human Rights Inquiry",
    subtitle: "Protection of the Individual in Peacetime and Armed Conflict",
    description:
      "Interdisciplinary research examining the convergence of the 1949 Geneva Conventions, the 1951 Refugee Convention, customary non-refoulement, and international human rights treaties in addressing contemporary displacement and accountability.",
    scope: "Rights & Humanitarian Law Cluster",
    linkTo:
      "/article/humanitarian-law-refugee-protection-and-human-rights-inquiry",
    linkLabel: "Read Thematic Research Brief",
  },
  {
    id: "scholarly-editorial-platform",
    index: "05",
    title: "Editorial Columns & Rolling Peer-Review Forum",
    subtitle: "Student, Researcher & Practitioner Contributions",
    description:
      "An open scholarly forum inviting law students, doctoral researchers, academicians, and practitioners to contribute case briefs, treaty monitor notes, and analytical essays across CILAD's eight domains of inquiry.",
    scope: "Rolling Monthly Editorial Review",
    linkTo: "/submit",
    linkLabel: "View Editorial Guidelines & Contribute",
  },
  {
    id: "dsnlu-institutional-portal",
    index: "06",
    title: "DSNLU Institutional Collaborations & Official Repository",
    subtitle: "Damodaram Sanjivayya National Law University, Visakhapatnam",
    description:
      "Anchored within Damodaram Sanjivayya National Law University, CILAD collaborates with legal scholars, policy centres, and practitioners to advance curriculum enrichment, public lectures, and archival documentation.",
    scope: "University-Affiliated Academic Centre",
    linkTo:
      "https://dsnlu.ac.in/centre-for-international-law-and-allied-disciplines-cilad/",
    linkLabel: "Visit Official DSNLU CILAD Portal",
    isExternal: true,
  },
];

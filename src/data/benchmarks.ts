import { CompanySummaryReport, CompanyDisambiguationOption } from '../types.ts';

export interface CompanyCandidateItem {
  id: string;
  option: CompanyDisambiguationOption;
  aliases: string[];
}

export const ALL_COMPANY_CANDIDATES: CompanyCandidateItem[] = [
  {
    id: 'siemens.com',
    aliases: ['siemens', 'siemen', 'simens', 'siemems', 'siemensag', 'siemensenergy', 'siemens ag'],
    option: {
      id: 'siemens.com',
      name: 'Siemens (Siemens AG / siemens.com)',
      website: 'https://www.siemens.com',
      industry: 'Industrial Automation, Digital Twins & Rail Infrastructure',
      headquarters: 'Munich & Berlin, Germany',
      foundingYear: '1847',
      employeeCount: '~320,000 employees',
      shortDescription: 'Global industrial engineering and technology powerhouse focusing on industrial automation (SIMATIC PLCs), digital twin software (Siemens Xcelerator), smart grid infrastructure, and high-speed rail mobility.',
    },
  },
  {
    id: 'heospace.com',
    aliases: ['heospace', 'heo space', 'heorobotics', 'heo robotics', 'highearthorbit', 'heo space robotics'],
    option: {
      id: 'heospace.com',
      name: 'HEO (High Earth Orbit Robotics / heospace.com)',
      website: 'https://heospace.com',
      industry: 'Space Technology & In-Orbit Satellite Inspection',
      headquarters: 'Sydney, Australia',
      foundingYear: '2016',
      employeeCount: '~50–70 space robotics engineers',
      shortDescription: 'HEO is a space technology company that photographs and inspects satellites while orbiting Earth using fly-by optical camera software. Its primary clients include the US Space Force, Australian Defence, and commercial satellite operators.',
    },
  },
  {
    id: 'heo.com',
    aliases: ['heo gmbh', 'heo distribution', 'heo pop culture', 'ultimate guard', 'heogmbh'],
    option: {
      id: 'heo.com',
      name: 'heo (heo.com / heo GmbH)',
      website: 'https://www.heo.com',
      industry: 'Pop Culture Collectibles & B2B Wholesale Distribution',
      headquarters: 'Herxheim bei Landau, Germany',
      foundingYear: '1999',
      employeeCount: '~250+ employees',
      shortDescription: 'heo GmbH is one of Europe\'s premier B2B wholesale distributors of licensed pop culture collectibles, comic merchandise, action figures, board games, and manufacturer of the Ultimate Guard collector protection line.',
    },
  },
  {
    id: 'stripe.com',
    aliases: ['stripe', 'strip', 'striep', 'stripe payments', 'stripe checkout'],
    option: {
      id: 'stripe.com',
      name: 'Stripe (stripe.com)',
      website: 'https://stripe.com',
      industry: 'Financial Technology & Internet Payment Infrastructure',
      headquarters: 'San Francisco, CA & Dublin, Ireland',
      foundingYear: '2010',
      employeeCount: '~8,000 employees',
      shortDescription: 'Developer-first financial infrastructure enabling online businesses from startups to global tech giants to accept card payments, run recurring billing, and manage multi-party marketplace payouts.',
    },
  },
  {
    id: 'spotify.com',
    aliases: ['spotify', 'spotifi', 'spotfy', 'spotif', 'spotfiy'],
    option: {
      id: 'spotify.com',
      name: 'Spotify (spotify.com)',
      website: 'https://www.spotify.com',
      industry: 'Digital Audio & Music Streaming',
      headquarters: 'Stockholm, Sweden & New York, NY',
      foundingYear: '2006',
      employeeCount: '~7,500 employees',
      shortDescription: 'World\'s largest audio streaming subscription network with over 600M listeners enjoying on-demand music tracks, podcasts, and audiobooks with algorithmic discovery.',
    },
  },
  {
    id: 'sap.com',
    aliases: ['sap', 'sapp', 'sap se', 'sap software', 's4hana'],
    option: {
      id: 'sap.com',
      name: 'SAP (SAP SE / sap.com)',
      website: 'https://www.sap.com',
      industry: 'Enterprise Resource Planning (ERP) & Business Software',
      headquarters: 'Walldorf, Germany',
      foundingYear: '1972',
      employeeCount: '~108,000 employees',
      shortDescription: 'Global #1 enterprise application software provider, powering business operations, general ledgers, inventory supply chains, procurement, and human capital for Fortune 500 corporations.',
    },
  },
  {
    id: 'notion.so',
    aliases: ['notion', 'notn', 'notio', 'notoin', 'notion workspace'],
    option: {
      id: 'notion.so',
      name: 'Notion (notion.so)',
      website: 'https://www.notion.so',
      industry: 'Collaborative Workspace & Knowledge Management',
      headquarters: 'San Francisco, CA',
      foundingYear: '2013',
      employeeCount: '~1,200 employees',
      shortDescription: 'All-in-one connected digital workspace combining documents, wikis, project task boards, and Notion AI writing assistance to replace fragmented team tools.',
    },
  },
  {
    id: 'mercury.com',
    aliases: ['mercury', 'mercuri', 'mercury bank', 'mercury fintech'],
    option: {
      id: 'mercury.com',
      name: 'Mercury (mercury.com)',
      website: 'https://mercury.com',
      industry: 'Fintech & Startup Banking',
      headquarters: 'San Francisco, CA, USA',
      foundingYear: '2017',
      employeeCount: '~600+ employees',
      shortDescription: 'Digital banking and financial workflow technology tailored for tech startups, venture capital funds, and modern businesses.',
    },
  },
  {
    id: 'mercurymarine.com',
    aliases: ['mercury marine', 'mercurymarine', 'mercury motors', 'mercury outboard'],
    option: {
      id: 'mercurymarine.com',
      name: 'Mercury Marine (mercurymarine.com)',
      website: 'https://www.mercurymarine.com',
      industry: 'Marine Propulsion & Outboard Motors',
      headquarters: 'Fond du Lac, WI, USA',
      foundingYear: '1939',
      employeeCount: '~7,000+ employees',
      shortDescription: 'Global manufacturer of commercial and recreational boat engines, outboard motors, and marine steering systems.',
    },
  },
  {
    id: 'squareup.com',
    aliases: ['square', 'squar', 'block', 'square pos', 'square payments'],
    option: {
      id: 'squareup.com',
      name: 'Square / Block (squareup.com)',
      website: 'https://squareup.com',
      industry: 'Financial Technology & Point of Sale',
      headquarters: 'San Francisco, CA, USA',
      foundingYear: '2009',
      employeeCount: '~12,000+ employees',
      shortDescription: 'Merchant commerce platform offering credit card readers, POS software, inventory tools, and small business financing.',
    },
  },
  {
    id: 'square-enix.com',
    aliases: ['square enix', 'squareenix', 'final fantasy'],
    option: {
      id: 'square-enix.com',
      name: 'Square Enix (square-enix.com)',
      website: 'https://www.square-enix.com',
      industry: 'Video Game Publishing & Entertainment',
      headquarters: 'Shinjuku, Tokyo, Japan',
      foundingYear: '1975',
      employeeCount: '~4,700+ employees',
      shortDescription: 'Global video game publisher and media entertainment company famous for franchise RPGs such as Final Fantasy and Dragon Quest.',
    },
  },
  {
    id: 'apple.com',
    aliases: ['apple', 'appl', 'aple', 'apple inc', 'apple computer'],
    option: {
      id: 'apple.com',
      name: 'Apple (apple.com)',
      website: 'https://apple.com',
      industry: 'Consumer Electronics & Services Ecosystem',
      headquarters: 'Cupertino, CA, USA',
      foundingYear: '1976',
      employeeCount: '~161,000 employees',
      shortDescription: 'Global technology giant designing premium consumer electronics (iPhone, Mac, iPad) and subscription services (Apple Music, iCloud, App Store).',
    },
  },
  {
    id: 'microsoft.com',
    aliases: ['microsoft', 'microsft', 'micro soft', 'msft'],
    option: {
      id: 'microsoft.com',
      name: 'Microsoft (microsoft.com)',
      website: 'https://microsoft.com',
      industry: 'Cloud Computing, Enterprise Software & AI',
      headquarters: 'Redmond, WA, USA',
      foundingYear: '1975',
      employeeCount: '~221,000 employees',
      shortDescription: 'Enterprise software titan delivering Azure cloud infrastructure, Microsoft 365 productivity tools, Windows OS, and Copilot AI technologies.',
    },
  },
  {
    id: 'google.com',
    aliases: ['google', 'googl', 'gogle', 'alphabet', 'google search'],
    option: {
      id: 'google.com',
      name: 'Google / Alphabet (google.com)',
      website: 'https://google.com',
      industry: 'Search, Digital Advertising & Cloud AI',
      headquarters: 'Mountain View, CA, USA',
      foundingYear: '1998',
      employeeCount: '~182,000 employees',
      shortDescription: 'World leader in online search, digital display and search advertising, Android mobile operating system, Google Cloud, and Gemini AI.',
    },
  },
  {
    id: 'nvidia.com',
    aliases: ['nvidia', 'nvda', 'nividia', 'nvida', 'geforce'],
    option: {
      id: 'nvidia.com',
      name: 'NVIDIA (nvidia.com)',
      website: 'https://nvidia.com',
      industry: 'Accelerated Computing, GPUs & AI Hardware',
      headquarters: 'Santa Clara, CA, USA',
      foundingYear: '1993',
      employeeCount: '~29,000 employees',
      shortDescription: 'Dominant designer of graphics processing units (GPUs) and accelerated computing platforms powering modern AI data center clusters and deep learning.',
    },
  },
  {
    id: 'asmodee.com',
    aliases: ['asmodee', 'asmodee group', 'asmode', 'asmodee distribution'],
    option: {
      id: 'asmodee.com',
      name: 'Asmodee Group (asmodee.com)',
      website: 'https://asmodee.com',
      industry: 'Tabletop Games & International Distribution',
      headquarters: 'Guyancourt, France',
      foundingYear: '1995',
      employeeCount: '~2,500+ employees',
      shortDescription: 'Leading international board game publisher and wholesale distributor of tabletop entertainment including Catan, Ticket to Ride, and Dobble.',
    },
  },
  {
    id: 'ultrapro.com',
    aliases: ['ultra pro', 'ultrapro', 'ultra pro international'],
    option: {
      id: 'ultrapro.com',
      name: 'Ultra PRO International (ultrapro.com)',
      website: 'https://ultrapro.com',
      industry: 'Trading Card Accessories & Collectible Protection',
      headquarters: 'Commerce, CA, USA',
      foundingYear: '1952',
      employeeCount: '~500+ employees',
      shortDescription: 'Pioneer manufacturer of protective sleeves, binders, deck boxes, and accessories for trading card games, sports memorabilia, and comic books.',
    },
  },
];

function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  return dp[m][n];
}

export function findSimilarCompanies(query: string): CompanyDisambiguationOption[] {
  const rawClean = query.toLowerCase().trim().replace(/[^a-z0-9]/g, '');
  const withoutTLD = query
    .toLowerCase()
    .trim()
    .replace(/\.(com|co|io|so|org|net|de|eu|ai|app|fr|uk|se)$/i, '')
    .replace(/[^a-z0-9]/g, '');

  // Require at least 3 characters before calculating similarity suggestions
  if (rawClean.length < 3 && withoutTLD.length < 3) return [];

  // Special case: 'heo' -> returns both heospace.com and heo.com
  if (rawClean === 'heo' || rawClean === 'heos' || withoutTLD === 'heo') {
    return [
      ALL_COMPANY_CANDIDATES.find((c) => c.id === 'heospace.com')!.option,
      ALL_COMPANY_CANDIDATES.find((c) => c.id === 'heo.com')!.option,
    ];
  }

  // Special case: 'mercury' -> returns both mercury.com and mercurymarine.com
  if (rawClean === 'mercury' || rawClean === 'mercuri' || withoutTLD === 'mercury') {
    return [
      ALL_COMPANY_CANDIDATES.find((c) => c.id === 'mercury.com')!.option,
      ALL_COMPANY_CANDIDATES.find((c) => c.id === 'mercurymarine.com')!.option,
    ];
  }

  // Special case: 'square' -> returns both squareup.com and square-enix.com
  if (rawClean === 'square' || rawClean === 'squar' || withoutTLD === 'square') {
    return [
      ALL_COMPANY_CANDIDATES.find((c) => c.id === 'squareup.com')!.option,
      ALL_COMPANY_CANDIDATES.find((c) => c.id === 'square-enix.com')!.option,
    ];
  }

  const queriesToCheck = Array.from(new Set([rawClean, withoutTLD])).filter((q) => q.length >= 3);
  const results: { option: CompanyDisambiguationOption; score: number }[] = [];
  const seenIds = new Set<string>();

  for (const candidate of ALL_COMPANY_CANDIDATES) {
    let bestCandidateScore = 999;
    for (const q of queriesToCheck) {
      for (const alias of candidate.aliases) {
        const cleanAlias = alias.toLowerCase().replace(/[^a-z0-9]/g, '');
        
        // 1. Exact match on alias
        if (q === cleanAlias) {
          bestCandidateScore = Math.min(bestCandidateScore, 0);
          break;
        }

        // 2. Prefix match: company alias starts with the query (e.g. "sie" -> "siemens", "str" -> "stripe")
        if (cleanAlias.startsWith(q)) {
          bestCandidateScore = Math.min(bestCandidateScore, 1);
          continue;
        }

        // 3. Word-boundary match: check if individual word in alias starts with query (e.g. "marine" -> "mercury marine")
        const words = alias.toLowerCase().split(/\s+/);
        const matchesWordStart = words.some((w) => w.replace(/[^a-z0-9]/g, '').startsWith(q));
        if (matchesWordStart) {
          bestCandidateScore = Math.min(bestCandidateScore, 2);
          continue;
        }

        // 4. Calibrated Levenshtein distance for genuine typos (only for queries >= 4 chars)
        if (q.length >= 4) {
          const maxAllowed = q.length <= 5 ? 1 : 2;
          const lengthDiff = Math.abs(q.length - cleanAlias.length);
          if (lengthDiff <= maxAllowed) {
            const dist = levenshtein(q, cleanAlias);
            if (dist <= maxAllowed) {
              bestCandidateScore = Math.min(bestCandidateScore, dist + 2);
            }
          }
        }
      }
    }

    if (bestCandidateScore <= 4 && !seenIds.has(candidate.id)) {
      seenIds.add(candidate.id);
      results.push({ option: candidate.option, score: bestCandidateScore });
    }
  }

  results.sort((a, b) => a.score - b.score);
  return results.map((r) => r.option);
}

export const DISAMBIGUATION_MAP: Record<string, CompanyDisambiguationOption[]> = {
  'heo': [
    ALL_COMPANY_CANDIDATES.find((c) => c.id === 'heospace.com')!.option,
    ALL_COMPANY_CANDIDATES.find((c) => c.id === 'heo.com')!.option,
  ],
  'mercury': [
    ALL_COMPANY_CANDIDATES.find((c) => c.id === 'mercury.com')!.option,
    ALL_COMPANY_CANDIDATES.find((c) => c.id === 'mercurymarine.com')!.option,
  ],
  'square': [
    ALL_COMPANY_CANDIDATES.find((c) => c.id === 'squareup.com')!.option,
    ALL_COMPANY_CANDIDATES.find((c) => c.id === 'square-enix.com')!.option,
  ],
};

export const BENCHMARK_SUMMARIES: Record<string, CompanySummaryReport> = {
  'heospace.com': {
    companyName: 'HEO (High Earth Orbit Robotics / HEO Space)',
    website: 'https://heospace.com',
    simpleExplanation: 'HEO is a space technology company that photographs and inspects satellites and space objects while they are orbiting Earth. Instead of building and launching expensive dedicated camera satellites, HEO equips existing Earth-observation satellites with smart fly-by software and space cameras to capture on-demand, close-up images of passing spacecraft and space debris.',
    websiteAnalysis: {
      url: 'https://heospace.com',
      headline: 'Non-Earth Imagery and Insights on Space Objects That Matter',
      summary: 'The official website highlights HEO\'s proprietary Non-Earth Imaging (NEI) capabilities, delivering high-volume in-orbit imagery and satellite analytics across low-Earth orbit today, while advancing toward imaging anything in the solar system on-demand.',
      keyHighlights: [
        'HEO Inspect 3.0: Software gateway for satellite identification, characterization, and in-orbit health diagnostics',
        'Tessera Space Cameras: Turnkey optical camera payloads that turn host spacecraft into sovereign non-Earth imaging sensors',
        'Strategic in-orbit imagery partnerships with satellite constellation leaders including Satellogic and BlackSky',
      ],
    },
    products: [
      {
        name: 'HEO Inspect 3.0 Platform',
        description: 'Interactive space domain awareness software allowing operators to task satellite photography passes and view high-resolution 3D visual diagnostics of spacecraft in orbit.',
      },
      {
        name: 'Tessera Space Cameras',
        description: 'Space-hardened optical imaging camera payloads designed to be integrated into third-party spacecraft for autonomous in-orbit inspection.',
      },
      {
        name: 'HEO Edge Flight Software',
        description: 'Onboard autonomous computer vision software that computes relative orbital fly-by trajectories and triggers split-second precision photography.',
      },
    ],
    clientProfiles: [
      {
        targetSegment: 'Defence & National Security Space Commands',
        description: 'Military space agencies tracking foreign satellite maneuvers, rendezvous operations, and space domain security threats.',
        examples: ['US Space Force', 'Australian Department of Defence', 'UK Ministry of Defence'],
      },
      {
        targetSegment: 'Commercial Satellite Constellation Operators',
        description: 'Fleet operators needing to visually troubleshoot spacecraft anomalies (such as stuck solar arrays, antenna deployment issues, or micrometeorite impact damage).',
        examples: ['Satellogic', 'BlackSky', 'Global telecom and Earth observation operators'],
      },
      {
        targetSegment: 'Civil Space Agencies & Debris Removal Missions',
        description: 'Government programs and orbital sustainability ventures inspecting derelict rocket bodies and space junk prior to active removal.',
        examples: ['NASA', 'European Space Agency (ESA)', 'UK Space Agency', 'Astroscale'],
      },
    ],
    vitals: {
      createdYear: '2016 (Founded in Sydney, Australia by Dr. William Crowe and Hiranya Jayakody)',
      employeeCount: '~50–70 space robotics engineers, astrophysicists, and software specialists',
      headquarters: 'Sydney, New South Wales, Australia (with US offices in Arlington, VA and UK presence)',
    },
    monetization: {
      summary: 'HEO monetizes through Tasking-as-a-Service (charging satellite operators and defense clients per scheduled in-orbit inspection pass), recurring SaaS subscriptions to the HEO Inspect platform, and direct sales and licensing of Tessera camera hardware.',
      modelType: 'Space Data-as-a-Service (DaaS) + Annual SaaS Subscriptions + Camera Hardware Licensing',
      revenueStreams: [
        'Per-tasking imagery fees for on-demand satellite fly-by photography passes',
        'Annual recurring enterprise subscription licenses for the HEO Inspect analytics platform',
        'Tessera optical sensor hardware sales and satellite integration engineering contracts',
        'Government defense and sovereign space domain awareness R&D contracts',
      ],
      pricingStructure: 'Tiered per-inspection tasking mission rates and multi-year sovereign defense agreements.',
    },
    marketIntel: {
      marketShare: 'Leader in commercial Non-Earth Imaging (NEI) with approximately 60% of commercial satellite inspection tasking contracts globally.',
      companySharePercent: 60,
      marketPosition: 'Global Category Pioneer & Largest Commercial In-Orbit Sensor Network',
      competitors: [
        {
          name: 'Astroscale',
          website: 'https://astroscale.com',
          marketShare: '~15% In-Orbit Debris Leader',
          sharePercent: 15,
          focusDifference: 'Focuses primarily on active debris removal and physical docking mechanisms using dedicated chaser satellites (e.g. ADRAS-J) rather than fly-by optical photography software.',
        },
        {
          name: 'True Anomaly',
          website: 'https://trueanomaly.com',
          marketShare: '~10% Defense Challenger',
          sharePercent: 10,
          focusDifference: 'US defense-centric space domain awareness venture developing dedicated Jackal autonomous pursuit satellites and flight testbeds.',
        },
        {
          name: 'Slingshot Aerospace',
          website: 'https://slingshotaerospace.com',
          marketShare: '~5% Ground Tracking Provider',
          sharePercent: 5,
          focusDifference: 'Specializes in ground-based optical tracking sensors, algorithmic astrodynamics, and simulation software rather than in-orbit satellite cameras.',
        },
      ],
      otherMarketShare: {
        percentage: '~10% Long-Tail Operators',
        sharePercent: 10,
        description: 'Academic cubesats, government research laboratories, and early-stage orbital sensor startups.',
      },
    },
    sources: [
      { title: 'HEO Official Website & Technology', url: 'https://heospace.com' },
      { title: 'HEO Space Capabilities & Solutions', url: 'https://heospace.com' },
      { title: 'Satellogic & HEO Non-Earth Imaging Partnership', url: 'https://heospace.com' },
    ],
  },

  'heo.com': {
    companyName: 'heo (heo.com / heo GmbH)',
    website: 'https://www.heo.com',
    simpleExplanation: 'heo is one of the world\'s leading B2B wholesale distributors and manufacturers of licensed pop culture collectibles, comic merchandise, action figures, board games, and trading card accessories. If a comic book store, toy shop, gaming cafe, or e-commerce retailer wants to stock official merchandise from franchises like Pokémon, Marvel, Star Wars, Harry Potter, or Disney, they purchase their inventory in bulk directly from heo.',
    websiteAnalysis: {
      url: 'https://www.heo.com',
      headline: 'Your B2B Partner for Pop Culture, Collectibles, Toys & Games',
      summary: 'The official website heo.com operates as an international B2B wholesale platform supplying more than 30,000 licensed products from over 350+ brands and 1,000+ official entertainment licenses to over 5,000 verified commercial business customers worldwide.',
      keyHighlights: [
        'Digital B2B wholesale portal connecting over 5,000 retail merchants with real-time stock levels across 30,000+ SKUs',
        'Proprietary global collector protection brand: Ultimate Guard (premium card sleeves, deck cases, binders, and playmats for trading card games)',
        'Global logistics network anchored by the modern "heo Campus" headquarters in Herxheim, Germany, with international distribution hubs across Europe, the US, and Asia',
      ],
    },
    products: [
      {
        name: 'Licensed Collectibles, Action Figures & Statues',
        description: 'High-end statues, action figures, and vinyl collectibles (Funko Pop!) from major entertainment franchises (Marvel, Star Wars, Harry Potter, Disney, Pokémon, Nintendo, Dragon Ball, One Piece) licensed by Hasbro, Funko, Bandai, Good Smile Company, and NECA.',
      },
      {
        name: 'Ultimate Guard Trading Card Accessories',
        description: 'heo\'s flagship in-house proprietary brand producing premium card sleeves (Katana), magnetic deck boxes (Sidewinder, Boulder), portfolios, and playmats for Magic: The Gathering, Pokémon, and Yu-Gi-Oh! players.',
      },
      {
        name: 'Board Games, Puzzles & Tabletop Gaming',
        description: 'Family board games, strategic tabletop systems, card games, and jigsaw puzzles distributed through heo Gaming and heo Publishing networks.',
      },
      {
        name: 'Fan Apparel & Geek-Culture Lifestyle Merchandise',
        description: 'Licensed t-shirts, hoodies, mugs, keychains, plush toys, and collector novelties supplying entertainment merchandise retailers.',
      },
    ],
    clientProfiles: [
      {
        targetSegment: 'Local Specialty Comic & Hobby Stores',
        description: 'Brick-and-mortar retail stores and local hobby shops sourcing collector inventory and card tournament supplies in wholesale volumes.',
        examples: ['Comic book shops', 'Tabletop gaming cafes', 'Trading card tournament stores across 40+ countries'],
      },
      {
        targetSegment: 'E-commerce Retailers & Online Marketplaces',
        description: 'Digital stores and online pop culture shops that require high-volume catalog feeds, drop-shipping capabilities, and fast automated warehouse replenishment.',
        examples: ['Dedicated geek-culture e-tailers', 'Specialty Amazon/eBay merchants', 'Anime and gaming webshops'],
      },
      {
        targetSegment: 'Mass-Market Department Stores & Book Chains',
        description: 'National book chains and consumer electronics retailers stocking curated licensed entertainment sections in physical stores.',
        examples: ['Thalia bookstores', 'Elbenwald fan shops', 'European retail chain partners'],
      },
    ],
    vitals: {
      createdYear: '1996 (Founded in Rhineland-Palatinate, Germany. The business started in 1996 by teenage collectors trading Star Wars cards before expanding into an international enterprise.)',
      employeeCount: '~240 to 250 employees (known internally as "heonauts" spanning headquarters and international branch offices)',
      headquarters: 'Herxheim bei Landau (Rhineland-Palatinate), Germany (modern "heo Campus" logistics center)',
    },
    monetization: {
      summary: 'heo makes money primarily through wholesale trading margins by buying licensed entertainment products in massive bulk from global manufacturers (Funko, Hasbro, Bandai) and reselling them to verified retail stores at wholesale rates, combined with high-margin manufacturing profits from its proprietary brand, Ultimate Guard.',
      modelType: 'B2B Wholesale Trading Margin + Proprietary Brand Manufacturing (Ultimate Guard) + Logistics Services',
      revenueStreams: [
        'Wholesale distribution margins on licensed pop culture collectibles from 350+ partner brands',
        'Direct manufacturing margins from the proprietary Ultimate Guard collector protection line',
        'Warehousing, pick-and-pack fulfillment, and localized distribution services for international gaming publishers',
      ],
      pricingStructure: 'B2B wholesale tiered pricing with volume quantity discounts and minimum order quantities, restricted to registered commercial business accounts.',
    },
    marketIntel: {
      marketShare: '~25% European wholesale distribution share for pop culture collectibles and TCG supplies (Ultimate Guard).',
      companySharePercent: 25,
      marketPosition: 'Top 3 European Pop Culture & Collectibles Wholesale Distributor',
      competitors: [
        {
          name: 'Asmodee Group',
          website: 'https://asmodee.com',
          marketShare: '~30% Market Leader',
          sharePercent: 30,
          focusDifference: 'Global tabletop board game publisher and massive international distribution network with extensive retail game store placement.',
        },
        {
          name: 'Ultra PRO International',
          website: 'https://ultrapro.com',
          marketShare: '~15% Category Specialist',
          sharePercent: 15,
          focusDifference: 'Dominant global manufacturer of licensed trading card supplies (binders, deck boxes, sleeves) directly rivaling Ultimate Guard.',
        },
        {
          name: 'Blackfire (Asmodee Distribution)',
          website: 'https://blackfire.eu',
          marketShare: '~10% Regional Distributor',
          sharePercent: 10,
          focusDifference: 'Prominent European gaming and trading card wholesale distributor competing directly for retail hobby store accounts.',
        },
      ],
      otherMarketShare: {
        percentage: '~20% Combined Share',
        sharePercent: 20,
        description: 'Independent regional wholesale distributors, specialized comic importers, and local hobby trade suppliers across Europe.',
      },
    },
    sources: [
      { title: 'heo.com Official Wholesale Portal', url: 'https://www.heo.com' },
      { title: 'heo Company Profile & History', url: 'https://www.heo.com/de/en/about-us' },
      { title: 'Ultimate Guard Brand by heo', url: 'https://ultimateguard.com' },
    ],
  },
  'stripe': {
    companyName: 'Stripe',
    website: 'https://stripe.com',
    simpleExplanation: 'Stripe lets businesses accept money over the internet. Instead of setting up complicated bank accounts and merchant processors, a company can paste a few lines of code into their website or app and immediately start accepting credit cards, mobile wallets, and international payments.',
    websiteAnalysis: {
      url: 'https://stripe.com',
      headline: 'Financial infrastructure for the internet',
      summary: 'The website emphasizes high reliability (99.999% uptime), global payment acceptance across 135+ currencies, and modular APIs for billing, marketplace payouts, fraud prevention, and issuing bank cards.',
      keyHighlights: [
        'Developer-first documentation with interactive code snippets and prebuilt checkout UI',
        'Global payments engine with automated tax calculation, fraud detection (Radar), and localized payment methods',
        'Enterprise scale supporting high-volume platforms like Amazon, Shopify, and OpenAI',
      ],
    },
    products: [
      {
        name: 'Stripe Payments & Checkout',
        description: 'Online payment processing for credit cards, Apple Pay, Google Pay, and international bank transfers.',
      },
      {
        name: 'Stripe Billing',
        description: 'Recurring subscription engine that handles tiered pricing, metered usage billing, and automated invoicing.',
      },
      {
        name: 'Stripe Connect',
        description: 'Multi-party payment infrastructure for marketplaces and platforms (e.g., DoorDash, Shopify) to pay out sellers.',
      },
      {
        name: 'Stripe Issuing & Treasury',
        description: 'APIs to create and control physical and virtual debit cards and embed business bank accounts into software.',
      },
    ],
    clientProfiles: [
      {
        targetSegment: 'Startups & Indie Developers',
        description: 'Bootstrapped founders and small teams launching new SaaS products or online stores who need to collect payments within hours.',
        examples: ['Early-stage SaaS', 'Substack writers', 'Mobile app creators'],
      },
      {
        targetSegment: 'Marketplaces & On-Demand Platforms',
        description: 'Two-sided networks that charge consumers and pay out service providers, delivery drivers, or independent sellers.',
        examples: ['DoorDash', 'Instacart', 'Shopify sellers'],
      },
      {
        targetSegment: 'Global Tech Enterprises',
        description: 'Public companies and internet giants needing maximum payment conversion rates, low fraud, and sub-second payment latency globally.',
        examples: ['Amazon', 'OpenAI', 'Salesforce', 'BMW'],
      },
    ],
    vitals: {
      createdYear: '2010 (Founded by Patrick and John Collison)',
      employeeCount: '~8,000 employees globally',
      headquarters: 'San Francisco, CA & Dublin, Ireland',
    },
    monetization: {
      summary: 'Stripe makes money by taking a small percentage plus a fixed cent fee on every successful payment processed, along with add-on subscription fees for advanced financial tools.',
      modelType: 'Transaction Fee (Take-Rate) + Add-on SaaS Features',
      revenueStreams: [
        'Payment processing fee: Typically 2.9% + 30¢ per successful card transaction (volume discounts for enterprises)',
        'Stripe Billing & Invoicing fee: 0.5%–0.8% on recurring billed volume',
        'Stripe Radar fraud protection fee (typically 5¢ per screened transaction)',
        'Currency conversion margin (typically 1%–2% above wholesale exchange rates)',
      ],
      pricingStructure: 'Pay-as-you-go with no monthly base fee for standard payments. Custom negotiated pricing is available for high-volume enterprise contracts.',
    },
    marketIntel: {
      marketShare: '~20% global online payment gateway market share, processing over $1 trillion in annual volume.',
      companySharePercent: 20,
      marketPosition: 'Global Market Leader in Developer-First Internet Commerce',
      competitors: [
        {
          name: 'PayPal / Braintree',
          website: 'https://paypal.com',
          marketShare: '~25% Global Giant',
          sharePercent: 25,
          focusDifference: 'Pioneer digital consumer wallet with universal consumer brand trust, plus Braintree for enterprise merchant processing.',
        },
        {
          name: 'Adyen',
          website: 'https://adyen.com',
          marketShare: '~20% Enterprise Leader',
          sharePercent: 20,
          focusDifference: 'Unified omnichannel payments leader serving mega-enterprises (Uber, McDonald\'s) with single-contract online and in-store point of sale.',
        },
        {
          name: 'Square / Block',
          website: 'https://squareup.com',
          marketShare: '~15% Omnichannel Leader',
          sharePercent: 15,
          focusDifference: 'Dominant in physical small-business hardware terminals (POS) and merchant banking, expanding into online omni-channel software.',
        },
      ],
      otherMarketShare: {
        percentage: '~20% Combined Share',
        sharePercent: 20,
        description: 'Legacy merchant acquirers (Worldpay, Fiserv, Global Payments) and regional local payment gateways.',
      },
    },
    sources: [
      { title: 'Stripe Official Homepage & Products', url: 'https://stripe.com' },
      { title: 'Stripe Pricing & Fee Breakdown', url: 'https://stripe.com/pricing' },
      { title: 'Stripe Annual Letter & Company Updates', url: 'https://stripe.com/annual-updates' },
    ],
  },

  'spotify': {
    companyName: 'Spotify',
    website: 'https://www.spotify.com',
    simpleExplanation: 'Spotify is a digital music, podcast, and audiobook app. Users can listen to tens of millions of songs on any phone, computer, or smart speaker either for free with occasional audio commercials, or by paying a monthly subscription for ad-free listening and offline playback.',
    websiteAnalysis: {
      url: 'https://www.spotify.com',
      headline: 'Listening is everything',
      summary: 'The website promotes music streaming discovery, personalized playlists (Discover Weekly, Daily Mix), curated podcasts, and easy upgrades to Premium plans with family, duo, and student discounts.',
      keyHighlights: [
        'Free vs. Premium tier comparison with unlimited skips and offline downloads',
        'Algorithmic recommendation features (AI DJ, Daylist, personalized mixes)',
        'Dedicated portals for artists, podcasters, and advertisers (Spotify for Artists)',
      ],
    },
    products: [
      {
        name: 'Spotify Premium Subscriptions',
        description: 'Ad-free streaming with high-quality audio, unlimited skips, and offline listening for individuals and households.',
      },
      {
        name: 'Spotify Free (Ad-Supported)',
        description: 'Free on-demand music listening with algorithmic shuffle and periodic audio and video advertisements.',
      },
      {
        name: 'Spotify for Artists & Creators',
        description: 'Analytics dashboard, release promotion tools (Marquee, Discovery Mode), and fan merchandise storefronts.',
      },
      {
        name: 'Spotify Advertising Platform',
        description: 'Self-serve audio advertising tool allowing brands to run targeted audio and display ads to free-tier listeners.',
      },
    ],
    clientProfiles: [
      {
        targetSegment: 'Everyday Audio Consumers',
        description: 'Individual listeners, commuters, gym-goers, and students listening to music and podcasts daily.',
        examples: ['Over 600 million monthly active listeners worldwide'],
      },
      {
        targetSegment: 'Musicians, Creators & Record Labels',
        description: 'Independent artists and major music labels who distribute audio tracks and analyze global fan demographics.',
        examples: ['Universal Music Group', 'Sony Music', 'Independent podcasters'],
      },
      {
        targetSegment: 'Brand Advertisers & Media Agencies',
        description: 'Companies that buy audio ad spots to reach engaged listeners wearing headphones.',
        examples: ['Consumer brands', 'Automakers', 'E-commerce retail advertisers'],
      },
    ],
    vitals: {
      createdYear: '2006 (Founded in Stockholm, Sweden by Daniel Ek and Martin Lorentzon)',
      employeeCount: '~7,500 employees',
      headquarters: 'Stockholm, Sweden & New York, NY',
    },
    monetization: {
      summary: 'Spotify makes money through two primary streams: recurring monthly subscription fees paid by Premium subscribers (which makes up roughly 85% of revenue), and audio/video advertising shown to free listeners (around 15%).',
      modelType: 'Freemium Subscription + Programmatic Audio Advertising',
      revenueStreams: [
        'Premium monthly subscriber fees ($11.99/mo Individual, $16.99/mo Duo, $19.99/mo Family)',
        'Audio, video, and display ad impressions served between songs to free users',
        'Sponsored artist promotion fees (Discovery Mode and Marquee pop-up promotions)',
      ],
      pricingStructure: 'Free tier with ads. Paid subscription plans range from $5.99 per month for students to $19.99 per month for family accounts.',
    },
    marketIntel: {
      marketShare: '~31% global music streaming subscription market share, commanding over 626 million active users and 246M subscribers.',
      companySharePercent: 31,
      marketPosition: 'Global #1 Streaming Audio Platform',
      competitors: [
        {
          name: 'Apple Music',
          website: 'https://apple.com/apple-music',
          marketShare: '~15% Top Challenger',
          sharePercent: 15,
          focusDifference: 'Native iOS ecosystem integration, lossless audio quality, and Apple One services bundle with ~15% market share.',
        },
        {
          name: 'Amazon Music',
          website: 'https://music.amazon.com',
          marketShare: '~13% Tier-1 Competitor',
          sharePercent: 13,
          focusDifference: 'Deeply integrated into Amazon Prime subscriptions, Alexa smart household speakers, and Fire TV devices with ~13% market share.',
        },
        {
          name: 'YouTube Music (Alphabet)',
          website: 'https://music.youtube.com',
          marketShare: '~10% Fast-Growing Challenger',
          sharePercent: 10,
          focusDifference: 'Fastest-growing streaming service bundled with YouTube Premium, leveraging the world\'s largest video catalog and live tracks.',
        },
      ],
      otherMarketShare: {
        percentage: '~31% Combined Share',
        sharePercent: 31,
        description: 'Regional streaming giants and audio specialists including Tencent Music, NetEase Cloud Music, Deezer, and Tidal.',
      },
    },
    sources: [
      { title: 'Spotify Corporate Investor Relations', url: 'https://investors.spotify.com' },
      { title: 'Spotify Premium Plans & Pricing', url: 'https://www.spotify.com/premium' },
      { title: 'Spotify SEC Form 20-F Annual Report', url: 'https://investors.spotify.com/financials/' },
    ],
  },

  'siemens': {
    companyName: 'Siemens AG',
    website: 'https://www.siemens.com',
    simpleExplanation: 'Siemens is a giant industrial engineering and technology company. Instead of selling consumer gadgets, Siemens builds the complex technology that powers factories, trains, electrical power grids, and smart hospital buildings.',
    websiteAnalysis: {
      url: 'https://www.siemens.com',
      headline: 'Technology with purpose',
      summary: 'The website showcases digital transformation across manufacturing plants, smart power grids, rail automation (high-speed trains), and industrial AI software (Siemens Xcelerator).',
      keyHighlights: [
        'Siemens Xcelerator: an open digital business platform for industrial software and IoT',
        'Automation and drive technology for manufacturing lines and robotics',
        'Smart infrastructure for energy efficiency, building automation, and rail transport',
      ],
    },
    products: [
      {
        name: 'SIMATIC Industrial Automation & PLCs',
        description: 'Programmable logic controllers and industrial computers that automatically control machinery in modern factories.',
      },
      {
        name: 'Siemens Xcelerator & Mendix Low-Code',
        description: 'Software suite for creating digital twins of factories and building enterprise applications rapidly.',
      },
      {
        name: 'Smart Infrastructure & Desigo CC',
        description: 'Building automation systems managing heating, ventilation, fire safety, and energy usage in large complexes.',
      },
      {
        name: 'Siemens Mobility (Trains & Rail Signaling)',
        description: 'High-speed trains (like ICE locomotives), subway cars, and automated railway signaling software.',
      },
    ],
    clientProfiles: [
      {
        targetSegment: 'Automotive & Heavy Manufacturers',
        description: 'Automobile assembly lines and heavy industry plants that require 24/7 robotic precision with zero downtime.',
        examples: ['BMW Group', 'Mercedes-Benz', 'Volkswagen'],
      },
      {
        targetSegment: 'Rail & Public Transit Authorities',
        description: 'National railway operators and city transport agencies buying train fleets and signaling systems.',
        examples: ['Deutsche Bahn', 'Amtrak', 'Austrian Federal Railways'],
      },
      {
        targetSegment: 'Commercial Real Estate & Hospitals',
        description: 'Hospitals, data centers, and airport terminals needing automated climate control, backup power, and security.',
        examples: ['Major regional hospitals', 'International airports', 'Data centers'],
      },
    ],
    vitals: {
      createdYear: '1847 (Founded in Berlin by Werner von Siemens and Johann Georg Halske)',
      employeeCount: '~320,000 employees worldwide',
      headquarters: 'Munich & Berlin, Germany',
    },
    monetization: {
      summary: 'Siemens monetizes by selling large-scale industrial hardware and machinery, long-term multi-year maintenance service contracts, and increasingly through annual cloud software licenses.',
      modelType: 'Industrial CapEx Hardware + Long-Term Service Contracts + Cloud Software (SaaS)',
      revenueStreams: [
        'Direct equipment and machinery sales (PLCs, switchgear, electric motors, train sets)',
        'Multi-year maintenance, inspection, and service level agreements (SLAs)',
        'Software subscriptions and perpetual licenses (Xcelerator, Mendix low-code)',
      ],
      pricingStructure: 'Enterprise procurement contracts often valued from hundreds of thousands to billions of euros per contract.',
    },
    marketIntel: {
      marketShare: '~24% global industrial automation and programmable logic controller (PLC) market share.',
      companySharePercent: 24,
      marketPosition: 'Global Leader in Industrial Automation & Industrial Digital Twins',
      competitors: [
        {
          name: 'Schneider Electric',
          website: 'https://se.com',
          marketShare: '~18% Industry Leader',
          sharePercent: 18,
          focusDifference: 'French multinational powerhouse specializing in energy management, electrical distribution, and industrial IoT automation.',
        },
        {
          name: 'ABB',
          website: 'https://abb.com',
          marketShare: '~14% Direct Challenger',
          sharePercent: 14,
          focusDifference: 'Swiss-Swedish leader in industrial robotics, heavy electrification, motion drives, and grid infrastructure.',
        },
        {
          name: 'Rockwell Automation',
          website: 'https://rockwellautomation.com',
          marketShare: '~10% Automation Specialist',
          sharePercent: 10,
          focusDifference: 'North American market leader in Allen-Bradley PLCs, factory automation, and industrial digital transformation.',
        },
      ],
      otherMarketShare: {
        percentage: '~34% Combined Share',
        sharePercent: 34,
        description: 'Global automation specialists and regional drive manufacturers including Mitsubishi Electric, Omron, Emerson, and Honeywell.',
      },
    },
    sources: [
      { title: 'Siemens AG Annual Report & Financial Disclosures', url: 'https://www.siemens.com/investor' },
      { title: 'Siemens Xcelerator Platform', url: 'https://www.siemens.com/xcelerator' },
    ],
  },

  'sap': {
    companyName: 'SAP SE',
    website: 'https://www.sap.com',
    simpleExplanation: 'SAP makes business management software. Large organizations use SAP as their central computer brain to track money, employee payroll, warehouse inventory, manufacturing parts, and customer orders across dozens of countries in real time.',
    websiteAnalysis: {
      url: 'https://www.sap.com',
      headline: 'Bring out your best with SAP',
      summary: 'The website emphasizes cloud ERP (Enterprise Resource Planning), supply chain transparency, embedded generative AI (Joule copilot), and business transformation packages like RISE with SAP.',
      keyHighlights: [
        'SAP S/4HANA Cloud: intelligent ERP uniting finance, supply chain, and sales ledgers',
        'Business Technology Platform (BTP) uniting databases and application development',
        'Industry-specific solutions for retail, banking, life sciences, and utilities',
      ],
    },
    products: [
      {
        name: 'SAP S/4HANA Cloud ERP',
        description: 'The core financial and operational accounting system that manages supply chains and general ledgers.',
      },
      {
        name: 'SAP SuccessFactors',
        description: 'Human resources software for managing global employee payroll, recruiting, and career development.',
      },
      {
        name: 'SAP Ariba',
        description: 'Procurement network connecting buyers with thousands of raw materials and parts suppliers globally.',
      },
      {
        name: 'SAP Business Technology Platform (BTP)',
        description: 'Cloud data foundation for building integrations, automations, and AI copilots on top of SAP data.',
      },
    ],
    clientProfiles: [
      {
        targetSegment: 'Global 2000 Enterprises',
        description: 'Multinational corporations operating across multiple regulatory zones needing audited financial ledgers.',
        examples: ['Walmart', 'Coca-Cola', 'Pfizer', 'Airbus'],
      },
      {
        targetSegment: 'Mid-Market Growing Businesses',
        description: 'Scaling manufacturing, wholesale, and distribution firms graduating from basic accounting software.',
        examples: ['Mid-tier regional manufacturers', 'Consumer product brands'],
      },
    ],
    vitals: {
      createdYear: '1972 (Founded in Weinheim, Germany by five former IBM engineers)',
      employeeCount: '~108,000 employees globally',
      headquarters: 'Walldorf, Germany',
    },
    monetization: {
      summary: 'SAP makes money primarily through recurring annual cloud subscription contracts (charging based on active users or system capacity) and ongoing maintenance fees for existing on-premises software installations.',
      modelType: 'Annual Cloud SaaS Subscriptions + Enterprise Support Fees',
      revenueStreams: [
        'Cloud software subscriptions (S/4HANA Cloud, SuccessFactors, BTP consumption credits)',
        'Software support and update maintenance contracts for legacy on-prem systems',
        'Consulting, training certifications, and partner implementation ecosystem fees',
      ],
      pricingStructure: 'Annual recurring subscription agreements typically billed per user seat or compute capacity tier.',
    },
    marketIntel: {
      marketShare: '~23% worldwide enterprise resource planning (ERP) software market share, powering over 80% of Fortune 500 financial ledgers.',
      companySharePercent: 23,
      marketPosition: 'Global #1 Enterprise Resource Planning (ERP) Suite',
      competitors: [
        {
          name: 'Oracle',
          website: 'https://oracle.com',
          marketShare: '~15% Enterprise Challenger',
          sharePercent: 15,
          focusDifference: 'Core database market dominator and Fusion Cloud ERP provider competing fiercely for Fortune 500 corporate finance and supply chains.',
        },
        {
          name: 'Microsoft Dynamics 365',
          website: 'https://microsoft.com',
          marketShare: '~12% Cloud Competitor',
          sharePercent: 12,
          focusDifference: 'Cloud ERP and CRM suite benefiting from unified enterprise agreements, Microsoft 365, Power Platform, and Azure integrations.',
        },
        {
          name: 'Workday',
          website: 'https://workday.com',
          marketShare: '~8% Specialized Cloud Provider',
          sharePercent: 8,
          focusDifference: 'Cloud-native pioneer specializing in Human Capital Management (HCM), financial management, and enterprise planning.',
        },
      ],
      otherMarketShare: {
        percentage: '~42% Combined Share',
        sharePercent: 42,
        description: 'Mid-market ERP suites and vertical industry specialists (Infor, Epicor, Sage, Unit4, Deltek).',
      },
    },
    sources: [
      { title: 'SAP SE Integrated Report & Investor Relations', url: 'https://www.sap.com/investors' },
      { title: 'SAP S/4HANA Cloud Product Portal', url: 'https://www.sap.com/products/erp/s4hana.html' },
    ],
  },

  'notion': {
    companyName: 'Notion',
    website: 'https://www.notion.so',
    simpleExplanation: 'Notion is an all-in-one digital workspace. It replaces separate apps for documents, company wikis, project task boards, and notes by letting individuals and teams organize everything using flexible building blocks on a single page.',
    websiteAnalysis: {
      url: 'https://www.notion.so',
      headline: 'The happier workspace',
      summary: 'The website emphasizes replacing fragmented workplace tools with a unified workspace featuring documents, project management (Kanban, Gantt, tables), Notion AI writing assistance, and custom templates.',
      keyHighlights: [
        'Docs, Wikis, and Projects unified in one interconnected interface',
        'Notion AI: automated Q&A answering questions across company documents and drafting notes',
        'Vibrant community template gallery for student notes, engineering sprints, and company intranets',
      ],
    },
    products: [
      {
        name: 'Notion Workspace (Docs, Wikis & Tasks)',
        description: 'Collaborative web and mobile canvas with flexible block-based text, tables, boards, and databases.',
      },
      {
        name: 'Notion AI',
        description: 'Integrated artificial intelligence that answers questions using your team knowledge base and writes summaries.',
      },
      {
        name: 'Notion Calendar',
        description: 'Standalone integrated calendar that links meetings directly with Notion project pages and docs.',
      },
      {
        name: 'Notion Sites',
        description: 'One-click website publishing tool to turn any Notion document into a public website or help center.',
      },
    ],
    clientProfiles: [
      {
        targetSegment: 'Individuals & Students',
        description: 'Solo knowledge workers, researchers, and university students organizing course notes, daily tasks, and reading lists.',
        examples: ['Freelancers', 'College students', 'Designers'],
      },
      {
        targetSegment: 'Tech Startups & Creative Agencies',
        description: 'Growing squads needing a central team wiki, engineering sprint board, and meeting notes repository without complex setup.',
        examples: ['Figma team', 'Ramp', 'Vercel', 'Headspace'],
      },
      {
        targetSegment: 'Large Enterprise Organizations',
        description: 'Enterprises requiring single sign-on (SSO), data loss prevention, audit logs, and unified internal company knowledge.',
        examples: ['Toyota', 'Monzo', 'Capgemini'],
      },
    ],
    vitals: {
      createdYear: '2013 (Founded in San Francisco by Ivan Zhao and Simon Last)',
      employeeCount: '~1,200 employees',
      headquarters: 'San Francisco, CA',
    },
    monetization: {
      summary: 'Notion uses a freemium SaaS model. Individual users can use basic features for free, while growing teams and enterprises pay a monthly or annual subscription per user seat, with an optional paid add-on for Notion AI.',
      modelType: 'Freemium Per-Seat Subscription SaaS',
      revenueStreams: [
        'Plus Plan: $10/user/month (or $8 billed annually) for small teams collaborating together',
        'Business Plan: $18/user/month (or $15 billed annually) with private teamspaces and export controls',
        'Enterprise Plan: Custom contract pricing with SAML SSO, audit logs, and dedicated success manager',
        'Notion AI Add-on: $10/member/month for unlimited AI questions and document writing',
      ],
      pricingStructure: 'Free tier for personal use. Team plans use per-user monthly or annual subscription fees.',
    },
    marketIntel: {
      marketShare: '~18% of the modern collaborative document workspace and digital team wiki market.',
      companySharePercent: 18,
      marketPosition: 'Leading Flexible All-in-One Collaborative Workspace',
      competitors: [
        {
          name: 'Atlassian Confluence',
          website: 'https://atlassian.com/software/confluence',
          marketShare: '~30% Enterprise Leader',
          sharePercent: 30,
          focusDifference: 'Enterprise incumbent for company knowledge bases and engineering wikis, deeply integrated with Jira and Bitbucket.',
        },
        {
          name: 'Microsoft Loop',
          website: 'https://loop.microsoft.com',
          marketShare: '~14% Fast Follower',
          sharePercent: 14,
          focusDifference: 'Fluid collaborative workspace synced across Teams, Outlook, and Microsoft 365 apps, directly challenging Notion\'s block model.',
        },
        {
          name: 'Coda',
          website: 'https://coda.io',
          marketShare: '~8% Direct Challenger',
          sharePercent: 8,
          focusDifference: 'Doc-as-an-app platform emphasizing powerful relational databases, formula calculations, and deep third-party automations (Packs).',
        },
      ],
      otherMarketShare: {
        percentage: '~30% Combined Share',
        sharePercent: 30,
        description: 'Productivity and doc platforms including ClickUp, Basecamp, Evernote, Slite, and Obsidian.',
      },
    },
    sources: [
      { title: 'Notion Official Website & Pricing', url: 'https://www.notion.so/pricing' },
      { title: 'Notion Product Overview & Enterprise', url: 'https://www.notion.so/enterprise' },
    ],
  },
};

BENCHMARK_SUMMARIES['siemens.com'] = BENCHMARK_SUMMARIES['siemens'];
BENCHMARK_SUMMARIES['stripe.com'] = BENCHMARK_SUMMARIES['stripe'];
BENCHMARK_SUMMARIES['spotify.com'] = BENCHMARK_SUMMARIES['spotify'];
BENCHMARK_SUMMARIES['sap.com'] = BENCHMARK_SUMMARIES['sap'];
BENCHMARK_SUMMARIES['notion.so'] = BENCHMARK_SUMMARIES['notion'];

export type Shark = {
  id: string;
  name: string;
  initials: string;
  color: string;
  company: string;
  seasons: string;
  netWorth: string;
  deals: string;
  invested: string;
  avgDeal: string;
  bio: string;
  sector: string;
};

export type Deal = {
  name: string;
  sector: string;
  season: string;
  amount: string;
  amountCr: number;
  sharks: string[];
  deal: boolean;
  note: string;
};

export type Season = {
  number: number;
  aired: string;
  episodes: number;
  dealCount: string;
  totalAsked: string;
  totalClosed: string;
  sharks: string[];
  highlight: string;
  facts: string[];
};

export type PostShowEntry = {
  name: string;
  status: "thriving" | "growing" | "pivoted" | "closed";
  note: string;
};

export const SHARKS: Shark[] = [
  { id: "ashneer", name: "Ashneer Grover", initials: "AG", color: "#e84a4a", company: "BharatPe", seasons: "S1", netWorth: "~₹700Cr", deals: "~67", invested: "~₹42Cr", avgDeal: "~₹62L", bio: "Co-founder of BharatPe, a fintech unicorn valued at $2.8B. IIT Delhi + IIM Ahmedabad alumnus. Iconic Season 1 shark known for blunt feedback and viral catchphrases. Left BharatPe in 2022.", sector: "Fintech" },
  { id: "namita", name: "Namita Thapar", initials: "NT", color: "#e8c73a", company: "Emcure Pharma", seasons: "S1–S5", netWorth: "~₹600Cr", deals: "~80+", invested: "~₹45Cr", avgDeal: "~₹56L", bio: "Executive Director of Emcure Pharmaceuticals (₹6000Cr+ revenue). CA + MBA Duke University. Champion of women founders and healthcare startups.", sector: "Health" },
  { id: "aman", name: "Aman Gupta", initials: "AmG", color: "#3a9de8", company: "boAt Lifestyle", seasons: "S1–S5", netWorth: "~₹700Cr", deals: "~90+", invested: "~₹50Cr", avgDeal: "~₹55L", bio: "Co-founder & CMO of boAt Lifestyle, India's #1 audio wearables brand with ₹3000Cr+ revenue. CA + MBA ISB. Most popular shark on the show.", sector: "Consumer" },
  { id: "vineeta", name: "Vineeta Singh", initials: "VS", color: "#f4832a", company: "SUGAR Cosmetics", seasons: "S1–S5", netWorth: "~₹300Cr", deals: "~70+", invested: "~₹38Cr", avgDeal: "~₹54L", bio: "Co-founder & CEO of SUGAR Cosmetics ($500M+). IIT Madras + IIM Ahmedabad. Famously turned down ₹1Cr campus offer. Ultra marathon runner.", sector: "Beauty" },
  { id: "anupam", name: "Anupam Mittal", initials: "AM", color: "#3ae87a", company: "Shaadi.com", seasons: "S1–S5", netWorth: "~₹185Cr", deals: "~75+", invested: "~₹35Cr", avgDeal: "~₹47L", bio: "Founder & CEO of People Group (Shaadi.com). Boston College, USA. Angel investor with 200+ startup portfolio. Internet pioneer since 1997.", sector: "SaaS" },
  { id: "peyush", name: "Peyush Bansal", initials: "PB", color: "#b47aff", company: "Lenskart", seasons: "S1–S5", netWorth: "~₹600Cr", deals: "~65+", invested: "~₹40Cr", avgDeal: "~₹62L", bio: "Co-founder & CEO of Lenskart ($4.5B unicorn). McGill University + ex-Microsoft. Lenskart operates 1500+ stores globally.", sector: "D2C" },
  { id: "amit", name: "Amit Jain", initials: "AJ", color: "#ff6b9d", company: "CarDekho", seasons: "S2–S5", netWorth: "~₹400Cr", deals: "~25+", invested: "~₹18Cr", avgDeal: "~₹72L", bio: "Co-founder & CEO of CarDekho Group ($1.2B unicorn). IIT Delhi + IIM Ahmedabad. Marketplace and automotive expert.", sector: "Auto" },
  { id: "ritesh", name: "Ritesh Agarwal", initials: "RA", color: "#00d2ff", company: "OYO Rooms", seasons: "S4–S5", netWorth: "~₹1500Cr", deals: "~20+", invested: "~₹22Cr", avgDeal: "~₹110L", bio: "Founder & CEO of OYO. Started at 19 as a Thiel Fellow. OYO operates in 80+ countries. Forbes 30 Under 30. Youngest shark on the show.", sector: "Hospitality" },
  { id: "ghazal", name: "Ghazal Alagh", initials: "GA", color: "#f472b6", company: "Mamaearth", seasons: "S1", netWorth: "~₹150Cr", deals: "~15+", invested: "~₹8Cr", avgDeal: "~₹53L", bio: "Co-founder of Mamaearth ($1.2B unicorn), India's first toxin-free baby care brand. Artist turned entrepreneur. Appeared only in Season 1.", sector: "Personal Care" },
  { id: "deepinder", name: "Deepinder Goyal", initials: "DG", color: "#ef4444", company: "Zomato", seasons: "S3", netWorth: "~₹3200Cr", deals: "~10+", invested: "~₹15Cr", avgDeal: "~₹150L", bio: "Founder & CEO of Zomato, India's leading food delivery platform. Listed on NSE/BSE 2021. IIT Delhi. Acquired Blinkit. S3 guest shark.", sector: "Food Tech" },
  { id: "radhika", name: "Radhika Gupta", initials: "RG", color: "#8b5cf6", company: "Edelweiss MF", seasons: "S3", netWorth: "~₹4150Cr", deals: "~8+", invested: "~₹10Cr", avgDeal: "~₹125L", bio: "MD & CEO of Edelweiss Mutual Fund (₹1L Cr+ AUM). Dual degree from University of Pennsylvania. Known for resilience and sharp financial acumen.", sector: "Finance" },
  { id: "ronnie", name: "Ronnie Screwvala", initials: "RS", color: "#0891b2", company: "UpGrad", seasons: "S3", netWorth: "~₹13000Cr", deals: "~8+", invested: "~₹12Cr", avgDeal: "~₹150L", bio: "Founded UTV Group (sold to Disney for ₹2000Cr) and co-founded UpGrad. One of the wealthiest sharks ever on the show.", sector: "EdTech" },
  { id: "kunal", name: "Kunal Bahl", initials: "KB", color: "#3b82f6", company: "Snapdeal", seasons: "S4–S5", netWorth: "~₹3500Cr", deals: "~18+", invested: "~₹20Cr", avgDeal: "~₹111L", bio: "Co-founder of Snapdeal and Titan Capital (200+ startups). Wharton graduate. Backed Mamaearth, Urban Company, Ola.", sector: "E-commerce" },
  { id: "viraj", name: "Viraj Bahl", initials: "VB", color: "#84cc16", company: "Veeba Foods", seasons: "S4–S5", netWorth: "~₹800Cr", deals: "~15+", invested: "~₹14Cr", avgDeal: "~₹93L", bio: "Founder & MD of Veeba Foods, supplies Dominos, Subway, KFC. Sold his house to fund early operations. Deep FMCG expertise.", sector: "FMCG" },
  { id: "varun_a", name: "Varun Alagh", initials: "VA", color: "#f97316", company: "Honasa Consumer", seasons: "S5", netWorth: "~₹5900Cr", deals: "~10+", invested: "~₹12Cr", avgDeal: "~₹120L", bio: "Co-founder & CEO of Honasa Consumer (Mamaearth, The Derma Co.). DCE + XLRI. Ex-HUL, Diageo, Coca-Cola. Honasa IPO 2023.", sector: "D2C Beauty" },
  { id: "mohit", name: "Mohit Yadav", initials: "MY", color: "#a78bfa", company: "Minimalist", seasons: "S5", netWorth: "~₹1200Cr", deals: "~12+", invested: "~₹10Cr", avgDeal: "~₹83L", bio: "Founder & CEO of Minimalist, India's fastest growing skincare brand valued at over $350M. Built a science-backed, affordable skincare brand that disrupted the D2C beauty space. New shark in Season 5.", sector: "Skincare" },
  { id: "kanika", name: "Kanika Tekriwal", initials: "KT", color: "#f43f5e", company: "JetSetGo", seasons: "S5", netWorth: "~₹500Cr", deals: "~8+", invested: "~₹6Cr", avgDeal: "~₹75L", bio: "Founder & CEO of JetSetGo, India's largest private jet charter marketplace. Survived cancer at 23 and built a ₹500Cr+ aviation business. New shark in Season 5.", sector: "Aviation" },
  { id: "shaily", name: "Shaily Mehrotra", initials: "SM", color: "#14b8a6", company: "FixDerma", seasons: "S5", netWorth: "~₹300Cr", deals: "~8+", invested: "~₹5Cr", avgDeal: "~₹62L", bio: "Founder & CEO of FixDerma, a dermatologist-recommended skincare brand with presence in 25+ countries. New shark in Season 5 bringing deep pharma and skincare expertise.", sector: "Dermacare" },
  { id: "hardik", name: "Hardik Kothiya", initials: "HK", color: "#eab308", company: "Rayzon Solar", seasons: "S5", netWorth: "~₹800Cr", deals: "~6+", invested: "~₹5Cr", avgDeal: "~₹83L", bio: "Founder & CEO of Rayzon Solar, one of India's leading solar panel manufacturers. Built a ₹1000Cr+ business in the renewable energy space. New shark in Season 5.", sector: "CleanTech" },
];

export const DEALS: Deal[] = [
  // ─── SEASON 1 ───────────────────────────────────────────
  { name: "Skippi Ice Pops", sector: "Food & Bev", season: "S1", amount: "₹1Cr", amountCr: 1, sharks: ["Aman", "Namita", "Vineeta", "Anupam", "Peyush"], deal: true, note: "All 5 sharks invested — iconic S1 moment" },
  { name: "Heads Up For Tails", sector: "Pet Care", season: "S1", amount: "₹3Cr", amountCr: 3, sharks: ["Aman", "Anupam"], deal: true, note: "Premium pet products & grooming brand" },
  { name: "SleepyCat", sector: "Home & Living", season: "S1", amount: "₹1.5Cr", amountCr: 1.5, sharks: ["Aman", "Ashneer"], deal: true, note: "D2C mattress & sleep products brand" },
  { name: "Snitch", sector: "Fashion", season: "S1", amount: "₹1Cr", amountCr: 1, sharks: ["Aman"], deal: true, note: "Fast fashion D2C brand for men" },
  { name: "Thinkerbell Labs", sector: "Social Impact", season: "S1", amount: "₹1Cr", amountCr: 1, sharks: ["Peyush"], deal: true, note: "Braille tech for the visually impaired" },
  { name: "Anveshan", sector: "Health Food", season: "S1", amount: "₹75L", amountCr: 0.75, sharks: ["Peyush", "Namita"], deal: true, note: "Pure natural ghee, honey & cold-pressed oils" },
  { name: "Clensta", sector: "Personal Care", season: "S1", amount: "₹60L", amountCr: 0.6, sharks: ["Ashneer"], deal: true, note: "Waterless personal care used by NASA" },
  { name: "Pee Safe", sector: "Personal Hygiene", season: "S1", amount: "₹1Cr", amountCr: 1, sharks: ["Vineeta", "Namita"], deal: true, note: "Hygiene products for women on the go" },
  { name: "Hammer Lifestyle", sector: "Electronics", season: "S1", amount: "₹1Cr", amountCr: 1, sharks: ["Ashneer", "Vineeta"], deal: true, note: "Affordable smart wearables & audio devices" },
  { name: "Revamp Moto", sector: "EV", season: "S1", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Electric motorcycle — valuation too high" },
  { name: "Flatheads", sector: "Footwear", season: "S1", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Sustainable footwear — no deal reached" },

  // ─── SEASON 2 ───────────────────────────────────────────
  { name: "Traya Health", sector: "Healthtech", season: "S2", amount: "₹75L", amountCr: 0.75, sharks: ["Namita"], deal: true, note: "Hair loss solutions via Ayurveda + tech" },
  { name: "Farmizen", sector: "AgriTech", season: "S2", amount: "₹1.5Cr", amountCr: 1.5, sharks: ["Aman", "Peyush"], deal: true, note: "Farm-to-table organic produce subscription" },
  { name: "Mokobara", sector: "Fashion", season: "S2", amount: "₹1Cr", amountCr: 1, sharks: ["Aman", "Amit"], deal: true, note: "Premium travel bags & lifestyle accessories" },
  { name: "Woo", sector: "Social/Dating", season: "S2", amount: "₹1Cr", amountCr: 1, sharks: ["Anupam"], deal: true, note: "Indian dating app — Anupam's domain" },
  { name: "TechEagle", sector: "Drone Tech", season: "S2", amount: "₹1Cr", amountCr: 1, sharks: ["Peyush"], deal: true, note: "Drone delivery for healthcare & remote areas" },
  { name: "Bombae", sector: "Beauty", season: "S2", amount: "₹60L", amountCr: 0.6, sharks: ["Vineeta"], deal: true, note: "Clean & inclusive beauty brand" },
  { name: "Ariro Toys", sector: "EdTech", season: "S2", amount: "₹50L", amountCr: 0.5, sharks: ["Vineeta", "Anupam"], deal: true, note: "Sustainable wooden Montessori toys" },
  { name: "WeNap", sector: "Hospitality", season: "S2", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Nap pod rental — business model doubt" },

  // ─── SEASON 3 ───────────────────────────────────────────
  { name: "YesMadam", sector: "Beauty Services", season: "S3", amount: "₹1Cr", amountCr: 1, sharks: ["Vineeta", "Namita"], deal: true, note: "At-home beauty & wellness services" },
  { name: "Zoff Spices", sector: "Food & Bev", season: "S3", amount: "₹1Cr", amountCr: 1, sharks: ["Aman", "Amit"], deal: true, note: "Whole spice brand with fresh grinding tech" },
  { name: "Honey Twigs", sector: "Food & Bev", season: "S3", amount: "₹1Cr", amountCr: 1, sharks: ["Namita"], deal: true, note: "Pure honey in single-serve twist sticks" },
  { name: "Boba Bhai", sector: "Food & Bev", season: "S3", amount: "₹1Cr", amountCr: 1, sharks: ["Peyush", "Aman"], deal: true, note: "Bubble tea chain targeting Gen Z" },
  { name: "Nestasia", sector: "Home & Living", season: "S3", amount: "₹1Cr", amountCr: 1, sharks: ["Vineeta", "Peyush"], deal: true, note: "Aesthetic home décor & gifting brand" },
  { name: "Fuelbuddy", sector: "Logistics", season: "S3", amount: "₹2Cr", amountCr: 2, sharks: ["Amit"], deal: true, note: "Doorstep diesel & fuel delivery for industries" },
  { name: "Mintoak", sector: "Fintech", season: "S3", amount: "₹2Cr", amountCr: 2, sharks: ["Amit", "Anupam"], deal: true, note: "Digital banking platform for small merchants" },
  { name: "Jaipur Watch Co.", sector: "Luxury", season: "S3", amount: "₹75L", amountCr: 0.75, sharks: ["Anupam"], deal: true, note: "Handcrafted luxury watches from Jaipur artisans" },
  { name: "Go DESi", sector: "Food & Bev", season: "S3", amount: "₹1Cr", amountCr: 1, sharks: ["Namita", "Vineeta"], deal: true, note: "Traditional Indian candies in modern packaging" },
  { name: "Raphe mPhageus", sector: "Deep Tech", season: "S3", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Drone tech — too early stage for sharks" },
  { name: "Baggit", sector: "Fashion", season: "S3", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Cruelty-free bags — valuation too rich" },

  // ─── SEASON 4 ───────────────────────────────────────────
  { name: "StayVista", sector: "Hospitality", season: "S4", amount: "₹3Cr", amountCr: 3, sharks: ["Ritesh", "Anupam"], deal: true, note: "Premium villa rentals — Ritesh's first big deal" },
  { name: "Neeman's", sector: "Footwear", season: "S4", amount: "₹2Cr", amountCr: 2, sharks: ["Aman", "Namita"], deal: true, note: "Sustainable comfort shoes from natural fibres" },
  { name: "Plix", sector: "Health", season: "S4", amount: "₹2.5Cr", amountCr: 2.5, sharks: ["Namita", "Peyush"], deal: true, note: "Plant-based nutrition & supplements brand" },
  { name: "The Whole Truth", sector: "Health Food", season: "S4", amount: "₹2Cr", amountCr: 2, sharks: ["Peyush", "Aman"], deal: true, note: "Clean protein bars — no-nonsense brand" },
  { name: "Naagin Sauce", sector: "Food & Bev", season: "S4", amount: "₹75L", amountCr: 0.75, sharks: ["Aman", "Vineeta"], deal: true, note: "Premium Indian hot sauce brand" },
  { name: "Bamboo India", sector: "Sustainability", season: "S4", amount: "₹1Cr", amountCr: 1, sharks: ["Vineeta", "Ritesh"], deal: true, note: "Bamboo-based eco-friendly products" },
  { name: "Arttdinox", sector: "Home & Living", season: "S4", amount: "₹2Cr", amountCr: 2, sharks: ["Ritesh"], deal: true, note: "Stainless steel artisan kitchenware" },
  { name: "Namhya Foods", sector: "Health Food", season: "S4", amount: "₹75L", amountCr: 0.75, sharks: ["Namita"], deal: true, note: "Organic superfoods & Ayurvedic products" },
  { name: "Bunaai", sector: "Fashion", season: "S4", amount: "₹1Cr", amountCr: 1, sharks: ["Vineeta"], deal: true, note: "Ethnic Indian women's wear brand" },
  { name: "Rapido", sector: "Transport", season: "S4", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Bike taxi unicorn — too large for tank" },
  { name: "Mafia Mango", sector: "Food & Bev", season: "S4", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Mango product line — valuation mismatch" },

  // ─── SEASON 5 ───────────────────────────────────────────
  { name: "Croffle", sector: "Food & Bev", season: "S5", amount: "₹2.5Cr", amountCr: 2.5, sharks: ["Aman"], deal: true, note: "Croissant + Waffle hybrid brand" },
  { name: "Lewisia Wellness", sector: "Skincare", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Natural skincare and haircare wellness — no deal" },
  { name: "Guugly Wuugly", sector: "Kidswear", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Kidswear clothing — no deal" },
  { name: "EMoMee", sector: "EdTech", season: "S5", amount: "₹2Cr", amountCr: 2, sharks: ["Namita"], deal: true, note: "Educational and emotional toys for kids" },
  { name: "Capture a Trip", sector: "Travel", season: "S5", amount: "₹75L", amountCr: 0.75, sharks: ["Kanika"], deal: true, note: "Travel company connecting photographers and tourists" },
  { name: "Loopie", sector: "Baby", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Baby gear brand — no deal" },
  { name: "SaveSage", sector: "Fintech", season: "S5", amount: "₹4Cr", amountCr: 4, sharks: ["Anupam", "Kunal"], deal: true, note: "Rewards optimization platform — biggest S5 deal" },
  { name: "Kalam Labs", sector: "Deep Tech", season: "S5", amount: "₹2Cr", amountCr: 2, sharks: ["Hardik"], deal: true, note: "Research labs for aerial vehicles" },
  { name: "Panteazy", sector: "Fashion", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Intimate clothing brand for men — no deal" },
  { name: "Oats by Goat", sector: "Food & Bev", season: "S5", amount: "₹2Cr", amountCr: 2, sharks: ["Viraj", "Varun"], deal: true, note: "Overnight oats brand with strong unit economics" },
  { name: "Planyt", sector: "Home & Living", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Smart plants — no deal" },
  { name: "Avishkaar", sector: "EdTech", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "AI based toys for kids — no deal" },
  { name: "Emori", sector: "Jewellery", season: "S5", amount: "₹3Cr", amountCr: 3, sharks: ["Anupam", "Shaily"], deal: true, note: "Lab-grown diamond jewellery — match off winner" },
  { name: "True Diamond", sector: "Jewellery", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Lab-grown diamond jewellery — lost match off to Emori" },
  { name: "Smylo", sector: "Pet Care", season: "S5", amount: "₹75L", amountCr: 0.75, sharks: ["Varun"], deal: true, note: "Pet food brand — match off winner" },
  { name: "Nootie by Pet Point", sector: "Pet Care", season: "S5", amount: "₹1Cr", amountCr: 1, sharks: ["Aman"], deal: true, note: "Premium pet food brand with royalty structure" },
  { name: "Pista Barfi", sector: "Food & Bev", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Traditional sweets brand — no deal" },
  { name: "Corel Lifecare", sector: "AgriTech", season: "S5", amount: "₹1.2Cr", amountCr: 1.2, sharks: ["Hardik"], deal: true, note: "Nutrient food for fish farmers" },
  { name: "Vryse", sector: "SaaS", season: "S5", amount: "₹40L", amountCr: 0.4, sharks: ["Anupam"], deal: true, note: "AI optimization platform" },
  { name: "MyPB", sector: "Food & Bev", season: "S5", amount: "₹70L", amountCr: 0.7, sharks: ["Viraj"], deal: true, note: "Peanut butter brand with strong retail presence" },
  { name: "xSTEP", sector: "MedTech", season: "S5", amount: "₹1Cr", amountCr: 1, sharks: ["Namita", "Shaily"], deal: true, note: "Non-invasive device for spine injuries" },
  { name: "Truth & Hair", sector: "Beauty", season: "S5", amount: "₹2.5Cr", amountCr: 2.5, sharks: ["Vineeta", "Mohit"], deal: true, note: "Curly hair care brand — major deal" },
  { name: "Meta Fashion", sector: "Gaming", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Digital products company for Roblox — no deal" },
  { name: "Japam", sector: "Spiritual", season: "S5", amount: "₹1.5Cr", amountCr: 1.5, sharks: ["Anupam"], deal: true, note: "Spiritual wearables brand with royalty structure" },
  { name: "Zen Barefoot", sector: "Footwear", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Barefoot shoes brand — no deal" },
  { name: "RIDEV", sector: "EV", season: "S5", amount: "₹6Cr", amountCr: 6, sharks: ["Ritesh", "Hardik"], deal: true, note: "E-scooter leasing — equity + debt deal" },
  { name: "Stroom", sector: "Health Food", season: "S5", amount: "₹1Cr", amountCr: 1, sharks: ["Mohit"], deal: true, note: "Protein bar brand backed by Minimalist founder" },
  { name: "TBFO", sector: "Fashion", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Women clothing brand — no deal" },
  { name: "Neurapexai", sector: "HealthTech", season: "S5", amount: "₹60L", amountCr: 0.6, sharks: ["Shaily"], deal: true, note: "AI assisted diagnostic platform" },
  { name: "Wrestlefanent", sector: "Sports", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Wrestling fan event platform — no deal" },
  { name: "Ayuvya & Imfresh", sector: "Wellness", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Ayurveda based supplements — no deal" },
  { name: "Every Morning Cartel", sector: "F&B/Dining", season: "S5", amount: "₹2Cr", amountCr: 2, sharks: ["Aman", "Kunal"], deal: true, note: "Dining café brand" },
  { name: "Cinefai Studios", sector: "AI/Content", season: "S5", amount: "₹1Cr", amountCr: 1, sharks: ["Anupam"], deal: true, note: "Gen-AI powered content studio — equity + debt" },
  { name: "Sampark", sector: "SaaS", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "QR based vehicle tag — no deal" },
  { name: "Sovrenn", sector: "Fintech", season: "S5", amount: "₹1.5Cr", amountCr: 1.5, sharks: ["Anupam"], deal: true, note: "Stock discovery platform — match off winner" },
  { name: "Multibagg.ai", sector: "Fintech", season: "S5", amount: "₹50L", amountCr: 0.5, sharks: ["Kunal"], deal: true, note: "AI stock research platform" },
  { name: "Uprear Build", sector: "Construction", season: "S5", amount: "₹2Cr", amountCr: 2, sharks: ["Ritesh"], deal: true, note: "Pre-fabricated construction — equity + debt" },
  { name: "PaperPro", sector: "EdTech", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Milk adulting kit — no deal" },
  { name: "Cosmo Health", sector: "HealthTech", season: "S5", amount: "₹1Cr", amountCr: 1, sharks: ["Namita", "Kanika"], deal: true, note: "Emergency health services platform" },
  { name: "Galli Labs", sector: "Footwear", season: "S5", amount: "₹1Cr", amountCr: 1, sharks: ["Aman"], deal: true, note: "Hand crafted shoewear brand" },
  { name: "Twin", sector: "Fashion Tech", season: "S5", amount: "₹80L", amountCr: 0.8, sharks: ["Vineeta", "Mohit"], deal: true, note: "AI powered clothes try-on platform" },
  { name: "RCX Light", sector: "Architecture", season: "S5", amount: "₹50L", amountCr: 0.5, sharks: ["Hardik"], deal: true, note: "Digital facade company — equity + debt" },
  { name: "Awsum", sector: "Food & Bev", season: "S5", amount: "₹1Cr", amountCr: 1, sharks: ["Viraj"], deal: true, note: "Packaged cakes brand" },
  { name: "Phitku", sector: "Personal Care", season: "S5", amount: "₹1.8Cr", amountCr: 1.8, sharks: ["Mohit", "Shaily"], deal: true, note: "Alum based natural deodorants with royalty" },
  { name: "9DXR Labs", sector: "EdTech", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "VR based platform for schools — no deal" },
  { name: "Pureflow", sector: "Health", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Nasal strip brand — no deal" },
  { name: "Get Snappy", sector: "Personal Care", season: "S5", amount: "₹2Cr", amountCr: 2, sharks: ["Vineeta", "Namita"], deal: true, note: "Body adhesive brand — high equity deal" },
  { name: "Awayddings", sector: "Events", season: "S5", amount: "₹2Cr", amountCr: 2, sharks: ["Kanika"], deal: true, note: "Destination wedding planners — equity + debt" },
  { name: "Urbanwipe", sector: "Home Care", season: "S5", amount: "₹2Cr", amountCr: 2, sharks: ["Viraj", "Varun"], deal: true, note: "Acid free home cleaning solutions" },
  { name: "Antinorm", sector: "Beauty", season: "S5", amount: "₹1Cr", amountCr: 1, sharks: ["Mohit", "Shaily"], deal: true, note: "All-in-one beauty brand" },
  { name: "Sepoy & Co", sector: "Beverages", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Premium mixer brand — no deal" },
  { name: "Bonkers Corner", sector: "Fashion", season: "S5", amount: "₹2Cr", amountCr: 2, sharks: ["Aman", "Kunal"], deal: true, note: "Unisex streetwear brand — major equity deal" },
  { name: "Bubble Me", sector: "Wellness", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Magnesium driven wellness brand — no deal" },
  { name: "Out Live", sector: "Health", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Fasting guidance program — no deal" },
  { name: "Metadrive", sector: "EdTech", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Motion based driving platform — no deal" },
  { name: "Sparsh Brush", sector: "AgriTech", season: "S5", amount: "₹20L", amountCr: 0.2, sharks: ["Varun"], deal: true, note: "Automatic grooming brushes for cattle" },
  { name: "Shesha Ayurveda", sector: "Beauty", season: "S5", amount: "₹2Cr", amountCr: 2, sharks: ["Namita", "Shaily"], deal: true, note: "Ayurvedic beauty and hair care — equity + royalty" },
  { name: "Cookie Cartel", sector: "Food & Bev", season: "S5", amount: "₹80L", amountCr: 0.8, sharks: ["Viraj"], deal: true, note: "Baked homemade cookies brand" },
  { name: "Avia Litewings", sector: "Aviation", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Gyrocopter and aircraft company — no deal" },
  { name: "Aabo Ring", sector: "HealthTech", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Smart wellness tracking ring — no deal" },
  { name: "Krvvy", sector: "Fashion", season: "S5", amount: "₹1.2Cr", amountCr: 1.2, sharks: ["Vineeta"], deal: true, note: "Women's innerwear & shapewear — match off winner" },
  { name: "Invogue", sector: "Fashion", season: "S5", amount: "₹2Cr", amountCr: 2, sharks: ["Vineeta", "Namita"], deal: true, note: "Women's shapewear brand" },
  { name: "Taasha Craft", sector: "Jewellery", season: "S5", amount: "₹75L", amountCr: 0.75, sharks: ["Namita"], deal: true, note: "Handcrafted jewelry and bangles with royalty" },
  { name: "Mishmash Naturals", sector: "Kids Beauty", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Ayurvedic kids makeup brand — no deal" },
  { name: "Indian School of Calisthenics", sector: "Fitness", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Calisthenics training institute — no deal" },
  { name: "Wholeleaf", sector: "Wellness", season: "S5", amount: "₹1.5Cr", amountCr: 1.5, sharks: ["Anupam", "Varun"], deal: true, note: "Cannabis wellness brand" },
  { name: "Chewie by Mankomb", sector: "Sustainability", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Wet waste to soil converter — no deal" },
  { name: "Madrasi Kaapi House", sector: "Food & Bev", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "South Indian coffee brand — no deal" },
  { name: "Soundverse", sector: "AI/Music", season: "S5", amount: "₹1.35Cr", amountCr: 1.35, sharks: ["Anupam", "Kunal"], deal: true, note: "AI based music generator" },
  { name: "Kilrr", sector: "Food & Bev", season: "S5", amount: "₹1Cr", amountCr: 1, sharks: ["Viraj"], deal: true, note: "Marinades and spices brand" },
  { name: "Offline by Happy Hour", sector: "Social", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Offline social meetup platform — no deal" },
  { name: "Panda's Box", sector: "Devotional", season: "S5", amount: "₹1.2Cr", amountCr: 1.2, sharks: ["Namita"], deal: true, note: "Devotional toys brand with royalty" },
  { name: "Bindi Project", sector: "Fashion", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Hand-crafted bindi brand — no deal" },
  { name: "Voxturn AI", sector: "SaaS", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "AI powered sales agent — no deal" },
  { name: "My Wonder", sector: "EdTech", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "AI powered learning companion — no deal" },
  { name: "Cotopay", sector: "Fintech", season: "S5", amount: "₹75L", amountCr: 0.75, sharks: ["Anupam"], deal: true, note: "UPI based expense management platform" },
  { name: "Local All Natural Soda", sector: "Beverages", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Farm to bottle beverage brand — no deal" },
  { name: "The Binge Town", sector: "Entertainment", season: "S5", amount: "₹2Cr", amountCr: 2, sharks: ["Aman"], deal: true, note: "Private theatre for celebrations — equity + debt" },
  { name: "PropFTX", sector: "PropTech", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Fractional real estate investments — no deal" },
  { name: "Eight Times Eight", sector: "EdTech", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Chess classes — no deal" },
  { name: "Warrior World", sector: "Fashion", season: "S5", amount: "₹75L", amountCr: 0.75, sharks: ["Kunal"], deal: true, note: "Indian army inspired apparel brand with royalty" },
  { name: "Currently", sector: "Social", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Real time activity sharing app — no deal" },
  { name: "Anjani Books", sector: "EdTech", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Online bookstore — no deal" },
  { name: "Booon", sector: "Fashion Tech", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Curated fashion quick commerce — no deal" },
  { name: "MeMeraki", sector: "Culture Tech", season: "S5", amount: "₹1Cr", amountCr: 1, sharks: ["Anupam"], deal: true, note: "Culture tech platform for Indian arts" },
  { name: "3 Sisters", sector: "Beverages", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Non alcoholic beverages brand — no deal" },
  { name: "Artociti", sector: "Home Décor", season: "S5", amount: "₹1Cr", amountCr: 1, sharks: ["Namita"], deal: true, note: "Relief mural home décor brand with royalty" },
  { name: "Kreo", sector: "Gaming", season: "S5", amount: "₹2Cr", amountCr: 2, sharks: ["Aman"], deal: true, note: "Gaming peripherals brand — equity + debt" },
  { name: "Rosada", sector: "Kids", season: "S5", amount: "₹1.25Cr", amountCr: 1.25, sharks: ["Namita", "Varun"], deal: true, note: "Customised kids bags with royalty" },
  { name: "Baby Works by Swapnil", sector: "Baby", season: "S5", amount: "₹60L", amountCr: 0.6, sharks: ["Namita"], deal: true, note: "Baby jewellery brand" },
  { name: "Gramiyaa", sector: "Food & Bev", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Wood cold pressed oils — no deal" },
  { name: "Mama Nourish", sector: "Health Food", season: "S5", amount: "₹2Cr", amountCr: 2, sharks: ["Namita", "Shaily"], deal: true, note: "Nutritious energy bars for mothers" },
  { name: "Kelvin6k", sector: "Construction Tech", season: "S5", amount: "₹1Cr", amountCr: 1, sharks: ["Hardik"], deal: true, note: "Robotic construction company" },
  { name: "ANA Apparels", sector: "Fashion", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Abayas, naqabs and dupatta brand — no deal" },
  { name: "EzPac", sector: "Packaging", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Smart packaging solutions — no deal" },
  { name: "Gappu", sector: "Music", season: "S5", amount: "₹30L", amountCr: 0.3, sharks: ["Aman"], deal: true, note: "Percussion music instruments — equity + debt" },
  { name: "Mister Veg", sector: "Food & Bev", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Plant based meat brand — no deal" },
  { name: "Saras", sector: "Fintech", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Stock trading recommendations app — no deal" },
  { name: "Speechgears", sector: "HealthTech", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Therapeutic solutions for children with special needs — no deal" },
  { name: "Heizen", sector: "SaaS", season: "S5", amount: "₹90L", amountCr: 0.9, sharks: ["Anupam"], deal: true, note: "AI powered software development firm" },
  { name: "Pukaar.ai", sector: "Parenting", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "AI powered parenting app — no deal" },
  { name: "Upsnac", sector: "Food & Bev", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Wellness coffee brand — no deal" },
  { name: "Kotson Mattresses", sector: "Home & Living", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Organic latex mattress brand — no deal" },
  { name: "Kalakrit", sector: "AI/Content", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "AI based content localisation platform — no deal" },
  { name: "SVS Food", sector: "F&B", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Vegetarian QSR food chain — no deal" },
  { name: "Be Clinical", sector: "Skincare", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Skincare brand — no deal" },
  { name: "Misfits", sector: "Social", season: "S5", amount: "₹1Cr", amountCr: 1, sharks: ["Aman", "Kunal"], deal: true, note: "Hobby and meetup club platform" },
  { name: "Krimmy Thickshakes", sector: "Food & Bev", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Guilt-free shakes — no deal" },
  { name: "Curry It", sector: "Food & Bev", season: "S5", amount: "₹1.5Cr", amountCr: 1.5, sharks: ["Viraj", "Varun"], deal: true, note: "Instant curries and paste brand" },
  { name: "Dubpro.ai", sector: "AI/Content", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "AI-powered dubbing platform — no deal" },
  { name: "Boingg", sector: "Kids", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Custom kids furniture brand — no deal" },
  { name: "Pragyan Child Development", sector: "HealthTech", season: "S5", amount: "₹1Cr", amountCr: 1, sharks: ["Namita", "Shaily"], deal: true, note: "Pediatric therapy services for children" },
  { name: "Sanchvi", sector: "Fashion", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Exclusive rental wear — no deal" },
  { name: "Trring", sector: "Electronics", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Bluetooth call mirroring devices — no deal" },
  { name: "Edinora", sector: "Personal Care", season: "S5", amount: "₹2Cr", amountCr: 2, sharks: ["Mohit", "Shaily"], deal: true, note: "Edible grade toothpaste brand" },
  { name: "Rehabveda", sector: "HealthTech", season: "S5", amount: "₹1Cr", amountCr: 1, sharks: ["Namita"], deal: true, note: "Home neuro rehabilitation solution" },
  { name: "Freshpod", sector: "Electronics", season: "S5", amount: "—", amountCr: 0, sharks: [], deal: false, note: "Helmet disinfectant device — no deal" },
];

export const SEASONS: Season[] = [
  { number: 1, aired: "Dec 2021 – Feb 2022", episodes: 35, dealCount: "~67", totalAsked: "~₹118Cr", totalClosed: "~₹56Cr", sharks: ["Ashneer", "Ghazal", "Namita", "Aman", "Vineeta", "Anupam", "Peyush"], highlight: "Launched the franchise. Ashneer's viral moments made the show a cultural phenomenon. Skippi Ice Pops — all 5 sharks invested.", facts: ["First ever season in India", "Ghazal Alagh (Mamaearth) debuted", "Ashneer became the breakout star", "Skippi Ice Pops — iconic all-shark deal"] },
  { number: 2, aired: "Jan – Mar 2023", episodes: 40, dealCount: "~82", totalAsked: "~₹135Cr", totalClosed: "~₹62Cr", sharks: ["Namita", "Aman", "Vineeta", "Anupam", "Peyush", "Amit"], highlight: "Post-Ashneer era. Amit Jain (CarDekho) joined. More diverse pitches from Tier 2/3 India.", facts: ["First season without Ashneer", "Amit Jain made his debut", "Stronger Tier 2/3 city representation", "Higher deal count than S1"] },
  { number: 3, aired: "Jan – Mar 2024", episodes: 50, dealCount: "~95", totalAsked: "~₹160Cr", totalClosed: "~₹80Cr", sharks: ["Namita", "Aman", "Vineeta", "Anupam", "Peyush", "Amit", "Ritesh", "Deepinder", "Radhika", "Ronnie", "Azhar", "Varun Dua"], highlight: "Biggest season ever — 50 episodes, 6 guest sharks including Deepinder Goyal and Ronnie Screwvala.", facts: ["50 episodes — largest season", "6 guest sharks joined", "Deepinder Goyal (Zomato) debuted", "Ronnie Screwvala — wealthiest shark ever"] },
  { number: 4, aired: "Jan – Mar 2025", episodes: 44, dealCount: "~100", totalAsked: "~₹170Cr", totalClosed: "~₹90Cr", sharks: ["Namita", "Aman", "Vineeta", "Anupam", "Peyush", "Amit", "Ritesh", "Kunal", "Viraj"], highlight: "Record 100+ deals. Ritesh Agarwal, Kunal Bahl and Viraj Bahl all joined. Hospitality and FMCG surge.", facts: ["Ritesh Agarwal (OYO) debuted", "Kunal Bahl & Viraj Bahl joined", "100+ deals — record count", "Highest avg deal size so far"] },
  { number: 5, aired: "Jan – Mar 2026", episodes: 40, dealCount: "73", totalAsked: "~₹152Cr", totalClosed: "₹94.88Cr", sharks: ["Namita", "Aman", "Vineeta", "Anupam", "Peyush", "Amit", "Ritesh", "Kunal", "Viraj", "Varun Alagh", "Mohit Yadav", "Kanika Tekriwal", "Shaily Mehrotra", "Hardik Kothiya"], highlight: "Most diverse shark panel ever — 13 sharks, 5 new faces including Mohit Yadav (Minimalist). 117 pitches, 73 deals for ₹94.88Cr.", facts: ["5 new sharks — Mohit, Kanika, Shaily, Hardik, Varun Alagh", "117 pitches — most ever in a season", "73 deals closed for ₹94.88Cr total", "Minimalist founder Mohit Yadav was standout new shark"] },
];

export const POST_SHOW: PostShowEntry[] = [
  { name: "Skippi Ice Pops", status: "thriving", note: "Expanded to 10,000+ retail outlets nationwide. Strong D2C growth post-show." },
  { name: "Snitch", status: "thriving", note: "Grew to ₹200Cr+ revenue. One of fastest-growing menswear D2C brands in India." },
  { name: "Heads Up For Tails", status: "thriving", note: "Raised Series B funding. Expanded to 50+ offline stores across India." },
  { name: "Traya Health", status: "thriving", note: "Scaled to ₹100Cr+ ARR. Expanded into skin and nutrition categories." },
  { name: "Mokobara", status: "thriving", note: "Raised ₹100Cr Series B. Positioned as India's premium travel gear brand." },
  { name: "StayVista", status: "thriving", note: "Crossed 1000 villa listings. Revenue 5x post-show. Series B raised." },
  { name: "The Whole Truth", status: "thriving", note: "Grew to ₹150Cr+ revenue. Leading clean-label protein brand in India." },
  { name: "Plix", status: "thriving", note: "Crossed ₹200Cr revenue. Raised Series B. Leading plant-based nutrition brand." },
  { name: "Nish Hair", status: "thriving", note: "MRR grew from ₹66L to ₹2.51Cr. Team from 12 to 66. Scaled to 6 stores + 1 flagship." },
  { name: "Honest Home Company", status: "thriving", note: "Monthly sales grew from ₹1.4Cr to ₹7.5Cr. ARR hit ₹120Cr. Factory expanded 3x." },
  { name: "Creme Castle", status: "thriving", note: "MRR from ₹85L to ₹4.7Cr. Expanded from 3 to 37 kitchens across India." },
  { name: "Decode Age", status: "thriving", note: "150+ hospital chains onboarded. 64% customer retention. 10x growth post-show." },
  { name: "Gladful", status: "thriving", note: "MRR grew from ₹20L to ₹1.25Cr. Valuation up 4x. New manufacturing facility." },
  { name: "Neeman's", status: "growing", note: "Expanded product line to socks and sandals. Raised follow-on funding." },
  { name: "ByteMint", status: "growing", note: "Teen fintech app growing rapidly in Tier 2 cities." },
  { name: "Thinkerbell Labs", status: "thriving", note: "Expanded to international markets. Recognised with global accessibility awards." },
  { name: "Revamp Moto", status: "pivoted", note: "Pivoted to B2B fleet solutions after sharks declined retail valuation." },
  { name: "WeNap", status: "closed", note: "Nap pod business could not find product-market fit post-show." },
  { name: "Flatheads", status: "growing", note: "Continued D2C growth. Found niche among sustainability-conscious buyers." },
];

export const STATUS_COLORS: Record<string, string> = {
  thriving: "#3ae87a",
  growing: "#e8c73a",
  pivoted: "#f4832a",
  closed: "#e84a4a",
};

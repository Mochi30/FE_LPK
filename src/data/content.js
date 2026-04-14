export const heroStats = [
  { value: "128", label: "LSP Mitra Terdaftar" },
  { value: "24", label: "Sektor Sertifikasi" },
  { value: "310+", label: "Skema Aktif" },
  { value: "15K+", label: "Peserta Tersertifikasi" }
];

export const lspDirectory = [
  {
    slug: "lsp-teknologi-digital-nusantara",
    name: "LSP Teknologi Digital Nusantara",
    sector: "TI",
    region: "Jakarta",
    category: "Teknologi Informasi",
    schemes: 18,
    icon: "\uD83D\uDCBB",
    description: "Spesialis sertifikasi pengembangan software, jaringan, dan keamanan siber untuk industri digital Indonesia.",
    established: "2016",
    certified: "4.200+",
    status: "Aktif",
    availableSchemes: ["Junior Web Developer", "Data Analyst", "Network Admin", "Cybersecurity Analyst"]
  },
  {
    slug: "lsp-kesehatan-prima-indonesia",
    name: "LSP Kesehatan Prima Indonesia",
    sector: "Kesehatan",
    region: "Surabaya",
    category: "Kesehatan",
    schemes: 12,
    icon: "\uD83C\uDFE5",
    description: "Lembaga sertifikasi tenaga kesehatan meliputi perawat, bidan, dan manajemen rumah sakit.",
    established: "2017",
    certified: "3.800+",
    status: "Aktif",
    availableSchemes: ["Perawat Klinis", "Bidan Terampil", "Teknisi Medis", "Manajer RS"]
  },
  {
    slug: "lsp-manufaktur-unggul",
    name: "LSP Manufaktur Unggul",
    sector: "Manufaktur",
    region: "Bekasi",
    category: "Manufaktur",
    schemes: 15,
    icon: "\uD83C\uDFED",
    description: "Mendorong kompetensi tenaga kerja industri manufaktur, teknik mesin, dan rekayasa proses produksi.",
    established: "2015",
    certified: "5.100+",
    status: "Aktif",
    availableSchemes: ["Operator Mesin CNC", "Quality Control", "Teknisi Elektrik", "Supervisor Produksi"]
  },
  {
    slug: "lsp-keuangan-andal",
    name: "LSP Keuangan Andal",
    sector: "Keuangan",
    region: "Jakarta",
    category: "Keuangan & Perbankan",
    schemes: 10,
    icon: "\uD83D\uDCB0",
    description: "Sertifikasi profesional di bidang perbankan, asuransi, pasar modal, dan perencanaan keuangan.",
    established: "2018",
    certified: "2.900+",
    status: "Aktif",
    availableSchemes: ["Analis Kredit", "Agen Asuransi", "Pialang Efek", "Perencana Keuangan"]
  },
  {
    slug: "lsp-pariwisata-nusantara",
    name: "LSP Pariwisata Nusantara",
    sector: "Pariwisata",
    region: "Yogyakarta",
    category: "Pariwisata & Hospitality",
    schemes: 14,
    icon: "\uD83C\uDF34",
    description: "Memajukan standar kompetensi industri pariwisata, hotel, restoran, dan event organizer Indonesia.",
    established: "2016",
    certified: "3.400+",
    status: "Aktif",
    availableSchemes: ["Front Office Hotel", "Pemandu Wisata", "Chef Profesional", "Event Manager"]
  },
  {
    slug: "lsp-siber-nasional",
    name: "LSP Siber Nasional",
    sector: "TI",
    region: "Bandung",
    category: "Teknologi Informasi",
    schemes: 8,
    icon: "\uD83D\uDD12",
    description: "Spesialis sertifikasi keamanan informasi dan siber untuk individu, korporasi, dan instansi pemerintah.",
    established: "2019",
    certified: "1.800+",
    status: "Aktif",
    availableSchemes: ["Ethical Hacker", "SOC Analyst", "Cloud Security", "CISO"]
  },
  {
    slug: "lsp-konstruksi-indonesia",
    name: "LSP Konstruksi Indonesia",
    sector: "Konstruksi",
    region: "Jakarta",
    category: "Konstruksi",
    schemes: 20,
    icon: "\uD83C\uDFD7\uFE0F",
    description: "Mendukung kompetensi tenaga konstruksi dari tukang, mandor, hingga manajer proyek bersertifikat.",
    established: "2015",
    certified: "6.200+",
    status: "Aktif",
    availableSchemes: ["Mandor Bangunan", "Drafter CAD", "Manajer Proyek", "K3 Konstruksi"]
  },
  {
    slug: "lsp-energi-nusantara",
    name: "LSP Energi Nusantara",
    sector: "Energi",
    region: "Balikpapan",
    category: "Energi & Pertambangan",
    schemes: 16,
    icon: "\u26A1",
    description: "Melayani sertifikasi sektor energi, minyak gas, pertambangan, dan energi terbarukan.",
    established: "2017",
    certified: "2.700+",
    status: "Aktif",
    availableSchemes: ["Teknisi PLTS", "Operator Pembangkit", "K3 Migas", "Inspektor Energi"]
  }
];

export const lspMembers = lspDirectory.map((item) => ({
  name: item.name,
  sector: item.category,
  location: item.region
}));

export const lspSchemes = [
  {
    code: "KKNI-2.1",
    level: "Level II",
    title: "Skema Wirausaha Muda",
    units: 8,
    days: 3,
    description: "Sertifikasi dasar kewirausahaan untuk pemula. Mencakup perencanaan bisnis, manajemen keuangan dasar, dan pemasaran sederhana.",
    scope: [
      "Perencanaan usaha",
      "Manajemen keuangan dasar",
      "Pemasaran produk/jasa",
      "Legalitas usaha"
    ]
  },
  {
    code: "KKNI-3.2",
    level: "Level III",
    title: "Skema Manajer Wirausaha",
    units: 12,
    days: 4,
    description: "Sertifikasi tingkat menengah untuk pengelola usaha yang ingin meningkatkan kompetensi manajerial.",
    scope: [
      "Manajemen operasional",
      "Strategi pengembangan usaha",
      "Manajemen SDM UMKM",
      "Akses pembiayaan"
    ]
  },
  {
    code: "KKNI-4.1",
    level: "Level IV",
    title: "Skema Pengusaha Digital",
    units: 15,
    days: 5,
    description: "Sertifikasi kompetensi wirausaha digital mencakup e-commerce, digital marketing, dan transformasi teknologi.",
    scope: [
      "Ekosistem digital bisnis",
      "Strategi e-commerce",
      "Digital marketing lanjutan",
      "Analitik bisnis digital"
    ]
  },
  {
    code: "KKNI-4.3",
    level: "Level IV",
    title: "Skema Manajer Inovasi",
    units: 14,
    days: 5,
    description: "Sertifikasi untuk pemimpin bisnis yang ingin mengembangkan kapasitas inovasi dan riset pasar.",
    scope: [
      "Design thinking & inovasi",
      "Riset pasar & validasi",
      "Pengembangan produk baru",
      "Manajemen proyek inovasi"
    ]
  },
  {
    code: "KKNI-5.1",
    level: "Level V",
    title: "Skema Pengusaha Ekspor",
    units: 18,
    days: 6,
    description: "Sertifikasi lanjutan untuk wirausahawan yang siap memasuki pasar ekspor internasional.",
    scope: [
      "Regulasi ekspor-impor",
      "Negosiasi bisnis internasional",
      "Standar produk ekspor",
      "Pembiayaan ekspor"
    ]
  },
  {
    code: "KKNI-5.2",
    level: "Level V",
    title: "Skema Konsultan Bisnis",
    units: 16,
    days: 6,
    description: "Sertifikasi untuk profesional yang ingin menjadi konsultan pengembangan UMKM dan wirausaha.",
    scope: [
      "Metodologi konsultasi",
      "Analisis bisnis mendalam",
      "Fasilitasi pelatihan",
      "Pelaporan & evaluasi"
    ]
  }
];

export const trustedPartners = [
  {
    name: "BNSP",
    desc: "Badan Nasional Sertifikasi Profesi Indonesia",
    badge: "Otoritas nasional sertifikasi profesi"
  },
  {
    name: "Kemenaker RI",
    desc: "Kementerian Ketenagakerjaan RI",
    badge: "Pengembangan standar kompetensi"
  },
  {
    name: "DIKSI",
    desc: "Direktorat Kursus dan Pelatihan",
    badge: "Mitra pengembangan kurikulum"
  },
  {
    name: "Bank Indonesia",
    desc: "Bank Indonesia Institute",
    badge: "Mitra program inklusi keuangan"
  }
];

export const sectors = [
  {
    name: "Teknologi Informasi",
    schemes: 18,
    description: "Skema terkait jaringan, pengembangan aplikasi, keamanan siber, dan data."
  },
  {
    name: "Manufaktur",
    schemes: 22,
    description: "Sertifikasi operator, quality control, maintenance, hingga produksi."
  },
  {
    name: "Kesehatan",
    schemes: 12,
    description: "Skema pelayanan kesehatan, laboratorium, dan administrasi."
  },
  {
    name: "Pariwisata",
    schemes: 16,
    description: "Perhotelan, perjalanan wisata, pemandu, dan layanan pelanggan."
  },
  {
    name: "Logistik",
    schemes: 14,
    description: "Manajemen gudang, distribusi, supply chain, dan ekspedisi."
  },
  {
    name: "Ekonomi Kreatif",
    schemes: 10,
    description: "Desain, produksi konten, event, dan industri kreatif."
  }
];

export const newsEvents = [
  {
    title: "Workshop Penyelarasan Skema Sertifikasi 2026",
    date: "12 Mei 2026",
    summary: "Forum nasional untuk menyelaraskan skema dengan kebutuhan industri dan standar terbaru.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Rapat Koordinasi LSP Mitra Wilayah Barat",
    date: "28 Mei 2026",
    summary: "Koordinasi program sertifikasi dan evaluasi layanan peserta di wilayah barat.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Peluncuran Direktori LSP Mitra Terbaru",
    date: "4 Juni 2026",
    summary: "Direktori resmi berisi profil LSP, sektor, skema, dan kontak terkini.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
  }
];

export const testimonials = [
  {
    name: "Dewi Lestari",
    role: "Peserta Sertifikasi",
    quote: "Proses pendaftaran jelas dan cepat. Informasi skema sangat membantu dalam mempersiapkan dokumen."
  },
  {
    name: "Hadi Prakoso",
    role: "Ketua LSP Mitra",
    quote: "Dashboard LSP memudahkan kami memantau peserta baru dan jadwal sertifikasi."
  },
  {
    name: "Rina Paramita",
    role: "Koordinator Asosiasi",
    quote: "Platform ini membuat kolaborasi antar LSP mitra lebih terstruktur dan transparan."
  }
];

export const resources = [
  {
    title: "Panduan Lengkap Sertifikasi Profesi 2026",
    type: "PDF",
    size: "2.4 MB",
    description: "Panduan komprehensif proses sertifikasi dari pendaftaran hingga pengambilan sertifikat.",
    color: "coral",
    icon: "doc"
  },
  {
    title: "Peraturan BNSP tentang LSP P3 Terbaru",
    type: "Regulasi",
    size: "1.1 MB",
    description: "Regulasi dan kebijakan terkini dari Badan Nasional Sertifikasi Profesi Indonesia.",
    color: "indigo",
    icon: "note"
  },
  {
    title: "Template Formulir Asesmen Kompetensi",
    type: "Template",
    size: "450 KB",
    description: "Format standar untuk proses asesmen yang dapat digunakan asesor profesional.",
    color: "mint",
    icon: "puzzle"
  },
  {
    title: "Standar Kompetensi Kerja Nasional (SKKNI)",
    type: "PDF",
    size: "8.7 MB",
    description: "Dokumen SKKNI terbaru untuk berbagai sektor industri di Indonesia.",
    color: "coral",
    icon: "doc"
  },
  {
    title: "Checklist Persiapan Ujian Sertifikasi",
    type: "Template",
    size: "120 KB",
    description: "Checklist lengkap untuk mempersiapkan diri menghadapi ujian kompetensi.",
    color: "mint",
    icon: "puzzle"
  },
  {
    title: "SOP Penyelenggaraan Sertifikasi LSP P3",
    type: "Regulasi",
    size: "3.2 MB",
    description: "Standar operasional prosedur yang wajib dipatuhi setiap LSP Mitra WIRAPINDO.",
    color: "indigo",
    icon: "note"
  },
  {
    title: "Whitepaper: Masa Depan Sertifikasi di Era AI",
    type: "PDF",
    size: "5.8 MB",
    description: "Analisis mendalam tentang dampak AI dan otomasi terhadap dunia sertifikasi profesi.",
    color: "coral",
    icon: "doc"
  },
  {
    title: "Template Portofolio Peserta Sertifikasi",
    type: "Template",
    size: "280 KB",
    description: "Format standar portofolio untuk mengumpulkan bukti kompetensi peserta sertifikasi.",
    color: "mint",
    icon: "puzzle"
  }
];

export const publicationFilters = [
  { label: "Semua", value: "all" },
  { label: "Panduan PDF", value: "pdf" },
  { label: "Regulasi", value: "regulasi" },
  { label: "Template", value: "template" }
];

export const webinars = [
  {
    title: "Webinar: Panduan Lengkap Sertifikasi IT 2026",
    duration: "1 jam 24 menit · 2.400 penonton",
    color: "navy",
    icon: "play"
  },
  {
    title: "Workshop: Teknik Asesmen Kompetensi Profesional",
    duration: "2 jam 10 menit · 1.890 penonton",
    color: "violet",
    icon: "play"
  },
  {
    title: "Seminar Nasional: Sertifikasi di Era Transformasi Digital",
    duration: "3 jam 05 menit · 5.200 penonton",
    color: "teal",
    icon: "play"
  }
];

export const faqs = [
  {
    question: "Bagaimana cara memilih LSP mitra yang sesuai?",
    answer: "Gunakan filter berdasarkan sektor dan skema, lalu cek profil LSP untuk melihat detail layanan."
  },
  {
    question: "Dokumen apa saja yang dibutuhkan untuk pendaftaran?",
    answer: "Umumnya KTP, ijazah, CV, serta dokumen pendukung sesuai skema yang dipilih."
  },
  {
    question: "Apakah tersedia pembayaran online?",
    answer: "Pembayaran online bersifat opsional dan disesuaikan kebijakan masing-masing LSP mitra."
  }
];

import { Slide } from '../types';

export const initialSlides: Slide[] = [
  // 1. COVER SLIDE
  {
    id: 'slide-1',
    slideNumber: 1,
    department: 'ALL',
    layout: 'title',
    title: 'RAPAT KERJA (RAKER) TAHUNAN',
    subtitle: 'Departemen HRGA-IT: Evaluasi Kinerja 2024 & Rencana Strategis 2025',
    tagline: '"Sinergi Operasional Tangguh, SDM Unggul & Percepatan Transformasi Digital"',
    speakerNotes: 'Selamat pagi Bapak/Ibu Dewan Direksi dan rekan-rekan pimpinan unit kerja. Hari ini Departemen HRGA-IT menyajikan laporan evaluasi kinerja tahun 2024 dan rencana strategis tahun 2025 dengan fokus penguatan sinergi 3 pilar: Human Resources, General Affairs, dan Information Technology.',
    keyHighlight: 'Tahun 2025: Fokus pada otomatisasi proses, efisiensi operasional, dan peningkatan kualitas SDM.',
    cards: [
      {
        id: 'c1',
        title: 'Human Resources (HR)',
        description: 'Pemberdayaan talenta, kultur kinerja tinggi, & retensi karyawan kunci.',
        iconName: 'Users',
        category: 'HR',
        badge: 'People First'
      },
      {
        id: 'c2',
        title: 'General Affairs (GA)',
        description: 'Keunggulan operasional fasilitas, keselamatan kerja (K3), & optimalisasi aset.',
        iconName: 'Building2',
        category: 'GA',
        badge: 'Operational Excellence'
      },
      {
        id: 'c3',
        title: 'Information Technology (IT)',
        description: 'Stabilitas infrastruktur, keamanan siber, & percepatan otomasi bisnis.',
        iconName: 'Cpu',
        category: 'IT',
        badge: 'Digital Acceleration'
      }
    ],
    interactiveOptions: {
      allowCelebration: true
    }
  },

  // 2. EXECUTIVE SUMMARY GABUNGAN
  {
    id: 'slide-2',
    slideNumber: 2,
    department: 'ALL',
    layout: 'executive-summary',
    title: 'Ringkasan Eksekutif HRGA-IT',
    subtitle: 'Indikator Utama Pencapaian Departemen Tahun 2024',
    speakerNotes: 'Secara menyeluruh, departemen HRGA-IT mencatatkan rata-rata pencapaian KPI 94.8% dengan efisiensi serapan anggaran operasional 92.4%. Terjadi sinergi kuat terutama dalam implementasi sistem absensi geofencing terintegrasi dan modul e-ticketing internal.',
    metrics: [
      {
        id: 'm1',
        label: 'Rata-rata KPI Gabungan',
        value: '94.8%',
        target: 'Target: 90%',
        trend: 'up',
        trendText: '+4.8% di atas target',
        status: 'achieved',
        progress: 95
      },
      {
        id: 'm2',
        label: 'Realisasi Budget OpEx',
        value: '92.4%',
        target: 'Plafon: 100%',
        trend: 'neutral',
        trendText: 'Efisiensi hemat 7.6%',
        status: 'achieved',
        progress: 92
      },
      {
        id: 'm3',
        label: 'Employee Net Promoter (eNPS)',
        value: '+42',
        target: 'Target: > +35',
        trend: 'up',
        trendText: 'Kategori Sangat Baik',
        status: 'achieved',
        progress: 88
      },
      {
        id: 'm4',
        label: 'System & Infra Uptime',
        value: '99.92%',
        target: 'SLA: 99.80%',
        trend: 'up',
        trendText: 'Zero major cyber breach',
        status: 'achieved',
        progress: 99
      }
    ],
    bulletPoints: [
      'Peningkatan indeks kepuasan layanan internal (Internal Customer Satisfaction) mencapai 4.6 / 5.0.',
      'Sinergi HR & IT sukses meluncurkan Self-Service Portal Karyawan (cuti, slip gaji, reimbursement digital).',
      'Sinergi GA & IT berhasil melakukan sentralisasi data inventaris aset laptop, PC, dan armada kantor dengan QR Code.',
      'Pengendalian biaya utilitas (listrik & ATK) menghasilkan penghematan biaya tahunan sebesar Rp 145 Juta.'
    ]
  },

  // 3. HR - DEMOGRAFI & HEADCOUNT
  {
    id: 'slide-3',
    slideNumber: 3,
    department: 'HR',
    layout: 'kpi-dashboard',
    title: 'HR: Profil Karyawan & Kinerja Organisasi',
    subtitle: 'Evaluasi Pertumbuhan Headcount, Turnover, dan Rasio Produktivitas',
    speakerNotes: 'Total karyawan aktif per Desember mencapai 342 orang. Angka turnover sukarela berhasil ditekan ke angka 6.2%, jauh di bawah benchmark industri 10%. Komposisi karyawan didominasi generasi Milenial & Gen-Z (74%), memerlukan pendekatan engagement modern.',
    metrics: [
      {
        id: 'hr1',
        label: 'Total Karyawan Aktif',
        value: '342',
        target: 'Tahun Lalu: 318',
        unit: 'Orang',
        trend: 'up',
        trendText: '+7.5% YoY',
        status: 'on-track',
        progress: 100
      },
      {
        id: 'hr2',
        label: 'Tingkat Turnover Tahunan',
        value: '6.2%',
        target: 'Maksimal: 9.0%',
        unit: '%',
        trend: 'down',
        trendText: 'Turun 2.4% vs 2023',
        status: 'achieved',
        progress: 85
      },
      {
        id: 'hr3',
        label: 'Status Karyawan Tetap (PKWTT)',
        value: '78.5%',
        target: 'Target: >75%',
        unit: '%',
        trend: 'up',
        trendText: 'Kestabilan tinggi',
        status: 'achieved',
        progress: 79
      },
      {
        id: 'hr4',
        label: 'Rata-rata Usia Karyawan',
        value: '31.4',
        target: 'Median: 29 th',
        unit: 'Tahun',
        trend: 'neutral',
        trendText: 'Energetik & adaptif',
        status: 'on-track',
        progress: 70
      }
    ],
    cards: [
      {
        id: 'hrc1',
        title: 'Komposisi Generasi Karyawan',
        description: 'Gen-Z (32%), Milenial (42%), Gen-X (24%), Boomers (2%).',
        badge: 'Demografi',
        details: [
          'Kebutuhan gaya kerja fleksibel dan jenjang karier transparan.',
          'Peningkatan mentoring lintas generasi untuk transfer knowledge.'
        ]
      },
      {
        id: 'hrc2',
        title: 'Gender Diversity',
        description: 'Pria: 56% (191 org) | Wanita: 44% (151 org)',
        badge: 'Inklusivitas',
        details: [
          'Peningkatan porsi manajerial wanita sebesar 8% dibanding tahun sebelumnya.',
          'Dukungan fasilitas ruang laktasi dan cuti melahirkan terakomodir baik.'
        ]
      }
    ]
  },

  // 4. HR - REKRUTMEN & TALENT ACQUISITION
  {
    id: 'slide-4',
    slideNumber: 4,
    department: 'HR',
    layout: 'split-details',
    title: 'HR: Rekrutmen & Pemenuhan Formasi Karyawan',
    subtitle: 'Efektivitas Sourcing, Lead Time Rekrutmen, dan Kualitas Talent Baru',
    speakerNotes: 'Selama 2024, tim HR memproses 58 permintaan rekrutmen. Fulfillment rate tercapai 91.4% dengan rata-rata time-to-hire 28 hari kerja (target 30 hari). Kanal LinkedIn dan program Employee Referral menjadi sumber kandidat paling efektif.',
    metrics: [
      {
        id: 'hrm1',
        label: 'Fulfillment Rate Rekrutmen',
        value: '91.4%',
        target: 'Target: 88%',
        trend: 'up',
        trendText: '53 dari 58 MPP terpenuhi',
        status: 'achieved',
        progress: 91
      },
      {
        id: 'hrm2',
        label: 'Rata-rata Time-to-Hire',
        value: '28 Hari',
        target: 'Target: < 30 Hari',
        trend: 'down',
        trendText: 'Lebih cepat 4 hari',
        status: 'achieved',
        progress: 88
      },
      {
        id: 'hrm3',
        label: 'Kelulusan Masa Probation (3 Bln)',
        value: '96.2%',
        target: 'Target: > 90%',
        trend: 'up',
        trendText: 'Akurasi seleksi tinggi',
        status: 'achieved',
        progress: 96
      }
    ],
    cards: [
      {
        id: 'src1',
        title: 'Saluran Sourcing Terbaik 2024',
        description: 'LinkedIn Talent Solutions (44%), Employee Referral (28%), Jobstreet/Glints (18%), Campus Hiring (10%).',
        badge: 'Sourcing Channel',
        details: [
          'Program Employee Referral berhasil memangkas biaya agency rekrutmen hingga 35%.',
          'Posisi technical IT dan Sales Specialist menjadi tantangan utama dengan rasio persaingan ketat.'
        ]
      },
      {
        id: 'src2',
        title: 'Evaluasi Onboarding Experience',
        description: 'Skor kepuasan onboarding karyawan baru mencapai 4.7 / 5.0.',
        badge: 'Onboarding 30-60-90',
        details: [
          'Penggunaan Buddy System terbukti mempercepat adaptasi budaya kerja.',
          'Pemberian starter pack kerja & setup akun IT H-1 masuk kantor tanpa kendala.'
        ]
      }
    ]
  },

  // HR - STANDAR OPERASIONAL PROSEDUR (SOP) MANPOWER PLANNING
  {
    id: 'slide-hr-sop-mpp',
    slideNumber: 5,
    department: 'HR',
    layout: 'sop-document',
    title: 'SOP Penyusunan Manpower Planning (Perencanaan SDM Tahunan)',
    subtitle: 'Pedoman Standar Prosedur Analisis Beban Kerja, Formula Rasio Efisiensi, & Alur Rekrutmen Karyawan',
    speakerNotes: 'Slide ini memuat materi resmi SOP Penyusunan Manpower Planning tahunan perusahaan. Prosedur ini mengatur proses perencanaan kebutuhan karyawan baru yang dimulai pada minggu pertama bulan November oleh Head HR sejalan dengan rencana bisnis. Acuan utama adalah ekspansi bisnis dan tren turnover karyawan, dengan analisis beban kerja menggunakan teknik rasio. Aturan emas yang wajib ditaati: persentase pertumbuhan tenaga kerja tidak boleh melebihi persentase pertumbuhan omzet perusahaan.',
    keyHighlight: 'SOP-HR-004-MPP: Menjamin rekrutmen terencana sistematis & beban kerja optimal.',
    sopData: {
      sopName: 'SOP Penyusunan Manpower Planning (Perencanaan SDM Tahunan)',
      purpose: 'Prosedur ini bertujuan menjelaskan proses perencanaan SDM tahunan perusahaan agar proses penambahan dan rekrutmen karyawan baru dapat dilakukan secara efektif, baik untuk sisi kepentingan bisnis perusahaan ataupun dari sisi optimalisasi beban kerja.',
      policies: [
        {
          title: 'Pemeliharaan Jumlah Karyawan Optimal',
          description: 'Annual Manpower Planning atau Perencanaan SDM tahunan merupakan kegiatan wajib yang harus dilakukan untuk memelihara jumlah karyawan yang paling optimal bagi kelangsungan bisnis.',
          ruleHighlight: 'Menghindari rekrutmen mendadak yang tidak terencana dan boros anggaran.'
        },
        {
          title: 'Dasar Perencanaan Kebutuhan SDM',
          description: 'Perencanaan penambahan SDM mengacu pada dua hal pokok: rencana ekspansi/pertumbuhan bisnis dan optimalisasi beban kerja pada setiap unit kerja.',
          ruleHighlight: 'Setiap pengajuan formasi wajib disertai rincian target kontribusi bisnis.'
        },
        {
          title: 'Metode Analisis Beban Kerja (Teknik Rasio)',
          description: 'Pengukuran beban kerja terbaik menggunakan teknik rasio efisiensi: Rasio Tenaga Kerja vs Penjualan (Omzet), Rasio vs Total Produksi, atau Rasio vs Jumlah Pelanggan. Makin tinggi rasionya, makin efisien jumlah tenaga kerja.',
          ratioFormula: 'Contoh: 100 SDM dengan Omzet Rp 100 Miliar (Rasio 1 M/orang) JAUH LEBIH EFISIEN dibanding 200 SDM dengan Omzet Rp 50 Miliar (Rasio 250 Juta/orang).'
        },
        {
          title: 'Aturan Emas Pertumbuhan Headcount',
          description: 'Persentase pertumbuhan jumlah tenaga kerja baru sebaiknya TIDAK MELEBIHI persentase pertumbuhan omzet bisnis.',
          ruleHighlight: 'Golden Rule: Jika omzet penjualan tumbuh 20%, maka % pertumbuhan tenaga kerja baru wajib berada di bawah 20%.'
        }
      ],
      procedures: [
        {
          step: 1,
          actor: 'Head HR',
          title: 'Inisiasi Rencana Tahunan',
          description: 'Penyusunan annual manpower planning untuk tahun depan dimulai pada minggu pertama bulan November, bertepatan dengan penyusunan rencana bisnis tahun depan.',
          document: 'Rencana Bisnis Perusahaan'
        },
        {
          step: 2,
          actor: 'Setiap Head Departemen',
          title: 'Penyusunan Rencana Kebutuhan Formasi',
          description: 'Berdasarkan rencana pengembangan bisnis tahun depan, setiap Head Departemen menyusun rencana kebutuhan penambahan karyawan baru di bidangnya.',
          document: 'Form Perencanaan SDM Tahunan'
        },
        {
          step: 3,
          actor: 'Head Departemen & HR',
          title: 'Analisis 2 Variabel Utama',
          description: 'Jumlah kebutuhan penambahan karyawan baru disusun dengan merujuk pada: a. Rencana ekspansi bisnis tahun depan, dan b. Tren karyawan yang keluar (turnover) tahun sebelumnya dan tahun berjalan.',
          document: 'Data Turnover & Proyeksi Bisnis'
        },
        {
          step: 4,
          actor: 'Head HRD',
          title: 'Rekapitulasi & Analisis Beban Kerja',
          description: 'Form Perencanaan SDM Tahunan yang telah diisi lengkap oleh setiap Head Departemen direkap dan dianalisis kelayakan beban kerjanya oleh Head HRD.',
          document: 'Rekapitulasi Usulan Formasi'
        },
        {
          step: 5,
          actor: 'Head HRD & Direksi',
          title: 'Pengajuan ke Direksi Perusahaan',
          description: 'Hasil analisis dan rekapitulasi form perencanaan SDM tahunan diolah Head HRD dan diajukan kepada Direksi Perusahaan untuk mendapatkan persetujuan.',
          document: 'Dokumen Usulan Perencanaan SDM Tahunan'
        },
        {
          step: 6,
          actor: 'Tim Rekrutmen HR',
          title: 'Penerbitan Rencana Rekrutmen (Jika Disetujui)',
          description: 'Jika mendapatkan persetujuan Direksi, data dimasukkan ke dalam Rencana Kegiatan Rekrutmen SDM Baru Tahunan (proses rekrutmen dimulai 2 bulan sebelum target masuk).',
          document: 'Form Rencana Kegiatan Rekrutmen SDM Baru'
        },
        {
          step: 7,
          actor: 'Head HRD',
          title: 'Feedback Informasi (Jika Belum Disetujui)',
          description: 'Jika tidak disetujui atau memerlukan revisi, informasi dan catatan rasionalisasi disampaikan kembali kepada masing-masing Kepala Departemen terkait.',
          document: 'Notifikasi Evaluasi Usulan'
        }
      ],
      requiredForms: [
        {
          name: 'Form Perencanaan SDM Tahunan',
          description: 'Formulir awal pengisian kebutuhan tenaga kerja baru oleh masing-masing Head Departemen.'
        },
        {
          name: 'Form Usulan Perencanaan SDM Tahunan',
          description: 'Dokumen gabungan hasil analisa HRD yang diajukan kepada Dewan Direksi untuk persetujuan.'
        },
        {
          name: 'Form Rencana Kegiatan Rekrutmen SDM Baru',
          description: 'Jadwal kerja rekrutmen tahunan terencana dengan target tanggal masuk dan lead time 2 bulan sebelumnya.'
        }
      ],
      sampleProposalForm: {
        title: 'Form Usulan Perencanaan SDM Tahunan (Contoh Sales & Marketing)',
        creator: 'Head Sales & Marketing',
        rows: [
          {
            neededCount: 5,
            position: 'Sales / Salesman',
            qualification: 'Minimal lulusan D3 Teknik Mesin',
            targetDate: '1 Juli 2027'
          },
          {
            neededCount: 1,
            position: 'Staf Marketing Media Sosial',
            qualification: 'Minimal lulusan D3 Desain Komunikasi Visual',
            targetDate: '1 Agustus 2027'
          }
        ]
      },
      sampleRecruitmentForm: {
        title: 'Form Rencana Rekrutmen Karyawan Baru (Rekapitulasi HRD)',
        creator: 'Manajer HRD',
        rows: [
          {
            neededCount: 5,
            position: 'Salesman',
            qualification: 'Minimal lulusan D3 Teknik Mesin',
            targetDate: '1 Juli 2027',
            department: 'Sales & Marketing',
            recruitmentStart: '2 bulan sebelumnya (1 Mei 2027)'
          },
          {
            neededCount: 1,
            position: 'Staf Marketing Media Sosial',
            qualification: 'Minimal lulusan D3 Desain Komunikasi Visual',
            targetDate: '1 Agustus 2027',
            department: 'Sales & Marketing',
            recruitmentStart: '2 bulan sebelumnya (1 Juni 2027)'
          },
          {
            neededCount: 1,
            position: 'Staf Akuntansi',
            qualification: 'Minimal lulusan D3 Akuntansi',
            targetDate: '2 Juli 2027',
            department: 'Keuangan',
            recruitmentStart: '2 bulan sebelumnya (2 Mei 2027)'
          },
          {
            neededCount: 1,
            position: 'Driver Operasional',
            qualification: 'Minimal lulusan SMK/SMA, SIM A/B1',
            targetDate: '20 April 2027',
            department: 'General Affairs',
            recruitmentStart: '2 bulan sebelumnya (20 Feb 2027)'
          }
        ]
      }
    }
  },

  // 5. HR - PELATIHAN & PENGEMBANGAN SDM
  {
    id: 'slide-5',
    slideNumber: 5,
    department: 'HR',
    layout: 'initiatives-grid',
    title: 'HR: Pembinaan, Pelatihan & Engagement Karyawan',
    subtitle: 'Investasi Modal Manusia, Sertifikasi Profesi, dan Peningkatan Kompetensi',
    speakerNotes: 'Rata-rata jam pelatihan per karyawan mencapai 26.5 jam/tahun, melampaui target 24 jam. Kami melaksanakan 18 sesi in-house training dan mensponsori 24 sertifikasi profesional di bidang Teknis, K3, Manajemen Proyek, dan Kepemimpinan.',
    cards: [
      {
        id: 'train1',
        title: 'Akademi Kepemimpinan (LEAD Program)',
        description: 'Mencetak 15 calon Supervisor & Team Lead baru melalui modul People Management & Problem Solving.',
        badge: 'Leadership',
        metrics: [{ label: 'Peserta Lulus', val: '100%' }, { label: 'Rating Program', val: '4.8 / 5' }]
      },
      {
        id: 'train2',
        title: 'Upskilling Digital & Teknis',
        description: 'Sertifikasi BNSP, K3 Umum Kemnaker, ITIL Foundation, Security Specialist, dan Analisis Finansial.',
        badge: 'Hard Skills',
        metrics: [{ label: 'Tersertifikasi', val: '24 Orang' }, { label: 'Realisasi Budget', val: '94%' }]
      },
      {
        id: 'train3',
        title: 'Program Kesejahteraan & Mental Health',
        description: 'Townhall bulanan, Friday Wellness sharing, akses konseling psikolog kerja, dan medical check-up tahunan.',
        badge: 'Well-being',
        metrics: [{ label: 'Partisipasi MCU', val: '98.2%' }, { label: 'Wellness Rating', val: '4.5 / 5' }]
      },
      {
        id: 'train4',
        title: 'Performance Appraisal & Reward System',
        description: 'Evaluasi kinerja berbasis OKR/KPI dengan feedback 360 derajat dan penghargaan Karyawan Teladan Kuartalan.',
        badge: 'Performance',
        metrics: [{ label: 'Ketepatan Waktu', val: '99%' }, { label: 'Retensi Top Talent', val: '95%' }]
      }
    ]
  },

  // 6. HR - PROGRAM KERJA STRATEGIS 2025
  {
    id: 'slide-6',
    slideNumber: 6,
    department: 'HR',
    layout: 'timeline-roadmap',
    title: 'HR: Rencana Program Kerja Prioritas 2025',
    subtitle: 'Fokus Utama: Standardisasi Kompetensi, Talent Pool, dan Otomasi HR',
    speakerNotes: 'Di tahun 2025, fokus HR mencakup revisi kamus kompetensi jabatan, peluncuran Learning Management System internal (e-Learning), standarisasi jenjang karier (Dual Career Path), dan otomatisasi claim reimbursement.',
    timeline: [
      {
        quarter: 'Q1',
        title: 'Revisi Kamus Kompetensi & Job Grading',
        department: 'HR',
        status: 'In Progress',
        description: 'Penyelarasan job description, standar kompetensi manajerial & teknis untuk seluruh fungsi jabatan.',
        deliverables: ['Dokumen Kamus Kompetensi', 'Struktur Skala Upah Updated', 'MPP 2025 Approval']
      },
      {
        quarter: 'Q2',
        title: 'Implementasi Internal LMS (E-Learning)',
        department: 'HR',
        status: 'Planned',
        description: 'Peluncuran platform pembelajaran mandiri untuk modul wajib onboarding, SOP, dan etika kerja.',
        deliverables: ['Go-live Portal LMS', '12 Video Modul Mandiri', 'Uji Coba 100 User']
      },
      {
        quarter: 'Q3',
        title: 'Talent Pool & Succession Planning',
        department: 'HR',
        status: 'Planned',
        description: 'Identifikasi 9-Box Grid untuk pemetaan High Potential employees & perencanaan suksesi pimpinan kunci.',
        deliverables: ['Peta 9-Box Talent Matrix', 'Individual Development Plan (IDP)', 'Mentorship Cohort']
      },
      {
        quarter: 'Q4',
        title: 'Annual Performance & Cultural Survey',
        department: 'HR',
        status: 'Planned',
        description: 'Pelaksanaan appraisal tahunan komprehensif, survei kepuasan budaya kerja, dan penyusunan budget 2026.',
        deliverables: ['Laporan eNPS 2025', 'Awarding Night Karyawan', 'Evaluasi Benefit Asuransi']
      }
    ]
  },

  // 7. GA - FASILITAS & OPERASIONAL KANTOR
  {
    id: 'slide-7',
    slideNumber: 7,
    department: 'GA',
    layout: 'kpi-dashboard',
    title: 'GA: Evaluasi Operasional Fasilitas & Gedung',
    subtitle: 'Tingkat Kecepatan Layanan, Pengelolaan Fasilitas, dan Kepuasan Pengguna Kantor',
    speakerNotes: 'Divisi GA melayani seluruh operasional fisik kantor pusat dan 3 cabang. Total 1.240 tiket permohonan layanan GA terselesaikan dengan SLA 96.8%. Tingkat kepuasan layanan kebersihan dan kenyamanan ruang kerja mencapai 93.5%.',
    metrics: [
      {
        id: 'ga1',
        label: 'SLA Penyelesaian Tiket GA',
        value: '96.8%',
        target: 'Target: 95%',
        unit: '%',
        trend: 'up',
        trendText: 'Rata-rata 1.8 jam respons',
        status: 'achieved',
        progress: 97
      },
      {
        id: 'ga2',
        label: 'Total Tiket Layanan Diproses',
        value: '1.240',
        target: 'Kategori: Fasilitas & ATK',
        unit: 'Tiket',
        trend: 'neutral',
        trendText: '100% tuntas terarsip',
        status: 'achieved',
        progress: 100
      },
      {
        id: 'ga3',
        label: 'Tingkat Kepuasan Fasilitas',
        value: '4.62 / 5',
        target: 'Target: 4.50',
        unit: 'Skor',
        trend: 'up',
        trendText: 'Survei semesteran',
        status: 'achieved',
        progress: 92
      },
      {
        id: 'ga4',
        label: 'Efisiensi Biaya Utilitas',
        value: 'Rp 145 Jt',
        target: 'Target: Rp 120 Jt',
        unit: 'IDR',
        trend: 'up',
        trendText: 'Penghematan listrik & air',
        status: 'achieved',
        progress: 100
      }
    ],
    cards: [
      {
        id: 'gac1',
        title: 'Pengelolaan Kebersihan & Sanitasi',
        description: 'Evaluasi berkala vendor Cleaning Service dengan audit checklist mingguan.',
        badge: 'Hygiene & Cleanliness',
        details: [
          'Penggantian bahan pembersih ramah lingkungan (eco-green chemical).',
          'Penyemprotan disinfektan & pest control terjadwal tanpa gangguan jam kerja.'
        ]
      },
      {
        id: 'gac2',
        title: 'Manajemen Keamanan (Security 24/7)',
        description: 'Nol insiden kehilangan aset atau pembobolan gedung sepanjang tahun 2024.',
        badge: 'Physical Security',
        details: [
          'Pemantauan 48 titik CCTV aktif dengan backup rekaman 30 hari.',
          'Pengetatan akses tamu melalui digital visitor pass di lobby.'
        ]
      }
    ]
  },

  // 8. GA - MANAJEMEN ASET & KENDARAAN OPERASIONAL
  {
    id: 'slide-8',
    slideNumber: 8,
    department: 'GA',
    layout: 'split-details',
    title: 'GA: Manajemen Aset Fisik & Armada Operasional',
    subtitle: 'Pencatatan Inventaris, Preventive Maintenance, dan Utilisasi Armada Kantor',
    speakerNotes: 'Total nilai aset fisik di bawah kelolaan GA mencapai Rp 4.2 Milyar dengan tingkat kepatuhan audit inventaris 99.4%. Armada operasional berjumlah 14 unit mobil dan 8 motor dengan utilitas 88% dan zero kecelakaan lalu lintas fatal.',
    metrics: [
      {
        id: 'gam1',
        label: 'Akurasi Audit Inventaris Fisik',
        value: '99.4%',
        target: 'Target: 98%',
        trend: 'up',
        trendText: 'Labeling QR Code tuntas',
        status: 'achieved',
        progress: 99
      },
      {
        id: 'gam2',
        label: 'Realisasi Preventive Maintenance',
        value: '97.1%',
        target: 'Target: 95%',
        trend: 'up',
        trendText: 'AC, Genset, Lift terjadwal',
        status: 'achieved',
        progress: 97
      },
      {
        id: 'gam3',
        label: 'Tingkat Kelaikan Armada Mobil',
        value: '100%',
        target: '14 Unit Armada',
        trend: 'up',
        trendText: 'Servis berkala ATPM resmi',
        status: 'achieved',
        progress: 100
      }
    ],
    cards: [
      {
        id: 'gac3',
        title: 'Digitalisasi Pemesanan Mobil Dinas',
        description: 'Penggantian form kertas menjadi formulir booking online terintegrasi Google Calendar.',
        badge: 'Fleet Management',
        details: [
          'Transparansi jadwal driver dan efisiensi rute perjalanan dinas.',
          'Kontrol konsumsi BBM berbasis rasio kilometer dan e-toll terpusat.'
        ]
      },
      {
        id: 'gac4',
        title: 'Pemeliharaan Gedung & Utilitas (HVAC/MEP)',
        description: 'Penggantian berkala filter AC central, inspeksi instalasi listrik, dan pengujian genset bulanan.',
        badge: 'Building Maintenance',
        details: [
          'Optimalisasi suhu pendingin ruangan standar 24-25°C sesuai standar hemat energi.',
          'Pemberian kartu kontrol perawatan pada setiap perangkat pendingin.'
        ]
      }
    ]
  },

  // 9. GA - K3 (HSE) & HUBUNGAN EKSTERNAL
  {
    id: 'slide-9',
    slideNumber: 9,
    department: 'GA',
    layout: 'initiatives-grid',
    title: 'GA: Keselamatan Kerja (K3) & Tata Kelola Vendor',
    subtitle: 'Zero Accident Compliance, Simulasi Tanggap Darurat, dan Evaluasi Rekanan',
    speakerNotes: 'Kami bangga mempertahankan predikat ZERO ACCIDENT pada tahun 2024. Telah dilakukan 2 kali simulasi evakuasi kebakaran dan gempa bumi bekerja sama dengan dinas pemadam kebakaran setempat.',
    cards: [
      {
        id: 'hse1',
        title: 'Pencapaian Zero Accident (K3)',
        description: 'Nol hari kerja hilang akibat kecelakaan operasional di seluruh area kantor & gudang.',
        badge: 'Safety First',
        metrics: [{ label: 'Lost Time Injury', val: '0 Kasus' }, { label: 'APAR Layak Pakai', val: '100%' }]
      },
      {
        id: 'hse2',
        title: 'Simulasi Evakuasi & Pelatihan P3K',
        description: 'Partisipasi 85% karyawan dalam fire drill tahunan dan pembekalan 20 First Aiders bersertifikat.',
        badge: 'Emergency Response',
        metrics: [{ label: 'Waktu Evakuasi', val: '3.5 Menit' }, { label: 'First Aiders', val: '20 Org' }]
      },
      {
        id: 'hse3',
        title: 'Evaluasi & Scoring Vendor Rutin',
        description: 'Penilaian kuartalan terhadap 18 vendor rekanan (cleaning, security, catering, stationery, AC).',
        badge: 'Procurement',
        metrics: [{ label: 'Vendor Di-review', val: '18 Mitra' }, { label: 'Vendor SLA Pass', val: '94%' }]
      },
      {
        id: 'hse4',
        title: 'Perizinan Gedung & Legalitas Lingkungan',
        description: 'Perpanjangan tepat waktu untuk SLF gedung, izin pembuangan limbah, dan asuransi all-risk properti.',
        badge: 'Compliance',
        metrics: [{ label: 'Kepatuhan Legal', val: '100%' }, { label: 'Denda Keterlambatan', val: 'Rp 0' }]
      }
    ]
  },

  // 10. GA - RENCANA STRATEGIS 2025
  {
    id: 'slide-10',
    slideNumber: 10,
    department: 'GA',
    layout: 'timeline-roadmap',
    title: 'GA: Rencana Program Kerja Prioritas 2025',
    subtitle: 'Fokus Utama: Smart Office, Efisiensi Energi Berkelanjutan, dan Re-layout Ruang Kolaborasi',
    speakerNotes: 'Rencana kerja GA 2025 difokuskan pada penataan ruang kerja fleksibel (hybrid collaborative hub), adopsi sensor gerak hemat energi untuk lampu, dan peremajaan 3 unit armada operasional berumur lebih dari 7 tahun.',
    timeline: [
      {
        quarter: 'Q1',
        title: 'Audit Fasilitas & Re-layout Meeting Room',
        department: 'GA',
        status: 'In Progress',
        description: 'Renovasi 4 ruang rapat utama dengan peredam suara dan perlengkapan video conference modern.',
        deliverables: ['Layout Design Approval', 'Tender Kontraktor', 'Instalasi Acoustic Panel']
      },
      {
        quarter: 'Q2',
        title: 'Program Green Office & Sensor Smart Lighting',
        department: 'GA',
        status: 'Planned',
        description: 'Pemasangan motion sensor di toilet & lorong serta pengurangan plastik sekali pakai di pantry.',
        deliverables: ['Target Hemat Daya 10%', 'Dispenser Air Sentral', 'Sertifikasi K3 Audit']
      },
      {
        quarter: 'Q3',
        title: 'Peremajaan Armada & Kontrak Rental Efisien',
        department: 'GA',
        status: 'Planned',
        description: 'Transisi bertahap kepemilikan mobil operasional ke model leasing/sewa untuk menekan capex pemeliharaan.',
        deliverables: ['Seleksi Partner Rental', 'Disposal 3 Unit Tua', 'Efisiensi Opex Perjalanan']
      },
      {
        quarter: 'Q4',
        title: 'Annual Asset Stock Take & Vendor Gala',
        department: 'GA',
        status: 'Planned',
        description: 'Audit akhir tahun seluruh aset properti, evaluasi kontrak mitra tahun 2026, dan penghargaan vendor terbaik.',
        deliverables: ['Buku Inventaris 2025', 'Kontrak Baru 2026', 'Zero Dispute Closing']
      }
    ]
  },

  // 11. IT - INFRASTRUKTUR & JARINGAN
  {
    id: 'slide-11',
    slideNumber: 11,
    department: 'IT',
    layout: 'kpi-dashboard',
    title: 'IT: Infrastruktur Jaringan & Ketersediaan Sistem',
    subtitle: 'Evaluasi Kestabilan Server, Bandwidth, Cloud Architecture, dan Keandalan Data Center',
    speakerNotes: 'Infrastruktur IT mencapai 99.92% system uptime, dengan total downtime terencana kurang dari 6 jam sepanjang tahun untuk maintenance. Koneksi internet kantor didukung dual-homed provider (fiber optik redundan) dengan failover otomatis.',
    metrics: [
      {
        id: 'it1',
        label: 'Overall System Availability (SLA)',
        value: '99.92%',
        target: 'SLA: 99.80%',
        unit: '%',
        trend: 'up',
        trendText: 'Hanya 42 menit unscheduled downtime',
        status: 'achieved',
        progress: 100
      },
      {
        id: 'it2',
        label: 'Kecepatan Resolusi Tiket IT',
        value: '45 Menit',
        target: 'Target: < 60 Mnt',
        unit: 'Mnt',
        trend: 'down',
        trendText: '98.2% first-touch resolution',
        status: 'achieved',
        progress: 95
      },
      {
        id: 'it3',
        label: 'Uptime Jaringan Kantor Cabang',
        value: '99.85%',
        target: 'Target: 99.50%',
        unit: '%',
        trend: 'up',
        trendText: 'SD-WAN stabil & terenkripsi',
        status: 'achieved',
        progress: 99
      },
      {
        id: 'it4',
        label: 'Recovery Time Objective (RTO)',
        value: '< 2 Jam',
        target: 'Maks: 4 Jam',
        unit: 'Jam',
        trend: 'down',
        trendText: 'Disaster Recovery teruji',
        status: 'achieved',
        progress: 90
      }
    ],
    cards: [
      {
        id: 'itc1',
        title: 'Redundansi Server & Hybrid Cloud',
        description: 'Migrasi 60% workload ke Cloud (AWS / Google Cloud) dengan backup snapshot otomatis harian.',
        badge: 'High Availability',
        details: [
          'Pemisahan environment Production, Staging, dan Disaster Recovery Site.',
          'Penerapan load balancing untuk memastikan kestabilan saat traffic puncak.'
        ]
      },
      {
        id: 'itc2',
        title: 'Upgrade Bandwidth & Wi-Fi 6',
        description: 'Pemasangan Access Point Wi-Fi 6 di seluruh lantai kantor untuk mendukung ratusan koneksi simultan.',
        badge: 'Network Upgrade',
        details: [
          'Bandwidth kantor ditingkatkan menjadi 300 Mbps dedicated symetric.',
          'Isolasi jaringan tamu (Guest Wi-Fi) terpisah dari subnet data internal kantor.'
        ]
      }
    ]
  },

  // 12. IT - CYBERSECURITY & DATA PROTECTION
  {
    id: 'slide-12',
    slideNumber: 12,
    department: 'IT',
    layout: 'split-details',
    title: 'IT: Keamanan Siber, Backup & Perlindungan Data',
    subtitle: 'Penerapan ISO 27001 Baseline, Zero Data Breach, dan Kesadaran Keamanan Karyawan',
    speakerNotes: 'Di era meningkatnya ancaman siber dan berlakunya UU Perlindungan Data Pribadi (UU PDP), divisi IT menerapkan pertahanan berlapis: Next-Gen Firewall, Endpoint Detection and Response (EDR), serta simulasi phishing berkala untuk karyawan.',
    metrics: [
      {
        id: 'itm1',
        label: 'Insiden Kebocoran Data (Data Breach)',
        value: '0 Kasus',
        target: 'Zero Tolerance',
        trend: 'neutral',
        trendText: 'Zero Major Security Incident',
        status: 'achieved',
        progress: 100
      },
      {
        id: 'itm2',
        label: 'Simulasi Phishing Success Rate',
        value: '94.6%',
        target: 'Target: > 90%',
        trend: 'up',
        trendText: 'Karyawan tidak tertipu link palsu',
        status: 'achieved',
        progress: 94
      },
      {
        id: 'itm3',
        label: 'Kepatuhan Patching & Antivirus EDR',
        value: '99.1%',
        target: 'Target: 98%',
        trend: 'up',
        trendText: 'Seluruh laptop terpusat di Crowdstrike',
        status: 'achieved',
        progress: 99
      }
    ],
    cards: [
      {
        id: 'itc3',
        title: 'Backup 3-2-1 Strategy & Disaster Recovery',
        description: '3 salinan data, pada 2 media berbeda, dengan 1 salinan offsite terenkripsi immutable cloud.',
        badge: 'Business Continuity',
        details: [
          'Simulasi DR drill dilakukan sukses pada September 2024 dengan RPO < 15 menit.',
          'Pencegahan ransomware melalui proteksi write-once read-many (WORM) storage.'
        ]
      },
      {
        id: 'itc4',
        title: 'Penerapan Multi-Factor Authentication (MFA)',
        description: 'Mewajibkan login MFA (Google Authenticator / SMS OTP) untuk seluruh akses email, VPN, & ERP.',
        badge: 'Identity Access',
        details: [
          '100% akun karyawan aktif telah terhubung dengan Single Sign-On (SSO).',
          'Pencabutan otomatis akun IT dalam 1 jam setelah karyawan berstatus resign/offboarding.'
        ]
      }
    ]
  },

  // 13. IT - TRANSFORMASI DIGITAL & SISTEM APLIKASI
  {
    id: 'slide-13',
    slideNumber: 13,
    department: 'IT',
    layout: 'initiatives-grid',
    title: 'IT: Transformasi Digital & Automasi Proses Bisnis',
    subtitle: 'Pengembangan Aplikasi Internal, Modernisasi ERP, dan Integrasi Lintas Fungsi',
    speakerNotes: 'Tim IT mengembangkan dan merawat 6 aplikasi internal utama. Proyek kolaborasi besar dengan HR (e-Leave & Absensi Mobile) dan GA (E-Ticketing & Asset Tracker) sukses memangkas penggunaan kertas hingga 80%.',
    cards: [
      {
        id: 'app1',
        title: 'Portal HRIS & Mobile Attendance',
        description: 'Aplikasi absensi berbasis koordinat GPS + selfie anti-mock location dengan integrasi ke payroll.',
        badge: 'HR Collaboration',
        metrics: [{ label: 'Pengguna Aktif', val: '342 User' }, { label: 'Akurasi Absen', val: '99.7%' }]
      },
      {
        id: 'app2',
        title: 'GA Service Desk & Asset QR System',
        description: 'Pencatatan tiket perbaikan fasilitas dan pemindaian QR code untuk verifikasi kepemilikan laptop inventaris.',
        badge: 'GA Collaboration',
        metrics: [{ label: 'Aset Terlabel', val: '650 Item' }, { label: 'Paperless', val: '100%' }]
      },
      {
        id: 'app3',
        title: 'Peningkatan Modul ERP Finance & Proc',
        description: 'Otomatisasi alur Purchase Order dan e-Approval berjenjang yang mempercepat cycle time pembayaran.',
        badge: 'Finance & Supply',
        metrics: [{ label: 'Lead Time PO', val: '-40%' }, { label: 'Error Input', val: '< 0.5%' }]
      },
      {
        id: 'app4',
        title: 'AI Productivity Tools & Bot Helpdesk',
        description: 'Uji coba chatbot AI internal untuk menjawab FAQ pertanyaan SOP kepegawaian & troubleshooting IT ringan.',
        badge: 'AI Innovation',
        metrics: [{ label: 'Tanya Jawab Terjawab', val: '68%' }, { label: 'Waktu Hemat', val: '15 Jam/mgg' }]
      }
    ]
  },

  // 14. IT - RENCANA STRATEGIS 2025
  {
    id: 'slide-14',
    slideNumber: 14,
    department: 'IT',
    layout: 'timeline-roadmap',
    title: 'IT: Rencana Program Kerja Prioritas 2025',
    subtitle: 'Fokus Utama: Modernisasi ERP, Sertifikasi ISO 27001, dan Pemanfaatan AI Otomasi',
    speakerNotes: 'Pada tahun 2025, IT akan memimpin 3 agenda besar: peremajaan hardware laptop staff secara bertahap, audit kesiapan sertifikasi keamanan informasi ISO 27001, dan peluncuran data warehouse terpadu.',
    timeline: [
      {
        quarter: 'Q1',
        title: 'Audit Keamanan & Kesiapan ISO 27001',
        department: 'IT',
        status: 'In Progress',
        description: 'Penilaian celah keamanan pihak ketiga (Vulnerability Assessment & Penetration Testing).',
        deliverables: ['Laporan VAPT', 'Kebijakan Keamanan TI Baru', 'Penutupan Celah Level High']
      },
      {
        quarter: 'Q2',
        title: 'Siklus Peremajaan Laptop & PC Staff (Batch 1)',
        department: 'IT',
        status: 'Planned',
        description: 'Penggantian 45 unit laptop berumur > 4 tahun dengan spesifikasi terkini untuk menunjang produktivitas.',
        deliverables: ['Distribusi Unit Baru', 'Data Migration', 'Disposal & Wipe Unit Lama']
      },
      {
        quarter: 'Q3',
        title: 'Integrasi Data Warehouse & Executive Dashboard',
        department: 'IT',
        status: 'Planned',
        description: 'Penyatuan database HR, GA, Operasional, dan Keuangan ke dalam dashboard PowerBI/Metabase real-time.',
        deliverables: ['Pipeline ETL Terjadwal', 'Dashboard Direksi', 'Data Dictionary']
      },
      {
        quarter: 'Q4',
        title: 'Full Cloud Disaster Recovery Drill',
        department: 'IT',
        status: 'Planned',
        description: 'Pengujian pemulihan sistem menyeluruh jika server on-premise mengalami mati total mendadak.',
        deliverables: ['SOP DR Terverifikasi', 'RTO < 60 Menit', 'Audit Kepatuhan UU PDP']
      }
    ]
  },

  // 15. GABUNGAN - ANGGARAN (BUDGET) HRGA-IT
  {
    id: 'slide-15',
    slideNumber: 15,
    department: 'ALL',
    layout: 'budget-matrix',
    title: 'Realisasi Anggaran 2024 & Usulan Budget 2025',
    subtitle: 'Rincian Penggunaan Anggaran OpEx & CapEx Departemen HRGA-IT (Juta Rupiah)',
    speakerNotes: 'Total realisasi anggaran HRGA-IT tahun 2024 adalah Rp 3.250 Juta dari alokasi Rp 3.520 Juta (serapan 92.3%). Untuk tahun 2025, kami mengajukan penyesuaian rasional menjadi Rp 3.780 Juta dengan porsi utama dialokasikan pada investasi pelatihan SDM, peremajaan IT, dan perawatan fasilitas kantor.',
    budget: [
      {
        category: 'HR: Pelatihan, Rekrutmen & Engagement',
        department: 'HR',
        budget: 950,
        realization: 880,
        percentage: 92.6,
        notes: 'Sertifikasi BNSP, Employee Gathering, Portal Rekrutmen'
      },
      {
        category: 'HR: Asuransi Medis & Kesejahteraan',
        department: 'HR',
        budget: 850,
        realization: 810,
        percentage: 95.3,
        notes: 'BPJS Ketenagakerjaan, BPJS Kesehatan & Top-up Asuransi'
      },
      {
        category: 'GA: Pemeliharaan Gedung & Utilitas',
        department: 'GA',
        budget: 680,
        realization: 620,
        percentage: 91.2,
        notes: 'Listrik, Air, AC maintenance, Cleaning, Security Service'
      },
      {
        category: 'GA: Operasional Armada & ATK',
        department: 'GA',
        budget: 340,
        realization: 310,
        percentage: 91.2,
        notes: 'BBM, E-toll, Servis mobil, Alat tulis kantor terpusat'
      },
      {
        category: 'IT: Lisensi Software & Cloud Infra',
        department: 'IT',
        budget: 420,
        realization: 395,
        percentage: 94.0,
        notes: 'Google Workspace/M365, AWS Cloud, Antivirus EDR'
      },
      {
        category: 'IT: Pemeliharaan Hardware & Jaringan',
        department: 'IT',
        budget: 280,
        realization: 235,
        percentage: 83.9,
        notes: 'Koneksi internet dedicated, penggantian sparepart server'
      }
    ],
    interactiveOptions: {
      showCalculator: true
    }
  },

  // 16. GABUNGAN - ROADMAP STRATEGIS LINTAS DIVISI 2025
  {
    id: 'slide-16',
    slideNumber: 16,
    department: 'ALL',
    layout: 'timeline-roadmap',
    title: 'Roadmap Sinergi RAKER HRGA-IT 2025',
    subtitle: 'Timeline Terpadu Eksekusi Program Prioritas Q1 hingga Q4',
    speakerNotes: 'Slide ini merangkum sinergi lintas pilar HR, GA, dan IT. Di Q1 kita fokus pada pondasi kepatuhan dan audit; Q2 implementasi teknologi dan sarana; Q3 penguatan kapabilitas talenta dan sistem; serta Q4 evaluasi menyeluruh dan standarisasi proses.',
    timeline: [
      {
        quarter: 'Q1',
        title: 'Pondasi Tata Kelola & Audit',
        department: 'ALL',
        status: 'In Progress',
        description: 'Audit SOP lintas departemen, penguatan standar K3 di area kerja, dan evaluasi kepatuhan siber VAPT.',
        deliverables: ['Pembaruan Regulasi Kerja', 'Sertifikasi K3 Fasilitas', 'Patch Keamanan']
      },
      {
        quarter: 'Q2',
        title: 'Modernisasi Sarana & Digital LMS',
        department: 'ALL',
        status: 'Planned',
        description: 'Peluncuran modul e-Learning mandiri HR, peremajaan meeting room GA, dan peningkatan infrastruktur Wi-Fi 6.',
        deliverables: ['LMS Aktif', 'Smart Meeting Rooms', 'Peningkatan Bandwidth']
      },
      {
        quarter: 'Q3',
        title: 'Pengembangan Talenta & Sinergi Sistem',
        department: 'ALL',
        status: 'Planned',
        description: 'Pelaksanaan 9-Box Talent Review, peremajaan armada operasional, dan implementasi Data Warehouse.',
        deliverables: ['Kader Suksesi', 'Transisi Armada Efisien', 'Dashboard BI Direksi']
      },
      {
        quarter: 'Q4',
        title: 'Evaluasi Tahunan & Continuous Improvement',
        department: 'ALL',
        status: 'Planned',
        description: 'Survei kepuasan karyawan (eNPS), stock-opname aset akhir tahun, dan Disaster Recovery test komprehensif.',
        deliverables: ['Skor eNPS > +45', 'Akurasi Aset 99.5%', 'Rencana Kerja 2026']
      }
    ]
  },

  // 17. CLOSING SLIDE
  {
    id: 'slide-17',
    slideNumber: 17,
    department: 'ALL',
    layout: 'closing',
    title: 'TERIMA KASIH',
    subtitle: 'Komitmen Bersama Menuju Pertumbuhan Berkelanjutan 2025',
    tagline: '"One Team, One Goal: Melayani dengan Cepat, Tepat, dan Berkelanjutan"',
    speakerNotes: 'Demikian pemaparan RAKER dari Departemen HRGA-IT. Kami siap mendengarkan arahan, masukan, dan berdiskusi lebih lanjut bersama Bapak/Ibu Dewan Direksi untuk memastikan seluruh program kerja terlaksana dengan sukses. Terima kasih.',
    cards: [
      {
        id: 'cl1',
        title: 'Sinergi Tanpa Sekat',
        description: 'Kolaborasi erat antara SDM, Sarana Prasarana, dan Teknologi.',
        iconName: 'Sparkles',
        badge: 'Core Value'
      },
      {
        id: 'cl2',
        title: 'Akuntabilitas & Efisiensi',
        description: 'Pengelolaan anggaran yang transparan dan terukur dampaknya.',
        iconName: 'ShieldCheck',
        badge: 'Governance'
      },
      {
        id: 'cl3',
        title: 'Inovasi Berkelanjutan',
        description: 'Adaptasi cepat terhadap perkembangan AI dan otomatisasi masa depan.',
        iconName: 'TrendingUp',
        badge: 'Future Ready'
      }
    ],
    interactiveOptions: {
      allowCelebration: true
    }
  }
];

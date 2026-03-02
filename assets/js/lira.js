// ===== RIYALDIRECT APP.JS Ã¢â‚¬â€ LiraDirect Turkey Edition =====

let currentWAMessageContext = "general";

// ===== WA MODAL =====
function openWAModal(context = "general") {
  currentWAMessageContext = context;
  const modal = document.getElementById("wa-modal");
  if (!modal) return;
  modal.classList.add("active");
  const lang = document.documentElement.lang || "id";
  updateWALinks(lang);
}
function toggleWAModal() {
  const modal = document.getElementById("wa-modal");
  if (!modal) return;
  modal.classList.toggle("active");
  if (modal.classList.contains("active")) {
    currentWAMessageContext = "general";
    updateWALinks(document.documentElement.lang || "id");
  }
}
function closeWAModalOnBackdrop(event) {
  if (event.target === event.currentTarget) toggleWAModal();
}

// ===== MOBILE MENU =====
function closeMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  if (menu) menu.classList.remove("active");
}

// ===== FAQ =====
function toggleFaq(button) {
  const answer = button.nextElementSibling;
  const icon = button.querySelector(".faq-icon-el");
  const item = button.closest(".faq-item");
  document.querySelectorAll(".faq-answer").forEach((el) => {
    if (el !== answer) {
      el.style.maxHeight = "0px";
      el.closest(".faq-item")?.classList.remove("is-open");
      const ic = el.previousElementSibling?.querySelector(".faq-icon-el");
      if (ic) ic.style.transform = "rotate(0)";
    }
  });
  if (answer.style.maxHeight && answer.style.maxHeight !== "0px") {
    answer.style.maxHeight = "0px";
    item?.classList.remove("is-open");
    if (icon) icon.style.transform = "rotate(0)";
  } else {
    answer.style.maxHeight = answer.scrollHeight + "px";
    item?.classList.add("is-open");
    if (icon) icon.style.transform = "rotate(180deg)";
  }
}

// ===== TRANSLATIONS =====
const translations = {
  id: {
    text: {
      "nav-contact-text": "Hubungi Kami",
      "brand-tagline": "Transfer Lira Terpercaya",
      "nav-link-home": "Beranda",
      "nav-link-features": "Layanan",
      "nav-link-steps": "Alur",

      "nav-link-faq": "FAQ",
      "hero-badge-text": "TEROBOSAN PERTAMA DI INDONESIA",
      "hero-title-line-1": "Transfer Lira untuk",
      "hero-title-line-2": "Agen Tour & Hotel di Turki",
      "hero-subtitle":
        "Layanan transfer Lira untuk kebutuhan Agen Tour (LA) dan hotel di Turki dengan proses cepat, transparan, dan aman.",
      "hero-trust-safe": "Transaksi Aman",
      "hero-trust-open": "Buka Setiap Hari",
      "hero-cta-text": "Mulai Transaksi",
      "hero-security-badge": "100% Amanah",
      "calc-desktop-title": "Simulasi Kurs",
      "calc-desktop-live": "LIVE",
      "calc-label-sar": "Jumlah Lira (TRY)",
      "calc-label-idr": "Estimasi Rupiah (IDR)",
      "calc-rate-note": "Rate indikatif. Hubungi CS untuk final rate.",
      "calc-live-data": "Kurs Google +10",
      "trust-exp-label": "Tahun Pengalaman",
      "trust-partner-label": "Mitra Puas",
      "trust-disbursed-label": "Tersalurkan",
      "trust-disbursed-unit": "Juta",
      "feature-badge-label": "Nilai Lebih Kami",
      "feature-subtitle":
        "Kami menghadirkan standar pelayanan premium untuk kelancaran transaksi bisnis dan tour Anda di Turki.",
      "feature-title-1": "Tanpa Uang Tunai",
      "feature-title-2": "Efisiensi Waktu",
      "feature-title-3": "Amanah & Terjamin",
      "feature-desc-1":
        "Minimalisir risiko kehilangan uang tunai dengan transfer langsung ke rekening Agen Tour (LA) atau hotel secara aman.",
      "feature-desc-2":
        "Fokus pada tour dan bisnis Anda. Tanpa antre, tanpa birokrasi rumit. Transaksi efisien, transparan, dan terjaga.",
      "feature-desc-3":
        "Reputasi 3+ tahun menjaga amanah klien. Bukti transfer (resi) resmi dan real-time langsung dikirim ke WhatsApp Anda.",
      "feature-tag-1": "Lebih Aman",
      "feature-tag-2": "Lebih Cepat",
      "feature-tag-3": "Terpercaya",
      "steps-badge": "Alur Transaksi",
      "step-title-1": "Konsultasi",
      "step-title-2": "Pembayaran Agen Tour (LA)",
      "step-title-3": "Tuntas",
      "step-desc-1":
        "Hubungi tim kami via WhatsApp. Sampaikan kebutuhan nominal lira dan tujuan transfer.",
      "step-desc-2":
        "Lakukan transfer Rupiah ke rekening resmi kami dengan kurs kompetitif dan transparan.",
      "step-desc-3":
        "Lira dikirim ke penerima. Bukti transfer valid langsung kami kirimkan sebagai konfirmasi.",

      "faq-badge": "Pusat Bantuan",
      "faq-q-1": "Apakah transaksi ini aman?",
      "faq-a-1":
        "Sangat aman. Kami didukung infrastruktur perbankan resmi dan kemitraan strategis dengan warga lokal Turki dengan kapasitas limit hingga 5 Juta TRY per hari. Dengan rekam jejak 3+ tahun, setiap transaksi dijamin transparan melalui pengiriman resi bank resmi secara real-time ke WhatsApp Anda.",
      "faq-q-2": "Berapa lama uang sampai ke tujuan?",
      "faq-a-2":
        "Setiap transaksi diproses secara sistematis sesuai urutan antrean yang masuk. Dana Anda akan segera diteruskan ke rekening Agen Tour (LA) atau Hotel tujuan setelah proses verifikasi selesai, guna memastikan keamanan dan ketepatan data di setiap pengiriman.",
      "faq-q-3": "Apa langkah awal untuk transaksi?",
      "faq-a-3":
        'Cukup klik tombol WhatsApp di pojok kanan bawah atau tombol "Mulai Transaksi". Tim support kami akan langsung memandu Anda untuk pengecekan kurs dan nomor rekening tujuan.',
      "faq-q-4": "Pecahan lira cash apa saja yang tersedia?",
      "faq-a-4":
        "Kami menyediakan pecahan 1, 5, 10, 50, 100, dan 500 TRY yang bisa diambil di Turki (Istanbul, Cappadocia, Bursa).",
      "faq-q-5": "Bagaimana cara memulai transaksi?",
      "faq-a-5":
        "Hubungi salah satu admin kami via WhatsApp. Sampaikan kebutuhan Anda \u2014 nominal, tujuan transfer, dan jadwal keberangkatan.",
      "cash-desc-a":
        "Tersedia berbagai pecahan untuk kebutuhan uang saku wisatawan selama di Turki.",
      "cash-desc-b":
        "Lira tunai bisa diambil langsung oleh tim kami di Turki. Tersedia di kota-kota utama.",
      "cash-button-text": "Pesan Lira Cash",
      "cta-subtitle":
        "Hubungi tim kami untuk konsultasi kurs dan kebutuhan pembayaran di Turki.",
      "cta-button-text": "Konsultasi via WhatsApp",
      "footer-description":
        "Mitra tepercaya untuk pembayaran Agen Tour (LA), hotel, dan kebutuhan operasional tour & bisnis di Turki.",
      "footer-service-title": "Layanan Utama",
      "footer-service-1": "Transfer Agen Tour (LA)",
      "footer-service-2": "Pembayaran Hotel",
      "footer-service-3": "Handling Kargo",
      "footer-service-4": "Kurs Lira Terkini",
      "footer-contact-title": "Kontak Kami",
      "footer-location-text": "Jakarta, Indonesia",
      "footer-copyright": "\u00a9 2026 LiraDirect. Dilindungi Undang-Undang.",
      "footer-terms": "Syarat & Ketentuan",
      "footer-privacy": "Kebijakan Privasi",
      "wa-modal-badge": "WhatsApp Support",
      "wa-modal-title": "Pilih Admin Layanan",
      "wa-modal-subtitle-1": "Pilih salah satu admin kami di bawah.",
      "wa-modal-subtitle-2": "Respons cepat, pilih admin yang tersedia.",
      "mobile-link-features": "Layanan",
      "mobile-link-steps": "Alur Transaksi",

      "mobile-link-cash": "Lira Cash",
      "mobile-link-faq": "FAQ",
      "mobile-contact-btn": "Hubungi Kami",

      "faq-subtitle": "Klik pertanyaan untuk melihat jawaban.",
      "cash-subtitle":
        "Kami menyediakan uang tunai Lira (TRY) fisik yang bisa diambil langsung di Turki.",
      "cash-denom-title": "Pecahan Tersedia",
      "cash-pickup-title": "Pengambilan di Turki",
      "cash-denom-note":
        "Pecahan kecil cocok untuk belanja di sekitar Grand Bazaar & Spice Market Istanbul.",
      "cash-footnote":
        "* Layanan lira tunai hanya tersedia di Turki. Untuk transfer ke rekening Agen Tour (LA)/Hotel, silakan hubungi CS.",
      "cash-badge": "Lira Tunai",
      "cash-city-1": "Istanbul",
      "cash-city-2": "Cappadocia",
      "cash-city-3": "Bursa",
      "cta-response-text": "Respons cepat \u2022 24/7 Support",
      "cta-security-note": "Transaksi aman & terlindungi",
      "footer-info-title": "Informasi",
      "footer-email-text": "admin@liradirect.com",
    },
    html: {
      "feature-heading":
        'Mengapa Memilih <span class="text-primary relative inline-block">LiraDirect <svg class="absolute w-full h-2 bottom-1 left-0" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true"><path d="M0 5 Q 50 10 100 5" stroke="#0f766e" stroke-width="2" fill="none" opacity="0.25"></path></svg></span>?',
      "steps-heading":
        'Alur Transfer Lira & <span class="text-primary">Pembayaran Hotel Turki</span>',

      "faq-heading": 'Sering <span class="text-primary">Ditanyakan</span>',
      "cta-heading": "Siap Membantu Transaksi Anda",
      "cash-heading":
        'Uang Tunai Lira <span class="text-primary">di Turki</span>',
    },
  },
  en: {
    text: {
      "nav-contact-text": "Contact Us",
      "brand-tagline": "Trusted Lira Transfer",
      "nav-link-home": "Home",
      "nav-link-features": "Services",
      "nav-link-steps": "Flow",
      "nav-link-testimonials": "Reviews",
      "nav-link-faq": "FAQ",
      "hero-badge-text": "VERIFIED LIRA TRANSFER SERVICE",
      "hero-title-line-1": "Lira Transfer for",
      "hero-title-line-2": "Tour Agents & Hotels in Türkiye",
      "hero-subtitle":
        "Lira transfer service for Agen Tour (LA) and hotel payments in Turki with a fast, transparent, and secure process.",
      "hero-trust-safe": "Secure Transactions",
      "hero-trust-open": "Open Daily",
      "hero-cta-text": "Start Transaction",
      "hero-security-badge": "100% Trusted",
      "calc-desktop-title": "Rate Simulation",
      "calc-desktop-live": "LIVE",
      "calc-label-sar": "Lira Amount (TRY)",
      "calc-label-idr": "Estimated Rupiah (IDR)",
      "calc-rate-note": "Indicative rate. Contact CS for final rate.",
      "calc-live-data": "Google Rate +10",
      "trust-exp-label": "Years of Experience",
      "trust-partner-label": "Satisfied Partners",
      "trust-disbursed-label": "Disbursed",
      "trust-disbursed-unit": "Million",
      "feature-badge-label": "Our Value",
      "feature-subtitle":
        "We deliver premium service standards for smooth transactions in Turkey.",
      "feature-title-1": "Cashless Transfer",
      "feature-title-2": "Time Efficiency",
      "feature-title-3": "Trustworthy & Secure",
      "feature-desc-1":
        "Minimize cash loss risk with direct transfer to Agen Tour (LA) or hotel accounts safely.",
      "feature-desc-2":
        "Focus on your tour and business. No queues, no complicated bureaucracy.",
      "feature-desc-3":
        "3+ years of proven trust. Official transfer receipts sent in real time via WhatsApp.",
      "feature-tag-1": "Safer",
      "feature-tag-2": "Faster",
      "feature-tag-3": "Reliable",
      "steps-badge": "Transaction Flow",
      "step-title-1": "Consultation",
      "step-title-2": "Payment",
      "step-title-3": "Completed",
      "step-desc-1":
        "Contact our team via WhatsApp. Share your lira amount and transfer destination.",
      "step-desc-2":
        "Transfer IDR to our official account with competitive and transparent rates.",
      "step-desc-3":
        "Lira is sent to the recipient with valid proof of transfer as confirmation.",

      "faq-badge": "Help Center",
      "faq-q-1": "Is this transaction safe?",
      "faq-a-1":
        "Very safe. We are supported by official banking infrastructure and strategic partnerships with local Turki partners, with capacity up to 5 million TRY per day. With a 3+ year track record, every transaction is kept transparent through real-time official bank receipts sent to your WhatsApp.",
      "faq-q-2": "How long until funds reach the destination?",
      "faq-a-2":
        "Each transaction is processed systematically based on the incoming queue order. Your funds will be forwarded to the destination Agen Tour (LA) or Hotel account after verification is completed, to ensure security and data accuracy for every transfer.",
      "faq-q-3": "What is the first step to start a transaction?",
      "faq-a-3":
        'Simply click the WhatsApp button in the bottom-right corner or the "Start Transaction" button. Our support team will guide you through rate checking and the destination account details.',
      "faq-q-4": "What Lira cash denominations are available?",
      "faq-a-4":
        "We provide 1, 5, 10, 50, 100, and 500 TRY denominations for pickup in Turki (Istanbul, Cappadocia, Bursa).",
      "faq-q-5": "How do I start a transaction?",
      "faq-a-5":
        "Contact any of our admins via WhatsApp. Share your needs \u2014 amount, destination, and departure schedule.",
      "cash-desc-a":
        "Various denominations available for pilgrims\u2019 pocket money in Turkey.",
      "cash-desc-b":
        "Cash Lira can be picked up directly from our team in Turki. Available in major cities.",
      "cash-button-text": "Order Cash Lira",
      "cta-subtitle":
        "Contact our team for rate consultation and payment needs in Turkey.",
      "cta-button-text": "Consult via WhatsApp",
      "footer-description":
        "Trusted partner for Agen Tour (LA), Hotel, and tour & business operations in Turkey.",
      "footer-service-title": "Main Services",
      "footer-service-1": "Agen Tour (LA) Transfer",
      "footer-service-2": "Hotel Payment",
      "footer-service-3": "Cargo Handling",
      "footer-service-4": "Latest Lira Rates",
      "footer-contact-title": "Contact Us",
      "footer-location-text": "Jakarta, Indonesia",
      "footer-copyright": "\u00a9 2026 LiraDirect. All rights reserved.",
      "footer-terms": "Terms & Conditions",
      "footer-privacy": "Privacy Policy",
      "wa-modal-badge": "WhatsApp Support",
      "wa-modal-title": "Choose Service Admin",
      "wa-modal-subtitle-1": "Choose one of our admins below.",
      "wa-modal-subtitle-2": "Fast response, pick any available admin.",
      "mobile-link-features": "Services",
      "mobile-link-steps": "Transaction Flow",

      "mobile-link-cash": "Cash Lira",
      "mobile-link-faq": "FAQ",
      "mobile-contact-btn": "Contact Us",

      "faq-subtitle": "Tap a question to view the answer.",
      "cash-subtitle":
        "We provide physical Lira (TRY) cash that can be picked up directly in Turki.",
      "cash-denom-title": "Available Denominations",
      "cash-pickup-title": "Pickup in Turki",
      "cash-denom-note":
        "Small denominations are ideal for shopping around Masjidil Haram & Masjid Nabawi.",
      "cash-footnote":
        "* Cash Lira service is only available in Turki. For Agen Tour (LA)/Hotel bank transfers, please contact CS.",
      "cash-badge": "Cash Lira",
      "cash-city-1": "Istanbul",
      "cash-city-2": "Cappadocia",
      "cash-city-3": "Bursa",
      "cta-response-text": "Fast response \u2022 24/7 Support",
      "cta-security-note": "Secure & protected transaction",
      "footer-info-title": "Information",
      "footer-email-text": "admin@liradirect.com",
    },
    html: {
      "feature-heading":
        'Why Choose <span class="text-primary">LiraDirect</span>?',
      "steps-heading":
        'Lira Transfer & <span class="text-primary">Hotel Payment Flow</span>',

      "faq-heading": 'Frequently <span class="text-primary">Asked</span>',
      "cta-heading": "Ready to Help Your Transaction",
      "cash-heading":
        'Cash Lira <span class="text-primary">in Turki</span>',
    },
  },
  ar: {
    text: {
      "nav-contact-text":
        "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627",
      "brand-tagline":
        "\u062a\u062d\u0648\u064a\u0644 \u0631\u064a\u0627\u0644 \u0645\u0648\u062b\u0648\u0642",
      "nav-link-home": "\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",
      "nav-link-features": "\u0627\u0644\u062e\u062f\u0645\u0627\u062a",
      "nav-link-steps": "\u0627\u0644\u062e\u0637\u0648\u0627\u062a",
      "nav-link-testimonials":
        "\u0622\u0631\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u0627\u0621",
      "nav-link-faq": "\u0627\u0644\u0623\u0633\u0626\u0644\u0629",
      "hero-badge-text":
        "\u0623\u0648\u0644 \u0627\u0628\u062a\u0643\u0627\u0631 \u0641\u064a \u0625\u0646\u062f\u0648\u0646\u064a\u0633\u064a\u0627",
      "hero-title-line-1":
        "\u0627\u062f\u0641\u0639 \u0631\u0633\u0648\u0645 \u0627\u0644\u0645\u0624\u0633\u0633\u0629 \u0648\u0627\u0644\u0641\u0646\u062f\u0642 \u0641\u064a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629\u060c",
      "hero-title-line-2":
        "\u0628\u0623\u0645\u0627\u0646 \u0648\u0633\u0631\u0639\u0629 \u0648\u0633\u0647\u0648\u0644\u0629",
      "hero-subtitle":
        "\u062d\u0644 \u062d\u062f\u064a\u062b \u0644\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0631\u064a\u0627\u0644 \u062f\u0648\u0646 \u0645\u062e\u0627\u0637\u0631 \u062d\u0645\u0644 \u0627\u0644\u0646\u0642\u062f. \u0645\u0648\u062b\u0648\u0642 \u0645\u0646 500+ \u0634\u0631\u064a\u0643.",
      "hero-trust-safe":
        "\u0645\u0639\u0627\u0645\u0644\u0627\u062a \u0622\u0645\u0646\u0629",
      "hero-trust-open":
        "\u0645\u062a\u0627\u062d \u064a\u0648\u0645\u064a\u0627\u064b",
      "hero-cta-text":
        "\u0627\u0628\u062f\u0623 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629",
      "hero-security-badge": "\u0623\u0645\u0627\u0646 100%",
      "calc-desktop-title":
        "\u0645\u062d\u0627\u0643\u0627\u0629 \u0627\u0644\u0633\u0639\u0631",
      "calc-desktop-live": "\u0645\u0628\u0627\u0634\u0631",
      "calc-label-sar":
        "\u0645\u0628\u0644\u063a \u0627\u0644\u0631\u064a\u0627\u0644 (TRY)",
      "calc-label-idr":
        "\u062a\u0642\u062f\u064a\u0631 \u0627\u0644\u0631\u0648\u0628\u064a\u0629 (IDR)",
      "calc-rate-note":
        "\u0633\u0639\u0631 \u0625\u0631\u0634\u0627\u062f\u064a. \u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u062e\u062f\u0645\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0644\u0644\u0633\u0639\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064a.",
      "calc-live-data": "\u0633\u0639\u0631 Google +10",
      "trust-exp-label":
        "\u0633\u0646\u0648\u0627\u062a \u0627\u0644\u062e\u0628\u0631\u0629",
      "trust-partner-label":
        "\u0634\u0631\u0643\u0627\u0621 \u0631\u0627\u0636\u0648\u0646",
      "trust-disbursed-label":
        "\u062a\u0645 \u062a\u062d\u0648\u064a\u0644\u0647",
      "trust-disbursed-unit": "\u0645\u0644\u064a\u0648\u0646",
      "feature-badge-label": "\u0642\u064a\u0645\u062a\u0646\u0627",
      "feature-subtitle":
        "\u0646\u0642\u062f\u0645 \u0645\u0639\u0627\u064a\u064a\u0631 \u062e\u062f\u0645\u0629 \u0645\u062a\u0645\u064a\u0632\u0629 \u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062a \u0633\u0644\u0633\u0629 \u0641\u064a \u0627\u0644\u0623\u0631\u0636 \u0627\u0644\u0645\u0642\u062f\u0633\u0629.",
      "feature-title-1": "\u0628\u062f\u0648\u0646 \u0646\u0642\u062f",
      "feature-title-2":
        "\u0643\u0641\u0627\u0621\u0629 \u0627\u0644\u0648\u0642\u062a",
      "feature-title-3":
        "\u0623\u0645\u0627\u0646\u0629 \u0648\u0636\u0645\u0627\u0646",
      "feature-desc-1":
        "\u062a\u0642\u0644\u064a\u0644 \u0645\u062e\u0627\u0637\u0631 \u0641\u0642\u062f\u0627\u0646 \u0627\u0644\u0646\u0642\u062f \u0628\u0627\u0644\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0645\u0628\u0627\u0634\u0631 \u0625\u0644\u0649 \u062d\u0633\u0627\u0628 \u0627\u0644\u0645\u0624\u0633\u0633\u0629 \u0623\u0648 \u0627\u0644\u0641\u0646\u062f\u0642.",
      "feature-desc-2":
        "\u0631\u0643\u0632 \u0639\u0644\u0649 \u0639\u0628\u0627\u062f\u062a\u0643 \u0648\u0639\u0645\u0644\u0643. \u0628\u062f\u0648\u0646 \u0637\u0648\u0627\u0628\u064a\u0631 \u0648\u0628\u062f\u0648\u0646 \u0628\u064a\u0631\u0648\u0642\u0631\u0627\u0637\u064a\u0629.",
      "feature-desc-3":
        "\u0633\u0645\u0639\u0629 3+ \u0633\u0646\u0648\u0627\u062a \u0645\u0646 \u0627\u0644\u0623\u0645\u0627\u0646\u0629. \u0625\u064a\u0635\u0627\u0644\u0627\u062a \u0631\u0633\u0645\u064a\u0629 \u0641\u0648\u0631\u064a\u0629 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628.",
      "feature-tag-1":
        "\u0623\u0643\u062b\u0631 \u0623\u0645\u0627\u0646\u0627\u064b",
      "feature-tag-2": "\u0623\u0633\u0631\u0639",
      "feature-tag-3": "\u0645\u0648\u062b\u0648\u0642",
      "steps-badge":
        "\u062e\u0637\u0648\u0627\u062a \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629",
      "step-title-1": "\u0627\u0633\u062a\u0634\u0627\u0631\u0629",
      "step-title-2": "\u0627\u0644\u062f\u0641\u0639",
      "step-title-3": "\u0645\u0643\u062a\u0645\u0644",
      "step-desc-1":
        "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u0641\u0631\u064a\u0642\u0646\u0627 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628. \u0623\u062e\u0628\u0631\u0646\u0627 \u0628\u0627\u0644\u0645\u0628\u0644\u063a \u0648\u0648\u062c\u0647\u0629 \u0627\u0644\u062a\u062d\u0648\u064a\u0644.",
      "step-desc-2":
        "\u062d\u0648\u0651\u0644 \u0627\u0644\u0631\u0648\u0628\u064a\u0629 \u0625\u0644\u0649 \u062d\u0633\u0627\u0628\u0646\u0627 \u0627\u0644\u0631\u0633\u0645\u064a \u0628\u0623\u0633\u0639\u0627\u0631 \u0645\u0646\u0627\u0641\u0633\u0629 \u0648\u0634\u0641\u0627\u0641\u0629.",
      "step-desc-3":
        "\u064a\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u064a\u0627\u0644 \u0644\u0644\u0645\u0633\u062a\u0641\u064a\u062f \u0645\u0639 \u0625\u062b\u0628\u0627\u062a \u062a\u062d\u0648\u064a\u0644 \u0631\u0633\u0645\u064a.",

      "faq-badge":
        "\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629",
      "faq-q-1":
        "\u0647\u0644 \u0647\u0630\u0647 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629 \u0622\u0645\u0646\u0629\u061f",
      "faq-a-1":
        "\u0646\u0639\u0645\u060c \u0647\u064a \u0622\u0645\u0646\u0629 \u062c\u062f\u0627\u064b. \u0646\u0639\u062a\u0645\u062f \u0639\u0644\u0649 \u0628\u0646\u064a\u0629 \u062a\u062d\u062a\u064a\u0629 \u0645\u0635\u0631\u0641\u064a\u0629 \u0631\u0633\u0645\u064a\u0629 \u0648\u0634\u0631\u0627\u0643\u0627\u062a \u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629 \u0645\u0639 \u0634\u0631\u0643\u0627\u0621 \u0645\u062d\u0644\u064a\u064a\u0646 \u0641\u064a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629\u060c \u0628\u0633\u0639\u0629 \u062a\u0635\u0644 \u0625\u0644\u0649 5 \u0645\u0644\u0627\u064a\u064a\u0646 \u0631\u064a\u0627\u0644 \u064a\u0648\u0645\u064a\u0627\u064b. \u0648\u0645\u0639 \u0633\u062c\u0644 \u062e\u0628\u0631\u0629 3+\u0020\u0633\u0646\u0648\u0627\u062a\u060c \u0646\u0636\u0645\u0646 \u0627\u0644\u0634\u0641\u0627\u0641\u064a\u0629 \u0645\u0646 \u062e\u0644\u0627\u0644 \u0625\u0631\u0633\u0627\u0644 \u0625\u064a\u0635\u0627\u0644\u0627\u062a \u0627\u0644\u0628\u0646\u0643 \u0627\u0644\u0631\u0633\u0645\u064a\u0629 \u0641\u0648\u0631\u064a\u0627\u064b \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628.",
      "faq-q-2":
        "\u0643\u0645 \u0645\u0646 \u0627\u0644\u0648\u0642\u062a \u062d\u062a\u0649 \u062a\u0635\u0644 \u0627\u0644\u0623\u0645\u0648\u0627\u0644 \u0625\u0644\u0649 \u0627\u0644\u062c\u0647\u0629 \u0627\u0644\u0645\u0642\u0635\u0648\u062f\u0629\u061f",
      "faq-a-2":
        "\u062a\u064f\u0639\u0627\u0644\u062c \u0643\u0644 \u0645\u0639\u0627\u0645\u0644\u0629 \u0628\u0634\u0643\u0644 \u0645\u0646\u0638\u0645 \u0648\u0641\u0642 \u062a\u0633\u0644\u0633\u0644 \u0627\u0644\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0648\u0627\u0631\u062f\u0629. \u064a\u062a\u0645 \u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0623\u0645\u0648\u0627\u0644 \u0625\u0644\u0649 \u062d\u0633\u0627\u0628 \u0627\u0644\u0645\u0624\u0633\u0633\u0629 \u0623\u0648 \u0627\u0644\u0641\u0646\u062f\u0642 \u0628\u0639\u062f \u0627\u0643\u062a\u0645\u0627\u0644 \u0627\u0644\u062a\u062d\u0642\u0642\u060c \u0644\u0636\u0645\u0627\u0646 \u0627\u0644\u0623\u0645\u0627\u0646 \u0648\u062f\u0642\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0641\u064a \u0643\u0644 \u062d\u0648\u0627\u0644\u0629.",
      "faq-q-3":
        "\u0645\u0627 \u0647\u0648 \u0623\u0648\u0644 \u062e\u0637\u0648\u0629 \u0644\u0628\u062f\u0621 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629\u061f",
      "faq-a-3":
        '\u0645\u0627 \u0639\u0644\u064a\u0643 \u0625\u0644\u0627 \u0627\u0644\u0636\u063a\u0637 \u0639\u0644\u0649 \u0632\u0631 \u0648\u0627\u062a\u0633\u0627\u0628 \u0641\u064a \u0627\u0644\u0632\u0627\u0648\u064a\u0629 \u0627\u0644\u0633\u0641\u0644\u064a\u0629 \u0627\u0644\u064a\u0645\u0646\u0649 \u0623\u0648 \u0632\u0631 \"\u0627\u0628\u062f\u0623 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629\". \u0633\u064a\u0642\u0648\u0645 \u0641\u0631\u064a\u0642 \u0627\u0644\u062f\u0639\u0645 \u0628\u0625\u0631\u0634\u0627\u062f\u0643 \u0644\u0641\u062d\u0635 \u0627\u0644\u0633\u0639\u0631 \u0648\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062d\u0633\u0627\u0628 \u0627\u0644\u0645\u0633\u062a\u0647\u062f\u0641.',
      "faq-q-4":
        "\u0645\u0627 \u0641\u0626\u0627\u062a \u0627\u0644\u0631\u064a\u0627\u0644 \u0627\u0644\u0646\u0642\u062f\u064a \u0627\u0644\u0645\u062a\u0627\u062d\u0629\u061f",
      "faq-a-4":
        "\u0646\u0648\u0641\u0631 \u0641\u0626\u0627\u062a 1\u060c 5\u060c 10\u060c 50\u060c 100\u060c \u0648500 \u0631\u064a\u0627\u0644 \u0644\u0644\u0627\u0633\u062a\u0644\u0627\u0645 \u0641\u064a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629.",
      "faq-q-5":
        "\u0643\u064a\u0641 \u0623\u0628\u062f\u0623 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629\u061f",
      "faq-a-5":
        "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u0623\u062d\u062f \u0645\u0634\u0631\u0641\u064a\u0646\u0627 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628. \u0623\u062e\u0628\u0631\u0646\u0627 \u0628\u0627\u062d\u062a\u064a\u0627\u062c\u0627\u062a\u0643.",
      "cash-desc-a":
        "\u0641\u0626\u0627\u062a \u0645\u062a\u0646\u0648\u0639\u0629 \u0645\u062a\u0627\u062d\u0629 \u0644\u0645\u0635\u0631\u0648\u0641 \u0627\u0644\u062d\u062c\u0627\u062c \u0641\u064a \u0627\u0644\u0623\u0631\u0636 \u0627\u0644\u0645\u0642\u062f\u0633\u0629.",
      "cash-desc-b":
        "\u064a\u0645\u0643\u0646 \u0627\u0633\u062a\u0644\u0627\u0645 \u0627\u0644\u0631\u064a\u0627\u0644 \u0627\u0644\u0646\u0642\u062f\u064a \u0645\u0628\u0627\u0634\u0631\u0629 \u0645\u0646 \u0641\u0631\u064a\u0642\u0646\u0627 \u0641\u064a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629.",
      "cash-button-text":
        "\u0627\u0637\u0644\u0628 \u0631\u064a\u0627\u0644 \u0646\u0642\u062f\u064a",
      "cta-subtitle":
        "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0644\u0627\u0633\u062a\u0634\u0627\u0631\u0629 \u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0648\u0627\u062d\u062a\u064a\u0627\u062c\u0627\u062a \u0627\u0644\u062f\u0641\u0639. \u0645\u062c\u0627\u0646\u0627\u064b \u0648\u0628\u062f\u0648\u0646 \u0627\u0644\u062a\u0632\u0627\u0645.",
      "cta-button-text":
        "\u0627\u0633\u062a\u0634\u0627\u0631\u0629 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628",
      "footer-description":
        "\u0634\u0631\u064a\u0643 \u0645\u0648\u062b\u0648\u0642 \u0644\u0645\u062f\u0641\u0648\u0639\u0627\u062a \u0627\u0644\u0645\u0624\u0633\u0633\u0629 \u0648\u0627\u0644\u0641\u0646\u062f\u0642 \u0648\u0639\u0645\u0644\u064a\u0627\u062a \u0627\u0644\u062d\u062c \u0648\u0627\u0644\u0639\u0645\u0631\u0629.",
      "footer-service-title":
        "\u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",
      "footer-service-1":
        "\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0645\u0624\u0633\u0633\u0629",
      "footer-service-2":
        "\u062f\u0641\u0639 \u0627\u0644\u0641\u0646\u062f\u0642",
      "footer-service-3":
        "\u062e\u062f\u0645\u0629 \u0627\u0644\u0634\u062d\u0646",
      "footer-service-4":
        "\u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u0631\u064a\u0627\u0644",
      "footer-contact-title": "\u0627\u062a\u0635\u0644 \u0628\u0646\u0627",
      "footer-location-text":
        "\u062c\u0627\u0643\u0631\u062a\u0627\u060c \u0625\u0646\u062f\u0648\u0646\u064a\u0633\u064a\u0627",
      "footer-copyright":
        "\u00a9 2026 LiraDirect. \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629.",
      "footer-terms":
        "\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062d\u0643\u0627\u0645",
      "footer-privacy":
        "\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629",
      "wa-modal-badge":
        "\u062f\u0639\u0645 \u0648\u0627\u062a\u0633\u0627\u0628",
      "wa-modal-title":
        "\u0627\u062e\u062a\u0631 \u0645\u0634\u0631\u0641 \u0627\u0644\u062e\u062f\u0645\u0629",
      "wa-modal-subtitle-1":
        "\u0627\u062e\u062a\u0631 \u0623\u062d\u062f \u0645\u0634\u0631\u0641\u064a\u0646\u0627 \u0623\u062f\u0646\u0627\u0647.",
      "wa-modal-subtitle-2":
        "\u0627\u0633\u062a\u062c\u0627\u0628\u0629 \u0633\u0631\u064a\u0639\u0629.",
      "mobile-link-features": "\u0627\u0644\u062e\u062f\u0645\u0627\u062a",
      "mobile-link-steps":
        "\u062e\u0637\u0648\u0627\u062a \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629",

      "mobile-link-cash": "\u0631\u064a\u0627\u0644 \u0646\u0642\u062f\u064a",
      "mobile-link-faq": "\u0627\u0644\u0623\u0633\u0626\u0644\u0629",
      "mobile-contact-btn":
        "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627",

      "faq-subtitle":
        "\u0627\u0636\u063a\u0637 \u0639\u0644\u0649 \u0627\u0644\u0633\u0624\u0627\u0644 \u0644\u0639\u0631\u0636 \u0627\u0644\u0625\u062c\u0627\u0628\u0629.",
      "cash-subtitle":
        "\u0646\u0648\u0641\u0631 \u0631\u064a\u0627\u0644 \u0646\u0642\u062f\u064a (TRY) \u064a\u0645\u0643\u0646 \u0627\u0633\u062a\u0644\u0627\u0645\u0647 \u0645\u0628\u0627\u0634\u0631\u0629 \u0641\u064a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629.",
      "cash-denom-title":
        "\u0627\u0644\u0641\u0626\u0627\u062a \u0627\u0644\u0645\u062a\u0627\u062d\u0629",
      "cash-pickup-title":
        "\u0627\u0644\u0627\u0633\u062a\u0644\u0627\u0645 \u0641\u064a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629",
      "cash-denom-note":
        "\u0627\u0644\u0641\u0626\u0627\u062a \u0627\u0644\u0635\u063a\u064a\u0631\u0629 \u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0644\u062a\u0633\u0648\u0642 \u062d\u0648\u0644 \u0627\u0644\u0645\u0633\u062c\u062f \u0627\u0644\u062d\u0631\u0627\u0645 \u0648\u0627\u0644\u0645\u0633\u062c\u062f \u0627\u0644\u0646\u0628\u0648\u064a.",
      "cash-footnote":
        "* \u062e\u062f\u0645\u0629 \u0627\u0644\u0631\u064a\u0627\u0644 \u0627\u0644\u0646\u0642\u062f\u064a \u0645\u062a\u0627\u062d\u0629 \u0641\u0642\u0637 \u0641\u064a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629. \u0644\u0644\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0628\u0646\u0643\u064a\u060c \u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u062e\u062f\u0645\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621.",
      "cash-badge": "\u0631\u064a\u0627\u0644 \u0646\u0642\u062f\u064a",
      "cash-city-1":
        "\u0645\u0643\u0629 \u0627\u0644\u0645\u0643\u0631\u0645\u0629",
      "cash-city-2":
        "\u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629",
      "cash-city-3":
        "\u062c\u062f\u0629 (\u0627\u0644\u0645\u0637\u0627\u0631 \u0648\u0627\u0644\u0645\u062f\u064a\u0646\u0629)",
      "cta-response-text":
        "\u0627\u0633\u062a\u062c\u0627\u0628\u0629 \u0633\u0631\u064a\u0639\u0629 \u2022 \u062f\u0639\u0645 24/7",
      "cta-security-note":
        "\u0645\u0639\u0627\u0645\u0644\u0629 \u0622\u0645\u0646\u0629 \u0648\u0645\u062d\u0645\u064a\u0629",
      "footer-info-title": "\u0645\u0639\u0644\u0648\u0645\u0627\u062a",
      "footer-email-text": "admin@liradirect.com",
    },
    html: {
      "feature-heading":
        '\u0644\u0645\u0627\u0630\u0627 \u062a\u062e\u062a\u0627\u0631 <span class="text-primary">LiraDirect</span>\u061f',
      "steps-heading":
        '\u062e\u0637\u0648\u0627\u062a \u0627\u0644\u062a\u062d\u0648\u064a\u0644 \u0648 <span class="text-primary">\u062f\u0641\u0639 \u0627\u0644\u0641\u0646\u062f\u0642</span>',

      "faq-heading":
        '\u0627\u0644\u0623\u0633\u0626\u0644\u0629 <span class="text-primary">\u0627\u0644\u0634\u0627\u0626\u0639\u0629</span>',
      "cta-heading":
        "\u062c\u0627\u0647\u0632\u0648\u0646 \u0644\u0645\u0633\u0627\u0639\u062f\u0629 \u0645\u0639\u0627\u0645\u0644\u062a\u0643",
      "cash-heading":
        '\u0631\u064a\u0627\u0644 \u0646\u0642\u062f\u064a <span class="text-primary">\u0641\u064a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629</span>',
    },
  },
  ms: {
    text: {
      "nav-contact-text": "Hubungi Kami",
      "brand-tagline": "Pemindahan Lira Dipercayai",
      "nav-link-home": "Utama",
      "nav-link-features": "Perkhidmatan",
      "nav-link-steps": "Aliran",

      "nav-link-faq": "FAQ",
      "hero-badge-text": "PERKHIDMATAN PEMINDAHAN LIRA DISAHKAN",
      "hero-title-line-1": "Transfer Lira untuk",
      "hero-title-line-2": "Agen Tour & Hotel di Turki",
      "hero-subtitle":
        "Perkhidmatan pemindahan Lira untuk keperluan Agen Tour (LA) dan hotel di Turki dengan proses pantas, telus, dan selamat.",
      "hero-trust-safe": "Transaksi Selamat",
      "hero-trust-open": "Buka Setiap Hari",
      "hero-cta-text": "Mula Transaksi",
      "hero-security-badge": "100% Amanah",
      "calc-desktop-title": "Simulasi Kadar",
      "calc-desktop-live": "LIVE",
      "calc-label-sar": "Jumlah Lira (TRY)",
      "calc-label-idr": "Anggaran Rupiah (IDR)",
      "calc-rate-note": "Kadar indikatif. Hubungi CS untuk kadar akhir.",
      "calc-live-data": "Kadar Google +10",
      "trust-exp-label": "Tahun Pengalaman",
      "trust-partner-label": "Rakan Puas",
      "trust-disbursed-label": "Disalurkan",
      "trust-disbursed-unit": "Juta",
      "feature-badge-label": "Nilai Kami",
      "feature-subtitle":
        "Kami menyediakan standard perkhidmatan premium untuk transaksi lancar di Turki.",
      "feature-title-1": "Tanpa Tunai",
      "feature-title-2": "Kecekapan Masa",
      "feature-title-3": "Amanah & Terjamin",
      "feature-desc-1":
        "Kurangkan risiko kehilangan wang tunai dengan pemindahan terus ke akaun Agen Tour (LA) atau hotel.",
      "feature-desc-2":
        "Fokus pada pelancongan dan perniagaan anda. Tanpa beratur, tanpa birokrasi rumit.",
      "feature-desc-3":
        "Reputasi 3+ tahun menjaga amanah. Resit pemindahan rasmi dihantar secara langsung ke WhatsApp.",
      "feature-tag-1": "Lebih Selamat",
      "feature-tag-2": "Lebih Pantas",
      "feature-tag-3": "Dipercayai",
      "steps-badge": "Aliran Transaksi",
      "step-title-1": "Konsultasi",
      "step-title-2": "Pembayaran",
      "step-title-3": "Selesai",
      "step-desc-1":
        "Hubungi pasukan kami melalui WhatsApp. Maklumkan jumlah lira dan destinasi pemindahan.",
      "step-desc-2":
        "Pindahkan Rupiah ke akaun rasmi kami dengan kadar yang kompetitif dan telus.",
      "step-desc-3":
        "Lira dihantar kepada penerima. Bukti pemindahan sah dihantar sebagai pengesahan.",

      "faq-badge": "Pusat Bantuan",
      "faq-q-1": "Adakah transaksi ini selamat?",
      "faq-a-1":
        "Sangat selamat. Kami disokong oleh infrastruktur perbankan rasmi dan kerjasama strategik dengan warga tempatan Turki dengan kapasiti had sehingga 5 Juta TRY sehari. Dengan rekod 3+ tahun, setiap transaksi dijamin telus melalui penghantaran resit bank rasmi secara masa nyata ke WhatsApp anda.",
      "faq-q-2": "Berapa lama wang sampai ke destinasi?",
      "faq-a-2":
        "Setiap transaksi diproses secara sistematik mengikut giliran antrean yang masuk. Dana anda akan segera diteruskan ke akaun Agen Tour (LA) atau Hotel selepas proses pengesahan selesai untuk memastikan keselamatan dan ketepatan data bagi setiap penghantaran.",
      "faq-q-3": "Apakah langkah awal untuk transaksi?",
      "faq-a-3":
        'Cukup klik butang WhatsApp di penjuru kanan bawah atau butang "Mulai Transaksi". Pasukan sokongan kami akan terus membimbing anda untuk semakan kadar dan nombor akaun tujuan.',
      "faq-q-4": "Apakah denominasi lira tunai yang tersedia?",
      "faq-a-4":
        "Kami sediakan denominasi 1, 5, 10, 50, 100, dan 500 TRY untuk diambil di Turki.",
      "faq-q-5": "Bagaimana cara memulakan transaksi?",
      "faq-a-5":
        "Hubungi mana-mana admin kami melalui WhatsApp. Maklumkan keperluan anda.",
      "cash-desc-a":
        "Pelbagai denominasi tersedia untuk wang saku pelancong di Turki.",
      "cash-desc-b":
        "Lira tunai boleh diambil terus dari pasukan kami di Turki. Tersedia di bandar utama.",
      "cash-button-text": "Pesan Lira Tunai",
      "cta-subtitle":
        "Hubungi pasukan kami untuk konsultasi kadar dan keperluan pembayaran di Tanah Suci.",
      "cta-button-text": "Konsultasi via WhatsApp",
      "footer-description":
        "Rakan dipercayai untuk pembayaran Agen Tour (LA), Hotel, dan operasi Haji & Umrah.",
      "footer-service-title": "Perkhidmatan Utama",
      "footer-service-1": "Pemindahan Agen Tour (LA)",
      "footer-service-2": "Pembayaran Hotel",
      "footer-service-3": "Pengendalian Kargo",
      "footer-service-4": "Kadar Lira Terkini",
      "footer-contact-title": "Hubungi Kami",
      "footer-location-text": "Jakarta, Indonesia",
      "footer-copyright": "\u00a9 2026 LiraDirect. Hak cipta terpelihara.",
      "footer-terms": "Terma & Syarat",
      "footer-privacy": "Dasar Privasi",
      "wa-modal-badge": "Sokongan WhatsApp",
      "wa-modal-title": "Pilih Admin Perkhidmatan",
      "wa-modal-subtitle-1": "Pilih salah satu admin kami di bawah.",
      "wa-modal-subtitle-2": "Respons pantas, pilih admin yang tersedia.",
      "mobile-link-features": "Perkhidmatan",
      "mobile-link-steps": "Aliran Transaksi",

      "mobile-link-cash": "Lira Tunai",
      "mobile-link-faq": "FAQ",
      "mobile-contact-btn": "Hubungi Kami",

      "faq-subtitle": "Klik soalan untuk melihat jawapan.",
      "cash-subtitle":
        "Kami menyediakan wang tunai Lira (TRY) fizikal yang boleh diambil terus di Turki.",
      "cash-denom-title": "Denominasi Tersedia",
      "cash-pickup-title": "Pengambilan di Turki",
      "cash-denom-note":
        "Denominasi kecil sesuai untuk membeli-belah di sekitar Masjidil Haram & Masjid Nabawi.",
      "cash-footnote":
        "* Perkhidmatan lira tunai hanya tersedia di Turki. Untuk pemindahan bank ke Agen Tour (LA)/Hotel, sila hubungi CS.",
      "cash-badge": "Lira Tunai",
      "cash-city-1": "Istanbul",
      "cash-city-2": "Cappadocia",
      "cash-city-3": "Jeddah (Lapangan Terbang & Bandar)",
      "cta-response-text": "Respons pantas \u2022 24/7 Support",
      "cta-security-note": "Transaksi selamat & dilindungi",
      "footer-info-title": "Maklumat",
      "footer-email-text": "admin@liradirect.com",
    },
    html: {
      "feature-heading":
        'Mengapa Pilih <span class="text-primary">LiraDirect</span>?',
      "steps-heading":
        'Aliran Pemindahan Lira & <span class="text-primary">Pembayaran Hotel</span>',

      "faq-heading": 'Soalan <span class="text-primary">Lazim</span>',
      "cta-heading": "Sedia Membantu Transaksi Anda",
      "cash-heading":
        'Lira Tunai <span class="text-primary">di Turki</span>',
    },
  },
};

translations.tr = {
  text: {
    ...translations.en.text,
    "nav-contact-text": "Bize Ulasin",
    "brand-tagline": "Guvenilir Lira Transferi",
    "nav-link-features": "Hizmetler",
    "nav-link-steps": "Surec",

    "hero-title-line-1": "Lira Transfer:",
    "hero-title-line-2": "Tur Acentasi & Otel Ödemeleri",
    "hero-subtitle":
      "Turkiye'de Acenta Turu (LA) ve otel odemeleri icin hizli, seffaf ve guvenli Lira transfer hizmeti.",
    "hero-trust-safe": "Guvenli Islemler",
    "hero-trust-open": "Her Gun Acik",
    "hero-cta-text": "Isleme Basla",
    "calc-desktop-title": "Kur Simulasyonu",
    "calc-label-sar": "Lira Tutari (TRY)",
    "calc-label-idr": "Tahmini Rupiah (IDR)",
    "calc-rate-note": "Gosterge kurdur. Nihai kur icin destek iletisime gecin.",
    "feature-title-1": "Nakit Tasimadan Transfer",
    "feature-title-2": "Zaman Verimliligi",
    "feature-title-3": "Guvenilir ve Garantili",
    "steps-badge": "Islem Akisi",
    "step-title-1": "Danismanlik",
    "step-title-2": "Odeme",
    "step-title-3": "Tamamlandi",

    "faq-badge": "Yardim Merkezi",
    "faq-q-1": "Bu islem guvenli mi?",
    "faq-q-2": "Para hedefe ne kadar surede ulasir?",
    "faq-q-3": "Isleme baslamak icin ilk adim nedir?",
    "faq-q-4": "Hangi Lira nakit kupurleri mevcut?",
    "faq-q-5": "Isleme nasil baslarim?",
    "cash-desc-a":
      "Turkiye'deki seyahat harcamalari icin farkli kupur secenekleri mevcuttur.",
    "cash-desc-b":
      "Lira nakit Turkiye'de ekibimizden dogrudan teslim alinabilir.",
    "cash-button-text": "Lira Nakit Siparisi Ver",
    "cta-subtitle":
      "Kur danismanligi ve odeme ihtiyaciniz icin ekibimizle iletisime gecin.",
    "cta-button-text": "WhatsApp ile Danis",
    "footer-description":
      "Acenta Turu (LA), otel ve operasyonel odemelerde guvenilir is ortaginiz.",
    "footer-service-title": "Ana Hizmetler",
    "footer-service-1": "Acenta Turu (LA) Transferi",
    "footer-service-2": "Otel Odemesi",
    "footer-service-3": "Kargo Operasyonu",
    "footer-service-4": "Guncel Lira Kuru",
    "footer-contact-title": "Iletisim",
    "footer-terms": "Kullanim Sartlari",
    "footer-privacy": "Gizlilik Politikasi",
    "wa-modal-title": "Destek Yonetici Secimi",
    "wa-modal-subtitle-1": "Asagidan yoneticilerimizden birini secin.",
    "wa-modal-subtitle-2": "Hizli yanit, musait yoneticiyi secin.",
    "mobile-link-features": "Hizmetler",
    "mobile-link-steps": "Islem Akisi",

    "mobile-link-cash": "Lira Nakit",
    "mobile-contact-btn": "Bize Ulasin",

    "faq-subtitle": "Cevabi gormek icin soruya tiklayin.",
    "cash-subtitle":
      "Turkiye'de dogrudan teslim alinabilen fiziki Lira (TRY) nakit sagliyoruz.",
    "cash-denom-title": "Mevcut Kupurler",
    "cash-pickup-title": "Turkiye'de Teslimat",
    "cash-denom-note":
      "Kucuk kupurler gunluk harcamalar icin daha uygundur.",
    "cash-footnote":
      "* Lira nakit hizmeti sadece Turkiye'de sunulur. Acenta Turu (LA)/Otel banka transferleri icin lutfen destek ile iletisime gecin.",
    "cash-badge": "Lira Nakit",
    "cta-response-text": "Hizli yanit • 7/24 Destek",
    "cta-security-note": "Guvenli ve korumali islem",
    "footer-info-title": "Bilgi",
  },
  html: {
    ...translations.en.html,
    "feature-heading":
      'Neden <span class="text-primary">LiraDirect</span>?',
    "steps-heading":
      'Lira Transferi ve <span class="text-primary">Turkiye Otel Odeme Akisi</span>',

    "faq-heading": 'Sikca Sorulan <span class="text-primary">Sorular</span>',
    "cta-heading": "Isleminizde Size Yardim Etmeye Haziriz",
    "cash-heading":
      'Turkiye\'de <span class="text-primary">Lira Nakit</span>',
  },
};

const waAutoMessages = {
  general: {
    id: "Assalamualaikum Admin, saya ingin bertanya tentang transfer lira.",
    en: "Hello Admin, I want to ask about lira transfer.",
    tr: "Merhaba, Lira transferi hakkinda bilgi almak istiyorum.",
    ar: "\u0627\u0644\u0633\u0644\u0627\u0645 \u0639\u0644\u064a\u0643\u0645\u060c \u0623\u0631\u064a\u062f \u0627\u0644\u0627\u0633\u062a\u0641\u0633\u0627\u0631 \u0639\u0646 \u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0631\u064a\u0627\u0644",
    ms: "Assalamualaikum Admin, saya ingin bertanya tentang transfer lira.",
  },
  cash: {
    id: "Assalamualaikum Admin, saya ingin beli Lira Cash dan tanya info pembayaran Hotel/Visa secara Tunai.",
    en: "Hello Admin, I need Lira cash and information about cash payment for Hotel/Visa.",
    tr: "Merhaba, Lira nakit almak ve otel/vize odemesi icin bilgi almak istiyorum.",
    ar: "\u0627\u0644\u0633\u0644\u0627\u0645 \u0639\u0644\u064a\u0643\u0645\u060c \u0623\u0631\u064a\u062f \u0634\u0631\u0627\u0621 \u0627\u0644\u0631\u064a\u0627\u0644 \u0646\u0642\u062f\u0627\u064b",
    ms: "Assalamualaikum Admin, saya ingin beli Lira Cash.",
  },
};

function updateWALinks(lang) {
  const ctx = waAutoMessages[currentWAMessageContext] || waAutoMessages.general;
  const msg = ctx[lang] || ctx.id;
  document.querySelectorAll("a[data-wa-number]").forEach((link) => {
    const num = link.getAttribute("data-wa-number");
    if (num) link.href = `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
  });
}

function applyLanguage(lang) {
  const sel = translations[lang] ? lang : "id";
  const dict = translations[sel];
  const isAr = sel === "ar";
  document.documentElement.lang = sel;
  document.documentElement.setAttribute("dir", isAr ? "rtl" : "ltr");
  document.body.setAttribute("dir", isAr ? "rtl" : "ltr");
  document.body.classList.toggle("lang-ar", isAr);
  Object.entries(dict.text || {}).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  });
  Object.entries(dict.html || {}).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = val;
  });

  updateWALinks(sel);
  localStorage.setItem("site_lang", sel);
}

function initLanguageSwitcher() {
  const select = document.getElementById("language-switcher");
  if (!select) return;
  const urlLang = new URLSearchParams(window.location.search).get("lang");
  const savedLang = localStorage.getItem("site_lang");
  const initial = translations[urlLang]
    ? urlLang
    : translations[savedLang]
      ? savedLang
      : "id";
  select.value = initial;
  applyLanguage(initial);
  select.addEventListener("change", (e) => {
    const newLang = e.target.value;
    applyLanguage(newLang);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", newLang);
    window.history.replaceState({}, "", url);
  });
}

// ===== CALCULATOR =====
document.addEventListener("DOMContentLoaded", () => {
  initLanguageSwitcher();

  // Hamburger menu
  const hamburger = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileClose = document.getElementById("mobile-menu-close");
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () =>
      mobileMenu.classList.add("active"),
    );
  }
  if (mobileClose && mobileMenu) {
    mobileClose.addEventListener("click", () =>
      mobileMenu.classList.remove("active"),
    );
  }

  const inputSar =
    document.getElementById("input-sar") ||
    document.getElementById("input-idr");
  const outputIdr =
    document.getElementById("output-idr") ||
    document.getElementById("output-sar");
  const RATE_ADJUSTMENT = 10;
  let currentRate = 4250 + RATE_ADJUSTMENT; // IDR per 1 TRY

  const formatIDR = (num) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(num);

  const calculate = () => {
    const amount = parseFloat(inputSar?.value);
    if (outputIdr)
      outputIdr.value =
        !isNaN(amount) && amount > 0
          ? formatIDR(amount * currentRate)
          : formatIDR(0);
    const outputMobile =
      document.getElementById("output-idr-mobile") ||
      document.getElementById("output-sar-mobile");
    if (outputMobile && outputIdr) outputMobile.value = outputIdr.value;
  };

  const googleRateUrl =
    "https://api.codetabs.com/v1/proxy?quest=https://www.google.com/finance/quote/TRY-IDR";
  const fallbackRateUrl = "https://api.exchangerate-api.com/v4/latest/TRY";
  const parseGoogleRate = (html) => {
    const match = html?.match(/data-last-price="([0-9.]+)"/i);
    return match ? parseFloat(match[1]) : NaN;
  };

  fetch(googleRateUrl)
    .then((r) => r.text())
    .then((html) => {
      const googleRate = parseGoogleRate(html);
      if (!isNaN(googleRate) && googleRate > 0) {
        currentRate = googleRate + RATE_ADJUSTMENT;
        return;
      }
      throw new Error("Google rate parse failed");
    })
    .catch(() =>
      fetch(fallbackRateUrl)
        .then((r) => r.json())
        .then((data) => {
          if (data?.rates?.IDR) currentRate = data.rates.IDR + RATE_ADJUSTMENT;
        })
        .catch(() => { }),
    )
    .finally(() => calculate());

  if (inputSar) inputSar.addEventListener("input", calculate);

  const inputMobile =
    document.getElementById("input-sar-mobile") ||
    document.getElementById("input-idr-mobile");
  if (inputMobile) {
    inputMobile.addEventListener("input", function () {
      if (inputSar) inputSar.value = this.value;
      calculate();
    });
    if (inputSar)
      inputSar.addEventListener("input", function () {
        inputMobile.value = this.value;
      });
  }
  calculate();

  // Open first FAQ item by default for better discoverability
  const firstFaqBtn = document.querySelector("#faq .faq-item .faq-btn");
  if (firstFaqBtn) toggleFaq(firstFaqBtn);



  // ===== SCROLL ANIMATIONS =====
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  );

  document
    .querySelectorAll(".anim-fade-up")
    .forEach((el) => observer.observe(el));

  // ===== SCROLL REVEAL FOR SECTIONS =====
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -30px 0px" },
  );

  // Cards and items
  document
    .querySelectorAll(
      "#features .grid > div, #steps .grid > div, #testimonials .grid > div, #proof-testimonials .proof-card, .faq-item, #lira-cash .bg-background-card",
    )
    .forEach((el) => {
      el.classList.add("scroll-reveal");
      revealObserver.observe(el);
    });

  // Section headings
  document
    .querySelectorAll(
      "#features .text-center, #steps .text-center, #testimonials .text-center, #proof-testimonials .text-center, #faq .text-center, #lira-cash .text-center",
    )
    .forEach((el) => {
      el.classList.add("section-reveal");
      revealObserver.observe(el);
    });

  // Stats bar reveal
  document.querySelectorAll(".stats-bar .text-center").forEach((el) => {
    el.classList.add("scroll-reveal");
    revealObserver.observe(el);
  });

  // ===== COUNTER ANIMATION (easeOutExpo) =====
  let counterTriggered = false;
  const countUpElements = document.querySelectorAll(".count-up");
  if (countUpElements.length > 0) {
    const counterObs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !counterTriggered) {
        counterTriggered = true;
        countUpElements.forEach((counter) => {
          const target = +counter.getAttribute("data-target");
          const suffix = counter.getAttribute("data-suffix") || "";
          const duration = 1500;
          const startTime = performance.now();
          const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutExpo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const current = Math.ceil(eased * target);
            counter.textContent = current + suffix;
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        });
      }
    }, { threshold: 0.3 });
    counterObs.observe(countUpElements[0]);
  }
});

// ===== NAVBAR SCROLL EFFECT =====
const stickyCta = document.getElementById("sticky-cta");
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    if (window.scrollY > 80) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
  if (stickyCta) {
    if (window.scrollY > 500) stickyCta.classList.add("visible");
    else stickyCta.classList.remove("visible");
  }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});


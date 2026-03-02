/**
 * LiraDirect – Internationalization (i18n) System
 * Languages: id (Indonesia), en (English), tr (Türkçe), ar (العربية), ms (Melayu)
 */

const TRANSLATIONS = {
    // ──────────── NAVIGATION ────────────
    "nav.layanan": { id: "Layanan", en: "Services", tr: "Hizmetler", ar: "الخدمات", ms: "Perkhidmatan" },
    "nav.kurs": { id: "Kurs", en: "Rates", tr: "Kurlar", ar: "الأسعار", ms: "Kadar" },
    "nav.testimoni": { id: "Testimoni", en: "Testimonials", tr: "Referanslar", ar: "الشهادات", ms: "Testimoni" },
    "nav.faq": { id: "FAQ", en: "FAQ", tr: "SSS", ar: "الأسئلة", ms: "FAQ" },
    "nav.hubungi": { id: "Hubungi Kami", en: "Contact Us", tr: "Bize Ulaşın", ar: "اتصل بنا", ms: "Hubungi Kami" },

    // ──────────── HERO ────────────
    "hero.badge": { id: "TEROBOSAN PERTAMA DI INDONESIA", en: "FIRST BREAKTHROUGH IN INDONESIA", tr: "ENDONEZYA'DA İLK BÜYÜK ATILIM", ar: "أول اختراق في إندونيسيا", ms: "TEROBOSAN PERTAMA DI INDONESIA" },
    "hero.title": { id: 'Transfer Lira untuk Agen <span class="text-primary">Tour &amp; Hotel</span> di Turki', en: 'Lira Transfer for <span class="text-primary">Tour &amp; Hotel</span> Agents in Turkey', tr: 'Türkiye\'deki <span class="text-primary">Tur &amp; Otel</span> Acenteleri İçin Lira Transferi', ar: 'تحويل الليرة لوكلاء <span class="text-primary">السياحة والفنادق</span> في تركيا', ms: 'Pemindahan Lira untuk Ejen <span class="text-primary">Pelancongan &amp; Hotel</span> di Turki' },
    "hero.subtitle": { id: "Solusi pembayaran tercepat dan terpercaya untuk bisnis pariwisata Anda di Turki. Kurs kompetitif dengan biaya transparan tanpa biaya tersembunyi.", en: "The fastest and most trusted payment solution for your tourism business in Turkey. Competitive rates with transparent fees and no hidden costs.", tr: "Türkiye'deki turizm işletmeniz için en hızlı ve güvenilir ödeme çözümü. Gizli maliyet olmadan rekabetçi kurlar ve şeffaf ücretler.", ar: "أسرع وأوثق حل دفع لأعمالك السياحية في تركيا. أسعار تنافسية بدون رسوم خفية.", ms: "Penyelesaian pembayaran terpantas dan dipercayai untuk perniagaan pelancongan anda di Turki. Kadar kompetitif dengan yuran telus tanpa caj tersembunyi." },
    "hero.kurs": { id: "Kurs: 1 TRY = Rp 485", en: "Rate: 1 TRY = IDR 485", tr: "Kur: 1 TRY = 485 IDR", ar: "السعر: 1 ليرة = 485 روبية", ms: "Kadar: 1 TRY = Rp 485" },
    "hero.detail": { id: "Lihat Detail Biaya", en: "View Fee Details", tr: "Ücret Detayları", ar: "عرض تفاصيل الرسوم", ms: "Lihat Butiran Yuran" },

    // ──────────── STATS ────────────
    "stats.transaksi": { id: "Transaksi (IDR)", en: "Transactions (IDR)", tr: "İşlemler (IDR)", ar: "المعاملات (روبية)", ms: "Transaksi (IDR)" },
    "stats.partner": { id: "Partner Agen", en: "Agent Partners", tr: "Acente Ortakları", ar: "شركاء الوكالة", ms: "Rakan Ejen" },
    "stats.rating": { id: "Rating Layanan", en: "Service Rating", tr: "Hizmet Puanı", ar: "تقييم الخدمة", ms: "Penilaian Perkhidmatan" },
    "stats.support": { id: "Customer Support", en: "Customer Support", tr: "Müşteri Desteği", ar: "دعم العملاء", ms: "Sokongan Pelanggan" },

    // ──────────── WHY CHOOSE US ────────────
    "why.badge": { id: "Mengapa LiraDirect?", en: "Why LiraDirect?", tr: "Neden LiraDirect?", ar: "لماذا LiraDirect؟", ms: "Mengapa LiraDirect?" },
    "why.title": { id: "Standar Baru Pembayaran B2B Travel ke Turki", en: "New Standard for B2B Travel Payment to Turkey", tr: "Türkiye'ye B2B Seyahat Ödemesinde Yeni Standart", ar: "معيار جديد لمدفوعات السفر بين الشركات إلى تركيا", ms: "Standard Baharu Pembayaran B2B Pelancongan ke Turki" },
    "why.kurs.title": { id: "Kurs Kompetitif", en: "Competitive Rates", tr: "Rekabetçi Kurlar", ar: "أسعار تنافسية", ms: "Kadar Kompetitif" },
    "why.kurs.desc": { id: "Kami menawarkan kurs harian yang bersaing langsung dengan rate pasar untuk memastikan profitabilitas bisnis Anda tetap terjaga.", en: "We offer daily rates that directly compete with market rates to ensure your business profitability remains intact.", tr: "İşletmenizin kârlılığının korunmasını sağlamak için piyasa kurlarıyla doğrudan rekabet eden günlük kurlar sunuyoruz.", ar: "نقدم أسعاراً يومية تنافسية مع أسعار السوق لضمان الحفاظ على ربحية عملك.", ms: "Kami menawarkan kadar harian yang bersaing secara langsung dengan kadar pasaran untuk memastikan keuntungan perniagaan anda terjaga." },
    "why.aman.title": { id: "Keamanan Terjamin", en: "Guaranteed Security", tr: "Garantili Güvenlik", ar: "أمان مضمون", ms: "Keselamatan Terjamin" },
    "why.aman.desc": { id: "Setiap transaksi diproses melalui kanal perbankan resmi dengan enkripsi tingkat tinggi untuk keamanan data dan dana Anda.", en: "Every transaction is processed through official banking channels with high-level encryption for the security of your data and funds.", tr: "Her işlem, verilerinizin ve fonlarınızın güvenliği için yüksek düzeyde şifreleme ile resmi bankacılık kanalları aracılığıyla işlenir.", ar: "تتم معالجة كل معاملة عبر قنوات مصرفية رسمية مع تشفير عالي المستوى لأمان بياناتك وأموالك.", ms: "Setiap transaksi diproses melalui saluran perbankan rasmi dengan enkripsi tahap tinggi untuk keselamatan data dan dana anda." },
    "why.transparan.title": { id: "Biaya Transparan", en: "Transparent Fees", tr: "Şeffaf Ücretler", ar: "رسوم شفافة", ms: "Yuran Telus" },
    "why.transparan.desc": { id: "Tidak ada kejutan. Semua biaya administrasi dan kurs konversi ditampilkan secara jujur di depan sebelum Anda melakukan transfer.", en: "No surprises. All administrative fees and conversion rates are displayed honestly upfront before you make a transfer.", tr: "Sürpriz yok. Tüm yönetim ücretleri ve dönüşüm kurları, transfer yapmadan önce dürüstçe gösterilir.", ar: "لا مفاجآت. جميع الرسوم الإدارية وأسعار التحويل معروضة بشفافية قبل إجراء التحويل.", ms: "Tiada kejutan. Semua yuran pentadbiran dan kadar penukaran dipaparkan secara jujur sebelum anda membuat pemindahan." },

    // ──────────── FLOW / STEPS ────────────
    "flow.badge": { id: "Proses Mudah", en: "Easy Process", tr: "Kolay Süreç", ar: "عملية سهلة", ms: "Proses Mudah" },
    "flow.title": { id: "Cara Kerja Transfer Kami", en: "How Our Transfer Works", tr: "Transferimiz Nasıl Çalışır", ar: "كيف يعمل التحويل لدينا", ms: "Cara Pemindahan Kami Berfungsi" },
    "flow.step1.title": { id: "Konsultasi", en: "Consultation", tr: "Danışma", ar: "استشارة", ms: "Konsultasi" },
    "flow.step1.desc": { id: "Hubungi tim kami via WhatsApp. Sampaikan kebutuhan nominal lira dan tujuan transfer.", en: "Contact our team via WhatsApp. Tell us the lira amount and transfer destination.", tr: "WhatsApp üzerinden ekibimizle iletişime geçin. Lira tutarını ve transfer hedefini belirtin.", ar: "تواصل مع فريقنا عبر واتساب. أخبرنا بالمبلغ بالليرة ووجهة التحويل.", ms: "Hubungi pasukan kami melalui WhatsApp. Beritahu jumlah lira dan destinasi pemindahan." },
    "flow.step2.title": { id: "Pembayaran Agen Tour (LA)", en: "Tour Agent Payment (LA)", tr: "Tur Acentesi Ödemesi (LA)", ar: "دفع وكيل السياحة (LA)", ms: "Pembayaran Ejen Pelancongan (LA)" },
    "flow.step2.desc": { id: "Lakukan transfer Rupiah ke rekening resmi kami dengan kurs kompetitif dan transparan.", en: "Transfer Rupiah to our official account with competitive and transparent rates.", tr: "Rekabetçi ve şeffaf kurlarla resmi hesabımıza Rupi transferi yapın.", ar: "قم بتحويل الروبية إلى حسابنا الرسمي بأسعار تنافسية وشفافة.", ms: "Pindahkan Rupiah ke akaun rasmi kami dengan kadar kompetitif dan telus." },
    "flow.step3.title": { id: "Tuntas", en: "Completed", tr: "Tamamlandı", ar: "مكتمل", ms: "Selesai" },
    "flow.step3.desc": { id: "Lira dikirim ke penerima. Bukti transfer valid langsung kami kirimkan sebagai konfirmasi.", en: "Lira is sent to the recipient. Valid transfer proof is immediately sent as confirmation.", tr: "Lira alıcıya gönderilir. Geçerli transfer kanıtı onay olarak hemen gönderilir.", ar: "يتم إرسال الليرة إلى المستلم. يتم إرسال إثبات التحويل كتأكيد فوري.", ms: "Lira dihantar kepada penerima. Bukti pemindahan sah terus dihantar sebagai pengesahan." },

    // ──────────── LIRA CASH PROMO ────────────
    "cash.badge": { id: "Spesial Promo", en: "Special Promo", tr: "Özel Teklif", ar: "عرض خاص", ms: "Promosi Istimewa" },
    "cash.title": { id: "Butuh Lira Cash di Istanbul?", en: "Need Cash Lira in Istanbul?", tr: "İstanbul'da Nakit Lira mı Lazım?", ar: "هل تحتاج ليرة نقدية في إسطنبول؟", ms: "Perlukan Tunai Lira di Istanbul?" },
    "cash.desc": { id: "Selain transfer bank, kami menyediakan layanan pengiriman uang tunai langsung ke kantor agen atau hotel Anda di Turki.", en: "In addition to bank transfers, we provide cash delivery services directly to your agent office or hotel in Turkey.", tr: "Banka havalelerinin yanı sıra, Türkiye'deki acente ofisinize veya otelinize doğrudan nakit teslimat hizmeti sunuyoruz.", ar: "بالإضافة إلى التحويلات البنكية، نقدم خدمات توصيل النقد مباشرة إلى مكتب وكالتك أو فندقك في تركيا.", ms: "Selain pemindahan bank, kami menyediakan perkhidmatan penghantaran tunai terus ke pejabat ejen atau hotel anda di Turki." },
    "cash.btn": { id: "Hubungi WhatsApp", en: "Contact WhatsApp", tr: "WhatsApp ile İletişim", ar: "تواصل عبر واتساب", ms: "Hubungi WhatsApp" },

    // ──────────── FAQ ────────────
    "faq.title": { id: "Pertanyaan Sering Diajukan", en: "Frequently Asked Questions", tr: "Sıkça Sorulan Sorular", ar: "الأسئلة الشائعة", ms: "Soalan Lazim Ditanya" },
    "faq.subtitle": { id: "Pelajari lebih lanjut tentang bagaimana kami membantu operasional travel Anda.", en: "Learn more about how we help your travel operations.", tr: "Seyahat operasyonlarınıza nasıl yardımcı olduğumuzu öğrenin.", ar: "تعرف على المزيد حول كيفية مساعدتنا في عمليات السفر الخاصة بك.", ms: "Ketahui lebih lanjut tentang cara kami membantu operasi pelancongan anda." },
    "faq.q1": { id: "Berapa lama waktu transfer ke bank Turki?", en: "How long does a transfer to a Turkish bank take?", tr: "Türk bankasına transfer ne kadar sürer?", ar: "كم يستغرق التحويل إلى بنك تركي؟", ms: "Berapa lama pemindahan ke bank Turki?" },
    "faq.a1": { id: "Rata-rata transfer kami selesai dalam waktu 5-30 menit setelah dana kami terima di Indonesia, asalkan dilakukan selama jam operasional bank Turki.", en: "Our transfers are completed on average within 5-30 minutes after we receive the funds in Indonesia, provided it is done during Turkish bank operating hours.", tr: "Transferlerimiz, Türk bankalarının çalışma saatlerinde yapılması koşuluyla, İndonezya'da fonları aldıktan sonra ortalama 5-30 dakikada tamamlanır.", ar: "يتم إتمام تحويلاتنا في المتوسط خلال 5-30 دقيقة بعد استلامنا الأموال في إندونيسيا، شرط أن يتم ذلك أثناء ساعات عمل البنوك التركية.", ms: "Pemindahan kami siap secara purata dalam 5-30 minit selepas kami menerima dana di Indonesia, dengan syarat dilakukan semasa waktu operasi bank Turki." },
    "faq.q2": { id: "Apakah ada limit harian untuk transfer?", en: "Is there a daily transfer limit?", tr: "Günlük transfer limiti var mı?", ar: "هل هناك حد يومي للتحويل؟", ms: "Adakah had harian untuk pemindahan?" },
    "faq.a2": { id: "Untuk agen terverifikasi, kami memberikan limit harian yang cukup fleksibel hingga Rp 500 Juta per hari. Untuk jumlah lebih besar, tim kami akan membantu melalui jalur prioritas.", en: "For verified agents, we provide a flexible daily limit of up to IDR 500 million per day. For larger amounts, our team will assist through a priority channel.", tr: "Doğrulanmış acenteler için günlük 500 milyon IDR'ye kadar esnek bir limit sunuyoruz. Daha büyük tutarlar için ekibimiz öncelikli kanal aracılığıyla yardımcı olacaktır.", ar: "للوكلاء المعتمدين، نقدم حداً يومياً مرناً يصل إلى 500 مليون روبية يومياً. للمبالغ الأكبر، سيساعد فريقنا عبر قناة ذات أولوية.", ms: "Untuk ejen yang disahkan, kami menyediakan had harian yang fleksibel sehingga Rp 500 Juta sehari. Untuk jumlah yang lebih besar, pasukan kami akan membantu melalui saluran keutamaan." },
    "faq.q3": { id: "Bank apa saja yang didukung di Turki?", en: "Which banks are supported in Turkey?", tr: "Türkiye'de hangi bankalar desteklenmektedir?", ar: "ما هي البنوك المدعومة في تركيا؟", ms: "Bank mana yang disokong di Turki?" },
    "faq.a3": { id: "Kami mendukung transfer ke semua bank komersial utama di Turki, termasuk Ziraat Bankası, VakıfBank, İş Bankası, Garanti BBVA, dan Akbank.", en: "We support transfers to all major commercial banks in Turkey, including Ziraat Bankası, VakıfBank, İş Bankası, Garanti BBVA, and Akbank.", tr: "Ziraat Bankası, VakıfBank, İş Bankası, Garanti BBVA ve Akbank dahil olmak üzere Türkiye'deki tüm büyük ticari bankalara transferi destekliyoruz.", ar: "ندعم التحويلات إلى جميع البنوك التجارية الرئيسية في تركيا، بما في ذلك Ziraat Bankası وVakıfBank وİş Bankası وGaranti BBVA وAkbank.", ms: "Kami menyokong pemindahan ke semua bank komersial utama di Turki, termasuk Ziraat Bankası, VakıfBank, İş Bankası, Garanti BBVA, dan Akbank." },

    // ──────────── FOOTER ────────────
    "footer.desc": { id: "LiraDirect adalah platform remitansi khusus korporat yang berfokus pada efisiensi pembayaran antara agen perjalanan di Indonesia dan penyedia layanan di Turki.", en: "LiraDirect is a corporate remittance platform focused on payment efficiency between travel agents in Indonesia and service providers in Turkey.", tr: "LiraDirect, Endonezya'daki seyahat acenteleri ile Türkiye'deki hizmet sağlayıcılar arasındaki ödeme verimliliğine odaklanan kurumsal bir havale platformudur.", ar: "LiraDirect هي منصة تحويلات مالية مؤسسية تركز على كفاءة الدفع بين وكلاء السفر في إندونيسيا ومقدمي الخدمات في تركيا.", ms: "LiraDirect ialah platform kiriman wang korporat yang berfokus pada kecekapan pembayaran antara ejen pelancongan di Indonesia dan pembekal perkhidmatan di Turki." },
    "footer.layanan": { id: "Layanan", en: "Services", tr: "Hizmetler", ar: "الخدمات", ms: "Perkhidmatan" },
    "footer.s1": { id: "Transfer Lira B2B", en: "B2B Lira Transfer", tr: "B2B Lira Transferi", ar: "تحويل ليرة B2B", ms: "Pemindahan Lira B2B" },
    "footer.s2": { id: "Lira Cash Delivery", en: "Lira Cash Delivery", tr: "Nakit Lira Teslimi", ar: "توصيل ليرة نقدية", ms: "Penghantaran Tunai Lira" },
    "footer.s3": { id: "Konsultasi Bisnis Turki", en: "Turkey Business Consulting", tr: "Türkiye İş Danışmanlığı", ar: "استشارات الأعمال في تركيا", ms: "Konsultasi Perniagaan Turki" },
    "footer.s4": { id: "Partnership Program", en: "Partnership Program", tr: "Ortaklık Programı", ar: "برنامج الشراكة", ms: "Program Perkongsian" },
    "footer.perusahaan": { id: "Perusahaan", en: "Company", tr: "Şirket", ar: "الشركة", ms: "Syarikat" },
    "footer.tentang": { id: "Tentang Kami", en: "About Us", tr: "Hakkımızda", ar: "من نحن", ms: "Tentang Kami" },
    "footer.hubungi": { id: "Hubungi Kami", en: "Contact Us", tr: "Bize Ulaşın", ar: "اتصل بنا", ms: "Hubungi Kami" },
    "footer.privasi": { id: "Kebijakan Privasi", en: "Privacy Policy", tr: "Gizlilik Politikası", ar: "سياسة الخصوصية", ms: "Dasar Privasi" },
    "footer.syarat": { id: "Syarat & Ketentuan", en: "Terms & Conditions", tr: "Şartlar ve Koşullar", ar: "الشروط والأحكام", ms: "Syarat & Ketentuan" },
    "footer.sosmed": { id: "Media Sosial", en: "Social Media", tr: "Sosyal Medya", ar: "وسائل التواصل", ms: "Media Sosial" },
    "footer.copyright": { id: "© 2025 LiraDirect. Seluruh Hak Cipta Dilindungi.", en: "© 2025 LiraDirect. All Rights Reserved.", tr: "© 2025 LiraDirect. Tüm Hakları Saklıdır.", ar: "© 2025 LiraDirect. جميع الحقوق محفوظة.", ms: "© 2025 LiraDirect. Hak Cipta Terpelihara." },
    "footer.ojk": { id: "Berlisensi oleh OJK Indonesia", en: "Licensed by OJK Indonesia", tr: "OJK Endonezya Lisanslı", ar: "مرخصة من OJK إندونيسيا", ms: "Berlesen oleh OJK Indonesia" },
    "footer.bddk": { id: "Compliance with BDDK Turkey", en: "Compliance with BDDK Turkey", tr: "BDDK Türkiye Uyumlu", ar: "متوافق مع BDDK تركيا", ms: "Pematuhan BDDK Turki" },

    // ──────────── WA MODAL ────────────
    "wa.badge": { id: "WhatsApp Support", en: "WhatsApp Support", tr: "WhatsApp Destek", ar: "دعم واتساب", ms: "Sokongan WhatsApp" },
    "wa.title": { id: "Pilih Admin Layanan", en: "Select Service Admin", tr: "Hizmet Yöneticisi Seçin", ar: "اختر مسؤول الخدمة", ms: "Pilih Admin Perkhidmatan" },
    "wa.subtitle1": { id: "Pilih salah satu admin kami di bawah.", en: "Choose one of our admins below.", tr: "Aşağıdaki yöneticilerimizden birini seçin.", ar: "اختر أحد المسؤولين أدناه.", ms: "Pilih salah satu admin kami di bawah." },
    "wa.subtitle2": { id: "Respons cepat, pilih admin yang sedang tersedia.", en: "Fast response, choose an available admin.", tr: "Hızlı yanıt, müsait bir yönetici seçin.", ar: "استجابة سريعة، اختر المسؤول المتاح.", ms: "Respons cepat, pilih admin yang tersedia." },
};

// ──────── Language Metadata ────────
const LANG_META = {
    id: { label: "Indonesia", flag: "🇮🇩", dir: "ltr" },
    en: { label: "English", flag: "🇬🇧", dir: "ltr" },
    tr: { label: "Türkçe", flag: "🇹🇷", dir: "ltr" },
    ar: { label: "العربية", flag: "🇸🇦", dir: "rtl" },
    ms: { label: "Melayu", flag: "🇲🇾", dir: "ltr" },
};

let currentLang = localStorage.getItem("liradirect_lang") || "id";

/**
 * Apply translations to all elements with [data-i18n]
 */
function applyTranslations(lang) {
    currentLang = lang;
    localStorage.setItem("liradirect_lang", lang);

    // Update document direction for RTL
    document.documentElement.dir = LANG_META[lang].dir;
    document.documentElement.lang = lang;

    // Translate all [data-i18n] elements
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        const entry = TRANSLATIONS[key];
        if (!entry || !entry[lang]) return;

        // Check if the element uses innerHTML (contains HTML tags in translation)
        if (entry[lang].includes("<")) {
            el.innerHTML = entry[lang];
        } else {
            el.textContent = entry[lang];
        }
    });

    // Update placeholder for [data-i18n-placeholder]
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        const entry = TRANSLATIONS[key];
        if (entry && entry[lang]) el.placeholder = entry[lang];
    });

    // Update the language switcher label
    const langLabel = document.getElementById("lang-label");
    if (langLabel) langLabel.textContent = lang.toUpperCase();

    // Highlight active dropdown item
    document.querySelectorAll("[data-lang-option]").forEach(opt => {
        opt.classList.toggle("bg-primary/10", opt.getAttribute("data-lang-option") === lang);
        opt.classList.toggle("text-primary", opt.getAttribute("data-lang-option") === lang);
        opt.classList.toggle("font-bold", opt.getAttribute("data-lang-option") === lang);
    });
}

/**
 * Build language dropdown
 */
function initLanguageSwitcher() {
    const container = document.getElementById("lang-switcher");
    if (!container) return;

    // Build dropdown HTML
    const langLabel = document.createElement("span");
    langLabel.id = "lang-label";
    langLabel.className = "text-sm font-bold text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors";
    langLabel.textContent = currentLang.toUpperCase();

    // Replace the existing static "ID" label
    const existingLabel = container.querySelector("span:nth-child(2)");
    if (existingLabel) existingLabel.replaceWith(langLabel);

    // Create dropdown panel
    const dropdown = document.createElement("div");
    dropdown.id = "lang-dropdown";
    dropdown.className = "absolute top-full right-0 mt-2 w-48 bg-white dark:bg-neutral-800 rounded-xl shadow-2xl border border-slate-200 dark:border-neutral-700 overflow-hidden z-[100] hidden animate-modal-in";

    Object.entries(LANG_META).forEach(([code, meta]) => {
        const item = document.createElement("button");
        item.setAttribute("data-lang-option", code);
        item.className = "w-full flex items-center gap-3 px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-primary/5 transition-colors text-left";
        item.innerHTML = `<span class="text-lg">${meta.flag}</span><span>${meta.label}</span>`;
        item.addEventListener("click", () => {
            applyTranslations(code);
            dropdown.classList.add("hidden");
        });
        dropdown.appendChild(item);
    });

    container.style.position = "relative";
    container.appendChild(dropdown);

    // Toggle dropdown on click
    container.addEventListener("click", (e) => {
        if (e.target.closest("[data-lang-option]")) return; // already handled
        dropdown.classList.toggle("hidden");
    });

    // Close on click outside
    document.addEventListener("click", (e) => {
        if (!container.contains(e.target)) {
            dropdown.classList.add("hidden");
        }
    });
}

// ──────── INIT ────────
document.addEventListener("DOMContentLoaded", () => {
    initLanguageSwitcher();
    applyTranslations(currentLang);
});

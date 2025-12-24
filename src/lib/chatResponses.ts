// ARKUN Chatbot Knowledge Base and Response Logic
// RAG-style responses based on technical documentation

export interface ChatResponse {
    content: string;
    quickLink?: {
        label: string;
        href: string;
    };
    triggerLeadCapture?: boolean;
}

// Suggested queries displayed as chips
export const SUGGESTED_QUERIES = [
    "Dinamik Revizyon Kilidi nasıl çalışır?",
    "AS9100 Madde 7.1.5 uyumluluğunu nasıl sağlıyorsunuz?",
    "Smart Bidding sistemi ihale başarısını nasıl artırıyor?",
    "Yetkisiz operatörün işe başlamasını sistem nasıl engelliyor?"
];

// Dashboard mappings for quick links
const DASHBOARD_LINKS: Record<string, { label: string; href: string }> = {
    'revision': { label: 'Configuration Dashboard', href: '/dashboards' },
    'calibration': { label: 'Tool Life & Calibration', href: '/dashboards' },
    'competency': { label: 'Competency Matrix', href: '/dashboards' },
    'fai': { label: 'First Article Inspection', href: '/dashboards' },
    'traceability': { label: 'Digital Traceability', href: '/dashboards' },
    'bidding': { label: 'AI Smart Bidding Analytics', href: '/dashboards' },
    'risk': { label: 'Risk Management Cockpit', href: '/dashboards' },
    'ncr': { label: 'Non-Conformance Reports', href: '/dashboards' },
    'capa': { label: 'CAPA Management', href: '/dashboards' },
    'gfe': { label: 'Government Furnished Equipment', href: '/dashboards' },
    'export': { label: 'Export Control Compliance', href: '/dashboards' }
};

// Knowledge base responses based on scenarios from documentation
const KNOWLEDGE_BASE: { keywords: string[]; response: ChatResponse }[] = [
    {
        keywords: ['revizyon', 'revision', 'dinamik', 'dynamic', 'kilit', 'lock', 'çizim', 'drawing'],
        response: {
            content: `**Dinamik Revizyon Kilidi (Scenario 1)**

• Sistem, üretim başlamadan önce teknik çizimin güncelliğini otomatik olarak doğrular
• Eski revizyonlu çizim tespit edildiğinde fiziksel üretim kilidi devreye girer
• Operatör, güncel çizimi taratmadan işe başlayamaz
• **Etki**: Hurda ve yeniden işleme oranlarında %15'e varan azalma

Bu modül AS9100 Rev D Madde 7.5.3 (Documented Information Control) gereksinimlerini karşılar.

İlgili dashboard'u incelemek ister misiniz?`,
            quickLink: DASHBOARD_LINKS['revision']
        }
    },
    {
        keywords: ['as9100', '7.1.5', 'kalibrasyon', 'calibration', 'uyumluluk', 'compliance', 'denetim', 'audit'],
        response: {
            content: `**AS9100 Madde 7.1.5 Uyumluluğu (Calibration Interlock)**

• Tüm ölçüm aletleri dijital olarak takip edilir
• Kalibrasyon süresi dolan alet kullanıldığında veri girişi otomatik bloke edilir
• Sistem, ölçüm geçerliliğini gerçek zamanlı doğrular
• **Hedef**: %100 Denetim Başarı Oranı

Bu, denetim başarısızlıklarının #1 sebebi olan kalibrasyon hatalarını ortadan kaldırır.

İlgili dashboard'u incelemek ister misiniz?`,
            quickLink: DASHBOARD_LINKS['calibration']
        }
    },
    {
        keywords: ['smart bidding', 'ihale', 'teklif', 'maliyet', 'ai', 'yapay zeka', 'fiyat'],
        response: {
            content: `**AI Smart Bidding Sistemi (Scenario 4)**

• Geçmiş üretim verilerini analiz ederek gerçek maliyetleri hesaplar
• Makine süresi, işçilik ve malzeme varyanslarını değerlendirir
• Düşük teklif verme (underbidding) riskini ortadan kaldırır
• **Etki**: Optimize edilmiş kârlılık ve rekabetçi fiyatlandırma

Sistem, ISO 9001:2015 kalite yönetim prensipleriyle uyumludur.

İlgili dashboard'u incelemek ister misiniz?`,
            quickLink: DASHBOARD_LINKS['bidding']
        }
    },
    {
        keywords: ['yetkisiz', 'operatör', 'yetkinlik', 'competency', 'sertifika', 'eğitim', 'interlock'],
        response: {
            content: `**Yetkinlik Kilidi (Competency Interlock - Scenario 2)**

• Her operatörün sertifikasyonları ve yetkinlikleri dijital olarak takip edilir
• Yetkisiz operatör iş emrine başlamaya çalıştığında sistem otomatik bloke eder
• Sertifika süreleri dolmadan önce otomatik uyarı gönderilir
• **Etki**: Yetkisiz işlem riski sıfıra indirilir

Bu modül AS9100 Clause 7.2 (Competence) gereksinimlerini karşılar.

İlgili dashboard'u incelemek ister misiniz?`,
            quickLink: DASHBOARD_LINKS['competency']
        }
    },
    {
        keywords: ['izlenebilirlik', 'traceability', 'genealogy', 'şecere', 'lot', 'seri', 'iiot'],
        response: {
            content: `**Dijital Şecere (Digital Genealogy - Scenario 3)**

• MTConnect ve OPC UA entegrasyonu ile tezgahlardan canlı veri çekilir
• Her parçanın tam üretim geçmişi kaydedilir (ısıl işlem, CNC parametreleri vb.)
• Lot/seri bazlı tam izlenebilirlik sağlanır
• **Etki**: Gerçek zamanlı izlenebilirlik

Bu modül NATO AQAP standartlarına uygundur.

İlgili dashboard'u incelemek ister misiniz?`,
            quickLink: DASHBOARD_LINKS['traceability']
        }
    },
    {
        keywords: ['fai', 'first article', 'ilk parça', 'as9102', 'inspection'],
        response: {
            content: `**First Article Inspection (FAI) Modülü**

• AS9102 formlarının dijital yönetimi
• Karakteristik takibi ve balonlu çizim yönetimi
• Onay iş akışı ve ölçüm verisi entegrasyonu
• **Etki**: Denetim hazırlığı ve dokümantasyon verimliliği

İlgili dashboard'u incelemek ister misiniz?`,
            quickLink: DASHBOARD_LINKS['fai']
        }
    },
    {
        keywords: ['ncr', 'uygunsuzluk', 'non-conformance', 'mrb', 'disposition'],
        response: {
            content: `**NCR (Non-Conformance Report) Yönetimi**

• Uygunsuzluk raporlarının dijital oluşturulması
• Disposition iş akışı yönetimi
• Material Review Board (MRB) entegrasyonu
• Kök neden analizi bağlantısı

İlgili dashboard'u incelemek ister misiniz?`,
            quickLink: DASHBOARD_LINKS['ncr']
        }
    },
    {
        keywords: ['capa', 'düzeltici', 'önleyici', 'corrective', 'preventive'],
        response: {
            content: `**CAPA (Corrective & Preventive Action) Yönetimi**

• Düzeltici ve önleyici eylem iş akışları
• Kök neden analizi entegrasyonu
• Etkinlik takibi ve doğrulama
• ECO (Engineering Change Order) bağlantısı

İlgili dashboard'u incelemek ister misiniz?`,
            quickLink: DASHBOARD_LINKS['capa']
        }
    },
    {
        keywords: ['gfe', 'government', 'devlet', 'furnished', 'envanter', 'shadow'],
        response: {
            content: `**GFE (Government Furnished Equipment) Yönetimi**

• Müşteriye ait varlıkların izolasyonlu takibi
• Vergi riski yönetimi
• Zimmet zinciri (custody chain) takibi
• Devlet mülkiyeti hesap verebilirliği

İlgili dashboard'u incelemek ister misiniz?`,
            quickLink: DASHBOARD_LINKS['gfe']
        }
    },
    {
        keywords: ['itar', 'ear', 'export', 'ihracat', 'lisans', 'kontrol'],
        response: {
            content: `**Export Control (ITAR/EAR) Uyumluluğu**

• ITAR/EAR uyumluluk takibi
• Lisans yönetimi
• Kontrollü erişim izleme
• İhracat kontrolü raporlaması

İlgili dashboard'u incelemek ister misiniz?`,
            quickLink: DASHBOARD_LINKS['export']
        }
    },
    {
        keywords: ['risk', 'değerlendirme', 'assessment', 'matris', 'mitigation'],
        response: {
            content: `**Risk Yönetimi Kokpiti**

• Proaktif risk tanımlama
• Değerlendirme matrisi
• Azaltma (mitigation) takibi
• AS9100 uyumlu risk yönetimi

İlgili dashboard'u incelemek ister misiniz?`,
            quickLink: DASHBOARD_LINKS['risk']
        }
    },
    {
        keywords: ['entegrasyon', 'integration', 'erp', 'api', 'maliyet'],
        response: {
            content: `**Entegrasyon Politikası**

• **Sıfır Entegrasyon Vergisi**: Diğer ERP sistemlerinin aksine, ARKUN mevcut tezgahlarınıza ve ölçüm aletlerinize bağlanmak için ekstra lisans ücreti talep etmez
• MTConnect ve OPC UA native desteği
• REST API ile mevcut sistemlere entegrasyon
• Tüm entegrasyonlar paketlere dahildir`
        }
    }
];

// Complex query patterns that trigger lead capture
const LEAD_CAPTURE_TRIGGERS = [
    'özel', 'custom', 'fiyat', 'teklif', 'demo', 'kurulum', 'implementation',
    'danışmanlık', 'consulting', 'eğitim', 'training', 'pilot', 'poc'
];

export function generateResponse(userMessage: string): ChatResponse {
    const normalizedMessage = userMessage.toLowerCase().trim();

    // Check for lead capture triggers
    const shouldTriggerLeadCapture = LEAD_CAPTURE_TRIGGERS.some(
        trigger => normalizedMessage.includes(trigger)
    );

    // Find matching knowledge base entry
    for (const entry of KNOWLEDGE_BASE) {
        const hasMatch = entry.keywords.some(keyword =>
            normalizedMessage.includes(keyword.toLowerCase())
        );

        if (hasMatch) {
            return {
                ...entry.response,
                triggerLeadCapture: shouldTriggerLeadCapture
            };
        }
    }

    // Default response for unmatched queries
    if (shouldTriggerLeadCapture) {
        return {
            content: `Bu konuda size daha detaylı bilgi verebilmemiz için uzman ekibimizle iletişime geçmenizi öneririm.

Aşağıdaki konularda size yardımcı olabilirim:
• Operasyonel kilitler (Interlocks)
• AS9100 uyumluluk modülleri
• IIoT entegrasyonu
• Smart Bidding sistemi

Uzman ekibimizin sizinle iletişime geçmesini ister misiniz?`,
            triggerLeadCapture: true
        };
    }

    return {
        content: `Sorunuzu anlayamadım. Aşağıdaki konularda size yardımcı olabilirim:

• **Dinamik Revizyon Kilidi** - Eski çizim kullanımını engelleme
• **Kalibrasyon Kilidi** - AS9100 7.1.5 uyumluluğu
• **Yetkinlik Kilidi** - Yetkisiz operatör engelleme
• **Smart Bidding** - AI destekli maliyet tahmini
• **Dijital Şecere** - IIoT entegrasyonu ve izlenebilirlik

Lütfen yukarıdaki konulardan biriyle ilgili soru sorun.`
    };
}

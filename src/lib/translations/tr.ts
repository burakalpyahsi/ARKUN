// Turkish translations
import { TranslationTree } from './en';

export const tr: TranslationTree = {
    // Navbar
    nav: {
        capabilities: 'ÖZELLİKLER',
        modules: 'MODÜLLER',
        access: 'ERİŞİM',
        dashboards: 'PANOLAR',
        requestDemo: 'DEMO TALEBİ',
    },

    // Hero
    hero: {
        tagline: 'Savunmanın Geleceğini Şekillendiriyoruz',
        lotoSensors: 'LOTO SENSÖRLER',
    },

    // Features
    features: {
        badge: 'Kanıta Dayalı Değer Önerisi',
        title: 'Komuta Merkezi',
        titleHighlight: 'Analitiği',
        subtitle: 'Veriye dayalı üretim zekası. Akademik araştırmalar ve saha verileriyle kanıtlanmış performans artışı.',
        costAnalysis: {
            title: 'Maliyet Kaybı Analizi',
            traditional: 'Geleneksel ERP / Kağıt Sistemler',
            arkun: 'ARKUN Platform',
            savings: '▲ Yıllık %13 Net Tasarruf',
        },
        compliance: {
            title: 'AS9100 Madde 7.1.5',
            description: 'Denetim başarısızlıklarının #1 numaralı sebebi olan kalibrasyon hatalarını, sistem seviyesi kilitlerle sıfıra indiriyoruz.',
            badge: 'SİSTEMİK UYUMLULUK',
        },
        riskTable: {
            title: 'Kritik Senaryo Analizleri',
            headers: {
                scenario: 'Risk Senaryosu',
                threat: 'Tehdit Seviyesi',
                solution: 'ARKUN Çözümü',
            },
            rows: {
                oldRevision: 'Eski Revizyon Kullanımı',
                uncalibratedTool: 'Kalibrasyonu Geçmiş Alet',
                unauthorizedOperator: 'Yetkisiz Operatör',
            },
            levels: {
                critical: 'Kritik',
                high: 'Yüksek',
                medium: 'Orta',
            },
            solutions: {
                revisionLock: 'Fiziksel Revizyon Kilidi',
                sensorBlocking: 'Sensör Seviyesi Engelleme',
                competencyInterlock: 'Yetkinlik Kilidi',
            },
        },
        footer: 'Veri Egemenliği: Yerel Barındırma & SQL Şifreleme',
    },

    // Modules
    modules: {
        badge: 'Teknik Çekirdek',
        title: 'Kod Düzeyinde Uyumluluk',
        titleHighlight: 'Modülleri',
        subtitle: 'Sektörün en katı standartlarını (AS9100, AQAP) üretim sahanıza entegre eden modüler mimari.',
        items: {
            revisionLock: {
                title: 'Dinamik Revizyon Kilidi',
                description: 'Eski revizyonlu teknik resimle üretimi sistem seviyesinde engeller. Sadece güncel veri işleme girer.',
            },
            calibrationShield: {
                title: 'Kalibrasyon & İhracat Kalkanı',
                description: 'Kalibrasyonu geçmiş ölçü aleti veya yetkisi bitmiş operatör tespit edildiğinde veri girişini otomatik olarak kilitler.',
            },
            digitalGenealogy: {
                title: 'Dijital Şecere (IIoT)',
                description: 'MTConnect ve OPC UA ile tezgahtan canlı veri çekerek her parçanın "Dijital Şeceresini" (Isıl işlem, CNC parametreleri vb.) oluşturur.',
            },
            smartBidding: {
                title: 'AI Akıllı Teklifleme',
                description: 'Geçmiş üretim verilerini analiz ederek yeni ihalelerde "en doğru" maliyet tahminini yapar; zarar etme riskini ortadan kaldırır.',
            },
        },
    },

    // Pricing
    pricing: {
        title: 'Üretim Ölçeğinize Göre Planlar',
        subtitle: 'Gizli maliyet yok. Sürpriz faturalar yok. Sadece değer odaklı fiyatlandırma.',
        plans: {
            starter: {
                name: 'Başlangıç Uyumluluğu',
                target: 'Küçük Atölyeler',
                price: 'İletişime Geçiniz',
                description: 'Temel üretim takibi ve dokümantasyon için.',
                features: [
                    'Temel AS9100 Rev D Modülü',
                    'Dijital Revizyon Kilidi',
                    'Doküman Yönetim Sistemi',
                    '5 Kullanıcıya Kadar',
                ],
            },
            pro: {
                name: 'Savunma Pro',
                target: 'Büyüyen Savunma Tedarikçileri',
                price: 'İletişime Geçiniz',
                description: 'Tam izlenebilirlik ve donanım kilitleri ile denetim garantisi.',
                badge: 'ÖNERİLEN',
                features: [
                    'Starter Planındaki Tüm Özellikler',
                    'IIoT Entegrasyonu (MTConnect/OPC UA)',
                    'Kalibrasyon & Yetkinlik Kalkanı',
                    'Dijital Şecere (İzlenebilirlik)',
                    '20 Kullanıcıya Kadar',
                ],
            },
            enterprise: {
                name: 'Kurumsal AI',
                target: 'Tam Entegre Tesisler',
                price: 'Özel Teklif',
                description: 'Yapay zeka destekli tam otonom üretim yönetimi.',
                features: [
                    'Pro Planındaki Tüm Özellikler',
                    'AI Destekli Akıllı Teklifleme',
                    'Gelişmiş NCR/CAPA/ECO İş Akışları',
                    'Mevcut ERP ile Tam API Entegrasyonu',
                    'Sınırsız Kullanıcı',
                ],
            },
        },
        cta: {
            contact: 'Bize Ulaşın',
            start: 'Hemen Başla',
        },
        integrationWarning: {
            title: 'ENTEGRASYON VERGİSİ YOK',
            description: 'Diğer ERP sistemlerinin aksine, ARKUN mevcut tezgahlarınıza ve ölçüm aletlerinize bağlanmak için',
            highlight: ' ekstra lisans ücreti talep etmez.',
            suffix: ' Tüm entegrasyonlar paketlere dahildir.',
        },
    },

    // Contact
    contact: {
        title: 'Hemen İncelemeye Başlayın',
        subtitle: 'Standımızı ziyaret ettiğiniz için teşekkürler. Aşağıdaki QR kodu taratarak veya formu doldurarak teknik dokümanlarımıza anında erişebilirsiniz.',
        qrItems: {
            docs: 'Teknik Dokümanlar (PDF)',
            ncr: 'Örnek Uygunsuzluk Raporu',
            roi: 'ROI Hesaplama Tablosu',
        },
        form: {
            title: 'Bilgi Talep Formu',
            mode: 'STAND MODU',
            company: 'Firma Adı',
            companyPlaceholder: 'Örn: Baykar, TUSAŞ, Aselsan Tedarikçisi...',
            name: 'Yetkili İsim',
            email: 'E-posta',
            module: 'İlgilenilen Modül',
            modulePlaceholder: 'Seçiniz...',
            moduleOptions: {
                all: 'Tüm Platform',
                revision: 'Dynamic Revision Lock',
                interlock: 'Calibration Interlock',
                traceability: 'Digital Genealogy',
                bidding: 'AI Smart Bidding',
            },
            submit: 'Hemen İndir & Kaydet',
            loading: 'İşleniyor...',
        },
        success: {
            title: 'Talep Alındı!',
            message: 'Dokümanlarınız otomatik olarak cihazınıza indiriliyor.',
            newForm: 'Yeni Form Doldur',
        },
    },

    // Footer
    footer: {
        description: 'Savunma sanayi uyumluluğunun geleceğini mühendislik ediyoruz. Güvenli, ölçeklenebilir ve denetime hazır üretim zekası.',
        product: {
            title: 'Ürün',
            features: 'Özellikler',
            security: 'Güvenlik',
            compliance: 'Uyumluluk',
        },
        company: {
            title: 'Şirket',
            about: 'Hakkımızda',
            contact: 'İletişim',
            privacy: 'Gizlilik',
        },
        copyright: '© {year} ARKUN Savunma Sistemleri. Tüm hakları saklıdır.',
    },

    // Dashboards page
    dashboards: {
        backToHome: 'Ana Sayfaya Dön',
        title: 'ARKUN',
        titleHighlight: 'Panel',
        titleSuffix: 'Vitrini',
        subtitle: 'Savunma sınıfı üretim mükemmelliği için tasarlanmış kapsamlı operasyonel panellerımızı keşfedin.',
        categories: {
            all: 'Tümü',
            core: 'Çekirdek',
            quality: 'Kalite',
            compliance: 'Uyumluluk',
            operations: 'Operasyonlar',
            engineering: 'Mühendislik',
            intelligence: 'İstihbarat',
        },
        stats: {
            dashboards: 'Operasyonel Paneller',
            categories: 'Fonksiyonel Kategoriler',
            compliance: 'Uyumluluğa Hazır',
        },
    },

    // Common
    common: {
        viewScenario: 'Operasyonel Senaryoyu Görüntüle',
    },
};

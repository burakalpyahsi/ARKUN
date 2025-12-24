// English translations
export const en = {
    // Navbar
    nav: {
        capabilities: 'CAPABILITIES',
        modules: 'MODULES',
        access: 'ACCESS',
        dashboards: 'DASHBOARDS',
        requestDemo: 'REQUEST DEMO',
    },

    // Hero
    hero: {
        tagline: 'Visioning the Future of Defense',
        lotoSensors: 'LOTO SENSORS',
    },

    // Features
    features: {
        badge: 'Evidence-Based Value Proposition',
        title: 'Command Center',
        titleHighlight: 'Analytics',
        subtitle: 'Data-driven production intelligence. Performance improvement proven by academic research and field data.',
        costAnalysis: {
            title: 'Cost Loss Analysis',
            traditional: 'Traditional ERP / Paper Systems',
            arkun: 'ARKUN Platform',
            savings: '▲ 13% Net Annual Savings',
        },
        compliance: {
            title: 'AS9100 Clause 7.1.5',
            description: 'We eliminate calibration errors, the #1 cause of audit failures, with system-level locks.',
            badge: 'SYSTEMIC COMPLIANCE',
        },
        riskTable: {
            title: 'Critical Scenario Analysis',
            headers: {
                scenario: 'Risk Scenario',
                threat: 'Threat Level',
                solution: 'ARKUN Solution',
            },
            rows: {
                oldRevision: 'Old Revision Usage',
                uncalibratedTool: 'Uncalibrated Tool',
                unauthorizedOperator: 'Unauthorized Operator',
            },
            levels: {
                critical: 'Critical',
                high: 'High',
                medium: 'Medium',
            },
            solutions: {
                revisionLock: 'Physical Revision Lock',
                sensorBlocking: 'Sensor-Level Blocking',
                competencyInterlock: 'Competency Interlock',
            },
        },
        footer: 'Data Sovereignty: Local Hosting & SQL Encryption',
    },

    // Modules
    modules: {
        badge: 'Technical Core',
        title: 'Hard-Coded Compliance',
        titleHighlight: 'Modules',
        subtitle: 'Modular architecture integrating the industry\'s strictest standards (AS9100, AQAP) into your production floor.',
        items: {
            revisionLock: {
                title: 'Dynamic Revision Lock',
                description: 'System-level blocking of production with obsolete revision drawings. Only current data enters processing.',
            },
            calibrationShield: {
                title: 'Calibration & Export Shield',
                description: 'Automatically locks data entry when expired calibration tool or unauthorized operator is detected.',
            },
            digitalGenealogy: {
                title: 'Digital Genealogy (IIoT)',
                description: 'Creates each part\'s "Digital Pedigree" (heat treatment, CNC parameters, etc.) by pulling live data from machines via MTConnect and OPC UA.',
            },
            smartBidding: {
                title: 'AI Smart Bidding',
                description: 'Analyzes historical production data to provide the most accurate cost estimate for new bids; eliminates the risk of losses.',
            },
        },
    },

    // Pricing
    pricing: {
        title: 'Plans Based on Your Production Scale',
        subtitle: 'No hidden costs. No surprise bills. Just value-driven pricing.',
        plans: {
            starter: {
                name: 'Compliance Starter',
                target: 'Small Workshops',
                price: 'Contact Us',
                description: 'For basic production tracking and documentation.',
                features: [
                    'Basic AS9100 Rev D Module',
                    'Digital Revision Lock',
                    'Document Management System',
                    'Up to 5 Users',
                ],
            },
            pro: {
                name: 'Defense Pro',
                target: 'Growing Defense Suppliers',
                price: 'Contact Us',
                description: 'Audit guarantee with full traceability and hardware interlocks.',
                badge: 'RECOMMENDED',
                features: [
                    'All Starter Plan Features',
                    'IIoT Integration (MTConnect/OPC UA)',
                    'Calibration & Competency Shield',
                    'Digital Genealogy (Traceability)',
                    'Up to 20 Users',
                ],
            },
            enterprise: {
                name: 'Enterprise AI',
                target: 'Fully Integrated Facilities',
                price: 'Custom Quote',
                description: 'AI-powered fully autonomous production management.',
                features: [
                    'All Pro Plan Features',
                    'AI-Powered Smart Bidding',
                    'Advanced NCR/CAPA/ECO Workflows',
                    'Full API Integration with Existing ERP',
                    'Unlimited Users',
                ],
            },
        },
        cta: {
            contact: 'Contact Us',
            start: 'Get Started',
        },
        integrationWarning: {
            title: 'NO INTEGRATION TAX',
            description: 'Unlike other ERP systems, ARKUN does not charge',
            highlight: ' extra licensing fees',
            suffix: ' to connect to your existing machines and measurement tools. All integrations are included in packages.',
        },
    },

    // Contact
    contact: {
        title: 'Start Exploring Now',
        subtitle: 'Thank you for visiting our booth. You can instantly access our technical documents by scanning the QR code below or filling out the form.',
        qrItems: {
            docs: 'Technical Documents (PDF)',
            ncr: 'Sample Nonconformance Report',
            roi: 'ROI Calculation Sheet',
        },
        form: {
            title: 'Information Request Form',
            mode: 'BOOTH MODE',
            company: 'Company Name',
            companyPlaceholder: 'e.g., Baykar, TAI, Aselsan Supplier...',
            name: 'Contact Name',
            email: 'Email',
            module: 'Module of Interest',
            modulePlaceholder: 'Select...',
            moduleOptions: {
                all: 'Full Platform',
                revision: 'Dynamic Revision Lock',
                interlock: 'Calibration Interlock',
                traceability: 'Digital Genealogy',
                bidding: 'AI Smart Bidding',
            },
            submit: 'Download & Save Now',
            loading: 'Processing...',
        },
        success: {
            title: 'Request Received!',
            message: 'Your documents are being automatically downloaded to your device.',
            newForm: 'Fill New Form',
        },
    },

    // Footer
    footer: {
        description: 'Engineering the future of defense manufacturing compliance. Secure, scalable, and audit-ready production intelligence.',
        product: {
            title: 'Product',
            features: 'Features',
            security: 'Security',
            compliance: 'Compliance',
        },
        company: {
            title: 'Company',
            about: 'About',
            contact: 'Contact',
            privacy: 'Privacy',
        },
        copyright: '© {year} ARKUN Defense Systems. All rights reserved.',
    },

    // Dashboards page
    dashboards: {
        backToHome: 'Back to Home',
        title: 'ARKUN',
        titleHighlight: 'Dashboard',
        titleSuffix: 'Showcase',
        subtitle: 'Explore our comprehensive suite of operational dashboards designed for defense-grade manufacturing excellence.',
        categories: {
            all: 'All',
            core: 'Core',
            quality: 'Quality',
            compliance: 'Compliance',
            operations: 'Operations',
            engineering: 'Engineering',
            intelligence: 'Intelligence',
        },
        stats: {
            dashboards: 'Operational Dashboards',
            categories: 'Functional Categories',
            compliance: 'Compliance Ready',
        },
    },

    // Common
    common: {
        viewScenario: 'View Operational Scenario',
    },
};

export type TranslationTree = typeof en;

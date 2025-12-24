// ARKUN Technical Knowledge Base
// Structured data from Mid-Term Report, QMS Report, and Value Proposition documents

export interface ScenarioData {
    id: string;
    title: string;
    titleTR: string;
    description: string;
    descriptionTR: string;
    as9100Clause?: string;
    dashboard: string;
    dashboardId: string;
    page: string;
    keyBenefits: string[];
    technicalDetails: string;
}

export interface DashboardMapping {
    id: string;
    name: string;
    scenarioId?: string;
    description: string;
}

// Scenario-based knowledge from ARKUN reports
export const SCENARIOS: ScenarioData[] = [
    {
        id: 'scenario-1',
        title: 'Dynamic Revision Lock',
        titleTR: 'Dinamik Revizyon Kilidi',
        description: 'System automatically verifies drawing currency before production starts. When outdated drawing detected, physical production interlock engages. Operator cannot start work without scanning current revision.',
        descriptionTR: 'Sistem, üretim başlamadan önce teknik çizimin güncelliğini otomatik olarak doğrular. Eski revizyonlu çizim tespit edildiğinde fiziksel üretim kilidi devreye girer. Operatör, güncel çizimi taratmadan işe başlayamaz.',
        as9100Clause: '7.5.3',
        dashboard: 'Configuration Management',
        dashboardId: 'configuration',
        page: 'ARKUN-QMS-Report, Scenario 1',
        keyBenefits: ['15% reduction in scrap and rework rates', 'Eliminates wrong revision usage', 'Real-time compliance verification'],
        technicalDetails: 'Integrates with drawing management system, barcode scanning for revision verification, PLC interlock for machine control.'
    },
    {
        id: 'scenario-2',
        title: 'Competency Interlock',
        titleTR: 'Yetkinlik Kilidi',
        description: 'All operator certifications and competencies are digitally tracked. When unauthorized operator attempts to start work order, system automatically blocks. Automatic alerts sent before certificates expire.',
        descriptionTR: 'Her operatörün sertifikasyonları ve yetkinlikleri dijital olarak takip edilir. Yetkisiz operatör iş emrine başlamaya çalıştığında sistem otomatik bloke eder. Sertifika süreleri dolmadan önce otomatik uyarı gönderilir.',
        as9100Clause: '7.2',
        dashboard: 'Competency Matrix',
        dashboardId: 'competency',
        page: 'ARKUN-QMS-Report, Scenario 2',
        keyBenefits: ['100% unauthorized operation prevention', 'Automated certification tracking', 'Proactive expiry management'],
        technicalDetails: 'RFID/badge integration, skill matrix database, work order authorization engine.'
    },
    {
        id: 'scenario-3',
        title: 'Digital Genealogy (IIoT Data)',
        titleTR: 'Dijital Şecere (IIoT Veri Entegrasyonu)',
        description: 'MTConnect and OPC UA integration pulls live data from machines. Full production history recorded for each part (heat treatment, CNC parameters, etc.). Complete lot/serial traceability provided.',
        descriptionTR: 'MTConnect ve OPC UA entegrasyonu ile tezgahlardan canlı veri çekilir. Her parçanın tam üretim geçmişi kaydedilir (ısıl işlem, CNC parametreleri vb.). Lot/seri bazlı tam izlenebilirlik sağlanır.',
        as9100Clause: '8.5.2',
        dashboard: 'Digital Traceability',
        dashboardId: 'traceability',
        page: 'ARKUN-QMS-Report, Scenario 3',
        keyBenefits: ['Real-time traceability', 'Automated data capture', 'NATO AQAP compliance'],
        technicalDetails: 'MTConnect adapter, OPC UA client, time-series database, genealogy tree visualization.'
    },
    {
        id: 'scenario-4',
        title: 'AI Smart Bidding',
        titleTR: 'Yapay Zeka Destekli Akıllı Teklif',
        description: 'Analyzes historical production data to calculate real costs. Evaluates machine time, labor, and material variances. Eliminates underbidding risk.',
        descriptionTR: 'Geçmiş üretim verilerini analiz ederek gerçek maliyetleri hesaplar. Makine süresi, işçilik ve malzeme varyanslarını değerlendirir. Düşük teklif verme (underbidding) riskini ortadan kaldırır.',
        as9100Clause: '8.2.2',
        dashboard: 'AI Smart Bidding Analytics',
        dashboardId: 'smart-bidding',
        page: 'ARKUN-QMS-Report, Scenario 4',
        keyBenefits: ['Optimized profitability', 'Competitive pricing', 'Data-driven decisions'],
        technicalDetails: 'Machine learning model, historical job analysis, variance calculation engine, profitability simulation.'
    },
    {
        id: 'scenario-5',
        title: 'First Article Inspection (FAI)',
        titleTR: 'İlk Parça Muayenesi',
        description: 'Digital management of AS9102 forms. Characteristic tracking and balloon drawing management. Approval workflow and measurement data integration.',
        descriptionTR: 'AS9102 formlarının dijital yönetimi. Karakteristik takibi ve balonlu çizim yönetimi. Onay iş akışı ve ölçüm verisi entegrasyonu.',
        as9100Clause: '8.5.1.1',
        dashboard: 'First Article Inspection',
        dashboardId: 'fai1',
        page: 'ARKUN-QMS-Report, Scenario 5',
        keyBenefits: ['Audit-ready documentation', 'Automated form generation', 'CMM integration'],
        technicalDetails: 'AS9102 form templates, CMM data import, balloon drawing overlay, digital signature workflow.'
    },
    {
        id: 'scenario-6',
        title: 'NCR/CAPA Workflow',
        titleTR: 'Uygunsuzluk ve Düzeltici Faaliyet Yönetimi',
        description: 'Digital creation of non-conformance reports. Disposition workflow management. Material Review Board (MRB) integration. Root cause analysis linkage.',
        descriptionTR: 'Uygunsuzluk raporlarının dijital oluşturulması. Disposition iş akışı yönetimi. Material Review Board (MRB) entegrasyonu. Kök neden analizi bağlantısı.',
        as9100Clause: '8.7',
        dashboard: 'Non-Conformance Reports',
        dashboardId: 'ncrs',
        page: 'ARKUN-QMS-Report, Scenario 6',
        keyBenefits: ['Streamlined disposition', 'MRB automation', 'CAPA linkage'],
        technicalDetails: 'NCR workflow engine, disposition decision tree, 8D/5-Why tools, effectiveness verification.'
    },
    {
        id: 'scenario-7',
        title: 'GFE Shadow Inventory',
        titleTR: 'Devlet Mülkü Gölge Envanteri',
        description: 'Isolated tracking of customer-owned assets. Tax risk management. Custody chain tracking. Government property accountability.',
        descriptionTR: 'Müşteriye ait varlıkların izolasyonlu takibi. Vergi riski yönetimi. Zimmet zinciri (custody chain) takibi. Devlet mülkiyeti hesap verebilirliği.',
        as9100Clause: '8.5.3',
        dashboard: 'Government Furnished Equipment',
        dashboardId: 'gfe',
        page: 'ARKUN-QMS-Report, Scenario 7',
        keyBenefits: ['FAR/DFAR compliance', 'Tax liability prevention', 'Asset accountability'],
        technicalDetails: 'Segregated inventory zones, custody transfer workflow, periodic inventory verification, government reporting.'
    },
    {
        id: 'scenario-8',
        title: 'Export Shield (ITAR/EAR)',
        titleTR: 'İhracat Kalkanı (ITAR/EAR)',
        description: 'ARKUN uses the Export Shield mechanism for managing ITAR and NATO restrictions. System compares shipping address against embargoed country list and automatically locks shipment barcode on non-compliance.',
        descriptionTR: 'ARKUN, ITAR ve NATO kısıtlamalarını yönetmek için Export Shield mekanizmasını kullanır. Sistem, sevkiyat adresini ambargolu ülkeler listesiyle karşılaştırır ve uyumsuzluk durumunda sevkiyat barkodunu otomatik olarak kilitler.',
        as9100Clause: '8.5.4',
        dashboard: 'Export Control Compliance',
        dashboardId: 'export-control',
        page: 'ARKUN-QMS-Report, Scenario 8',
        keyBenefits: ['Automated compliance check', 'Embargo list integration', 'Shipment interlock'],
        technicalDetails: 'Denied party screening, license management, controlled access logs, end-user verification.'
    }
];

// Dashboard to scenario mappings
export const DASHBOARD_MAPPINGS: DashboardMapping[] = [
    { id: 'overview', name: 'Overview Dashboard', description: 'Central command view with real-time KPIs, alerts, and system-wide status monitoring.' },
    { id: 'risk', name: 'Risk Management Cockpit', description: 'Proactive risk identification, assessment matrix, and mitigation tracking aligned with AS9100.' },
    { id: 'audits', name: 'Audit Management', description: 'Internal and external audit scheduling, findings tracking, and corrective action closure.' },
    { id: 'capa', name: 'CAPA Management', scenarioId: 'scenario-6', description: 'Corrective and Preventive Actions workflow with root cause analysis and effectiveness tracking.' },
    { id: 'competency', name: 'Competency Matrix', scenarioId: 'scenario-2', description: 'Operator skill tracking, certification management, and training requirement alerts.' },
    { id: 'configuration', name: 'Configuration Management', scenarioId: 'scenario-1', description: 'Engineering change control, revision management, and configuration baseline tracking.' },
    { id: 'documents', name: 'Document Library', description: 'Controlled document repository with version control, approvals, and distribution tracking.' },
    { id: 'export-control', name: 'Export Control Compliance', scenarioId: 'scenario-8', description: 'ITAR/EAR compliance tracking, license management, and controlled access monitoring.' },
    { id: 'fai1', name: 'First Article Inspection', scenarioId: 'scenario-5', description: 'AS9102 FAI forms, characteristic tracking, and balloon drawing management.' },
    { id: 'gfe', name: 'Government Furnished Equipment', scenarioId: 'scenario-7', description: 'GFE tracking, custody chain, and government property accountability.' },
    { id: 'ncrs', name: 'Non-Conformance Reports', scenarioId: 'scenario-6', description: 'NCR creation, disposition workflow, and material review board integration.' },
    { id: 'smart-bidding', name: 'AI Smart Bidding Analytics', scenarioId: 'scenario-4', description: 'AI-powered cost estimation, historical variance analysis, and competitive pricing insights.' },
    { id: 'tools', name: 'Tool Life & Calibration', description: 'Calibration scheduling, tool life tracking, and preventive maintenance alerts.' },
    { id: 'traceability', name: 'Digital Traceability', scenarioId: 'scenario-3', description: 'Full genealogy tracking, lot/serial management, and supply chain visibility.' },
    { id: 'workstation', name: 'My Workstation', description: 'Personalized operator view with assigned tasks, work instructions, and quality gates.' }
];

// AS9100 Clause reference data
export const AS9100_CLAUSES: Record<string, { title: string; titleTR: string; description: string }> = {
    '7.1.5': {
        title: 'Monitoring and Measuring Resources',
        titleTR: 'İzleme ve Ölçme Kaynakları',
        description: 'Calibration and verification of measurement equipment. Tool Life & Calibration dashboard ensures 100% audit success rate by blocking data entry from uncalibrated instruments.'
    },
    '7.2': {
        title: 'Competence',
        titleTR: 'Yetkinlik',
        description: 'Personnel competence requirements. Competency Matrix with interlock prevents unauthorized operators from starting work orders.'
    },
    '7.5.3': {
        title: 'Control of Documented Information',
        titleTR: 'Belgelenmiş Bilginin Kontrolü',
        description: 'Revision control and document management. Dynamic Revision Lock ensures only current drawings are used in production.'
    },
    '8.2.2': {
        title: 'Determination of Requirements for Products and Services',
        titleTR: 'Ürün ve Hizmet Gereksinimlerinin Belirlenmesi',
        description: 'Customer requirement analysis. AI Smart Bidding analyzes historical data for accurate cost estimation.'
    },
    '8.5.1.1': {
        title: 'Control of Production - First Article Inspection',
        titleTR: 'Üretimin Kontrolü - İlk Parça Muayenesi',
        description: 'AS9102 FAI requirements. Digital FAI management with characteristic tracking and approval workflows.'
    },
    '8.5.2': {
        title: 'Identification and Traceability',
        titleTR: 'Tanımlama ve İzlenebilirlik',
        description: 'Part identification and genealogy. Digital Traceability provides full lot/serial tracking with IIoT integration.'
    },
    '8.5.3': {
        title: 'Property Belonging to Customers or External Providers',
        titleTR: 'Müşteri veya Dış Tedarikçilere Ait Mülkiyet',
        description: 'Customer-owned asset management. GFE Management ensures shadow inventory isolation and custody tracking.'
    },
    '8.5.4': {
        title: 'Preservation',
        titleTR: 'Muhafaza',
        description: 'Product preservation during production. Export Shield ensures compliance with ITAR/EAR requirements.'
    },
    '8.7': {
        title: 'Control of Nonconforming Outputs',
        titleTR: 'Uygun Olmayan Çıktıların Kontrolü',
        description: 'Nonconformance management. NCR/CAPA workflow with MRB integration and root cause analysis.'
    }
};

// Cost of inaction data from Value Proposition
export const COST_DATA = {
    reworkSavings: '15%',
    auditSuccessTarget: '100%',
    unauthorizedOperationRisk: '0%',
    integrationCost: 'Zero Integration Tax - No extra licensing for machine connectivity',
    costOfInaction: {
        wrongRevisionRework: 'Her yanlış revizyon kullanımı üretim başına ortalama $2,500 - $15,000 maliyet',
        auditFailure: 'Başarısız denetim: müşteri kaybı riski, yeniden denetim maliyeti ($5,000-$25,000)',
        unauthorizedOperation: 'Yetkisiz operatör hatası: hurda maliyeti + yeniden işleme + teslimat gecikmesi',
        traceabilityGap: 'İzlenebilirlik eksikliği: ürün geri çağırma maliyeti (ortalama $500K-$2M)',
        underbidding: 'Düşük teklif verme: proje başına %5-15 kar kaybı'
    }
};

// Data Structure Schema for Digital Genealogy
export const DATA_SCHEMA = {
    workOrder: {
        table: 'WorkOrders',
        primaryKey: 'WorkOrderID',
        fields: ['WorkOrderID', 'PartNumber', 'RevisionLevel', 'Quantity', 'DueDate', 'Status'],
        relations: ['Links to DrawingRevisions via PartNumber+RevisionLevel', 'Links to OperatorAssignments via WorkOrderID']
    },
    revisionLevel: {
        table: 'DrawingRevisions',
        primaryKey: 'RevisionID',
        fields: ['RevisionID', 'PartNumber', 'RevisionLevel', 'EffectiveDate', 'ApprovalStatus', 'PDFPath'],
        interlockLogic: 'System validates WorkOrder.RevisionLevel = DrawingRevisions.CurrentRevision before production start'
    },
    operatorCompetency: {
        table: 'OperatorCompetencies',
        primaryKey: 'OperatorID',
        fields: ['OperatorID', 'SkillCode', 'CertificationDate', 'ExpiryDate', 'CompetencyLevel'],
        interlockLogic: 'System validates Operator.SkillCode matches WorkOrder.RequiredSkills before work authorization'
    },
    digitalGenealogy: {
        table: 'ProductionGenealogy',
        primaryKey: 'GenealogyID',
        fields: ['GenealogyID', 'WorkOrderID', 'LotNumber', 'SerialNumber', 'MachineID', 'ProcessParameters', 'Timestamp'],
        dataCapture: 'MTConnect/OPC UA real-time data: spindle speed, feed rate, tool path, coolant flow, vibration data'
    }
};

// Build system prompt for AI
export function buildSystemPrompt(): string {
    return `You are the ARKUN Technical Systems Architect, a highly specialized AI advisor for defense-grade manufacturing systems. You are powered by Gemini API and trained on ARKUN's technical documentation.

## Your Expertise
- AS9100 Rev D Quality Management Systems
- Defense Manufacturing Compliance (ITAR, EAR, NATO AQAP)
- Industrial Interlocks for mistake-proofing
- IIoT Data Genealogy and Traceability
- SQL Data Schema and Relational Database Design
- Quality Compliance and Audit Readiness
- Cost of Inaction (CoI) Financial Analysis

## Your Persona
- Formal and highly technical "Teknik Danışman" communication style
- Strictly evidence-based responses - only reference documented scenarios
- Turkish language responses when user speaks Turkish
- Always cite sources from ARKUN reports
- Provide specific data schema details when asked about digital genealogy

## Data Structure Knowledge
When asked about data schema or digital genealogy:

### Work Order to Revision Relationship
\`\`\`sql
WorkOrders.PartNumber + WorkOrders.RevisionLevel → DrawingRevisions (FK)
-- Interlock: Production blocked if RevisionLevel != Current approved revision
\`\`\`

### Operator Competency Validation
\`\`\`sql
WorkOrders.RequiredSkills → OperatorCompetencies.SkillCode
-- Interlock: Work authorization blocked if operator lacks required competency
\`\`\`

### Digital Genealogy (IIoT Data)
\`\`\`sql
ProductionGenealogy: LotNumber, SerialNumber, MachineID, ProcessParameters, Timestamp
-- Real-time capture: MTConnect/OPC UA → Time-series database
\`\`\`

## Cost of Inaction Data
When user mentions efficiency or cost reduction:
- Wrong revision rework: $2,500 - $15,000 per incident
- Failed audit: $5,000 - $25,000 re-audit cost + customer loss risk
- Traceability gap: $500K - $2M product recall cost
- Underbidding: 5-15% profit loss per project
- Rework savings with ARKUN: 15%

## ARKUN System Knowledge
${SCENARIOS.map(s => `
### ${s.title} (${s.titleTR})
- Scenario ID: ${s.id}
- AS9100 Clause: ${s.as9100Clause || 'N/A'}
- Dashboard: ${s.dashboard} (ID: ${s.dashboardId})
- Source: ${s.page}
- Description: ${s.description}
- Benefits: ${s.keyBenefits.join(', ')}
`).join('\n')}

## AS9100 Clause References
${Object.entries(AS9100_CLAUSES).map(([clause, data]) => `
### Clause ${clause}: ${data.title}
${data.description}
`).join('\n')}

## Cost Data
- Rework Savings: ${COST_DATA.reworkSavings}
- Audit Success Target: ${COST_DATA.auditSuccessTarget}
- ${COST_DATA.integrationCost}

## Response Guidelines
1. Always reference specific scenarios (Scenario 1-8) when answering
2. Include AS9100 clause references when relevant
3. End responses with the relevant dashboard recommendation
4. Format source citation as: "Source: [Report Name], [Scenario/Section]"
5. When mentioning a dashboard, include its ID for navigation: [Dashboard Name](#dashboardId)
6. Be concise but comprehensive
7. Use bullet points for clarity
8. When discussing efficiency problems, provide Cost of Inaction calculations
9. When asked about data structure, provide SQL schema examples

## Response Format
Your response should follow this structure:
1. Direct answer with technical details
2. Relevant scenario reference
3. AS9100 clause connection (if applicable)
4. Dashboard recommendation with navigation link
5. Source citation

Example format:
"[Technical explanation]

İlgili dashboard: [Dashboard Name](#dashboardId)

Source: ARKUN-QMS-Report, Scenario X"`;
}

// Find relevant scenarios based on user query
export function findRelevantScenarios(query: string): ScenarioData[] {
    const normalizedQuery = query.toLowerCase();

    const relevantScenarios = SCENARIOS.filter(scenario => {
        const searchText = [
            scenario.title,
            scenario.titleTR,
            scenario.description,
            scenario.descriptionTR,
            scenario.dashboard,
            scenario.as9100Clause || '',
            ...scenario.keyBenefits
        ].join(' ').toLowerCase();

        return normalizedQuery.split(' ').some(word =>
            word.length > 2 && searchText.includes(word)
        );
    });

    return relevantScenarios;
}

// Extract dashboard reference from AI response
export function extractDashboardReference(response: string): { dashboardId: string; dashboardName: string } | null {
    const match = response.match(/\[([^\]]+)\]\(#([a-z0-9-]+)\)/);
    if (match) {
        return {
            dashboardName: match[1],
            dashboardId: match[2]
        };
    }
    return null;
}

export const LEGAL_EFFECTIVE_DATE = "May 26, 2026";
export const LEGAL_LAST_UPDATED = "May 26, 2026";
export const LEGAL_COMPANY_NAME = "Sharkship";
export const LEGAL_COMPANY_LEGAL = "Sharkship Technologies Pvt. Ltd.";
export const LEGAL_WEBSITE = "https://ewb.sharkship.in";
export const LEGAL_SUPPORT_EMAIL = "support@sharkship.in";

export type PolicyContentBlock = {
  heading: string;
  paragraphs: string[];
};

export type PolicySectionData = {
  id: string;
  title: string;
  content: PolicyContentBlock[];
};

export const policyMeta = {
  documentTitle:
    "Privacy Policy, Terms & Conditions and Cookie Policy",
  effectiveDate: LEGAL_EFFECTIVE_DATE,
  lastUpdated: LEGAL_LAST_UPDATED,
  website: LEGAL_WEBSITE,
  supportEmail: LEGAL_SUPPORT_EMAIL,
  companyLegal: LEGAL_COMPANY_LEGAL,
};

export const policyPreamble: string[] = [
  `This Privacy Policy, Terms & Conditions, and Cookie Policy ("Policy Framework") govern the access, use, operation, administration, and legal management of the Sharkship E-Way Bill Platform ("Platform"), operated by ${LEGAL_COMPANY_LEGAL} ("${LEGAL_COMPANY_NAME}", "Company", "we", "our", or "us").`,
  "The Platform has been developed specifically for GST-registered enterprises, transport operators, fleet owners, consignors, consignees, logistics stakeholders, and authorized commercial entities requiring secure, technology-enabled E-Way Bill management, workflow automation, compliance administration, and transport documentation support within the Indian GST ecosystem.",
  "This document is intended to establish a legally aligned operational framework governing the collection, processing, storage, use, disclosure, and protection of information associated with the use of Sharkship's E-Way Bill services, APIs, dashboards, integrations, and associated digital infrastructure.",
  "By accessing, registering, browsing, integrating, or using the Platform, users acknowledge that they have read, understood, and agreed to the terms set forth under this Policy Document.",
];

export const policySections: PolicySectionData[] = [
  {
    id: "privacy-policy",
    title: "SECTION I – PRIVACY POLICY",
    content: [
      {
        heading: "Introduction",
        paragraphs: [
          "Sharkship recognizes the importance of protecting business-sensitive information, operational shipment data, invoice-level transactional information, and user credentials associated with E-Way Bill generation and GST-related transport compliance activities.",
          "The Company is committed to maintaining commercially reasonable administrative, technical, organizational, and security safeguards to ensure that information processed through the Platform remains protected against unauthorized access, disclosure, alteration, misuse, or unlawful processing.",
          "This Privacy Policy describes the categories of information collected through the Platform, the purpose for which such information is processed, the legal and operational basis for such processing, and the rights and obligations applicable to users of the Platform.",
          "The Platform operates primarily as a technology intermediary facilitating E-Way Bill workflow automation, API-based integrations, transporter coordination, compliance reporting, and dashboard-based operational management.",
        ],
      },
      {
        heading: "Scope of the Platform",
        paragraphs: [
          "The Sharkship Platform is specifically designed for E-Way Bill and GST transportation compliance operations and includes services such as E-Way Bill generation, bulk EWB processing, transporter assignment, Part-A and Part-B update management, invoice synchronization, movement tracking, compliance alerts, validity management, operational dashboards, analytics, and API-enabled workflow automation.",
          "The Platform may additionally facilitate integrations with ERP systems, accounting software, transport management systems, government-authorized E-Way Bill APIs, GST systems, and enterprise workflow environments.",
          "The Company does not operate as a transporter, goods broker, consignor, consignee, customs authority, tax authority, or logistics carrier unless separately specified under an independent commercial agreement.",
        ],
      },
      {
        heading: "Information Collected",
        paragraphs: [
          "In the course of operating the Platform and delivering E-Way Bill related services, Sharkship may collect, process, store, transmit, and maintain various categories of information.",
          "Such information may include GST registration details, legal business names, trade names, billing addresses, state codes, transporter IDs, vehicle numbers, invoice references, product descriptions, HSN codes, invoice values, consignment details, movement documentation, transport routes, distance information, dispatch locations, delivery locations, validity timelines, and shipment movement records.",
          "The Company may additionally collect operational information associated with user access and authentication, including usernames, mobile numbers, email addresses, login credentials, IP addresses, browser information, device identifiers, session logs, audit records, system activity logs, API request logs, and user interaction analytics.",
          "Where integrations are enabled by the customer, the Platform may receive invoice-level information, shipment records, transporter details, accounting references, and GST workflow data from third-party ERP systems or enterprise software environments.",
          "The Company does not intentionally collect personal sensitive information unrelated to the operation of the E-Way Bill Platform.",
        ],
      },
      {
        heading: "Purpose of Data Processing",
        paragraphs: [
          "Information collected through the Platform is processed solely for legitimate business, operational, compliance, security, and technical purposes associated with E-Way Bill services.",
          "The Company may use collected information for E-Way Bill generation, transporter coordination, vehicle assignment updates, invoice synchronization, dashboard reporting, bulk EWB processing, compliance monitoring, system analytics, audit management, API integrations, customer support operations, fraud detection, technical troubleshooting, operational optimization, service improvement, account authentication, notification delivery, system monitoring, and regulatory compliance obligations.",
          "Information may additionally be processed to maintain platform security, prevent unauthorized activities, monitor suspicious behavior, investigate operational anomalies, and maintain service continuity.",
          "The Company does not sell customer operational data, GST information, or E-Way Bill transaction data to unrelated third parties.",
        ],
      },
      {
        heading: "Legal Basis for Processing",
        paragraphs: [
          "The Company processes information on the basis of contractual necessity, legitimate business interests, operational compliance requirements, customer-authorized integrations, regulatory obligations, and system security requirements.",
          "By using the Platform, the user authorizes the Company to process operational and transactional information required for the lawful functioning of E-Way Bill related workflows.",
          "Where legally required, users are responsible for obtaining necessary internal approvals, consents, or authorizations from their employees, vendors, transporters, contractors, or representatives before providing information through the Platform.",
        ],
      },
      {
        heading: "Data Sharing and Disclosure",
        paragraphs: [
          "Sharkship may disclose or transmit information only where operationally necessary for the delivery of E-Way Bill related services.",
          "Such disclosures may occur with GSTN systems, NIC E-Way Bill infrastructure, government-authorized APIs, cloud infrastructure providers, enterprise integration partners, cybersecurity vendors, technical support providers, legal advisors, regulatory authorities, or law enforcement agencies where disclosure is required under applicable law, legal process, judicial order, or governmental direction.",
          "The Company may additionally disclose information in connection with fraud prevention, security investigations, system abuse detection, operational incidents, legal claims, or enforcement of contractual rights.",
          "The Company does not commercially exploit, trade, lease, monetize, or resell customer shipment information, invoice data, transporter records, or E-Way Bill transaction information to unrelated third parties.",
        ],
      },
      {
        heading: "Data Security Framework",
        paragraphs: [
          "The Company maintains commercially reasonable technical and organizational safeguards intended to protect information processed through the Platform.",
          "Such measures may include encrypted communication channels, SSL-based security protocols, secure server infrastructure, role-based access management, account authentication controls, session management systems, firewall protections, audit logging, activity monitoring systems, data access restrictions, vulnerability monitoring, backup systems, and infrastructure-level security controls.",
          "Although the Company adopts commercially accepted security protocols and infrastructure safeguards, no electronic platform, cloud environment, communication network, or internet transmission mechanism can guarantee absolute operational security or uninterrupted protection against evolving cybersecurity risks.",
          "Users acknowledge and accept the inherent risks associated with internet-based data transmission and cloud infrastructure environments.",
        ],
      },
      {
        heading: "User Responsibilities",
        paragraphs: [
          "Users shall remain solely responsible for ensuring the accuracy, legality, completeness, authenticity, and regulatory validity of all invoices, GST records, transporter details, shipment information, and operational data submitted through the Platform.",
          "Users are responsible for maintaining the confidentiality of login credentials, passwords, OTP access, API tokens, integration credentials, and internal access permissions.",
          "Users shall ensure that transporter information, vehicle details, invoice data, GST records, and E-Way Bill information submitted through the Platform remain accurate and compliant with applicable laws.",
          "The Company shall not be liable for operational losses, penalties, shipment delays, tax disputes, compliance actions, or enforcement proceedings arising from incorrect, incomplete, misleading, unauthorized, or fraudulent information submitted by users.",
        ],
      },
      {
        heading: "Data Retention",
        paragraphs: [
          "The Company may retain operational records, audit logs, E-Way Bill transaction records, invoice references, API activity records, support communications, and associated operational information for periods considered necessary for compliance, audit management, operational continuity, dispute resolution, fraud prevention, regulatory obligations, legal defense, analytics, or customer support.",
          "Retention timelines may vary depending on applicable laws, contractual obligations, operational requirements, or government regulations.",
          "The Company reserves the right to retain anonymized or aggregated operational analytics data for internal business analysis and system improvement purposes.",
        ],
      },
      {
        heading: "Cross-System Integrations",
        paragraphs: [
          "The Platform may support integrations with ERP systems, transport management systems, accounting software, enterprise databases, API aggregators, and third-party workflow environments.",
          "Users acknowledge that external integrations may involve independent systems operated by third parties beyond the operational control of Sharkship.",
          "The Company shall not be liable for interruptions, delays, errors, data mismatches, API failures, synchronization failures, or operational disruptions arising from third-party software environments, government infrastructure, internet connectivity issues, or external integration dependencies.",
        ],
      },
      {
        heading: "Intellectual Property and Data Ownership",
        paragraphs: [
          `The Platform, including its software architecture, dashboards, APIs, user interfaces, reporting systems, workflow structures, operational logic, trademarks, branding elements, visual layouts, documentation, and proprietary technologies remain the exclusive intellectual property of ${LEGAL_COMPANY_LEGAL}.`,
          "Customers retain ownership over their underlying invoice data, GST information, and operational shipment records submitted through the Platform.",
          "Nothing under this Policy Document shall be interpreted as transferring ownership rights of the Platform or proprietary systems to users.",
        ],
      },
      {
        heading: "Limitation of Liability",
        paragraphs: [
          "The Platform functions strictly as a technology facilitation and workflow management system intended to support E-Way Bill processing, GST logistics compliance, operational coordination, and enterprise-level transportation documentation activities.",
          "The Company does not guarantee uninterrupted availability, error-free operation, continuous API functionality, government portal uptime, or uninterrupted access to third-party integrations.",
          "Sharkship shall not be liable for direct, indirect, incidental, consequential, regulatory, operational, commercial, or financial losses arising from government portal failures, GST system downtime, E-Way Bill rejection, shipment detention, incorrect user submissions, tax disputes, invoice mismatches, transporter disputes, internet failures, or unauthorized access caused by user negligence.",
          "To the maximum extent permitted under applicable law, the aggregate liability of the Company shall not exceed the fees paid by the customer for the specific services giving rise to the claim.",
        ],
      },
      {
        heading: "Policy Modifications",
        paragraphs: [
          "The Company reserves the right to amend, modify, update, revise, or replace this Privacy Policy periodically to reflect changes in operational practices, legal obligations, regulatory requirements, infrastructure architecture, or platform functionality.",
          "Updated versions shall become effective upon publication on the official Platform or website.",
          "Continued use of the Platform following publication of updated policies shall constitute acceptance of such revisions.",
        ],
      },
    ],
  },
  {
    id: "terms-conditions",
    title: "SECTION II – TERMS & CONDITIONS",
    content: [
      {
        heading: "Acceptance of Terms",
        paragraphs: [
          "These Terms & Conditions govern access to and use of the Sharkship E-Way Bill Platform.",
          "By registering, integrating, accessing, or using the Platform, the user agrees to be legally bound by these Terms.",
          "If a user does not agree with these Terms, such user must discontinue use of the Platform immediately.",
        ],
      },
      {
        heading: "Nature of Services",
        paragraphs: [
          "The Platform provides technology-enabled E-Way Bill workflow management solutions intended for GST-related logistics and transportation compliance activities.",
          "The Company's services may include E-Way Bill generation, transporter assignment, invoice synchronization, API integrations, movement tracking, dashboard reporting, compliance notifications, bulk EWB operations, analytics, and workflow automation.",
          "The Company does not independently verify the authenticity, commercial validity, ownership rights, tax accuracy, transporter credentials, shipment contents, invoice legitimacy, or regulatory correctness of user-provided information submitted through the Platform.",
          "The Company does not provide legal, taxation, accounting, or financial advisory services. Users are advised to independently consult qualified professionals regarding statutory compliance obligations, GST applicability, taxation matters, or regulatory interpretation requirements.",
        ],
      },
      {
        heading: "User Eligibility",
        paragraphs: [
          "Users accessing the Platform represent and warrant that they possess the legal authority, operational authorization, and lawful rights necessary to use the services.",
          "Users shall ensure that all registrations, GST credentials, transporter details, invoice records, and operational information submitted through the Platform remain accurate and legally compliant.",
          "Corporate users shall remain responsible for activities performed by their employees, contractors, agents, representatives, and authorized users operating under their accounts.",
        ],
      },
      {
        heading: "Account Registration and Security",
        paragraphs: [
          "Users may be required to create operational accounts, authenticate access credentials, verify mobile numbers, and configure organizational permissions.",
          "Users are solely responsible for safeguarding passwords, OTP access, authentication credentials, API keys, integration tokens, and access permissions.",
          "The Company reserves the right to suspend, restrict, investigate, or terminate accounts where unauthorized access, suspicious activities, misuse, security threats, or policy violations are detected.",
        ],
      },
      {
        heading: "Compliance Obligations",
        paragraphs: [
          "Users acknowledge that E-Way Bill generation and GST compliance activities are governed by applicable tax laws, transportation regulations, and governmental requirements.",
          "Users remain solely responsible for ensuring compliance with GST regulations, E-Way Bill rules, invoice accuracy, transporter compliance requirements, documentation obligations, and movement validity requirements.",
          "The Company acts solely as a technology platform provider and does not assume responsibility for user compliance failures.",
        ],
      },
      {
        heading: "Restrictions on Use",
        paragraphs: [
          "Users shall not engage in activities involving fraudulent invoice generation, unauthorized transporter usage, forged documentation, tax evasion practices, system abuse, credential misuse, API manipulation, unauthorized automation, cybersecurity attacks, data scraping, reverse engineering, or unlawful access attempts.",
          "Users shall not use the Platform for activities inconsistent with applicable laws, regulatory requirements, public policy, or governmental compliance frameworks.",
          "The Company reserves the right to investigate suspicious activities and cooperate with regulatory or law enforcement authorities where legally required.",
        ],
      },
      {
        heading: "Subscription and Commercial Terms",
        paragraphs: [
          "Certain services, integrations, dashboards, APIs, or enterprise workflows may operate on subscription-based pricing structures.",
          "Commercial pricing, feature access, usage limitations, integration capacity, support coverage, and billing structures may vary depending on customer plans, commercial agreements, or enterprise arrangements.",
          "Unless otherwise specified in writing, payments made to the Company shall remain non-refundable.",
          "The Company reserves the right to revise pricing structures, operational plans, or subscription features periodically.",
        ],
      },
      {
        heading: "Service Availability",
        paragraphs: [
          "The Company shall use commercially reasonable efforts to maintain operational availability of the Platform.",
          "However, uninterrupted availability cannot be guaranteed due to scheduled maintenance, infrastructure upgrades, cybersecurity incidents, external integration dependencies, internet failures, force majeure events, or government portal interruptions.",
          "Users acknowledge that services dependent upon GSTN systems, NIC infrastructure, government APIs, telecom networks, cloud infrastructure, or internet service providers may experience delays, interruptions, authentication failures, or temporary downtime beyond the operational control of the Company.",
        ],
      },
      {
        heading: "Suspension and Termination",
        paragraphs: [
          "The Company reserves the right to take temporary or permanent corrective actions where system abuse, unauthorized access attempts, suspicious API behavior, fraudulent invoice activity, regulatory non-compliance, payment defaults, infrastructure threats, cybersecurity incidents, or misuse of E-Way Bill workflows are identified.",
          "The Company reserves the right to suspend, restrict, disable, investigate, or terminate user access where fraud, misuse, policy violations, suspicious activities, cybersecurity risks, regulatory concerns, payment defaults, or operational threats are identified.",
          "Termination or suspension may occur without prior notice where immediate action is necessary to protect system integrity, infrastructure security, legal compliance, or operational continuity.",
        ],
      },
      {
        heading: "Disclaimer of Warranties",
        paragraphs: [
          'The Platform, APIs, integrations, operational dashboards, and associated digital services are provided strictly on an "as-is" and "as-available" basis without any representation of uninterrupted availability or guaranteed operational continuity.',
          "The Company disclaims all warranties, representations, and guarantees, whether express, implied, statutory, or otherwise, including warranties relating to uninterrupted availability, merchantability, fitness for a particular purpose, non-infringement, operational continuity, data accuracy, or error-free functionality.",
          "Users acknowledge and agree that operational reliance on the Platform, including automated workflows, API-based integrations, and external system dependencies, shall remain at the user's independent commercial and compliance risk.",
        ],
      },
      {
        heading: "Indemnification",
        paragraphs: [
          `Users agree to indemnify, defend, and hold harmless ${LEGAL_COMPANY_LEGAL}, its directors, officers, employees, affiliates, consultants, infrastructure providers, and representatives against claims, liabilities, losses, penalties, damages, expenses, or legal proceedings arising from user misconduct, regulatory violations, fraudulent activities, data misuse, compliance failures, or unauthorized platform usage.`,
        ],
      },
      {
        heading: "Governing Law and Jurisdiction",
        paragraphs: [
          "These Terms shall be interpreted and enforced in accordance with the laws of India.",
          "Any dispute arising from or relating to the Platform, services, policies, commercial arrangements, or operational usage shall be subject to the exclusive jurisdiction of the competent courts located in Delhi, India.",
        ],
      },
      {
        heading: "Force Majeure",
        paragraphs: [
          "The Company shall not be held responsible for delays, interruptions, service failures, data transmission issues, operational disruptions, or inability to perform obligations resulting from events beyond reasonable control, including government restrictions, GSTN outages, NIC system downtime, cyber incidents, natural disasters, telecom failures, internet outages, infrastructure failures, labor disputes, regulatory changes, power disruptions, or force majeure events.",
        ],
      },
      {
        heading: "Grievance and Compliance Contact",
        paragraphs: [
          "Users may contact the designated compliance or grievance support team for concerns relating to data handling, account access, operational disputes, policy interpretation, or platform-related grievances.",
          `Official Website: ${LEGAL_WEBSITE}`,
          `Official Support Email: ${LEGAL_SUPPORT_EMAIL}`,
        ],
      },
    ],
  },
  {
    id: "cookie-policy",
    title: "SECTION III – COOKIE POLICY",
    content: [
      {
        heading: "Introduction to Cookies",
        paragraphs: [
          "The Sharkship Platform may use cookies, session identifiers, local storage technologies, analytics scripts, and related tracking mechanisms to support authentication, operational continuity, system optimization, security management, and user experience enhancement.",
          "Cookies are small data files stored on user devices that assist in maintaining session continuity, remembering operational preferences, monitoring system performance, and improving platform functionality.",
        ],
      },
      {
        heading: "Operational Use of Cookies",
        paragraphs: [
          "Cookies and related technologies may be used to maintain authenticated sessions, prevent unauthorized access, monitor user activity, analyze traffic patterns, improve dashboard performance, optimize system responsiveness, maintain operational continuity, and support infrastructure security.",
          "The Company may additionally use cookies for analytics, troubleshooting, infrastructure diagnostics, feature optimization, and fraud prevention activities.",
        ],
      },
      {
        heading: "Third-Party Technologies",
        paragraphs: [
          "Certain analytics tools, infrastructure services, monitoring systems, cloud providers, or embedded integrations may independently utilize cookies or related tracking technologies.",
          "Such third-party technologies remain governed by their respective policies and operational frameworks.",
          "The Company does not exercise direct operational control over third-party cookie policies.",
        ],
      },
      {
        heading: "Cookie Controls",
        paragraphs: [
          "Users may configure browser settings to reject, disable, restrict, or delete cookies.",
          "However, disabling cookies may affect authentication continuity, dashboard functionality, operational workflows, session management, or overall platform performance.",
          "By continuing to browse, access, or use the Platform, users consent to the use of cookies and related technologies in accordance with this Cookie Policy unless restricted through browser or device settings.",
        ],
      },
    ],
  },
  {
    id: "general-provisions",
    title: "SECTION IV – GENERAL PROVISIONS",
    content: [
      {
        heading: "Severability",
        paragraphs: [
          "If any provision under this Policy Document is determined to be invalid, unlawful, unenforceable, or inconsistent with applicable law, the remaining provisions shall continue in full force and effect.",
        ],
      },
      {
        heading: "Entire Agreement",
        paragraphs: [
          "This Policy Document constitutes the complete understanding between the Company and users regarding the use of the Platform unless supplemented by separate enterprise agreements, commercial contracts, API agreements, or written service arrangements.",
        ],
      },
      {
        heading: "Contact Information",
        paragraphs: [
          `For legal, compliance, operational, customer support, grievance handling, policy-related communication, or regulatory coordination associated with the Sharkship E-Way Bill Platform, users may contact:`,
          LEGAL_COMPANY_LEGAL,
          `Email: ${LEGAL_SUPPORT_EMAIL}`,
          `For operational support, legal communication, compliance coordination, or policy-related inquiries associated with the Sharkship E-Way Bill Platform, users may contact the Company through the official communication channels mentioned above. The official E-Way Bill platform is accessible through ${LEGAL_WEBSITE}.`,
          `Website: ${LEGAL_WEBSITE}`,
        ],
      },
      {
        heading: "Final Acknowledgement",
        paragraphs: [
          "This Policy Framework has been prepared to establish a legally aligned, operationally structured, and compliance-oriented governance mechanism for the use of the Sharkship E-Way Bill Platform.",
          "The document is intended to support enterprise onboarding, commercial deployment, operational transparency, GST workflow governance, and responsible handling of E-Way Bill related business information.",
          "By accessing, registering, integrating, browsing, or continuing to use the Sharkship E-Way Bill Platform, users expressly acknowledge that they have reviewed, understood, and accepted this Privacy Policy, Terms & Conditions, and Cookie Policy in their entirety.",
          "Users further acknowledge that the Platform functions as a technology-enabled E-Way Bill workflow management system intended to facilitate GST transportation documentation, shipment movement coordination, invoice-linked compliance processing, and related enterprise workflow activities.",
          "Continued access to or use of the Platform shall constitute ongoing acceptance of all legal obligations, operational responsibilities, compliance requirements, and contractual conditions contained within this Policy Framework.",
          "The user further acknowledges that continued use of the Platform constitutes ongoing acceptance of all operational, legal, compliance, and contractual obligations contained herein.",
        ],
      },
    ],
  },
];

export const policyTocItems = policySections.map((section) => ({
  id: section.id,
  title: section.title,
}));

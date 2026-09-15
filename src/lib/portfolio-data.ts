export type Project = {
  slug: string;
  index: string;
  category: string;
  title: string;
  summary: string;
  intro: string;
  stats: Array<{ value: string; label: string }>;
  sections: Array<{ title: string; body?: string; items?: string[] }>;
  tags: string[];
  repository?: string;
  note: string;
};

export const projects: Project[] = [
  {
    slug: "pesapal-payment-integration",
    index: "01",
    category: "Payment engineering",
    title: "Pesapal payment integration",
    summary: "Resilient transaction middleware for initialization, verification, duplicate-safe webhooks and auditable reconciliation.",
    intro: "An independent payment engineering build designed around the failures that matter: repeated events, uncertain network outcomes and transaction state that remains explainable after an incident.",
    stats: [
      { value: "End-to-end", label: "transaction lifecycle" },
      { value: "Safe", label: "duplicate-event handling" },
      { value: "Audited", label: "every state change" },
    ],
    sections: [
      { title: "The problem", body: "Payment integrations fail in ordinary but costly ways: a timeout follows a successful charge, a webhook arrives twice, or a retry repeats work that was already completed. This integration treats those conditions as the main engineering problem rather than an afterthought." },
      { title: "What I built", items: ["Transaction initialization and provider-side verification", "Webhook processing with duplicate-event protection", "Idempotent write operations and controlled retry behavior", "An explicit transaction lifecycle instead of relying on event order", "Secure secret handling and an audit trail for every state transition", "Reconciliation between initiated, reported and verified payment states"] },
      { title: "How it was validated", body: "API tests exercised the happy path, repeated event delivery and failed requests to confirm that retries do not create duplicate work and transaction history remains auditable." },
    ],
    tags: ["Pesapal API", "Webhooks", "Idempotency", "Postman"],
    repository: "https://github.com/wilsonnjoroge/pesapalpayment",
    note: "Independent payment engineering project.",
  },
  {
    slug: "mpesa-daraja-integration",
    index: "02",
    category: "Payment engineering",
    title: "M-Pesa Daraja integration",
    summary: "OAuth-secured STK Push with callback correlation, visible transaction state and mismatch reconciliation.",
    intro: "A Kenya-relevant fintech integration built for the way Daraja behaves in practice: asynchronous, callback-driven and unforgiving of weak state handling.",
    stats: [
      { value: "STK", label: "push initiation" },
      { value: "1:1", label: "callback correlation" },
      { value: "OAuth", label: "secured access" },
    ],
    sections: [
      { title: "The problem", body: "Daraja accepts an STK Push request, then reports the outcome to a callback URL later — sometimes delayed and sometimes not at all. An integration that assumes a clean request-and-response cycle can silently lose transaction state." },
      { title: "What I built", items: ["OAuth authentication against the Daraja API", "Customer-facing STK Push initiation", "Callback handling correlated one-to-one with the originating transaction", "Explicit state tracking so delayed or missing callbacks remain visible", "Retry and error handling tuned for asynchronous payment failure modes", "Reconciliation for mismatches between initiated and confirmed transactions", "Protected credentials and structured API audit logging"] },
      { title: "How it was validated", body: "API tests drove the complete flow — initiation, successful callback, delayed callback and failure — to confirm that the transaction state remains consistent under asynchronous behavior." },
    ],
    tags: ["Daraja API", "STK Push", "OAuth", "Reconciliation"],
    repository: "https://github.com/wilsonnjoroge/MPesaStkPush-Jv",
    note: "Independent payment engineering project for the Kenyan market.",
  },
  {
    slug: "stripe-payment-integration",
    index: "03",
    category: "Payment engineering",
    title: "Stripe payment integration",
    summary: "Checkout and Payment Intents middleware with verified events, retry-safe operations and reconciled status tracking.",
    intro: "A resilient Stripe integration that keeps the application’s payment record aligned with verified provider events.",
    stats: [
      { value: "2", label: "payment flows" },
      { value: "Verified", label: "webhook events" },
      { value: "Safe", label: "retry handling" },
    ],
    sections: [
      { title: "The problem", body: "A browser redirect is a user-experience signal, not proof that a payment succeeded. Reliable transaction state must come from verified server-side events and remain safe when requests or events are retried." },
      { title: "What I built", items: ["Stripe Checkout and Payment Intents flows", "Signature-verified webhook processing and transaction verification", "Idempotent payment operations for retry safety", "Secure API-key handling outside source control", "Explicit payment status tracking across customer and provider events", "Reconciliation that keeps the application record aligned with Stripe"] },
      { title: "Engineering focus", body: "The implementation separates customer experience from payment truth: redirects inform the user, while verified events update the transaction record." },
    ],
    tags: ["Stripe API", "Payment Intents", "Webhooks", "Reconciliation"],
    repository: "https://github.com/wilsonnjoroge",
    note: "Independent payment engineering project.",
  },
  {
    slug: "aws-cloud-security-dfir",
    index: "04",
    category: "Security & infrastructure",
    title: "AWS cloud security & DFIR",
    summary: "A least-privilege AWS environment with continuous monitoring, reproducible controls and forensic readiness.",
    intro: "A cloud environment built the way a security engineer would want to inherit one: least-privilege by default, observable from day one and reproducible through code.",
    stats: [
      { value: "IAM", label: "least privilege" },
      { value: "100%", label: "Terraform defined" },
      { value: "EBS", label: "forensic workflow" },
    ],
    sections: [
      { title: "The problem", body: "Many cloud security failures begin with an over-permissioned role, an exposed resource or a compromised instance with no evidence preserved for investigation. This build makes prevention, visibility and incident response part of the original architecture." },
      { title: "What it covers", items: ["Least-privilege IAM and segmented VPC design", "Hardened EC2 and S3 configuration", "Systems Manager access instead of exposed SSH", "CloudTrail, CloudWatch, GuardDuty, Security Hub and Config", "WAF, KMS and Secrets Manager", "Terraform-managed infrastructure"] },
      { title: "Incident response flow", items: ["Detect anomalous behavior through GuardDuty", "Isolate the instance without destroying evidence", "Preserve an EBS snapshot", "Mount evidence read-only for analysis", "Document findings and rebuild cleanly through Terraform"] },
    ],
    tags: ["AWS", "IAM", "GuardDuty", "Terraform", "DFIR"],
    repository: "https://github.com/wilsonnjoroge/cloud-security",
    note: "Flagship cloud security and digital forensics project.",
  },
  {
    slug: "wazuh-suricata-soc",
    index: "05",
    category: "Security & infrastructure",
    title: "Wazuh + Suricata SOC",
    summary: "Host and network telemetry correlated through tuned detections mapped to MITRE ATT&CK.",
    intro: "A compact but complete detection pipeline: host telemetry, network telemetry and custom correlation rules, validated by generating controlled attack traffic and confirming the right alerts fire.",
    stats: [
      { value: "2", label: "telemetry sources" },
      { value: "3", label: "attack types tested" },
      { value: "ATT&CK", label: "mapped detections" },
    ],
    sections: [
      { title: "The problem", body: "A SIEM full of default rules generates noise rather than useful detections. This lab combines Wazuh and Suricata, then builds and tunes focused rules against observed host and network activity instead of trusting defaults." },
      { title: "What it covers", items: ["Wazuh telemetry from Linux, Windows and services", "Suricata network alerts", "Custom detection rules tuned against real log data", "Host and network correlation", "MITRE ATT&CK mapping"] },
      { title: "Detections validated", items: ["SSH brute-force attempts correlated by source", "SQL injection attempts flagged through network signatures", "Reconnaissance scanning detected across hosts"] },
    ],
    tags: ["Wazuh", "Suricata", "SIEM", "MITRE ATT&CK"],
    repository: "https://github.com/wilsonnjoroge/soc-detection-lab",
    note: "Isolated detection engineering lab.",
  },
  {
    slug: "metasploitable-vapt",
    index: "06",
    category: "Security & infrastructure",
    title: "Metasploitable2 VAPT",
    summary: "A structured assessment of 23 services combining discovery, manual validation, attack-path analysis and risk reporting.",
    intro: "A full vulnerability assessment delivered the way it would be for a client: scoped, tooled, manually verified and reported for both executive and technical readers.",
    stats: [
      { value: "23", label: "services assessed" },
      { value: "47", label: "findings identified" },
      { value: "14", label: "critical findings" },
    ],
    sections: [
      { title: "The problem", body: "Automated scanners identify possibilities but confirm very little on their own. This assessment used scanner output as a starting point, then manually verified findings and connected them into attack paths — the difference between a vulnerability list and a practical risk picture." },
      { title: "Methodology", items: ["Service discovery with Nmap and NSE", "Scanning with OpenVAS/GVM, Nessus and Nikto", "Manual confirmation and false-positive review", "CVE analysis and attack-chain mapping", "P0–P3 remediation roadmap"] },
      { title: "Reporting", body: "The work produced an executive report translating findings into business risk and a technical report with evidence, references and reproduction detail." },
    ],
    tags: ["Nmap", "OpenVAS", "Nessus", "CVE analysis"],
    repository: "https://github.com/wilsonnjoroge",
    note: "Assessment performed in a deliberately vulnerable lab.",
  },
  {
    slug: "enterprise-middleware-security",
    index: "07",
    category: "Security & infrastructure",
    title: "Enterprise middleware security",
    summary: "Production WebLogic and SOA governance, hardening, monitoring and incident response in a Tier-1 banking environment.",
    intro: "Real, ongoing production responsibility inside a banking environment, described at the method level and within a strict confidentiality boundary.",
    stats: [
      { value: "100+", label: "services managed" },
      { value: "Live", label: "banking environment" },
      { value: "60%", label: "reporting effort reduced" },
    ],
    sections: [
      { title: "Scope of responsibility", items: ["Oracle WebLogic and SOA Suite administration", "REST and SOAP service governance", "Access-control hardening and patch remediation", "Java, Log4j and TLS vulnerability remediation", "Anomaly monitoring and incident coordination", "Compliance reporting automation"] },
      { title: "Why this case study is different", body: "The independent projects and isolated labs demonstrate a capability by exposing the implementation. This work operates in a live banking environment, so the detail is intentionally limited: the goal is to show the scope of responsibility without exposing internal systems." },
      { title: "Selected delivery", body: "Work includes the Finacle separation project for in-country operations and a TransUnion integration to DFS and APIM through SOA, currently in UAT." },
      { title: "Confidentiality boundary", body: "No customer data, credentials, internal hostnames, private architecture or restricted banking information is included. This case study describes methods and responsibilities, not internal systems." },
    ],
    tags: ["WebLogic", "SOA Suite", "REST/SOAP", "Security governance"],
    note: "Live enterprise experience at Equity Group Holdings.",
  },
];

export const contact = {
  email: "wilsonnjoroge932@gmail.com",
  github: "https://github.com/wilsonnjoroge",
  linkedin: "https://www.linkedin.com/in/wilson-njoroge-wanderi-ccep-cc-kcna-itil%C2%AE4-33b615166/",
};

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
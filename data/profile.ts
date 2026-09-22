export interface StatItem {
  label: string;
  value: string;
  subtext: string;
}

export interface TechnicalSkill {
  name: string;
  category: "Core Tools" | "Growing Skills";
  iconName: "FileSpreadsheet" | "Database" | "BarChart3" | "Code2";
  color: string;
  bgLight: string;
  topics: string[];
  summary: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  boardOrStream?: string;
  period: string;
  score: string;
  scoreType: "CGPA" | "Percentage";
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  institution: string;
  period: string;
  status: string;
  description: string;
  keyOutcomes: string[];
  toolsCovered: string[];
}

export interface FocusArea {
  id: string;
  title: string;
  toolPill: string;
  description: string;
  iconName: "Sparkles" | "Database" | "LayoutDashboard" | "FileSpreadsheet" | "TrendingUp";
  keyActivities: string[];
}

export interface StrengthItem {
  title: string;
  description: string;
  iconName: "Zap" | "Languages" | "ShieldCheck" | "Users2";
}

export interface ProfileData {
  personal: {
    name: string;
    role: string;
    badge: string;
    location: string;
    email: string;
    phone: string;
    phoneFormatted: string;
    github: string;
    githubUsername: string;
    resumeUrl: string;
    bio: string;
    careerObjective: string;
  };
  stats: StatItem[];
  technicalSkills: TechnicalSkill[];
  softSkills: string[];
  languages: { name: string; level: string; flag?: string }[];
  education: EducationItem[];
  certification: CertificationItem;
  focusAreas: FocusArea[];
  strengths: StrengthItem[];
  navLinks: { name: string; href: string }[];
}

export const profileData: ProfileData = {
  personal: {
    name: "Himani Bisht",
    role: "Data Analyst",
    badge: "Entry-Level / Fresher",
    location: "Chandigarh, India",
    email: "bishthimani2005@gmail.com",
    phone: "+91 7078807803",
    phoneFormatted: "+91 7078807803",
    github: "https://github.com/bishthimani2005-sketch",
    githubUsername: "bishthimani2005-sketch",
    resumeUrl: "/himani-bisht-resume.pdf",
    bio: "A detail-oriented, analytically minded Data Analyst fresher with a strong academic foundation in Science and specialized training in Data Analytics. Passionate about uncovering patterns in complex datasets and converting raw numbers into clear, actionable business intelligence.",
    careerObjective:
      "To leverage analytical skills, hands-on proficiency in Excel, SQL, Power BI, and Python, and a disciplined approach to help organizations make confident, data-informed business decisions.",
  },
  stats: [
    {
      value: "CBITSS",
      label: "Certified Analyst",
      subtext: "Sept 2025 – April 2026 Course",
    },
    {
      value: "4",
      label: "Core Tools",
      subtext: "Excel, SQL, Power BI & Python",
    },
    {
      value: "B.Sc.",
      label: "Graduate Degree",
      subtext: "Science Foundation (2022–2025)",
    },
    {
      value: "100%",
      label: "Data Integrity",
      subtext: "Numbers-forward & verified profile",
    },
  ],
  technicalSkills: [
    {
      name: "Microsoft Excel",
      category: "Core Tools",
      iconName: "FileSpreadsheet",
      color: "text-emerald-700 dark:text-emerald-400 border-emerald-500/30",
      bgLight: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
      summary: "Dynamic modeling, nested logic, and automated pivot reporting.",
      topics: [
        "Pivot Tables & Pivot Charts",
        "VLOOKUP & XLOOKUP",
        "Statistical & Logical Formulas",
        "Interactive Dashboards & Slicers",
        "Data Validation & Conditional Formatting",
      ],
    },
    {
      name: "SQL",
      category: "Core Tools",
      iconName: "Database",
      color: "text-sky-700 dark:text-sky-400 border-sky-500/30",
      bgLight: "bg-sky-500/10 text-sky-700 dark:text-sky-300",
      summary: "Relational data querying, complex multi-table joins, and aggregation.",
      topics: [
        "Complex SELECT & Filtering",
        "INNER / LEFT / RIGHT / FULL Joins",
        "GROUP BY & Aggregate Metrics",
        "Subqueries & CTE Foundations",
        "Data Extraction & Hygiene",
      ],
    },
    {
      name: "Power BI",
      category: "Core Tools",
      iconName: "BarChart3",
      color: "text-amber-700 dark:text-amber-400 border-amber-500/30",
      bgLight: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
      summary: "Visual business dashboards, dimensional modeling, and executive KPI reporting.",
      topics: [
        "Data Modeling & Relationships",
        "Calculated Columns & Basic DAX",
        "Interactive Cross-Filtering Dashboards",
        "KPI Cards & Trend Visualizations",
        "Power Query ETL Transformations",
      ],
    },
    {
      name: "Python",
      category: "Growing Skills",
      iconName: "Code2",
      color: "text-cyan-700 dark:text-cyan-400 border-cyan-500/30",
      bgLight: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
      summary: "Exploratory data analysis, programmatic tabular manipulations, and data wrangling.",
      topics: [
        "Pandas DataFrames & Series",
        "Handling Nulls & Data Cleaning",
        "Data Filtering, Grouping & Sorting",
        "Data Analysis Fundamentals",
        "NumPy Numerical Basics",
      ],
    },
  ],
  softSkills: [
    "Critical Thinking",
    "Analytical Problem Solving",
    "High Attention to Detail",
    "Team Collaboration",
    "Active Listening",
    "Time Management & Discipline",
    "Curiosity & Quick Adaptability",
  ],
  languages: [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Hindi", level: "Native / Bilingual Proficiency" },
  ],
  education: [
    {
      degree: "Bachelor of Science (B.Sc.)",
      institution: "Undergraduate Degree",
      boardOrStream: "Science Stream",
      period: "2022 – 2025",
      score: "5.9 CGPA",
      scoreType: "CGPA",
      highlights: [
        "Rigorous 3-year scientific foundation developing analytical reasoning and quantitative problem formulation.",
        "Synthesized lab data, structured experimental observations, and mathematical logic.",
      ],
    },
    {
      degree: "Senior Secondary (12th Standard)",
      institution: "Uttarakhand Board",
      boardOrStream: "Science Stream",
      period: "Completed",
      score: "81%",
      scoreType: "Percentage",
      highlights: [
        "Strong performance in Mathematics, Physics, and Chemistry.",
        "Demonstrated disciplined academic focus and numerical literacy.",
      ],
    },
    {
      degree: "Secondary School (10th Standard)",
      institution: "Uttarakhand Board",
      period: "Completed",
      score: "69%",
      scoreType: "Percentage",
      highlights: [
        "Solid grounding in core science, mathematics, and bilingual communication.",
      ],
    },
  ],
  certification: {
    title: "Data Analytics Certification Course",
    institution: "CBITSS Technologies",
    period: "Sept 2025 – April 2026",
    status: "Specialized Training",
    description:
      "Comprehensive, industry-focused certification program delivering hands-on analytical competencies across data processing, query optimization, visualization, and strategic business interpretation.",
    keyOutcomes: [
      "Hands-on end-to-end practical training in Microsoft Excel, SQL, Power BI, and Python.",
      "In-depth mastery of data cleaning, outlier handling, and data normalization.",
      "Executive dashboard creation and automated reporting for decision-makers.",
      "Business data interpretation: turning raw database tables into commercial insight.",
    ],
    toolsCovered: ["Microsoft Excel", "SQL Server / MySQL", "Power BI Desktop", "Python (Pandas)"],
  },
  focusAreas: [
    {
      id: "cleaning",
      title: "Data Cleaning & Preparation",
      toolPill: "Excel & Python",
      iconName: "Sparkles",
      description:
        "Standardizing raw, inconsistent datasets by addressing null values, duplicate records, mismatched types, and outlier anomalies to ensure reliable downstream analysis.",
      keyActivities: [
        "Missing value imputation & format normalization",
        "Removing duplicates and error tracking",
        "Text parsing and structured data restructuring",
      ],
    },
    {
      id: "sql",
      title: "SQL Querying & Joins",
      toolPill: "Relational Databases",
      iconName: "Database",
      description:
        "Authoring efficient SQL queries to extract, slice, join, and aggregate records across multiple relational tables with clear logic and precision.",
      keyActivities: [
        "Multi-table relational joins & filtering",
        "Summary metrics via GROUP BY and HAVING",
        "Writing clean, readable, modular queries",
      ],
    },
    {
      id: "powerbi",
      title: "Power BI Dashboards & Visuals",
      toolPill: "BI & DAX",
      iconName: "LayoutDashboard",
      description:
        "Translating complex business metrics into intuitive visual reports with interconnected charts, drill-downs, and actionable executive summaries.",
      keyActivities: [
        "Star-schema data model structuring",
        "DAX calculations for business indicators",
        "Interactive slicers, cross-filtering, and KPI cards",
      ],
    },
    {
      id: "excel",
      title: "Excel Analysis & Pivot Modeling",
      toolPill: "Spreadsheets",
      iconName: "FileSpreadsheet",
      description:
        "Utilizing advanced spreadsheet features for rapid ad-hoc calculations, multi-criteria lookups, dynamic pivot tables, and visual tracking.",
      keyActivities: [
        "VLOOKUP, XLOOKUP & INDEX-MATCH logic",
        "Dynamic pivot summaries & custom grouping",
        "Conditional formatting for anomaly detection",
      ],
    },
    {
      id: "reporting",
      title: "Data Analysis & Business Reporting",
      toolPill: "Insight Delivery",
      iconName: "TrendingUp",
      description:
        "Connecting data trends directly to business questions, summarizing quantitative findings, and presenting clear insights to stakeholders.",
      keyActivities: [
        "Translating data queries into executive answers",
        "Drafting clear quantitative summaries",
        "Focus on accuracy, integrity, and credibility",
      ],
    },
  ],
  strengths: [
    {
      title: "Quick Learner & Adaptable",
      description: "Fast to grasp new analytical tools, syntax, and workflows with curiosity and enthusiasm.",
      iconName: "Zap",
    },
    {
      title: "Bilingual Communicator",
      description: "Fluent in English and Hindi, enabling clear collaboration with diverse stakeholders.",
      iconName: "Languages",
    },
    {
      title: "Disciplined & Detail-Oriented",
      description: "Rigorous attention to numeric accuracy, data consistency, and thorough verification.",
      iconName: "ShieldCheck",
    },
    {
      title: "Collaborative Team Player",
      description: "Equally comfortable working independently on focused analysis or pairing with teams.",
      iconName: "Users2",
    },
  ],
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Certification", href: "#certification" },
    { name: "Focus Areas", href: "#focus" },
    { name: "Contact", href: "#contact" },
  ],
};

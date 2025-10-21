import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  // Internship Experience - Skin Seoul
  {
    id: "skin-seoul",
    companyName: "Skin Seoul",
    companyLogo: "/images/companies/skinseoul-logo.webp", // Replace with actual company logo (200x200px recommended)
    positions: [
      {
        id: "ai-agent-intern",
        title: "AI Agent Innovations Intern",
        employmentPeriod: {
          start: "07.2025",
          end: "09.2025",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Automated 20+ API integrations and optimized AI agent workflows on n8n, reducing manual tasks by 40%
- Collaborated with cross-functional teams to deliver automated solutions, saving teams 15+ hours per week
- Analyzed and improved agent performance using real data, increasing workflow success rate to 98%
- Built intelligent automation systems for e-commerce operations integrating WooCommerce, Klaviyo, and Google Sheets
- Developed custom TypeScript code nodes for complex workflow logic and data processing
- Implemented multi-currency support (SGD, AED, JPY) and order processing pipelines
- Created automated PIC assignment and notification systems for logistics coordination`,
        skills: [
          "n8n",
          "TypeScript",
          "Python",
          "API Integration",
          "Workflow Automation",
          "WooCommerce",
          "Klaviyo",
          "Google Sheets API",
          "REST APIs",
          "Problem Solving",
          "Cross-Team Collaboration",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },

  // Volunteer Work - LPU NSS
  {
    id: "lpu-nss",
    companyName: "National Service Scheme (NSS) - LPU",
    companyLogo: "/images/companies/lpu-nss-logo.webp",
    positions: [
      {
        id: "nss-volunteer",
        title: "NSS Volunteer",
        employmentPeriod: {
          start: "08.2024",
        
        },
        employmentType: "Volunteer",
        icon: "idea",
        description: "Active member of LPU's NSS community working for social welfare and community development.",
        skills: ["Community Service", "Leadership"],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },
];

// Add more experiences as needed following the same pattern
// You can include:
// - Freelance work
// - Internships
// - Side projects
// - Volunteer work
// - Additional education/certifications
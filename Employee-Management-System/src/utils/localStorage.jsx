const employees = [
  {
    id: 1,
    email: "john.doe1@company.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Monthly Report",
        description: "Compile and submit the monthly performance report to management.",
        date: "2026-10-01",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Client Onboarding Call",
        description: "Conduct onboarding call with new client Acme Corp.",
        date: "2026-10-05",
        category: "Client Management",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update CRM Records",
        description: "Update all contact details and notes in the CRM system.",
        date: "2026-09-28",
        category: "Data Entry",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 2,
    email: "john.doe2@company.com",
    password: "123",
    tasks: [
      {
        title: "Design Landing Page",
        description: "Create a new landing page mockup for the product launch.",
        date: "2026-10-03",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Team Sync Meeting",
        description: "Attend weekly design team sync and share progress.",
        date: "2026-10-02",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix UI Bugs",
        description: "Resolve reported UI bugs in the dashboard module.",
        date: "2026-09-30",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Create Style Guide",
        description: "Draft a comprehensive style guide for the design system.",
        date: "2026-10-07",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    email: "john.doe3@company.com",
    password: "123",
    tasks: [
      {
        title: "Server Maintenance",
        description: "Perform scheduled maintenance on production servers.",
        date: "2026-10-04",
        category: "Infrastructure",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Security Audit",
        description: "Run a full security audit on internal systems.",
        date: "2026-10-06",
        category: "Security",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Backup Verification",
        description: "Verify daily backups and ensure restore points are valid.",
        date: "2026-09-29",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Deploy Patch v2.4.1",
        description: "Deploy the latest security patch to all environments.",
        date: "2026-10-08",
        category: "Deployment",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Monitor System Logs",
        description: "Review system logs for any anomalies or errors.",
        date: "2026-09-27",
        category: "Monitoring",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    email: "john.doe4@company.com",
    password: "123",
    tasks: [
      {
        title: "Recruit New Intern",
        description: "Screen resumes and schedule interviews for intern position.",
        date: "2026-10-02",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Payroll Processing",
        description: "Process monthly payroll for all employees.",
        date: "2026-10-01",
        category: "Finance",
        active: true,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Employee Training Session",
        description: "Organize and conduct compliance training for staff.",
        date: "2026-10-05",
        category: "Training",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    email: "john.doe@company.com",
    password: "123",
    tasks: [
      {
        title: "Write Blog Post",
        description: "Draft a blog post on industry trends for October.",
        date: "2026-10-03",
        category: "Content",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "SEO Optimization",
        description: "Optimize website pages for target keywords.",
        date: "2026-09-30",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Social Media Campaign",
        description: "Launch and manage the October social media campaign.",
        date: "2026-10-06",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Email Newsletter",
        description: "Design and send the monthly newsletter to subscribers.",
        date: "2026-10-04",
        category: "Email",
        active: true,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Competitor Analysis",
        description: "Research and document competitor marketing strategies.",
        date: "2026-10-07",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update Website Content",
        description: "Refresh outdated content on the company website.",
        date: "2026-09-26",
        category: "Content",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  }
];



const admin = [
  {
    id: 6,
    email: "john.doe@company.com",
    password: "123"
  }
];



export const getDataInLocalStorage = ()=>{
   JSON.parse(localStorage.getItem("employee"))
}

export const setDataInLocalStorage = ()=>{
    localStorage.setItem("employee", JSON.stringify(employees))
}
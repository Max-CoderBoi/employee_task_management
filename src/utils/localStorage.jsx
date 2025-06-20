
// const employees = [
//     {
//       id: 1,
//       firstName: "Arjun",
//       email: "e@e.com",
//       password: "123",
//       taskCounts: {
//         active: 3,
//         newTask: 2,
//         completed: 1,
//         failed: 0
//       },
//       tasks: [
//         {
//           active: true,
//           newTask: true,
//           completed: false,
//           failed: false,
//           taskTitle: "Update website",
//           taskDescription: "Revamp the homepage design to improve user navigation and branding. Ensure responsiveness and cross-browser compatibility.",
//           taskDate: "2024-10-12",
//           category: "Design"
//         },
//         {
//           active: false,
//           newTask: false,
//           completed: true,
//           failed: false,
//           taskTitle: "Client meeting",
//           taskDescription: "Discuss project requirements and deadlines with the client to align goals and deliverables. Prepare agenda beforehand.",
//           taskDate: "2024-10-10",
//           category: "Meeting"
//         },
//         {
//           active: true,
//           newTask: false,
//           completed: false,
//           failed: false,
//           taskTitle: "Fix bugs",
//           taskDescription: "Resolve all critical bugs listed in the issue tracker, focusing on UI glitches and API inconsistencies found in testing.",
//           taskDate: "2024-10-14",
//           category: "Development"
//         },
//         {
//           active: true,
//           newTask: true,
//           completed: false,
//           failed: false,
//           taskTitle: "Create landing page",
//           taskDescription: "Design and implement a visually appealing landing page for the new campaign, incorporating the marketing team's content strategy.",
//           taskDate: "2024-10-15",
//           category: "Design"
//         }
//       ]
//     },
//     {
//       id: 2,
//       firstName: "Sneha",
//       email: "employee2@example.com",
//       password: "123",
//       taskCounts: {
//         active: 2,
//         newTask: 1,
//         completed: 1,
//         failed: 0
//       },
//       tasks: [
//         {
//           active: true,
//           newTask: false,
//           completed: false,
//           failed: false,
//           taskTitle: "Database optimization",
//           taskDescription: "Optimize SQL queries for performance by analyzing execution plans and restructuring joins and indexes appropriately.",
//           taskDate: "2024-10-11",
//           category: "Database"
//         },
//         {
//           active: false,
//           newTask: false,
//           completed: true,
//           failed: false,
//           taskTitle: "Design new feature",
//           taskDescription: "Create detailed wireframes and UI mockups for the upcoming feature, ensuring usability and accessibility standards.",
//           taskDate: "2024-10-09",
//           category: "Design"
//         },
//         {
//           active: true,
//           newTask: true,
//           completed: false,
//           failed: false,
//           taskTitle: "Refactor codebase",
//           taskDescription: "Refactor legacy modules in the backend for better readability, reusability, and adherence to SOLID principles.",
//           taskDate: "2024-10-13",
//           category: "Development"
//         }
//       ]
//     },
//     {
//       id: 3,
//       firstName: "Ravi",
//       email: "employee3@example.com",
//       password: "123",
//       taskCounts: {
//         active: 2,
//         newTask: 2,
//         completed: 1,
//         failed: 0
//       },
//       tasks: [
//         {
//           active: true,
//           newTask: true,
//           completed: false,
//           failed: false,
//           taskTitle: "Prepare presentation",
//           taskDescription: "Prepare slides for the client meeting including visuals, statistics, and a roadmap for the upcoming development phase.",
//           taskDate: "2024-10-13",
//           category: "Presentation"
//         },
//         {
//           active: true,
//           newTask: false,
//           completed: false,
//           failed: false,
//           taskTitle: "Code review",
//           taskDescription: "Review PRs submitted by team members and leave constructive feedback ensuring code quality and performance standards.",
//           taskDate: "2024-10-12",
//           category: "Development"
//         },
//         {
//           active: false,
//           newTask: false,
//           completed: true,
//           failed: false,
//           taskTitle: "Testing",
//           taskDescription: "Conduct end-to-end testing of the latest build focusing on integration scenarios, edge cases, and user experience flow.",
//           taskDate: "2024-10-08",
//           category: "QA"
//         },
//         {
//           active: false,
//           newTask: true,
//           completed: false,
//           failed: false,
//           taskTitle: "Security audit",
//           taskDescription: "Perform an internal security audit of the codebase and infrastructure, addressing any major vulnerabilities or exposures.",
//           taskDate: "2024-10-16",
//           category: "Security"
//         }
//       ]
//     },
//     {
//       id: 4,
//       firstName: "Priya",
//       email: "employee4@example.com",
//       password: "123",
//       taskCounts: {
//         active: 3,
//         newTask: 2,
//         completed: 0,
//         failed: 0
//       },
//       tasks: [
//         {
//           active: true,
//           newTask: true,
//           completed: false,
//           failed: false,
//           taskTitle: "Write documentation",
//           taskDescription: "Document project setup, API endpoints, deployment steps, and contribution guidelines in a clear, concise manner.",
//           taskDate: "2024-10-13",
//           category: "Documentation"
//         },
//         {
//           active: true,
//           newTask: false,
//           completed: false,
//           failed: false,
//           taskTitle: "Set up CI/CD",
//           taskDescription: "Implement automated build and deployment workflows using GitHub Actions with Slack integration for status notifications.",
//           taskDate: "2024-10-11",
//           category: "DevOps"
//         },
//         {
//           active: true,
//           newTask: true,
//           completed: false,
//           failed: false,
//           taskTitle: "Accessibility audit",
//           taskDescription: "Run an accessibility audit using Lighthouse and axe, then refactor UI elements to meet WCAG compliance.",
//           taskDate: "2024-10-14",
//           category: "QA"
//         }
//       ]
//     },
//     {
//       id: 5,
//       firstName: "Karan",
//       email: "employee5@example.com",
//       password: "123",
//       taskCounts: {
//         active: 3,
//         newTask: 1,
//         completed: 1,
//         failed: 0
//       },
//       tasks: [
//         {
//           active: true,
//           newTask: true,
//           completed: false,
//           failed: false,
//           taskTitle: "UI redesign",
//           taskDescription: "Redesign the user interface for better usability and modern aesthetics, including light/dark mode toggle and animations.",
//           taskDate: "2024-10-14",
//           category: "Design"
//         },
//         {
//           active: false,
//           newTask: false,
//           completed: true,
//           failed: false,
//           taskTitle: "Deploy new build",
//           taskDescription: "Deploy the latest version of the app to production using Docker and Kubernetes. Ensure zero-downtime deployment.",
//           taskDate: "2024-10-09",
//           category: "DevOps"
//         },
//         {
//           active: true,
//           newTask: false,
//           completed: false,
//           failed: false,
//           taskTitle: "Client feedback",
//           taskDescription: "Collect feedback from clients post-deployment and compile a list of actionable suggestions for the dev team.",
//           taskDate: "2024-10-12",
//           category: "Support"
//         },
//         {
//           active: true,
//           newTask: false,
//           completed: false,
//           failed: false,
//           taskTitle: "Performance monitoring",
//           taskDescription: "Set up dashboards to monitor application performance in real-time using Prometheus and Grafana.",
//           taskDate: "2024-10-15",
//           category: "Monitoring"
//         }
//       ]
//     }
//   ];
  


// const admin = [{
//     "id": 1,
//     "email": "admin@me.com",
//     "password": "123"
// }];

// export const setLocalStorage = () => {
//     if (!localStorage.getItem('employees')) {
//         localStorage.setItem('employees', JSON.stringify(employees));
//     }
//     if (!localStorage.getItem('admin')) {
//         localStorage.setItem('admin', JSON.stringify(admin));
//     }
// };

// export const getLocalStorage = () => {
//     const employees = JSON.parse(localStorage.getItem('employees')) || [];
//     const admin = JSON.parse(localStorage.getItem('admin')) || [];
//     return { employees, admin };
// };


const employees = [
    {
      id: 1,
      firstName: "Arjun",
      email: "e@e.com",
      password: "123",
      taskCounts: {
        active: 8,
        newTask: 5,
        completed: 7,
        failed: 0
      },
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Update website",
          taskDescription: "Revamp the homepage design to improve user navigation and branding. Ensure responsiveness and cross-browser compatibility.",
          taskDate: "2024-10-12",
          category: "Design"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Client meeting",
          taskDescription: "Discuss project requirements and deadlines with the client to align goals and deliverables. Prepare agenda beforehand.",
          taskDate: "2024-10-10",
          category: "Meeting"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Fix bugs",
          taskDescription: "Resolve all critical bugs listed in the issue tracker, focusing on UI glitches and API inconsistencies found in testing.",
          taskDate: "2024-10-14",
          category: "Development"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Create landing page",
          taskDescription: "Design and implement a visually appealing landing page for the new campaign, incorporating the marketing team's content strategy.",
          taskDate: "2024-10-15",
          category: "Design"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "API documentation",
          taskDescription: "Document all REST API endpoints with examples for request/response formats and error codes.",
          taskDate: "2024-09-28",
          category: "Documentation"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Performance optimization",
          taskDescription: "Analyze and optimize page load times by implementing lazy loading, image compression, and code splitting.",
          taskDate: "2024-10-16",
          category: "Development"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Mobile app UI",
          taskDescription: "Design the user interface for the new mobile application following material design guidelines.",
          taskDate: "2024-10-17",
          category: "Design"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Database migration",
          taskDescription: "Migrate user data from legacy database to new cloud-based solution with zero downtime.",
          taskDate: "2024-09-30",
          category: "Database"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Authentication flow",
          taskDescription: "Implement OAuth 2.0 authentication with Google and Facebook login options.",
          taskDate: "2024-10-18",
          category: "Security"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Team retrospective",
          taskDescription: "Facilitate sprint retrospective meeting and document action items for process improvement.",
          taskDate: "2024-10-05",
          category: "Meeting"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Analytics dashboard",
          taskDescription: "Build an internal dashboard to visualize user engagement metrics and conversion funnels.",
          taskDate: "2024-10-19",
          category: "Development"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Content update",
          taskDescription: "Update all product descriptions and marketing copy based on SEO team recommendations.",
          taskDate: "2024-10-03",
          category: "Content"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Accessibility audit",
          taskDescription: "Conduct WCAG 2.1 compliance audit and implement necessary fixes for screen readers.",
          taskDate: "2024-10-20",
          category: "QA"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Payment integration",
          taskDescription: "Integrate Stripe payment gateway with support for multiple currencies and subscription models.",
          taskDate: "2024-10-21",
          category: "Development"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Onboarding materials",
          taskDescription: "Create comprehensive onboarding documentation for new team members joining the project.",
          taskDate: "2024-10-01",
          category: "Documentation"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Error monitoring",
          taskDescription: "Set up Sentry error tracking with proper severity levels and notification channels.",
          taskDate: "2024-10-22",
          category: "Monitoring"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Social media integration",
          taskDescription: "Implement social sharing features with OpenGraph meta tags for proper link previews.",
          taskDate: "2024-10-04",
          category: "Development"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Dark mode",
          taskDescription: "Design and implement dark mode theme with user preference persistence.",
          taskDate: "2024-10-23",
          category: "Design"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Code refactoring",
          taskDescription: "Refactor legacy components to modern React hooks and functional components.",
          taskDate: "2024-10-06",
          category: "Development"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Localization setup",
          taskDescription: "Implement i18n framework for multilingual support with language toggle UI.",
          taskDate: "2024-10-24",
          category: "Development"
        }
      ]
    },
    {
      id: 2,
      firstName: "Sneha",
      email: "employee2@example.com",
      password: "123",
      taskCounts: {
        active: 9,
        newTask: 4,
        completed: 7,
        failed: 0
      },
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Database optimization",
          taskDescription: "Optimize SQL queries for performance by analyzing execution plans and restructuring joins and indexes appropriately.",
          taskDate: "2024-10-11",
          category: "Database"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Design new feature",
          taskDescription: "Create detailed wireframes and UI mockups for the upcoming feature, ensuring usability and accessibility standards.",
          taskDate: "2024-10-09",
          category: "Design"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Refactor codebase",
          taskDescription: "Refactor legacy modules in the backend for better readability, reusability, and adherence to SOLID principles.",
          taskDate: "2024-10-13",
          category: "Development"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Security audit",
          taskDescription: "Conduct comprehensive security review of authentication and authorization flows.",
          taskDate: "2024-10-14",
          category: "Security"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "API versioning",
          taskDescription: "Implement proper versioning strategy for public APIs with deprecation notices.",
          taskDate: "2024-09-29",
          category: "Development"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Data visualization",
          taskDescription: "Create interactive charts and graphs for business intelligence dashboard.",
          taskDate: "2024-10-15",
          category: "Data"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Load testing",
          taskDescription: "Perform stress testing on API endpoints to identify bottlenecks and scaling needs.",
          taskDate: "2024-10-02",
          category: "Testing"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Microservices architecture",
          taskDescription: "Design blueprint for breaking monolith into domain-driven microservices.",
          taskDate: "2024-10-16",
          category: "Architecture"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "CI/CD pipeline",
          taskDescription: "Implement automated deployment pipeline with staging and production environments.",
          taskDate: "2024-10-17",
          category: "DevOps"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Code standards",
          taskDescription: "Document and enforce coding standards across all repositories with linter rules.",
          taskDate: "2024-10-04",
          category: "Documentation"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Feature flags",
          taskDescription: "Implement feature flag system for gradual feature rollouts and A/B testing.",
          taskDate: "2024-10-18",
          category: "Development"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Database backup",
          taskDescription: "Set up automated encrypted backups with point-in-time recovery capability.",
          taskDate: "2024-10-05",
          category: "Database"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Monitoring alerts",
          taskDescription: "Configure critical alerts for system health metrics with proper escalation policies.",
          taskDate: "2024-10-19",
          category: "Monitoring"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Technical debt",
          taskDescription: "Prioritize and address high-impact technical debt items from backlog.",
          taskDate: "2024-10-06",
          category: "Development"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Containerization",
          taskDescription: "Dockerize all services and create Kubernetes deployment manifests.",
          taskDate: "2024-10-20",
          category: "DevOps"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "API documentation",
          taskDescription: "Generate Swagger/OpenAPI documentation for all endpoints with examples.",
          taskDate: "2024-10-07",
          category: "Documentation"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Performance tuning",
          taskDescription: "Optimize database queries and index strategies for read-heavy workloads.",
          taskDate: "2024-10-21",
          category: "Database"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Chaos engineering",
          taskDescription: "Design failure scenarios to test system resilience and recovery procedures.",
          taskDate: "2024-10-22",
          category: "Testing"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Logging strategy",
          taskDescription: "Implement structured logging with correlation IDs for distributed tracing.",
          taskDate: "2024-10-08",
          category: "DevOps"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Scalability review",
          taskDescription: "Evaluate current architecture for horizontal scaling requirements and limitations.",
          taskDate: "2024-10-23",
          category: "Architecture"
        }
      ]
    },
    {
      id: 3,
      firstName: "Ravi",
      email: "employee3@example.com",
      password: "123",
      taskCounts: {
        active: 7,
        newTask: 6,
        completed: 7,
        failed: 0
      },
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Prepare presentation",
          taskDescription: "Prepare slides for the client meeting including visuals, statistics, and a roadmap for the upcoming development phase.",
          taskDate: "2024-10-13",
          category: "Presentation"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Code review",
          taskDescription: "Review PRs submitted by team members and leave constructive feedback ensuring code quality and performance standards.",
          taskDate: "2024-10-12",
          category: "Development"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Testing",
          taskDescription: "Conduct end-to-end testing of the latest build focusing on integration scenarios, edge cases, and user experience flow.",
          taskDate: "2024-10-08",
          category: "QA"
        },
        {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Security audit",
          taskDescription: "Perform an internal security audit of the codebase and infrastructure, addressing any major vulnerabilities or exposures.",
          taskDate: "2024-10-16",
          category: "Security"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Roadmap planning",
          taskDescription: "Collaborate with product team to define technical roadmap for next two quarters.",
          taskDate: "2024-10-14",
          category: "Planning"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Sprint retrospective",
          taskDescription: "Facilitate team retrospective and document action items for process improvement.",
          taskDate: "2024-10-05",
          category: "Meeting"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Hiring interviews",
          taskDescription: "Conduct technical interviews for backend developer candidates.",
          taskDate: "2024-10-15",
          category: "HR"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Budget review",
          taskDescription: "Review cloud infrastructure costs and identify optimization opportunities.",
          taskDate: "2024-10-03",
          category: "Finance"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Team building",
          taskDescription: "Organize team building activity to boost morale and collaboration.",
          taskDate: "2024-10-16",
          category: "HR"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "OKR planning",
          taskDescription: "Define quarterly Objectives and Key Results with department leads.",
          taskDate: "2024-10-17",
          category: "Planning"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Vendor evaluation",
          taskDescription: "Evaluate new SaaS tools for project management and documentation.",
          taskDate: "2024-10-04",
          category: "Procurement"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Career pathing",
          taskDescription: "Develop engineering career ladder with competency matrix.",
          taskDate: "2024-10-18",
          category: "HR"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Incident review",
          taskDescription: "Conduct post-mortem for production outage and implement preventive measures.",
          taskDate: "2024-10-06",
          category: "Operations"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Mentorship program",
          taskDescription: "Pair junior developers with senior mentors and track progress.",
          taskDate: "2024-10-19",
          category: "HR"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Conference prep",
          taskDescription: "Prepare talk and demo for upcoming tech conference on scalable architectures.",
          taskDate: "2024-10-20",
          category: "Marketing"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Policy update",
          taskDescription: "Review and update remote work and BYOD policies.",
          taskDate: "2024-10-07",
          category: "Operations"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Tech stack evaluation",
          taskDescription: "Research and prototype potential new technologies for upcoming projects.",
          taskDate: "2024-10-21",
          category: "Research"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Employee surveys",
          taskDescription: "Analyze results from quarterly employee satisfaction survey.",
          taskDate: "2024-10-09",
          category: "HR"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Partnerships",
          taskDescription: "Explore strategic partnerships with complementary technology providers.",
          taskDate: "2024-10-22",
          category: "Business"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Compliance audit",
          taskDescription: "Ensure all processes meet GDPR and other regulatory requirements.",
          taskDate: "2024-10-10",
          category: "Legal"
        }
      ]
    },
    {
      id: 4,
      firstName: "Priya",
      email: "employee4@example.com",
      password: "123",
      taskCounts: {
        active: 10,
        newTask: 5,
        completed: 5,
        failed: 0
      },
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Write documentation",
          taskDescription: "Document project setup, API endpoints, deployment steps, and contribution guidelines in a clear, concise manner.",
          taskDate: "2024-10-13",
          category: "Documentation"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Set up CI/CD",
          taskDescription: "Implement automated build and deployment workflows using GitHub Actions with Slack integration for status notifications.",
          taskDate: "2024-10-11",
          category: "DevOps"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Accessibility audit",
          taskDescription: "Run an accessibility audit using Lighthouse and axe, then refactor UI elements to meet WCAG compliance.",
          taskDate: "2024-10-14",
          category: "QA"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Test automation",
          taskDescription: "Expand test coverage by writing additional unit and integration tests for critical paths.",
          taskDate: "2024-10-15",
          category: "Testing"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Bug triage",
          taskDescription: "Review and prioritize all open bugs in the issue tracker based on severity and impact.",
          taskDate: "2024-10-05",
          category: "QA"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Performance testing",
          taskDescription: "Establish performance benchmarks and conduct load testing on key user flows.",
          taskDate: "2024-10-16",
          category: "Testing"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Test environment",
          taskDescription: "Set up dedicated staging environment that mirrors production for accurate testing.",
          taskDate: "2024-10-06",
          category: "DevOps"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Code coverage",
          taskDescription: "Increase unit test coverage to 80% across all critical modules.",
          taskDate: "2024-10-17",
          category: "Testing"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Visual regression",
          taskDescription: "Implement visual regression testing to catch UI inconsistencies across releases.",
          taskDate: "2024-10-18",
          category: "QA"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Test data",
          taskDescription: "Create comprehensive test data sets covering all edge cases and scenarios.",
          taskDate: "2024-10-07",
          category: "Testing"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Security testing",
          taskDescription: "Conduct penetration testing and address all critical vulnerabilities.",
          taskDate: "2024-10-19",
          category: "Security"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Mobile testing",
          taskDescription: "Expand test suite to cover major mobile devices and screen sizes.",
          taskDate: "2024-10-20",
          category: "QA"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Test reporting",
          taskDescription: "Improve test reporting with screenshots, videos, and better failure analysis.",
          taskDate: "2024-10-08",
          category: "Testing"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "API testing",
          taskDescription: "Automate contract testing for all API endpoints with OpenAPI validation.",
          taskDate: "2024-10-21",
          category: "Testing"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Test strategy",
          taskDescription: "Document comprehensive test strategy covering all testing levels and types.",
          taskDate: "2024-10-09",
          category: "Documentation"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Cross-browser testing",
          taskDescription: "Ensure compatibility across all supported browsers with automated checks.",
          taskDate: "2024-10-22",
          category: "QA"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Test automation framework",
          taskDescription: "Refactor test automation framework for better maintainability and reporting.",
          taskDate: "2024-10-23",
          category: "Testing"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "QA process",
          taskDescription: "Streamline QA processes to reduce cycle time without compromising quality.",
          taskDate: "2024-10-10",
          category: "Process"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Performance monitoring",
          taskDescription: "Set up continuous performance monitoring with alerting for regressions.",
          taskDate: "2024-10-24",
          category: "Monitoring"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Localization testing",
          taskDescription: "Verify all UI strings and date/number formats for supported locales.",
          taskDate: "2024-10-25",
          category: "QA"
        }
      ]
    },
    {
      id: 5,
      firstName: "Karan",
      email: "employee5@example.com",
      password: "123",
      taskCounts: {
        active: 9,
        newTask: 4,
        completed: 7,
        failed: 0
      },
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "UI redesign",
          taskDescription: "Redesign the user interface for better usability and modern aesthetics, including light/dark mode toggle and animations.",
          taskDate: "2024-10-14",
          category: "Design"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Deploy new build",
          taskDescription: "Deploy the latest version of the app to production using Docker and Kubernetes. Ensure zero-downtime deployment.",
          taskDate: "2024-10-09",
          category: "DevOps"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Client feedback",
          taskDescription: "Collect feedback from clients post-deployment and compile a list of actionable suggestions for the dev team.",
          taskDate: "2024-10-12",
          category: "Support"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Performance monitoring",
          taskDescription: "Set up dashboards to monitor application performance in real-time using Prometheus and Grafana.",
          taskDate: "2024-10-15",
          category: "Monitoring"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "User onboarding",
          taskDescription: "Design and implement interactive product tour for new users.",
          taskDate: "2024-10-16",
          category: "UX"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Style guide",
          taskDescription: "Create comprehensive design system documentation with reusable components.",
          taskDate: "2024-10-05",
          category: "Design"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Microinteractions",
          taskDescription: "Design subtle animations and transitions to improve perceived performance.",
          taskDate: "2024-10-17",
          category: "UX"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "User research",
          taskDescription: "Conduct usability testing sessions with target user personas.",
          taskDate: "2024-10-06",
          category: "Research"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Information architecture",
          taskDescription: "Restructure navigation and content hierarchy based on card sorting results.",
          taskDate: "2024-10-18",
          category: "UX"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Prototyping",
          taskDescription: "Create high-fidelity interactive prototypes for upcoming features.",
          taskDate: "2024-10-19",
          category: "Design"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Competitive analysis",
          taskDescription: "Analyze competitor products and document UX patterns and differentiators.",
          taskDate: "2024-10-07",
          category: "Research"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Accessibility",
          taskDescription: "Conduct WCAG audit and implement necessary improvements for compliance.",
          taskDate: "2024-10-20",
          category: "UX"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Content strategy",
          taskDescription: "Define tone, voice, and messaging framework for product content.",
          taskDate: "2024-10-08",
          category: "Content"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "User flows",
          taskDescription: "Document optimal user journeys for key conversion funnels.",
          taskDate: "2024-10-21",
          category: "UX"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "UI components",
          taskDescription: "Build and document reusable component library in Figma.",
          taskDate: "2024-10-22",
          category: "Design"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Metrics dashboard",
          taskDescription: "Design executive dashboard for tracking key UX metrics (NPS, SUS, etc.).",
          taskDate: "2024-10-10",
          category: "Design"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Mobile UX",
          taskDescription: "Optimize all flows for mobile devices with touch-friendly interactions.",
          taskDate: "2024-10-23",
          category: "UX"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Design tokens",
          taskDescription: "Implement design tokens for consistent theming across platforms.",
          taskDate: "2024-10-24",
          category: "Design"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "User interviews",
          taskDescription: "Conduct discovery interviews to identify unmet user needs.",
          taskDate: "2024-10-11",
          category: "Research"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "UX writing",
          taskDescription: "Audit and improve all microcopy for clarity and consistency.",
          taskDate: "2024-10-25",
          category: "Content"
        }
      ]
    }
  ];
  

const admin = [{
    "id": 1,
    "email": "admin@me.com",
    "password": "123"
}];

export const setLocalStorage = () => {
    if (!localStorage.getItem('employees')) {
        localStorage.setItem('employees', JSON.stringify(employees));
    }
    if (!localStorage.getItem('admin')) {
        localStorage.setItem('admin', JSON.stringify(admin));
    }
};

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const admin = JSON.parse(localStorage.getItem('admin')) || [];
    return { employees, admin };
};
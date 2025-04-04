
// const employees = [
//     {
//         "id": 1,
//         "firstName": "Arjun",
//         "email": "e@e.com",
//         "password": "123",
//         "taskCounts": {
//             "active": 2,
//             "newTask": 1,
//             "completed": 1,
//             "failed": 0
//         },
//         "tasks": [
//             {
//                 "active": true,
//                 "newTask": true,
//                 "completed": false,
//                 "failed": false,
//                 "taskTitle": "Update website",
//                 "taskDescription": "Revamp the homepage design",
//                 "taskDate": "2024-10-12",
//                 "category": "Design" 
//             },
//             {
//                 "active": false,
//                 "newTask": false,
//                 "completed": true,
//                 "failed": false,
//                 "taskTitle": "Client meeting",
//                 "taskDescription": "Discuss project requirements",
//                 "taskDate": "2024-10-10",
//                 "category": "Meeting"
//             },
//             {
//                 "active": true,
//                 "newTask": false,
//                 "completed": false,
//                 "failed": false,
//                 "taskTitle": "Fix bugs",
//                 "taskDescription": "Resolve bugs reported in issue tracker",
//                 "taskDate": "2024-10-14",
//                 "category": "Development"
//             }
//         ]
//     },
//     {
//         "id": 2,
//         "firstName": "Sneha",
//         "email": "employee2@example.com",
//         "password": "123",
//         "taskCounts": {
//             "active": 1,
//             "newTask": 0,
//             "completed": 1,
//             "failed": 0
//         },
//         "tasks": [
//             {
//                 "active": true,
//                 "newTask": false,
//                 "completed": false,
//                 "failed": false,
//                 "taskTitle": "Database optimization",
//                 "taskDescription": "Optimize queries for better performance",
//                 "taskDate": "2024-10-11",
//                 "category": "Database"
//             },
//             {
//                 "active": false,
//                 "newTask": false,
//                 "completed": true,
//                 "failed": false,
//                 "taskTitle": "Design new feature",
//                 "taskDescription": "Create mockups for the new feature",
//                 "taskDate": "2024-10-09",
//                 "category": "Design"
//             }
//         ]
//     },
//     {
//         "id": 3,
//         "firstName": "Ravi",
//         "email": "employee3@example.com",
//         "password": "123",
//         "taskCounts": {
//             "active": 2,
//             "newTask": 1,
//             "completed": 1,
//             "failed": 0
//         },
//         "tasks": [
//             {
//                 "active": true,
//                 "newTask": true,
//                 "completed": false,
//                 "failed": false,
//                 "taskTitle": "Prepare presentation",
//                 "taskDescription": "Prepare slides for upcoming client presentation",
//                 "taskDate": "2024-10-13",
//                 "category": "Presentation"
//             },
//             {
//                 "active": true,
//                 "newTask": false,
//                 "completed": false,
//                 "failed": false,
//                 "taskTitle": "Code review",
//                 "taskDescription": "Review the codebase for optimization",
//                 "taskDate": "2024-10-12",
//                 "category": "Development"
//             },
//             {
//                 "active": false,
//                 "newTask": false,
//                 "completed": true,
//                 "failed": false,
//                 "taskTitle": "Testing",
//                 "taskDescription": "Test the latest build for bugs",
//                 "taskDate": "2024-10-08",
//                 "category": "QA"
//             }
//         ]
//     },
//     {
//         "id": 4,
//         "firstName": "Priya",
//         "email": "employee4@example.com",
//         "password": "123",
//         "taskCounts": {
//             "active": 2,
//             "newTask": 1,
//             "completed": 0,
//             "failed": 0
//         },
//         "tasks": [
//             {
//                 "active": true,
//                 "newTask": true,
//                 "completed": false,
//                 "failed": false,
//                 "taskTitle": "Write documentation",
//                 "taskDescription": "Update the project documentation",
//                 "taskDate": "2024-10-13",
//                 "category": "Documentation"
//             },
//             {
//                 "active": true,
//                 "newTask": false,
//                 "completed": false,
//                 "failed": false,
//                 "taskTitle": "Set up CI/CD",
//                 "taskDescription": "Implement continuous integration pipeline",
//                 "taskDate": "2024-10-11",
//                 "category": "DevOps"
//             }
//         ]
//     },
//     {
//         "id": 5,
//         "firstName": "Karan",
//         "email": "employee5@example.com",
//         "password": "123",
//         "taskCounts": {
//             "active": 2,
//             "newTask": 1,
//             "completed": 1,
//             "failed": 0
//         },
//         "tasks": [
//             {
//                 "active": true,
//                 "newTask": true,
//                 "completed": false,
//                 "failed": false,
//                 "taskTitle": "UI redesign",
//                 "taskDescription": "Redesign the user interface for better UX",
//                 "taskDate": "2024-10-14",
//                 "category": "Design"
//             },
//             {
//                 "active": false,
//                 "newTask": false,
//                 "completed": true,
//                 "failed": false,
//                 "taskTitle": "Deploy new build",
//                 "taskDescription": "Deploy the latest build to production",
//                 "taskDate": "2024-10-09",
//                 "category": "DevOps"
//             },
//             {
//                 "active": true,
//                 "newTask": false,
//                 "completed": false,
//                 "failed": false,
//                 "taskTitle": "Client feedback",
//                 "taskDescription": "Gather feedback from clients after product launch",
//                 "taskDate": "2024-10-12",
//                 "category": "Support"
//             }
//         ]
//     }
// ];

const employees = [
    {
      id: 1,
      firstName: "Arjun",
      email: "e@e.com",
      password: "123",
      taskCounts: {
        active: 3,
        newTask: 2,
        completed: 1,
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
        }
      ]
    },
    {
      id: 2,
      firstName: "Sneha",
      email: "employee2@example.com",
      password: "123",
      taskCounts: {
        active: 2,
        newTask: 1,
        completed: 1,
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
        }
      ]
    },
    {
      id: 3,
      firstName: "Ravi",
      email: "employee3@example.com",
      password: "123",
      taskCounts: {
        active: 2,
        newTask: 2,
        completed: 1,
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
        }
      ]
    },
    {
      id: 4,
      firstName: "Priya",
      email: "employee4@example.com",
      password: "123",
      taskCounts: {
        active: 3,
        newTask: 2,
        completed: 0,
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
        }
      ]
    },
    {
      id: 5,
      firstName: "Karan",
      email: "employee5@example.com",
      password: "123",
      taskCounts: {
        active: 3,
        newTask: 1,
        completed: 1,
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


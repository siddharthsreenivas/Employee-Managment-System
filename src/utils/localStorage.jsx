const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "a@a.com",
    password: "123",
    tasks: [
      {
        title: "Prepare monthly report",
        description: "Gather data for the monthly performance report.",
        date: "2024-11-27",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Team meeting",
        description: "Discuss project progress and roadblocks.",
        date: "2024-11-28",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Update CRM",
        description: "Add the latest client data to the CRM system.",
        date: "2024-11-30",
        category: "Data Entry",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: { active: 2, newTask: 1, completed: 1, failed: 0 },
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Develop feature X",
        description: "Work on the front-end development for feature X.",
        date: "2024-11-26",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Fix bug Y",
        description: "Resolve the issue reported in module Y.",
        date: "2024-11-25",
        category: "Bug Fixing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskNumbers: { active: 1, newTask: 1, completed: 1, failed: 0 },
  },
  {
    id: 3,
    firstName: "Rohit",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare training materials",
        description: "Create documents and slides for employee onboarding.",
        date: "2024-12-01",
        category: "Training",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Review codebase",
        description: "Perform a detailed review of module Z's code.",
        date: "2024-11-29",
        category: "Code Review",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: { active: 2, newTask: 1, completed: 0, failed: 0 },
  },
  {
    id: 4,
    firstName: "Neha",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Social media updates",
        description: "Publish weekly updates on the company's LinkedIn page.",
        date: "2024-11-27",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Client presentation",
        description: "Prepare and deliver a presentation for client A.",
        date: "2024-12-03",
        category: "Client Relations",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: { active: 1, newTask: 1, completed: 1, failed: 0 },
  },
  {
    id: 5,
    firstName: "Arjun",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Database backup",
        description: "Perform a backup of the production database.",
        date: "2024-11-28",
        category: "Database",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Internal audit",
        description: "Complete the internal compliance audit checklist.",
        date: "2024-12-02",
        category: "Audit",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: { active: 2, newTask: 1, completed: 0, failed: 0 },
  },
];


const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
    name: 'Siddharth'
  },
];

export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
}
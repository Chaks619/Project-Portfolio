export const projects = [
  {
    slug: "food-delivery-app",
    title: "Food Delivery App",
    shortDescription: "A full-stack food ordering and delivery platform.",
    description:
      "A scalable food delivery application that allows users to browse restaurants, place orders, and track deliveries in real time.",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    screenshots: [
      "/projects/food-delivery/1.png",
      "/projects/food-delivery/2.png",
      "/projects/food-delivery/3.png",
    ],
    liveUrl: "https://food-delivery.vercel.app",
    githubUrl: "https://github.com/yourusername/food-delivery",
    features: [
      "User authentication and role-based access",
      "Restaurant & menu management",
      "Real-time order tracking",
      "Stripe payment integration",
    ],
  },
  {
    slug: "project-management-app",
    title: "Project Management App",
    shortDescription: "A Trello/Jira-style project management tool.",
    description:
      "A project management application to manage tasks, teams, and workflows with real-time collaboration.",
    tech: ["React", "Node.js", "PostgreSQL", "Socket.IO"],
    screenshots: [
      "/projects/project-management/1.png",
      "/projects/project-management/2.png",
    ],
    liveUrl: "https://project-management.vercel.app",
    githubUrl: "https://github.com/yourusername/project-management",
    features: [
      "Kanban boards",
      "Real-time updates",
      "Team collaboration",
      "Activity logs",
    ],
  },
]

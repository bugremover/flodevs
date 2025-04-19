import { User, Post, Project, MindMapNode, CareerPath } from '../types';

export const currentUser: User = {
  id: 'user-1',
  name: 'Harsha Vardhan',
  username: 'harshavardhan',
  avatar: 'https://demo-source.imgix.net/puppy.jpg',
  bio: 'Founder of flodevs | Building digital experiences that matter',
  links: [
    { id: 'link-1', platform: 'LinkedIn', url: 'https://linkedin.com/in/harshavardhan' },
    { id: 'link-2', platform: 'GitHub', url: 'https://github.com/harshavardhan' },
    { id: 'link-3', platform: 'Portfolio', url: 'https://harshavardhank.vercel.app' },
  ],
  skills: [
    { id: 'skill-1', name: 'React', level: 85, category: 'Frontend' },
    { id: 'skill-2', name: 'UI/UX Design', level: 78, category: 'Design' },
    { id: 'skill-3', name: 'TypeScript', level: 72, category: 'Frontend' },
    { id: 'skill-4', name: 'Node.js', level: 65, category: 'Backend' },
    { id: 'skill-5', name: 'Figma', level: 90, category: 'Design' },
  ],
  following: 127,
  followers: 354,
};

export const users: User[] = [
  currentUser,
  {
    id: 'user-2',
    name: 'Jamie Wilson',
    username: 'jamiewilson',
    avatar: 'https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Backend Developer | Cloud Architecture Enthusiast',
    links: [
      { id: 'link-4', platform: 'LinkedIn', url: 'https://linkedin.com/in/jamie-wilson' },
      { id: 'link-5', platform: 'GitHub', url: 'https://github.com/jamiewilson' },
    ],
    skills: [
      { id: 'skill-6', name: 'Python', level: 92, category: 'Backend' },
      { id: 'skill-7', name: 'AWS', level: 88, category: 'DevOps' },
      { id: 'skill-8', name: 'Docker', level: 85, category: 'DevOps' },
    ],
    following: 215,
    followers: 423,
  },
  {
    id: 'user-3',
    name: 'Sam Taylor',
    username: 'samtaylor',
    avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Full-Stack Developer | Open Source Contributor',
    links: [
      { id: 'link-6', platform: 'LinkedIn', url: 'https://linkedin.com/in/sam-taylor' },
      { id: 'link-7', platform: 'GitHub', url: 'https://github.com/samtaylor' },
    ],
    skills: [
      { id: 'skill-9', name: 'JavaScript', level: 90, category: 'Frontend' },
      { id: 'skill-10', name: 'React', level: 87, category: 'Frontend' },
      { id: 'skill-11', name: 'Node.js', level: 85, category: 'Backend' },
    ],
    following: 178,
    followers: 289,
  },
];

export const posts: Post[] = [
  {
    id: 'post-1',
    user: users[1],
    content: 'Just launched my new project on AWS using serverless architecture. Amazing how quickly we can deploy scalable applications these days! #CloudComputing #Serverless',
    likes: 24,
    comments: 5,
    shares: 3,
    createdAt: '2023-05-12T10:30:00Z',
  },
  {
    id: 'post-2',
    user: users[2],
    content: 'Contributed to an open source project today that aims to improve accessibility in web applications. Feels great to give back to the community! #OpenSource #Accessibility',
    likes: 42,
    comments: 7,
    shares: 12,
    createdAt: '2023-05-11T14:45:00Z',
  },
  {
    id: 'post-3',
    user: currentUser,
    content: 'Just finished the redesign of our product dashboard using React and Tailwind. The new UI is much more intuitive and users are loving it! #UXDesign #ReactJS',
    attachments: ['https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=600'],
    likes: 56,
    comments: 8,
    shares: 5,
    createdAt: '2023-05-10T09:15:00Z',
  },
];

export const projects: Project[] = [
  {
    id: 'project-1',
    name: 'E-commerce Redesign',
    description: 'Redesigning the user interface and improving the user experience of our e-commerce platform.',
    tasks: [
      {
        id: 'task-1',
        title: 'Conduct user research',
        description: 'Interview current users to identify pain points in the existing interface.',
        status: 'done',
        priority: 'high',
        tags: ['research', 'ux'],
      },
      {
        id: 'task-2',
        title: 'Create wireframes',
        description: 'Design low-fidelity wireframes based on user feedback.',
        status: 'done',
        priority: 'high',
        tags: ['design', 'wireframe'],
      },
      {
        id: 'task-3',
        title: 'Develop prototype',
        description: 'Create an interactive prototype for user testing.',
        status: 'in-progress',
        priority: 'medium',
        tags: ['prototype', 'development'],
      },
      {
        id: 'task-4',
        title: 'User testing',
        description: 'Conduct user testing sessions with the prototype.',
        status: 'todo',
        priority: 'medium',
        dueDate: '2023-06-15',
        tags: ['testing', 'ux'],
      },
    ],
    collaborators: [currentUser, users[1]],
    createdAt: '2023-04-01T09:00:00Z',
  },
  {
    id: 'project-2',
    name: 'API Integration',
    description: 'Integrating third-party APIs to enhance functionality of our main product.',
    tasks: [
      {
        id: 'task-5',
        title: 'Research available APIs',
        description: 'Identify and evaluate potential third-party APIs that meet our requirements.',
        status: 'done',
        priority: 'high',
        tags: ['research', 'api'],
      },
      {
        id: 'task-6',
        title: 'Design integration architecture',
        description: 'Create a technical design document for the API integration.',
        status: 'in-progress',
        priority: 'high',
        tags: ['design', 'architecture'],
      },
    ],
    collaborators: [currentUser, users[2]],
    createdAt: '2023-04-15T14:30:00Z',
  },
];

export const mindMapRoot: MindMapNode = {
  id: 'node-1',
  label: 'Product Development',
  type: 'project',
  children: [
    {
      id: 'node-2',
      label: 'Market Research',
      type: 'task',
      children: [
        {
          id: 'node-3',
          label: 'Competitor Analysis',
          type: 'task',
          children: [],
        },
        {
          id: 'node-4',
          label: 'User Surveys',
          type: 'task',
          children: [],
        },
      ],
    },
    {
      id: 'node-5',
      label: 'Product Design',
      type: 'task',
      children: [
        {
          id: 'node-6',
          label: 'UI/UX Design',
          type: 'task',
          children: [],
        },
        {
          id: 'node-7',
          label: 'Prototyping',
          type: 'task',
          children: [],
        },
      ],
    },
    {
      id: 'node-8',
      label: 'Development',
      type: 'task',
      children: [
        {
          id: 'node-9',
          label: 'Frontend',
          type: 'task',
          children: [],
        },
        {
          id: 'node-10',
          label: 'Backend',
          type: 'task',
          children: [],
        },
      ],
    },
  ],
};

export const careerPaths: CareerPath[] = [
  {
    id: 'career-1',
    title: 'Frontend Developer',
    description: 'Specialize in building user interfaces and interactions for web applications.',
    requiredSkills: ['HTML', 'CSS', 'JavaScript', 'React', 'UI/UX Design'],
    potentialRoles: ['Junior Frontend Developer', 'Senior Frontend Developer', 'UI Engineer', 'Frontend Architect'],
    resources: [
      {
        id: 'resource-1',
        title: 'Advanced React Patterns',
        type: 'course',
        url: 'https://frontendmasters.com/courses/advanced-react-patterns/',
        rating: 4.8,
      },
      {
        id: 'resource-2',
        title: 'Modern CSS Techniques',
        type: 'article',
        url: 'https://css-tricks.com/modern-css-techniques/',
        rating: 4.5,
      },
    ],
  },
  {
    id: 'career-2',
    title: 'UX/UI Designer',
    description: 'Focus on creating visually appealing and user-friendly interfaces.',
    requiredSkills: ['UI Design', 'UX Research', 'Wireframing', 'Prototyping', 'Visual Design'],
    potentialRoles: ['Junior UI Designer', 'UX Researcher', 'Senior UX/UI Designer', 'Design Lead'],
    resources: [
      {
        id: 'resource-3',
        title: 'Don\'t Make Me Think',
        type: 'book',
        url: 'https://www.amazon.com/Dont-Make-Think-Revisited-Usability/dp/0321965515/',
        rating: 4.9,
      },
      {
        id: 'resource-4',
        title: 'UX Design Fundamentals',
        type: 'course',
        url: 'https://www.udemy.com/course/ux-design-fundamentals/',
        rating: 4.6,
      },
    ],
  },
];
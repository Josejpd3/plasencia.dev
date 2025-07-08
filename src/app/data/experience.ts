export interface Experience {
  title: string;
  company: string;
  period: string;
  contract?: boolean;
  certificate?: boolean;
  description: string[];
  tech: string[];
  showcase?: {
    title: string;
    description: string;
    images: {
      src: string;
      alt: string;
      width?: number;
      height?: number;
      caption?: string;
      metric?: string;
      showMore?: number;
    }[];
    metrics?: {
      value: string;
      label: string;
    }[];


    links?: {
      github?: string;
      live?: string;
      certificate?: string;
    };
  };
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "EKG Corp",
    period: "Jul 2023 - Present",
    description: [
      "Spearheaded ticket-selling platform development with 11,000+ users in first 30 days",
      "Developed voting system receiving 36,923 votes across 20 categories",
      "Improved application loading times by 30%"
    ],
    tech: ["React.js", "Node.js", "Redux", "Webpack"],
    showcase: {
      title: "Ticket-Selling Platform",
      description: "A comprehensive ticket-selling platform that handled over 11,000 users in its first month of operation.",
      images: [
        {
          src: "/images/projects/ticket-sales.png",
          alt: "Ticket Platform Dashboard",
          width: 1920,
          height: 1080,
          caption: "Ticket Platform Dashboard",
          metric: "11k Users",
        },
        {
          src: "/images/projects/analytics.png",
          alt: "Voting System",
          width: 1920,
          height: 1080,
          caption: "Voting System",
          metric: "36.9k Votes"
        },
        {
            src: "/images/projects/api.png",
            alt: "API Architecture",
            width: 1920,
            height: 1080,
            caption: "API Architecture",
            metric: "5+ APIs",
        },
        {
          src: "/images/projects/more-projects.png",
          alt: "Client Projects",
          width: 1920,
          height: 1080,
          caption: "Client Projects",
          metric: "14+ Projects",
          showMore: 14

        }
      ],
      metrics: [
        { value: "11,000+", label: "Active Users" },
        { value: "36,923", label: "Total Votes" },
        { value: "30%", label: "Performance Improvement" }
      ],
      links: {
        live: "https://example.com/ticket-platform",
        github: "https://github.com/username/ticket-platform"
      }
    }
  },
  {
    title: "Full Stack Web Developer",
    company: "Cafe Colao",
    period: "Aug 2023 - Jan 2024",
    contract: true,
    description: [
      "Developed company's first website and reservation system from scratch",
      "Increased monthly revenue by 40% through online presence and reservation capabilities",
      "Improved reservation management efficiency by 30%"
    ],
    tech: ["React.js", "MongoDB", "AWS", "GA4"],
    showcase: {
      title: "Restaurant Reservation System",
      description: "A full-stack restaurant reservation system that streamlined booking processes and increased monthly revenue.",
      images: [
        {
          src: "/images/projects/cafe-colao.gif",
          alt: "Restaurant Homepage",
          width: 1920,
          height: 1080,
          caption: "Tourism Company",
          metric: "400+ Bookings",
        }
      ],



      metrics: [
        { value: "40%", label: "Revenue Increase" },
        { value: "30%", label: "Efficiency Improvement" },
        { value: "400+", label: "Monthly Bookings" }
      ],
      links: {
        live: "https://cafecolao.com",
        github: "https://github.com/username/restaurant-system"
      }
    }
  },
  {
    title: "Full-Stack Web Development Certificate",
    company: "University of Central Florida",
    period: "Sep 2022 - Dec 2022",
    certificate: true,
    description: [
      "Completed intensive full-stack development program covering front-end and back-end technologies",
      "Developed full-stack applications using MERN stack (MongoDB, Express.js, React.js, Node.js)",
      "Collaborated with peers on group projects using agile methodologies"
    ],
    tech: ["HTML/CSS", "JavaScript", "React.js", "Node.js", "MongoDB", "Express.js"],
    showcase: {
      title: "AWS Certification",
      description: "Comprehensive understanding of AWS Cloud platform and services",

      images: [
        {
          src: "/images/projects/ucf-certificate.png",
          alt: "Full-Stack Web Development Certificate",
          width: 1920,
          height: 1080,
          caption: "Full-Stack Web Development Certificate"

        }
      ],
      metrics: [
        { value: "12", label: "Weeks Intensive" },
        { value: "15+", label: "Projects Built" },
        { value: "500+", label: "Hours of Code" }
      ],

      links: {
        certificate: "https://badgr.com/public/assertions/5KdMSuDkRByQOt0cVvbNZg?action=download"
      }

    }
  },
  {
    title: "Full-Stack Web Developer",
    company: "Freelance",
    period: "Jan 2021 - Aug 2023",
    description: [
      "Developed and maintained multiple full-stack web applications using MERN stack (MongoDB, Express.js, React.js, Node.js)",
      "Collaborated with clients to understand their requirements and delivered custom solutions",
      "Gained experience in agile methodologies and version control using Git"
    ],
    tech: ["HTML/CSS", "JavaScript", "React.js", "Node.js", "MongoDB", "Express.js"],
    showcase: {
      title: "Full-Stack Web Developer",
      description: "Developed and maintained multiple full-stack web applications using MERN stack (MongoDB, Express.js, React.js, Node.js)",
      images: [
        {
          src: "/images/projects/rto.png",
          alt: "Full-Stack Web Developer",
          width: 1920,
          height: 1080,
          caption: "Request Time Off",
          metric: "Used by McDonald's Employees",
        },
        {
          src: "/images/projects/lawncare.png",
          alt: "Lawn Care",
          width: 1920,
          height: 1080,
          caption: "Lawn Care",
          metric: "8k+ Users",
        },
        {
          src: "/images/projects/smart-int.png",
          alt: "Smart Int",
          width: 1920,
          height: 1080,
          caption: "Real Estate Title Services",
          metric: "2k+ Users",
          
        },
        {
          src: "/images/projects/handyman.png",
          alt: "Handyman Services",
          width: 1920,
          height: 1080,
          caption: "Handyman Services",

          metric: "5k+ Users",
          showMore: 40
        },
      ],
      metrics: [
        { value: "40+", label: "Projects Completed" },
        { value: "20%", label: "Faster Load Times" },
        { value: "120k+", label: "Users Impacted" }

      ]
    }

  }
]; 
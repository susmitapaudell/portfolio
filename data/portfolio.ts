// ---------------------------------------------------------------------------
// Central content file.
// Edit the values here to update the site — no JSX/component edits required.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Susmita Paudel",
  role: "ECIE Undergraduate, Pulchowk Campus",
  location: "Lalitpur, Nepal",
  tagline:
    "Studying how systems behave under the interface — networks, backends, and the security boundaries between them.",
  email: "your.email@example.com",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  },
};

export const about = {
  paragraphs: [
    "I'm an undergraduate in Electronics, Communication and Information Engineering (ECIE) at Pulchowk Campus, Institute of Engineering. My coursework sits at the intersection of electronics, computer architecture, and communication systems, and it's shaped how I think about software — I tend to want to know what's happening a layer or two below the one I'm working in.",
    "Most of my independent work has been in backend development, computer networking, and Linux systems administration. I build small, complete systems rather than large, incomplete ones: a TCP server with its own wire protocol, an encryption pipeline, a REST API with proper auth. I'd rather understand the primitives — sockets, framing, key derivation, process isolation — than depend on a library that hides them from me.",
    "Cybersecurity is the direction I'm currently moving in with the most intent. I've worked through a large number of hands-on TryHackMe rooms, use Nmap, Wireshark, Burp Suite, and Kali Linux regularly, and I'm building toward certifications. Alongside that, I'm going deeper into Linux administration and network engineering — routing, DHCP, OSPF — because I think infrastructure and security are hard to separate.",
    "Outside of this core track, I have a secondary interest in neuroscience and brain-computer interfaces, which occasionally shows up in coursework and side projects. I'm currently building toward a role as a security or application-security engineer, treating my electronics background as a differentiator rather than a detour.",
  ],
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  status: "active" | "concept" | "archived";
};

// Replace placeholder githubUrl / demoUrl values with your real links.
// status: "active" = built and maintained, "concept" = designed/planned,
// not yet a working repo, "archived" = done, not maintained.
export const projects: Project[] = [
  {
    slug: "wireforge",
    title: "WireForge",
    description:
      "A C++ TCP client-server chat application built on raw POSIX sockets. Started as a threaded echo server, now growing a custom binary application-layer protocol (magic bytes, version, type, length-prefixed payload) to handle message framing over a raw TCP stream — the same problem any real protocol on top of TCP has to solve.",
    technologies: ["C++", "TCP/IP", "POSIX Sockets", "Multithreading"],
    githubUrl: "https://github.com/susmitapaudell/WireForge",
    demoUrl: "",
    status: "active",
  },
  {
    slug: "audio-steganography",
    title: "Audio Steganography",
    description:
      "A system for embedding encrypted ownership metadata into WAV audio. Combines AES-256-GCM for the payload with Direct Sequence Spread Spectrum (DSSS) for the embedding, spreading each bit across 63–127 chips in the time domain so the watermark survives without being audible. The crypto module — envelope framing, PBKDF2 key derivation, serialization — is finished; the DSSS embedding module is in progress.",
    technologies: ["Python", "AES-256-GCM", "DSSS", "Signal Processing"],
    githubUrl: "https://github.com/yourusername/audio-steganography",
    demoUrl: "",
    status: "active",
  },
  {
    slug: "infrastructure-monitoring",
    title: "Infrastructure Monitoring",
    description:
      "A monitoring platform concept for observing system and infrastructure metrics — CPU, memory, disk, and network health across a small set of hosts, with a focus on understanding how metrics collection and alerting pipelines are actually built rather than reaching for an off-the-shelf dashboard.",
    technologies: ["Python", "Linux", "Networking"],
    githubUrl: "https://github.com/yourusername/infrastructure-monitoring",
    demoUrl: "",
    status: "concept",
  },
  {
    slug: "networking-labs",
    title: "Networking Labs",
    description:
      "A collection of networking experiments and lab reports: routing configuration, DHCP, OSPF, VLAN-based segmentation with access-control policies, and packet analysis exercises, mostly built and tested in Cisco Packet Tracer alongside real command-line work.",
    technologies: ["Cisco Packet Tracer", "OSPF", "DHCP", "VLANs", "Wireshark"],
    githubUrl: "https://github.com/yourusername/networking-labs",
    demoUrl: "",
    status: "concept",
  },
];

export type SkillLevel = "learning" | "working" | "comfortable";

export type Skill = {
  name: string;
  level: SkillLevel;
};

export type SkillGroup = {
  title: string;
  path: string; // shown as a file-path-style label, e.g. "~/skills/backend"
  skills: Skill[];
};

// level is shown as a small text tag, not a percentage bar:
// "learning"    — actively studying, limited hands-on use
// "working"     — used in real projects, not professional depth
// "comfortable" — reliable day-to-day tool
export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    path: "~/skills/programming",
    skills: [
      { name: "C", level: "working" },
      { name: "C++", level: "working" },
      { name: "Python", level: "comfortable" },
      { name: "TypeScript / JavaScript", level: "working" },
    ],
  },
  {
    title: "Backend",
    path: "~/skills/backend",
    skills: [
      { name: "FastAPI", level: "working" },
      { name: "REST API design", level: "working" },
      { name: "PostgreSQL", level: "working" },
      { name: "JWT / session auth", level: "working" },
    ],
  },
  {
    title: "Systems & Infrastructure",
    path: "~/skills/systems",
    skills: [
      { name: "Linux administration", level: "working" },
      { name: "Git", level: "comfortable" },
      { name: "Docker", level: "learning" },
      { name: "Shell scripting", level: "working" },
    ],
  },
  {
    title: "Networking",
    path: "~/skills/networking",
    skills: [
      { name: "TCP/IP", level: "working" },
      { name: "Routing (OSPF)", level: "learning" },
      { name: "DHCP", level: "working" },
      { name: "Sockets", level: "working" },
      { name: "Network troubleshooting", level: "working" },
    ],
  },
  {
    title: "Security",
    path: "~/skills/security",
    skills: [
      { name: "Nmap / Wireshark / Burp Suite", level: "working" },
      { name: "TryHackMe (87+ rooms)", level: "working" },
      { name: "Penetration testing fundamentals", level: "learning" },
      { name: "Network security", level: "learning" },
    ],
  },
  {
    title: "Electronics",
    path: "~/skills/electronics",
    skills: [
      { name: "Digital logic", level: "comfortable" },
      { name: "Microprocessors", level: "working" },
      { name: "Communication systems", level: "working" },
    ],
  },
];

export type LearningEntry = {
  title: string;
  detail: string;
  timeframe: string; // e.g. "In progress", "2026"
};

export const learning: LearningEntry[] = [
  {
    title: "Linux & System Administration",
    detail:
      "Working through Red Hat administration fundamentals — user/permission management, services, and networking configuration at the OS level.",
    timeframe: "In progress",
  },
  {
    title: "Cybersecurity",
    detail:
      "87+ TryHackMe rooms completed independently. Building toward the eJPT, then the Google Cybersecurity Certificate and AWS Cloud Practitioner.",
    timeframe: "Ongoing",
  },
  {
    title: "Computer Networking",
    detail:
      "Routing, DHCP, and OSPF configuration; VLAN-based network segmentation with access-control policy design and testing in Cisco Packet Tracer.",
    timeframe: "Coursework + labs",
  },
  {
    title: "Backend Engineering",
    detail:
      "Built a task-management API with FastAPI, PostgreSQL, and JWT authentication as a foundation for interview preparation and further backend work.",
    timeframe: "2026",
  },
  {
    title: "Systems Programming",
    detail:
      "Writing a TCP client-server application in C++ from raw sockets up, including a custom application-layer framing protocol.",
    timeframe: "In progress",
  },
];

export const contact = {
  heading: "Get in touch",
  body: "Interested in discussing systems, networking, backend engineering, or a technical project?",
};

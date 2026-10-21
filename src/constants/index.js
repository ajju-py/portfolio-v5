const navLinks = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Certifications",
    link: "#certifications",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Journey",
    link: "#journey",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const words = [
  { text: "Linux", imgPath: "/images/tech/linux.svg" },
  { text: "Containers", imgPath: "/images/tech/podman.svg" },
  { text: "DevOps", imgPath: "/images/tech/ansible.svg" },
  { text: "Cloud", imgPath: "/images/tech/aws.svg" },
  { text: "Automation", imgPath: "/images/tech/bash.svg" },
  { text: "Security", imgPath: "/images/badges/rhcsa.png" },
  { text: "RHEL 9", imgPath: "/images/tech/rhel.svg" },
  { text: "Podman", imgPath: "/images/badges/rh-cloud-native.png" },
];

const counterItems = [
  { value: 2, suffix: "", label: "Official Red Hat Credentials" },
  { value: 7, suffix: "", label: "Credly Verified Badges" },
  { value: 500, suffix: "+", label: "Lab & Practice Hours" },
  { value: 100, suffix: "%", label: "Infrastructure Reproducibility" },
];

const logoIconsList = [
  { name: "Red Hat", imgPath: "/images/tech/rhel.svg" },
  { name: "Linux", imgPath: "/images/tech/linux.svg" },
  { name: "Podman", imgPath: "/images/tech/podman.svg" },
  { name: "Docker", imgPath: "/images/tech/docker.png" },
  { name: "AWS", imgPath: "/images/tech/aws.svg" },
  { name: "Terraform", imgPath: "/images/tech/terraform.svg" },
  { name: "Ansible", imgPath: "/images/tech/ansible.svg" },
  { name: "Bash", imgPath: "/images/tech/bash.svg" },
  { name: "Python", imgPath: "/images/tech/python.svg" },
  { name: "Git", imgPath: "/images/tech/git.png" },
];

const abilities = [
  {
    imgPath: "/images/tech/rhel.svg",
    title: "Hardened Infrastructure",
    desc: "Enforcing strict SELinux targeted policies, Firewalld zoning, SSH key authentication, and audit trails.",
  },
  {
    imgPath: "/images/tech/podman.svg",
    title: "Rootless Containers",
    desc: "Deploying decoupled multi-container workloads with Podman, user namespace isolation, and persistent volume labels.",
  },
  {
    imgPath: "/images/tech/ansible.svg",
    title: "Automated Provisioning",
    desc: "Writing modular Bash automation and Ansible playbooks for reproducible, idempotent system configurations.",
  },
];

const techStackImgs = [
  {
    name: "Linux & RHEL",
    imgPath: "/images/tech/linux.svg",
  },
  {
    name: "Podman & Containers",
    imgPath: "/images/tech/podman.svg",
  },
  {
    name: "Python Automation",
    imgPath: "/images/tech/python.svg",
  },
  {
    name: "AWS Cloud",
    imgPath: "/images/tech/aws.svg",
  },
  {
    name: "Git & Versioning",
    imgPath: "/images/tech/git.png",
  },
];

const techStackIcons = [
  {
    name: "Python Automation",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Git & DevOps",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "Backend Services",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive 3D",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Modern Frontend",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
];

const socialImgs = [
  {
    name: "github",
    imgPath: "/images/tech/git.png",
    url: "https://github.com/ajju-py",
    label: "GitHub",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/ajay-tandale-8030b8231/",
    label: "LinkedIn",
  },
  {
    name: "credly",
    imgPath: "/images/badges/rhcsa.png",
    url: "https://www.credly.com/users/ajay-tandale",
    label: "Credly Profile",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};

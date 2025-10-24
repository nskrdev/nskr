import type { TechStack } from "../types/tech-stack";

export const TECH_STACK: TechStack[] = [
  // Programming Languages
  {
    key: "python", // SiPython icon
    title: "Python",
    href: "https://www.python.org/",
    categories: ["Language"],
  },
  {
    key: "ts", // SiTypescript icon
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Language"],
  },
  {
    key: "js", // SiJavascript icon
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language"],
  },
  {
    key: "cpp",
    title: "C++",
    href: "https://cplusplus.com/",
    categories: ["Language"],
  },
  {
    key: "c",
    title: "C",
    href: "https://en.wikipedia.org/wiki/C_(programming_language)",
    categories: ["Language"],
  },
  {
    key: "java",
    title: "Java",
    href: "https://www.java.com/",
    categories: ["Language"],
  },
  {
    key: "r",
    title: "R",
    href: "https://www.r-project.org/",
    categories: ["Language"],
  },

  // AI & Machine Learning
  {
    key: "tensorflow",
    title: "TensorFlow",
    href: "https://www.tensorflow.org/",
    categories: ["AI", "Library"],
  },
  {
    key: "keras",
    title: "Keras",
    href: "https://keras.io/",
    categories: ["AI", "Library"],
  },
  {
    key: "scikit-learn",
    title: "Scikit-learn",
    href: "https://scikit-learn.org/",
    categories: ["AI", "Library"],
  },
  {
    key: "opencv",
    title: "OpenCV",
    href: "https://opencv.org/",
    categories: ["AI", "Library"],
  },
  {
    key: "mediapipe",
    title: "MediaPipe",
    href: "https://mediapipe.dev/",
    categories: ["AI", "Library"],
  },
  {
    key: "spacy",
    title: "spaCy",
    href: "https://spacy.io/",
    categories: ["AI", "Library"],
  },
  {
    key: "pandas",
    title: "Pandas",
    href: "https://pandas.pydata.org/",
    categories: ["Library"],
  },
  {
    key: "numpy",
    title: "NumPy",
    href: "https://numpy.org/",
    categories: ["Library"],
  },

  // Backend & API Frameworks
  {
    key: "flask",
    title: "Flask",
    href: "https://flask.palletsprojects.com/",
    categories: ["Framework"],
  },
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    categories: ["Runtime Environment"],
  },

  // Frontend Technologies (Supporting)
  {
    key: "react", // This matches Icons.react
    title: "React",
    href: "https://react.dev/",
    categories: ["Library", "UI Library"],
  },
  {
    key: "nextjs", // SiNextdotjs icon
    title: "Next.js",
    href: "https://nextjs.org/",
    categories: ["Framework"],
    theme: true,
  },
  {
    key: "html5",
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    categories: ["Language"],
  },
  {
    key: "css3",
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    categories: ["Language"],
  },

  // DevOps & Containerization
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com/",
    categories: ["Containerization"],
  },
  {
    key: "kubernetes",
    title: "Kubernetes",
    href: "https://kubernetes.io/",
    categories: ["Containerization"],
  },
  {
    key: "linux",
    title: "Linux",
    href: "https://www.linux.org/",
    categories: ["Tools"],
    theme: true,
  },
  {
    key: "arch-linux",
    title: "Arch Linux",
    href: "https://archlinux.org/",
    categories: ["Tools"],
    theme: true,
  },
  {
    key: "bash",
    title: "Bash",
    href: "https://www.gnu.org/software/bash/",
    categories: ["Language"],
  },

  // Cloud Platforms
  {
    key: "aws",
    title: "AWS",
    href: "https://aws.amazon.com/",
    categories: ["Cloud"],
  },

  // Automation & Integration
  {
    key: "n8n",
    title: "n8n",
    href: "https://n8n.io/",
    categories: ["Tools", "Other"],
  },
  {
    key: "woocommerce",
    title: "WooCommerce",
    href: "https://woocommerce.com/",
    categories: ["Tools"],
  },
  {
    key: "klaviyo",
    title: "Klaviyo",
    href: "https://www.klaviyo.com/",
    categories: ["Tools"],
  },

  // Version Control & Collaboration
  {
    key: "git", // No icon available - will show fallback
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["Version Control"],
  },
  {
    key: "github", // This matches Icons.github
    title: "GitHub",
    href: "https://github.com/",
    categories: ["Version Control"],
    theme: true,
  },

  // Development Tools
  {
    key: "vscode",
    title: "VS Code",
    href: "https://code.visualstudio.com/",
    categories: ["Tools"],
  },
  {
    key: "cursor",
    title: "Cursor",
    href: "https://cursor.sh/",
    categories: ["Tools", "AI"],
  },
  {
    key: "jupyter",
    title: "Jupyter",
    href: "https://jupyter.org/",
    categories: ["Tools"],
  },

  // APIs & Integration
  {
    key: "rest-api",
    title: "REST API",
    href: "https://restfulapi.net/",
    categories: ["Other"],
  },

  {
    key: "slack",
    title: "Slack API",
    href: "https://api.slack.com/",
    categories: ["Tools"],
  },

  // Additional Tools
  {
    key: "cuda",
    title: "CUDA",
    href: "https://developer.nvidia.com/cuda-toolkit",
    categories: ["AI", "Other"],
  },
  {
    key: "github-pages",
    title: "GitHub Pages",
    href: "https://pages.github.com/",
    categories: ["Cloud"],
    theme: true,
  },
  {
    key: "linux",
    title: "Linux (Arch)",
    displayName: "Linux",
    href: "https://archlinux.org/",
    categories: ["Tools"],
    theme: true,
  },
];

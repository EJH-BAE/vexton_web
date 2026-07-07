const GITHUB_REPO = "https://github.com/EJH-BAE/Vexton_AI";
const RELEASES_URL = "https://github.com/EJH-BAE/Vexton_AI/releases";
const DEMO_URL = "https://github.com/EJH-BAE/Vexton_AI/blob/main/init_/demo.mp4";
const LOGO_URL =
  "https://raw.githubusercontent.com/EJH-BAE/Vexton_AI/main/init_/vexton-logo%20(2).png";
const SCREENSHOT_URL =
  "https://github.com/user-attachments/assets/2aa97847-257a-4643-a038-bbbfe87c1daf";

export const links = {
  github: GITHUB_REPO,
  releases: RELEASES_URL,
  demo: DEMO_URL,
  logo: LOGO_URL,
  screenshot: SCREENSHOT_URL,
  ollama: "https://ollama.com",
  nodejs: "https://nodejs.org",
  license: "https://github.com/EJH-BAE/Vexton_AI/blob/main/LICENSE",
};

export const downloads = [
  {
    platform: "Windows",
    icon: "⊞",
    file: "VextonSetup_v1.0.0.exe",
    href: "https://github.com/EJH-BAE/Vexton_AI/releases/download/v1.0.0/VextonSetup_v1.0.0.exe",
    note: "Installer (.exe)",
  },
  {
    platform: "macOS",
    icon: "⌘",
    file: "VextonSetup_v1.0.0.dmg",
    href: "https://github.com/EJH-BAE/Vexton_AI/releases/download/v1.0.0/VextonSetup_v1.0.0.dmg",
    note: "Disk image (.dmg)",
  },
  {
    platform: "Linux",
    icon: "◆",
    file: "Vexton_v1.0.0_Linux.zip",
    href: "https://github.com/EJH-BAE/Vexton_AI/releases/download/v1.0.0/Vexton_v1.0.0_Linux.zip",
    note: "Archive (.zip)",
  },
];

export const features = [
  {
    title: "Runs on localhost",
    description:
      "Your code and prompts never leave your machine. Ollama runs locally, and Vexton connects directly to it.",
    icon: "🏠",
  },
  {
    title: "Chat-driven coding",
    description:
      "Type a prompt in the chat tab and Vexton generates high-quality code tailored to your request.",
    icon: "💬",
  },
  {
    title: "Built-in editor",
    description:
      "A clean, text-based editor in the browser lets you review, edit, and organize generated files.",
    icon: "✏️",
  },
  {
    title: "Built from scratch",
    description:
      "No forked platforms or borrowed codebases. Vexton is an original project with its own UI and Ollama integration.",
    icon: "⚡",
  },
  {
    title: "Unlimited tokens",
    description:
      "No API quotas or pay-per-token limits. Run as many prompts as you want with your local model.",
    icon: "∞",
  },
  {
    title: "Model flexibility",
    description:
      "Defaults to llama3:latest, but you can switch to any Ollama model that fits your workflow.",
    icon: "🧠",
  },
];

export const setupSteps = [
  {
    step: "01",
    title: "Install Ollama",
    description: "Download Ollama and pull the default model.",
    code: "ollama pull llama3",
  },
  {
    step: "02",
    title: "Get Vexton",
    description: "Download the installer for your OS, or clone the repository.",
    code: "npm install && npm run dev",
  },
  {
    step: "03",
    title: "Start coding",
    description: "Open localhost:5173, confirm Ollama is connected, and start chatting.",
    code: "localhost:5173",
  },
];

import {
  FileDown,
  Folder,
  Globe,
  MegaphoneOff,
  MessageSquare,
  Moon,
  MousePointerClick,
  PenTool,
  Save,
} from "lucide-react";

export const links = {
  chromeStore:
    "https://chromewebstore.google.com/detail/notelab/geolaeooajdkifdkblgijpfnboegnphb",
  github: "https://github.com/rtanw10/NoteLab",
  youtube: "https://www.youtube.com/@RTVSoftwareSolutions",
  reportBug:
    "mailto:notelab2022@gmail.com?subject=Bug Report&body=Please describe the bug you encountered:",
  requestFeature:
    "mailto:notelab2022@gmail.com?subject=Feature Request&body=Please describe the feature you'd like to see:",
};

export const navItems = [
  { label: "Features", href: "#features" },
  { label: "Showcase", href: "#showcase" },
  { label: "Install", href: "#install" },
];

export const featureHighlights = [
  {
    title: "Ad-Free",
    description:
      "NoteLab will never display ads so you can focus on taking notes.",
    icon: MegaphoneOff,
  },
  {
    title: "100% Offline",
    description:
      "NoteLab is 100% offline, meaning you can take notes anywhere and at any time.",
    icon: FileDown,
  },
  {
    title: "Global + Website Modes",
    description:
      "Switch between global notes and website-specific notes with one toggle.",
    icon: Globe,
  },
  {
    title: "Domain-Based Note Organization",
    description:
      "Notes can be separated automatically by website domain to keep context clean.",
    icon: Folder,
  },
  {
    title: "Rich Text Editing Toolbar",
    description:
      "Use formatting tools for fonts, color, alignment, lists, links, and more.",
    icon: PenTool,
  },
  {
    title: "Right-Click Content Saving",
    description:
      "Capture selected text, images, video, and audio directly by right clicking.",
    icon: MousePointerClick,
  },
  {
    title: "Auto-Save with Live Status",
    description:
      "See whether your notes are saved, saving, or not yet saved in real time.",
    icon: Save,
  },
  {
    title: "Dark Mode",
    description:
      "Toggle dark mode for better readability during longer note-taking sessions.",
    icon: Moon,
  },
  {
    title: "Built-in Support Links",
    description:
      "Quickly report bugs and request features directly from the extension.",
    icon: MessageSquare,
  },
];

export const showcaseCards = [
  {
    title: "Edit Notes Your Way",
    description:
      "A full formatting toolbar helps you structure notes clearly for faster revision.",
    art: "editor" as const,
  },
  {
    title: "Capture More Than Text",
    description:
      "Save images, audio, and video from any page using the right-click flow.",
    art: "capture" as const,
  },
  {
    title: "Save, Revisit, and Export",
    description:
      "Keep notes available when needed and export to Word for assignments or sharing.",
    art: "export" as const,
  },
];

export const workflowSteps = [
  {
    step: "Install",
    details: "Add NoteLab to Chrome and pin it to your toolbar.",
  },
  {
    step: "Capture",
    details: "Clip content from pages instantly while browsing.",
  },
  {
    step: "Organize",
    details: "Format, auto-save, and export your notes when ready.",
  },
];

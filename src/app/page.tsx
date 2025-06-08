"use client";
import React, { useState, useEffect } from "react";
import {
  Github,
  Triangle,
  Palette,
  Code,
  Gpu,
  Sparkle,
  Bird,
  Search,
  Cloud,
} from "lucide-react";
import { motion } from "framer-motion";

// Example shortcuts data - in your actual app, you'd load this from an external JSON file
const shortcutsData = [
  {
    id: 1,
    title: "GitHub",
    url: "https://github.com/thomasjbell?tab=repositories",
    icon: "Github",
    category: "Development",
  },
  {
    id: 2,
    title: "Vercel",
    url: "https://vercel.com",
    icon: "Triangle",
    category: "Development",
  },
  {
    id: 3,
    title: "Localhost",
    url: "http://localhost:3000",
    icon: "Code",
    category: "Development",
  },
  {
    id: 4,
    title: "Tailwind CSS",
    url: "https://v3.tailwindcss.com",
    icon: "Palette",
    category: "Development",
  },

  {
    id: 5,
    title: "Claude",
    url: "https://claude.ai",
    icon: "Gpu",
    category: "Artificial Intelligence",
  },
  {
    id: 6,
    title: "Gemini",
    url: "https://gemini.google.com",
    icon: "Sparkle",
    category: "Artificial Intelligence",
  },
  {
    id: 7,
    title: "Lucide",
    url: "https://lucide.dev/icons/",
    icon: "Bird",
    category: "Icons",
  },
  {
    id: 8,
    title: "Google Search Console",
    url: "https://search.google.com/search-console?resource_id=sc-domain%3Aequalab.uk",
    icon: "Search",
    category: "Analytics",
  },
  {
    id: 9,
    title: "Cloudflare Dashboard",
    url: "https://dash.cloudflare.com/",
    icon: "Cloud",
    category: "Analytics",
  },
];

interface Shortcut {
  id: number;
  title: string;
  url: string;
  icon: string;
  category: string;
}

export default function App() {
  const [shortcuts, setShortcuts] = useState<Shortcut[]>([]);

  useEffect(() => {
    // In your actual app, you'd fetch this from your external JSON file
    // For example: fetch('/api/shortcuts.json').then(res => res.json()).then(setShortcuts)
    setShortcuts(shortcutsData);
  }, []);

  const handleShortcutClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const getIcon = (iconName: string) => {
    const iconMap: {
      [key: string]: React.ComponentType<{ size?: number; className?: string }>;
    } = {
      Github,
      Triangle,
      Palette,
      Code,
      Gpu,
      Sparkle,
      Bird,
      Search,
      Cloud,
    };

    const IconComponent = iconMap[iconName];
    return IconComponent ? (
      <IconComponent
        size={32}
        className="text-stone-300 group-hover:text-white transition-colors duration-200"
      />
    ) : (
      <div className="w-8 h-8 bg-stone-700 rounded"></div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 to-stone-800 text-stone-100">
      {/* Header */}
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mt-8 mb-4 text-stone-100">
            webbl shortcuts
          </h1>
          <motion.div
            className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-0.5 w-1/3 md:w-1/4 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.05,
            }}
            viewport={{ once: true }}
          />
        </div>

        {/* Shortcuts Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-48">
          {shortcuts.map((shortcut) => (
            <button
              key={shortcut.id}
              onClick={() => handleShortcutClick(shortcut.url)}
              className="group relative bg-stone-900 hover:bg-stone-800  rounded-2xl p-6 py-10 transition-all duration-300 hover:scale-104 hover:shadow-xl hover:shadow-violet-500/10 outline outline-1 outline-violet-600/40"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-fuchsia-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <div className="relative z-10 flex flex-col items-center space-y-3">
                <div className="mb-2 group-hover:scale-110 transition-transform duration-200">
                  {getIcon(shortcut.icon)}
                </div>
                <div className="text-center">
                  <div className="font-semibold text-stone-100 text-sm group-hover:text-white transition-colors duration-200">
                    {shortcut.title}
                  </div>
                  <div className="text-xs text-stone-500 mt-1 group-hover:text-stone-400 transition-colors duration-200">
                    {shortcut.category}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Empty State */}
        {shortcuts.length === 0 && (
          <div className="text-center py-12">
            <div className="relative inline-block w-16 h-16">
              {/* Outer spinner - clockwise */}
              <div className="absolute inset-0 border-2 border-stone-900 border-t-violet-500 border-r-fuchsia-500 rounded-full animate-spin" />

              {/* Inner spinner - counter-clockwise */}
              <div
                className="absolute inset-2 border-2 border-stone-800 border-b-violet-400 border-l-fuchsia-400 rounded-full animate-spin"
                style={{
                  animationDirection: "reverse",
                  animationDuration: "1.5s",
                }}
              />
            </div>
            <h3 className="text-xl font-semibold text-stone-300 mb-2">
              No shortcuts found
            </h3>
            <p className="text-stone-500">Add some shortcuts to get started</p>
          </div>
        )}
      </div>
    </div>
  );
}

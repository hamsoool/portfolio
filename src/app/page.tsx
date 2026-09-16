"use client";

import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import AboutSection from "@/components/AboutSection";
import ToolboxSection from "@/components/ToolboxSection";
import ArchiveSection from "@/components/ArchiveSection";
import ConnectSection from "@/components/ConnectSection";
import Footer from "@/components/Footer";
import ProjectDossierModal, { ProjectData } from "@/components/ProjectDossierModal";
import Mini2048Modal from "@/components/Mini2048Modal";
import InteractiveStamps, { PlacedStamp } from "@/components/InteractiveStamps";
import CollageStickers from "@/components/CollageStickers";
import { initAudio, toggleAudio, isAudioEnabled } from "@/components/audio";

export default function Home() {
  const [isNegativeTheme, setIsNegativeTheme] = useState(false);
  const [isAudioOn, setIsAudioOn] = useState(false);
  const [isStampMode, setIsStampMode] = useState(false);
  const [stamps, setStamps] = useState<PlacedStamp[]>([]);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [is2048Open, setIs2048Open] = useState(false);

  useEffect(() => {
    initAudio();
    setIsAudioOn(isAudioEnabled());
    const savedTheme = localStorage.getItem("hml_theme");
    if (savedTheme === "negative") {
      setIsNegativeTheme(true);
      document.documentElement.setAttribute("data-theme", "negative");
    }
  }, []);

  const handleToggleTheme = () => {
    const next = !isNegativeTheme;
    setIsNegativeTheme(next);
    if (next) {
      document.documentElement.setAttribute("data-theme", "negative");
      localStorage.setItem("hml_theme", "negative");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("hml_theme", "standard");
    }
  };

  const handleToggleAudio = () => {
    const next = toggleAudio();
    setIsAudioOn(next);
  };

  const handleToggleStampMode = () => {
    setIsStampMode((prev) => !prev);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--paper)] text-[var(--ink)]">
      {/* Interactive Stamp Layer */}
      <InteractiveStamps
        isStampMode={isStampMode}
        onDisableStampMode={() => setIsStampMode(false)}
        stamps={stamps}
        setStamps={setStamps}
      />

      {/* Floating Draggable Zine Stickers */}
      <CollageStickers />

      {/* Top Navigation Bar */}
      <Navigation
        isNegativeTheme={isNegativeTheme}
        onToggleTheme={handleToggleTheme}
        isAudioOn={isAudioOn}
        onToggleAudio={handleToggleAudio}
        isStampMode={isStampMode}
        onToggleStampMode={handleToggleStampMode}
      />

      {/* Main Content Area */}
      <main id="main" className="flex-1">
        <Hero />
        <Marquee />
        <AboutSection />
        <ToolboxSection />
        <ArchiveSection
          onSelectProject={(proj) => setSelectedProject(proj)}
          onOpen2048={() => setIs2048Open(true)}
        />
        <Marquee
          items={[
            "CLINICKA",
            "PHOENIX E-WALLET",
            "GLASSHILL PANSOL",
            "SOUL SCRAPER",
            "OCTANE",
            "MEMOIR",
            "GORDON COLLEGE BSIT",
            "FULL-STACK",
          ]}
        />
        <ConnectSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Case File Inspection Modal */}
      <ProjectDossierModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Playable Mini 2048 Game Easter Egg */}
      <Mini2048Modal
        isOpen={is2048Open}
        onClose={() => setIs2048Open(false)}
      />
    </div>
  );
}

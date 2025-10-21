import React from "react";
import {
  SiPython, SiTypescript, SiJavascript, SiCplusplus, SiC, SiR,
  SiTensorflow, SiKeras, SiScikitlearn, SiOpencv, SiPandas, SiNumpy,
  SiFlask, SiNodedotjs, SiReact, SiNextdotjs, SiHtml5, SiCss3,
  SiDocker, SiKubernetes, SiLinux, SiGnubash, SiAmazon,
  SiGit, SiGithub, SiJupyter,
  SiSlack, SiNotion, SiGooglesheets, SiOracle
} from "react-icons/si";
import { FaTerminal } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import Image from "next/image";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

// Custom logo component using your og-image.png
const PersonalLogo = ({ className }: { className?: string }) => (
  <Image
    src="/images/og-image.png"
    alt="Personal Logo"
    width={32}
    height={32}
    className={className}
    unoptimized
  />
);

// Map tech stack keys to react-icons
const iconMap: Record<string, React.ComponentType<any>> = {
  // Programming Languages
  python: SiPython,
  ts: SiTypescript,
  js: SiJavascript,
  cpp: SiCplusplus,
  c: SiC,
  java: SiOracle, // Using Oracle icon for Java
  r: SiR,
  bash: SiGnubash,

  // AI & ML
  tensorflow: SiTensorflow,
  keras: SiKeras,
  "scikit-learn": SiScikitlearn,
  opencv: SiOpencv,
  pandas: SiPandas,
  numpy: SiNumpy,

  // Backend & Frameworks
  flask: SiFlask,
  nodejs: SiNodedotjs,

  // Frontend
  react: SiReact,
  nextjs: SiNextdotjs,
  html5: SiHtml5,
  css3: SiCss3,

  // DevOps & Tools
  docker: SiDocker,
  kubernetes: SiKubernetes,
  linux: SiLinux,
  aws: SiAmazon,
  // "aws-ecs": SiAmazon,

  // Version Control
  git: SiGit,
  github: SiGithub,

  // Development Tools
  vscode: VscCode,
  jupyter: SiJupyter,
  notion: SiNotion,

  // APIs & Services
  "google-sheets": SiGooglesheets,
  slack: SiSlack,

  // Personal Brand
  "red-brand": PersonalLogo,
};

export function TeckStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <ul className="flex flex-wrap gap-4 select-none">
          {TECH_STACK.map((tech) => {
            // Get the icon component from react-icons
            const IconComponent = iconMap[tech.key] || FaTerminal;
            const hasCustomIcon = tech.key in iconMap;

            return (
              <li key={tech.key} className="flex">
                <SimpleTooltip content={tech.title}>
                  <a
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tech.title}
                    className={cn(
                      "flex items-center justify-center w-8 h-8 transition-colors",
                      hasCustomIcon
                        ? "text-foreground hover:text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <IconComponent className="w-8 h-8" />
                    <span className="sr-only">{tech.title}</span>
                  </a>
                </SimpleTooltip>
              </li>
            );
          })}
        </ul>
      </PanelContent>
    </Panel>
  );
}

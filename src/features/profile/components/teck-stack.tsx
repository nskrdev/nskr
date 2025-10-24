import React from "react";
import { FaTerminal } from "react-icons/fa";

import { getIcon } from "@/components/icons";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

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
            const icon = getIcon(tech.key, 32);
            const displayName = tech.displayName || tech.title;

            return (
              <li key={tech.key} className="flex">
                <SimpleTooltip content={displayName}>
                  <a
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={displayName}
                    className={cn(
                      "flex h-8 w-8 items-center justify-center transition-colors",
                      icon
                        ? "text-foreground hover:text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {icon || <FaTerminal className="h-8 w-8" />}
                    <span className="sr-only">{displayName}</span>
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

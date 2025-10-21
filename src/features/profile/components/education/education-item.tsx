import { FileCheckIcon } from "lucide-react";

import { Icons } from "@/components/icons";
import { Markdown } from "@/components/markdown";
import {
    CollapsibleChevronsIcon,
    CollapsibleContent,
    CollapsibleTrigger,
    CollapsibleWithContext,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { Prose } from "@/components/ui/typography";

import type { Education } from "../../types/education";

export function EducationItem({
    className,
    education,
}: {
    className?: string;
    education: Education;
}) {
    const canExpand = !!education.description;

    return (
        <CollapsibleWithContext disabled={!canExpand} asChild>
            <div className={className}>
                <div className="flex items-center hover:bg-accent2">
                    <div
                        className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-edge ring-offset-1 ring-offset-background"
                        aria-hidden
                    >
                        <Icons.award className="pointer-events-none size-4 text-muted-foreground" />
                    </div>

                    <div className="flex-1 border-l border-dashed border-edge">
                        <CollapsibleTrigger className="flex w-full items-center gap-4 p-4 pr-2 text-left select-none">
                            <div className="flex-1">
                                <h3 className="mb-1 leading-snug font-medium text-balance">
                                    {education.degree}
                                </h3>

                                <div className="mb-2 text-sm text-muted-foreground">
                                    {education.institution}
                                    {education.location && ` • ${education.location}`}
                                </div>

                                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                                    <dl>
                                        <dt className="sr-only">Period</dt>
                                        <dd>{education.period}</dd>
                                    </dl>

                                    {education.achievements && (
                                        <>
                                            <Separator
                                                className="data-[orientation=vertical]:h-4"
                                                orientation="vertical"
                                            />
                                            <dl>
                                                <dt className="sr-only">Achievements</dt>
                                                <dd>{education.achievements}</dd>
                                            </dl>
                                        </>
                                    )}
                                </div>
                            </div>

                            {education.referenceLink && (
                                <SimpleTooltip content="Open Reference Link">
                                    <a
                                        className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
                                        href={education.referenceLink}
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <FileCheckIcon
                                            className="pointer-events-none size-4"
                                            aria-hidden
                                        />
                                        <span className="sr-only">Open Reference Link</span>
                                    </a>
                                </SimpleTooltip>
                            )}

                            {canExpand && (
                                <div
                                    className="shrink-0 text-muted-foreground [&_svg]:size-4"
                                    aria-hidden
                                >
                                    <CollapsibleChevronsIcon />
                                </div>
                            )}
                        </CollapsibleTrigger>
                    </div>
                </div>

                {canExpand && (
                    <CollapsibleContent className="group overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                        <div className="border-t border-dashed border-edge">
                            <Prose className="p-4 duration-300 group-data-[state=closed]:animate-fade-out group-data-[state=open]:animate-fade-in">
                                <Markdown>{education.description}</Markdown>
                            </Prose>
                        </div>
                    </CollapsibleContent>
                )}
            </div>
        </CollapsibleWithContext>
    );
}
import dayjs from "dayjs";

import { CollapsibleList } from "@/components/collapsible-list";

import { EDUCATION } from "../../data/education";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { EducationItem } from "./education-item";

// Sort education by start date (most recent first)
const SORTED_EDUCATION = [...EDUCATION].sort((a, b) => {
    // Extract start date from period (format: "YYYY-MM to YYYY-MM" or "YYYY-MM to Present")
    const getStartDate = (period: string) => {
        const startDate = period.split(" to ")[0];
        return dayjs(startDate);
    };

    return getStartDate(b.period).diff(getStartDate(a.period));
});

export function Education() {
    return (
        <Panel id="education">
            <PanelHeader>
                <PanelTitle>
                    Education
                    <sup className="ml-1 font-mono text-sm font-medium text-muted-foreground select-none">
                        ({EDUCATION.length})
                    </sup>
                </PanelTitle>
            </PanelHeader>

            <CollapsibleList
                items={SORTED_EDUCATION}
                max={8}
                keyExtractor={(item) => item.id}
                renderItem={(item) => <EducationItem education={item} />}
            />
        </Panel>
    );
}
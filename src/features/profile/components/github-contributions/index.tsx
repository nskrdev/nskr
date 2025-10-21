"use client";

import { Suspense, useEffect, useState } from "react";

import type { Activity } from "@/components/ui/contribution-graph";

import { getGitHubContributions } from "../../data/github-contributions";
import { Panel } from "../panel";
import { GitHubContributionFallback, GitHubContributionGraph } from "./graph";

function GitHubContributionGraphAsync() {
  const [contributions, setContributions] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGitHubContributions()
      .then(setContributions)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <GitHubContributionFallback />;
  }

  return <GitHubContributionGraph contributions={contributions} />;
}

export function GitHubContributions() {
  return (
    <Panel>
      <h2 className="sr-only">GitHub Contributions</h2>

      <Suspense fallback={<GitHubContributionFallback />}>
        <GitHubContributionGraphAsync />
      </Suspense>
    </Panel>
  );
}

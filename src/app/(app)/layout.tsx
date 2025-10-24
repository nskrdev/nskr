import dynamic from "next/dynamic";

import { PageTransition } from "@/components/page-transition";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const ScrollTop = dynamic(() =>
  import("@/components/scroll-top").then((mod) => mod.ScrollTop)
);

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <div className="flex-1">
        <PageTransition>{children}</PageTransition>
      </div>
      <SiteFooter />
      <ScrollTop />
    </>
  );
}

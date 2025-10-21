import type { Registry } from "shadcn/schema";

export const lib: Registry["items"] = [
  {
    name: "utils",
    type: "registry:lib",
    title: "Utility Functions",
    author: "Red <red@nskr.me>",
    dependencies: ["clsx", "tailwind-merge"],
    files: [
      {
        path: "src/lib/utils.ts",
        type: "registry:lib",
      },
    ],
  },
];

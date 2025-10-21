import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import type { SocialLink } from "../types/social-links";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    description: "nskrdev",
    href: "https://www.linkedin.com/in/nskrdev",
  },
  {
    icon: FaGithub,
    title: "GitHub",
    description: "nskrdev",
    href: "https://github.com/nskrdev",
  },
  {
    icon: FaTwitter,
    title: "X (Formerly Twitter)",
    description: "@nskrdev",
    href: "https://x.com/nskrdev",
  },
  {
    icon: SiLeetcode,
    title: "LeetCode",
    description: "nskrdev",
    href: "https://leetcode.com/u/nskrdev/",
  },
];

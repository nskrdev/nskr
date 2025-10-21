import type { SocialLink } from "../types/social-links";
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

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

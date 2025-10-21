# Portfolio Customization Design Document

## Overview

This design document provides a comprehensive guide for customizing the chanhdai.com portfolio project to replace all personal information with your own details. The portfolio is built with Next.js 15, Tailwind CSS v4, and shadcn/ui, featuring a modern design with personal profile, blog, component registry, and interactive elements.

The customization process is organized into logical phases, starting with core configuration and progressing through personal data, content, and assets. Each section includes specific file paths, exact changes needed, and considerations for maintaining functionality.

## Architecture

### Project Structure Analysis

The portfolio follows a feature-based architecture:

```
src/
├── config/           # Site-wide configuration
├── features/
│   ├── profile/      # Personal information and data
│   └── blog/         # Blog content and management
├── components/       # Reusable UI components
├── app/             # Next.js app router pages
└── assets/          # Static assets and media
```

### Data Flow

1. **Configuration Layer**: `src/config/site.ts` imports user data and defines site-wide settings
2. **Data Layer**: `src/features/profile/data/` contains all personal information in TypeScript files
3. **Component Layer**: Components consume data from the data layer and configuration
4. **Content Layer**: Blog posts and static content in MDX format
5. **Asset Layer**: Images, audio, and other media files

## Components and Interfaces

### Phase 1: Core Project Configuration

#### 1.1 Package Configuration
**File**: `package.json`
```json
{
  "name": "your-domain.com",
  "description": "Your portfolio description",
  "homepage": "https://your-domain.com",
  "author": {
    "name": "Your Full Name",
    "email": "your-email@domain.com",
    "url": "https://github.com/your-username"
  },
  "contributors": [
    {
      "name": "Your Full Name",
      "email": "your-email@domain.com",
      "url": "https://github.com/your-username"
    }
  ],
  "repository": {
    "type": "git",
    "url": "git+https://github.com/your-username/your-repo.git"
  }
}
```

#### 1.2 Site Configuration
**File**: `src/config/site.ts`
```typescript
export const MAIN_NAV: NavItem[] = [
  {
    title: "Your Portfolio Name", // Replace "Daifolio"
    href: "/",
  },
  // ... other nav items
];

export const GITHUB_USERNAME = "your-username";
export const SOURCE_CODE_GITHUB_REPO = "your-username/your-repo";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/your-username/your-repo";

export const UTM_PARAMS = {
  utm_source: "your-domain.com",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
```

#### 1.3 Environment Variables
**File**: `.env.local` (create if doesn't exist)
```
APP_URL=https://your-domain.com
```

### Phase 2: Personal Profile Data

#### 2.1 User Information
**File**: `src/features/profile/data/user.ts`

Replace the entire `USER` object with your information:
```typescript
export const USER: User = {
  firstName: "Your First Name",
  lastName: "Your Last Name",
  displayName: "Your Display Name",
  username: "your-username",
  gender: "your-gender", // "male", "female", or "other"
  pronouns: "your/pronouns", // e.g., "she/her", "he/him", "they/them"
  bio: "Your professional tagline",
  flipSentences: [
    "Your main tagline",
    "Your job title",
    "Your specialty or focus",
  ],
  address: "Your City, Your Country",
  phoneNumber: "base64-encoded-phone", // Use base64 encoding for privacy
  email: "base64-encoded-email", // Use base64 encoding for privacy
  website: "https://your-domain.com",
  jobTitle: "Your Job Title",
  jobs: [
    {
      title: "Your Current Position",
      company: "Your Company",
      website: "https://company-website.com",
    },
    // Add more current positions
  ],
  about: `Your detailed about section...`,
  avatar: "https://your-cdn.com/your-avatar.webp",
  ogImage: "https://your-cdn.com/your-og-image.png",
  namePronunciationUrl: "/audio/your-name.mp3", // Optional
  keywords: [
    "your-username",
    "your full name variations",
    "your brand keywords",
  ],
  dateCreated: "YYYY-MM-DD", // When you created your portfolio
};
```

**Note**: For email and phone encoding, use a base64 encoder:
- Email: `btoa("your-email@domain.com")`
- Phone: `btoa("+1234567890")` (E.164 format)

#### 2.2 Work Experience
**File**: `src/features/profile/data/experiences.ts`

Replace the entire `EXPERIENCES` array with your work history:
```typescript
export const EXPERIENCES: Experience[] = [
  {
    id: "company-slug",
    companyName: "Company Name",
    companyLogo: "https://your-cdn.com/company-logo.webp",
    positions: [
      {
        id: "unique-position-id",
        title: "Your Position Title",
        employmentPeriod: {
          start: "MM.YYYY",
          end: "MM.YYYY", // Omit for current position
        },
        employmentType: "Full-time", // "Full-time", "Part-time", "Contract", etc.
        icon: "code", // "code", "design", "idea", "education"
        description: `Your role description with bullet points...`,
        skills: ["Skill1", "Skill2", "Skill3"],
        isExpanded: true, // Show expanded by default
      },
    ],
    isCurrentEmployer: true, // For current positions
  },
  // Add more experiences
];
```

#### 2.3 Projects
**File**: `src/features/profile/data/projects.ts`

Replace the entire `PROJECTS` array:
```typescript
export const PROJECTS: Project[] = [
  {
    id: "project-slug",
    title: "Project Name",
    period: {
      start: "MM.YYYY",
      end: "MM.YYYY", // Omit for ongoing projects
    },
    link: "https://project-url.com",
    skills: ["Technology1", "Technology2"],
    description: `Project description...`,
    logo: "https://your-cdn.com/project-logo.svg",
    isExpanded: true, // Show expanded by default
  },
  // Add more projects
];
```

#### 2.4 Social Links
**File**: `src/features/profile/data/social-links.ts`

Replace with your social media profiles:
```typescript
export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: "https://your-cdn.com/linkedin-icon.webp",
    title: "LinkedIn",
    description: "your-linkedin-username",
    href: "https://linkedin.com/in/your-username",
  },
  {
    icon: "https://your-cdn.com/github-icon.webp",
    title: "GitHub",
    description: "your-github-username",
    href: "https://github.com/your-username",
  },
  // Add more social links
];
```

#### 2.5 Tech Stack
**File**: `src/features/profile/data/tech-stack.ts`

Customize the technologies you want to showcase:
```typescript
export const TECH_STACK: TechStack[] = [
  {
    key: "technology-key",
    title: "Technology Name",
    href: "https://technology-website.com",
    categories: ["Category"], // "Language", "Framework", "Library", etc.
    theme: true, // Optional: adapts to dark/light theme
  },
  // Add your technologies
];
```

#### 2.6 Awards and Certifications
**Files**: 
- `src/features/profile/data/awards.ts`
- `src/features/profile/data/certifications.ts`

Replace with your achievements and certifications.

### Phase 3: Content Customization

#### 3.1 Blog Content
**Directory**: `src/features/blog/content/`

1. **Delete existing blog posts**: Remove all `.mdx` files in this directory
2. **Create your own blog posts**: Add new `.mdx` files with your content
3. **Update blog data**: Modify `src/features/blog/data/posts.ts` to reference your new posts

#### 3.2 Component Examples
**Directory**: `src/registry/examples/`

Review and update any example components that contain personal references or data.

#### 3.3 README and Documentation
**Files**: 
- `README.md`
- `DEVELOPMENT.md`
- Any other documentation files

Replace project description, screenshots, and personal references.

### Phase 4: Asset Replacement

#### 4.1 Images and Media
**Directories to review**:
- `public/` - Static assets
- Any CDN references in data files

**Assets to replace**:
1. **Avatar/Profile Photos**: Update `USER.avatar` URL
2. **OG Images**: Update `USER.ogImage` URL  
3. **Company Logos**: Update in experiences data
4. **Project Logos**: Update in projects data
5. **Social Media Icons**: Update in social links data
6. **Favicon**: Replace `public/favicon.ico` and related files
7. **Audio Files**: Replace name pronunciation if used

#### 4.2 Brand Elements
**Files to check**:
- `src/components/red-mark.tsx` - Brand mark component
- `src/components/red-wordmark.tsx` - Wordmark component
- Any custom brand components

**Actions**:
1. Rename components to match your brand
2. Update SVG content or replace with your brand elements
3. Update component imports throughout the codebase

### Phase 5: Code References

#### 5.1 Component Text and Labels
**Files to search and replace**:
- Search for "Chánh Đại", "chanhdai", "ncdai" across all files
- Replace with your name/brand
- Check component titles, labels, and hardcoded text

#### 5.2 Metadata and SEO
**Files**:
- `src/app/layout.tsx` - Root layout metadata
- `src/app/manifest.ts` - PWA manifest
- `src/app/sitemap.ts` - Sitemap generation
- `src/app/robots.ts` - Robots.txt

**Update**:
- Site title and description
- Author information
- Keywords and metadata
- PWA app name and description

## Data Models

### User Data Structure
```typescript
interface User {
  firstName: string;
  lastName: string;
  displayName: string;
  username: string;
  gender: string;
  pronouns: string;
  bio: string;
  flipSentences: string[];
  address: string;
  phoneNumber: string; // Base64 encoded
  email: string; // Base64 encoded
  website: string;
  jobTitle: string;
  jobs: Job[];
  about: string;
  avatar: string;
  ogImage: string;
  namePronunciationUrl?: string;
  keywords: string[];
  dateCreated: string;
}
```

### Experience Data Structure
```typescript
interface Experience {
  id: string;
  companyName: string;
  companyLogo: string;
  positions: Position[];
  isCurrentEmployer?: boolean;
}

interface Position {
  id: string;
  title: string;
  employmentPeriod: {
    start: string;
    end?: string;
  };
  employmentType: string;
  icon: string;
  description: string;
  skills: string[];
  isExpanded?: boolean;
}
```

## Error Handling

### Common Issues and Solutions

1. **Base64 Encoding Errors**
   - Ensure email and phone are properly base64 encoded
   - Test decoding to verify correctness

2. **Image Loading Issues**
   - Verify all image URLs are accessible
   - Use proper image formats (WebP recommended)
   - Ensure CDN/hosting is configured correctly

3. **Build Errors**
   - Check TypeScript types match data structure
   - Verify all required fields are provided
   - Run `npm run check-types` to validate

4. **SEO and Metadata Issues**
   - Update all metadata references
   - Test OG image generation
   - Verify sitemap and robots.txt

## Testing Strategy

### Pre-Deployment Checklist

1. **Data Validation**
   - [ ] All personal data replaced
   - [ ] No references to original owner
   - [ ] Contact information updated
   - [ ] Social links functional

2. **Content Review**
   - [ ] Blog posts replaced or removed
   - [ ] About sections updated
   - [ ] Project descriptions accurate
   - [ ] Experience information current

3. **Asset Verification**
   - [ ] All images loading correctly
   - [ ] Brand elements updated
   - [ ] Favicon and PWA icons replaced
   - [ ] Audio files updated if used

4. **Technical Testing**
   - [ ] Build completes successfully
   - [ ] No TypeScript errors
   - [ ] All pages render correctly
   - [ ] Contact forms functional
   - [ ] SEO metadata correct

5. **Cross-Browser Testing**
   - [ ] Desktop browsers (Chrome, Firefox, Safari, Edge)
   - [ ] Mobile browsers
   - [ ] PWA installation works
   - [ ] Dark/light theme switching

### Deployment Considerations

1. **Domain Configuration**
   - Update DNS settings
   - Configure SSL certificates
   - Set up CDN if using external assets

2. **Environment Variables**
   - Set production environment variables
   - Configure analytics tracking codes
   - Update API keys if applicable

3. **Performance Optimization**
   - Optimize images for web
   - Configure caching headers
   - Test Core Web Vitals

This design provides a comprehensive roadmap for customizing the portfolio while maintaining its functionality and modern design principles.
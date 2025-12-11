import { UserType } from './types';

export const CONTENT = {
  hero: {
    headline: "Where Future Innovators Connect Before the World Does.",
    subheadline: "A private, AI-powered network for Industry Leaders, Founders, Students & Professionals — built to share knowledge, opportunities, mentorship, and insights shaping tomorrow.",
    ctaPrimary: "Join the Waitlist",
    ctaSecondary: "Request an Early Invite",
    badges: [
      "LinkedIn Login Required",
      "Genuine Industry Profiles Only",
      "Curated Member Approvals"
    ]
  },
  about: {
    headline: "Not a social network — a knowledge engine.",
    description: "Connect with top minds from manufacturing, retail, tech, education, consulting, startups, and global enterprises. AI curates the right people, the right conversations, and the right opportunities for you."
  },
  specialties: [
    "AI-Powered Networking",
    "Knowledge Sharing",
    "Curated Communities",
    "Verified Opportunities",
    "Smart Recommendations",
    "Industry-Focused Insights",
    "Invite-Only Membership",
    "Future-Ready Skill Mapping",
    "Professional Identity Graph",
    "AI Knowledge Extraction"
  ]
};

export const TARGET_AUDIENCE = [
  {
    type: UserType.STUDENT,
    description: "Learn directly from industry leaders."
  },
  {
    type: UserType.PROFESSIONAL,
    description: "Share knowledge, improve visibility, grow network."
  },
  {
    type: UserType.COMPANY,
    description: "Post jobs, find talent, discover trends."
  },
  {
    type: UserType.FOUNDER,
    description: "Connect with mentors, talent, investors."
  }
];

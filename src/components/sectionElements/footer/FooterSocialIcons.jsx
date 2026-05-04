import React from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import IconButton from "../../interactives/IconButton";
import { infos } from "../../../content/content";
import logoInstagram from "../../../assets/imgs/logo/instagram.webp";
import logoLinkedin from "../../../assets/imgs/logo/logoLinkedin.webp";

const icons = {
  facebook: {
    aria: "Facebook",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="transparent"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  instagram: {
    aria: "Instagram",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5C18.216 4 20 5.784 20 7.75v8.5c0 1.966-1.784 3.75-3.75 3.75h-8.5C5.784 20 4 18.216 4 16.25v-8.5C4 5.784 5.784 4 7.75 4zm8.75 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
      </svg>
    ),
  },
  linkedin: {
    aria: "LinkedIn",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.851-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.352V9h3.414v1.561h.049c.476-.9 1.637-1.851 3.37-1.851 3.601 0 4.266 2.369 4.266 5.455v6.287zM5.337 7.433a2.063 2.063 0 110-4.126 2.063 2.063 0 010 4.126zM6.964 20.452H3.708V9h3.256v11.452z" />
      </svg>
    ),
  },
  tiktok: {
    aria: "TikTok",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 30 30"
        fill="currentColor"
      >
        <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.104,4,24,4z M22.689,13.474 c-0.13,0.012-0.261,0.02-0.393,0.02c-1.495,0-2.809-0.768-3.574-1.931c0,3.049,0,6.519,0,6.577c0,2.685-2.177,4.861-4.861,4.861 C11.177,23,9,20.823,9,18.139c0-2.685,2.177-4.861,4.861-4.861c0.102,0,0.201,0.009,0.3,0.015v2.396c-0.1-0.012-0.197-0.03-0.3-0.03 c-1.37,0-2.481,1.111-2.481,2.481s1.11,2.481,2.481,2.481c1.371,0,2.581-1.08,2.581-2.45c0-0.055,0.024-11.17,0.024-11.17h2.289 c0.215,2.047,1.868,3.663,3.934,3.811V13.474z"></path>
      </svg>
    ),
  },
  x: {
    aria: "X",
    svg: (
      <svg viewBox="0 0 21.573 19.5" width="20" height="20" fill="currentColor">
        <path d="m 16.998462,0 h 3.308 l -7.227,8.26 8.502,11.24 h -6.657 l -5.2139994,-6.817 -5.966,6.817 H 0.43446256 L 8.1644626,10.665 0.00846256,0 H 6.8344626 l 4.7129994,6.231 z m -1.161,17.52 h 1.833 L 5.8384626,1.876 h -1.967 z" />
      </svg>
    ),
  },
  youtube: {
    aria: "YouTube",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    ),
  },
};

const iconImages = {};

function FooterSocialIcons({ withAnimation = true }) {
  const platforms = {
    instagram: infos.instagramProfile,
    linkedin: infos.linkeDinProfile,
    facebook: infos.facebookProfile,
    tiktok: infos.tiktokProfile,
    x: infos.x,
    youtube: infos.youtubeProfile,
  };

  return (
    <>
      {Object.entries(platforms).map(([key, profile]) => {
        if (!profile || profile === "A_Definir") return null;

        const cleanedProfile = profile.replace(/^@/, "");

        const link =
          key === "x"
            ? `https://twitter.com/${profile}`
            : key === "linkedin"
            ? `https://www.linkedin.com/company/${profile}`
            : key === "tiktok"
            ? `https://www.tiktok.com/@${cleanedProfile}`
            : key === "youtube"
            ? `https://youtube.com/${infos.youtubeProfile}`
            : `https://www.${key}.com/${cleanedProfile}`;

        const { aria, svg } = icons[key];

        const icon = iconImages[key] ? (
          <img src={iconImages[key]} alt={`Logo do ${aria}`} />
        ) : (
          svg
        );

        const button = (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Link para o ${aria}`}
          >
            <IconButton ariaLabel={`Botão para o ${aria}`} icon={icon} />
          </a>
        );

        return withAnimation ? (
          <MotionDivDownToUp key={key}>{button}</MotionDivDownToUp>
        ) : (
          <React.Fragment key={key}>{button}</React.Fragment>
        );
      })}
    </>
  );
}

export default FooterSocialIcons;

import React from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import IconButton from "../../interactives/IconButton";
import { infos } from "../../../content/content";
import logotiktok from "../../../assets/imgs/footer/tiktok.svg";
import logofacebook from "../../../assets/imgs/footer/facebook.svg";
import logolinkedin from "../../../assets/imgs/footer/linkedin.svg";
import logoyoutube from "../../../assets/imgs/footer/youtube.svg";
import logoinstagram from "../../../assets/imgs/footer/instagram.svg";

const icons = {
  facebook: {
    aria: "Facebook",
    svg: <img src={logofacebook} alt="TikTok" width={38} height={38} />,
  },
  instagram: {
    aria: "Instagram",
    svg: <img src={logoinstagram} alt="TikTok" width={38} height={38} />,
  },
  linkedin: {
    aria: "LinkedIn",
    svg: <img src={logolinkedin} alt="TikTok" width={38} height={38} />,
  },
  tiktok: {
    aria: "TikTok",
    svg: <img src={logotiktok} alt="TikTok" width={38} height={38} />,
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
    svg: <img src={logoyoutube} alt="TikTok" width={44} height={44} />,
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

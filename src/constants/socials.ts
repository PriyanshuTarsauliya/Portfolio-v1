import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { MdAlternateEmail } from "react-icons/md";
import { SiCredly } from "react-icons/si";

import { SocialLinkType } from "../types";

export const socialsInfo: SocialLinkType[] = [
  {
    id: 1,
    name: "Email",
    url: "mailto:priyanshutarsauliya@gmail.com",
    icon: MdAlternateEmail,
    isEmail: true,
  },
  {
    id: 2,
    name: "Github",
    url: "https://github.com/PriyanshuTarsauliya",
    icon: RxGithubLogo,
  },
  {
    id: 3,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/priyanshutarsauliya/",
    icon: RxLinkedinLogo,
  },
  {
    id: 4,
    name: "Credly",
    url: "https://www.credly.com/users/priyanshutarsauliya",
    icon: SiCredly,
  },
];


import React from "react";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.facebook.com/rakshitgautam28/" target="_blank">
        <BsFacebook />
      </a>
      <a href="https://www.linkedin.com/in/rakshitgautam28/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Rakshitgautam28" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;

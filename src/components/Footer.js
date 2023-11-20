import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
	return (
		<div className="footer">
			<a href="https://github.com/mehmetdurankaya" target="_blank">
				<FontAwesomeIcon icon={faGithub} size="4x" />
			</a>
			<a href="https://www.instagram.com/kayamehmetduran/" target="_blank">
				<FontAwesomeIcon icon={faInstagram} size="4x" />
			</a>
			<a href="https://www.linkedin.com/in/mehmetdurankaya/" target="_blank">
				<FontAwesomeIcon icon={faLinkedin} size="4x" />
			</a>
		</div>
	);
}

export default Footer;

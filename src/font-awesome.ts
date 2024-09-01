// src/font-awesome.ts
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMoon, faSchool, faSun, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faCss3, faGithub, faInstagram, faJava, faJs, faLaravel, faLinkedin, faReact, faTelegram, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';


// Add icons to the library
library.add(faUserSecret, faGithub, faTwitter, faYoutube, faCircleHalfStroke, faMoon, faLinkedin, faInstagram, faTelegram, faJs, faVuejs, faLaravel, faCss3, faSchool, faSun, faReact, faJava);

export default FontAwesomeIcon;

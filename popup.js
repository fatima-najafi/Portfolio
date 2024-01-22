/* eslint-disable indent */
/* eslint-disable quotes */

const projects = [
  {
    featureImg: './assets/final-p.png',
    projectName: 'Fenaj Schedula ',
    projectDescription:
      ' I engineered a full-stack app, utilizing React for the frontend and Ruby on Rails for the backend, creating a seamless spa session listing and booking feature. The app includes an authenticated system using JWT for enhanced security. By prioritizing a responsive and intuitive design, I aimed to elevate the overall user experience.',
    projectLang: ['React', 'Ruby on Rails', 'PostgreSQL'],
    projectDetails: {
      orgnization: 'GROUP',
      type: 'Full-Stack Developer',
      year: 2023,
    },
    seeLive: 'https://fenaj-schedula.onrender.com/',
    seeSource: 'https://github.com/fatima-najafi/fenaj-schedula_API',
  },

  {
    featureImg: './assets/nGgVuK2LCP2J.gif',
    projectName: 'KBU-CSF Education ',
    projectDescription:
      "This project is a landing page about Kabul University, specifically highlighting the Computer Science faculty. It showcases various programs and introduces esteemed instructors. The page also emphasizes the university's significant partner collaborations. The landing page is designed to be mobile-friendly 📱, featuring a responsive layout that adapts to different screen sizes.",
    projectLang: ['HTML', 'CSS', 'JavaScript'],
    projectDetails: {
      orgnization: 'SOLO',
      type: ' Front-End Project',
      year: 2023,
    },
    seeLive: 'https://fatima-najafi.github.io/KBU-CSF-Education-Center/',
    seeSource: 'https://github.com/fatima-najafi/capstone-project-module1',
  },
  {
    featureImg: './assets/new.png',
    projectName: 'Budget-App Project ',
    projectDescription:
      'Developed a mobile web application using Ruby on Rails for efficient budget management. Empowering users to seamlessly monitor financial transactions through categorized tracking, the application showcases the versatility of Ruby on Rails in merging technology with financial control. 🌐✨💸',
    projectLang: ['Ruby', 'Ruby on Rails', 'PostgreSQL'],
    projectDetails: {
      orgnization: 'Solo',
      type: 'Back-End Project',
      year: 2023,
    },
    seeLive: 'https://rails-project-j3vc.onrender.com/',
    seeSource: 'https://github.com/fatima-najafi/budget-app',
  },
  {
    featureImg: './assets/space.jpg',
    projectName: 'Space-Travelers-Hub',
    projectDescription:
      'This project involves the development of a web application for a company specializing in commercial and scientific space travel services. 🚀 The application will enable users to book rockets and participate in curated space missions while integrating with real-time data from the SpaceX API. 🌌',
    projectLang: ['HTML', 'CSS', 'React & Redux'],
    projectDetails: { orgnization: 'GROUP', type: 'Front End Dev', year: 2023 },
    seeLive: 'https://nassa.onrender.com/',
    seeSource: 'https://github.com/fatima-najafi/Space-Travelers-Hub',
  },
  {
    featureImg: './assets/math.png',
    projectName: 'Math-Magicians',
    projectDescription:
      'The Math Magicians is a single-page website 🌐🧮 that allows you to perform simple calculation. The website is built using React ⚛️ and features different pages that can be seamlessly navigated within the single-page format. 📄✨ Additionally, it offers a user-friendly interface and interactive design to enhance the calculation experience. 🖥️🔢',
    projectLang: ['HTML', 'CSS', 'React & Redux'],
    projectDetails: { orgnization: 'GROUP', type: 'Front End Dev', year: 2023 },
    seeLive: 'https://math-vxah.onrender.com/',
    seeSource: 'https://github.com/fatima-najafi/math-magicians',
  },
  {
    featureImg: './assets/chef-table.jpg',
    projectName: "Chef's Table Project ",
    projectDescription:
      'My second Microverse capstone project. Built with HTML, CSS, and JavaScript, this project showcases my skills in creating dynamic web applications. 💻💡🎨 It features dynamic data rendering, an API for meal fetching, and GET and POST request interactions. I am proud of the professional design and functionality of this project. 🌟',
    projectLang: ['HTML', 'CSS', 'JavaScript'],
    projectDetails: { orgnization: 'GROUP', type: 'Front End Dev', year: 2023 },
    seeLive: 'https://fatima-najafi.github.io/javascript-capston-project/src/',
    seeSource: 'https://github.com/fatima-najafi/javascript-capston-project',
  },
];

projects.forEach((project, index) => {
  const container = document.getElementById('works-cards');
  const card = document.createElement('li');
  card.classList.add('works-card');
  card.id = `works-card-${index + 1}`;
  card.innerHTML = `<img src='${project.featureImg}' alt='Recent Work'>
    <div class='works-card-main'>
        <h3 class='works-card-heading-large'>${project.projectName}</h3>
        <div class='d-flex works-card-client'>
            <p class='paragraph'>${project.projectDetails.orgnization}</p>
            <i class='fa-solid fa-circle works-card-client-counter'></i>
            <p class='works-card-client-role paragraph'>${
              project.projectDetails.type
            }</p>
            <i class='fa-solid fa-circle works-card-client-counter'></i>
            <p class='works-card-client-year paragraph'>${
              project.projectDetails.year
            }</p>
        </div>
        <p class='paragraph works-card-paragraph'>${
          project.projectDescription
        }</p>
         <ul class="works-card-tags">
              <li class="works-card-tag">${project.projectLang[0]}</li>
              <li class="works-card-tag">${project.projectLang[1]}</li>
              <li class="works-card-tag">${project.projectLang[2]}</li>
            </ul>
        <button id='open-project-details-${index + 1}'>See Project</button>
    </div>`;
  container.appendChild(card);
});

// Popup Starts
const body = document.getElementById('body');
projects.forEach((project, index) => {
  const popup = document.createElement('div');
  popup.classList.add('detail-card');
  popup.id = `detail-card-${index + 1}`;
  popup.innerHTML = `<div class='detail-card-inner'>
    <div class='d-flex detail-card-header'>
        <div>
            <h3 class='detail-card-heading'>${project.projectName}</h3>
        </div>
        <i id='detail-card-close-${
          index + 1
        }' class='fa-solid fa-xmark detail-card-cross-icon'></i>
    </div>
    <div class='detail-card-display-img-container'>
        <img class='' src='${project.featureImg}' alt='Recent Work'>
    </div>
    <div class='detail-card-body'>
        <div class='detail-card-body-right'>
            <ul class="d-flex detail-card-body-tags">
              <li class="detail-card-body-tag">${project.projectLang[0]}</li>
              <li class="detail-card-body-tag">${project.projectLang[1]}</li>
              <li class="detail-card-body-tag">${project.projectLang[2]}</li>
            </ul>
            <div class='detail-card-body-right-button-container'>
                <!-- Use <a> instead of <button> for external links -->
                <a href='${
                  project.seeLive
                }' target='_blank' class='detail-card-button'>
                  See Live <i class='fa-solid fa-arrow-up-right-from-square'></i>
                </a>
                <a href='${
                  project.seeSource
                }' target='_blank' class='detail-card-button'>
                  See Source <i class='fa-brands fa-github'></i>
                </a>
            </div>
        </div>
    </div>
  </div>`;
  body.appendChild(popup);
});
// Modal Popup Ends Here...

const project1 = document.getElementById('open-project-details-1');
const project2 = document.getElementById('open-project-details-2');
const project3 = document.getElementById('open-project-details-3');
const project4 = document.getElementById('open-project-details-4');
const project5 = document.getElementById('open-project-details-5');
const project6 = document.getElementById('open-project-details-6');

const projectClose1 = document.getElementById('detail-card-close-1');
const projectClose2 = document.getElementById('detail-card-close-2');
const projectClose3 = document.getElementById('detail-card-close-3');
const projectClose4 = document.getElementById('detail-card-close-4');
const projectClose5 = document.getElementById('detail-card-close-5');
const projectClose6 = document.getElementById('detail-card-close-6');

const detailCard1 = document.getElementById('detail-card-1');
const detailCard2 = document.getElementById('detail-card-2');
const detailCard3 = document.getElementById('detail-card-3');
const detailCard4 = document.getElementById('detail-card-4');
const detailCard5 = document.getElementById('detail-card-5');
const detailCard6 = document.getElementById('detail-card-6');

// Card 1
project1.addEventListener('click', () => {
  detailCard1.classList.toggle('detail-card--show');
  body.classList.add('blur');
});
projectClose1.addEventListener('click', () => {
  detailCard1.classList.toggle('detail-card--show');
  body.classList.remove('blur');
});
// Card 2
project2.addEventListener('click', () => {
  detailCard2.classList.toggle('detail-card--show');
  body.classList.add('blur');
});
projectClose2.addEventListener('click', () => {
  detailCard2.classList.toggle('detail-card--show');
  body.classList.remove('blur');
});
// Card 3
project3.addEventListener('click', () => {
  detailCard3.classList.toggle('detail-card--show');
  body.classList.add('blur');
});
projectClose3.addEventListener('click', () => {
  detailCard3.classList.toggle('detail-card--show');
  body.classList.remove('blur');
});
// Card 4
project4.addEventListener('click', () => {
  detailCard4.classList.toggle('detail-card--show');
  body.classList.add('blur');
});
projectClose4.addEventListener('click', () => {
  detailCard4.classList.toggle('detail-card--show');
  body.classList.remove('blur');
});
// Card 5
project5.addEventListener('click', () => {
  detailCard5.classList.toggle('detail-card--show');
  body.classList.add('blur');
});
projectClose5.addEventListener('click', () => {
  detailCard5.classList.toggle('detail-card--show');
  body.classList.remove('blur');
});
// Card 6
project6.addEventListener('click', () => {
  detailCard6.classList.toggle('detail-card--show');
  body.classList.add('blur');
});
projectClose6.addEventListener('click', () => {
  detailCard6.classList.toggle('detail-card--show');
  body.classList.remove('blur');
});

// Get Resume
document.getElementById('resumeButton').addEventListener('click', () => {
  const resumeLink = 'https://drive.google.com/file/d/13u_AnIf75kwoSrTwz_bZUFJTbf_XEDNk/view?usp=sharing';
  window.open(resumeLink, '_blank');
});

// Skills
const toggleIcons = document.querySelectorAll('.toggleIcon');

toggleIcons.forEach((icon) => {
  icon.addEventListener('click', function () {
    if (this.classList.contains('fa-angle-down')) {
      this.classList.add('fa-angle-right');
      this.classList.remove('fa-angle-down');
      const skillBodies = this.closest(
        '.about-skill-container',
      ).querySelectorAll('.about-skill-body');
      skillBodies.forEach((body) => {
        body.classList.remove('show');
      });
    } else {
      this.classList.add('fa-angle-down');
      this.classList.remove('fa-angle-right');

      const skillBodies = this.closest(
        '.about-skill-container',
      ).querySelectorAll('.about-skill-body');
      skillBodies.forEach((body) => {
        body.classList.add('show');
      });
    }
  });
});
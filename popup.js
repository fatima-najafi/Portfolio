const projects = [
  {
    featureImg: './assets/card1.png',
    projectName: 'Tonic',
    projectDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectLang: ['HTML', 'CSS', 'JavaScript'],
    projectDetails: { orgnization: 'CANOPY', type: 'Back END Dev', year: 2015 },
    seeLive: 'https://github.com/fatima-najafi/Portfolio',
    seeSource: 'https://github.com/fatima-najafi/Portfolio.git',
  },
  {
    featureImg: './assets/card3.png',
    projectName: 'Multi-Post Stories',
    projectDescription:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    projectLang: ['HTML', 'CSS', 'Ruby', 'JavaScript'],
    projectDetails: {
      orgnization: 'FACEBOOK',
      type: 'Full Stack Dev',
      year: 2016,
    },
    seeLive: 'https://github.com/fatima-najafi/Portfolio',
    seeSource: 'https://github.com/fatima-najafi/Portfolio.git',
  },
  {
    featureImg: './assets/card2.png',
    projectName: 'Facebook 360',
    projectDescription:
      'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    projectLang: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
    projectDetails: {
      orgnization: 'FACEBOOK',
      type: 'Full Stack Dev',
      year: 2017,
    },
    seeLive: 'https://github.com/fatima-najafi/Portfolio',
    seeSource: 'https://github.com/fatima-najafi/Portfolio.git',
  },
  {
    featureImg: './assets/card.png',
    projectName: 'Uber Navigation',
    projectDescription:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    projectLang: ['HTML', 'Ruby', 'CSS', 'JavaScript'],
    projectDetails: { orgnization: 'UBER', type: 'Front End Dev', year: 2017 },
    seeLive: 'https://github.com/fatima-najafi/Portfolio',
    seeSource: 'https://github.com/fatima-najafi/Portfolio.git',
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
        </div>
        <i id='detail-card-close-${
  index + 1
}' class='fa-solid fa-xmark detail-card-cross-icon'></i>
    </div>
    <div class='detail-card-display-img-container'>
        <img class='' src='${project.featureImg}' alt='Recent Work'>
    </div>
    <div class='detail-card-body'>
        <p class='paragraph'>${project.projectDescription}</p>
        <div class='detail-card-body-right'>
            <ul class="d-flex detail-card-body-tags">
              <li class="detail-card-body-tag">${project.projectLang[0]}</li>
              <li class="detail-card-body-tag">${project.projectLang[1]}</li>
              <li class="detail-card-body-tag">${project.projectLang[2]}</li>
            </ul>
            <div class='detail-card-body-right-button-container'>
                <button class='detail-card-button' src='${
  project.seeLive
}'>See Live
                 <i class='fa-solid fa-arrow-up-right-from-square'></i></button>
                <button class='detail-card-button'  src='${project.seeSource}'>
                See Source <i class='fa-brands fa-github'></i></button>
            </div>
        </div>
    </div>
  </div>`;
  body.appendChild(popup);
});
// Modal Popup Ends Here

const project1 = document.getElementById('open-project-details-1');
const project2 = document.getElementById('open-project-details-2');
const project3 = document.getElementById('open-project-details-3');
const project4 = document.getElementById('open-project-details-4');

const projectClose1 = document.getElementById('detail-card-close-1');
const projectClose2 = document.getElementById('detail-card-close-2');
const projectClose3 = document.getElementById('detail-card-close-3');
const projectClose4 = document.getElementById('detail-card-close-4');

const detailCard1 = document.getElementById('detail-card-1');
const detailCard2 = document.getElementById('detail-card-2');
const detailCard3 = document.getElementById('detail-card-3');
const detailCard4 = document.getElementById('detail-card-4');

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

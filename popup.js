// popup start
const projects = [
  {
    featureImg: "./assets/card1.png",
    projectName: "Tonic",
    projectDescription:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    projectLang: ["HTML", "CSS", "JavaScript"],
    projectDetails: { orgnization: "CANOPY", type: "Back END Dev", year: 2015 },
    seeLive: "https://github.com/fatima-najafi/Portfolio",
    seeSource: "https://github.com/fatima-najafi/Portfolio.git",
  },
  {
    featureImg: "./assets/card3.png",
    projectName: "Multi-Post Stories",
    projectDescription:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    projectLang: ["HTML", "CSS", "Ruby", "JavaScript"],
    projectDetails: {
      orgnization: "FACEBOOK",
      type: "Full Stack Dev",
      year: 2015,
    },
    seeLive: "https://github.com/fatima-najafi/Portfolio",
    seeSource: "https://github.com/fatima-najafi/Portfolio.git",
  },
  {
    featureImg: "./assets/card2.png",
    projectName: "Facebook 360",
    projectDescription:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    projectLang: ["HTML", "CSS", "JavaScript", "Ruby"],
    projectDetails: {
      orgnization: "Tonic",
      type: "Full Stack Dev",
      year: 2015,
    },
    seeLive: "https://github.com/fatima-najafi/Portfolio",
    seeSource: "https://github.com/fatima-najafi/Portfolio.git",
  },
  {
    featureImg: "./assets/card.png",
    projectName: "Uber Navigation",
    projectDescription:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    projectLang: ["HTML", "Ruby", "CSS", "JavaScript"],
    projectDetails: { orgnization: "UBER", type: "Front End Dev", year: 2017 },
    seeLive: "https://github.com/fatima-najafi/Portfolio",
    seeSource: "https://github.com/fatima-najafi/Portfolio.git",
  },
];

const container = document.querySelector(".works-cards");
projects.forEach((project) => {
  const card = document.createElement("li");
  card.classList.add("works-card");
  card.innerHTML = `
  <img src="assets/card1.png" alt="Recent Work card-1" />
          <div class="works-card-main">
            <h2 class="works-card-heading-large">Multi-Post Stories</h2>
            <div class="works-card-client">
              <p class="paragraph">CANOPY</p>
              <p class="fa-solid fa-circle works-card-client-counter"></p>
              <p class="works-card-client-role paragraph">Back End Dev</p>
              <p class="fa-solid fa-circle works-card-client-counter"></p>
              <p class="works-card-client-year paragraph">2015</p>
            </div>
            <p class="paragraph works-card-paragraph">
              A daily selection of privately personalized reads; no accounts or
              sign-ups required.
            </p>
            <ul class="works-card-tags">
              <li class="works-card-tag">html</li>
              <li class="works-card-tag">css</li>
              <li class="works-card-tag">javascript</li>
            </ul>
            <button>See Project</button>
          </div>
  `;

  container.appendChild(card);
});

const body = document.getElementById("body");
projects.forEach((project, index) => {
  const languages = project.projectLang
    .map((lang) => `<li class='detail-card-body-tag'>${lang}</li>`)
    .join("");
  const popup = document.createElement("div");
  modal.classList.add("detail-card");
  modal.id = `detail-card-${index + 1}`;
  modal.innerHTML = `<div class='detail-card-inner'>
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
            <ul class='d-flex detail-card-body-tags'>
                ${languages}
            </ul>
            <div class='detail-card-body-right-button-container'>
                <button class='detail-card-button' src='${
                  project.seeLive
                }'>See Live <i
                        class='fa-solid fa-arrow-up-right-from-square'></i></button>
                <button class='detail-card-button'  src='${
                  project.seeSource
                }'>See Source <i class='fa-brands fa-github'></i></button>
            </div>
        </div>
    </div>
  </div>`;
  body.appendChild(popup);
});

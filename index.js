document.getElementById("year").textContent = new Date().getFullYear();

let project_object = [
  {
    type: "MERN PLATFORM",
    name: "ConvergeX",
    description:
      "A full-featured ecosystem connecting learning, professional networking and career growth in one responsive product.",
    Tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Socket.io",
      " Razorpay",
    ],
    link: "https://github.com/Abhishek0827/ConvergeX",
  },
  {
    type: "WEATHER EXPERIENCE",
    name: "SykCast",
    description:
      "Real-time weather forecasting with live location insights, interactive maps and a frictionless city search experience.",
    Tech: ["React", "API integration", "Responsive UI"],
    link: "https://skycast-u3e7.onrender.com/",
  },
  {
    type: "COLLABORATION TOOL",
    name: "Real-Time Chat",
    description:
      "A clean room-based chat application with live message status updates and a React interface backed by Socket.IO.",
    Tech: ["React", "Node.js", "MongoDB", "Express.js", "Socket.io"],
    link: "https://wa-clone-1-njv4.onrender.com/",
  },
  {
    type: "Interactive Web Game",
    name: "Mines ",
    description:
      "Developed an interactive Mines, inspired by the classic grid-based mine-finding game. Implemented dynamic grid generation, interactive tile selection, and game logic to create an engaging user experience with responsive UI.",
    Tech: ["HTML", "CSS", "Javascript"],
    link: "https://abhishek0827.github.io/Mines/",
  },
  {
    type: "Memory Game",
    name: "Simon Says ",
    description:
      "Developed an interactive Simon Says memory game. Implemented random color sequences, user input validation, level progression, and score tracking to create an engaging browser-based game.",
    Tech: ["HTML", "CSS", "Javascript"],
    link: "https://abhishek0827.github.io/Simon-says/",
  },
  {
    type: "Web Game",
    name: "Tic-Tac-Toe",
    description:
      "Developed an interactive Tic-Tac-Toe game. Implemented turn-based gameplay, win and draw detection, and game reset functionality with a simple, user-friendly interface.",
    Tech: ["HTML", "CSS", "Javascript"],
    link: "https://abhishek0827.github.io/Tic-Tac-Toe/",
  },
  {
    type: "Frontend Website",
    name: "Ed-Tech Company",
    description:
      "Designed and developed a responsive frontend website for an Ed-Tech company. Created a user-friendly interface with structured layouts, interactive elements, and modern styling to showcase educational services and offerings.",
    Tech: ["HTML", "CSS", "Javascript"],
    link: "https://abhishek0827.github.io/Ed-Tech/",
  },
  {
    type: "Frontend Website",
    name: "McDonald's India",
    description:
      "Developed a frontend replica of the McDonald's India website. Recreated the website's layout, visual elements, navigation, and interactive components while focusing on responsive design and user experience.",
    Tech: ["HTML", "CSS", "Javascript"],
    link: "https://abhishek0827.github.io/Mcdonald/",
  },
   {
    type: "Task Management App",
    name: "To-Do List",
    description:
      "Developed an interactive To-Do List application. Implemented features to add, delete, and manage daily tasks with a clean, user-friendly interface.",
    Tech: ["HTML", "CSS", "Javascript"],
    link: "https://abhishek0827.github.io/TODO-List/",
  },
];

const project_card = document.querySelector("#ProjectCards");
project_object.forEach(function (project) {
  // console.log(project);

  let container = document.createElement("div");
  let image = document.createElement("img");
  let heading = document.createElement("h2");
  let type = document.createElement("h3");
  let para = document.createElement("p");
  let tech = document.createElement("ul");
  let link = document.createElement("a");
  container.classList.add("cards");
  heading.textContent = `${project.name}`;
  type.textContent = `${project.type}`;
  para.textContent = `${project.description}`;
  tech.innerHTML = project.Tech.map((skill) => `<li>${skill}</li>`).join("");
  link.href = `${project.link}`;
  link.target = "_blank";
  link.textContent = "View Project";
  image.src = `assets/project-management.png`;
  container.appendChild(image);
  container.appendChild(type);
  container.appendChild(heading);
  container.appendChild(para);
  container.appendChild(tech);
  container.appendChild(link);
  project_card.appendChild(container);
});

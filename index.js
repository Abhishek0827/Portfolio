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

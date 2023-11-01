const jobSection = document.querySelector("#educationSection");
const articles = document.querySelectorAll("#educationSection article");

jobSection.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    articles.forEach(function (article) {
      article.classList.add("hidden");
    });
    const element = document.getElementById(id);
    element.classList.remove("hidden");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const darkModeButton = document.querySelector("#darkButton");
  const lightModeButton = document.querySelector("#lightButton");
  darkModeButton.addEventListener("click", function () {
    // if set via local storage previously
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  });
/** 
  const menuButton = document.querySelector("#menu-button");
  const menuItems = document.querySelector("#menu");
  const menuButtonSpans = document.querySelectorAll("#menu-button span");
  const menuLinks = document.querySelectorAll("#menu a");

  menuButton.addEventListener("click", () => {
    menuItems.classList.toggle("hidden");
    menuButtonSpans.forEach((span) => {
      span.classList.toggle("animado");
    });
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuItems.classList.toggle("hidden");
      menuButtonSpans.forEach((span) => {
        span.classList.toggle("animado");
      });
    });
  });

  window.onresize = () => {
    let w = outerWidth;
    if (w > 768) {
      menuItems.classList.add("hidden");
      menuButtonSpans.forEach((span) => {
        span.classList.remove("animado");
      });
    }
  };
*/
  const educationLinks = document.querySelectorAll("#educationSection button");
  const firstLink = document.querySelector("#link1");
  const clases = [
    "border-sky-500",
    "bg-slate-300",
    "dark:bg-sky-500",
    "font-bold"
  ];

  educationLinks.forEach(function (link) {
    link.addEventListener("touchstart", function () {
      firstLink.classList.remove(...clases);
      educationLinks.forEach(function (link) {
        link.classList.remove(...clases);
        link.classList.add("border-slate-500");
      });
      toggleButtonStyle(link);
    });

    link.addEventListener("click", function () {
      firstLink.classList.remove(...clases);
      educationLinks.forEach(function (link) {
        link.classList.remove(...clases);
        link.classList.add("border-slate-500");
      });
      toggleButtonStyle(link);
    });

  });
});

function toggleButtonStyle(button) {
  if (
    !button.classList.contains("border-sky-500") ||
    !button.classList.contains("dark:bg-sky-500") ||
    !button.classList.contains("bg-slate-300")
  ) {
    button.classList.remove("border-slate-500");
    button.classList.add(...clases);
  }
}

document.addEventListener("alpine:init", () => {
  Alpine.data("skillDisplay", () => ({
    skills: [
      {
        title: "HTML",
        percent: "90",
      },
      {
        title: "CSS",
        percent: "70",
      },
      {
        title: "Tailwind CSS",
        percent: "90",
      },
      {
        title: "JavaScript",
        percent: "80",
      },
      {
        title: "Angular",
        percent: "80",
      },
      {
        title: "SQL-PL/SQL",
        percent: "85",
      },
      {
        title: "TypeScript",
        percent: "85",
      },
      {
        title: "C#",
        percent: "82",
      },
      {
        title: ".NET",
        percent: "70",
      },
      {
        title: "Node.js",
        percent: "75",
      },
    ],
    currentSkill: {
      title: "HTML",
      percent: "95",
    },
  }));
});

const text = "Desarrollador Web";
const typedText = document.getElementById("typed-text");

function typeWriter(text, i = 0) {
  if (i < text.length) {
    typedText.textContent += text.charAt(i);
    i++;
    setTimeout(() => typeWriter(text, i), 100); // Ajusta la velocidad de escritura aquí
  } else {
    // Espera un momento y luego reinicia la escritura
    setTimeout(() => {
      typedText.textContent = "";
      typeWriter(text);
    }, 1000); // Espera 1 segundo antes de reiniciar
  }
}

window.addEventListener("load", () => {
  typeWriter(text);
});


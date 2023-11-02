//Education Section organizar articulos
const educationSection = document.querySelector("#educationSection");
const articles = document.querySelectorAll("#educationSection article");

educationSection.addEventListener("click", function (e) {
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
  //DarkMode y LightMode
  const darkModeButton = document.querySelectorAll(".darkButton");
  darkModeButton.forEach(function (button) {
    button.addEventListener("click", function () {
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
  });

  //Education Section cambiar color de los botones
  const educationLinks = document.querySelectorAll("#educationSection button");

  function resetLinksStyles() {
    educationLinks.forEach(function (link) {
      link.classList.remove(
        "border-sky-500",
        "bg-slate-300",
        "dark:bg-sky-500",
        "font-bold"
      );
      link.classList.add("border-slate-500");
    });
  }

  function handleLinkClick(link) {
    resetLinksStyles();
    toggleButtonStyle(link);
  }

  educationLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Previene la acción predeterminada del enlace
      handleLinkClick(link);
    });
  
    link.addEventListener("touchend", function (event) {
      event.preventDefault(); // Previene la acción predeterminada del enlace
      handleLinkClick(link);
    });
  });
});

function toggleButtonStyle(button) {
  button.classList.remove("border-slate-500");
  button.classList.add(
    "border-sky-500",
    "bg-slate-300",
    "dark:bg-sky-500",
    "font-bold"
  );
}

//Habilidades

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

//Mensaje personalizado
const text = " Desarrollador Web";
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

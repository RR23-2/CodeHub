// navigations
document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      navLinks.forEach(function (link) {
        link.classList.remove("active");
      });

      this.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      const link = document.querySelector(`a[href="#${entry.target.id}"]`);
      if (entry.isIntersecting) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
});

const scrollToElement = (elementId) => {
  var element = document.getElementById(elementId);
  var navbarHeight = document.querySelector("nav").offsetHeight;
  if (element) {
    var offsetTop =
      element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  }
};

const flipCard = () => {
  const cardContainer = document.getElementById("card-container");
  if (cardContainer.style.transform === "rotateY(180deg)") {
    cardContainer.style.transform = "rotateY(0deg)";
  } else {
    cardContainer.style.transform = "rotateY(180deg)";
  }
};

const showNotification = (message, type) => {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.style.display = "block";
  notification.style.opacity = 1;
  notification.style.visibility = "visible";

  notification.style.backgroundColor = (type === "error" ? "#cf6679" : "#03dac6")
  setTimeout(() => {
    notification.style.display = "none";
    notification.style.opacity = 0;
    notification.style.visibility = "hidden";
  }, 2000);
};

const signUp = (event) => {
  event.preventDefault();

  const firstName = document.getElementById("sign-up-first-name").value;
  const lastName = document.getElementById("sign-up-last-name").value;
  const email = document.getElementById("sign-up-email").value;
  const password = document.getElementById("sign-up-password").value;
  const confPassword = document.getElementById("sign-up-conf-password").value;
  const discordUsername = document.getElementById(
    "sign-up-discord-username"
  ).value;

  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    password === "" ||
    confPassword === "" ||
    discordUsername === ""
  ) {
    showNotification("All fields must be filled!", "error");
  } else if (!email.endsWith("@gmail.com")) {
    showNotification("Email must ends with '@gmail.com'!", "error");
  } else if (password !== confPassword) {
    showNotification("Passwords don't match!", "error");
  } else {
    showNotification("Sign Up Success!", "success")
  }
};

const signIn = (event) => {
  event.preventDefault();
  const email = document.getElementById("sign-in-email").value;
  const password = document.getElementById("sign-in-password").value;

  if (email === "" || password === "") {
    showNotification("All fields must be filled!", "error");
  } else if (!email.endsWith("@gmail.com")) {
    showNotification("Email must ends with '@gmail.com'!", "error");
  } else {
    document.getElementById()
    showNotification("Sign In Success!", "success")
  }
};

var typed = new Typed(".typing", {
  strings: ["Third-Year IT Student", "Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

const navigation = document.querySelector(".nav"),
  navList = navigation.querySelectorAll("li"),
  totalNavList = navList.length,
  allSections = document.querySelectorAll("section"),
  totalSections = allSections.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removePreviousSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addPreviousSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    displaySection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function addPreviousSection(number) {
  allSections[number].classList.add("previous-section");
}

function removePreviousSection() {
  for (let i = 0; i < totalSections; i++) {
    allSections[i].classList.remove("previous-section");
  }
}

function displaySection(e) {
  for (let i = 0; i < totalSections; i++) {
    allSections[i].classList.remove("active");
  }
  const target = e.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");

  displaySection(this);
  updateNav(this);
  removePreviousSection();
  addPreviousSection(sectionIndex);
});

function updateNav(e) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = e.getAttribute("href").split("#")[1];
  }
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

const asideSectionTogglerBtn = () => {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSections; i++) {
    allSections[i].classList.toggle("open");
  }
};

function sendMail() {
  var fromname = document.querySelector("#fromname").value;
  var email = document.querySelector("#email").value;
  var subject = document.querySelector("#subject").value;
  var message = document.querySelector("#message").value;

  if (!fromname || !email || !subject || !message) {
    alert("Please fill in all the required fields.");
    return;
  }

  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  (function () {
    emailjs.init("9f6Z5fUKO8dnqRN6o");
  })();

  var params = {
    fromname: fromname,
    email: email,
    to: "rauf.rasulzade0@gmail.com",
    subject: subject,
    message: message,
  };

  var serviceID = "service_057o84s";
  var templateID = "template_8ejkedh";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      alert(
        "Thank you, " + params["fromname"] + "! Your message has been sent."
      );
      resetMail();
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      alert("An error occurred while sending the email.");
    });
}

function resetMail() {
  document.querySelector("#fromname").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#subject").value = "";
  document.querySelector("#message").value = "";
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

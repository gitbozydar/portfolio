const fadeIn = (element, time) => {
  $(element).animate({ opacity: 1 }, time);
};
const fadeOut = (element, time) => {
  $(element).animate({ opacity: 0 }, time);
};

fadeIn("nav", 1500);
setTimeout(function () {
  fadeIn(".info", 1000);
}, 2000);
setTimeout(function () {
  fadeIn(".about-me", 1000);
}, 3000);

const faceBtn = document.getElementById("face-btn");
faceBtn.addEventListener("click", () => {
  $(".portrait").css({ animation: "fade-left 2s" });
  fadeIn(".portrait", 2000);
});

const rows = document.querySelectorAll(".rows-toggles");

rows.forEach((element, i) => {
  const toggleBtn = document.createElement("button");
  toggleBtn.className = "toggle-btn";
  toggleBtn.id = "toggle" + i;
  toggleBtn.innerHTML = "+";

  $(toggleBtn).click(function () {
    $(".panel")
      .not("#panel-" + i)
      .slideUp("slow");
    $("#panel-" + i)
      .stop()
      .slideToggle("slow");
  });

  element.appendChild(toggleBtn);
});

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  treshhold: 1,
  rootMargin: "0px 0px -400px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

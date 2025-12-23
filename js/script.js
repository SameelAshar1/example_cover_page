
  const contactBtn = document.getElementById("contactBtn");
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("closePopup");
  const pageContent = document.getElementById("pageContent");

  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      popup.style.display = "block";
      pageContent.classList.add("blur");
      document.body.classList.add("show-overlay");
    });
  }
  if (closePopup) {
    closePopup.addEventListener("click", () => {
      popup.style.display = "none";
      pageContent.classList.remove("blur");
      document.body.classList.remove("show-overlay");
    });
  }
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
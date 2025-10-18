
      function updateActiveNavigation() {
        const sections = document.querySelectorAll("section[id], div[id]");
        const navLinks = document.querySelectorAll(".navbarli a");

        let currentSection = "";

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (window.scrollY >= sectionTop - 100) {
            currentSection = section.getAttribute("id");
          }
        });

        navLinks.forEach((link) => {
          link.classList.remove("active");

          if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
          }
        });
      }

      window.addEventListener("scroll", updateActiveNavigation);

      updateActiveNavigation();
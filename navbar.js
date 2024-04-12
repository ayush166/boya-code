const navbarModule = (() => {
    const navbar = document.getElementById("navbar");
    const logo = document.getElementById("logo");
  
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add("nav-visible", "bg-blue-500", "shadow-lg");
        navbar.classList.remove("nav-hidden");
        logo.src = "./public/images/logo-2.webp";
      } else {
        navbar.classList.add("nav-hidden");
        navbar.classList.remove("nav-visible", "bg-blue-500", "shadow-lg");
        logo.src = "./public/images/logo.webp";
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return { handleScroll };
  })();
  
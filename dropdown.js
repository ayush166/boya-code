const dropdownModule = (() => {
    const menuDropdown = document.getElementById("menuDropdown");
    const menuButton = document.getElementById("menuButton");
  
    const showMenuDropdown = () => {
      menuDropdown.classList.remove("hidden");
    };
  
    const hideMenuDropdown = () => {
      menuDropdown.classList.add("hidden");
    };
  
    menuButton.addEventListener("mouseenter", showMenuDropdown);
    menuButton.addEventListener("mouseleave", hideMenuDropdown);
  
    return { showMenuDropdown, hideMenuDropdown };
  })();
  
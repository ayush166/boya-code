const searchOverlayModule = (() => {
    const searchOverlay = document.getElementById("searchOverlay");
    const searchIcon = document.querySelector(".fa-search");
    const closeSearch = document.getElementById("closeSearch");
  
    const toggleSearchOverlay = () => {
      searchOverlay.classList.toggle("hidden");
      document.body.classList.toggle("blur-effect");
    };
  
    const closeSearchOverlay = () => {
      searchOverlay.classList.add("hidden");
      document.body.classList.remove("blur-effect");
    };
  
    searchIcon.addEventListener("click", toggleSearchOverlay);
    closeSearch.addEventListener("click", closeSearchOverlay);
  
    return { toggleSearchOverlay, closeSearchOverlay };
  })();
  
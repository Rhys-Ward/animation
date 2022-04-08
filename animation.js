const loader = document.getElementById("main1");

const main = document.getElementById("logomain1");

const init = () => {
  setTimeout(() => {
    setTimeout(() => (loader.style.opacity = 0), 500);
    loader.style.opacity = 0;
    loader.style.display = "none";
    main.style.display = "block";
    setTimeout(() => (main.style.opacity = 1), 50);
   
  }, 6000);
};

init();
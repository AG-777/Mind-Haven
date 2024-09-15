document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menu-btn");
    const menuCloseBtn = document.getElementById("menu-close");
    const navigation = document.querySelector(".navigation ul");
  
    menuBtn.addEventListener("click", function() {
      navigation.classList.toggle("active");
    });
  
    menuCloseBtn.addEventListener("click", function() {
      navigation.classList.remove("active");
    });
  });
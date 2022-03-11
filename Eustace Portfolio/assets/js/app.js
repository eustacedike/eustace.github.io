function menu (x) {x.classList.toggle("change");}

function sideBar() {
    var x = document.getElementById("mySidebar");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } 

  function aboutMe() {
    var me = document.querySelector(".bio");
    var closeMore = document.querySelector(".closeAbout");
    var meBig = document.querySelector(".more-modal");
    
      me.style.display = "none";
      closeMore.style.display = "block";
      meBig.style.display = "block";
  };

  function closeMe() {
    var me = document.querySelector(".bio");
    var closeMore = document.querySelector(".closeAbout");
    var meBig = document.querySelector(".more-modal");
    
      me.style.display = "block";
      closeMore.style.display = "none";
      meBig.style.display = "none";
    
    };
    

    /*var meBox = document.querySelector("#meBox");
    
    if (meBox.style.background = "#ffcc00") {
      meBox.style.background = "#ff0000";
    } else {
      meBox.style.background = "#ffcc00";
    }*/

  
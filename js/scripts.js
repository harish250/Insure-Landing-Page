function myFunction() {
    var nav =document.getElementsByClassName("nav-responsive")[0];
    var x = document.getElementsByClassName("nav-container")[0];
    if (x.className === "nav-container" && nav.className === "nav-responsive") {
      x.className += " responsive";
      nav.className+=" responsive";
    } else {
      x.className = "nav-container";
      nav.className="nav-responsive";
    }
  }
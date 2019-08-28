function d1t () {
    var x = document.getElementById("clickme");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    function R301() {
        var x = document.getElementById("R301a");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
  }
  function d1m() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function d1b() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function g1t() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function g1m() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function g1b() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function R301() {
    
    var x = document.getElementById("contentR");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function Mozambique() {
    
    var x = document.getElementById("contenta");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }



  const xepa = document.querySelector(".discrip");
const slide = document.querySelector(".item-info");
const coter = document.querySelectorAll(".btnd");
const cotez = document.querySelectorAll(".btng");
const tl = new TimelineMax();

tl.fromTo( xepa,
     1,
     { height: "0%" },
      { height: "100%" , ease: Power2.easeInOut})
. fromTo(
  xepa,
  1.2,
  { width: "60%"},
  { width: "100%" , ease: Power2.easeInOut}
)
.fromTo( 
    slide, 1.2,
     {y:"-100%"},
     {y:"0%"}
     )
. fromTo(
        slide,
        1.2,
        { width: "60%"},
        { width: "100%" , ease: Power2.easeInOut}
)
.fromTo( 
  coter, 0.8,
   {x:"-100%"},
   {x:"0%"}
   )
. fromTo(
      coter,
      0.8,
      { width: "60%"},
      { width: "100%" , ease: Power2.easeInOut}
)
/*.fromTo( 
  cotez, 0.8,
   {y:"110%"},
   {y:"0%"}
   )
. fromTo(
      coter,
      0.8,
      { width: "60%"},
      { width: "100%" , ease: Power2.easeInOut}
)*/
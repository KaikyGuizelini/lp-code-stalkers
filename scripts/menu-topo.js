window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0px";
    document.querySelector("#navbar #logo img").style.height = "15px";
    alterarFonte("12px");
  } else {
    document.getElementById("navbar").style.padding = "10px";
    document.querySelector("#navbar #logo img").style.height = "26px";
    alterarFonte("14px");
  }
}

function alterarFonte(size) {
  var x, i;
  x = document.querySelectorAll("#navbar a");
  for (i = 0; i < x.length; i++) {
    x[i].style.fontSize = size;
  }
}
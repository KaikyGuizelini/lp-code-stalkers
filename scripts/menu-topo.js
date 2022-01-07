window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0px";
    document.getElementById("logo").style.fontSize = "14px";
  } else {
    document.getElementById("navbar").style.padding = "10px";
    document.getElementById("logo").style.fontSize = "16px";
  }
}

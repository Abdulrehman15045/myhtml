function info() {
  document.getElementById("main").innerText = "hangi hogya change";
}

function info1() {
  let infoo = document.getElementsByClassName("text");
  for (let i = 0; i < infoo.length; i++) {
    infoo[i].style.background = "red";
  }
}

function info2_hello() {
  document.querySelector("#hello").innerText = "hell by";
}

function info3_lineChange() {
  let big = document.querySelectorAll(".line");
  big.forEach(function(item) {
    item.style.color = "red";
    item.innerText = "ggggggggggggggg";
  });
}

function info4_toggleClass() {
  document.getElementById("bro").classList.toggle("hidden");
}

function main4() {
  document.getElementById("changeImage").setAttribute("src", "html-css/images (1).jpg");
}

function main5(){
document.getElementById("username").value="g bro";


}
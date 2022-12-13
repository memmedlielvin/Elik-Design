function opennav() {
  document.getElementById("navformobil").style.transition = "all 0.5s ease";
  document.getElementById("navformobil").style.right = "0";

  document.getElementById("fa-bars").style.display = "none";
  document.getElementById("topcloseicon").style.display = "block";
}
function closenav() {
  document.getElementById("navformobil").style.transition = "all 0.5s ease";
  document.getElementById("navformobil").style.right = "-100%";
  document.getElementById("fa-bars").style.display = "block";
  document.getElementById("topcloseicon").style.display = "none";
}

function openchat() {
  document.getElementById("chatbox").style.transition = "all 0.5s ease";
  document.getElementById("chatbox").style.bottom = "0";
}

function closechat() {
  document.getElementById("chatbox").style.transition = "all 0.5s ease";
  document.getElementById("chatbox").style.bottom = "-100vh";

  document.getElementById("main").style.display = "block";
}

function inputFocus() {
  document.querySelector(".send-message-icon").style.display = "block";

  document.querySelector("#file-camera-img ").style.display = "none";
  document.querySelector("#file-scripka-img ").style.display = "none";
}

function inputBlur() {
  document.querySelector(".send-message-icon").style.display = "none";

  document.querySelector("#file-camera-img ").style.display = "block";
  document.querySelector("#file-scripka-img ").style.display = "block";

  mesaginput = document.querySelector("#text-input").value;
  document.querySelector(".chat-box-body-inner").innerHTML = mesaginput;
  document.querySelector(".chat-box-body-inner").style.backgroundColor = "grey";
}

function sendmessage() {
  mesaginput = document.querySelector("#text-input").value;

  document.querySelector(".chat-box-body-inner").innerHTML += mesaginput;
  document.querySelector(".chat-box-body-inner").style.backgroundColor = "grey";
}

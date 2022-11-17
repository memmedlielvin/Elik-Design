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
  document.getElementById("chatbox").style.bottom = "-100%";
}

function inputFocus() {
  document.querySelector(".send-message-icon").style.display = "block";

  document.querySelector("#file-camera-img ").style.display = "none";
  document.querySelector("#file-scripka-img ").style.display = "none";
}

function sendmessage() {
  mesaginput = document.querySelector("#text-input").value;
  document.querySelector(".chat-box-body").innerHTML = mesaginput;
}

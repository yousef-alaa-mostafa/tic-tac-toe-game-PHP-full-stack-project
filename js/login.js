function validateForm() {
  if (document.getElementsByClassName("btn_sign")[0].innerHTML == "SIGN IN") {
    return true;
  } else {
    return true;
  }
}

// Main Functions for the page

var check = function () {
  if (document.getElementsByClassName("btn_sign")[0].innerHTML != "SIGN IN") {
    if (
      document.getElementById("password").value ==
      document.getElementById("confirm_password").value
    ) {
      document.getElementById("message").style.color = "green";
      document.getElementById("message").innerHTML = "matching";
    } else {
      document.getElementById("message").style.color = "red";
      document.getElementById("message").innerHTML = "not matching";
    }
  }
};
function sign_up() {
  var inputs = document.querySelectorAll(".input_form_sign");
  document.querySelectorAll(".ul_tabs > li")[0].className = "";
  document.querySelectorAll(".ul_tabs > li")[1].className = "active";
  document.getElementById("form1").method = "POST";
  for (var i = 0; i < inputs.length; i++) {
    if (i == 2) {
    } else {
      document.querySelectorAll(".input_form_sign")[i].className =
        "input_form_sign d_block";
    }
  }

  setTimeout(function () {
    for (var d = 0; d < inputs.length; d++) {
      document.querySelectorAll(".input_form_sign")[d].className =
        "input_form_sign d_block active_inp";
    }
  }, 100);
  document.querySelector(".btn_sign").innerHTML = "SIGN UP";
  setTimeout(function () {}, 500);
  setTimeout(function () {}, 450);
}

function sign_in() {
  var inputs = document.querySelectorAll(".input_form_sign");
  document.querySelectorAll(".ul_tabs > li")[0].className = "active";
  document.querySelectorAll(".ul_tabs > li")[1].className = "";
  document.getElementById("form1").method = "GET";
  document.getElementById("message").innerHTML = "";
  for (var i = 0; i < inputs.length; i++) {
    switch (i) {
      case 1:
        console.log(inputs[i].name);
        break;
      case 2:
        console.log(inputs[i].name);
      default:
        document.querySelectorAll(".input_form_sign")[i].className =
          "input_form_sign d_block";
    }
  }

  setTimeout(function () {
    for (var d = 0; d < inputs.length; d++) {
      switch (d) {
        case 1:
          console.log(inputs[d].name);
          break;
        case 2:
          console.log(inputs[d].name);

        default:
          document.querySelectorAll(".input_form_sign")[d].className =
            "input_form_sign d_block";
          document.querySelectorAll(".input_form_sign")[2].className =
            "input_form_sign d_block active_inp";
      }
    }
  }, 100);

  setTimeout(function () {}, 500);

  setTimeout(function () {
    document.querySelector(".link_forgot_pass").style.opacity = "1";
    document.querySelector(".link_forgot_pass").style.top = "5px";

    for (var d = 0; d < inputs.length; d++) {
      switch (d) {
        case 1:
          console.log(inputs[d].name);
          break;
        case 2:
          console.log(inputs[d].name);

          break;
        default:
          document.querySelectorAll(".input_form_sign")[d].className =
            "input_form_sign";
      }
    }
  }, 1500);
  document.querySelector(".btn_sign").innerHTML = "SIGN IN";
}

window.onload = function () {
  document.querySelector(".cont_centrar").className =
    "cont_centrar cent_active";
};

let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let password2 = document.querySelector("#password2");
let p_tag = document.querySelectorAll("p");
let form_group = document.querySelector("#form-group");

let pattens = {
     name: /^[a-zA-z\.\s]{2,}$/,
     email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
     password: /^[a-zA-Z0-9\-_%#.\{}\(\)\[\]@&*]{6,}$/,
};

form_group.addEventListener("submit", (e) => {
     e.preventDefault();
     [username, email, password, password2].forEach((input, idx) => {
          check_all_spaces(input, idx);
     });
});

function check_all_spaces(input, idx) {
     if (input.value.trim() == "") {
          error(input, idx, "Please Enter Input");
     } else {
          if (idx == 0) {
               check_validation(
                    input,
                    idx,
                    "This value includes (a-z) ,(A_Z) and space",
                    pattens.name
               );
          } else if (idx == 1) {
               check_validation(
                    input,
                    idx,
                    "This value includes (a-z) ,(A_Z) and special characters ",
                    pattens.email
               );
          } else if (idx == 2) {
               check_validation(
                    input,
                    idx,
                    "This value atleast greater then 6 characters includes (a-z) ,(A_Z) ,(0-9) and special characters ",
                    pattens.password
               );
          } else if (idx == 3) {
               check_validation(
                    input,
                    idx,
                    "This password doesn't match conform password or password invalid",
                    pattens.password
               );
          }
     }
}

function sucess(input, idx) {
     p_tag[idx].className = "";
     input.className = "sucess";
}

function error(input, idx, message) {
     input.className = "error";
     p_tag[idx].className = "p-error";
     p_tag[idx].innerText = message;
}

function check_validation(input, idx, message, patten) {
     if (idx !== 3) {
          if (patten.test(input.value)) {
               sucess(input, idx);
          } else {
               error(input, idx, message);
          }
     } else {
          if (password.value == password2.value && patten.test(password.value)) {
               sucess(input, idx);
          } else {
               error(input, idx, message);
          }
     }
}

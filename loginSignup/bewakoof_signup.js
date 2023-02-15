window.onload = function () {
    if (localStorage.getItem("phoneNumbers")) {
        let phoneNumber = JSON.parse(localStorage.getItem("phoneNumbers"));
        let currentPhoneNumber = phoneNumber[phoneNumber.length - 1];
        console.log("current:", currentPhoneNumber);
        let inputElement = document.querySelector("#phone-number");
        if (inputElement) {
            inputElement.value = currentPhoneNumber;
        }
    }
};


let signUpArray = JSON.parse(localStorage.getItem("BewakoofData")) || [];
console.log(signUpArray);

const fullnameInput = document.querySelector(".fullname_input");
const emailInput = document.querySelector(".email_input");
const passwordInput = document.querySelector(".password_input");
const signupBtn = document.querySelector("#signup-btn");

signupBtn.addEventListener("click", function () {
    const msgDiv = document.getElementById("msg");
    const msgEmail = document.getElementById("msg-email");
    const msgPass = document.getElementById("msg-psw");

    if (!fullnameInput.value) {
        msgDiv.innerHTML = "Please enter a name ";
        return;
    }
    if (!emailInput.value) {
        msgEmail.innerHTML = "Please enter a valid Email ";
        return;

    }
    if (!passwordInput.value) {
        msgEmail.innerHTML = "Please enter a Password ";
        return;

    }
    const signUpObject = {
        fullName: fullnameInput.value,
        //  mobile: inputElement.value,
        email: emailInput.value,
        password: passwordInput.value
    };

    for (let i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email === emailInput.value) {
            msgEmail.innerHTML = "Email already registered!";
            return;
        }
    }
    signUpArray.push(signUpObject);
    console.log(signUpArray);
    localStorage.setItem("BewakoofData", JSON.stringify(signUpArray));

    window.location.href = "./send_otp.html";

});
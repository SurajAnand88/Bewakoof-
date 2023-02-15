
const signUpArray = JSON.parse(localStorage.getItem("BewakoofData"));
console.log(signUpArray);

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

    const lastSignUpObject = signUpArray[signUpArray.length - 1];

    document.getElementById("fullName").value = lastSignUpObject.fullName;
    document.getElementById("email").value = lastSignUpObject.email;
    document.getElementById("password").value = lastSignUpObject.password;

};


function storeData() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const password = document.getElementById('password').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.getElementById('gender').value;

    const formData = {
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        birthdate: birthdate,
        gender: gender,
    };

    localStorage.setItem('formData', JSON.stringify(formData));
}

// Hello world
const phoneInputField = document.getElementById("phone-number");
const msgDiv = document.getElementById("msg");

// function getData(){
//   if (!phoneInputField.value) {
//     msgDiv.innerHTML = "Please enter a phone number";
//     return;
//   }

//   let x = phoneInputField.value;
//   console.log(x);

// }

function getData() {
    if (!phoneInputField.value) {
        msgDiv.innerHTML = "Please enter a phone number";
        return;
    }
    msgDiv.innerHTML = "";
    let x = phoneInputField.value;
    console.log(x);
    let numbers = [];
    numbers.push(x);
    console.log("numbers", x);
    localStorage.setItem("currentnumber", JSON.stringify(numbers));
    // console.log(x);
    let phoneNumbers = JSON.parse(localStorage.getItem("phoneNumbers")) || [];
    if (phoneNumbers.includes(phoneInputField.value)) {
        alert("number is already registered");
        window.location.href = "./otp_timer_same_number.html";
    } else {
        phoneNumbers.push(phoneInputField.value);
        localStorage.setItem("phoneNumbers", JSON.stringify(phoneNumbers));
        alert(" new number is registered");

        window.location.href = "./bewakoof_signup.html";

    }

}





window.onload = function() {
  if (localStorage.getItem("phoneNumbers")) {
    let phoneNumber = JSON.parse(localStorage.getItem("phoneNumbers"));
    let currentPhoneNumber = phoneNumber[phoneNumber.length - 1];
    console.log("current:",currentPhoneNumber);
    let inputElement = document.querySelector("#phone-number");
    if (inputElement) {
      inputElement.value = currentPhoneNumber;
    }
  }
};

localStorage.setItem("defaultOTP", "1234");
 let otp = localStorage.getItem("defaultOTP");
 console.log(otp);
// const enteredOTP = `${document.getElementById("input-1").value}${document.getElementById("input-2").value}${document.getElementById("input-3").value}${document.getElementById("input-4").value}`;

// console.log(enteredOTP);
//  console.log("default",defaultOTP);


const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");
const input3 = document.getElementById("input-3");
const input4 = document.getElementById("input-4");

const submitButton = document.querySelector('button');

// localStorage.setItem("defaultOTP", "1234");
// const defaultOTP = localStorage.getItem("defaultOTP");
 
// const enteredOTP = `${document.getElementById("input-1").value}${document.getElementById("input-2").value}${document.getElementById("input-3").value}${document.getElementById("input-4").value}`;

// console.log(enteredOTP);

submitButton.addEventListener('click', function() {
  const defaultOTP = localStorage.getItem("defaultOTP");
  const enteredOTP = `${document.getElementById("input-1").value}${document.getElementById("input-2").value}${document.getElementById("input-3").value}${document.getElementById("input-4").value}`;
  
  if (!input1.value || !input2.value || !input3.value || !input4.value) {
    alert('Enter all digits');
  } 
  else if (enteredOTP === defaultOTP)
  {
    // alert("correct Otp");
    // window.location.href = 'index.html';
    window.location.href = './timer_index.html'

  }
  else {
    alert("wrong otp");
  }
  // if (!input1.value || !input2.value || !input3.value || !input4.value) {
  //   alert('Enter all digits');
  // } 
  // else if (enteredOTP === defaultOTP)
  // {
  //   alert("correct Otp");
  // }
  // else {
  //   alert("wrong otp");
  //   // window.location.href = 'index.html';
  // }
  
  // else {
    
  //   window.location.href = 'index.html';
  // }
});

input1.addEventListener("input", function() 
{
  if (this.value.length === 1) {
    input2.focus();
  }
});

input2.addEventListener("input", function() 
{
  if (this.value.length === 1) {
    input3.focus();
  }
});

input3.addEventListener("input", function()
 {
  if (this.value.length === 1) {
    input4.focus();
  }
});

const modal = document.getElementById("otp-popup");
const closeButton = document.querySelector(".close-button");
const timer = document.getElementById("timer");
let seconds = 30;

closeButton.addEventListener("click", function() {
  modal.style.display = "none";
  window.location.href = './bewakoof_signup.html';
});

modal.style.display = "block";
timer.innerHTML = `Time remaining: ${seconds} seconds`;

const countdown = setInterval(function() {
  seconds--;
  timer.innerHTML = `Time remaining: ${seconds} seconds`;
  if (seconds == 0) {
    // clearInterval(countdown);
    // modal.style.display = "none";
    clearInterval(countdown);
  input1.value = "";
  input2.value = "";
  input3.value = "";
  input4.value = "";
  submitButton.innerHTML = "Resend OTP";
  submitButton.removeEventListener("click", verifyOTP);
  submitButton.addEventListener("click", resendOTP);
  }
}, 1000);



function verifyOTP() {
  const defaultOTP = localStorage.getItem("defaultOTP");
  const enteredOTP = `${document.getElementById("input-1").value}${document.getElementById("input-2").value}${document.getElementById("input-3").value}${document.getElementById("input-4").value}`;
  
  if (!input1.value || !input2.value || !input3.value || !input4.value) {
    alert('Enter all digits');
  } 
  else if (enteredOTP === defaultOTP)
  {
    // alert("correct Otp");
    // window.location.href = 'index.html';
    window.location.href = './timer_index.html';

  }
  else {
    alert("wrong otp");
  }
  // if (!input1.value || !input2.value || !input3.value || !input4.value) {
  //   alert('Enter all digits');
  // } else if (enteredOTP === defaultOTP)
  // {
  //   alert("correct Otp");
  // }
  // else {
  //   alert("wrong otp");
  //   // window.location.href = 'index.html';
  // }
  //else {
  //   window.location.href = 'index.html';
  // }
}


function resendOTP() {
  // logic to resend OTP

  seconds = 30;
  timer.innerHTML = `Time remaining: ${seconds} seconds`;

  submitButton.innerHTML = "Submit OTP";
  submitButton.removeEventListener("click", resendOTP);
  submitButton.addEventListener("click", verifyOTP);

  // Start the timer again
  
  // countdown = setInterval(function() {
  let counter = setInterval(function() {
    seconds--;
    timer.innerHTML = `Time remaining: ${seconds} seconds`;
    if (seconds == 0) {
      clearInterval(counter);
      input1.value = "";
      input2.value = "";
      input3.value = "";
      input4.value = "";
      submitButton.innerHTML = "Resend OTP";
      submitButton.removeEventListener("click", verifyOTP);
      submitButton.addEventListener("click", resendOTP);
    }
  }, 1000);
}

// localStorage.setItem("defaultOTP", "1234");
// const defaultOTP = localStorage.getItem("defaultOTP");
 
// const enteredOTP = `${document.getElementById("input-1").value}${document.getElementById("input-2").value}${document.getElementById("input-3").value}${document.getElementById("input-4").value}`;

// console.log(enteredOTP);
//  console.log("default",defaultOTP);

//  document.querySelector("button").addEventListener("click", function() {
//   // Check if the entered OTP matches the default OTP
//   if (enteredOTP === defaultOTP) {
//     // Redirect to index.html
//     window.location.href = "index.html";
//   } else {
//     // Shake the popup box
//     document.querySelector("#otp-popup").classList.add("shake");
//     // Show an alert with the message "Wrong OTP"
//     alert("Wrong OTP");
//   }
// });

window.onload = function () {
    if (localStorage.getItem("phoneNumbers")) {
        let phoneNumber = JSON.parse(localStorage.getItem("phoneNumbers"));
        console.log(phoneNumber);
        let currentPhoneNumber = phoneNumber[phoneNumber.length - 1];
        console.log("current:", currentPhoneNumber);
        let inputElement = document.querySelector("#entered-number");
        inputElement.textContent = currentPhoneNumber;
    }
};
document.querySelector("#close-popup").addEventListener("click", function () {
    document.querySelector("#popup").style.display = "none";
});
document.querySelector("#get-otp").addEventListener("click", function () {
    window.location.href = "./otp_timer.html";
})
import {navbar2} from "/home/componenets/navbar.js";
import footer from "/home/componenets/footer.js";

let nav = document.querySelector("nav")
nav.innerHTML  = navbar2();
// console.log(navbar2);

let footer1 = document.querySelector("footer")
footer1.innerHTML  = footer();
console.log(footer1);

document.querySelector("#continue-redirect").addEventListener("click", redirectToHomePage);
function redirectToHomePage(){
    window.open("../index.html", "_self")
}
  
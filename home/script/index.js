 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    
  }

  // var input = document.getElementById("myInput");

  var input = document.getElementById("search-input");
  // var input = document.getElementById("search-input").value;

  input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      getvalue();
    }
  });


  var arr ;
  async function getvalue(){
    let x = document.getElementById("search-input").value;
  var data = await fetch('https://bewakoof-api.onrender.com/mens');
  var jsonData =await data.json();
  arr = jsonData;
   
calling(x);
}
var arr1 =  [];
function calling (x){

  arr.map((e)=>{
    let y = e.title.toUpperCase();
    if(y.includes(x.toUpperCase()) ){
      arr1.push(e);
      localStorage.setItem("dataparse",JSON.stringify( arr1));
      window.open("/shopPage/search.html")
    }
    console.log(e);
  })
}

let signUpArray = JSON.parse(localStorage.getItem("BewakoofData")) ;
console.log(signUpArray[0].fullName);

let logname = document.getElementById("login-name1");
logname.textContent = "Hi," + signUpArray[0].fullName;
logname.style.fontSize = "15px"

document.querySelector("#cart-icon").addEventListener("click", ()=>{
  window.open("/cartPage/cart.html")
})
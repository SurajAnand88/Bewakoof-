import desc from "./desc.js";
import offers from "./offers.js";
import footer from "../home/componenets/footer.js";
var product = JSON.parse(localStorage.getItem("product"));
displayData(product);




function displayData(element) {
  document.getElementById("product").innerHTML = `
    <div class="col-md-6 ps-md-5">
        <div class="row ">
            <div id="imgsl" class="d-flex col-2 d-none d-md-block mt-2">
                <p class="ms-4"><i class="fa-solid fa-2x fa-angle-up  ms-xl-1 ms-xxl-2"></i></p>
                <div><img src="${element.image}" class="img-fluid w-100"></div>
                <div><img src="${element.image2}" class="img-fluid w-100 mt-2"></div>
                <div><img src="${element.image3}" class="img-fluid w-100 mt-2"></div>
                <div><img src="${element.image4}" class="img-fluid w-100 mt-2"></div>
                <div><img src="${element.image}" class="img-fluid w-100 mt-2" id="image-last"></div>
                <p class="ms-4"><i class="fa-solid fa-2x fa-angle-down mt-4 ms-xl-1 ms-xxl-2"></i></p>
            </div>
            <div class="col " >
                <img src="${element.image}" class="img-fluid w-100 " id="main-image">
            </div>
        </div>
    </div>
    <div class="col-md-6 p-4 pe-5">
        <h1 style="font-size:18px" class="text-uppercase fw-bold opacity-75">${element.brand}</h1>
        <h2 style="font-size:16px; font-weight:400" class="opacity-75">${element.title}</h2>
        <p>
            <span style="font-size:24px; font-weight:600" class="ms-1">${element.price}</span>
            <span style="font-size:14px; font-weight:400" class="ms-1 text-decoration-line-through">${element.orignal_price}</span>
            <span style="font-size:16px; color:#00B852" class="ms-2">65% OFF</span>
        </p>
        <p>inclusive of all taxes</p>
        
        <div class="d-flex">
            <p class="ms-3  px-2 py-1 text-white fw-bold bg-secondary" id="tag">${element.tag}</p>
            <p class="ms-4 border border-dark px-2 py-1 fw-bold">DESIGN OF THE WEEK</p>
        </div>

        <div>
            <hr>
                <p class="pe-md-5">
                TriBe members get an extra discount of <span class="fw-bold">₹40</span> and FREE shipping.</p><a style="color:#42a2a2">Learn more</a></p>
                </p>
            <hr>
        </div>
        
        <div class="row mx-3 ">
            <h6 class="col-6 fw-bold">SELECT SIZE</h6>
            <a class="col-6 text-end fw-bold" style="color:#42A2A2">Size Guide</a>
        </div>

        <div class="row row-cols-10 m-3 py-2 pb-4" id="size">
            <div class="col p-3 border border-dark text-center ms-3 rounded-3"> S</div>
            <div class="col p-3 border border-dark text-center ms-3 rounded-3"> M</div>
            <div class="col p-3 border border-dark text-center ms-3 rounded-3"> L</div>
            <div class="col p-3 border border-dark text-center ms-3 rounded-3"> XL</div>
            <div class="col p-3 border border-dark text-center ms-3 rounded-3">2XL</div>
            <div class="col p-3 border border-dark text-center ms-3 rounded-3">3XL</div>
            <div class="col p-2 ms-3" ></div>
            <div class="col p-2 ms-3"></div>
            <div class="col p-2 ms-3"></div>
            <div class="col p-2 ms-3"></div>
        </div>

        <div class="row mx-3" id="buttons">
            <button class="col me-1 border-0 fw-bold " style="font-size:14px; background-color:#FFD84D; padding: 10px 0" ><i class="fa-solid fa-bag-shopping me-2"></i>ADD TO BAG</button>
            <button class="col ms-1 border border-dark bg-light fw-bold opacity-50" style="font-size:14px; padding: 10px 0"><i class="fa-regular fa-heart me-2"></i>WISHLIST</button>
        </div>

        <div id="collapse-start">

            <div class="d-flex justify-content-between px-4 pt-3 mt-3">
                <p><a class="text-decoration-none text-dark fw-bold" data-bs-toggle="collapse" href="#offers" role="button" aria-expanded="false" aria-controls="offers">SAVE EXTRA WITH 3 OFFERS</a></p>
                <span class="arrow-dwn">
                <i class="fa-solid fa-plus"></i>
                </span>
            </div>

            <div class="border-0 collapse mt-0" id="offers">
                <div class="card card-body py-0 border-0 px-4">
                 
                </div>
            </div>
            

            <div class="d-flex justify-content-between px-4 pt-3">
                <p><a class="text-decoration-none text-dark fw-bold" data-bs-toggle="collapse" href="#description" role="button" aria-expanded="false" aria-controls="description">PRODUCT DESCRIPTION</a></p>
                <p class="arrow-dwn ">
                <i class="fa-solid fa-plus"></i>
                </p>
            </div>

            <div class="border-0 collapse mt-0" id="description">
                <div class="card card-body py-0 border-0 px-4">
                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
            </div>

            <div class="d-flex justify-content-between px-4 pt-3">
                <p><a class="text-decoration-none text-dark fw-bold" data-bs-toggle="collapse" href="#exchange" role="button" aria-expanded="false" aria-controls="exchange">15 DAY RETURNS & EXCHANGE</a></p>
                <p class="arrow-dwn ">
                <i class="fa-solid fa-plus"></i>
                </p>
            </div>

            <div class="border-0 collapse mt-0" id="exchange">
                <div class="card card-body py-0 border-0 px-4">
                Easy returns upto 15 days of delivery. Exchange available on select pincodes.
                </div>
            </div>

            <div class="d-flex justify-content-between px-4 pt-3">
                <p><a class="text-decoration-none text-dark fw-bold" data-bs-toggle="collapse" href="#delivery" role="button" aria-expanded="false" aria-controls="delivery">DELIVERY DETAILS</a></p>
                <p class="arrow-dwn ">
                <i class="fa-solid fa-plus"></i>
                </p>
            </div>

            <div class="border-0 collapse mt-0" id="delivery" style="border-color:red;">
                <div class="card card-body py-0 border-0 px-4">
                 <input type="text" placeholder="Enter Pincode/Postal Code/Zipcode" class="my-3 p-3">
                </div>
            </div>
            
       </div>
       <div>
          <img src="./review.png" class="image-fluid w-100">
       </div>
    </div>
    `;

  // getting tag
  let tag = document.getElementById("tag");
  if (tag.textContent == "undefined") {
    document.getElementById("tag").textContent = "BUY 3 FOR 899";
  }
  if (element.image1 !== undefined) {
    document.getElementById("image-last").src = element.image1;
  }

  //setting extra images
  document.getElementById("imgsl").addEventListener("click", function (e) {
    document.getElementById("main-image").src = e.target.src;
  });

  //adding to cart
  document.querySelector("#buttons").addEventListener("click", function (e) {
    if (e.target.textContent === "ADD TO BAG") {
      var obj = JSON.parse(localStorage.getItem("product"));
      var cart = JSON.parse(localStorage.getItem("cart")) || [];
      obj.quantity = 1;
      cart.push(obj);
      localStorage.setItem("cart", JSON.stringify(cart));
      e.target.innerHTML = `<i class="fa-solid fa-bag-shopping me-2"></i>GO TO BAG`;
      e.target.onclick = function () {
        goToCart();
      };
    } else if (e.target.textContent === "WISHLIST") {
      e.target.innerHTML = ` <i class="fa-solid fa-heart me-2"></i>WISHLISTED`;
      let h = document.querySelector(".fa-heart");
      h.style.color = "red";
    }
  });

  //selecting sizes
  let sizes = document.querySelectorAll("#size div");
  for (let i = 0; i < 6; i++) {
    sizes[i].addEventListener("click", () => {
      for (let j = 0; j < 6; j++) {
        if (
          window.getComputedStyle(sizes[j]).backgroundColor === "rgb(0, 0, 0)"
        ) {
          sizes[j].style.backgroundColor = "rgba(0, 0, 0, 0)";
          sizes[j].style.color = "black";
        }
      }
      if (
        window.getComputedStyle(sizes[i]).backgroundColor == "rgba(0, 0, 0, 0)"
      ) {
        sizes[i].style.backgroundColor = "black";
        sizes[i].style.color = "white";
      }
    });
  }

  document.querySelector("#offers div").innerHTML = offers();
  document.querySelector("#description div").innerHTML = desc();
}

//redirecting
function goToCart() {
  console.log("goToCart");
  window.open("../cartPage/cart.html");
}

// import product from "./product.js";


var cartItems = JSON.parse(localStorage.getItem("cart")) || [];
var total = 0;
var orignal = 0;
var discount = 0;
productDetails(cartItems);
display(cartItems);

function display(array) {
 console.log(array);
 document.getElementById("showProducts").innerHTML = "";
 total = 0;
 orignal = 0;
 discount = 0;
 document.getElementById("showProducts").innerHTML = "";
 array.forEach((element, index) => {
  total += Number(element.price.substring(1) * element.quantity);
  orignal += Number(element.orignal_price.substring(1) * element.quantity);

  document.getElementById("showProducts").innerHTML += `
  <div class="product-container row col-12  mx-2 p-3  pb-0 mt-3 border" id="products">
      <div class="col-9">
          <p class="text-truncate" style="font-size:14px;">${element.title}</p>
          <p class="d-flex">
              <span class="fw-bold" style="font-size:18px;">${element.price}</span>
              <span class="ms-2 text-decoration-line-through" style="font-size:14px;">${element.orignal_price}</span>
          </p>
          <p style="color:green; font-size:14px">You saved ₹<span id="off" style="font-size:14px;">600</span></p>
  
          <div class="row ">
  
  
              <div class="col-3 col-lg-2 col-md-3 p-1 ms-2 d-flex align-items-center justify-content-evenly border rounded-3">
               
                <p class="mb-0">
                  <a
                    class="text-decoration-none text-dark"
                    style="font-size: 14px; font-weight: 500"
                    data-bs-toggle="collapse"
                    href="#size${index}"
                    role="button"
                    aria-expanded="false"
                    aria-controls="size${index}"
                    >Size</a
                  >
                  <p class="arrow-dwn mb-0">
                      <select class="fw-bold" name="quantity-select" id="size-select${index}" style="border:none; background-color: white; width:30px;">
                          <option class="fw-bold" >S</option>
                          <option value="1" >XS</option>
                          <option value="2" >S</option>
                          <option value="3" >M</option>
                          <option value="4" >L</option>
                          <option value="5" >XL</option>
                          <option value="6" >XXL</option>
                      </select> 
                  </p>
                </p>
              </div>
  
              <div class="col-3 col-lg-2 col-md-3 p-1 ms-2 d-flex align-items-center justify-content-evenly border rounded-3">
               
                <p class="mb-0">
                  <a
                    class="text-decoration-none text-dark"
                    style="font-size: 14px; font-weight: 500"
                    data-bs-toggle="collapse"
                    href="#qty${index}"
                    role="button"
                    aria-expanded="false"
                    aria-controls="qty${index}"
                    >Qty</a
                  >
                  <p class="arrow-dwn mb-0">
                  <select class="fw-bold" name="quantity-select" id="qty-select${index}" style="border:none; background-color: white; width:30px;">
                          <option >1</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="more">more</option>
                    </select> 
                    
                    </span>
                  </p>
                </p>
              </div>
  
          </div>
      </div>
      <div class="col-3 p-3">
          <image src="${element.image}" class="image-fluid w-100">
          
          </div>
  
      <div class="row col-12 border-top py-3 mt-3 ms-0 me-0">
          <div class="col-6 border-end text-center" style="font-size:14px;" onclick="remove(${index})">
              REMOVE
          </div>
          <div class="col-6  text-center" style="font-size:14px;">
              Move to Wishlist
          </div>
      </div>
  
  </div>
  
  `;
 });
 discount = orignal - total;
 document.getElementById("total").textContent = total;
 document.getElementById("total1").textContent = total;
 document.getElementById("discount").textContent = discount;
 document.getElementById("orignal-price").textContent = orignal;

 if (array.length === 1) {
  document.querySelector("#products").style.height = "269px";
 }
 Addevent();
 AddQty();
}
// add qty
function AddQty() {
 let cont = document.querySelectorAll(".product-container");
 for (let i = 0; i < cont.length; i++) {
  cont[i].children[0].children[3].children[1].children[1].children[0].value =
   cartItems[i].quantity;
 }
}

//removing from cart
function remove(ind) {
 let cart = JSON.parse(localStorage.getItem("cart"));
 let arr = cart.filter((element, index) => {
  return index !== ind;
 });
 localStorage.setItem("cart", JSON.stringify(arr));
 console.log(arr);
 cartItems = arr;
 display(cartItems);
}
// Adding Events to every product container
function Addevent() {
 var containers = document.querySelectorAll(".product-container");
 for (let i = 0; i < containers.length; i++) {
  containers[i].addEventListener("click", (e) => {
   let index = i;
   // let price = Number(
   //   e.currentTarget.children[0].children[1].children[0].textContent.substring(
   //     1
   //   )
   // );

   let price = cartItems[i].price;
   // let orignal_price = Number(
   //   e.currentTarget.children[0].children[1].children[1].textContent.substring(
   //     1
   //   )
   // );

   let orignal_price = cartItems[i].orignal_price;

   let qty = Number(
    e.currentTarget.children[0].children[3].children[1].children[1].children[0]
     .value
   );
   cartItems[i].quantity = qty;
   display(cartItems);
   // let tPrice = Number(document.getElementById("total").textContent);
   // let oPrice = Number(document.getElementById("orignal-price").textContent);

   // let prePrice = 0;
   // let totalPrice = 0;

   // if (preQty !== undefined && preQty !== qty) {
   //   prePrice = preQty * price;
   //   totalPrice = qty * price;
   // }
   // preQty = qty;
   // tPrice += totalPrice - prePrice;

   // let totalOrignalPrice = qty * orignal_price;

   // if (e.target == "REMOVE") {
   //   remove(i);
   // }
  });
 }
}
// product details function
function productDetails() {
 document.getElementById("showDetails").innerHTML = `
  <div class="row m-0 p-3 mt-sm-4">
        <p style="background-color:#FDD835;font-size:14px;"  class=" p-3 fw-bold d-flex justify-content-between align-items-center"> <span>Save extra ₹80 with TriBe</span><span><i class="fa-solid fa-angles-right"></i></span></p>
         <p class="px-1 m-1">Whistles! Get extra 10% Cashback upto 100 on prepaid orders above Rs.699. Coupon code - PAYDAY.</p> 

    <div class="border pt-2" id="coupan-section" >
        <p class="d-flex justify-content-between p-2 my-0 rounded" style="background-color:#EBF6F5; color:#42a2a2;"><span>Apply Coupan / Gift Card / Referral</span>     <span class="fw-bold">Redeem <i class="fa-solid fa-angles-right"></i></span></p>
    </div>
    <p style="width:100%;background-color:#EBEBEB;" class="fw-bold py-3 mb-0 d-flex align-items-center">PRICE SUMMARY</p>
    <div class="border">
            <p class="d-flex justify-content-between pt-2">
                <span style="font-weight:500;">Total MRP (Incl. of taxes) </span>
                <span style="font-weight:500;">₹<span id="orignal-price">${orignal}</span></span>
            </p>
            <p class="d-flex justify-content-between">
                <span style="font-weight:500;">Shipping Charges</span>
                <span style="color:#42A2A2; font-weight:500">FREE</span>
            </p>
            <p class="d-flex justify-content-between">
                <span style="font-weight:500;">Bag Discount</span>
                <span style="font-weight:500;">-₹<span id="discount">${discount}</span></span>
            </p>
            <p class="d-flex justify-content-between">
                <span class="fw-bold" style="font-size:16px">Subtotal</span>
                <span class="fw-bold" style="font-size:14px">₹<span id="total">${total}</span></span>
            </p>
            <p class="d-flex justify-content-between border-top pt-3 ">
                <span class=" d-flex flex-column pt-3">
                        <span style="font-size:12px; font-weight:600;">Total</span>
                        <span style="font-size:16px; font-weight:600;">₹ <span id="total1">${total}</span></span>
                </span>
                <span class=" d-flex align-items-center justify-content-center rounded" style="padding:15px 0;font-size:16px;font-weight:500;background-color: #42a2a2; color:white;width:65%" onclick="addAddress()">
                        ADD ADDRESS
                </span>
            </p>
        </div>
    
</div>

`;
}
document.getElementById("coupan-section").addEventListener("click", () => {
 open();
});
// poping up coupan section
function open() {
 document.querySelector(".coupan").classList.add("add");
}
// hiding coupan section
function none() {
 document.querySelector(".coupan").classList.remove("add");
}

// poping up address section
function addAddress() {
 document.querySelector(".address").classList.add("add-address");
}

// Hiding address section
function cancelAddress() {
 document.querySelector(".address").classList.remove("add-address");
}

// saving user input address
document.getElementById("form").addEventListener("submit", (e) => {
 e.preventDefault();
//  window.open('../payment/payment.html')
 window.location.href = '../payment/payment.html'
 document.querySelector(".address").classList.remove("add-address");
});

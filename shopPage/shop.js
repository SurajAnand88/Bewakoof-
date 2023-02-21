import {navbar2} from "../home/componenets/navbar.js";
import card from "./card.js";
document.querySelector("nav").innerHTML = navbar2();

var AllPRoducts;
var products;
var preProducts;
var currArr;
async function getData() {
  const jsondata = await fetch("https://bewakoof-api.onrender.com/mens");
  const data = await jsondata.json();
  data.forEach((element) => {
    if (element.tag == undefined) {
      element.tag = "BUY 3 FOR 899";
    }
    if (element.tag === "BUY 3 FOR 899") {
      element.tagColor = "#079845";
    }
    if (element.tag !== "BUY 3 FOR 899") {
      element.tagColor = "#615E5A";
    }
  });

  displayData(data);
  AllPRoducts = data;
  return data;
}
getData();

// var element = {
//   image:
//     "https://images.bewakoof.com/t640/lost-mountains-half-sleeve-t-shirt-272010-1655748131-1.jpg",
//   title: "Lost Mountains Half Sleeve T-Shirt",
//   price: "₹349",
//   orignal_price: "₹1099",
//   tribe: "₹319For TriBe Members",
//   tag: "BUY 3 FOR 899",
//   image2:
//     "https://images.bewakoof.com/t1080/lost-mountains-half-sleeve-t-shirt-272010-1655748142-3.jpg",
//   image3:
//     "https://images.bewakoof.com/t1080/lost-mountains-half-sleeve-t-shirt-272010-1655748147-4.jpg",
//   image4:
//     "https://images.bewakoof.com/t1080/lost-mountains-half-sleeve-t-shirt-272010-1655748131-1.jpg",
//   description:
//     "Revamp your look with this Lost Mountains Men's Printed T-Shirt. Style this t-shirt with a pair of joggers, sliders & wayfarers for a cool look.\nCountry of Origin - India\nManufactured By - Bewakoof Brands Pvt Ltd, Sairaj Logistic Hub #A5, Bmc Pipeline Road, Opposite All Saints High School, Amane, Bhiwandi, Thane, Maharashtra - 421302\nPacked By - Bewakoof Brands Pvt Ltd, Sairaj Logistic Hub #A5, Bmc Pipeline Road, Opposite All Saints High School, Amane, Bhiwandi, Thane, Maharashtra - 421302\nCommodity - Men's T-Shirt",
//   spec: [
//     {name: "Regular fit - Fitted at Chest and Straight on Waist Down"},
//     {
//       name: "Single Jersey, 100% Cotton Classic, lightweight jersey fabric comprising 100% cotton.",
//     },
//   ],
//   rating: "4.6",
//   brand: "Bewakoof",
//   sleeve: "half",
// };

function displayData(array) {
  document.getElementById("card").innerHTML = "";
  array.forEach((element, index) => {
    var s = card(element, index);
    // console.log(s);
    document.getElementById("card").innerHTML += s[0];
    let d = document.getElementById(`product${index}`);
    // console.log(d);
  });
  event(array);
  currArr = array;
  //adding sort element
  let div = document.createElement("div");
  let innerdiv = document.createElement("div");
  innerdiv.classList.add("d-flex", "justify-content-end", "pe-2");
  div.classList.add("d-none", "d-md-block", "py-4");

  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  p1.classList.add("px-2", "fw-bold");
  p2.classList.add("px-2");
  p3.classList.add("px-2");
  p1.textContent = "SORT BY";
  p2.textContent = "Popular";
  p3.innerHTML = `<i class="fa-solid fa-angle-down"></i>`;
  innerdiv.append(p1, p2, p3);
  div.append(innerdiv);
  document.getElementById("card").prepend(div);
}
// adding clear filter
let filterdiv = document.createElement("div");
let filterdiv2 = document.createElement("div");
filterdiv.classList.add("d-none", "d-md-block");
filterdiv2.classList.add("d-flex", "justify-content-between", "py-4");

let fp1 = document.createElement("p");
fp1.textContent = "FILTERS";
fp1.classList.add("fw-bold");
let fp2 = document.createElement("p");
fp2.style.fontWeight = "500";
fp2.textContent = "Clear All";
fp2.style.color = "#42A2A2";
fp2.addEventListener("click", function () {
  clearFilters();
});
filterdiv2.append(fp1, fp2);
filterdiv.append(filterdiv2);

document.getElementById("collapse-start").prepend(filterdiv);

// Adding Events

function event(array) {
  array.map((element, index) => {
    document
      .getElementById(`product${index}`)
      .addEventListener("click", function () {
        localStorage.setItem("product", JSON.stringify(element));
        window.open("../SingleProduct/singleProduct.html");
      });
  });
}

let brands = document.querySelectorAll(".brand");
for (let i = 0; i < brands.length; i++) {
  brands[i].addEventListener("click", function () {
    brands[i].classList.toggle("colorAdd");
    let needBrand = brands[i].textContent;
    let newProducts = AllPRoducts.filter((element) => {
      return element.brand == needBrand;
    });
    products = newProducts;
    displayData(newProducts);
  });
}

let colors = document.querySelectorAll(".color");
for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener("click", function () {
    let needCol = colors[i].textContent;
    needCol = needCol.trim();
    let np = products.filter((element) => {
      return element.color == needCol;
    });
    preProducts = np;
    // console.log(products, np);
    displayData(np);
  });
}

let sleeves = document.querySelectorAll(".sleeve");
for (let i = 0; i < sleeves.length; i++) {
  sleeves[i].addEventListener("click", function () {
    sleeves[i].classList.toggle("colorAdd");
    let needSlv = sleeves[i].textContent;
    needSlv = needSlv.trim();
    let np = preProducts.filter((element) => {
      if (needSlv == "Half Sleeve") {
        return element.title.includes("Oversized");
      }
      if (needSlv == "Full Sleeve") {
        return element.title.includes("Full");
      }
      if (needSlv == "Sleeveless") {
        return element.title.includes("Tank");
      }
    });

    // console.log(products, np);
    displayData(np);
  });
}

let sorts = document.querySelectorAll(".sort");
console.assert(sorts);
for (let i = 0; i < sorts.length; i++) {
  sorts[i].addEventListener("click", function () {
    sorts[i].classList.toggle("colorAdd");
    let needSort = sorts[i].textContent;
    // console.log(needSort);
    if (needSort == "Low To High") {
      sortLTH(currArr);
    }
    if (needSort == "High To Low") {
      sortHTL(currArr);
    }
  });
}

//clearing filters

function clearFilters() {
  displayData(AllPRoducts);
}

function sortLTH(array) {
  array.sort(function (a, b) {
    return a.price.substring(1) - b.price.substring(1);
  });
  // console.log(array);
  displayData(array);
}

function sortHTL(array) {
  array.sort(function (a, b) {
    return b.price.substring(1) - a.price.substring(1);
  });
  displayData(array);
}

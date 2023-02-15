// let signUpArray = JSON.parse(localStorage.getItem("BewakoofData")) || [];



 function navbar2 (){
    return ` <!-- !Nav Upper Section -->
    <div id="nav-upper-section">
      <div id="first-section">
        <div><a class="undline-remove" href="">Offers</a></div>
        <div><a class="undline-remove" href="">Fanbook</a></div>
        <div><a class="undline-remove" href="">Download App</a></div>
        <div><a class="undline-remove" href="">TriBe Membership</a></div>
      </div>
      <div id="second-section">
        <div><a class="undline-remove" href="">Contact Us</a></div>
        <div><a class="undline-remove" href="">Track Order</a></div>
      </div>
    </div>

    <!-- !Nav Mid Section -->
    <div id="nav-mid-section">
      <!-- ?First - div which contains logo and men woman and mobile covers -->
      <div id="first-div">
        <div id="logo">
         <a href="../index.html"> <img
            src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg"
            alt=""
          /></a>
        </div>
        <div class="dropdown" id="dropdown">
          <div><a class="undline-remove" class="dropbtn" id="dropbtn">MEN</a></div>

          <div><a class="undline-remove" class="dropbtn">WOMAN</a></div>
          <div><a class="undline-remove" class="dropbtn">MOBILE COVERS</a></div>
        </div>
      </div>

      <div id="second-div">
        <div id="search">
          <div id="search-logo">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <input
            type="search"
            class="searchbtn"
            placeholder="Search by product, category or collection"
          />
        </div>
        <div id="login-wishlist-cart">
          <p id="login-name">Login</p>
          <div><i class="fa-regular fa-heart"></i></div>
          <div><i class="fa-solid fa-cart-shopping"></i></div>
        </div>
      </div>
    </div>`
}
export {navbar2} 
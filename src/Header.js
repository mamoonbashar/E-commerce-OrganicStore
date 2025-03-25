import logo from "/assets/organic-store-logo5.svg";
const headerHtml = `     <nav id="nav">
        <a class="CompanyLogo" href="index.html">
          <img src=${logo} alt="CompanyLogo" />
        </a>
        <ul class="navIcons">
        <a href="index.html">Home</a>
        <a href='Everything.html'>Everything</a>
          <a href="Grocerie.html">Groceries</a>
          <a href="Juice.html">Juice</a>
          
        </ul>

        <ul class="navIcons">
          <a href="About.html">About</a>
          <a href="contact.html">Contact</a>
          <a>Rs. 0.00</a>
          <a class="CartContainer">
            <span class="cart-count">0</span>
            <i class="fa-solid fa-basket-shopping"> </i
          ></a>
          <a >
          <i class="fa-solid fa-user" style="color: #000000"></i>
          </a>
        </ul>
        <ul class="ShoppingSideBar">
          <span class="CloseCart">
            <h3>Shopping Cart</h3>
            <i class="fa-solid fa-xmark"></i>
          </span>
          <section class="quickCartProducts">
            <ul id="productCardContainer"></ul>

            <template class="quickProducts">
              <li class="sideCartProducts">
                <img class="productCardImage" src="" alt="logo" />
                <p class="productName">Name</p>
                <i
                  id="deleteBtn"
                  class="fa-solid fa-trash"
                  style="color: #004732"
                ></i>
              </li>
            </template>
          </section>

          <a href="cart.html">Place Your Order</a>
        </ul>

        <div class="BurgerIcon">
         <a class="CartContainer">
            <span class="cart-count">0</span>
            <i class="fa-solid fa-basket-shopping"> </i
          ></a>
          <a class='burgerIconContainer'> <i class="fa-solid fa-bars"></i></a>
        </div>
        <!--  SideBar -->
        <ul class="SideBar">
          <span class="Close">
            <i class="fa-solid fa-xmark"></i>
          </span>
          <a href="Everything.html">Everything</a>
          <a href="Grocerie.html">Groceries</a>
          <a href="Juice.html">Juice</a>
          <a href="About.html">About</a>
          <a href="contact.html">Contact</a>
          <a>Rs. 0.00</a>
        </ul>
      </nav>`;
const HeaderEle = document.querySelector(".section-Header");
HeaderEle.insertAdjacentHTML("afterbegin", headerHtml);

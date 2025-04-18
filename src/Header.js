import logo from "/assets/organic-store-logo5.svg";
const headerHtml = `     <nav id="nav">
        <a class="CompanyLogo" href="index.html">
          <img src=${logo} alt="CompanyLogo" />
        </a>
        <div class="DarkMode">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="rgba(0,0,0,1)"
            >
              <path
                d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z"
              ></path>
            </svg>
            <div class="toggleDarkMode">
              
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="white"
            >
              <path
                d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"
              ></path>
            </svg>
          </div>
        <ul class="navIcons">
        <a href="index.html">Home</a>
        <a href='Everything.html'>Everything</a>
          <a href="Grocerie.html">Groceries</a>
          <a href="Juice.html">Juice</a>
          
        </ul>

        <ul class="navIcons">
          <a href="About.html">About</a>
          <a href="contact.html">Contact</a>
          <a Class=totalPrice>Rs. 0.00</a>
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

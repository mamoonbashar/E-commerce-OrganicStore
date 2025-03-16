const BurgerButton = document.querySelector(".BurgerIcon");
BurgerButton.addEventListener("click", function () {
  const sidebar = document.querySelector(".SideBar");
  sidebar.classList.add("active");
  sidebar.style.display = "flex";
});

const closeSideBar = document.querySelector(".Close");
closeSideBar.addEventListener("click", function () {
  const CloseSide = document.querySelector(".SideBar");
  CloseSide.classList.remove("active");
  CloseSide.style.display = "none";
});

const CartSideBar = document.querySelector(".ShoppingSideBar");

const CartContainer = document.querySelector(".CartContainer");
CartContainer.addEventListener("click", function () {
  CartSideBar.style.display = "flex";

  //console.log("is it working");
});

const closeCart = document.querySelector(".CloseCart");
closeCart.addEventListener("click", function () {
  CartSideBar.style.display = "none";
});

// Route For Shopping
const shopNowBtns = document.querySelectorAll(".ShopNow");
shopNowBtns.forEach((ShopNowbutton) => {
  ShopNowbutton.addEventListener("click", function () {
    window.location.href = "Everything.html";
  });
});

// Product Closer View Image Card
const ImageCard = document.querySelectorAll(".ImageCard");
ImageCard.forEach((ProductView) => {
  ProductView.addEventListener("click", function () {
    window.location.href='productView.html'
  });
});

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

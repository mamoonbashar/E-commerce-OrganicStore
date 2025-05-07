import { addToCart } from "./addToCart";
import { increamentQuantity } from "./EverythingQuantity";
import { getCartProductFromLS } from "./getCartProducts";
import { sideCart } from "./removeProduct";
const search = document.querySelector(".Search");
const imageCard = document.querySelectorAll(".ImageCard");
// const searchingFiltering = document.querySelector(".SearchingFiltering");
// const SellingSearching = document.querySelector(".sellingSearching");
const buttonElement = document.querySelector(".buttonElement");
const ParentCard = document.querySelector(".templateCard");
const cardsContainer = document.querySelector("#cardsContainer"); // Visible container
const SnackBar = document.querySelector(".snackBar");

export const showEverythingPage = (products) => {
  if (!products) {
    return false;
  }

  products.forEach((currentElement) => {
    const { id, title, category, price, imageUrl, description, Quantity } =
      currentElement;
    const productsClone = document.importNode(ParentCard.content, true);
    productsClone.querySelector(".name").innerText = title;
    productsClone.querySelector(".category").innerText = category;
    productsClone.querySelector(".imageUrl").src = imageUrl;
    productsClone.querySelector(".price").innerText = price;
    productsClone.querySelector(".description").innerText = description;

    // productsClone.querySelector("#add-to-cart").innerText='Add to Cart'
    const cardElement = productsClone.querySelector(".ImageCard");
    cardElement.classList.add(`card${id}`);
    // console.log("this is the id aded when click on add to cart ", cardElement);

    productsClone
      .querySelector(".add-to-cart")
      .addEventListener("click", () => {
        addToCart(id, Quantity);
        // Show snackbar
        SnackBar.classList.add("show");
        console.log("tis not shwoing", SnackBar);

        // Hide snackbar after 3 seconds
        setTimeout(() => {
          SnackBar.classList.remove("show");
        }, 800);
      });

    // setting  Id
    let setIdIncreament = productsClone.querySelector(".quantity");
    setIdIncreament.setAttribute("id", `card${id}`);
    //console.log(setIdIncreament);

    productsClone
      .querySelector(".quantity")
      .addEventListener("click", (event) => {
        increamentQuantity(event, id);
      });

    cardsContainer.append(productsClone);
  });
};
// Searching Product
document.addEventListener("DOMContentLoaded", function () {
  const errorMessage = document.querySelector(".error-message");
  const buttonElement = document.querySelector(".buttonElement");
  const search = document.querySelector(".Search");
  const RangeEle = document.querySelector(".Range");
  const RangeValue1Ele = document.querySelector("#RangeValue1");

  // MutationObserver to detect dynamic content
  const observer = new MutationObserver(() => {
    const imageCard = document.querySelectorAll(".ImageCard");
    if (imageCard.length > 0) {
      console.log("Image cards detected. Search enabled.");
      observer.disconnect();
      addEventListeners(imageCard);
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  function addEventListeners(imageCard) {
    buttonElement.addEventListener("click", SearchHandler);
    document.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        SearchHandler();
      }
    });

    RangeEle.addEventListener("input", RangeFunction);
    function RangeFunction() {
      RangeValue1Ele.value = RangeEle.value;
    }

    function SearchHandler() {
      const searchValue = search.value.trim().toLowerCase();
      if (!search.value) {
        errorMessage.textContent = "Need a Name or Category";
        errorMessage.style.display = "block";
      } else {
        errorMessage.style.display = "none";
      }

      const rangeValue1Ele = RangeValue1Ele.value
        ? Number(RangeValue1Ele.value)
        : null;

      imageCard.forEach((cards) => {
        const name = cards.querySelector(".name").innerText.toLowerCase();
        const category = cards
          .querySelector(".category")
          .innerText.toLowerCase();
        const price = Number(cards.querySelector(".price").innerText);
        const matchesSearch =
          name.includes(searchValue) || category.includes(searchValue);

        if (rangeValue1Ele === null) {
          cards.style.display = matchesSearch ? "block" : "none";
        } else {
          const matchesRange = price <= rangeValue1Ele;
          cards.style.display =
            matchesSearch && matchesRange ? "block" : "none";
        }
      });
    }
  }
});

const BurgerButton = document.querySelector(".burgerIconContainer");
BurgerButton.addEventListener("click", function () {
  const sidebar = document.querySelector(".SideBar");
  sidebar.style.display = "flex";
  sidebar.classList.add("active");
  //console.log("open");
});

const closeSideBar = document.querySelector(".Close");
closeSideBar.addEventListener("click", function () {
  const CloseSide = document.querySelector(".SideBar");
  CloseSide.classList.remove("active");
  //console.log("closed");
});

const CartContainer = document
  .querySelectorAll(".CartContainer")
  .forEach((CartContainer) => {
    CartContainer.addEventListener("click", function (e) {
      const CartSideBar = document.querySelector(".ShoppingSideBar");
      CartSideBar.style.display = "flex";
      CartSideBar.classList.add("active");
      e.stopPropagation();
      console.log("shopping side bar oopen ");
    });
  });

const closeCart = document.querySelector(".CloseCart");
closeCart.addEventListener("click", function () {
  const CartSideBar = document.querySelector(".ShoppingSideBar");
  CartSideBar.style.display = "none";
  CartSideBar.classList.remove("active");

  //console.log("shopping side bar close ");
});

// update Cart Count

function updateCart() {
  setTimeout(() => {
    let arrLocalStorage = getCartProductFromLS();
    document.querySelectorAll(".cart-count").forEach((cartValue) => {
      Number((cartValue.innerText = arrLocalStorage.length));
    });
  }, 100); // 100ms delay
}
updateCart();
// document.querySelectorAll(".add-to-cart").forEach((button) => {
//   button.addEventListener("click", function () {
//     updateCart();
//     console.log("this cart Quantity length", button);
//   });
// });
document.body.addEventListener("click", function (event) {
  if (event.target.classList.contains("add-to-cart")) {
    updateCart();
  }
});
// Quick Product Card
const QuickPorductsTemplate = document.querySelector(".quickProducts");
const QuickCartParent = document.querySelector("#productCardContainer");

const renderQuickProducts = () => {
  let filterProducts = getCartProductFromLS();

  filterProducts.forEach((curProduct) => {
    let { id, name, price, imageUrl } = curProduct;
    // console.log("these are local storage products", curProduct);

    const QuickProductClone = document.importNode(
      QuickPorductsTemplate.content,
      true
    );

    QuickProductClone.querySelector(".productName").innerText = name;
    QuickProductClone.querySelector(".productCardImage").src = imageUrl;

    QuickProductClone.querySelector("#deleteBtn").addEventListener(
      "click",
      () => {
        const removeItem = document.querySelector(".sideCartProducts");
        // console.log(removeItem, "list items");
        removeItem.classList.add(`list${id}`);
        sideCart(id);
        updateCart();
      }
    );

    QuickCartParent.appendChild(QuickProductClone);
  });
};
renderQuickProducts();
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    renderQuickProducts();
  });
});

// Dark Mode Code
// const getToggleSwitch = document.querySelector(".toggleDarkMode");

// // Remove old style tag if it exists
// function removeExistingStyleTag() {
//   const existingStyle = document.getElementById("theme-style");
//   if (existingStyle) {
//     existingStyle.remove();
//   }
// }

// function applyDarkMode() {
//   removeExistingStyleTag();
//   const style = document.createElement("style");
//   style.id = "theme-style";
//   style.textContent = `
//     * {
//       color: white;
//     }

//     body {
//       background-color: #000000f5;
//       color: white;
//       transition: background-color 0.5s ease-in-out;
//     }

//     .ImageContent {
//       background-color: black;
//       color: white;
//     }

//     #nav {
//       background-color: #000000f5;
//       color: white;
//     }

//     .navIcons a,
//     .fa-solid.fa-bars,
//     .fa-solid.fa-basket-shopping,
//     .fa-regular.fa-star {
//       color: white !important;
//     }

//     .quickCartProducts ul li {
//       background-color: #000000f5;
//       color: white;
//     }
//   `;
//   document.head.appendChild(style);
// }

// function applyLightMode() {
//   removeExistingStyleTag();
//   const style = document.createElement("style");
//   style.id = "theme-style";
//   style.textContent = `
//     * {
//       color: black;
//     }

//     body {
//       background-color: white;
//       color: black;
//       transition: background-color 0.5s ease-in-out;
//     }

//     .ImageContent {
//       background-color: #f4fbf3;
//       color: black;
//     }

//     #nav {
//       background-color: rgb(244, 251, 243);
//       color: black;
//     }

//     .navIcons a,
//     .fa-solid.fa-bars,
//     .fa-solid.fa-basket-shopping,
//     .fa-regular.fa-star {
//       color: black !important;
//     }

//     .quickCartProducts ul li {
//       background-color: rgb(244, 251, 243);
//       color: black;
//     }
//   `;
//   document.head.appendChild(style);
// }

// // Apply theme on page load
// const savedTheme = localStorage.getItem("theme");
// if (savedTheme === "dark") {
//   getToggleSwitch.classList.add("turnDark");
//   applyDarkMode();
// } else {
//   getToggleSwitch.classList.remove("turnDark");
//   applyLightMode();
// }

// // Add event listener for toggle
// getToggleSwitch.addEventListener("click", function () {
//   const isDarkMode = getToggleSwitch.classList.toggle("turnDark");

//   if (isDarkMode) {
//     applyDarkMode();
//     localStorage.setItem("theme", "dark");
//   } else {
//     applyLightMode();
//     localStorage.setItem("theme", "light");
//   }

//   // console.log("this is else loop ")
// });

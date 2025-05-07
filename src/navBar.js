import { getCartProductFromLS } from "./getCartProducts";

const print1 = getCartProductFromLS();
const totalPriceofAllProduct = document.querySelectorAll(".totalPrice");

const SumofProducts = print1.map((getQuantityPrice) => {
  return getQuantityPrice.price * getQuantityPrice.quantity;
});
let FinalPaybleAmount = SumofProducts.reduce(
  (acc, addition) => acc + addition,
  0
);

totalPriceofAllProduct.forEach((totalProductinnerText) => {
  totalProductinnerText.innerText =
    `\u20B9` + parseFloat(FinalPaybleAmount).toFixed(2);
});
const getToggleSwitch = document.querySelector(".toggleDarkMode");
function removeExistingStyleTag() {
  const existingStyle = document.getElementById("theme-style");
  if (existingStyle) {
    existingStyle.remove();
  }
}
function applyDarkMode() {
  removeExistingStyleTag();
  const style = document.createElement("style");
  style.id = "theme-style";
  style.textContent = `
    * {
      color: white;
      
    }

    body {
      background-color: #000000f5;
      color: white;
      transition: background-color 0.5s ease-in-out;
    }
#GrocerieContainer{
  background-color: black;
  color: white;
}
  .GroceryCard{
  background-color: #000000f5;
  color: white;
  }
  .Trend-Heading{
  background-color: #000000f5;
  color: white;
  }
    .ImageContent {
      background-color: black;
      color: white;
    }

    #nav {
      background-color: #000000f5;
      color: white;
    }

    .navIcons a,
    .fa-solid.fa-bars,
    .fa-solid.fa-basket-shopping,
    .fa-regular.fa-star {
      color: white !important;
    }

    .quickCartProducts ul li {
      background-color: #000000f5;
      color: white;
    }

    .Search{
    color:black 
    }
    #RangeValue1{
    color:black;
    }
    .ShowQuantity{
    color:black;
    }
    .SliderContent{
    background:#0f0f0f
    }
    tr{
      color:black;
       background-color: #000000f5;
      }
       .truckAnimation{
       fill:white  
            }
  `;
  document.head.appendChild(style);
}

function applyLightMode() {
  removeExistingStyleTag();
  const style = document.createElement("style");
  style.id = "theme-style";
  style.textContent = `
    * {
      color: black;
    }

    body {
      background-color: white;
      color: black;
      transition: background-color 0.5s ease-in-out;
    }

    .ImageContent {
      background-color: #f4fbf3;
      color: black;
    }
      


    #nav {
      background-color: rgb(244, 251, 243);
      color: black;
    }

    .navIcons a,
    .fa-solid.fa-bars,
    .fa-solid.fa-basket-shopping,
    .fa-regular.fa-star {
      color: black !important;
    }

    .quickCartProducts ul li {
      background-color: rgb(244, 251, 243);
      color: black;
    }
      .truckAnimation{
       fill:black
       }
  `;
  document.head.appendChild(style);
}

// Apply theme on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  getToggleSwitch.classList.add("turnDark");
  applyDarkMode();
} else {
  getToggleSwitch.classList.remove("turnDark");
  applyLightMode();
}

// Add event listener for toggle
getToggleSwitch.addEventListener("click", function () {
  const isDarkMode = getToggleSwitch.classList.toggle("turnDark");

  if (isDarkMode) {
    applyDarkMode();
    localStorage.setItem("theme", "dark");
  } else {
    applyLightMode();
    localStorage.setItem("theme", "light");
  }

  // console.log("this is else loop ")
});

import { fetchQuantityFromLS } from "./fetchQuantityFromLS";
import { getCartProductFromLS } from "./getCartProducts";
const inputElement = document.querySelectorAll("input");
const userForm = document.querySelector("#userForm");
const getSubmitbtn = document.querySelector("#userForm button");
const spanElement = document.createElement("span");
spanElement.style.color = "red";
 

// Set IDs for inputs
inputElement.forEach((input, index) => {
  input.setAttribute("id", `inputId-${index}`);
});

// Form validation on submit
userForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;

  inputElement.forEach((input, index) => {
    const inputType = input.type;
    const inputValue = input.value.trim();

    // Text Input Validation
    if (inputType === "text") {
      if (inputValue === "") {
        input.style.border = "1px solid red";
        input.placeholder = "Field can't be empty";
        isValid = false;
      } else if (inputValue.length < 3) {
        alert(`Input at ${index + 1} should be more than 3 characters`);
        isValid = false;
      }
    }

    // Number Input Validation (Phone & PIN Code)
    if (inputType === "number") {
      if (input.id === "inputId-8") { // Phone Number Validation
        if (inputValue === "") {
          alert("Phone Number cannot be empty.");
          isValid = false;
        } else if (inputValue.length !== 10) {
          alert("Phone Number should be exactly 10 digits.");
          isValid = false;
        }
      }
    }

    // Email Validation
    if (inputType === "email") {
      if (!inputValue.includes("@") || !inputValue.endsWith(".com")) {
        alert("Enter a valid Email address.");
        isValid = false;
      }
    }
  });

  if (isValid) {
    alert("Form submitted successfully!");
    window.location.href = "orderPlaced.html";
  }
});

// Total price and placeorder

const print1 = getCartProductFromLS();

const tableBodyData = document.querySelector("tbody td");

let productNames = print1.map((product) => product.name).join(", ");

tableBodyData.innerText = productNames;

const totalPriceofAllProduct = document.querySelectorAll(".totalPrice");

const SumofProducts = print1.map((getQuantityPrice) => {
  return getQuantityPrice.price * getQuantityPrice.quantity;
});
let FinalPaybleAmount = SumofProducts.reduce(
  (acc, addition) => acc + addition,
  0
);

totalPriceofAllProduct.forEach((totalProductinnerText) => {
  totalProductinnerText.innerText = `\u20B9`+(parseFloat(FinalPaybleAmount).toFixed(2));
});

// Payment Option

let radioBtns = document.querySelectorAll("input[name='payment']");
let findSelected = () => {
  let selected = document.querySelector("input[name='payment']:checked");
};

radioBtns.forEach((radioBtns) => {
  radioBtns.addEventListener("change", findSelected);
});
findSelected();
 document
  .querySelector(".YourOrder .placeOrder button")
  .addEventListener("click", function () {
    window.location.href = "orderPlaced.html";
  });
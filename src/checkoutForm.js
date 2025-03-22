import { fetchQuantityFromLS } from "./fetchQuantityFromLS";
import { getCartProductFromLS } from "./getCartProducts";
const inputElement = document.querySelectorAll("input");
const userForm = document.querySelector("#userForm");
const getSubmitbtn = document.querySelector("#userForm button");
const spanElement = document.createElement("span");
spanElement.style.color = "red";
inputElement.forEach((input, index) => {
  input.setAttribute("id", `inputId-${index}`);
  input.addEventListener("click", function () {
    // validationForm(input, index);
    getSubmitbtn.addEventListener("click", function () {
      validationForm(input, index);
    });
  });
});

function validationForm(input, index) {
  const InputTypeElement = input.type;
  const inputElement = input;
  //console.log(inputElement);
  const verify = inputElement.value.trim();

  if (InputTypeElement === "text") {
    if (verify === "") {
      // console.log("it cant be empty");
      inputElement.value = "it can't be empty";
      inputElement.style.color = `gray`;
      inputElement.style.border = `1px solid salmon`;
    } else if (verify.length < 3) {
      console.log("shold be more than the 3 characters");
    }
  }
  if (InputTypeElement === "number") {
    const phoneNumber = document.querySelector(`#inputId-8`).value.trim();

    if (phoneNumber.value === "") {
      console.log("it cant be empyt");
    } else if (phoneNumber.length < 10 || phoneNumber.length > 10) {
      console.log("Phone Number should be at least 10 digits");
    }
  }
  if (InputTypeElement === "email") {
    const emailElement = document.querySelector(`#inputId-9`);
    let emailVerification = emailElement.value;

    if (emailVerification.includes("@", ".com")) {
      console.log("yes it has .com and @");
    } else {
      console.log("write a valid email id ");
    }
  }
}

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

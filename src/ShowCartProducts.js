import products from "../api.json";
import { fetchQuantityFromLS } from "./fetchQuantityFromLS";
import { getCartProductFromLS } from "./getCartProducts";
import { increamentQuantity } from "./QuantityControl";
import { removeProductFromCart } from "./removeProduct";
import { perProductPrice } from "./totalPerProductPrice";
const tableContent = document.querySelector(".tableRowBody");
const templateCard = document.querySelector(".templateCloneCard");
const smallScreenTemplate = document.querySelector(".templateSmallScreen");

let filterProducts = products.filter((curProd) => {
  let cartProdcuts = getCartProductFromLS();

  return cartProdcuts.some(
    (curElem) => Number(curElem.id) === Number(curProd.id)
  );
});

const ShowCartProduct = () => {
  filterProducts.forEach((curProd) => {
    const { id, imageUrl, title, price } = curProd;
    let productsClone = document.importNode(templateCard.content, true);
    // console.log("this is product id " + curProd.id);
    let perPorductPrice = 0;
    let LSactualData = fetchQuantityFromLS(id, price, perPorductPrice);
    productsClone
      .querySelector(".quantity")
      .setAttribute("id", `ProductList${id}`);
    productsClone.querySelector(".imageUrl").src = imageUrl;
    productsClone.querySelector(".title").innerText = title;
    productsClone.querySelector(".ShowQuantity").value = LSactualData.quantity;

    let priceOfProduct = `\u20B9${price}`;
    Number(
      (productsClone.querySelector(".price").innerText = LSactualData.price)
    );
    let priceofThis = Number(priceOfProduct.replace(`\u20B9`, ""));
    // allProductsPrice.push(priceofThis);

    // let total=Number(productsClone.querySelector(".totalProductPrice").innerText);
    // console.log( total)

    let deleteButton = productsClone.querySelector("#deleteBtn");

    if (deleteButton) {
      deleteButton.addEventListener("click", () => {
        // console.log("is it clicking ");
        removeProductFromCart(id);
      });
    } else {
      console.log("Delete button not found!");
    }

    // setting id on a particular row "tr" tag
    productsClone.querySelector("tr").setAttribute("id", `card${id}`);

    productsClone.querySelector("#deleteBtn").addEventListener("click", () => {
      // console.log("is it clicking ");

      removeProductFromCart(id);
    });

    let showTotal = productsClone.querySelectorAll(".totalProductPrice");

    showTotal.forEach((TotalProductPriceElements) => {
      TotalProductPriceElements.setAttribute("id", `NewTotalProductPrice${id}`);
    });

    // Still not resolved
    // PerProductCalulation(id, price, showTotal);
    productsClone
      .querySelector(".quantity")
      .addEventListener("click", (event) => {
        increamentQuantity(id, event, priceofThis, showTotal);
      });

    // grandTotal(id);
    //  grandTotal()

    // Small Screen dynamic Products
    let smallScreenClone = document.importNode(
      smallScreenTemplate.content,
      true
    );

    smallScreenClone.querySelector(".imageUrl").src = imageUrl;
    smallScreenClone.querySelector(".title").innerText = title;
    smallScreenClone.querySelector(".ShowQuantity").value =
      LSactualData.quantity;
    Number(
      (smallScreenClone.querySelector(".price").innerText = LSactualData.price)
    );
    let smallShowTotal =
      smallScreenClone.querySelectorAll(".totalProductPrice");
    smallShowTotal.forEach((TotalProductPriceElements) => {
      TotalProductPriceElements.setAttribute(
        "id",
        `SmallNewTotalProductPrice${id}`
      );
    });
    smallScreenClone
      .querySelector(".quantity")
      .setAttribute("id", `SmallScreenProduct${id}`);
    smallScreenClone
      .querySelector(".quantity")
      .addEventListener("click", (event) => {
        increamentQuantity(id, event, priceofThis, smallShowTotal);
      });
    smallScreenClone
      .querySelector(".smallScreenProduct")
      .setAttribute("id", `smallscreen${id}`);

    smallScreenClone
      .querySelector("#deleteBtn")
      .addEventListener("click", () => {
        removeProductFromCart(id);
      });

    document.querySelector(".smallScreen").appendChild(smallScreenClone);
    tableContent.appendChild(productsClone);

    showTotal.forEach((Prod) => {
      // console.log("%%%", Prod);
      let PerProductTotal = parseFloat(
        priceofThis * LSactualData.quantity
      ).toFixed(2);
      Prod.innerText = `\u20B9${PerProductTotal}`;
      //console.log("this is the complete Value", PerProductTotal);
    });
    smallShowTotal.forEach((Prod) => {
      // console.log("%%%", Prod);
      let PerProductTotal = parseFloat(
        priceofThis * LSactualData.quantity
      ).toFixed(2);
      Prod.innerText = `\u20B9${PerProductTotal}`;
      //console.log("this is the complete Value", PerProductTotal);
    });

    perProductPrice(id);
  });
};
// Changing Route to  SignUp Form
const selectTruck = document.querySelector(".truckAnimation");

document.querySelector(".Checkout").addEventListener("click", truckTransiton);
function truckTransiton() {
  selectTruck.style.animationName = "truck";
  console.log('truck'+selectTruck)
  setTimeout(() => {
    window.location.href = "/CheckoutForm.html";
  }, 2000);
}

// console.log(filterProducts);

ShowCartProduct();

import products from "../api.json";
import { fetchQuantityFromLS } from "./fetchQuantityFromLS";
import { getCartProductFromLS } from "./getCartProducts";
import { increamentQuantity } from "./QuantityControl";
import { removeProductFromCart } from "./removeProduct";
import { perProductPrice } from "./totalPerProductPrice";
const tableContent = document.querySelector(".tableRowBody");
const templateCard = document.querySelector(".templateCloneCard");

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
      // console.log('chalo yrr',chalbheeja)
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

    tableContent.appendChild(productsClone);
    showTotal.forEach((Prod) => {
      // console.log("%%%", Prod);
      let PerProductTotal = priceofThis * LSactualData.quantity;
      Prod.innerText = `\u20B9${PerProductTotal}`;
      //console.log("this is the complete Value", PerProductTotal);
    });

    perProductPrice(id);
  });
};

// console.log(filterProducts);

ShowCartProduct();

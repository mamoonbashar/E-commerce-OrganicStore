import { fetchQuantityFromLS } from "./fetchQuantityFromLS";

export const perProductPrice = (id) => {
  const fectchContainer1 = document.querySelector(`#NewTotalProductPrice${id}`);

  const ActualData = fetchQuantityFromLS(id, perProductPrice, perProductPrice);

  //fectchContainer1.innerText = `\u20B9` + ActualData.perProductPrice;
  SumOfAll();
};

export function SumOfAll() {
  const fectchContainer1 = document.querySelectorAll(
    `[id^='NewTotalProductPrice']`
  );
  let totalSum = 0;
  // Iterate through each element to calculate the total sum
  fectchContainer1.forEach((element) => {
    let priceValue = Number(element.innerText.replace(`\u20B9`, ""));
    totalSum += priceValue; // Add each product price
    totalSum = parseFloat(totalSum.toFixed(2));
  });
  document.querySelectorAll(".OrderDetails p").forEach((total) => {
    total.innerText = `\u20B9` + totalSum;
  });
}

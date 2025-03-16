const DescriptionHeading = document.querySelector(".DescriptionHeading ");
const ReviewHeading = document.querySelector(".ReviewHeading");
const customerDescription = document.querySelector("#showDescription");
const ReviewDescription = document.querySelector("#showReview");
DescriptionHeading.addEventListener("click", function () {
  customerDescription.style.display =
    customerDescription.style.display === "none" ||
    customerDescription.style.display === ""
      ? "flex"
      : "none";
});
ReviewHeading.addEventListener("click", function () {
  ReviewDescription.style.display =
    ReviewDescription.style.display === "none" ||
    ReviewDescription.style.display === ""
      ? "flex"
      : "none";
});

// SELECT ELEMENT
const newArrivals = document.getElementById("new-arrivals")


window.addEventListener("load", async function () {
  const data = await fetch("https://dummyjson.com/products?limit=4")
  const products = await data.json();
  const productArray = products.products;

  for (let i = 0; i < productArray.length; i++) {

    // ****************************************************************
    // Create the main card container
    const productCard = document.createElement("div");
    productCard.classList.add("product-card")
    // ****************************************************************

    // Create an anchor tag for the link
    const productLink = document.createElement("a");
    productLink.setAttribute("href", `product-page.html?id=${productArray[i].id}`);
    // ****************************************************************

    // Create and set product image
    const productImage = document.createElement("img");
    productImage.setAttribute("src", productArray[i].thumbnail);
    productImage.setAttribute("alt", productArray[i].title);
    productLink.appendChild(productImage);

    // ****************************************************************
    // Create the card body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // ****************************************************************
    // Add product title
    const productTitle = document.createElement("h3");
    productTitle.textContent = productArray[i].title;
    productTitle.classList.add("product-title");

    // Add product rating
    // const productRating = document.createElement("p");
    // productRating.textContent = `Rating: ⭐${productArray[i].rating}`;
    // productRating.classList.add("product-rating");



    // Add product rating
    const productRating = document.createElement("div");
    productRating.classList.add("rating");
    productRating.style.setProperty("--rating", productArray[i].rating); // Set the custom property for rating
    productRating.setAttribute("aria-label", `Rating: ${productArray[i].rating} out of 5`);




    // Add product price
    // const productPrice = document.createElement("p");
    // productPrice.textContent = `$${productArray[i].price}`;
    // productPrice.classList.add("product-price");



    // Conversion factor from USD to INR
    const conversionRate = 74; // Update this rate as needed

    // Add product price in rupees
    const productPrice = document.createElement("p");
    const priceInRupees = productArray[i].price * conversionRate;
    productPrice.textContent = `₹${priceInRupees.toFixed(2)}`; // Format to 2 decimal places
    productPrice.classList.add("product-price");



    // ******************************************************************

    // Assemble the card
    cardBody.append(productTitle, productRating, productPrice);
    // ******************************************************************
    productCard.append(productLink, cardBody);

    // Append the card to the parent container
    newArrivals.appendChild(productCard);
    // ****************************************************************
  }
  console.log(productArray);
})
// ****************************************************************

// TOP SEARCH CARD


const topSelling = document.getElementById("top-selling");

window.addEventListener("load", async function () {
  try {
    const data = await fetch("https://dummyjson.com/products?sort=desc&limit=4&skip=12");
    const products = await data.json();
    const productArray = products.products;

    for (let i = 0; i < productArray.length; i++) {
      // ****************************************************************
      // Create card container
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");

      // ****************************************************************

      // Create an anchor tag for the link
      const productLink = document.createElement("a");
      productLink.setAttribute("href", `product-page.html?id=${productArray[i].id}`);
      // ****************************************************************

      // Create and set product image
      const productImage = document.createElement("img");
      productImage.setAttribute("src", productArray[i].thumbnail);
      productImage.setAttribute("alt", productArray[i].title);
      productLink.appendChild(productImage);

      // ****************************************************************
      // Create the card body
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      // Create and set product title
      const titlePara = document.createElement("h3");
      titlePara.textContent = productArray[i].title;
      titlePara.classList.add("product-title");

      // Create and set product rating
      // const ratingPara = document.createElement("p");
      // ratingPara.textContent = `Rating: ${productArray[i].rating} ⭐`;
      // ratingPara.classList.add("product-rating");


      const ratingPara = document.createElement("div");
      ratingPara.classList.add("rating");
      ratingPara.style.setProperty("--rating", productArray[i].rating); // Set the custom property for rating
      ratingPara.setAttribute("aria-label", `Rating: ${productArray[i].rating} out of 5`);




      // Create and set product price
      // const pricePara = document.createElement("p");
      // pricePara.textContent = `$${productArray[i].price}`;
      // pricePara.classList.add("product-price");

      const conversionRate = 74;

      const pricePara = document.createElement("p")
      const priceInRupees = productArray[i].price * conversionRate;
      pricePara.textContent = `₹${priceInRupees.toFixed(2)}`;
      pricePara.classList.add("product-price")

      // *********************************************************************



      cardBody.append(titlePara, ratingPara, pricePara);

      // Append all elements to the card container
      productCard.append(productLink, cardBody);

      // Append the card container to the "top-selling" div
      topSelling.append(productCard);
    }
  } catch (error) {
    console.error("Error fetching product data:", error);
  }
});




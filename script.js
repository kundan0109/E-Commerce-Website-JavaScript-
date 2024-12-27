

// // SELECT ELEMENT
// const newArrivals = document.getElementById("new-arrivals")


// window.addEventListener("load", async function () {
//   const data = await fetch("https://dummyjson.com/products?limit=4")
//   const products = await data.json();
//   const productArray = products.products;

//   for (let i = 0; i < productArray.length; i++) {

//     // ****************************************************************
//     // Create the main card container
//     const productCard = document.createElement("div");
//     productCard.classList.add("product-card")
//     // ****************************************************************

//     // Create an anchor tag for the link
//     const productLink = document.createElement("a");
//     productLink.setAttribute("href", `product-page.html?id=${productArray[i].id}`);
//     // ****************************************************************

//     // Create and set product image
//     const productImage = document.createElement("img");
//     productImage.setAttribute("src", productArray[i].thumbnail);
//     productImage.setAttribute("alt", productArray[i].title);
//     productLink.appendChild(productImage);

//     // ****************************************************************
//     // Create the card body
//     const cardBody = document.createElement("div");
//     cardBody.classList.add("card-body");

//     // ****************************************************************
//     // Add product title
//     const productTitle = document.createElement("h3");
//     productTitle.textContent = productArray[i].title;
//     productTitle.classList.add("product-title");

//     // Add product rating
//     // const productRating = document.createElement("p");
//     // productRating.textContent = `Rating: ⭐${productArray[i].rating}`;
//     // productRating.classList.add("product-rating");



//     // Add product rating
//     const productRating = document.createElement("div");
//     productRating.classList.add("rating");
//     productRating.style.setProperty("--rating", productArray[i].rating); // Set the custom property for rating
//     productRating.setAttribute("aria-label", `Rating: ${productArray[i].rating} out of 5`);




//     // Add product price
//     // const productPrice = document.createElement("p");
//     // productPrice.textContent = `$${productArray[i].price}`;
//     // productPrice.classList.add("product-price");



//     // Conversion factor from USD to INR
//     const conversionRate = 74; // Update this rate as needed

//     // Add product price in rupees
//     const productPrice = document.createElement("p");
//     const priceInRupees = productArray[i].price * conversionRate;
//     productPrice.textContent = `₹${priceInRupees.toFixed(2)}`; // Format to 2 decimal places
//     productPrice.classList.add("product-price");



//     // ******************************************************************

//     // Assemble the card
//     cardBody.append(productTitle, productRating, productPrice);
//     // ******************************************************************
//     productCard.append(productLink, cardBody);

//     // Append the card to the parent container
//     newArrivals.appendChild(productCard);
//     // ****************************************************************
//   }
//   console.log(productArray);
// })
// // ****************************************************************

// *****************************************************************************************************
// #################################################################################################################################
// #################################################################################################################################
// #################################################################################################################################
// #################################################################################################################################
// #################################################################################################################################
// #################################################################################################################################
// #################################################################################################################################
// #################################################################################################################################


// THIS WILL BE THE CODE AFTER ADDING VIEW ALL BUTTON 

// SELECT ELEMENT
const newArrivals = document.getElementById("new-arrivals");
const showMoreBtn = document.getElementById("show-more-btn");

let allProducts = []; // To store all fetched products
let isExpanded = false; // To track whether the view is expanded

// Fetch and initialize products
window.addEventListener("load", async function () {
  const data = await fetch("https://dummyjson.com/products?limit=16");
  const products = await data.json();
  allProducts = products.products;

  renderProducts(4); // Initially show only 4 products
});

// Function to render a specific number of products
function renderProducts(count) {
  newArrivals.innerHTML = ""; // Clear existing products

  for (let i = 0; i < count && i < allProducts.length; i++) {
    // Create the main card container
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    // Create an anchor tag for the link
    const productLink = document.createElement("a");
    productLink.setAttribute("href", `product-page.html?id=${allProducts[i].id}`);

    // Create and set product image
    const productImage = document.createElement("img");
    productImage.setAttribute("src", allProducts[i].thumbnail);
    productImage.setAttribute("alt", allProducts[i].title);
    productLink.appendChild(productImage);

    // Create the card body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // Add product title
    const productTitle = document.createElement("h3");
    productTitle.textContent = allProducts[i].title;
    productTitle.classList.add("product-title");

    // Add product rating
    const productRating = document.createElement("div");
    productRating.classList.add("rating");
    productRating.style.setProperty("--rating", allProducts[i].rating);
    productRating.setAttribute("aria-label", `Rating: ${allProducts[i].rating} out of 5`);

    // Add product price in rupees
    const conversionRate = 74; // Update this rate as needed
    const productPrice = document.createElement("p");
    const priceInRupees = allProducts[i].price * conversionRate;
    productPrice.textContent = `₹${priceInRupees.toFixed(2)}`;
    productPrice.classList.add("product-price");

    // Assemble the card
    cardBody.append(productTitle, productRating, productPrice);
    productCard.append(productLink, cardBody);

    // Append the card to the parent container
    newArrivals.appendChild(productCard);
  }
}

// Event listener for Show More/Show Less button
showMoreBtn.addEventListener("click", function () {
  if (isExpanded) {
    renderProducts(4); // Show only 4 products
    showMoreBtn.textContent = "Show More"; // Update button text
  } else {
    renderProducts(16); // Show all 16 products
    showMoreBtn.textContent = "Show Less"; // Update button text
  }
  isExpanded = !isExpanded; // Toggle the state
});


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




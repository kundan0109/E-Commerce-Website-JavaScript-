

const productSection = document.querySelector('.product-section');


window.addEventListener("load", async () => {
  const splittedArray = window.location.href.split("?");
  const idPart = splittedArray[1].split("=");
  const id = idPart[1];
  console.log(id);


  try {
    const data = await fetch(`https://dummyjson.com/products/${id}`);
    const product = await data.json();

    productSection.innerHTML = `<div class="product-img">
<img src=${product.thumbnail}  alt="eye">
</div>


<div class="product-details">
  <p>${product.title}</p>
  <p>${product.rating}</p>
  <p>${product.price}</p>
  <p>${product.description}</p>

 </div>`;


    const productDetailsContainer = document.querySelector(".product-details");

    // Create star rating element
    const productRating = document.createElement("div");
    productRating.classList.add("rating");
    productRating.style.setProperty("--rating", product.rating); // Set rating dynamically
    productRating.setAttribute("aria-label", `Rating: ${product.rating} out of 5`);

    // Populate product details
    productDetailsContainer.innerHTML = `
  <p>${product.title}</p>
  <div>${productRating.outerHTML}</div> <!-- Insert star rating -->
  <p>₹${(product.price * 74).toFixed(2)}</p> <!-- Price converted to INR -->
  <p>${product.description}</p>
`;



  }
  catch (error) {
    console.error("Error fetching product data:", error);
    return;
  }

})




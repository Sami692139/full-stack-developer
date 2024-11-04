function displayForm(show, hideOne, hideTwo, hideThree) {
	document.getElementsByClassName(show)[0].style.display = "block";
	document.getElementsByClassName(hideOne)[0].style.display = "none";
	document.getElementsByClassName(hideTwo)[0].style.display = "none";
	document.getElementsByClassName(hideThree)[0].style.display = "none";
}


// Function to retrieve products and display them on the page
function fetchProducts() {
    fetch("http://localhost:3305/getiphones") // The backend route for fetching products
    .then((response) => response.json())
    .then((data) => {
        const dataSection = document.getElementById("data"); // The section where you want to display the data
        dataSection.innerHTML = ""; // Clear any previous content

        if (data.length > 0) {
        data.forEach((product) => {
            // Create a card or section for each product
            const productCard = document.createElement("div");
            productCard.classList.add("card", "my-3", "p-3"); // Bootstrap card class for styling

            // Create the content for the product card
            productCard.innerHTML = `
                    <h3>${product.product_name}</h3>
                    <p><strong>Product URL:</strong> <a href="${product.product_url}" target="_blank">${product.product_url}</a></p>
                    <p><strong>Brief Description:</strong> ${product.product_brief_description}</p>
                    <p><strong>Description:</strong> ${product.product_description}</p>
                    <img src="${product.product_img}" alt="Product Image" width="150" />
                    <p><strong>Product Link:</strong> <a href="${product.product_link}" target="_blank">${product.product_link}</a></p>
                    <p><strong>Starting Price:</strong> $${product.starting_price}</p>
                    <p><strong>Price Range:</strong> ${product.price_range}</p>
                    
                `;

            // Append the product card to the section
            dataSection.appendChild(productCard);
            });
        } else {
            dataSection.innerHTML = "<p>No products available.</p>";
        }
        })
        .catch((error) => {
        console.error("Error fetching products:", error);
        });
}

// Call the fetchProducts function when the page loads or when needed

 
document.getElementById("list").addEventListener("click", fetchProducts);

const openFormLink = document.getElementById("openFormLink");
const form = document.getElementById("newForm");

// Add event listener to the link
openFormLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the link's default behavior
  form.style.display = "block"; // Show the form
});
function edit(e) {
	e.preventDefault();
	fetch("http://localhost:3305/update", {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      product_id: document.querySelector("#myForm input[name=id]").value,
      product_name: document.querySelector("input[name=updatedName]").value,
    }),
  })
    .then((response) => response.json())
    .then(() => alert("Product Updated!"));

	document.getElementById("myForm").reset();
}

document.getElementById("myForm").addEventListener("submit", edit);